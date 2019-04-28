import React from 'react';
import PropTypes from 'prop-types';
import { Rect } from 'react-konva';
import { ITEM_SIZE } from '../../constants';
import { randomLocation } from '../../utils';

const props = {
    changeDirection: PropTypes.func.isRequired,
};

const Snake = props => {
    const { changeDirection } = props;

    const rect = () => (
        <Rect
            x={randomLocation()} y={randomLocation()} width={ITEM_SIZE} height={ITEM_SIZE}
            fill="gray"
        />
    )
    changeDirection('key');
    return ( 
        rect()
    );
};

Snake.propTypes = props;
export default Snake;