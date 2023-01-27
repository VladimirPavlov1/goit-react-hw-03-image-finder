import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import { Container } from "./App.styled";
import { Button } from "./Button/Button";
import axios from 'axios';





class App extends Component{
  
state={
 
  page:1,
  imagesData: null,
  searchName:'',
  status:'idle',
  
}



componentDidUpdate(prevProps, prevState) {
  if (prevState.searchName !== this.state.searchName||prevState.page!==this.state.page) {
    this.setState({ status: 'pending' });
    console.log(prevProps.searchName);
    console.log(this.props.searchName);

    axios({
      url: `https://pixabay.com/api/?`,
      params: {
        q: this.state.searchName,
        page: this.state.page,
        key: '31785434-56897078df27680e7b71d8ebf',
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 3,
      },
    })
      .then(response => response.data.hits)
      .then(data =>
        this.setState({ imagesData: data, status: 'resolved'})
      )
      .catch(error => this.setState({ error, status: 'rejected' }));
  }
}


  handleSubmit=(searchName,page)=>{
    this.setState({searchName,page})
  }

  handleClick=()=>{
    this.setState(prevState=>({
      page:prevState.page+1
    }))
  }

  
  render(){
   

    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} page={this.state.page} />
        <ImageGallery items={this.state.imagesData} status={this.state.status}/>
        <Button onClick={this.handleClick}/>
         
     
    </Container>
    )

  }  
  
};


export default App;
