import React, { Component } from 'react'
import styled from 'styled-components'
import Card from './Card'
import Receipt from './Receipt'
import queryString from 'query-string'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      orders: []
    }
  }

  componentDidMount () {
    const {onGetGames} = this.props
    onGetGames()
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
    const {games} = this.props
    return (
      <Wrapper>
        <Header>
          <Title>sega game shop</Title>
            <HeaderImage src='https://s-media-cache-ak0.pinimg.com/originals/a2/98/f9/a298f9decc1824be455da5571b8e211f.jpg' />
        </Header>

        <Content>
          <Highlight>Pick a cool game from our store</Highlight>
          <Image src='http://www.fullyretro.com/images/item-categories/2331179-thumb-sega-master-system-header.jpg' />

          <CardWrapper>
            {
              games.map((game, i) => {
                return (
                  <Card
                    key={i}
                    orderGame={this.orderGame.bind(this)}
                    title={game.title}
                    description={game.description}
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
  margin: 0;
`

const Header = styled.div`
  width: 100%;
  box-shadow: 0 0 12px 1px rgba(0,0,0,0.1);
  background: white;
  padding: 1rem 6rem;
  position: fixed;
  top: 0;
  z-index: 2;
`

const Content = styled.div`
  display: flex;
  width: 100%;
  margin: 6rem;
  flex-direction: column;
  overflow: scroll;
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
  color: #254356;
  padding: 0.2rem;
  font-size: 1.6rem;
`

const Title = styled.h1`
  color: #2288ee;
  margin-top: 0.5rem;
  font-size: 2rem;
`

const Image = styled.img`
  display: flex;
  width: 30rem;
  padding: 2rem 0;
`

const HeaderImage = styled.img`
  position: absolute;
  right: 16rem;
  top: 4px;
  height: 5rem;
`
