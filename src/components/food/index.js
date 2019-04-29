import { connect } from 'react-redux'
import Food from './food';

const mapStateToProps = state => {
    return {
       foodPos: state.snakeServiceReducer.foodPos,
    }
}

export default connect(mapStateToProps, null)(Food);