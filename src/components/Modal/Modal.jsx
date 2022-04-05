import react,{ Component } from 'react'
import './Modal.css'

import { InfinitySpin } from  'react-loader-spinner'
class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
      }
    
      componentWillUnmount() {
       window.removeEventListener('keydown', this.handleKeyDown);
      }

      handleKeyDown = e => {
        if (e.code === 'Escape') {
            console.log(e.code)
            this.props.clouseModal()
        }
      };

      backdropClick = e => {
          if (e.currentTarget === e.target) {
            console.log('onClouseModal')
            this.props.clouseModal()
          }
      }

  render() {
    console.log(this.props.onClouseModal)
    return (
        <div className="Overlay" onClick={this.backdropClick}>
            <InfinitySpin color="blue" />
        <div className="Modal">
            
          <img src={this.props.bigImg} alt="" />
        </div>
      </div>
    )
  }
}
export default Modal