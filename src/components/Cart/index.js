import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {Component} from 'react'

import Header from '../Header'

import './index.css'

class Cart extends Component {
  render() {
    const jwtToken = Cookies.get('JWT_TOKEN')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <>
        <Header />
        <div className="cart-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
            alt="cart"
            className="cart-img"
          />
        </div>
      </>
    )
  }
}

export default Cart
