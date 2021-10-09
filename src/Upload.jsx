import React, { Component } from 'react';
import axios from 'axios'

export default class Upload extends Component {
    
    state = {
        selectedFile:null
    }

   onChangeHandler=event=>{
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
   }
    
    onClickHandler = async() => {
   const formData = new FormData()
   formData.append('file', this.state.selectedFile)
   try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      
      if (formData) {
        const { data } = await axios.post(
          "http://localhost:8000/upload",
          formData,
          config
        );

        console.log(data)
      } else {
        console.log("Form Data is null");
      }
    } catch (error) {
      console.error(error);
    }
}

  render() {
    return (
        <div>
            <input type="file" name="file" onChange={this.onChangeHandler} />
            <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
      </div>
    );
  }
}
