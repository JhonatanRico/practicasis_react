import React, { Component } from 'react';
import '../App.css'
import perrito from '../perrito.png';

class Header extends Component {
    render() {
        return (
            <div className="App-header">
            <img src={perrito}class="App-logo" alt= 'Foto' />
             </div>
        );
    }
}

export default Header;