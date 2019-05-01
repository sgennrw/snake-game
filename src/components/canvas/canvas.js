import { connect } from 'react-redux'
import React from 'react';
import { ReactReduxContext, Provider } from "react-redux";
import { Stage, Layer } from 'react-konva';
import PropTypes from 'prop-types';
import { WINDOW_SIZE } from '../../constants';

import Snake from '../snake/index';
import Food from '../food/index';

import './style.css';

const props = {
    onMove: PropTypes.func.isRequired,
}

const Canvas = props => {
    const { onMove } = props;

    const onKeyPressed = e => {
        onMove(e.key);
        e.preventDefault();
    }

    return (
        <ReactReduxContext.Consumer>
            {({ store }) => (
                <div
                    className="canvas" 
                    tabIndex="1"
                    onKeyDown={onKeyPressed}
                >
                    <Stage width={WINDOW_SIZE} height={WINDOW_SIZE}>
                        <Provider store={store}>
                            <Layer>
                                <Snake />
                                <Food />
                            </Layer>
                        </Provider>
                    </Stage>
                </div>
            )}
        </ReactReduxContext.Consumer>
    );
};

Canvas.propTypes = props;
export default connect(store => ({
    Snake: store.Snake
  }))(Canvas);