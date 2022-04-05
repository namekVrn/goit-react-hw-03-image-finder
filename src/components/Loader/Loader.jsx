import React, { Component } from 'react'
import { InfinitySpin } from  'react-loader-spinner'
import './Loader.css'

class Loading extends Component {
  render() {
    return (
        <div className='Loader'><InfinitySpin color="blue" /></div>
    )
  }
}
export default Loading