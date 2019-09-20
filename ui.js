'use strict';
const React = require('react');
const { useState } = require('react');
const PropTypes = require('prop-types');
const { Text, Color, Box } = require('ink');

const FIELD_SIZE = 16;
const FIELD_ROW = [...new Array(FIELD_SIZE).keys()];

let foodItem = {
	x: Math.floor(Math.random() * FIELD_SIZE),
	y: Math.floor(Math.random() * FIELD_SIZE),
};

function getItem(x, y, snakeSegments) {
	if (foodItem.x === x && foodItem.y === y) {
		return (<Color red> F </Color>);
	}

	for (const segment of snakeSegments) {
		if (segment.x === x && segment.y === y) {
			return (<Color green> h </Color>);
		}
	}
}

const App = () => {

	const [ snakeSegments, setSnakeSegments ] = useState([
		{ x: 8, y: 8 },
		{ x: 8, y: 7 },
		{ x: 8, y: 6 },
	])

	return (
		<Box flexDiretion="column" alignItems="center">
			<Text>
				<Color green>Snake</Color> game
			</Text>
			<Box flexDiretion="column">
				{FIELD_ROW.map(y => (
					<Box key={y}>
						{FIELD_ROW.map(x => (
							<Box key={x}> { getItem(x, y, snakeSegments) || " . " } </Box>
						))}
					</Box>
				))}
			</Box>
		</Box>
)};

App.propTypes = {
	name: PropTypes.string
};

App.defaultProps = {
	name: 'Stranger'
};

module.exports = App;
