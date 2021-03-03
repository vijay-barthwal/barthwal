import React, { Component } from 'react'
import Navbar from './Navbar'

 class Layout extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              
         }
     }
     
    render() {
        return (
            <div>
                <Navbar/>
                {this.props.children}
            </div>
        )
    }
}

export default Layout
