import { connect } from 'react-redux'
import Canvas from './canvas';
import { moveRequest } from '../../services/snakeService/actions';

const mapStateToProps = state => {
    return {
        isGameOver: state.snakeServiceReducer.isGameOver,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onMove: key => dispatch(moveRequest(key)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);