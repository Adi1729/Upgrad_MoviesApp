import React, { Component } from 'react';
import './Home.css';
import Header from '../../common/header/Header'
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

class Home extends Component{
    render(){
        return (
            <div>
                <Header />
            </div>
        )
    }
}

export default Home ;

