import TodoItemList from '../components/TodoItemList';
import * as actions from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    todoState: state.todoState
});

const mapDispatchToProps = (dispatch) => ({
    onToggle: (index) => dispatch(actions.toggle(index)),
    onRemove: (index) => dispatch(actions.remove(index))
});

const TodoItemListContainers = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoItemList);

export default TodoItemListContainers;
