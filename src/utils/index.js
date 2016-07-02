import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../action';


const options = {
	withRef: true
};


export default function connectComponent(component) {
	return connect(
		component.mapStateToProps || function (state) {
			return {};
		},
		component.mapDispatchToProps || function (dispatch) {
			return {
				actions: bindActionCreators(actions, dispatch)
			}
		},
		component.mergeProps,
		options
	)(component);
}
