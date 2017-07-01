import React, { Component } from 'react'
import styled from 'styled-components'
import queryString from 'query-string'

export default class extends Component {
  render() {
    const {orders} = this.props
    if (!orders.length) {return null}
    return (
      <ReceiptWrapper>
        <Receipt>
          <Paper>
            <h1>Game Shop</h1>
            <Title>Sega receipt {formatDate(new Date())}</Title>
            <dl>
              <dt>Order #:</dt>
              <dd>9yV3NCXAE</dd>
              <dt>Date:</dt>
              <dd>{formatDate(new Date())}</dd>
            </dl>
            <Order>
              <dt>Order:</dt>
              {
                orders.map((order, i) => {
                  return <dd key={i}>{order}</dd>
                })
              }
            </Order>
          </Paper>
        </Receipt>
      </ReceiptWrapper>
    )
  }
}

const ReceiptWrapper = styled.div`
  font-size: 12px;
  font-family: VT323, monospace;
  position: fixed;
  top: 6rem;
  right: 2rem;
`

const Title = styled.div`
  text-align: left;
  line-height: 1;
  margin-top: 0.5rem;
`

const Receipt = styled.div`
  width: 15rem;
  box-shadow: 0 0.2em 1em 0.2em rgba(0, 0, 0, 0.2);
  border: 1px dotted white;
  border-width: 1px 0;
  h1 {
    font-size: 150%;
    margin: 0;
  }
  dl {
    display: flex;
    flex-wrap: wrap;
    margin: 1.5em 0 0;
  }
  dt,
  dd {
    margin: 0;
    width: 50%;
  }
  dd {
    text-align: right;
  }
`

const Order = styled.dl`
  margin: 0;
  &:before {
    content: '-------------------';
    display: block;
    width: 100%;
    text-align: right;
  }
  dt {
    text-align: left;
    width: 100%;
    margin-bottom: 1rem;
  }
  dd {
    line-height: 1.2rem;
    text-align: left;
    width: 100%;
  }
`

const Paper = styled.div`
  padding: 3em 1.5em;
  background: white;
`

const formatDate = (date) => {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ]
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();
  return day + ' ' + monthNames[monthIndex] + ' ' + year;
}
