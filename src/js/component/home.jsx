import React from "react";
import TodoItems from "./TodoItems";
import PropTypes from "prop-types"; // ES6

//include images into your bundle
/*mport rigoImage from "../../img/rigo-baby.jpg";*/

//create your first component
export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: "",
			tasks: [],
			wcounter: 0
			//tasks: ["task1", "task2", "task3"]
		};
		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}

	///////////////////////////////////////////////////////////////////

	addItem(event) {
		//this.setState({ inputValue: event.target.value });

		if (this._inputElement.value !== "") {
			var newItem = {
				text: this._inputElement.value,
				key: Date.now()
			};

			this.setState(prevState => {
				return {
					tasks: prevState.tasks.concat(newItem)
				};
			});

			this._inputElement.value = "";
			this.setState({ wcounter: this.state.wcounter + 1 });
		}
		event.preventDefault();
	}
	///////////////////////////////////////////////////////////////////

	deleteItem(key) {
		//alert("...deleting");
		var filteredItems = this.state.tasks.filter(function(task) {
			return task.key !== key;
		});

		this.setState({ tasks: filteredItems });
		this.setState({ wcounter: this.state.wcounter - 1 });
	}

	///////////////////////////////////////////////////////////////////

	render() {
		return (
			<div id="container">
				<h1 className="todo-header">todos</h1>
				<form onSubmit={event => this.addItem(event)}>
					<input
						ref={a => (this._inputElement = a)}
						id="addToDo"
						type="text"
						placeholder="What needs to be done?"
					/>
				</form>

				<TodoItems
					entries={this.state.tasks}
					delete={this.deleteItem}
				/>

				<div className="footer">
					<div className="counter">{this.state.wcounter}</div>
					<div className="tfinal"> items left</div>
				</div>
			</div>
		);
	}
}
Home.propTypes = {
	// You can declare that a prop is a specific JS primitive. By default, these
	// are all optional.
	entries: PropTypes.array
};
