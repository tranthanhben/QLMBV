import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

export default
class DebugLog extends Component {
	static propTypes = {
		store: PropTypes.object,
		monitor: PropTypes.func
	}

	componentWillMount() {
		let store = this.props.store;
		window.__store = store;

		store.subscribe(() => {
			console.log('AppState:', store.getState());
		});
	}

	render() {
		return <div />;
	}
}
