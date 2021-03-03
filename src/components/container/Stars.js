import React, { Component } from 'react'
import ReactStars from "react-rating-stars-component";
 import {connect} from 'react-redux'
import { rating } from '../actions/action';
class Stars extends Component {
    constructor(props) {
        super(props)
        this.state = { index:this.props.index }
    }
    
   
    
    ratingChanged = (newRating) => {
        console.log(newRating);
        this.props.rating( {index:this.props.index, rating:newRating})
      };

    render() {

        
        return (
            <div>
            <ReactStars
            
            count={5}
            value={this.props.value}
            onChange={this.ratingChanged}
            size={24}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
            />
            </div>
        )
    }
}



const mapDispatchToProps = (dispatch) =>({
    rating: (state) => {dispatch(rating(state))},
})

export default connect (null, mapDispatchToProps) (Stars)
