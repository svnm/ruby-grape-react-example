import React, { Component } from 'react'
import styled from 'styled-components'
import Card from './Card'
import Receipt from './Receipt'
import queryString from 'query-string'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      availableGames: [],
      orders: []
    }
  }

  componentDidMount () {
    fetch(`http://localhost:9292/api/get_games`)
    .then((response) => {
    	return response.json()
    }).then((data) => {
      this.setState({availableGames: data.response.games})
    })
  }

  orderGame (code, total) {
    let params = { code: code, total: total}
    fetch(`http://localhost:9292/api/order_game?${queryString.stringify(params)}`)
    .then((response) => {
    	return response.json()
    }).then((orders) => {
      console.log(orders)
      let updatedOrders = this.state.orders
      updatedOrders.push(
        orders.response.replace(/(\r\n|\n|\r)/gm,'').replace(/\s{2,}/g, ' ')
      )
      this.setState({orders: updatedOrders})
    })
  }

  render() {
    const {availableGames} = this.state
    return (
      <Wrapper>
        <Header>
          <Title>sega game shop</Title>
          <Highlight>Pick a cool game from our store</Highlight>
          <Image src='http://www.fullyretro.com/images/item-categories/2331179-thumb-sega-master-system-header.jpg' />
        </Header>

        <Content>
          <CardWrapper>
            {
              availableGames.map((game, i) => {
                return (
                  <Card
                    key={i}
                    orderGame={this.orderGame.bind(this)}
                    title={game.title}
                    code={game.code}
                    cost={game.cost}
                    image={game.image} />
                )
              })
            }
          </CardWrapper>

          <ReceiptWrapper>
            <Receipt
              orders={this.state.orders} />
          </ReceiptWrapper>
        </Content>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  @media (max-width: 468px) {
    margin: 20px;
  }
  margin: 60px;
`

const Header = styled.div`
  width: 100%;
`

const Content = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 468px) {
    flex-direction: column;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
`

const ReceiptWrapper = styled.div`
  display: flex;
  flex: 1;
`

const CardWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

const Highlight = styled.p`
  display: inline-flex;
  background: #2288ee;
  color: #fff;
  padding: 0.2rem;
`

const Title = styled.h1`
  color: #2288ee;
  margin-top: 0.5em;
  font-size: 2.0em;
`

const Image = styled.img`
  display: flex;
  width: 30rem;
  padding: 2rem 0;
`
