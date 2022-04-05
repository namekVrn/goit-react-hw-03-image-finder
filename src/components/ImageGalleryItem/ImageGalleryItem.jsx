import {Component} from 'react';
import '../ImageGalleryItem/ImageGalleryItem.css'
class ImageGalleryItem extends Component{

    render(){
      const {url, alt, bigImg,} = this.props
      
        return (
          <li className="ImageGalleryItem">
            <img className="ImageGalleryItem-image" src={url}  alt={alt} onClick={()=>this.props.onShowModal(bigImg)}/>
          </li>
        );
    }
}
export default ImageGalleryItem