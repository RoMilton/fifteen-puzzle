// tile component that displays a number in the centre

import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Tile = (props) => {
  const getTileCSS = () => classNames({
     grid__tile: true,
    'grid__tile--empty': props.empty,
  });

  const onTileClick = () => {
    props.onTileClick(props.text);
  }

  return (
    <div
      key={props.text}
      className={ getTileCSS() }
      onClick={ onTileClick }
      style= {{
        width: `${(props.width) * 100}%`
      }}
    >
      { props.text }
    </div>
  );
};

Tile.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired, // number of tile
  onTileClick: PropTypes.func, // fired when tile is clicked
  empty: PropTypes.bool, // true if this is an empty tile
  width: PropTypes.number // width of tile, as decimal. eg 0.25 will assign a width of 25%
};

Tile.defaultProps = {
  onTileClick: () => {},
  empty: false,
  width: 1,
}

export default  Tile;
