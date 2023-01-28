import { Img, Wrapper } from './ImageGalleryItem.styled';
import { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';

export default class ImageGalleryItem extends Component {
  // static propTypes = {
  //   items: PropTypes.shape({
  //     webformatURL: PropTypes.string.isRequired,
  //     tags: PropTypes.string.isRequired,
  //   }),
  // };
  state={
    showModal:false,
  }

  toggleModal = ()=> {
    console.log('click');
  
    this.setState(({ showModal }) => ({
      showModal: !showModal,
     
    }));
  };
 


  render() {
    const {
      item: { webformatURL, tags,largeImageURL },
    } = this.props;
    const {showModal}=this.state;
    return (
      <>
       <Wrapper>
        <Img src={webformatURL} alt={tags} onClick={this.toggleModal}/>
      </Wrapper>
      {showModal && (
        <Modal >
          
          <img src={largeImageURL} alt="tag" onClick={this.toggleModal}/>
         
        </Modal>
      )}
      </>
     
    );
  }
}
