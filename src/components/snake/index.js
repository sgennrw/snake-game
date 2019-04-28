import { connect } from 'react-redux'
import Snake from './snake';
import { changeDirectionRequest } from '../../services/snakeService/actions';

const mapDispatchToProps = dispatch => {
    return {
        changeDirection: key => dispatch(changeDirectionRequest(key)),
    }
}

export default connect(null, mapDispatchToProps)(Snake);