import React, { Component } from 'react';
import '../css/components.css'
import '../css/responsee.css'
import '../css/template-style.css'
import logo from '../logo-dark.png';

class HeaderComponent extends Component {

    render() {
        return (
            <div>
                <header className="fixed-top" style={{width:"100%",backgroundColor:"grey"}}>

                    <header role="banner" className="position-absolute margin-top-0 margin-m-top-0 margin-s-top-0" style={{width:"100%"}}>

                        <nav class="background-dark background-black-hightlight full-width sticky"><h4 class="text-white">EVENTO 365</h4>
                        
                                    
                                    <ul class="right chevron">
                                        <li><a class="text-white" href="index.html">Home</a></li>
                                        <li><a class="text-white" href="about-us.html">About Us</a></li>
                                        <li><a class="text-white" href="contact.html">Contact</a></li>
                                    </ul>
                                
                            <div class="s-12 l-2">
                                <a href="index.html" class="logo">
                                    <br></br>
                                    
                                </a>
                            </div>
                                
                            
                        </nav>
                    </header>


                </header>
            </div>
        )
    }
}

export default HeaderComponent;