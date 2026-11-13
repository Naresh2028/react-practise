import React from "react";

class NameList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nameInput: "",
      nameList: [],
    };
  }

  handleNameChange = (event) => {
    this.setState({ nameInput: event.target.value });
  };

  handleNameAdd = () => {
    if (this.state.nameInput.trim() === "") {
      return;
    }

    this.setState({
      nameList: [...this.state.nameList, this.state.nameInput],
      nameInput: "",
    });
  };

  handleNameRemove = (selectedIndex) => {
    this.setState({
      nameList: this.state.nameList.filter((_,index) => index !== selectedIndex),
    });
  };

  render() {
    return (
      <div>
        <input value={this.state.nameInput} onChange={this.handleNameChange} />

        <button onClick={this.handleNameAdd}> Add Name</button>

        <ul>
          {this.state.nameList.map((name, index) => (
            <li key={index}>
              {name}
              <button onClick={() => this.handleNameRemove(index)}>
                Remove Name
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default NameList;
