import React, { Component } from 'react'
import { Card, Button, Rating } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {incrementPoint_1, decrementPoint_1, incrementPoint_2, decrementPoint_2, incrementPoint_3, decrementPoint_3, incrementPoint_4, decrementPoint_4, rating_player_1} from '../actions/action'
import Layout from '../navbar/Layout'

class PlayerCards extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            players:{
                player_1:{points:0, rating:0},
                player_2:{points:0, rating:0},
                player_3:{points:0, rating:0},
                player_4:{points:0, rating:0}
            }
        }
    }

    addPoints = ()=>{
        let addPoints =  this.props.player_1.points + this.props.player_2.points +this.props.player_3.points +this.props.player_4.points
        console.log(addPoints)
        return addPoints
    }
    CheckRating = (e,{ rating }) => {

        this.props.rating_player_1(rating)
    }


    render() {
        return (
            <Layout>
                
            <div style={{marginTop:40}} >
                <h4>Total points -- {this.addPoints()} </h4>
                <Card.Group>
                    <Card>
                        <Card.Content>

                            <Card.Header>
                                Steve Sanders
                            </Card.Header>
                            <Card.Meta>
                                Friends of Elliot
                            </Card.Meta>
                            <Card.Description>
                                <Rating
                                icon='star'
                                size='huge'
                                defaultRating={0}
                                maxRating={5}
                                onRate={this.props.rating_player_1}
                                />
                                
                                <h5>Points - {this.props.player_1.points}</h5>
                                
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <Button
                                basic color='green'
                                onClick={this.props.incrementPoint_1}
                                >
                                    +
                                </Button>
                                <Button
                                basic color='red'
                                onClick={this.props.decrementPoint_1}
                                >
                                    -
                                </Button>
                            </div>
                        </Card.Content>
                    </Card>


                    <Card>
                        <Card.Content>
                            <Card.Header>Molly Thomas</Card.Header>
                            <Card.Meta>New User</Card.Meta>
                            <Card.Description>
                                <Rating icon='star' size='huge' defaultRating={this.props.player_2.rating} maxRating={5} />
                                <h5>Points - {this.props.player_2.points}</h5>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <Button basic color='green' onClick={this.props.incrementPoint_2} >
                                    +
                                </Button>
                                <Button basic color='red' onClick={this.props.decrementPoint_2} >
                                    -
                                </Button>
                            </div>
                        </Card.Content>
                    </Card>


                    <Card>
                        <Card.Content>

                            <Card.Header>Jenny Lawrence</Card.Header>
                            <Card.Meta>New User</Card.Meta>
                            <Card.Description>
                                <Rating icon='star' size='huge' defaultRating={this.props.player_3.rating} maxRating={5} />
                                <h5>Points - {this.props.player_3.points}</h5>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <Button basic color='green' onClick={this.props.incrementPoint_3} >
                                    +
                                </Button>
                                <Button basic color='red' onClick={this.props.decrementPoint_4} >
                                    -
                                </Button>
                            </div>
                        </Card.Content>
                    </Card>


                    <Card>
                        <Card.Content>
                            <Card.Header>David</Card.Header>
                            <Card.Meta>New User</Card.Meta>
                            <Card.Description>
                                <Rating icon='star'  size='huge' defaultRating={this.props.player_4.rating} maxRating={5} />
                                <h5>Points - {this.props.player_4.points}</h5>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <Button basic color='green' onClick={this.props.incrementPoint_4} >
                                    +
                                </Button >
                                <Button basic color='red' onClick={this.props.decrementPoint_4} >
                                    -
                                </Button>
                            </div>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </div>
            </Layout>
        )
    }
}

const mapStateToProps = state =>({
     player_1:state.players.player_1,
     player_2:state.players.player_2,
     player_3:state.players.player_3,
     player_4:state.players.player_4,
   
})

const mapDispatchToProps = dispatch =>({
    incrementPoint_1: (state) =>{dispatch(incrementPoint_1(state))},
    decrementPoint_1: (state) =>{dispatch(decrementPoint_1(state))},
    incrementPoint_2: (state) =>{dispatch(incrementPoint_2(state))},
    decrementPoint_2: (state) =>{dispatch(decrementPoint_2(state))},
    incrementPoint_3: (state) =>{dispatch(incrementPoint_3(state))},
    decrementPoint_3: (state) =>{dispatch(decrementPoint_3(state))},
    incrementPoint_4: (state) =>{dispatch(incrementPoint_4(state))},
    decrementPoint_4: (state) =>{dispatch(decrementPoint_4(state))},
    rating_player_1: (state) =>{dispatch(rating_player_1(state))}
})
export default connect(mapStateToProps, mapDispatchToProps) (PlayerCards)
