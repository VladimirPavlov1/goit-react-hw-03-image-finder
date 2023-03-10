import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { Container } from './App.styled';
import { Button } from './Button/Button';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from './Loader/Loader';

class App extends Component {
  state = {
    page: 1,
    items: [],
    searchName: '',
    totalHits:0,
    error: '',
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchName !== this.state.searchName ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });

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
        .then(response =>{ 
          console.log(response.data)
         return response.data;

         
    })
        .then(data => {
       
          
         
          console.log(data.totalHits)
          console.log(data.hits.length)
          console.log(this.state.page)
         
          if (data.hits.length > 0) {
           
            this.setState(prevState => ({
              items: [...prevState.items, ...data.hits],totalHits:data.totalHits,

            }));
            return;
          }
          toast('За вашим запитом нічого не знайдено', { autoClose: 3000 });
        })
        .catch(({ message }) => {
          message = toast('Щось пішло не так, спробуйте ще раз');
          this.setState({
            error: message,
          });
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  handleSubmit = searchName => {
    this.setState({ searchName: searchName, page: 1, items: [] });
  };

  handleClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { items, isLoading,totalHits } = this.state;
  
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoading && <Loader />}
        <ImageGallery items={items} />

        {items.length > 0 && items.length<totalHits && (
          <Button onClick={this.handleClick} />
        )}

        <ToastContainer />
      </Container>
    );
  }
}

export default App;
