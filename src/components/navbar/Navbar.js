import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='register'
          active={activeItem === 'register'}
          as = {Link} to = '/register'
          onClick={this.handleItemClick}
        >
          Register
        </Menu.Item>

        <Menu.Item
          name='card'
          active={activeItem === 'card'}
          as = {Link} to = '/card'
          onClick={this.handleItemClick}
        >
          Card
        </Menu.Item>

        <Menu.Item
          name='cardArray'
          active={activeItem === 'cardArray'}
          onClick={this.handleItemClick}
          as = {Link} to = '/cardArray'
        >
          Card Array
        </Menu.Item>

        <Menu.Item
          name='Game'
          active={activeItem === 'Game'}
          onClick={this.handleItemClick}
          as = {Link} to = '/game'
        >
          TicTacToe
        </Menu.Item>

        {/* <Menu.Item
          name='Game'
          active={activeItem === 'Game'}
          onClick={this.handleItemClick}
          as = {Link} to = '/gameHook'
        >
          TicTacToeHook
        </Menu.Item> */}

        <Menu.Item
          name='Ref'
          active={activeItem === 'Ref'}
          onClick={this.handleItemClick}
          as = {Link} to = '/ref'
        >
          Ref
        </Menu.Item>
      </Menu>
    )
  }
}