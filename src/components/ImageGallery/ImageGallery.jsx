import {Component} from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import '../ImageGallery/ImageGallery.css';
import Button from '../Button'
import connectApi from '../utils/connectApi'
import Modal from '../Modal'
import Loader from '../Loader'
import errorImg from '../../img/1958.jpg'

class ImageGallery extends Component{
    state = {
        hits: null,    
        modalStatus: false,    
        modalImg: '',
        error: null,
        page: 1,
        maxPage: 0,
        status: "waiting"
      }
    showModal = (bigImg) => {
        console.log("openmodal")
        this.setState({modalStatus: true, modalImg: bigImg})
      }
    clouseModal = ()=>{
        console.log("clouseModal")
        this.setState({modalStatus: false})
    }
    async componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.imageName;
        const nextName = this.props.imageName;
        if  (prevName !== nextName) {
          await this.setState({status: "waiting", page: 1, hits: null })
          connectApi.FetchImg(nextName, this.state.page)
                .then(data=>{(data.total>0) ? this.setState({hits: data.hits, status: "resolved"}) : this.setState({hits: data.hits, status: "rejected"});
                 if(data.total>12){this.setState({maxPage: Math.ceil(data.totalHits/12)})}})
                .catch(error=>this.setState({error, status: "rejected"}))
        }
      }
      downScroll(){
        window.onload=function(){
            window.scrollTo(0,document.body.scrollHeight);
       }
      }
      loadMore = async ()=>{
        await this.setState({
            status: "loading", 
            page: this.state.page + 1, 
            
        })
           connectApi.FetchImg(this.props.imageName, this.state.page)
           .then(data => this.setState({hits: [...this.state.hits, ...data.hits], status: "resolved"}))
           this.downScroll()
        }

    render(){
        console.log(this.state.page)
        console.log(this.state.hits)
        // console.log(this.state.modalImg)
        const {hits, status, modalImg} = this.state
        if(this.state.modalStatus){
            return  <Modal clouseModal={this.clouseModal} bigImg={modalImg}/>
         }
        if(status === "waiting"){
            return <p>введите запрос</p>
        }
        if(status === "loading"){
            return <Loader/>
        }
        if(status === "rejected"){
            return (
                <div className="error"> 
                    <img src={errorImg} width="320" alt="error"/>
                    <p className="errorTitle">Вводи правильно!!</p>
                </div>
            )
            
        }
        if(status === "resolved"){
            return (
                <>
                    <ul className="ImageGallery">
                        {hits.map(img => <ImageGalleryItem key={img.id} url={img.webformatURL} bigImg={img.largeImageURL} onShowModal={this.showModal} alt={img.tags}/>)}
                    </ul>
                    <Button onLoadMore={this.loadMore}/>
                </>
            )
        }
        
        
    }
}
export default ImageGallery