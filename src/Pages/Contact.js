import React from 'react'

const Contact = () => {
  return (
<div className='inner-page'>
  {/* rts contact form are start */}
  <br/><br/>
  <div className="rts-contact-form-area rts-section-gap">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-4 col-md-12">
          <div id="form-messages" />
          {/* left contact form */}
          <form
            id="contact-form"
            className="contact-page-form"
            action="https://themewant.com/products/html/openup/mailer.php"
            method="post"
          >
            <h3 className="title">Get In Touch</h3>
            {/* ingle input start */}
            <div className="single-input">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter you full name"
                required=""
              />
              <i className="fa-regular fa-user" />
            </div>
            {/* single input end */}
            {/* ingle input start */}
            <div className="single-input">
              <label htmlFor="email">Your Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="openup@info.com"
              />
              <i className="fa-light fa-envelope" />
            </div>
            {/* single input end */}
            {/* ingle input start */}
            <div className="single-input">
              <label htmlFor="textarea">Enter Your Message</label>
              <textarea
                name="message"
                id="textarea"
                placeholder="Write here your details message"
                defaultValue={""}
              />
              <i className="fa-light fa-marker" />
            </div>
            {/* single input end */}
            <button className="rts-btn btn-primary">Send Message</button>
          </form>
          {/* left contact form end */}
        </div>
        <div className="col-lg-8 col-md-12">
          <div className="map-area-start">
            <iframe
              //src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7302.196316307801!2d90.41794101531372!3d23.779518703573338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1684403774021!5m2!1sen!2sbd"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.52633258584!2d76.76357436215976!3d28.643684626335453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1727075228920!5m2!1sen!2sin"
              height={520}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* rts contact form are end */}
  {/* contact single card area start */}
  <div className="card-contact-page-area rts-section-gapBottom">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
          {/* single contact card area start */}
          <div className="single-card-area-wrapper">
            <h5 className="title">Sales</h5>
            <p className="dsic">
              Need help? Our support team is available to answer of 24x7
            </p>
            <a href="#" className="rts-btn btn-primary">
              Talk To Us <i className="fa-solid fa-arrow-right" />
            </a>
          </div>
          {/* single contact card area end */}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
          {/* single contact card area start */}
          <div className="single-card-area-wrapper">
            <h5 className="title">24X7 Support</h5>
            <p className="dsic">
              Need help? Our support team is available to answer of 24x7
            </p>
            <a href="#" className="rts-btn btn-primary">
              Talk To Us <i className="fa-solid fa-arrow-right" />
            </a>
          </div>
          {/* single contact card area end */}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
          {/* single contact card area start */}
          <div className="single-card-area-wrapper">
            <h5 className="title">Partnership</h5>
            <p className="dsic">
              Partner with us? Reach out and we'll explore all opportunities.
            </p>
            <a href="#" className="rts-btn btn-primary">
              Talk To Us <i className="fa-solid fa-arrow-right" />
            </a>
          </div>
          {/* single contact card area end */}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
          {/* single contact card area start */}
          <div className="single-card-area-wrapper">
            <h5 className="title">Request Demo</h5>
            <p className="dsic">
              Have an out of the box idea for a new AI Demo to add.
            </p>
            <a href="#" className="rts-btn btn-primary">
              Talk To Us <i className="fa-solid fa-arrow-right" />
            </a>
          </div>
          {/* single contact card area end */}
        </div>
      </div>
    </div>
  </div>
  {/* contact single card area end */}
  {/* cta area start */}
  {/* cta area start */}
  <div className="rts-cta-area rts-section-gapBottom  bg_faq">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="cta-main-wrapper bg_image">
            <div className="left">
              <h3 className="title">
                All set to level up <br />
                your content game?
              </h3>
              <a href="/" className="rts-btn btn-primary">
                Get Started Now
              </a>
            </div>
            <div className="right">
              <img src="assets/images/cta/02.png" alt="cta-area" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* cta area end */}
  {/* cta area end */}
  <div id="anywhere-home" className=""></div>
  {/* right switcher */}
  {/* <div className="modal-sidebar-scroll rts-dark-light">
    <ul>
      <li>
        <a href="dark/index.html">
          <span>Dark</span>
          <i className="rts-go-dark fal fa-moon" />
        </a>
      </li>
      <li>
        <a href="https://themewant.com/products/html/openup-rtl">
          <span>RTL</span>
          <i className="fa-solid fa-paragraph-left" />
        </a>
      </li>
    </ul>
  </div> */}
  {/* right switcher end */}
  {/* header style two */}
  <div id="side-bar" className="side-bar header-two">
    <button className="close-icon-menu">
      <i className="far fa-times" />
    </button>
    {/* mobile menu area start */}
    <div className="mobile-menu-main">
      <nav className="nav-main mainmenu-nav mt--30">
        <ul className="mainmenu metismenu" id="mobile-menu-active">
          <li className="has-droupdown parent">
            <a href="#" className="main">
              Home
            </a>
            <ul className="submenu mm-collapse">
              <li>
                <a className="mobile-menu-link" href="index.html">
                  Content Writing 01
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="index-two.html">
                  Content Writing 03
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="index-three.html">
                  Content Writing 03
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="index-four.html">
                  Ai Chat Bot
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="index-five.html">
                  Voice Generator
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="index-five.html">
                  Image Generator
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="index-five.html">
                  Photo Stock
                </a>
              </li>
            </ul>
          </li>
          <li className="parent">
            <a href="feature.html" className="main">
              Use Cases
            </a>
          </li>
          <li className="has-droupdown parent">
            <a href="#" className="main">
              Pages
            </a>
            <ul className="submenu mm-collapse">
              <li>
                <a className="mobile-menu-link" href="/AboutOpenUp">
                  About Us
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="blog.html">
                  Blog
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="blog-details.html">
                  Blog Details
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="/Contact">
                  Contact
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="use-case.html">
                  Use Case
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="use-case-2.html">
                  Use Case 2
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="case-details.html">
                  Use Case Details
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="case-details-2.html">
                  Use Case Details
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="pricing.html">
                  Pricing
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="pricing-two.html">
                  Pricing Two
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="pricing-three.html">
                  Pricing Three
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="faq.html">
                  FAQ
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="/Login">
                  Log In
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="registration.html">
                  Registration
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="reset.html">
                  Reset
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="404.html">
                  Not Found
                </a>
              </li>
            </ul>
          </li>
          <li className="parent">
            <a href="feature.html" className="main">
              Feature
            </a>
          </li>
          <li className="has-droupdown parent">
            <a href="#" className="main">
              Shop
            </a>
            <ul className="submenu mm-collapse">
              <li>
                <a className="mobile-menu-link" href="shop-details.html">
                  Product Details
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="cart.html">
                  Cart
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="checkout.html">
                  Checkout
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="/Login">
                  My Account
                </a>
              </li>
            </ul>
          </li>
          <li className="parent">
            <a href="/Contact" className="main">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="rts-social-style-one pl--20 mt--100">
        <ul>
          <li>
            <a href="#">
              <i className="fa-brands fa-facebook-f" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-youtube" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-linkedin-in" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    {/* mobile menu area end */}
  </div>
  {/* header style two End */}
  {/* rts backto top start */}
  <div className="progress-wrap">
    <svg
      className="progress-circle svg-content"
      width="100%"
      height="100%"
      viewBox="-1 -1 102 102"
    >
      <path
        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
        style={{
          transition: "stroke-dashoffset 10ms linear 0s",
          strokeDasharray: "307.919, 307.919",
          strokeDashoffset: "307.919"
        }}
      />
    </svg>
  </div>
  {/* rts backto top end */}
</div>

  )
}

export default Contact
