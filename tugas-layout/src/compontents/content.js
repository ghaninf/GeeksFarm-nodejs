import React, { Component } from 'react'
import './style.css'

class Content extends Component {
    constructor(props){
        super(props);
        this.state = this.props.content;
    }
    render(){
        return(
            <div className="content">
                <h1>{this.state.judul}</h1>
                <div className="content-text">
                    <p className="text">
                        {this.state.pembuka} <br/><br/>
                        {this.state.tulisan} <br/><br/>
                        {this.state.penutup}
                    </p>
                </div>
            </div>
        );
    }
}

export default Content;