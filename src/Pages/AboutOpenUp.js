import React from 'react'

const AboutOpenUp = () => {
  return (
    <div className='inner-page'>
      <br/><br/>
  {/* about section one */}
  <div className="about-section-one inner-about rts-section-gap">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="left-thumbnail-area">
            <img src="assets/images/about/01.png" alt="thumbanil" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about-p-right">
            <div className="title-left-area">
              <span className="pre-title-bg">About Us</span>
              <h2 className="title">
                Our Revolutionary <br />
                AI-Powered Content <br />
                Writing Platform
              </h2>
            </div>
            <div className="inner-content">
              <p className="disc-l">
                Content is a valuable currency: the more you produce, the more
                you can attract But creating new pieces of content requires a
                lot of time, energy, and creativity. Founders need to focus on a
                hundred other aspects of growing their business and not just
                creating content.
              </p>
              <div className="rating-area">
                <div className="rating">
                  <img src="assets/images/banner/star.svg" alt="start" />
                  <img src="assets/images/banner/star.svg" alt="start" />
                  <img src="assets/images/banner/star.svg" alt="start" />
                  <img src="assets/images/banner/star.svg" alt="start" />
                  <img src="assets/images/banner/star.svg" alt="start" />
                </div>
                <p className="disc">Based on 10,000+ reviews on</p>
              </div>
              <div className="brand-arae">
                <img src="assets/images/banner/brand/01.png" alt="brand" />
                <img src="assets/images/banner/brand/02.png" alt="brand" />
                <img src="assets/images/banner/brand/03.png" alt="brand" />
                <img src="assets/images/banner/brand/04.png" alt="brand" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* about section one end */}
  {/* favourite tools area */}
  <div className="favourite-tools-area rts-section-gapBottom">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="title-conter-area">
            {/* <span class="pre-title-bg">Features</span> */}
            <h2 className="title">
              Generate AI Copy writing <br />
              Favorite Tools
            </h2>
          </div>
        </div>
      </div>
      <div className="row mt--10 g-5">
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="single-case-area-wrapper">
            <div className="icon">
              <svg
                width={50}
                height={50}
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={50} height={50} rx={4} fill="#E6E5FF" />
                <path
                  d="M22.7148 15.4336C28.75 15.7852 33.9648 21 34.3164 26.9766C34.375 27.7383 33.7891 28.4414 33.0273 28.5C32.9688 28.5 32.9688 28.5 32.9102 28.5C32.207 28.5 31.5625 27.9141 31.5625 27.1523C31.2109 22.5234 27.168 18.4805 22.5391 18.1875C21.7773 18.1875 21.1914 17.4844 21.25 16.7227C21.25 15.9609 21.9531 15.375 22.7148 15.4336ZM23.125 9.75C32.3828 9.75 40 17.3672 40 26.625C40 27.6797 39.1211 28.5 38.125 28.5C37.0703 28.5 36.25 27.6797 36.25 26.625C36.25 19.418 30.332 13.5 23.125 13.5C22.0703 13.5 21.25 12.6797 21.25 11.625C21.25 10.6289 22.0703 9.75 23.125 9.75ZM20.0781 23.0508C24.4727 23.9297 27.6953 28.3242 26.6406 33.1289C25.9961 36.293 23.418 38.8711 20.2539 39.5156C14.8047 40.6875 10 36.5273 10 31.3125V16.7812C10 16.0195 10.5859 15.4336 11.3477 15.4336H14.1602C14.9805 15.4336 15.5664 16.0195 15.5664 16.7812V31.2539C15.5664 32.7188 16.8555 34.0078 18.4375 34.0078C19.9609 34.0078 21.25 32.7773 21.25 31.2539C21.25 30.082 20.4297 29.0273 19.375 28.6758C18.8477 28.5 18.4375 28.0312 18.4375 27.3867V24.457C18.4375 23.5781 19.1992 22.875 20.0781 23.0508Z"
                  fill="#3F3EED"
                />
              </svg>
            </div>
            <a href="#">
              <h5 className="title">Blog Content</h5>
            </a>
            <p className="disc">
              Write a first draft. The first draft should be written in
              long-form breaking.
            </p>
            <a href="#">
              Try Blog Content <i className="fa-solid fa-arrow-right" />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="single-case-area-wrapper">
            <div className="icon">
              <svg
                width={50}
                height={50}
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={50} height={50} rx={4} fill="#FDEDE1" />
                <path
                  d="M13.8125 11.625H22.543C23.5391 11.625 24.4766 12.0352 25.1797 12.7383L35.4922 23.0508C36.957 24.5156 36.957 26.918 35.4922 28.3828L27.6992 36.1758C26.2344 37.6406 23.832 37.6406 22.3672 36.1758L12.0547 25.8633C11.3516 25.1602 11 24.2227 11 23.2266V14.4375C11 12.9141 12.2305 11.625 13.8125 11.625ZM17.5625 20.0625C18.5586 20.0625 19.4375 19.2422 19.4375 18.1875C19.4375 17.1914 18.5586 16.3125 17.5625 16.3125C16.5078 16.3125 15.6875 17.1914 15.6875 18.1875C15.6875 19.2422 16.5078 20.0625 17.5625 20.0625Z"
                  fill="#EBA43B"
                />
              </svg>
            </div>
            <a href="#">
              <h5 className="title">Sales Copy</h5>
            </a>
            <p className="disc">
              Write a first draft. The first draft should be written in
              long-form breaking.
            </p>
            <a href="#">
              Try Blog Content <i className="fa-solid fa-arrow-right" />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="single-case-area-wrapper">
            <div className="icon">
              <svg
                width={50}
                height={50}
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={50} height={50} rx={4} fill="#FFE6FE" />
                <path
                  d="M10 15.375C10 13.3242 11.6406 11.625 13.75 11.625H36.25C38.3008 11.625 40 13.3242 40 15.375V34.125C40 36.2344 38.3008 37.875 36.25 37.875H13.75C11.6406 37.875 10 36.2344 10 34.125V15.375ZM15.625 19.125C16.6211 19.125 17.5 18.3047 17.5 17.25C17.5 16.2539 16.6211 15.375 15.625 15.375C14.5703 15.375 13.75 16.2539 13.75 17.25C13.75 18.3047 14.5703 19.125 15.625 19.125ZM36.25 17.25C36.25 16.4883 35.6055 15.8438 34.8438 15.8438H20.7812C19.9609 15.8438 19.375 16.4883 19.375 17.25C19.375 18.0703 19.9609 18.6562 20.7812 18.6562H34.8438C35.6055 18.6562 36.25 18.0703 36.25 17.25Z"
                  fill="#E331D2"
                />
              </svg>
            </div>
            <a href="#">
              <h5 className="title">website copy</h5>
            </a>
            <p className="disc">
              Write a first draft. The first draft should be written in
              long-form breaking.
            </p>
            <a href="#">
              Try Blog Content <i className="fa-solid fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* favourite tools area end */}
  {/* rts image area start */}
  <div className="rts-large-image-area rts-section-gapBottom">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="large-image-about-p">
            <img src="assets/images/about/02.png" alt="about-image" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* rts image area end */}
  {/* rts team area start */}
  <div className="rts-team-area rts-section-gapBottom">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="title-conter-area">
            <span className="pre-title-bg">Team</span>
            <h2 className="title">OpenUp Dedicated Team</h2>
          </div>
        </div>
      </div>
      <div className="row g-5 mt--10">
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
          <div className="team-area-ab-wrapper">
            <div className="thumbnail">
              <img src="assets/images/team/01.jpg" alt="team" />
            </div>
            <div className="inner-content">
              <a href="#">
                <h5 className="title">Jenny Wilson</h5>
              </a>
              <span>CTO / Developer</span>
              <div className="social-icon">
                <a href="#">
                  {" "}
                  <i className="fa-brands fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-behance" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-whatsapp" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
          <div className="team-area-ab-wrapper">
            <div className="thumbnail">
              <img src="assets/images/team/02.jpg" alt="team" />
            </div>
            <div className="inner-content">
              <a href="#">
                <h5 className="title">Olivia Rodrigo</h5>
              </a>
              <span>CTO / Developer</span>
              <div className="social-icon">
                <a href="#">
                  {" "}
                  <i className="fa-brands fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-behance" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-whatsapp" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
          <div className="team-area-ab-wrapper">
            <div className="thumbnail">
              <img src="assets/images/team/03.jpg" alt="team" />
            </div>
            <div className="inner-content">
              <a href="#">
                <h5 className="title">Glen Smith</h5>
              </a>
              <span>CTO / Developer</span>
              <div className="social-icon">
                <a href="#">
                  {" "}
                  <i className="fa-brands fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-behance" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-whatsapp" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
          <div className="team-area-ab-wrapper">
            <div className="thumbnail">
              <img src="assets/images/team/04.jpg" alt="team" />
            </div>
            <div className="inner-content">
              <a href="#">
                <h5 className="title">Dylan Auty</h5>
              </a>
              <span>CTO / Developer</span>
              <div className="social-icon">
                <a href="#">
                  {" "}
                  <i className="fa-brands fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-behance" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-whatsapp" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
          <div className="team-area-ab-wrapper">
            <div className="thumbnail">
              <img src="assets/images/team/05.jpg" alt="team" />
            </div>
            <div className="inner-content">
              <a href="#">
                <h5 className="title">Olivia Rodrigo</h5>
              </a>
              <span>CTO / Developer</span>
              <div className="social-icon">
                <a href="#">
                  {" "}
                  <i className="fa-brands fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-behance" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-whatsapp" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
          <div className="team-area-ab-wrapper">
            <div className="thumbnail">
              <img src="assets/images/team/06.jpg" alt="team" />
            </div>
            <div className="inner-content">
              <a href="#">
                <h5 className="title">Olivia Rodrigo</h5>
              </a>
              <span>CTO / Developer</span>
              <div className="social-icon">
                <a href="#">
                  {" "}
                  <i className="fa-brands fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-behance" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-whatsapp" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
          <div className="team-area-ab-wrapper">
            <div className="thumbnail">
              <img src="assets/images/team/07.jpg" alt="team" />
            </div>
            <div className="inner-content">
              <a href="#">
                <h5 className="title">Glen Smith</h5>
              </a>
              <span>CTO / Developer</span>
              <div className="social-icon">
                <a href="#">
                  {" "}
                  <i className="fa-brands fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-behance" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-whatsapp" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
          <div className="team-area-ab-wrapper">
            <div className="thumbnail">
              <img src="assets/images/team/08.jpg" alt="team" />
            </div>
            <div className="inner-content">
              <a href="#">
                <h5 className="title">Dylan Auty</h5>
              </a>
              <span>CTO / Developer</span>
              <div className="social-icon">
                <a href="#">
                  {" "}
                  <i className="fa-brands fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-behance" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-whatsapp" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* rts team area ewnd */}
  {/* rts testimonials area starts */}
  <div className="rts-testimonials-area rts-section-gapBottom">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="title-conter-area">
            <span className="pre-title-bg">Features</span>
            <h2 className="title">
              Trusted by 5,000+ teams <br />
              agencies 1500+{" "}
              <span className="gradient-about-title">5-star ratings.</span>
            </h2>
            <div className="rating-area-main-p">
              <div className="rating-area">
                <div className="rating">
                  <img src="assets/images/banner/star.svg" alt="start" />
                  <img src="assets/images/banner/star.svg" alt="start" />
                  <img src="assets/images/banner/star.svg" alt="start" />
                  <img src="assets/images/banner/star.svg" alt="start" />
                  <img src="assets/images/banner/star.svg" alt="start" />
                </div>
                <p className="disc">Based on 10,000+ reviews on</p>
              </div>
              <p className="disc-5">USED BY THE WORLD'S BEST MARKETING TEAMS</p>
              <div className="brand-arae">
                <img src="assets/images/banner/brand/01.png" alt="brand" />
                <img src="assets/images/banner/brand/02.png" alt="brand" />
                <img src="assets/images/banner/brand/03.png" alt="brand" />
                <img src="assets/images/banner/brand/04.png" alt="brand" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-5 mt--30">
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          {/* single team area start */}
          <div className="single-team-area">
            <img
              src="assets/images/team/brand/quote.png"
              alt=""
              className="quote"
            />
            <div className="star">
              <i className="fa-sharp fa-solid fa-star" />
              <i className="fa-sharp fa-solid fa-star" />
              <i className="fa-sharp fa-solid fa-star" />
              <i className="fa-sharp fa-solid fa-star" />
              <i className="fa-solid fa-star-half-stroke" />
            </div>
            <p className="disc">
              I have used some AI writing tools liked Rytr, Peppertype, and
              Jasper but I found Writesonic to be the best for writing complete
              blog posts.
            </p>
            <div className="authore-area">
              <div className="author">
                <img src="assets/images/team/01.png" alt="team" />
                <div className="info">
                  <p>Samuel</p>
                  <span>Blogger</span>
                </div>
              </div>
              <img src="assets/images/team/brand/01.png" alt="" />
            </div>
          </div>
          {/* single tream area end */}
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          {/* single team area start */}
          <div className="single-team-area">
            <img
              src="assets/images/team/brand/quote.png"
              alt=""
              className="quote"
            />
            <div className="star">
              <i className="fa-sharp fa-solid fa-star" />
              <i className="fa-sharp fa-solid fa-star" />
              <i className="fa-sharp fa-solid fa-star" />
              <i className="fa-sharp fa-solid fa-star" />
              <i className="fa-solid fa-star-half-stroke" />
            </div>
            <p className="disc">
              I have used some AI writing tools liked Rytr, Peppertype, and
              Jasper but I found Writesonic to be the best for writing complete
              blog posts.
            </p>
            <div className="authore-area">
              <div className="author">
                <img src="assets/images/team/01.png" alt="team" />
                <div className="info">
                  <p>Samuel</p>
                  <span>Blogger</span>
                </div>
              </div>
              <img src="assets/images/team/brand/01.png" alt="" />
            </div>
          </div>
          {/* single tream area end */}
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          {/* single team area start */}
          <div className="single-team-area">
            <img
              src="assets/images/team/brand/quote.png"
              alt=""
              className="quote"
            />
            <div className="star">
              <i className="fa-sharp fa-solid fa-star" />
              <i className="fa-sharp fa-solid fa-star" />
              <i className="fa-sharp fa-solid fa-star" />
              <i className="fa-sharp fa-solid fa-star" />
              <i className="fa-solid fa-star-half-stroke" />
            </div>
            <p className="disc">
              I have used some AI writing tools liked Rytr, Peppertype, and
              Jasper but I found Writesonic to be the best for writing complete
              blog posts.
            </p>
            <div className="authore-area">
              <div className="author">
                <img src="assets/images/team/01.png" alt="team" />
                <div className="info">
                  <p>Samuel</p>
                  <span>Blogger</span>
                </div>
              </div>
              <img src="assets/images/team/brand/01.png" alt="" />
            </div>
          </div>
          {/* single tream area end */}
        </div>
      </div>
    </div>
  </div>
  {/* rts testimonials area emd */}
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

export default AboutOpenUp
