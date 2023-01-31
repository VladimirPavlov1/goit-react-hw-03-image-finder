import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { Item, List } from './ImageGallery.styled';
import PropTypes from 'prop-types';

const ImageGallery = ({ items }) => {
  return (
    <List>
      {items.map(item => (
        <Item key={item.id}>
          <ImageGalleryItem item={item} />
        </Item>
      ))}
    </List>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
