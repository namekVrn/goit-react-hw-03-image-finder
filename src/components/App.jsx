import {Component} from 'react';
import Searchbar from './Searchbar'
import ImageGallery from './ImageGallery'
class App extends Component{
  state={
    imageName: null,
  }
  onChangeState=(name)=>{
    this.setState({
      imageName:name
    })
  }

  render(){
    return (
      <div>
          <Searchbar onChange={this.onChangeState}/>
          <ImageGallery imageName={this.state.imageName}/>
          <p>{this.state.imageName}</p>
      </div>
    )
  }
}
export default App