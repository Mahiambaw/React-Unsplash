import { render } from "@testing-library/react";
import React from "react";
import Unsplash from "../api/Unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList"

class App extends React.Component {

state= {images:[]}


 onSearchSubmit= async(term)=>{
 const res= await Unsplash.get("/search/photos", {
    params:{query:term}
    
  });
  const data = res.data.results
  this.setState({images: data})
  
}
  render() {
    return (
      <div className="ui container" style={{marginTop:"10px"}}>
    <SearchBar onSubmit={this.onSearchSubmit}/>
      <ImageList images={this.state.images}/>
    </div>
    )
  }


}




export default App;