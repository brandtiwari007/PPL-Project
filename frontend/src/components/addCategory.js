import React from "react";
import axios from "axios";

class AddCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image: ""
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    const formdata = new FormData(event.target);
    axios
      .post("http://localhost:8969/addcats", formdata)
      .then(result => {
        // alert("succesfully added category");
        this.props.changeCatState();
        this.props.getCategory();
      })
      .catch(err => {
        console.log(err);
      });
  };
  handlechange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <ul>
            <li>
              <label>
                categories
                <input type="text" onChange={this.handlechange} name="name" />
              </label>
            </li>
            <br />
            <li>
              <label>
                addImage
                <input type="file" onChange={this.handlechange} name="image" />
              </label>
            </li>
            <br />
            <input type="submit" value="submit" />
          </ul>
        </form>
      </div>
    );
  }
}
export default AddCategory;
