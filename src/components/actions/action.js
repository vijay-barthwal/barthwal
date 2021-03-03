
import { REGISTER, INCREMENT_POINT_1, DECREMENT_POINT_1, INCREMENT_POINT_2, DECREMENT_POINT_2, INCREMENT_POINT_3, DECREMENT_POINT_3, INCREMENT_POINT_4, DECREMENT_POINT_4, RATING_PLAYER_1, PLAYER_ONE_POINT, PLAYER_TWO_POINT, PLAYER_THREE_POINT, PLAYER_FOUR_POINT, TOTAL_POINT, DECREMENT, RATING, GET_PLAYER } from "../types/types"

export const register =(state)=>{
    return{
        type: REGISTER,
        firstName:state.firstName,
        lastName:state.lastName,
        password:state.password
    }
}
export const incrementPoint_1 = (state)=>{
    return{
        type: INCREMENT_POINT_1,   
    }
}

export const decrementPoint_1 = (state) =>{
    return{
        type: DECREMENT_POINT_1
    }
}

export const incrementPoint_2 = (state) =>{
    return{
        type: INCREMENT_POINT_2        
    }
}

export const decrementPoint_2 = (state) =>{
    return{
        type: DECREMENT_POINT_2
    }
}

export const incrementPoint_3 = (state) =>{
    return{
        type: INCREMENT_POINT_3        
    }
}

export const decrementPoint_3 = (state) =>{
    return{
        type: DECREMENT_POINT_3
    }
}

export const incrementPoint_4 = (state) =>{
    return{
        type: INCREMENT_POINT_4        
    }
}

export const decrementPoint_4 = (state) =>{
    return{
        type: DECREMENT_POINT_4
    }
}

export const rating_player_1 = (state) =>{
    return{
        type: RATING_PLAYER_1,
        rating: state
        
    }
}



export const incrementPlayerTwo = (state) =>{
    return{
        type: PLAYER_TWO_POINT,
        playerArray: state

    }
}

export const incrementPlayerThree = (state) =>{  
    return{
        type: PLAYER_THREE_POINT,
        playerArray: state

    }
}

export const incrementPlayerFour = (state) =>{
    return{
        type: PLAYER_FOUR_POINT,
        playerArray: state

    }
}


export const addTotalPoints = (state) =>{
    return{
        type:TOTAL_POINT,
        totalPoints:state
    }
}

export const incrementPlayerOne = (state) =>{
    console.log(state)
    return{
        type: PLAYER_ONE_POINT,
        playerId:state

    }
}

export const decrementPlayerOne = (state)=>{
    console.log(`Action Dispatched`,state)
    return{
        type: DECREMENT,
        playerId:state
    }
}

export const rating = (state)=>{
    console.log(`Player rating`, state)
    return{
        type:RATING,
        rating: state.rating,
        index: state.index

    }
}

export const getPlayer = (state) =>{
    return{
        type: GET_PLAYER,
        id: state
    }
}