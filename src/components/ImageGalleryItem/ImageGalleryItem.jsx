import { Img} from "./ImageGalleryItem.styled"

export const ImageGalleryItem=({item:{webformatURL,tags}
})=>{
   
    return(
        <div>
            <Img src={webformatURL} alt={tags} />
        </div>



    )
}