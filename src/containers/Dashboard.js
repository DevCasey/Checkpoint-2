import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import { removeRestaurant } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        restaurants: state.restaurants
    }
}

// add mapDispatchToProps function here
const mapDispatchToProps = (dispatch) => {
    return {
        removeCar: (index) => dispatch(removeRestaurant(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)