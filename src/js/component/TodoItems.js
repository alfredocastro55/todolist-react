import React, { Component } from "react";
import PropTypes from "prop-types"; // ES6

class TodoItems extends Component {
	constructor(props) {
		super(props);
		this.createTasks = this.createTasks.bind(this);
	}
	delete(key) {
		this.props.delete(key);
	}

	createTasks(item) {
		return (
			<li key={item.key}>
				{item.text}
				<span>
					<i
						className="fa fa-trash"
						onClick={() => this.delete(item.key)}
					/>
				</span>
			</li>
		);
	}

	render() {
		var todoEntries = this.props.entries;
		var listItems = todoEntries.map(this.createTasks);

		return <ul className="theList">{listItems}</ul>;
	}
}

export default TodoItems;

TodoItems.propTypes = {
	// You can declare that a prop is a specific JS primitive. By default, these
	// are all optional.
	delete: PropTypes.func,
	entries: PropTypes.array
};
