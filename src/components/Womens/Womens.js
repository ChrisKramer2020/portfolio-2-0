import React, { Component } from 'react'
import { Link } from 'react-router'

class Womens extends Component {

  constructor () {
    super()
    this.state = {
      visibleCategory: null
    }
  }

  showCategory (category) {
    this.setState({ visibleCategory: category })
  }

  hideCategory (category) {
    this.setState({ visibleCategory: null })
  }

  render () {
    return <div className='Womens'>
      <main className='womenslayout'>
        <nav className='pleasework'>
          <ul className='pleasework'>
            {/* <Link to='/WomensCollections' >
              <li className='font'>Collections</li>
            </Link> */}
            <Link to='/WomensNew' >
              <li className='font'>New</li>
            </Link>
            <Link to='/WomensDressesRompers' >
              <li className='font'>Dresses + Rompers</li>
            </Link>
            <Link to='/WomensTops' >
              <li className='font'>Tops</li>
            </Link>
            <Link to='/WomensJackets' >
              <li className='font'>Jackets</li>
            </Link>
            <Link to='/WomensBottoms' >
              <li className='font'>Bottoms</li>
            </Link>
            {/* <Link to='/Intimates' >
              <li className='font'>Intimates</li>
            </Link> */}
            <Link to='/WomensSwim' >
              <li className='font'>Swim</li>
            </Link>
            <Link to='/WomensVintage' >
              <li className='font'>Vintage</li>
            </Link>
            {/* <Link to='/Beauty' >
              <li className='font'>Beauty</li>
            </Link> */}
            <Link to='/WomensAccessories' >
              <li className='font'>Accessories</li>
            </Link>
            <Link to='/WomensShoes' >
              <li className='font'>Shoes</li>
            </Link>
            <Link to='/WomensBrands' >
              <li className='font'>Brands</li>
            </Link>
            <Link to='/WomensSale' >
              <li className='font'>Sale</li>
            </Link>
          </ul>
        </nav>
        <div className='womensimg1'>
          <Link to='/love' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_1?scl=1&qlt=92' alt='updatedutility' height='686px' width='565px' />
          </Link>
          <Link to='/blog' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_2?scl=1&qlt=92' alt='updatedutility' height='686px' width='565px' />
          </Link>
        </div>
        <div className='womensimg2'>
          <Link to='/WomensHeelsWedges' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_3?scl=1&qlt=92' alt='thejumpsuit' height='535px' width='380px' />
          </Link>
          <Link to='/Apartment' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170206_agw_us_3?scl=1&qlt=92' alt='thejumpsuit' height='535px' width='380px' />
          </Link>
          <Link to='/WomensDressesRompers' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_5?scl=1&qlt=92' alt='thejumpsuit' height='535px' width='380px' />
          </Link>
        </div>
        <div className='womensimg3'>
          <Link to='/WomensAccessories' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_6?scl=1&qlt=92' alt='sweater' height='717px' width='565px' />
          </Link>
          <Link to='/WomensTops' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_7?scl=1&qlt=92' alt='sweater' height='717px' width='565px' />
          </Link>
        </div>
        <div className='womensimg5'>
          <Link to='/WomensDressesRompers' >
            <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_8?scl=1&qlt=92' alt='vdayshop' height='218px' width='1165px' />
          </Link>
        </div>
        <h2>Womens New Arrivals</h2>
        <section className='womensnewarrivalswrapper'>
          <div className='womensnewarrival1'>
            <Link to='/WomensNew' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41072794_003_b' alt='newarrival1' height='279px' width='179px' />
            </Link>
            <Link to='/WomensNew' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41256975_030_b' alt='newarrival2' height='279px' width='179px' />
            </Link>
            <Link to='/WomensNew' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41210246_049_b' alt='newarrival3' height='279px' width='179px' />
            </Link>
            <Link to='/WomensNew' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41210246_049_b' alt='newarrival3' height='279px' width='179px' />
            </Link>
            <Link to='/WomensNew' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41325507_011_b' alt='newarrival5' height='279px' width='179px' />
            </Link>
            <Link to='/WomensNew' >
              <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/41034919_015_b' alt='newarrival6' height='279px' width='179px' />
            </Link>
          </div>
        </section>
        <section className='womensstories'>
          <div className='womensstoriesrow'>
            <article className='womensstoriesitems'>
              <Link to='/womensproductpage' >
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_9?scl=1&qlt=92' alt='item1' height='717px' width='565px' />
              </Link>
              <Link to='/womensproductpage' >
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_10?scl=1&qlt=92' alt='item2' height='717px' width='565px' />
              </Link>
            </article>
          </div>
        </section>
        <section className='womenstrends'>
          <div className='womenstrendone'>
            <ul className='womenstrendingone'>
              {/* <li>Champion + OU</li>
              <li>Shop By Fit</li>
              <li>LookBook:The Checklist</li>
              <li>New Stussy</li>
              <li>UO:Presents Artist Edition</li>
              <li>Vintage</li> */}
            </ul>
          </div>
        </section>
        <section className='womensbrands'>
          <div className='womenstrendtwo'>
            <ul className='womenstrendingtwo'>
              {/* <li>adidas</li>
              <li>Calvin Klein</li>
              <li>Herschel Supply Co</li>
              <li>Katin</li>
              <li>Levi's</li>
              <li>Patagonia</li> */}
            </ul>
          </div>
        </section>
        <section className='fromtheblog'>
          <div className='blogwrapper'>
            <div className='blogitem1'>
              <Link to='/blog' >
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_b_1?scl=1&qlt=92' alt='blogitem1' height='240px' width='360px' />
              </Link>
              <Link to='/blog' >
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_b_2?scl=1&qlt=92' alt='blogitem2' height='240px' width='360px' />
              </Link>
              <Link to='/blog' >
                <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_b_3?scl=1&qlt=92' alt='blogitem3' height='240px' width='360px' />
              </Link>
            </div>
            <article className='daos'>
              <div className='yourcommunity'>
                <Link to='/blog' >
                  <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/160912_uocomm_m_us?scl=1&qlt=92' alt='community' height='75px' width='1165px' />
                </Link>
              </div>
              <div className='communitytwo'>
                <Link to='/blog' >
                  <img src='http://images.urbanoutfitters.com/is/image/UrbanOutfitters/170123_wgw_us_ig?scl=1&qlt=92' alt='num2' height='598px' width='1165px' />
                </Link>
              </div>
            </article>
          </div>
        </section>
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
          </article>
        </ul>
        <ul className='find'>
          <b id='ak'>Find A Store</b>
          <br />
          <p>Store Locator</p>
          <p>UO Spaces</p>
        </ul>
        <ul className='volunteer'>
          <b className='b7'>Volunteer</b>
          <p className='b6'>Click Here.</p>
        </ul>
        <ul className='apps'>
          <li className='b3'><img src='http://www.urbanoutfitters.com/urban/images/apple-app-store.jpg' height='27px' width='90px' /></li>
          <br />
          <li className='b3'><img src='http://www.urbanoutfitters.com/urban/images/google-app-store.png' height='27px' width='90px' /> </li>
          <br />
          <li className='b3'><img src='http://www.urbanoutfitters.com/urban/images/amazon-app-store.png' height='27px' width='90px' /> </li>
          <br />
        </ul>
      </footer>
    </div>
  }
  }

export default Womens
