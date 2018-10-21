import React from "react";
import PropTypes from "prop-types"; // ES6

//include images into your bundle
/*mport rigoImage from "../../img/rigo-baby.jpg";*/

//create your first component
export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: "",
			tasks: ["task1", "task2", "task3"]
		};
	}
	///////////////////////////////////////////////////////////////////
	handleChange2(event) {
		if (event.charCode == 13) {
			var newItem2 = {
				text: this.setState.value,
				key: Date.now()
			};

			this.setState(prevState => {
				return {
					items: prevState.items.concat(newItem2)
				};
			});
		}
		this.setState.value = "";
	}
	///////////////////////////////////////////////////////////////////
	handleChange(event) {
		this.setState({ inputValue: event.target.value });

		if (event.charCode == 13) {
			var wkElement = document.getElementById("addToDo");
			var node = document.createElement("LI"); // Create a <li> node

			node.innerHTML = '<span><i class="fa fa-trash"></i></span>  '; // update element to be created
			var textnode = document.createTextNode(wkElement.value); // Create a text node
			node.appendChild(textnode); // Append the text to <li>
			document.getElementById("myList").appendChild(node); // Append <li> to <ul>

			//node.childNodes[0].addEventListener('click', runScriptDel);
			//listener();

			//this._inputElement.value = "";
			//event.preventDefault();
			var box1 = document.getElementById("addToDo");
			box1.value = "";
		}
	}
	///////////////////////////////////////////////////////////////////

	addItem(e) {
		if (this.state.value !== "") {
			var newItem = {
				text: this._inputElement.value,
				key: Date.now()
			};

			this.setState(prevState => {
				return {
					items: prevState.items.concat(newItem)
				};
			});
			this._inputElement.value = "";
		}
		//console.log(this.state.items);
		e.preventDefault();
	}
	///////////////////////////////////////////////////////////////////

	runScriptDel() {
		var parent = this.parentNode;
		parent.parentNode.removeChild(parent);
	}

	listener() {
		var items = document.querySelectorAll("span");
		items.forEach(el => el.addEventListener("click", el.runScriptDel));
	}

	///////////////////////////////////////////////////////////////////

	render() {
		return (
			<div id="container">
				<h1 className="todo-header">todos</h1>
				<input
					//ref={a => (this._inputElement = a)}
					id="addToDo"
					type="text"
					placeholder="What needs to be done?"
					value={this.state.inputValue}
					onChange={event => this.handleChange(event)}
					onKeyPress={event => this.handleChange(event)}
					//onChange={this.handleChange2}
					//onKeyPress={this.handleChange2}
				/>

				<ul id="myList">
					{this.state.tasks.map((task, index) => (
						<li key={index}>
							{task}
							<span>
								<i className="fa fa-trash" />
							</span>
						</li>
					))}
				</ul>

				<div className="footer">
					<div className="counter">wCounter=</div>
					<div className="tfinal"> items left</div>
				</div>
			</div>
		);
	}
}

Home.propTypes = {
	// You can declare that a prop is a specific JS primitive. By default, these
	// are all optional.
	task: PropTypes.string
};
