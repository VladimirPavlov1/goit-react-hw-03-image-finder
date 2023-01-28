import { Img, Wrapper } from './ImageGalleryItem.styled';
import { Component } from 'react';
import PropTypes from 'prop-types';

export default class ImageGalleryItem extends Component {
  static propTypes = {
    items: PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
  };

  render() {
    const {
      item: { webformatURL, tags },
    } = this.props;

    return (
      <Wrapper>
        <Img src={webformatURL} alt={tags} />
      </Wrapper>
    );
  }
}
