import { WINDOW_SIZE, ITEM_SIZE } from './constants';

export const randomLocation = () => {
    return Math.floor(Math.random() * (WINDOW_SIZE / ITEM_SIZE)) * ITEM_SIZE;
}