import React, { useState } from "react";
import axios from "axios";
import {useSelector,useDispatch} from "react-redux";


// class AddCategory extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       image: ""
//     };
//   }

const AddCategory = props => {
  const dispatch=useDispatch();
  const [addcat, setaddcat] = useState({
    name: "",
    image: ""
  });

  const handleSubmit = event => {
    event.preventDefault();
    const formdata = new FormData(event.target);
    axios
      .post("http://localhost:8969/addcats", formdata)
      .then(result => {
       // alert("succesfully added category");
        props.changeCatState();
        props.getCategory();
      })
      .catch(err => {
        console.log(err);
      });
      
      // dispatch({type:"ADD_CATEGORY",payload:addcat})
  };
  const handlechange = event => {
    // const name = event.target.name;
    // const value = event.target.value;
    // this.setState({
    //   [name]: value
    // });
    setaddcat({
      ...addcat,
      name: event.target.value
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label>
              categories
              <input type="text" onChange={handlechange} name="name" />
            </label>
          </li>
          <br />
          <li>
            <label>
              addImage
              <input type="file" name="image" />
            </label>
          </li>
          <br />
          <input type="submit" value="submit" />
        </ul>
      </form>
    </div>
  );
};
//ReactDOM.render(<AddCategory y={5} />, document.getElementById("root"));
export default AddCategory;
