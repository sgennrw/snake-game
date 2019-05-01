import React from 'react';
import PropTypes from 'prop-types';
import { Group, Rect } from 'react-konva';
import { ITEM_SIZE } from '../../constants';

const props = {
    snakePos: PropTypes.array.isRequired,
};

const Snake = props => {
    const { snakePos } = props;

    const renderSnake = () => {
        return snakePos.map((snake, index) => {
            return (
                <Rect
                    key={`snake-${index}`}
                    x={snake.x} y={snake.y} width={ITEM_SIZE} height={ITEM_SIZE} stroke="black"
                    fill="gray"
                />
            );
        });
    }

    return (
        <Group>
            {renderSnake()}
        </Group>
    )
};

Snake.propTypes = props;
export default Snake;