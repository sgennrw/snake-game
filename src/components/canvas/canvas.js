import { connect } from 'react-redux'
import React from 'react';
import { ReactReduxContext, Provider } from "react-redux";
import { Stage, Layer } from 'react-konva';
import { WINDOW_SIZE } from '../../constants';

import Snake from '../snake/index';
import Food from '../food/index';

import './style.css';

const Canvas = () => {
    return (
        <ReactReduxContext.Consumer>
            {({ store }) => (
                <Stage width={WINDOW_SIZE} height={WINDOW_SIZE}>
                    <Provider store={store}>
                        <Layer>
                            <Snake />
                            <Food />
                        </Layer>
                    </Provider>
                </Stage>
            )}
        </ReactReduxContext.Consumer>
    );
};

export default connect(store => ({
    Snake: store.Snake
  }))(Canvas);