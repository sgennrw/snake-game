import { connect } from 'react-redux'
import Canvas from './canvas';
import { moveRequest } from '../../services/snakeService/actions';

const mapDispatchToProps = dispatch => {
    return {
        onMove: key => dispatch(moveRequest(key)),
    }
}

export default connect(null, mapDispatchToProps)(Canvas);