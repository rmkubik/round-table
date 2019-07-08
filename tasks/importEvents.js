const fs = require("fs").promises;
const path = require("path");
const watch = require("watch");
const j = require("jscodeshift");
const camelCase = require("lodash/camelCase");

const eventsDir = "./assets/events";
const outputDir = "./src/events";

const updateImportFile = async () => {
  try {
    // read all yaml files
    const files = await fs.readdir(eventsDir);

    // get their names and file paths
    const fileEntries = files.map(file => ({
      key: camelCase(path.basename(file, ".yaml")),
      filePath: `${eventsDir}/${file}`
    }));

    // build imports with jscodeshift
    const imports = fileEntries.map(({ key, filePath }) =>
      j.importDeclaration(
        [j.importDefaultSpecifier(j.identifier(key))],
        j.literal(path.relative(outputDir, filePath))
      )
    );

    // build exports with jscodeshift
    const exports = fileEntries.map(({ key }) => {
      const exportStatement = j.objectProperty(
        j.identifier(key),
        j.identifier(key)
      );
      exportStatement.shorthand = true;

      return exportStatement;
    });

    const defaultExportObject = j.exportDefaultDeclaration(
      j.objectExpression(exports)
    );

    // build ast with jscodeshift
    const program = j.program([...imports, defaultExportObject]);
    const root = j(program);
    const js = root.toSource();

    // writeFile
    fs.writeFile(`${outputDir}/list.js`, js);
  } catch (err) {
    console.error(err);
  }
};

watch.createMonitor(`${eventsDir}`, function(monitor) {
  monitor.on("created", function(f, stat) {
    // Handle new files
    updateImportFile();
  });
  // parcel should already handle this case
  // monitor.on("changed", function(f, curr, prev) {
  //   // Handle file changes
  //   console.log(f, stat);
  // });
  monitor.on("removed", function(f, stat) {
    // Handle removed files
    updateImportFile();
  });
  // monitor.stop(); // Stop watching
});
