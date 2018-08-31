import Form from '../components/Form';
import * as actions from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    todoState: state.todoState
});

const mapDispatchToProps = (dispatch) => ({
    onChange: (e) => dispatch(actions.change(e.target.value)),
    onCreate: (input, color) => {
        if(input !== '') dispatch(actions.create(input, color))
    },
    onKeyPress: (key, input, color) => {
        if(key === 'Enter' && input !== '') dispatch(actions.create(input, color))
    }
});

const FormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);

export default FormContainer;