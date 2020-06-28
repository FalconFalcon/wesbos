import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }
  myInput = React.createRef();

  goToStore = event => {
    //Stop the form from submitting
    event.preventDefault();
    //Get Input
    console.log(this);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="Submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
