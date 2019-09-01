import React from "react";
import { connect } from "react-redux";
import { simpleAction } from "./actions/simpleAction";

function App(props) {
	const simpleAction = event => {
		props.simpleAction();
	};

	return (
		<div>
			<button onClick={simpleAction}>Test redux action</button>
			<pre>
				{JSON.stringify(props)}
			</pre>
		</div>
	);
}

const mapStateToProps = state => ({
	...state
});

const mapDispatchToProps = dispatch => ({
	simpleAction: () => dispatch(simpleAction())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
