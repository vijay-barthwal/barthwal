import React,{useState} from 'react'
import {useForm} from "react-hook-form"

export default function TicTacToeHooks() {
   const [player, setPlayer] = useState([])
    const {register, handleSubmit} = useForm()

     const onSubmit = data => setPlayer(data)
     const practiceGit = () =>{console.log(`Practicing Git`)}

    return (
        
        <div>
            {JSON.stringify(player)}
            <form onSubmit={handleSubmit(onSubmit)} >
                <input  name="player.player1.name" ref={register} placeholder="Player 1"/>
                <input  name="player.player1.symbol" ref={register} placeholder="Player 1 Symbol"/>
                <br/>
                <input  name="player.player2.name" ref={register} placeholder="Player 2" />
                
                <input  name="player.player2.symbol" ref={register} placeholder="Player 2 Symbol" />
                <br/>
                <input type="submit"/>
            </form >
        </div>
    )
}
