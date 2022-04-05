import {Component} from 'react';
import '../Button/Button.css'
class Button extends Component{
    render(){
        return (
            <div className="ButtonCenter">
                <button className="Button" type="button" onClick={this.props.onLoadMore}>LoadMore</button>
            </div>
        )
    }
}
export default Button