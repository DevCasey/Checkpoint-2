// fill out this container
import { connect } from 'react-redux';
import Navigation from '../components/Navigation';
import { removeRestaurant } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        restaurants: state.restaurants
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeRestaurant: (index) => dispatch(removeRestaurant(index))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);