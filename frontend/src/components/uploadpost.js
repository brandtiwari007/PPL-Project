import React, { useEffect, useState } from "react";
import axios from "axios";
//import AddCategory from 'addCategory';
// class Upload extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       image: "",
//       title: "",
//       category: "cat",
//       picsrc: "",
//       cat: []
//       // data:''
//     };
//   }

const Upload = props => {
  const [up, setUpl] = useState({
    image: "",
    title: "",
    category: "cat",
    picsrc: ""
  });
  const [cat, setCat] = useState([]);

  const handlesubmit = event => {
    event.preventDefault();
    const formdata = new FormData(event.target);
    // formdata.append('image', this.state.image);
    // formdata.append('category', this.state.category);
    // formdata.append('title', this.state.title);
    // console.log("formdata", formdata);

    console.log("handle submit", formdata.get("title"));
    formdata.append("username", localStorage.getItem("username"));

    axios.post("http://localhost:8969/upload", formdata).then(
      result => {
        console.log("submit data", result);
        props.changeCount();
      }
      // <li>this.state.picsrc</li>

      // this.state.picsrc.map((value, index) => {
      //     return <h1 key={index}>{value}</h1>

      // })

      // this.setState({data:res.data})
      // <img className="image-work" src="/home/com15/pplproject/public/upload/3c2fc2aa1038d88bdf0ddb152cf86052"  alt="" />
    );
  };
  const handleimage = event => {
    // this.setState({
    //   image: event.target.files[0]
    // });
    setUpl({
      image: event.target.value
    });
    console.log("imagr path : ", event.target.files);
  };
  const handlecategory = event => {
    // this.setState({
    //   category: event.target.value
    // });
    setUpl({ ...up, category: event.target.value });
  };

  const handletitle = event => {
    // this.setState({
    //   title: event.target.value
    // });
    setUpl({
      title: event.target.value
    });
  };
  // componentDidMount() {
  useEffect(() => {
    console.log("asdasdadads>>>>>>>>>>> in did mount");
    axios.get("http://localhost:8969/getcats").then(response => {
      if (response.data) {
        // this.setState(
        //   {
        //     cat: response.data
        //   },
        //   () => console.log("component did mount", this.state.cat)
        // );
        setCat(response.data);
      }
    });
  }, []);

  return (
    <div>
      <form onSubmit={handlesubmit} id="form2">
        <ul>
          <li>
            <span>Select image</span>
            <input type="file" name="image" onChange={handleimage} />
          </li>
          <li>
            <span>Title</span>
            <input type="text" name="title" onChange={handletitle} required />
          </li>
          <li>
            <span>Category</span>
            <select name="category" onChange={handlecategory}>
              {cat.map((data, index) => {
                return <option value={data.name}> {data.name} </option>;
              })}
            </select>
          </li>
          <input type="submit" />
        </ul>
      </form>
      {/* {console.log('abc',this.state.data)} */}
      {/* <img src={this.state.picsrc+this.state.data.image} alt='backend image' /> */}
    </div>
  );
};

export default Upload;
