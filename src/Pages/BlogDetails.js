import React from 'react'

const BlogDetails = () => {
  return (
    <div className='inner-page'>
    {/* rts header area start */}
    <header className="header-one header--sticky">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-main-wrapper">
              <a href="index.html" className="logo">
                <img src="assets/images/logo/01.svg" alt="logo" />
              </a>
              {/* nav */}
              <div className="nav-area-main d-xl-block d-lg-block d-md-none d-sm-none d-none">
                <nav>
                  <ul>
                    <li className="has-dropdown">
                      <a className="links-main" href="#">
                        Home
                      </a>
                      <ul className="submenu">
                        {/* <li><a href="/index-page-1">Content Writing 01</a></li> */}
                        <li><a href='/IndexOne'>Content Writing 01</a></li>
                        <li><a href="/">Content Writing 02</a></li>
                        <li><a href="/IndexThree">Content Writing 03</a></li>
                        <li><a href="/IndexFour">Ai Chat Bot</a></li>
                        <li><a href="/IndexFive">Voice Generator</a></li>
                        <li><a href="/">Image Generator <span>New</span></a></li>
                        <li><a href="/">Photo Stock <span>New</span></a></li>
                    </ul>
                    </li>
                    <li>
                      <a className="links-main" href="/UseCase">
                        Use Cases
                      </a>
                    </li>
                    <li className="has-dropdown mega-menu">
                      <a className="links-main" href="#">
                        Pages
                      </a>
                      <div className="rts-mega-menu">
                                                <div className="wrapper">
                                                    <div className="row g-0">
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item">
                                                                <li>
                                                                    <a href="/AboutOpenUp">
                                                                        <img src="assets/images/mega-menu/01.svg" alt="icon"/>
                                                                        <div className="info">
                                                                            <p>About OpenUp</p>
                                                                            <span>Get know about openup </span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/UseCase">
                                                                        <img src="assets/images/mega-menu/02.svg" alt="icon"/>
                                                                        <div className="info">
                                                                            <p>Use Cases</p>
                                                                            <span>provide detailed explan</span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Pricing">
                                                                        <img src="assets/images/mega-menu/03.svg" alt="icon"/>
                                                                        <div className="info">
                                                                            <p>Pricing</p>
                                                                            <span>Openup provide pro price</span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Login">
                                                                        <img src="assets/images/mega-menu/04.svg" alt="icon"/>
                                                                        <div className="info">
                                                                            <p>Login</p>
                                                                            <span>Create content by ou</span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item">
                                                                <li>
                                                                    <a href="/Blog">
                                                                        <img src="assets/images/mega-menu/05.svg" alt="icon"/>
                                                                        <div className="info">
                                                                            <p>Blog</p>
                                                                            <span>Read openup artical</span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/UseCasesDetails">
                                                                        <img src="assets/images/mega-menu/06.svg" alt="icon"/>
                                                                        <div className="info">
                                                                            <p>Use Cases Details</p>
                                                                            <span>provide detailed explan</span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Pricing2">
                                                                        <img src="assets/images/mega-menu/07.svg" alt="icon"/>
                                                                        <div className="info">
                                                                            <p>Pricing 2</p>
                                                                            <span>Openup provide pro price</span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Register">
                                                                        <img src="assets/images/mega-menu/08.svg" alt="icon"/>
                                                                        <div className="info">
                                                                            <p>Register</p>
                                                                            <span>Make your account</span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item">
                                                                <li>
                                                                    <a href="/BlogDetails">
                                                                        <img src="assets/images/mega-menu/09.svg" alt="icon"/>
                                                                        <div className="info">
                                                                            <p>Blog Details</p>
                                                                            <span>Read openup artical</span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/UseCases2">
                                                                        <img src="assets/images/mega-menu/10.svg" alt="icon"/>
                                                                        <div className="info">
                                                                            <p>Use Cases 2</p>
                                                                            <span>provide detailed explan</span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Pricing3">
                                                                        <img src="assets/images/mega-menu/11.svg" alt="icon"/>
                                                                        <div className="info">
                                                                            <p>Pricing 3</p>
                                                                            <span>Openup provide pro price</span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Reset">
                                                                        <img src="assets/images/mega-menu/12.svg" alt="icon"/>
                                                                        <div className="info">
                                                                            <p>Reset</p>
                                                                            <span>Rest your possword</span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item">
                                                                <li>
                                                                    <a href="/Contact">
                                                                        <img src="assets/images/mega-menu/13.svg" alt="icon"/>
                                                                        <div className="info">
                                                                            <p>Contact</p>
                                                                            <span>Contact with openup</span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/UseCasesDetails2">
                                                                        <img src="assets/images/mega-menu/14.svg" alt="icon"/>
                                                                        <div className="info">
                                                                            <p>Use Cases Details 2</p>
                                                                            <span>provide detailed explan</span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/FAQ">
                                                                        <img src="assets/images/mega-menu/15.svg" alt="icon"/>
                                                                        <div className="info">
                                                                            <p>FAQ</p>
                                                                            <span>Do you know openup</span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="404.html">
                                                                        <img src="assets/images/mega-menu/16.svg" alt="icon"/>
                                                                        <div className="info">
                                                                            <p>Error</p>
                                                                            <span>Back to home</span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                    </li>
                    <li>
                      <a className="links-main" href="/Feature">
                        Feature
                      </a>
                    </li>
                    <li className="has-dropdown">
                      <a className="links-main" href="#">
                        Shop
                      </a>
                      <ul className="submenu">
                      <li>
                        <a href="/ProductDetails">Product Details</a>
                      </li>
                      <li>
                        <a href="/Cart">Cart</a>
                      </li>
                      <li>
                        <a href="/Checkout">Checkout</a>
                      </li>
                      <li>
                        <a href="/MyAccount">My Account</a>
                      </li>
                    </ul>
                    </li>
                    <li>
                      <a className="links-main" href="/Contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* nav end */}
              <div className="button-area">
                <a href="/Login" className="rts-btn btn-lonly mr--30">
                  Sign in
                </a>
                <a href="/AboutOpenUp" className="rts-btn btn-blur">
                  Get Started
                </a>
              </div>
              <div
                className="menu-btn d-xl-none d-lg-none d-md-block d-sm-block"
                id="menu-btn"
              >
                <svg
                  width={20}
                  height={16}
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y={14} width={20} height={2} fill="#1F1F25" />
                  <rect y={7} width={20} height={2} fill="#1F1F25" />
                  <rect width={20} height={2} fill="#1F1F25" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* rts header area end */}
    {/* blog details bread crumb */}
    <div className="bd-breadcrumb"></div>
    {/* blog details bread crumb end */}
    {/* rts blog ddetailks area start */}
    <div className="rts-blog-details-area-top rts-section-gapTop">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* top blog details start */}
            <div className="row top-blog-details-start align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12 mb--30">
                <div className="title-area">
                  <h2 className="title">
                    Five Things You Need to Know about Writing Articles
                  </h2>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="authore-bd-area">
                  <div className="main">
                    <img src="assets/images/blog/11.png" alt="blog" />
                    <div className="info">
                      <span className="deg">Author</span>
                      <span className="name">samuel</span>
                    </div>
                  </div>
                  <div className="sub-area">
                    <p>Category</p>
                    <span className="deg">Blog Content</span>
                  </div>
                  <div className="sub-area">
                    <p>Purplish</p>
                    <span className="deg">15 may, 2023</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 mt--30">
                <div className="main-image-big">
                  <img src="assets/images/blog/10.jpg" alt="blog-imaeg" />
                </div>
              </div>
            </div>
            {/* top blog details end */}
          </div>
        </div>
      </div>
    </div>
    {/* rts blog ddetailks area ends */}
    {/* blog details inner area start */}
    <div className="blog-detail-inenr-area pt--45 rts-section-gapBottom plr_sm--15">
      <div className="container-bd">
        <div className="row">
          <div className="col-lg-12">
            <div className="para-area-wrapper">
              <p className="disc">
                As more consumers choose the internet and social media to interact
                with the brands they love, the need to be active on the social
                media with content has increased for businesses. And every
                platform demands a different type of content to be you successful.
                For example, Reels are the way to grow on Instagram for a
                lifestyle brand.
              </p>
              <p className="disc">
                daunting to create so much content manually. Whether you are a
                content creator, a marketer, or an entrepreneur, the content
                creation tools discussed in this blog post will help you nail the
                execution of your content marketing strategy.
              </p>
              <h4 className="title">
                10 Content creation tools to boost your productivity and make you
                more efficient
              </h4>
              <p className="disc">
                Deciding on the right content topics that bring results is not
                that easy. If you are still relying only on Google auto-populated
                prompts then your efforts are going to be half-baked. <br />{" "}
                <br />
                Content research tools provide insights into what topics are
                trending in your industry, what your target audience is searching
                for, and how to optimize content for search engines. These tools
                will help you get results for your efforts. Here are the best
                content research tools to help you should know about.
              </p>
              <img
                className="mb--30"
                src="assets/images/blog/12.jpg"
                alt="dsds"
              />
              <h4 className="title">#1. ChatSonic - Like ChatGPT</h4>
              <p className="disc">
                There is no better tool than Chatsonic - Like ChatGPT with
                superpowers for content research. ChatGPT is a conversational AI
                technology that can understand, respond to, and generate
                text-based outputs. Chatsonic is the best alternative to ChatGPT
                as it overcomes the limitations of ChatGPT. You can speed up your
                content research by giving voice commands instead of typing, which
                is not possible on ChatGPT. The best part is the response speed is
                2-3x faster than Google.
              </p>
              <div className="quote-area-bd">
                <div className="inner">
                  <div className="icon">
                    <svg
                      width={21}
                      height={31}
                      viewBox="0 0 21 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.8125 27.4102V25.125H15.1875L15.1289 27.4102C15.1289 27.7031 15.0117 28.1719 14.8359 28.4062L13.8398 29.9297C13.5469 30.3984 12.8438 30.75 12.2578 30.75H8.68359C8.09766 30.75 7.39453 30.3984 7.10156 29.9297L6.10547 28.4062C5.87109 28.1133 5.8125 27.7617 5.8125 27.4102ZM10.5 0.75C16.1836 0.808594 20.8125 5.37891 20.8125 11.0625C20.8125 13.6992 19.8164 16.043 18.2344 17.8008C17.2383 18.9141 15.7734 21.2578 15.1875 23.1914C15.1875 23.1914 15.1875 23.1914 15.1875 23.25H5.75391C5.75391 23.1914 5.75391 23.1914 5.75391 23.1914C5.16797 21.2578 3.70312 18.9141 2.70703 17.8008C1.125 15.9844 0.1875 13.6406 0.1875 11.0625C0.1875 5.61328 4.52344 0.808594 10.5 0.75ZM16.125 16.043C17.2969 14.6367 18 12.8789 18 11.0625C18 6.96094 14.6016 3.5625 10.4414 3.5625C5.8125 3.62109 3 7.42969 3 11.0625C3 12.8789 3.64453 14.6367 4.81641 16.043C5.75391 17.0391 6.86719 18.7383 7.6875 20.4375H13.2539C14.0742 18.7383 15.1875 17.0391 16.125 16.043ZM9.5625 5.4375C10.0312 5.4375 10.5 5.90625 10.5 6.43359C10.5 6.90234 10.0312 7.3125 9.5625 7.3125C7.98047 7.3125 6.75 8.60156 6.75 10.125C6.75 10.6523 6.28125 11.0625 5.8125 11.0625C5.28516 11.0625 4.875 10.6523 4.875 10.125C4.875 7.54688 6.92578 5.4375 9.5625 5.4375Z"
                        fill="#563EED"
                      />
                    </svg>
                  </div>
                  <h5 className="title">
                    ChatSonic is a more advanced AI chatbot than ChatGPT <br />
                    <span>due to its array of capabilities.</span>
                  </h5>
                </div>
              </div>
              <h4 className="title">
                A robust tech stack of content creation tools makes you more
                efficient
              </h4>
              <p className="disc">
                AI content creation tools are game changers. These tools don’t
                only revolutionize the way content is created but also save you
                time from posting repetitive content. Looking at and going through
                so many tools can be quite overwhelming. The best thing to do is
                look for an all-in-one content creation tool.
              </p>
              <p className="disc">
                Use OpenUp 80+ powerful features like Instant article writer,
                paraphraser, website copy, and many more to fulfill every Ai
                content requirement you might have. Photosonic, a part of OpenUp
                can help you generate the perfect image to add visual appeal to
                your content. The best thing is you can use both OpenUp and
                Photosonic by just giving voice commands on Chatsonic. Boost your
                content creation with OpenUp today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* blog details inner area end */}
    {/* related post area start */}
    <div className="related-post-area-start rts-section-gapBottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="title">Related Post</h2>
          </div>
        </div>
        <div className="row g-5 mt--10">
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            {/* single blog area start */}
            <div className="single-blog-area-wrapper">
              <a href="#" className="thumbnail">
                <img src="assets/images/blog/07.jpg" alt="Blog_images" />
              </a>
              <div className="inner-content">
                <div className="head">
                  <span className="tag">Content Write</span>
                  <span className="time">7 min Read</span>
                </div>
                <div className="body">
                  <a href="#">
                    <h5 className="title">
                      Five Things You Need to Know about Writing Articles
                    </h5>
                  </a>
                  <div className="author-area">
                    <div className="author">
                      <img src="assets/images/blog/04.png" alt="blog-area" />
                      <div className="info">
                        <p>samuel</p>
                        <span>Author</span>
                      </div>
                    </div>
                    <a href="#">
                      Read More <i className="fa-solid fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* single blog area end */}
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            {/* single blog area start */}
            <div className="single-blog-area-wrapper">
              <a href="#" className="thumbnail">
                <img src="assets/images/blog/08.jpg" alt="Blog_images" />
              </a>
              <div className="inner-content">
                <div className="head">
                  <span className="tag">blog Content</span>
                  <span className="time">4 min Read</span>
                </div>
                <div className="body">
                  <a href="#">
                    <h5 className="title">
                      15 AI Prompts to Supercharge Sales &amp; Marketing Teams
                    </h5>
                  </a>
                  <div className="author-area">
                    <div className="author">
                      <img src="assets/images/blog/05.png" alt="blog-area" />
                      <div className="info">
                        <p>samuel</p>
                        <span>Author</span>
                      </div>
                    </div>
                    <a href="#">
                      Read More <i className="fa-solid fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* single blog area end */}
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            {/* single blog area start */}
            <div className="single-blog-area-wrapper">
              <a href="#" className="thumbnail">
                <img src="assets/images/blog/09.jpg" alt="Blog_images" />
              </a>
              <div className="inner-content">
                <div className="head">
                  <span className="tag">Content Write</span>
                  <span className="time">7 min Read</span>
                </div>
                <div className="body">
                  <a href="#">
                    <h5 className="title">
                      Introducing Infobase by Copy ai: Your Team’s Brand Center
                    </h5>
                  </a>
                  <div className="author-area">
                    <div className="author">
                      <img src="assets/images/blog/06.png" alt="blog-area" />
                      <div className="info">
                        <p>samuel</p>
                        <span>Author</span>
                      </div>
                    </div>
                    <a href="#">
                      Read More <i className="fa-solid fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* single blog area end */}
          </div>
        </div>
      </div>
    </div>
    {/* related post area end */}
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
    {/* rts footer area start */}
    <div className="rts-footer-area  bg-footer footer-one">
      <div className="container rts-section-gapTop pb--100 pb_sm--30">
        <div className="row">
          <div className="col-lg-12">
            {/* footer main wrapper */}
            <div className="footer-one-main-wrapper">
              {/* single sized  footer  */}
              <div className="footer-singl-wized left-logo">
                <div className="head">
                  <a href="#">
                    <img src="assets/images/logo/01.svg" alt="logo" />
                  </a>
                </div>
                <div className="body">
                  <p className="dsic">
                    Openup is an artificial intelligence trained to automate
                    important tasks such writing optimized product descriptions.
                  </p>
                  <div className="social-style-two">
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
                          <i className="fa-brands fa-behance" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-discord" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* single sized  footer end */}
              {/* single sized  footer  */}
              <div className="footer-singl-wized">
                <div className="head">
                  <h6 className="title">Company</h6>
                </div>
                <div className="body">
                  <ul className="menu">
                    <li>
                      <a href="/AboutOpenUp">About Us</a>
                    </li>
                    <li>
                      <a href="#">Community</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">Affiliate Program</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* single sized  footer end */}
              {/* single sized  footer  */}
              <div className="footer-singl-wized">
                <div className="head">
                  <h6 className="title">Use Cases</h6>
                </div>
                <div className="body">
                  <ul className="menu">
                    <li>
                      <a href="#">For Teams</a>
                    </li>
                    <li>
                      <a href="#">For Email Marketers</a>
                    </li>
                    <li>
                      <a href="#">For Blog Writers</a>
                    </li>
                    <li>
                      <a href="#">For social managers</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* single sized  footer end */}
              {/* single sized  footer  */}
              <div className="footer-singl-wized input-area">
                <div className="head">
                  <h6 className="title">News &amp; Update</h6>
                </div>
                <div className="body">
                  <form action="#">
                    <div className="input-area-fill">
                      <input
                        type="email"
                        placeholder="Enter Your Email"
                        required=""
                      />
                      <button> Subscribe</button>
                    </div>
                  </form>
                  <p className="disc">
                    Subscribe our newsletter for future updates. don’t worry we
                    don’t spam your email address
                  </p>
                </div>
              </div>
              {/* single sized  footer end */}
            </div>
            {/* footer main wrapper end */}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* footer-copyright-area start */}
            <div className="copy-right-start-two">
              <p>
                <a href="https://reactheme.com/" target="_blank">
                  Reactheme©
                </a>{" "}
                2023. All Rights Reserved.
              </p>
              <ul>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            {/* footer-copyright-area end */}
          </div>
        </div>
      </div>
    </div>
    {/* rts footer area end */}
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

export default BlogDetails;
