import { connect } from 'react-redux'
import React from 'react';
import { ReactReduxContext, Provider } from "react-redux";
import { Stage, Layer, Text } from 'react-konva';
import PropTypes from 'prop-types';
import { WINDOW_SIZE } from '../../constants';

import Snake from '../snake/index';
import Food from '../food/index';

import './style.css';

const props = {
    onMove: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    isGameOver: PropTypes.bool.isRequired,
    currentScore: PropTypes.number.isRequired,
    highestScore: PropTypes.number.isRequired,
}

const Canvas = props => {
    const { onMove, reset, isGameOver, currentScore, highestScore } = props;

    const onKeyPressed = e => {
        onMove(e.key);
        e.preventDefault();
    }

    const renderGameOver = (
        isGameOver && 
        <Text 
            text="Game Over.&#13;&#10;Click here to play again." 
            fontSize={16}
            onClick={reset}
        />
    );

    const renderScores = (
        <div className="canvas-score">
            <p className="canvas-score__current">
                score: {currentScore}
            </p>
            <p className="canvas-score__highest">
                highest score: {highestScore}
            </p>
        </div>
    );

    return (
        <div className="canvas">
            <ReactReduxContext.Consumer>
                {({ store }) => (
                    <div
                        className="canvas-stage" 
                        tabIndex="1"
                        onKeyDown={onKeyPressed}
                    >
                        <Stage width={WINDOW_SIZE} height={WINDOW_SIZE}>
                            <Provider store={store}>
                                <Layer>
                                    <Snake />
                                    <Food />
                                    {renderGameOver}
                                </Layer>
                            </Provider>
                        </Stage>
                    </div>
                )}
            </ReactReduxContext.Consumer>

            {renderScores}
        </div>
    );
};

Canvas.propTypes = props;
export default connect(store => ({
    Snake: store.Snake
  }))(Canvas);