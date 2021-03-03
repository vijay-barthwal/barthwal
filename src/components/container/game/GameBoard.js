import React, { Component } from 'react'
import GameButton from './GameButton'
import { Grid, Button } from 'semantic-ui-react'
class GameBoard extends Component {
    constructor(props) {
        super(props)
   
        this.state = {
            isGameStart:false,
             isCross: false,
             winMessage: null,
             itemArray : new Array(9).fill(null),
             player:[{id:0,name:"", symbol:null},
             {id:1,name:"", symbol:null}
            ],
            
        }
    }

    

    relodeGame = ()=>{
        this.setState({isCross:false, winMessage:"", itemArray:this.state.itemArray.fill(null, 0, 9) }, )
        window.location.reload()
        
    }

    checkWinner = (checkItemArray)=>{
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (checkItemArray[a] && checkItemArray[a] === checkItemArray[b] && checkItemArray[a] === checkItemArray[c]) {
              return checkItemArray[a]===null ?null: this.winnerName(checkItemArray[a])
            }
          }
           
    }

   

    changeItem = (itemNumber)=>{
    const {itemArray, winMessage, isCross,  player} = this.state
        if(winMessage){
            return(winMessage)
        }
        if(itemArray[itemNumber]===null){

            itemArray[itemNumber] =isCross? player[1].symbol: player[0].symbol;
            this.setState({isCross:!this.state.isCross})          
        }else{
            
        }
        this.checkWinner(itemArray)
    }

    

    update = ()=>{
        const{player } = this.props.allState.updateState;
        if(player[0].symbol===""){
            player[0] ={...player[0],symbol:"X"}
        }
        if(player[1].symbol===""){
            player[1] ={...player[1],symbol:"O"}
        }
        if(player[0].name===""){
            player[0] ={...player[0],name:"Player 1"}
        }
        if(player[1].name===""){
            player[1] ={...player[1],name:"Player 2"}
        }
       
       this.setState({...this.state,
                        player:player,
                        isGameStart:true})
       this.props.allState.callBack()
       
    }


    winnerName =(declareWinner)=>{
        let { player} = this.state
        let winner =player.filter((e)=>{return e.symbol === declareWinner})
        this.setState({winMessage:`${winner[0].name} is Winner`})
    }

    render() {
        
       
        const {isCross, winMessage, itemArray, player, isGameStart} = this.state
        
        return (
            
            <div style={{maxWidth:350, margin:"auto" }} >
               
                {winMessage ? 
               
                <div>
                    <h1>{winMessage}</h1>
                </div> 

                : isCross?(<h5 style={{color:"red"}} >{player[1].name}</h5>):(<h5 style={{color:"blue"}} >{player[0].name}</h5>)  } 
                
 <Grid columns={3} divided>
    <Grid.Row  >  
          
        {itemArray.map((item, index)=>{
           
            return(
            <Grid.Column  offset={2} key={index} >
            <GameButton onClick={()=>this.changeItem(index)} name={item} />
            </Grid.Column>
            )
        })}
    </Grid.Row>
</Grid>
{isGameStart===false?<Button primary onClick={this.update} >Start Game</Button>:<Button color="orange" onClick={this.relodeGame} >Reload Game</Button>}


            </div>
        )
    }
}

export default GameBoard
