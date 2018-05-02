import { connect } from 'react-redux'
import { toggleItem } from '../actions';
import { ItemList } from '../components/ItemList';


// map global redux state to container props
const mapStateToProps = state => ({
    items : state.items
})

// map dispatchers/callbacks to container props
const mapDispatchToProps = dispatch => ({
    toggleItem : (id) => dispatch(toggleItem(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemList)

