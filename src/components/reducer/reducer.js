
import {REGISTER,  INCREMENT_POINT_1, DECREMENT_POINT_1, INCREMENT_POINT_2, DECREMENT_POINT_2, INCREMENT_POINT_3, DECREMENT_POINT_3, INCREMENT_POINT_4, DECREMENT_POINT_4, RATING_PLAYER_1, PLAYER_ONE_POINT, PLAYER_TWO_POINT, PLAYER_THREE_POINT, PLAYER_FOUR_POINT, TOTAL_POINT, DECREMENT, RATING, GET_PLAYER } from '../types/types'

const initialState = {
    // isLoading: false,
    // data: [],
    // error:'',
    // firstName:'',
    // lastName:'',
    // password:'',
    players:{
        player_1:{points:0, rating:0},
        player_2:{points:1, rating:1},
        player_3:{points:2, rating:2},
        player_4:{points:3, rating:3}
    },

    playerArray:[
        {playerId:1, point:0, rating:0, image:"https://www.gstatic.com/webp/gallery/1.sm.jpg"},
        {playerId:2, point:0, rating:0, image:"https://www.gstatic.com/webp/gallery/2.jpg"},
        {playerId:3, point:0, rating:0, image: "https://www.gstatic.com/webp/gallery/4.jpg"},
        {playerId:4, point:0, rating:0, image: "https://www.gstatic.com/webp/gallery/5.jpg"},        
    ],
    totalPoints:0,
    playerDetail:[]
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case REGISTER:
            return{
                ...state,
                // isLoading: true,
                // firstName:action.firstName,
                // lastName:action.lastName,
                // password:action.password
            }
        case INCREMENT_POINT_1:{
            return{
               players:{
                   ...state.players,
                   player_1:{
                       ...state.players.player_1,
                       points: state.players.player_1.points + 1
                   }
               }
            }
        }

        case DECREMENT_POINT_1:{
            return{
                players:{
                    ...state.players,
                    player_1:{
                        ...state.players.player_1,
                        points: state.players.player_1.points -1
                    }
                }
            }
        }

        case INCREMENT_POINT_2:{
            return{
                players:{
                    ...state.players,
                    player_2:{
                        ...state.players.player_1,
                        points: state.players.player_2.points +1
                    }

                }
            }
        }

        case DECREMENT_POINT_2:{
            return{
                players:{
                    ...state.players,
                    player_2:{
                        ...state.players.player_2,
                        points: state.players.player_2.points -1
                    }

                }
            }
        }

        case INCREMENT_POINT_3:{
            return{
                players:{
                    ...state.players,
                    player_3:{
                        ...state.players.player_3,
                        points: state.players.player_3.points +1
                    }

                }
            }
        }

        case DECREMENT_POINT_3:{
            return{
                players:{
                    ...state.players,
                    player_3:{
                        ...state.players.player_3,
                        points: state.players.player_3.points -1
                    }

                }
            }
        }

        case INCREMENT_POINT_4:{
            return{
                players:{
                    ...state.players,
                    player_4:{
                        ...state.players.player_1,
                        points: state.players.player_4.points +1
                    }

                }
            }
        }

        case DECREMENT_POINT_4:{
            return{
                players:{
                    ...state.players,
                    player_4:{
                        ...state.players.player_4,
                        points: state.players.player_4.points -1
                    }

                }
            }
        }

        case RATING_PLAYER_1:{
            return{
                players:{
                    ...state.players,
                    player_1:{
                        ...state.players.player_1,
                        rating: state.rating
                    }
                }
            }
        }

        case PLAYER_TWO_POINT :{
            return{
                ...state,
                playerArray:action.playerArray
            }
        }

        case PLAYER_THREE_POINT :{
            return{
                ...state,
                playerArray:action.playerArray
            }
        }

        case PLAYER_FOUR_POINT :{
            return{
                ...state,
                playerArray:action.playerArray
            }
        }

        

        case TOTAL_POINT:{
            const playerArray = state.playerArray
            const newTotalPoints = playerArray.reduce((sum, item)=>{
                return sum = sum + item.point
            },0)
            return{
                ...state,
                totalPoints: newTotalPoints
            }
        }

        case PLAYER_ONE_POINT :{
            const playerOne = action.playerId
            let playerArray = state.playerArray
            let newArray = playerArray.map((item, index)=>index===playerOne ? {...item, point:item.point+1}:item)
            return{
                ...state,
                playerArray: newArray
            }
            
        }

        case DECREMENT:{
            const playerOne = action.playerId
            let playerArray = state.playerArray
            let newArray = playerArray.map((item, index)=>index===playerOne ? {...item, point:item.point-1}:item)
            return{
                ...state,
                playerArray: newArray
            }
        }
        case RATING:{
            const {rating, index} = action
            
            let playerArray = state.playerArray
            let newArray = playerArray.map((item, id)=>id===index ? {...item, rating: rating}:item)

            return{
                ...state,
                playerArray: newArray
            }
        }

        case GET_PLAYER:{
            const {id} = action
            const convertId = parseInt(id)
            let playerArray = state.playerArray
            let playerDetail =[]
            playerDetail = playerArray.filter((e)=>{return e.playerId === convertId })
            console.log(playerDetail)
            // newPlayerDetail = playerArray.map((item, index)=> index===convertId ? item: null)
            // const playerDetail = newPlayerDetail.filter((e)=>{return e !== null})
            return{
                ...state,
                playerDetail:playerDetail
            }
        }

        default:{
            return state
        }
    }
}

export default reducer