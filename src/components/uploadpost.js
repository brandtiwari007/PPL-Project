import React from 'react';
import axios from '../../frontend/node_modules/axios';
class Upload extends React.Component{
constructor(props){
    super(props)
    this.state={
        image:'',
        title:'',
        category:'cat',
         picsrc:'',
        // data:''
    }
}
handlesubmit =(event) =>{
    event.preventDefault();
    const formdata = new FormData(event.target);
    // formdata.append('image', this.state.image);
    // formdata.append('category', this.state.category);
    // formdata.append('title', this.state.title);
    // console.log("formdata", formdata);

    console.log("handle submit",formdata.get("title"))
    formdata.append("username",localStorage.getItem("username"))

    axios.post("http://localhost:8969/upload",formdata)
    .then((result)=>

        {console.log("submit data",result)
        this.props.changeCount();
        
    }
         // <li>this.state.picsrc</li>
          
       
        // this.state.picsrc.map((value, index) => {
        //     return <h1 key={index}>{value}</h1>
       
          
        // })

       // this.setState({data:res.data})
    // <img className="image-work" src="/home/com15/pplproject/public/upload/3c2fc2aa1038d88bdf0ddb152cf86052"  alt="" /> 

    )
}
    handleimage =(event)=>{
        this.setState({
        image:event.target.files[0]
    });
    console.log("imagr path : ", event.target.files)
    }
    handlecategory =(event)=>{
        this.setState({
        category:event.target.value
    })
    };

    handletitle =(event)=>{
        this.setState({
        title:event.target.value
    })
    
    };

  

  render(){

    return(
        <div>
            <form onSubmit={this.handlesubmit} id = 'form2'>
            <ul>
            <li>
                <span>Select image</span>
           <input type="file" name="image" onChange={this.handleimage} />
           </li>
           <li>
               <span>Title</span>
           <input type="text" name="title" onChange={this.handletitle} required />
           </li>
           <li>
               <span>Category</span>
           <select name="category" onChange={this.handlecategory}>
               <option value="cat">Cat</option>
               <option value="dog">Dog</option>
               <option value="bird">Birds</option>
               <option value="rabbit">Rabbit</option>
               <option value="other">other</option>



           </select>
           </li>
           <input type="submit" />
           
           </ul>
           </form>
           {/* {console.log('abc',this.state.data)} */}
           {/* <img src={this.state.picsrc+this.state.data.image} alt='backend image' /> */}
         


        </div>




    )
  }


}
export default Upload