/**
* Puzzle App
*/

import React, { PropTypes } from 'react';
import Grid from './Grid.jsx';
import Button from './Button.jsx';
import '../../scss/styles.scss';
import {getRowNo, getColNo, shuffleArray, incrementalArray} from '../utils/utils';

const App = class App extends React.Component {
  constructor(props) {
  	super(props);
  	const gridSize = props.size ** 2;
  	let tiles = incrementalArray(gridSize);

  	this.state = {
  	  tiles,
  	  gridSize,
  	};

  	this.onTileClick = this.onTileClick.bind(this);
  	this.shuffleTiles = this.shuffleTiles.bind(this);
	this.resetTiles = this.resetTiles.bind(this);
  }

  // shuffles the tiles
  shuffleTiles() {
  	this.setState({
  		tiles: shuffleArray(this.state.tiles),
  	});
  }

  // reset the position of tiles back to incremental order
  resetTiles() {
  	this.setState({
  		tiles: incrementalArray(this.state.gridSize)
  	});
  }

  // returns true if the two tiles are adjacent to each other in the grid
  areTilesAdjacent(tileOnePos, tileTwoPos) {
  	// get row and column number of first tile
  	const tileOneRowNo = getRowNo(this.props.size, tileOnePos);
  	const tileOneColNo = getColNo(this.props.size, tileOnePos);

  	// get row and column number of second tile
  	const tileTwoRowNo = getRowNo(this.props.size, tileTwoPos);
  	const tileTwoColNo = getColNo(this.props.size, tileTwoPos);
  	
  	// get horizontal and vertical difference between tiles
	const horizontalDiff = Math.abs(tileOneRowNo - tileTwoRowNo);
	const verticalDiff = Math.abs(tileOneColNo - tileTwoColNo);

	// if horizontal and vertical difference between two tiles adds to 1, they must be adjacent
	return (horizontalDiff + verticalDiff === 1);
  }

  onTileClick(tileNumber) {
  	if (!tileNumber) { return; }
  	// if clicked on the empty tile, return
  	if (tileNumber === this.state.gridSize) { return; }

  	// get position of tile and empty tile
  	const tilePos = this.state.tiles.indexOf(tileNumber)
  	const emptyPos = this.state.tiles.indexOf(this.state.gridSize)

  	if (this.areTilesAdjacent(tilePos, emptyPos)){
  		const newTiles = this.state.tiles.slice();

  		// swap tiles
  		newTiles[tilePos] = newTiles[emptyPos];
  		newTiles[emptyPos] = tileNumber;

  		this.setState({
  			tiles: newTiles,
  		})
  	}
  }

  render() {
  	return (
   	  <div className="app__inner">
        <div className="header">
          <h1 className="heading-1">15 Puzzle</h1>
        </div>
        <div className="main">
          <Grid
          	tiles={ this.state.tiles }
          	colCount= { this.props.size }
          	onTileClick = { this.onTileClick }
          />
        </div>
        <div className="footer">
          <Button 
          	text="Shuffle"
          	cssModifier="green"
          	onClick={ this.shuffleTiles }
          />
          <Button 
          	text="Reset"
          	onClick={ this.resetTiles }
          />
        </div>
      </div>
	);
  }
};

App.propTypes = {
  size: PropTypes.number.isRequired, // size of puzzle. Providing 3 will draw a grid of 9. 4 will draw 16. And so on.
};

App.defaultProps = {
  size: 4,
}

export default App;
