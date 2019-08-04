import React from "react";

class Dropdown extends React.Component {
  state = {
    displayMenu: false
  };

  showDropdownMenu = event => {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  };

  hideDropdownMenu = () => {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  };

  render() {
    return (
      <div className="dropdown">
        <div className="button profile" onClick={this.showDropdownMenu}>
        {" "}
        <img src="https://api.adorable.io/avatars/50" alt="profile" width="25px"/>
        <p className="ml-10">Alex Tonorio</p>{" "}
        </div>
        {this.state.displayMenu ? (
          <ul className="drop-menu">
            <li className="drop-menu-item">
              <a href="#">Setting</a>
            </li>
            <li className="drop-menu-item">
              <a href="#">Log Out</a>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;
