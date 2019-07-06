import React from "react";
import styled from "styled-components";

const SpriteContainer = styled.div`
  width: ${props => props.width * props.scale}px;
  height: ${props => props.height * props.scale}px;
`;

const Sprite = styled.div`
  background: url(${props => props.sheet}) -${props =>
      props.row * props.height}px -${props => props.col * props.width}px;
  image-rendering: pixelated;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  transform: scale(${props => props.scale});
  transform-origin: top left;
`;

class SpriteSheet {
  constructor({ sheet, width, height, tileWidth, tileHeight }) {
    this.sheet = sheet;
    this.width = width;
    this.height = height;
    this.tileWidth = tileWidth;
    this.tileHeight = tileHeight;
  }

  get(row, col, scale) {
    return (
      <SpriteContainer
        height={this.tileHeight}
        width={this.tileWidth}
        scale={scale}
      >
        <Sprite
          height={this.tileHeight}
          width={this.tileWidth}
          sheet={this.sheet}
          row={row}
          col={col}
          scale={scale}
        />
      </SpriteContainer>
    );
  }
}

export default SpriteSheet;
