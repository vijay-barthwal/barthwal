import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import GameBoard from '../container/game/GameBoard'
import TicTacToe from '../container/game/TicTacToe'
// import TicTacToeHooks from '../container/game/TicTacToeHooks'
import List from '../container/List'
import PlayerCards from '../container/PlayerCards'
import PlayerDetail from '../container/PlayerDetail'
import PlayersCardArray from '../container/PlayersCardArray'
import Register from '../container/Register'
import UseRefsPractice from '../container/UseRefsPractice'
export class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                      <Route exact path = "/register" component={Register}/>
                      <Route exact path = "/" component={List}/>   
                      <Route exact path = "/card" component={PlayerCards}/>   
                      <Route exact path = "/game" component={TicTacToe}/>   
                      {/* <Route exact path = "/gameHook" component={TicTacToeHooks}/>    */}
                      <Route exact path = "/gameBoard" component={GameBoard}/>   
                      <Route exact path = "/cardArray" component={PlayersCardArray}/> 
                      <Route exact path = "/cardArray/playerId/:id" component={PlayerDetail}/> 
                      <Route exact path = "/ref" component={UseRefsPractice}/> 
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Home
