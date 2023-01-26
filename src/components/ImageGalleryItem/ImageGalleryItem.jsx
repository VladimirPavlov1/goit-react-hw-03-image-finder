import { Img,BtnModal} from "./ImageGalleryItem.styled"
import { Component } from "react"
import Modal from "components/Modal/Modal"

export default class ImageGalleryItem extends Component{

    state={
        showModal:false,
    }

    componentDidMount(){
        window.addEventListener('keydown',this.handleKey)
    }

    componentWillUnmount(){
        window.removeEventListener('keydown',this.handleKey)
    }

    handleKey=e=>{
        if(e.code==='Escape'){
            this.setState(prevState=>({
                showModal:!prevState.showModal
            }))
        }
    }
    
    toggleModal=()=>{
        this.setState(prevState=>({
            showModal:!prevState.showModal
        }))
    
    }

    render(){ 
        const {item:{webformatURL,tags,largeImageURL
        }}=this.props;
        const {showModal}= this.state;
        return(
        <div>
             <BtnModal onClick={()=>this.toggleModal()}>
                 <Img src={webformatURL} alt={tags} /> 
            </BtnModal>
          
        
            {showModal&&<Modal>
                           
                            <img src={largeImageURL} alt="tags" />
                        </Modal>
            }
        </div>
        


    )}
 
}