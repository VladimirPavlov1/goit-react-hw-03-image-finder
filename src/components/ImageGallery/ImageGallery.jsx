import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { Item, List, Error } from './ImageGallery.styled';
import { Loader } from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import { CloseModal } from './ImageGallery.styled';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  static propTypes = {
    status: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        largeImageURL: PropTypes.string.isRequired,
      })
    ),
  };

  state = {
    showModal: false,
    largeImageURL: '',
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKey);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKey);
  }
  toggleModal = largeImageURL => {
    console.log('click');
    console.log(largeImageURL);
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImageURL,
    }));
  };

  handleKey = e => {
    if (e.code === 'Escape') {
      this.toggleModal();
    }
  };

  render() {
    const { status, error, items } = this.props;
    console.log(status);
    console.log(error);
    console.log(items);
    const { showModal, largeImageURL } = this.state;

    if (status === 'idle') {
      return <div>Введіть ваш запит</div>;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <Error>{error}</Error>;
    }

    if (status === 'resolved') {
      return (
        <div>
          <>
            {showModal && (
              <Modal onClick={this.toggleModal}>
                <img src={largeImageURL} alt="tag" />
                <CloseModal onClick={this.toggleModal} />
              </Modal>
            )}
          </>
          <List>
            {items.map(item => (
              <Item
                key={item.id}
                onClick={() => {
                  this.toggleModal(item.largeImageURL);
                }}
              >
                <ImageGalleryItem item={item} />
              </Item>
            ))}
          </List>
        </div>
      );
    }
  }
}

export default ImageGallery;
