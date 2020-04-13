import React, { Component } from 'react'
import './style.css'

class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state = this.props.profil;
    }
    render(){
        return(
            <div class="sidebar">
                <h3>Profile</h3>
                <div className="avatar">
                    <img src={this.state.avatar}></img>
                </div>
                <div className="description">
                    <p>Name : <br/>{this.state.nama}</p>
                    <p>Gender : <br/>{this.state.jeniskelamin}</p>
                    <p>Place Birth : <br/>{this.state.ttl}</p>
                </div>

            </div>
        );
    }
}

export default Sidebar;