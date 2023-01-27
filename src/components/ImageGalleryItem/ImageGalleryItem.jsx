import { Img,BtnModal} from "./ImageGalleryItem.styled"
import { Component } from "react"
import Modal from "components/Modal/Modal"

export default class ImageGalleryItem extends Component{

    state={
        showModal:false,
    }
    
    componentDidMount(){
        console.log('didmount')
        window.addEventListener('keydown',this.handleKey)
      }
    
    
    handleKey=e=>{
        if(e.code==='Escape'){
            this.toggleModal();
        }
    }
    
    toggleModal=()=>{
        console.log('click')
      return this.setState(prevState=>({
            showModal:!prevState.showModal
        }))
    
    }

    render(){ 
        const {item:{webformatURL,tags,largeImageURL
        }}=this.props;
        const {showModal}=this.state;


      
        return(
        <div>
             <BtnModal onClick={()=>this.toggleModal()}>
                 <Img src={webformatURL} alt={tags} /> 
            </BtnModal>
          
        
           { showModal&&<Modal>
                
                <img src={largeImageURL} alt="tags" />
            </Modal>}
            
        </div>
        


    )}
 
}