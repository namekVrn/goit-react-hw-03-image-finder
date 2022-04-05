import {Component} from 'react';
import '../Searchbar/Searchbar.css'
import {ReactComponent as SearchIcon} from "../../img/searchIcon.svg"
class Searchbar extends Component{
    state={
        imageName: '',
    }
    updateImageName = (evt) =>{
        const {value} = evt.currentTarget
        this.setState({
            imageName: value.toLowerCase().trim()
        })
        console.log(this.state.imageName);
    }
    onSubmit = (evt) =>{
        evt.preventDefault()
        this.props.onChange(this.state.imageName)
        this.setState({
            imageName: ''
        })
    }
    render(){
        return (
            <header className="Searchbar">
                <form className='SearchForm'onSubmit={this.onSubmit}>
                    <input className="SearchForm-input" type="text" name='name' value={this.state.imageName} onChange={this.updateImageName} autoComplete={'off'} autoFocus placeholder="Search images and photos"/>         
                    <button className="SearchForm-button" type="submit">
                        <SearchIcon width="32"/>
                    </button>    
                </form>
            </header>
        )
    }
}
export default Searchbar