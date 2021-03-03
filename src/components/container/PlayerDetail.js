import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Button } from 'semantic-ui-react'
import { getPlayer } from '../actions/action'
import Layout from '../navbar/Layout'
//Update git 3rd branch
class PlayerDetail extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    componentDidMount(){
        const id = this.props.match.params.id
        this.props.getPlayer(id)
    }
    
    goBack = ()=>{
        this.props.history.goBack()
    }

    render() {
        
        const {playerDetail} =this.props.playerDetail
        if (playerDetail.length === 0){
            return(
                <Layout>
                    <Button onClick={this.goBack} labelPosition="left" icon="left chevron" content="Back" />
                <h1>No Record Found</h1>
                </Layout>
            )
        }
        return (
            <Layout>
                
                <Button onClick={this.goBack} labelPosition="left" icon="left chevron" content="Back" />
                
                
            <div>
                {playerDetail.map((item, index)=>(
                    <div key={item.playerId}>
                    <img alt="Vijay" src={item.image} width="200" height="200"/>
                    <h3>{`Player index is - ${index}`}</h3>
                    <h3>{`Player Id --${item.playerId}`}</h3>
                    <h3>{`Rating is -- ${item.rating}`}</h3>
                    <h3>{`Point is -- ${item.point}`} </h3>
                </div>
                ))}
            </div>
            </Layout>
        )
    }
}

const mapStateToProps = (state)=>({
    playerDetail:state
})
const mapDispatchToProps = (dispatch) =>({
    getPlayer: (state) =>{dispatch(getPlayer(state))}
})
export default connect (mapStateToProps,mapDispatchToProps)  (PlayerDetail)
