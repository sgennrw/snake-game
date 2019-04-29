import React from 'react';
import PropTypes from 'prop-types';
import { Rect } from 'react-konva';
import { ITEM_SIZE } from '../../constants';

const props = {
    foodPos: PropTypes.object.isRequired,
};

const Food = props => {
    const { foodPos } = props;

    return (
        <Rect
            x={foodPos.x} y={foodPos.y} width={ITEM_SIZE} height={ITEM_SIZE}
            fill="red"
        />
    );
};

Food.propTypes = props;
export default Food;