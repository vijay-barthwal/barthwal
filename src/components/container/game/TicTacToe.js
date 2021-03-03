import React, { Component } from 'react'
import Layout from '../../navbar/Layout'
import GameBoard from './GameBoard'



export class TicTacToe extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            gameStartedP0:false,
            gameStartedP1:false,
            player:[{id:0, name:"", symbol:"", placeholder:`Player 1`, valueX:`X`, valueO:`O`},
                    {id:1, name:"", symbol:"", placeholder:`Player 2`, valueX:`X`, valueO:`O`},
                ]
        }  
    }
    

    handlePlayerName =(index, e)=>{
        let player = [...this.state.player]
        console.log(player)
        player[index] = {...player[index],name:e.target.value }
        this.setState({player})   
    }


    handlePlayerSymbol =(index, e)=>{
        let player = [...this.state.player]
        
        player[index] = {...player[index],symbol:e.target.value }

            let secondIndex = index
            let secondSymbol = e.target.value
       if(secondIndex===1){
            player[0] = secondIndex===1 && secondSymbol==="X" ? {...player[0],symbol:"O" } : {...player[0],symbol:"X" } 
       }
       if (secondIndex===0){
            player[1] = secondIndex===0 && secondSymbol==="X" ? {...player[1],symbol:"O" } : {...player[1],symbol:"X" } 
       }
           
        this.setState({player}, () => {

            // let secondIndex = index
            // let secondSymbol = e.target.value
            
            
            // if(secondIndex===0 && secondSymbol==="X"){
            //     player[1] = {...player[1], symbol: "O"}
            //     this.setState({player})
            // }
            // if(secondIndex===0 && secondSymbol==="O"){
            //     player[1] = {...player[1], symbol: "X"}
            //     this.setState({player})
            // }
            // if(secondIndex===1 && secondSymbol==="X"){
            //     player[0] = {...player[0], symbol: "O"}
            //     this.setState({player})
            // }
            // if(secondIndex===1 && secondSymbol==="O"){
            //     player[0] = {...player[0], symbol: "X"}
            //     this.setState({player})
            // }


           // console.log(`Player update`, player);
        }) 
       // this.swipeSymbol()
    }


    // swipeSymbol = () =>{
    //     setTimeout(() => {
    //         let player = [...this.state.player]
        
    //         if(player[0].symbol==="X"){
    //             player[1] = {...player[1], symbol:"O"}
    //             this.setState({player}, () => {
    //                 console.log('in if', player);
    //             })
    //             console.log(`Case 1`)
    //         }
    //         if(player[0].symbol==="O"){
    //             player[1] = {...player[1], symbol:"X"}
    //             this.setState({player}, () => {
    //                 console.log('in 2 if', player);
    //             })
    //             console.log(`Case 2`)
    //         }
    //         console.log(player[0].symbol,player[1].symbol)
    //     }, 2);
    // }


    
    testChildToParent = ()=>{
        this.setState({
            ...this.state,
            gameStartedP0: !this.state.gameStartedP0,
            gameStartedP1: !this.state.gameStartedP1
        })
    }


    
    render() {
        const {player} = this.state
        return (
            <Layout>    
        <div>
            <form >
                {player.map((item, index)=>{
                    
                    
                    return(
                    <div key ={index} >
                        <label>{item.placeholder}</label>
                        <input
                        placeholder={item.placeholder}
                        onChange={(e)=>{this.handlePlayerName(index, e)}}
                        value={item.name}
                        />


                        <label>{item.valueX}</label>
                        <input
                        type="radio"
                        name="X"
                        value={item.valueX}
                        checked={item.symbol==="X" ? true : false}
                        onChange={(e)=>{this.handlePlayerSymbol(index, e)}}
                        />
                        
                        
                        <label>{item.valueO}</label>
                        <input
                        type="radio"
                        name="O"
                        value={item.valueO}
                        checked={item.symbol==="O" ? true : false}
                        onChange={(e)=>{this.handlePlayerSymbol(index, e)}}
                        />
                        
                    </div>
                )}
                )}
            </form>
           
           
            <GameBoard allState = {{callBack:this.testChildToParent, updateState:this.state}} />
          
        </div>
        </Layout>
        )
    }
}

export default TicTacToe
