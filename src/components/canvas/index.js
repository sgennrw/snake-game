import { connect } from 'react-redux'
import Canvas from './canvas';
import { changeDirectionRequest } from '../../services/snakeService/actions';

const mapDispatchToProps = dispatch => {
    return {
        changeDirection: key => dispatch(changeDirectionRequest(key)),
    }
}

export default connect(null, mapDispatchToProps)(Canvas);