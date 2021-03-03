import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Menu } from 'semantic-ui-react'
import {incrementPlayerOne, decrementPlayerOne, addTotalPoints} from '../actions/action'
import Layout from '../navbar/Layout'
import CardComponent from './CardComponent'
import Stars from './Stars'
//Update git 3rd branch
class PlayersCardArray extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            playerArray:[
                {playerId:1, point:1, rating:1},
                {playerId:2, point:2, rating:2},
                {playerId:3, point:3, rating:3},
                {playerId:4, point:4, rating:4},
                
            ]
         }
    }

    componentDidUpdate(){
        this.props.addTotalPoints(this.props.totalPoints)
        
    }
   
    render() {
       
        return (
            
            <Layout>
                
                <div>
                    <Menu size="massive">Total Points = {this.props.totalPoints} </Menu>
                   
                   
                    <Card.Group >
                {this.props.playerPoints.map((item, index)=>{
                    
                    return(
                        <div key={this.props.playerPoints.indexOf(item)}>
                        
                            <CardComponent
                            imageSrc= {item.image}
                            keyId={item.playerId}
                            header={`Player ${item.playerId} -- Point = ${item.point}`}
                            name={`Player ${item.playerId}`}
                            star={<Stars index={index} value={item.rating} />}
                            onIncrement={()=>this.props.incrementPlayerOne(index)}
                            onDecrement={()=>this.props.decrementPlayerOne(index)}
                            />
                       
                        </div>
                    )
                })}

                </Card.Group>
                </div>
            </Layout>
            
        )
    }
}

const mapStateToProps = state =>({
    playerPoints: state.playerArray,
    totalPoints:state.totalPoints
    
})



const mapDispatchToProps = dispatch =>({
    incrementPlayerOne: (state) => {dispatch(incrementPlayerOne(state))},
    decrementPlayerOne: (state) => {dispatch(decrementPlayerOne(state))},
    addTotalPoints: (state) => {dispatch(addTotalPoints(state))},
  })

export default connect(mapStateToProps, mapDispatchToProps) (PlayersCardArray)
