import React, { Component } from 'react'
import Layout from '../navbar/Layout'

export class List extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <Layout>
                <div>
                {this.props.firstName}
                <br/>
                {this.props.email}
                </div>
            </Layout>
            
        )
    }
}



export default List
