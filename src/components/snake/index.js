import { connect } from 'react-redux'
import Snake from './snake';

const mapStateToProps = state => {
    return {
       snakePos: state.snakeServiceReducer.snakePos,
    }
}

export default connect(mapStateToProps, null)(Snake);