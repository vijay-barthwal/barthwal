import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
//Update git 3rd branch

const CardComponent = (props) => (
    <Card key={props.keyId} >
      {JSON.stringify(props.index)}
      <Card.Content >
        <Link to = {`/cardArray/playerId/${props.keyId}`} ><Image
          floated='right'
          size='mini'
          src={props.imageSrc}
        /></Link>
      
        <Card.Header >{props.header}</Card.Header>
        <Card.Meta>{props.name}</Card.Meta>
        <Card.Meta>{props.star}</Card.Meta>
        
          
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
          
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        
        <div className='ui two buttons'>
          <Button basic color='green' onClick={props.onIncrement} >
            +
          </Button>
          <Button basic color='red' onClick={props.onDecrement} >
            -
          </Button>
        </div>
      </Card.Content>
    </Card>
  
)

export default CardComponent