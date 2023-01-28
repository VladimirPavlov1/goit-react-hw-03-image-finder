import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import { Container } from "./App.styled";
import { Button } from "./Button/Button";
import axios from 'axios';






class App extends Component{
  
state={
 
  page:1,
  imagesData: [],
  searchName:'',
  status:'idle',
  error:'',
  
}



componentDidUpdate(prevProps, prevState) {
  if (prevState.searchName !== this.state.searchName||prevState.page!==this.state.page) {
    this.setState({ status: 'pending' });
   

    axios({
      url: `https://pixabay.com/api/?`,
      params: {
        q: this.state.searchName,
        page: this.state.page,
        key: '31785434-56897078df27680e7b71d8ebf',
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
      },
    })
      .then(response =>{ return response.data.hits})
      .then(data =>{
        if(data.length>0)
        {this.setState(prevState=>({ imagesData:[...prevState.imagesData,...data], status: 'resolved'}))}else{
          alert('oioi')
        }})
      .catch(({message}) =>{message='Щось пішло не так, спробуйте ще раз';
    return this.setState({ status: 'rejected',error:message,imagesData:null,})});
  }
}

  handleSubmit=(searchName)=>{
    this.setState({searchName,page:1,imagesData:[]})
  }

  handleClick=()=>{
    this.setState(prevState=>({
      page:prevState.page+1,
     
    }))
  }
 



  
  render(){

    const {imagesData}=this.state
    console.log(imagesData)
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} page={this.state.page} />
        <ImageGallery items={imagesData} status={this.state.status} error={this.state.error}/>
        {imagesData&& <Button onClick={this.handleClick}/>}
      
     
    </Container>
    )

  }  
  
};


export default App;
