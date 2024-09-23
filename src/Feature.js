import React from 'react'

const Feature = () => {
  return (
<div className="inner-page">
  {/* use case area start */}
  <br/>
  <div className="use-case-details-area rts-section-gapTop">
    <div className="container section-seperatorBottom rts-section-gapBottom">
      <div className="row" style={{marginTop:"50px"}}>
        <div className="col-lg-6">
          <div className="title-left-area">
            <h2 className="title">
            Connect with your customers in their favorite messaging apps
            </h2>
            <a href="#" className="rts-btn btn-primary">
              Try For Free <i className="fa-regular fa-arrow-right" />
            </a>
          </div>
        </div>
        <div className="col-lg-6 mt_md--50 mt_sm--50">
          <div className="thumbnail-case-top">
            <img src="assets/images/case/01.png" alt="case" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="rts-case-area rts-section-gap">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="title-conter-area">
            <span className="pre-title-bg">Omnichannel Messaging</span>
            <h2 className="title">
             Deploy AI Chatbot across messaging apps in 5 mins
            </h2>
          </div>
        </div>
      </div>
      <div className="row g-5 mt--10">
        <div className="col-lg-4">
          {/* single use case */}
          <div className="single-use-case">
            <div className="icon" style={{marginLeft:"70px"}}>
              <svg
                width={100}
                height={100}
                viewBox="0 0 50 50"
                fill="none"
                class='bi bi-facebook'
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
                  fill="#3F3EED"
                />
              </svg>
            </div>
            <h5 className="title" style={{marginTop:"-60px"}}>Facebook</h5>
            <p className="disc">
              Manage customer messages on your Facebook messenger through the Polymatric dashboard
            </p>
            <a href="#" className="more-case-btn">
              Integrate with Polymatric
              <i className="fa-regular fa-arrow-right" />
            </a>
          </div>
          {/* single use case end */}
        </div>
        <div className="col-lg-4">
          {/* single use case */}
          <div className="single-use-case">
            <div className="icon" style={{marginLeft:"70px"}}>
              <svg
                width={100}
                height={100}
                viewBox="0 0 50 50"
                fill="none"
                class = "bi bi-whatsapp"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"
                  fill="#33B89F"
                />
              </svg>
            </div>
            <h5 className="title" style={{marginTop:"-60px"}}>Whatsapp</h5>
            <p className="disc">
            Connect your Business account to manage WhatsApp business conversations easily
            </p>
            <a href="#" className="more-case-btn">
               Integrate With Polymatric
              <i className="fa-regular fa-arrow-right" />
            </a>
          </div>
          {/* single use case end */}
        </div>
        <div className="col-lg-4">
          {/* single use case */}
          <div className="single-use-case">
            <div className="icon" style={{marginLeft:"70px"}}>
              <svg
                width={100}
                height={100}
                viewBox="0 0 50 50"
                fill="none"
                class="bi bi-line"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0M5.022 7.686H3.497V4.918a.156.156 0 0 0-.155-.156H2.78a.156.156 0 0 0-.156.156v3.486c0 .041.017.08.044.107v.001l.002.002.002.002a.15.15 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157m.791-2.924a.156.156 0 0 0-.156.156v3.486c0 .086.07.155.156.155h.562c.086 0 .155-.07.155-.155V4.918a.156.156 0 0 0-.155-.156zm3.863 0a.156.156 0 0 0-.156.156v2.07L7.923 4.832l-.013-.015v-.001l-.01-.01-.003-.003-.011-.009h-.001L7.88 4.79l-.003-.002-.005-.003-.008-.005h-.002l-.003-.002-.01-.004-.004-.002-.01-.003h-.002l-.003-.001-.009-.002h-.006l-.003-.001h-.004l-.002-.001h-.574a.156.156 0 0 0-.156.155v3.486c0 .086.07.155.156.155h.56c.087 0 .157-.07.157-.155v-2.07l1.6 2.16a.2.2 0 0 0 .039.038l.001.001.01.006.004.002.008.004.007.003.005.002.01.003h.003a.2.2 0 0 0 .04.006h.56c.087 0 .157-.07.157-.155V4.918a.156.156 0 0 0-.156-.156zm3.815.717v-.56a.156.156 0 0 0-.155-.157h-2.242a.16.16 0 0 0-.108.044h-.001l-.001.002-.002.003a.16.16 0 0 0-.044.107v3.486c0 .041.017.08.044.107l.002.003.002.002a.16.16 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156Z"
                  fill="#008000"
                />
              </svg>
            </div>
            <h5 className="title" style={{marginTop:"-60px"}}>Line</h5>
            <p className="disc">
             Connect your Line account with Polymatric to read, reply and manage customer conversations
            </p>
            <a href="#" className="more-case-btn">
               Integrate with Polymatric
              <i className="fa-regular fa-arrow-right" />
            </a>
          </div>
          {/* single use case end */}
        </div>
        <div className="col-lg-4">
          {/* single use case */}
          <div className="single-use-case">
            <div className="icon" style={{marginLeft:"70px"}}>
              <svg
                width={100}
                height={100}
                viewBox="0 0 50 50"
                fill="none"
                class="bi bi-telegram"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"
                  fill="#3F3EED"
                />
              </svg>
            </div>
            <h5 className="title"  style={{marginTop:"-60px"}}>Telegram</h5>
            <p className="disc">
            Easily receive and reply to Telegram channel messages from your Polymatric dashboard
            </p>
            <a href="#" className="more-case-btn">
              Integrate with Polymatric
              <i className="fa-regular fa-arrow-right" />
            </a>
          </div>
          {/* single use case end */}
        </div>
        <div className="col-lg-4">
          {/* single use case */}
          <div className="single-use-case">
            <div className="icon" style={{marginLeft:"70px"}}>
              <svg
                width={100}
                height={100}
                viewBox="0 0 50 50"
                fill="none"
                class = "bi bi-instagram"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                  fill="#E1306C"
                />
              </svg>
            </div>
            <h5 className="title" style={{marginTop:"-60px"}}>Instagram</h5>
            <p className="disc">
             Automate Instagram Business Messages to provide instant support to your customers
            </p>
            <a href="#" className="more-case-btn">
              Integrate with Polymatric
              <i className="fa-regular fa-arrow-right" />
            </a>
          </div>
          {/* single use case end */}
        </div>
      </div>
    </div>
  </div>
  {/* use case area end */}
  {/* feature-min-wrapper area start */}
  <div className="feature-area-start rts-section-gapBottom">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="title-left-feature">
            <h2 className="title" style={{textAlign:"center"}}>
            Install anywhere & connect with your favorite services
            </h2>
          </div>
        </div>
      </div>
      <div className="row mt--60">
        <div className="col-lg-12">
          {/* single featue area start */}
          <div className="single-feature-area-main-inner">
            <div className="row">
              <div className="col-lg-6">
                <div className="feature-content-inner">
                  <h3 className="title">
                    <span></span> Easily integrate across all your platforms
                  </h3>
                  <p className="disc">
                   Use powerful web and WordPress plugins, dedicated Android, iOS, and hybrid mobile SDKs to get your support system up and running. Deploy chatbots and live chat to Facebook, WhatsApp, and Line easily.
                  </p>
                  <a href="#" className="rts-btn btn-primary">
                    Visit Docs<i className="fa-regular fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="thumbnail-feature">
                  <img src="assets/images/feature/04.svg" alt="feature" />
                </div>
              </div>
            </div>
          </div>
          {/* single featue area end */}
          {/* single featue area start */}
          <div className="single-feature-area-main-inner">
            <div className="row">
              <div className="col-lg-6">
                <div className="thumbnail-feature">
                  <img src="assets/images/feature/05.svg" alt="feature" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-content-inner pl--120">
                  <h3 className="title">
                    <span></span> Use Kommunicate with your favorite apps
                  </h3>
                  <p className="disc">
                   Do more with Kommunicate by connecting your favorite tools and seamlessly transfer data between them. Easily integrate with Facebook, WhatsApp, Line, Zapier, CRMs, and more apps.
                  </p>
                  <a href="#" className="rts-btn btn-primary">
                    View All Integrations <i className="fa-regular fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* single featue area end */}
        </div>
      </div>
    </div>
  </div>
  {/* feature-min-wrapper area end */}
  {/* cta area start */}
  <div className="rts-cta-area rts-section-gapBottom  bg_faq">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="cta-main-wrapper bg_image">
            <div className="left">
              <h3 className="title">
                Connect your messaging apps with Kommunicate Now!
              </h3>
              <a href="/AboutOpenUp" className="rts-btn btn-primary">
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

export default Feature
