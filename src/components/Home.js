import React, { Component } from 'react'
import { Link } from 'react-router'

class Home extends Component {

  constructor () {
    super()
    this.state = {
      name: '',
      price: '',
      description: '',
      size: ''
    }
  }

  update () {
    this.setState = {
      name: '',
      price: '',
      description: '',
      size: ''
    }
  }

  render () {
    return <div>
      <div id='snow' />
      <main className='content'>
        <article className='box'>
          {/* <Link to='/Sale' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170116_HomeSale_us_ET?scl=1&qlt=92' alt='box' height='468px' width='1165px' />
          </Link> */}
        </article>
        <article className='discount'>
          <Link to='/Apartment' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_hpgw_us_4?scl=1&qlt=92' alt='discounts' height='468px' width='1165px' />
          </Link>
          <p className='p'> *Discounts only apply if you Purchase in the next 24 hours! </p>
        </article>
        <div className='model'>
          <Link to='/Womens' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170206_hpgw_us_1?scl=1&qlt=92' alt='cloth' height='708px' width='565px' />
          </Link>
          <Link to='/Mens' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170206_hpgw_us_2?scl=1&qlt=92' alt='model' height='708px' width='565px' />
          </Link>
        </div>
        <div className='gift'>
          <Link to='/Blog'>
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_hpgw_us_3?scl=1&qlt=92' alt='gift' height='326px' width='1180px' />
          </Link>
        </div>
        <div className='apartment'>
          <Link to='/MusicTech' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/161220_MT_hp_d_ET?scl=1&qlt=92' alt='apartment' height='708px' width='565px' />
          </Link>
          <Link to='Apartment' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/161219_hpgw_us_5?scl=1&qlt=92' alt='tech' height='708px' width='565px' />
          </Link>
        </div>
        <div className='others'>
          <Link to='/Blog' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_hpgw_us_5?scl=1&qlt=92' alt='beauty' height='561px' width='380px' />
          </Link>
          <Link to='/Beauty' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_hpgw_us_6?scl=1&qlt=92' alt='intimates' height='561px' width='380px' />
          </Link>
          <Link to='/Intimates' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_hpgw_us_7?scl=1&qlt=92' alt='blog' height='561px' width='380px' />
          </Link>
        </div>
        <h2>New Arrivals</h2>
        <div className='apartment'>
          <Link to='/' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41501958_015_b?$medium$' alt='newarrivals' height='275px' width='183px' />
          </Link>
          <Link to='/' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40967259_001_b?$medium$' alt='newarrivals' height='275px' width='183px' />
          </Link>
          <Link to='/' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41325507_011_b?$medium$' alt='newarrivals' height='275px' width='183px' />
          </Link>
          <Link to='/' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41111428_066_b?$medium$' alt='newarrivals' height='275px' width='183px' />
          </Link>
          <Link to='/' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40219743_001_b?$medium$' alt='newarrivals' height='275px' width='183px' />
          </Link>
          <Link to='/' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40770281_010_b?$medium$' alt='newarrivals' height='275px' width='183px' />
          </Link>
        </div>
        <div className='rewards'>
          <Link to='/Blog' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/161219_hpgw_us_10?scl=1&qlt=92' alt='rewards' height='153px' width='1165px' />
          </Link>
        </div>
        <div className='community'>
          <Link to='/Blog' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/160912_uocomm_hp_us?scl=1&qlt=92' alt='community' height='75px' width='1165px' />
          </Link>
        </div>
        <div className='footerimg'>
          <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_hpgw_us_ig?scl=1&qlt=92' alt='footerimg' height='597px' width='1165px' />
        </div>
      </main>
      <footer>
        <div className='getitby'>
          <b>GET IT BY 12/31 - Choose EXPRESS Shipping By 1 PM ET on 12/29</b>
        </div>
        <div className='justify'>
          <div className='column1'>
            <ul className='help'>
              <b>Help</b>
              <br />
              <li className='signups1'>Order Status</li>
              <li className='signups'>Orders & Payments</li>
              <li className='signups'>Shipping</li>
              <li className='signups'>Returns & Exchanges</li>
              <li className='signups'>FAQ</li>
              <li className='signups'>Gift Cards</li>
              <li className='signups'>Contact Us</li>
              <div className='column2'>
                <ul className='quick'>
                  <b id='q'>Quick Links</b>
                  <br />
                  <li className='signups1'>In-Store Pickup</li>
                  <li className='signups'>Brands</li>
                  <li className='signups'>Careers</li>
                  <li className='signups'>Shop SA</li>
                  <li className='signups'>Shop Europe</li>
                  <li className='signups'>Shop Canada</li>
                  <li className='signups'>Facebook</li>
                </ul>
              </div>
            </ul>
            <div className='offers'>
              <ul className='offers'>
                <b id='u'>Get Special Offers if you sign up here!</b>
                <br />
                <li className='signups1'>Twitter</li>
                <li className='signups'>Facebook</li>
                <li className='signups'>Youtube</li>
                <li className='signups'>Spotify</li>
                <li className='signups'>Soundcloud</li>
                <li className='signups'>LinkedIn</li>
              </ul>
            </div>
          </div>
        </div>
        <ul className='rew'>
          <b id='uo'>Rewards</b>
          <br />
          <p>Click Here. Join Now.</p>
          <article className='b2'>
            <ul className='b5'>
              <form action='email'>
                <li className='b4'>Email: <input type='text' name='/' /><br /></li>
                <li className='b4'><input type='submit' value='Submit' /><br /></li>
                <li className='b4'><p className='b1'>By entering your email address, <br /> you agree to receive Kramer's offers,<br /> promotions, and other commercial messages. <br /> You may unsubscribe at any time.</p></li>
              </form>
            </ul>
            <ul className='apps'>
              <li className='b3'><img src='http://www.urbanoutfitters.com/urban/images/apple-app-store.jpg' height='27px' width='90px' /></li>
              <br />
              <li className='b3'><img src='http://www.urbanoutfitters.com/urban/images/google-app-store.png' height='27px' width='90px' /> </li>
              <br />
              <li className='b3'><img src='http://www.urbanoutfitters.com/urban/images/amazon-app-store.png' height='27px' width='90px' /> </li>
              <br />
            </ul>
          </article>
        </ul>
        {/* <ul className='connect'>
          <li>2</li>
          <li>1</li>
          <li>2</li>
          <li>1</li>
          <li>2</li>
          <li>1</li>
        </ul> */}
        <ul className='find'>
          <b id='ak'>Find A Store</b>
          <br />
          <p>Store Locator</p>
          <p>UO Spaces</p>
        </ul>
      </footer>
    </div>
  }
};

export default Home
