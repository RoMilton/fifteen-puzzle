// grid of numbers

import React, { PropTypes } from 'react';
import Tile from './Tile.jsx';

const Grid = (props) => {
  return (
    <div className = "grid">
      { props.tiles.map((tileNumber, index) => (
          <Tile
            key={index}
            text= {tileNumber}
            onTileClick= {props.onTileClick}
            empty= { (props.tiles.length === tileNumber) }
            width= { (1 / props.colCount) }
          />
        ))
      }
    </div>
  );
};

Grid.propTypes = {
  tiles: PropTypes.arrayOf(PropTypes.number).isRequired, // array of numbers, in order
  colCount: PropTypes.number.isRequired, // number of columns
  onTileClick: PropTypes.func, // fired when tile is clicked
};

export default Grid;
