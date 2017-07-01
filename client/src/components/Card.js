import React, { Component } from 'react'
import styled from 'styled-components'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = { total: 0 }
  }

  handleOrderClick () {
    if (this.props.orderGame === undefined || this.state.total <= 0 ) { return }

    this.props.orderGame(this.props.code, this.state.total )
    this.setState({total: 0})
  }

  handleIconClick () {
    this.setState({total: this.state.total + 1})
  }

  render() {
    const {title, code, cost, image, description, total } = this.props
    return (
      <Card>
        <Column>
          <Title>{title}</Title>
          <Text>{code}</Text>
          <Text>{description}</Text>
          <Text>{cost}</Text>
          <OrderWrapper>
            <Input
              disabled
              type='number'
              value={this.state.total}
              />
            <AddIcon
              width='24' height='24' viewBox='0 0 24 24'
              onClick={() => this.handleIconClick()}>
              <g fill='currentColor' ><path d='M11 6h2v12h-2z' /><path d='M18 11v2H6v-2z' /></g>
            </AddIcon>
          </OrderWrapper>
          <OrderButton onClick={() => this.handleOrderClick()}>buy now</OrderButton>
        </Column>
        <Column>
          <Image src={image} alt={title} />
        </Column>
      </Card>
    )
  }
}

const Card = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 21rem;
`

const Title = styled.h1`
  font-size: 24px;
`

const Text = styled.p`
  font-size: 16px;
  padding: 0;
  margin: 0;
`

const OrderButton = styled.p`
  font-size: 16px;
  color: #2288ee;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`

const Image = styled.img`
  display: inline-block;
  vertical-align: middle;
  width: 10rem;
`

const OrderWrapper = styled.div`
  display: flex;
`

const AddIcon = styled.svg`
  margin-left: 5px;
  margin-top: 2px;
  cursor: pointer;
`

const Input = styled.input`
  background-color: #2288ee;
  border: none;
  height: auto;
  padding-left: 1rem;
  width: 2rem;
  color: #fff;
  &:focus {
    outline: none;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }
`
