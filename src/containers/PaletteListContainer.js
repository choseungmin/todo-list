import PaletteList from '../components/PaletteList';
import * as actions from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    todoState: state.todoState
});

const mapDispatchToProps = (dispatch) => ({
    onSetColor: (index) => dispatch(actions.setColor(index))
});

const PaletteListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PaletteList);

export default PaletteListContainer;