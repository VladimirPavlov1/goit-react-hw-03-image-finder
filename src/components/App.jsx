import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { Container } from './App.styled';
import { Button } from './Button/Button';
import axios from 'axios';
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const notify=()=>{
  toast.info('🦄 Wow so easy!', {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
}

class App extends Component {
  state = {
    page: 1,
    imagesData: [],
    searchName: '',
    status: 'idle',
    error: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchName !== this.state.searchName ||
      prevState.page !== this.state.page
    ) {
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
        .then(response => {
          return response.data.hits;
        })
        .then(data => {
          if (data.length > 0) {
            this.setState(prevState => ({
              imagesData: [...prevState.imagesData, ...data],
              status: 'resolved',
            }));
          } else {
            alert('oioi');
          }
        })
        .catch(({ message }) => {
          message = 'Щось пішло не так, спробуйте ще раз';
          return this.setState({
            status: 'rejected',
            error: message,
            imagesData: null,
          });
        });
    }
  }

  handleSubmit = searchName => {
    console.log('app.submit')
    this.setState({ searchName, page: 1, imagesData: [] });
  };

  handleClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  onClear=()=>{
    this.setState({page:1,imagesData:[]})
  }

  render() {
    const { imagesData } = this.state;
    console.log(imagesData);
  
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} onClear={this.onClear}/>
        <ImageGallery
          items={imagesData}
          status={this.state.status}
          error={this.state.error}
        />
        {imagesData.length===0?(<div>{notify}</div>):(
          
          <Button onClick={this.handleClick}/>)
        }
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          />
      </Container>
    );
  }
}

export default App;
