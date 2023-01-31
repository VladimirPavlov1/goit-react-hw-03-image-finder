import { Component } from 'react';
import {
  Form,
  Header,
  SearchBtn,
  Label,
  Input,
  SearchIcon,
} from './Searchbar.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    searchName: '',
  };

  handleChange = e => {
    this.setState({ searchName: e.currentTarget.value.toLocaleLowerCase() });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchName.trim() === '') {
      toast.warn('Введіть ваш запит', {});

      return;
    }
    this.props.onSubmit(this.state.searchName);
    this.setState({ searchName: '' });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <SearchBtn type="submit">
            <SearchIcon /> <Label></Label>
          </SearchBtn>
          <ToastContainer />

          <Input
            onChange={this.handleChange}
            type="text"
            autocomplete="off"
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}

export default Searchbar;
