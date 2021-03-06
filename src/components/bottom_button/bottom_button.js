import React, {Component} from 'react'
import './bottom_button.scss'

class BottomButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            orange:true
        }
    }
    goto_new_page =() =>{
        this.props.operating(this.state.orange);
    }
    render(){
        return(
            <div className={'butttom_button_container'}>
                <div className={this.state.orange?'button_orange':'button_green'} onClick={this.goto_new_page}>
                    {this.props.word}
                </div>
            </div>
        )
    }
}

export default BottomButton