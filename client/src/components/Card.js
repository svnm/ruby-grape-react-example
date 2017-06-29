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
        <Title>{title}</Title>
        <Text>{code}</Text>
        <Text>{description}</Text>
        <Bunch>
          <Text>{cost}</Text>
          <AddIcon
            width='24' height='24' viewBox='0 0 24 24'
            onClick={() => this.handleIconClick()}>
            <g fill='currentColor' ><path d='M11 6h2v12h-2z' /><path d='M18 11v2H6v-2z' /></g>
          </AddIcon>
        </Bunch>

        <OrderWrapper>
          <Input
            type='number'
            value={this.state.total}
            />
          <OrderButton onClick={() => this.handleOrderClick()}>buy now</OrderButton>
        </OrderWrapper>
        <Image src={image} alt={title} />
      </Card>
    )
  }
}

const Card = styled.div`
  flex: 1;
  width: 100%;
`

const Title = styled.h1`
  font-size: 24px;
  color: #2288ee;
`

const Text = styled.p`
  font-size: 16px;
  color: #8b7b8b;
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
  height: auto;
  max-width: 400px;
  width: 50%;
`

const OrderWrapper = styled.div`
  display: flex;
`

const Bunch = styled.div`
  display: flex;
`

const AddIcon = styled.svg`
  margin-left: 1rem;
  color: #2288ee;
  margin-top: 5px;
  cursor: pointer;
`

const Input = styled.input`
  background-color: #2288ee;
  border: none;
  height: auto;
  margin-right: 1rem;
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
