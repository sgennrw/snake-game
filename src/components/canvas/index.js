import { connect } from 'react-redux'
import Canvas from './canvas';
import { moveRequest, reset } from '../../services/snakeService/actions';

const mapStateToProps = state => {
    return {
        isGameOver: state.snakeServiceReducer.isGameOver,
        currentScore: state.snakeServiceReducer.currentScore,
        highestScore: state.snakeServiceReducer.highestScore,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onMove: key => dispatch(moveRequest(key)),
        reset: () => dispatch(reset()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);