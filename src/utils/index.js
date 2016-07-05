import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../action';


const options = {
	withRef: true
};

//注入Redux Store的通用方法，用来connect每个组件
//三个属性，分别对应组件中的mapStateToProps，mapDispatchToProps,mergeProps 方法对应
export default function connectComponent(component) {	let {mapStateToProps, mapDispatchToProps, mergeProps, LayoutComponent} = component;
	return connect(
		//有的话，就使用，没有就创建一个空的对象来使用		
		mapStateToProps || function (state) {
			return {};
		},
		mapDispatchToProps || function (dispatch) {
			return {
				//使用BindactionCreators来让组件可以直接调用dispatch
				actions: bindActionCreators(actions, dispatch)
			}
		},
		mergeProps,
		options
	)(LayoutComponent);
}
