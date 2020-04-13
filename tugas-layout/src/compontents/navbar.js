import React, { Component } from 'react'
import './style.css'

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = this.props.navbarItem;
    }
    render(){
        return(
            <div className="nav nav-tabs nav-justified navbar-expand-sm bg-dark fixed-top">
                <ul className="navbar-nav">
                    {
                        this.state.navbar.map((data) =>
                        <li className="nav-item">
                            <a href="#" className="nav-link">{data.label}</a>
                        </li>
                        )
                    }
                </ul>
            </div>
        );
    }

}

export default Navbar;