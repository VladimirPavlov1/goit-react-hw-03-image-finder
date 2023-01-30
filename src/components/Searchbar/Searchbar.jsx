import { Component } from 'react';
import { Form, Header, SearchBtn, Label, Input,SearchIcon } from './Searchbar.styled';



class Searchbar extends Component {
  state = {
    searchName: '',
  };

  handleChange = e => {
    this.setState({ searchName: e.currentTarget.value });
  };
  handleSubmit = e => {
    console.log('submitting')
    e.preventDefault();
    if (this.state.searchName.trim().toLocaleLowerCase() !== '') {
      this.props.onSubmit(this.state.searchName);
    }
    this.setState({ searchName: '' });
    this.props.onClear()
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <SearchBtn type="submit">
          <SearchIcon/> <Label></Label>
          </SearchBtn>

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
