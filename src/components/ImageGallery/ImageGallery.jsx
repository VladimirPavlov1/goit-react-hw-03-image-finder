import { Component } from 'react';
import  ImageGalleryItem  from '../ImageGalleryItem/ImageGalleryItem';
import { Item, List } from './ImageGallery.styled';

import { Loader } from 'components/Loader/Loader';



class ImageGallery extends Component {
  state = {
  
    
   
  };
 
  

  render() {
    console.log(this.props.items);
    const { status, error,items } = this.props;
    if (status === 'idle') {
      return <div>Введіть ваш запит</div>;
    }

    if (status === 'pending') {
      return (
       <Loader/>
      );
    }

    if (status === 'rejected') {
      return <div>{error.message}</div>;
    }

    if (status === 'resolved') {
      return (
      
        <List>
          {items.map(item=>(
           
            <Item key={item.id}>
                <ImageGalleryItem item={item} />
            </Item>
          ))}
        </List>
       
      
      
      );
    }
   
  }
}

export default ImageGallery;
