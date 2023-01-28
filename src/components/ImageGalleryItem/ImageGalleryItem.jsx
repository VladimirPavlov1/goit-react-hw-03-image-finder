import { Img, Wrapper} from "./ImageGalleryItem.styled"
import { Component } from "react"


export default class ImageGalleryItem extends Component{

    
   
    
 
    render(){ 
        const {item:{webformatURL,tags
        }}=this.props;
       


      
        return(
        <Wrapper>
             
            <Img src={webformatURL} alt={tags} /> 
            
        </Wrapper>
        


    )}
 
}