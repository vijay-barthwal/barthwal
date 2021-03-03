import React, { Component } from 'react'
// import{Card, Col, Row, Table} from 'react-bootstrap'

class GameButton extends Component {
 //   practiceGit = () =>{console.log(`Practicing Git`)}
    
    render() {
        const {name} = this.props
        switch(name){
            case "O":{
                return(
                    <div 
                    onClick={this.props.onClick}
                    style={{textAlign:"center",
                            height:100,
                            width:100,
                            color:"red",
                            fontSize:40,
                            marginBottom:5,
                            padding:  0,
                            alignContent:"center",
                            border:"solid #79ede3" }} >
                {name}
            </div>
                )
            }
        case "X":{
            return(
                <div 
                onClick={this.props.onClick}
                style={{textAlign:"center",
                        height:100,
                        width:100,
                        fontSize:40,
                        color:"blue",
                        marginBottom:5,
                        padding: 0,
                        alignContent:"center",
                        border:"solid #79ede3" }} >
                {name}
            </div>
            )
        }
        default:
            return(

                <div
                onClick={this.props.onClick}
                style={{textAlign:"center",
                        height:100,
                        width:100,
                        fontSize:40,
                        marginBottom:5,
                        padding:0,
                        alignContent:"center",
                        border:"solid #79ede3" }} >
                {name}
            </div>
            )
        }
    }
}

export default GameButton
