import React from 'react';
import { Rect } from 'react-konva';
import { ITEM_SIZE } from '../../constants';
import { randomLocation } from '../../utils';

const Food = () => {
    return (
        <Rect
            x={randomLocation()} y={randomLocation()} width={ITEM_SIZE} height={ITEM_SIZE}
            fill="red"
        />
    );
};

export default Food;