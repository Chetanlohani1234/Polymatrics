import React from 'react'

const IndexOne = () => {
  return (
    <div>

        <header className="header-one header--sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header-main-wrapper">
                                <a href="index.html" className="logo">
                                    <img src="assets/images/logo/01.svg" alt="logo"/>
                                </a>
                                {/* <!-- nav --> */}
                                <div className="nav-area-main d-xl-block d-lg-block d-md-none d-sm-none d-none">
                                    <nav>
                                        <ul>
                                            <li className="has-dropdown">
                                                <a className="links-main" href="#">Home</a>
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
                                            <li><a className="links-main" href="/UseCase">Use Cases</a></li>
                                            <li className="has-dropdown mega-menu">
                                                <a className="links-main" href="#">Pages</a>
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
                                            <li><a className="links-main" href="/Feature">Feature</a></li>
                                            <li className="has-dropdown">
                                                <a className="links-main" href="#">Shop</a>
                                                <ul className="submenu">
                                                    <li><a href="/ProductDetails">Product Details</a></li>
                                                    <li><a href="/Cart">Cart</a></li>
                                                    <li><a href="/Checkout">Checkout</a></li>
                                                    <li><a href="/MyAccount">My Account</a></li>
                                                </ul>
                                            </li>
                                            <li><a className="links-main" href="/Contact">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                                {/* <!-- nav end --> */}
                                <div className="button-area">
                                    <a href="/Login" className="rts-btn btn-lonly mr--30">Sign in</a>
                                    <a href="/AboutOpenUp" className="rts-btn btn-blur">Get Started</a>
                                </div>

                                <div className="menu-btn d-xl-none d-lg-none d-md-block d-sm-block" id="menu-btn">
                                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="14" width="20" height="2" fill="#1F1F25"></rect>
                                        <rect y="7" width="20" height="2" fill="#1F1F25"></rect>
                                        <rect width="20" height="2" fill="#1F1F25"></rect>
                                    </svg>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
        </header>


    {/* <!-- open up banner area start --> */}
        <div className="rts-banner-area-one bg_image--1 bg_image rts-section-gap">
            <div className="container mt--50">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="content-main-wrapper">
                            <h1 className="title">
                                OpenUp AI content
                                Make <br/> You
                                <span
                                    className="txt-rotate"
                                    data-period="1000"
                                    data-rotate='[ "Content.", "Blog Content.", "Sales Copy.", "Media Content."]'>
                                </span>
                            </h1>
                            <p className="disc">
                                Using advanced artificial intelligence and deep learning, Article Forge writes entire 1,500+ word articles automatically. From product descriptions.
                            </p>
                            <div className="button-area">
                                <a href="/Login" className="rts-btn btn-primary">Try OpenUp Free</a>
                                <a href="/Contact" className="rts-btn btn-blur">Request demo</a>
                            </div>
                            <div className="user-area">
                                <p>10,000+ People make by OpenUp</p>
                                <div className="image-wrapper">
                                    <img className="one" src="assets/images/banner/user/01.png" alt="user" loading="lazy"/>
                                    <img className="two" src="assets/images/banner/user/02.png" alt="user" loading="lazy"/>
                                    <img className="three" src="assets/images/banner/user/04.png" alt="user" loading="lazy"/>
                                    <img className="four" src="assets/images/banner/user/03.png" alt="user" loading="lazy"/>
                                    <img className="five" src="assets/images/banner/user/05.png" alt="user" loading="lazy"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-mid-img">
                <img src="assets/images/banner/01.png" alt="banenr mimage" loading="lazy"/>
            </div>
            <div className="usefull-for-ani">
                <div className="single">
                    <img src="assets/images/banner/user/06.png" alt="img" loading="lazy"/>
                    <span>Content Writer</span>
                </div>
                <div className="single blog">
                    <img src="assets/images/banner/user/05.png" alt="img" loading="lazy"/>
                    <span>Blog Writer</span>
                </div>
                <div className="single copy">
                    <img src="assets/images/banner/user/03.png" alt="img" loading="lazy"/>
                    <span>Copy Writer</span>
                </div>
                <div className="single freelancer">
                    <img src="assets/images/banner/user/04.png" alt="img" loading="lazy"/>
                    <span>Freelancer </span>
                </div>
            </div>
        </div>
    {/* <!-- open up banner area end --> */}


    {/* <!-- rts brand area start --> */}
        <div className="rts-brand-area rts-section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <p className="brand-title text-center">professionals & teams choose Openup</p>
                    </div>
                </div>
                <div className="row mt--50">
                    <div className="col-lg-12">
                        <div className="brand-area-main-wrapper-one">
                            <img src="assets/images/brand/01.png" alt="brand" loading="lazy"/>
                            <img src="assets/images/brand/02.png" alt="brand" loading="lazy"/>
                            <img src="assets/images/brand/03.png" alt="brand" loading="lazy"/>
                            <img src="assets/images/brand/04.png" alt="brand" loading="lazy"/>
                            <img src="assets/images/brand/05.png" alt="brand" loading="lazy"/>
                            <img src="assets/images/brand/06.png" alt="brand" loading="lazy"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/* <!-- rts brand area end --> */}


    {/* <!-- rts feature area start --> */}
        <div className="rts-feature-area rts-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-conter-area">
                            <h2 className="title">
                                Instruct to our AI <br/>
                                writing generate copy
                            </h2>
                            <p className="disc">
                                Let our AI assist with most time consuming to write blog articles, product descriptions and more.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row mt--50">
                    <div className="col-lg-12">
                        {/* <!-- single openup feature area start --> */}
                        <div className="single-feature-area-start index-feature">
                            <div className="image-area">
                                <img src="assets/images/feature/07.svg" alt="feature_image" loading="lazy"/>
                            </div>
                            <div className="featue-content-area">
                                <span className="pre">01</span>
                                <h2 className="title">Generate copy in <br/>
                                    seconds</h2>
                                <p className="disc">
                                    Generate many types of content in under 30 seconds by simply inserting a few input fields. Generate blog topic ideas, intros, ad copy, copywriting.
                                </p>
                                <a href="/Contact" className="rts-btn btn-primary">Get Started Free</a>
                            </div>
                        </div>
                        {/* <!-- single openup feature area end --> */}
                        {/* <!-- single openup feature area start --> */}
                        <div className="single-feature-area-start index-feature bg-red-l">

                            <div className="featue-content-area">
                                <span className="pre">02</span>
                                <h2 className="title">45+ highly-tuned AI <br/>
                                    tools fingertips</h2>
                                <p className="disc">
                                    We have a wide variety of tools available for you to use.
                                    From blog shots (full blog posts) and tweets to sales email generators and marketing copy.
                                </p>
                                <a href="/Contact" className="rts-btn btn-primary">Get Started Free</a>
                            </div>
                            <div className="image-area">
                                <img src="assets/images/feature/08.svg" alt="feature_image" loading="lazy"/>
                            </div>
                        </div>
                        {/* <!-- single openup feature area end --> */}
                        {/* <!-- single openup feature area start --> */}
                        <div className="single-feature-area-start index-feature bg-blue-l">
                            <div className="image-area">
                                <img src="assets/images/feature/09.svg" alt="feature_image" loading="lazy"/>
                            </div>
                            <div className="featue-content-area">
                                <span className="pre">03</span>
                                <h2 className="title">Enter your <br/>
                                    copywriting project</h2>
                                <p className="disc">
                                    Choose from emails, social posts, long-form blog posts, and more! Then, just copy and paste the work into your CMS for publishing.
                                </p>
                                <a href="/Contact" className="rts-btn btn-primary">Get Started Free</a>
                            </div>
                        </div>
                        {/* <!-- single openup feature area end --> */}
                    </div>
                </div>
            </div>
        </div>
    {/* <!-- rts feature area end --> */}

    {/* <!-- rts feature area start --> */}
    <div className="rts-feature-area rts-section-gapBottom">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="title-conter-area">
                        <h2 className="title">
                            Instruct to our AI <br/>
                            writing generate copy
                        </h2>
                        <p className="disc">
                            Let our AI assist with most time consuming to write blog articles, product descriptions and more.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row mt--50">
                <div className="col-lg-12">
                    {/* <!-- single openup feature area start --> */}
                    <div className="single-feature-area-start index-feature">
                        <div className="image-area">
                            <img src="assets/images/feature/07.svg" alt="feature_image" loading="lazy"/>
                        </div>
                        <div className="featue-content-area">
                            <span className="pre">01</span>
                            <h2 className="title">Generate copy in <br/>
                                seconds</h2>
                            <p className="disc">
                                Generate many types of content in under 30 seconds by simply inserting a few input fields. Generate blog topic ideas, intros, ad copy, copywriting.
                            </p>
                            <a href="/Contact" className="rts-btn btn-primary">Get Started Free</a>
                        </div>
                    </div>
                    {/* <!-- single openup feature area end --> */}
                    {/* <!-- single openup feature area start --> */}
                    <div className="single-feature-area-start index-feature bg-red-l">

                        <div className="featue-content-area">
                            <span className="pre">02</span>
                            <h2 className="title">45+ highly-tuned AI <br/>
                                tools fingertips</h2>
                            <p className="disc">
                                We have a wide variety of tools available for you to use.
                                From blog shots (full blog posts) and tweets to sales email generators and marketing copy.
                            </p>
                            <a href="/Contact" className="rts-btn btn-primary">Get Started Free</a>
                        </div>
                        <div className="image-area">
                            <img src="assets/images/feature/08.svg" alt="feature_image" loading="lazy"/>
                        </div>
                    </div>
                    {/* <!-- single openup feature area end --> */}
                    {/* <!-- single openup feature area start --> */}
                    <div className="single-feature-area-start index-feature bg-blue-l">
                        <div className="image-area">
                            <img src="assets/images/feature/09.svg" alt="feature_image" loading="lazy"/>
                        </div>
                        <div className="featue-content-area">
                            <span className="pre">03</span>
                            <h2 className="title">Enter your <br/>
                                copywriting project</h2>
                            <p className="disc">
                                Choose from emails, social posts, long-form blog posts, and more! Then, just copy and paste the work into your CMS for publishing.
                            </p>
                            <a href="/Contact" className="rts-btn btn-primary">Get Started Free</a>
                        </div>
                    </div>
                    {/* <!-- single openup feature area end --> */}
                </div>
            </div>
        </div>
    </div>
    {/* <!-- rts feature area end --> */}

    
    {/* <!-- pricing area start --> */}
        <div className="rts-pricing-area rts-section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-conter-area">
                            <h2 className="title">
                                Try For Free, No Credit <br/>
                                Card Required
                            </h2>
                        </div>
                    </div>
                </div>
                {/* <!-- nav area start --> */}
                <ul className="nav mt--20 nav-tabs pricing-button-one" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className=" active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Monthly</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Annual</button>
                    </li>
                    <li className="right-image-inner">
                        <img src="assets/images/cta/03.png" alt="cta-wrapper" loading="lazy"/>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="row g-5 mt--20">
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                                {/* <!-- iingle pricing table --> */}
                                <div className="pricing-style-one">
                                    <div className="head">
                                        <span className="top">St Rater</span>
                                        <div className="date-use">
                                            <h4 className="title">Free</h4>
                                            <span>/month</span>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <a href="#" className="rts-btn btn-border-p">Start Free Trial</a>
                                        <div className="chek-area">
                                            {/* <!-- ingle check --> */}
                                            <div className="single-check">
                                                <i className="fa-solid fa-check"></i>
                                                <p>10,000 Monthly Word Limit</p>
                                            </div>
                                            {/* <!-- ingle check end --> */}
                                            {/* <!-- ingle check --> */}
                                            <div className="single-check">
                                                <i className="fa-solid fa-check"></i>
                                                <p>10+ Templates</p>
                                            </div>
                                            {/* <!-- ingle check end --> */}
                                            {/* <!-- ingle check --> */}
                                            <div className="single-check">
                                                <i className="fa-solid fa-check"></i>
                                                <p>All types of content</p>
                                            </div>
                                            {/* <!-- ingle check end --> */}
                                            {/* <!-- ingle check --> */}
                                            <div className="single-check">
                                                <i className="fa-solid fa-check"></i>
                                                <p>10+ Languages</p>
                                            </div>
                                            {/* <!-- ingle check end --> */}
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- iingle pricing table end --> */}
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                                {/* <!-- iingle pricing table --> */}
                                <div className="pricing-style-one active">
                                    <div className="head">
                                        <span className="top">Pro</span>
                                        <div className="date-use">
                                            <h4 className="title">$29</h4>
                                            <span>/month</span>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <a href="#" className="rts-btn btn-border-p">Start Free Trial</a>
                                        <div className="chek-area">
                                            {/* <!-- ingle check --> */}
                                            <div className="single-check">
                                                <i className="fa-solid fa-check"></i>
                                                <p>10,000 Monthly Word Limit</p>
                                            </div>
                                            {/* <!-- ingle check end --> */}
                                            {/* <!-- ingle check --> */}
                                            <div className="single-check">
                                                <i className="fa-solid fa-check"></i>
                                                <p>10+ Templates</p>
                                            </div>
                                            {/* <!-- ingle check end --> */}
                                            {/* <!-- ingle check --> */}
                                            <div className="single-check">
                                                <i className="fa-solid fa-check"></i>
                                                <p>All types of content</p>
                                            </div>
                                            {/* <!-- ingle check end --> */}
                                            {/* <!-- ingle check --> */}
                                            <div className="single-check">
                                                <i className="fa-solid fa-check"></i>
                                                <p>10+ Languages</p>
                                            </div>
                                            {/* <!-- ingle check end --> */}
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- iingle pricing table end --> */}
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                                {/* <!-- iingle pricing table --> */}
                                <div className="pricing-style-one">
                                    <div className="head">
                                        <span className="top">Business</span>
                                        <div className="date-use">
                                            <h4 className="title">$99</h4>
                                            <span>/month</span>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <a href="#" className="rts-btn btn-border-p">Start Free Trial</a>
                                        <div className="chek-area">
                                            {/* <!-- ingle check --> */}
                                            <div className="single-check">
                                                <i className="fa-solid fa-check"></i>
                                                <p>10,000 Monthly Word Limit</p>
                                            </div>
                                            {/* <!-- ingle check end --> */}
                                            {/* <!-- ingle check --> */}
                                            <div className="single-check">
                                                <i className="fa-solid fa-check"></i>
                                                <p>10+ Templates</p>
                                            </div>
                                            {/* <!-- ingle check end --> */}
                                            {/* <!-- ingle check --> */}
                                            <div className="single-check">
                                                <i className="fa-solid fa-check"></i>
                                                <p>All types of content</p>
                                            </div>
                                            {/* <!-- ingle check end --> */}
                                            {/* <!-- ingle check --> */}
                                            <div className="single-check">
                                                <i className="fa-solid fa-check"></i>
                                                <p>10+ Languages</p>
                                            </div>
                                            {/* <!-- ingle check end --> */}
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- iingle pricing table end --> */}
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                                {/* <!-- iingle pricing table --> */}
                                <div className="pricing-style-one">
                                    <div className="head">
                                        <span className="top">Unlimited</span>
                                        <div className="date-use">
                                            <h4 className="title">$13</h4>
                                            <span>/month</span>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <a href="#" className="rts-btn btn-border-p">Start Free Trial</a>
                                        <div className="chek-area">
                                            {/* <!-- ingle check --> */}
                                            <div className="single-check">
                                                <i className="fa-solid fa-check"></i>
                                                <p>10,000 Monthly Word Limit</p>
                                            </div>
                                            {/* <!-- ingle check end --> */}
                                            {/* <!-- ingle check --> */}
                                            <div className="single-check">
                                                <i className="fa-solid fa-check"></i>
                                                <p>10+ Templates</p>
                                            </div>
                                            {/* <!-- ingle check end --> */}
                                            {/* <!-- ingle check --> */}
                                            <div className="single-check">
                                                <i className="fa-solid fa-check"></i>
                                                <p>All types of content</p>
                                            </div>
                                            {/* <!-- ingle check end --> */}
                                            {/* <!-- ingle check --> */}
                                            <div className="single-check">
                                                <i className="fa-solid fa-check"></i>
                                                <p>10+ Languages</p>
                                            </div>
                                            {/* <!-- ingle check end --> */}
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- iingle pricing table end --> */}
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="row g-5 mt--20">
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                                {/* <!-- iingle pricing table --> */}
                                <div className="pricing-style-one">
                                    <div className="head">
                                        <span className="top">St Rater</span>
                                        <div className="date-use">
                                            <h4 className="title">Free</h4>
                                            <span>/month</span>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <a href="#" className="rts-btn btn-border-p">Start Free Trial</a>
                                        <div className="chek-area">
                                            {/* <!-- ingle check --> */}
                                            <div className="single-check">
                                                <i className="fa-solid fa-check"></i>
                                                <p>10,000 Monthly Word Limit</p>
                                            </div>
                                            {/* <!-- ingle check end --> */}
                                            {/* <!-- ingle check --> */}
                                            <div className="single-check">
                                                <i className="fa-solid fa-check"></i>
                                                <p>10+ Templates</p>
                                            </div>
                                            {/* <!-- ingle check end --> */}
                                            {/* <!-- ingle check --> */}
                                            <div className="single-check">
                                                <i className="fa-solid fa-check"></i>
                                                <p>All types of content</p>
                                            </div>
                                            {/* <!-- ingle check end --> */}
                                            {/* <!-- ingle check --> */}
                                            <div className="single-check">
                                                <i className="fa-solid fa-check"></i>
                                                <p>10+ Languages</p>
                                            </div>
                                            {/* <!-- ingle check end --> */}
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- iingle pricing table end --> */}
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                                {/* <!-- iingle pricing table --> */}
                                <div className="pricing-style-one active">
                                    <div className="head">
                                        <span className="top">Pro</span>
                                        <div className="date-use">
                                            <h4 className="title">$29</h4>
                                            <span>/month</span>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <a href="#" className="rts-btn btn-border-p">Start Free Trial</a>
                                        <div className="chek-area">
                                            {/* <!-- ingle check --> */}
                                            <div className="single-check">
                                                <i className="fa-solid fa-check"></i>
                                                <p>10,000 Monthly Word Limit</p>
                                            </div>
                                            {/* <!-- ingle check end --> */}
                                            {/* <!-- ingle check --> */}
                                            <div className="single-check">
                                                <i className="fa-solid fa-check"></i>
                                                <p>10+ Templates</p>
                                            </div>
                                            {/* <!-- ingle check end --> */}
                                            {/* <!-- ingle check --> */}
                                            <div className="single-check">
                                                <i className="fa-solid fa-check"></i>
                                                <p>All types of content</p>
                                            </div>
                                            {/* <!-- ingle check end --> */}
                                            {/* <!-- ingle check --> */}
                                            <div className="single-check">
                                                <i className="fa-solid fa-check"></i>
                                                <p>10+ Languages</p>
                                            </div>
                                            {/* <!-- ingle check end --> */}
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- iingle pricing table end --> */}
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                                {/* <!-- iingle pricing table --> */}
                                <div className="pricing-style-one">
                                    <div className="head">
                                        <span className="top">Business</span>
                                        <div className="date-use">
                                            <h4 className="title">$99</h4>
                                            <span>/month</span>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <a href="#" className="rts-btn btn-border-p">Start Free Trial</a>
                                        <div className="chek-area">
                                            {/* <!-- ingle check --> */}
                                            <div className="single-check">
                                                <i className="fa-solid fa-check"></i>
                                                <p>10,000 Monthly Word Limit</p>
                                            </div>
                                            {/* <!-- ingle check end --> */}
                                            {/* <!-- ingle check --> */}
                                            <div className="single-check">
                                                <i className="fa-solid fa-check"></i>
                                                <p>10+ Templates</p>
                                            </div>
                                            {/* <!-- ingle check end --> */}
                                            {/* <!-- ingle check --> */}
                                            <div className="single-check">
                                                <i className="fa-solid fa-check"></i>
                                                <p>All types of content</p>
                                            </div>
                                            {/* <!-- ingle check end --> */}
                                            {/* <!-- ingle check --> */}
                                            <div className="single-check">
                                                <i className="fa-solid fa-check"></i>
                                                <p>10+ Languages</p>
                                            </div>
                                            {/* <!-- ingle check end --> */}
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- iingle pricing table end --> */}
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                                {/* <!-- iingle pricing table --> */}
                                <div className="pricing-style-one">
                                    <div className="head">
                                        <span className="top">Unlimited</span>
                                        <div className="date-use">
                                            <h4 className="title">$13</h4>
                                            <span>/month</span>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <a href="#" className="rts-btn btn-border-p">Start Free Trial</a>
                                        <div className="chek-area">
                                            {/* <!-- ingle check --> */}
                                            <div className="single-check">
                                                <i className="fa-solid fa-check"></i>
                                                <p>10,000 Monthly Word Limit</p>
                                            </div>
                                            {/* <!-- ingle check end --> */}
                                            {/* <!-- ingle check --> */}
                                            <div className="single-check">
                                                <i className="fa-solid fa-check"></i>
                                                <p>10+ Templates</p>
                                            </div>
                                            {/* <!-- ingle check end --> */}
                                            {/* <!-- ingle check --> */}
                                            <div className="single-check">
                                                <i className="fa-solid fa-check"></i>
                                                <p>All types of content</p>
                                            </div>
                                            {/* <!-- ingle check end --> */}
                                            {/* <!-- ingle check --> */}
                                            <div className="single-check">
                                                <i className="fa-solid fa-check"></i>
                                                <p>10+ Languages</p>
                                            </div>
                                            {/* <!-- ingle check end --> */}
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- iingle pricing table end --> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- nav area end --> */}
            </div>
        </div>
    {/* <!-- pricing area end --> */}


    {/* <!-- rts faq area stat --> */}
    <div className="rts-faq-area rts-section-gap bg_faq">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="title-conter-area">
                        <h2 className="title">
                            Questions About our OpenUp? <br/>
                            We have Answers!
                        </h2>
                        <p className="disc">
                            please feel free to reach out to us. We are always happy to assist you and provide any additional.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row mt--60">
                <div className="col-lg-12">
                    <div className="accordion-area-one">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        What is openup content writing tool?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Once you know your audience, choose a topic that will resonate with them. Look for trending topics in your industry or address common questions or challenges your audience may be facing.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        what languages does it supports?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Once you know your audience, choose a topic that will resonate with them. Look for trending topics in your industry or address common questions or challenges your audience may be facing.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        What is sEO wirting ai and how do i use it?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Once you know your audience, choose a topic that will resonate with them. Look for trending topics in your industry or address common questions or challenges your audience may be facing.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        what languages does it supports?
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Once you know your audience, choose a topic that will resonate with them. Look for trending topics in your industry or address common questions or challenges your audience may be facing.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        Does Openup to write long articles?
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Once you know your audience, choose a topic that will resonate with them. Look for trending topics in your industry or address common questions or challenges your audience may be facing.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- rts faq area end --> */}


    {/* <!-- cta area start --> */}
    {/* <!-- cta area start --> */}
    <div className="rts-cta-area rts-section-gapBottom  bg_faq">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="cta-main-wrapper bg_image">
                        <div className="left">
                            <h3 className="title">
                                All set to level up <br/>
                                your content game?
                            </h3>
                            <a href="/AboutOpenUp" className="rts-btn btn-primary">Get Started Now</a>
                        </div>
                        <div className="right">
                            <img src="assets/images/cta/02.png" alt="cta-area"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- cta area end --> */}
    {/* <!-- cta area end --> */}
    

    {/* <!-- rts footer area start --> */}
    <div className="rts-footer-area  bg-footer footer-one">
        <div className="container rts-section-gapTop pb--100 pb_sm--30">
            <div className="row">
                <div className="col-lg-12">
                    {/* <!-- footer main wrapper --> */}
                    <div className="footer-one-main-wrapper">
                        {/* <!-- single sized  footer  --> */}
                        <div className="footer-singl-wized left-logo">
                            <div className="head">
                                <a href="#">
                                    <img src="assets/images/logo/01.svg" alt="logo"/>
                                </a>
                            </div>
                            <div className="body">
                                <p className="dsic">
                                    Openup is an artificial intelligence trained to automate important tasks such writing optimized product descriptions.
                                </p>
                                <div className="social-style-two">
                                    <ul>
                                        <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-behance"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-discord"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!-- single sized  footer end --> */}
                        {/* <!-- single sized  footer  --> */}
                        <div className="footer-singl-wized">
                            <div className="head">
                                <h6 className="title">Company</h6>
                            </div>
                            <div className="body">
                                <ul className="menu">
                                    <li><a href="/AboutOpenUp">About Us</a></li>
                                    <li><a href="#">Community</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Affiliate Program</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- single sized  footer end --> */}
                        {/* <!-- single sized  footer  --> */}
                        <div className="footer-singl-wized">
                            <div className="head">
                                <h6 className="title">Use Cases</h6>
                            </div>
                            <div className="body">
                                <ul className="menu">
                                    <li><a href="#">For Teams</a></li>
                                    <li><a href="#">For Email Marketers</a></li>
                                    <li><a href="#">For Blog Writers</a></li>
                                    <li><a href="#">For social managers</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- single sized  footer end --> */}
                        {/* <!-- single sized  footer  --> */}
                        <div className="footer-singl-wized input-area">
                            <div className="head">
                                <h6 className="title">News & Update</h6>
                            </div>
                            <div className="body">
                                <form action="#">
                                    <div className="input-area-fill">
                                        <input type="email" placeholder="Enter Your Email" required/>
                                        <button> Subscribe</button>
                                    </div>
                                </form>
                                <p className="disc">
                                    Subscribe our newsletter for future updates. don’t worry we don’t spam your email address
                                </p>
                            </div>
                        </div>
                        {/* <!-- single sized  footer end --> */}
                    </div>
                    {/* <!-- footer main wrapper end --> */}
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    {/* <!-- footer-copyright-area start --> */}
                    <div className="copy-right-start-two">
                        <p><a href="https://reactheme.com/" target="_blank">Reactheme©</a> 2023. All Rights Reserved.</p>
                        <ul>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    {/* <!-- footer-copyright-area end --> */}
                </div>
            </div>
        </div>
    </div>
    {/* <!-- rts footer area end --> */}


    {/* <!-- right switcher --> */}
    {/* <div className="modal-sidebar-scroll rts-dark-light">
        <ul>
            <li><a href="dark/index.html"><span>Dark</span><i className="rts-go-dark fal fa-moon"></i></a></li>
            <li><a href="https://themewant.com/products/html/openup-rtl"><span>RTL</span><i className="fa-solid fa-paragraph-left"></i></a></li>
        </ul>
    </div> */}
    {/* <!-- right switcher end --> */}

    {/* <!-- header style two --> */}
    <div id="side-bar" className="side-bar header-two">
        <button className="close-icon-menu"><i className="far fa-times"></i></button>

        {/* <!-- mobile menu area start --> */}
        <div className="mobile-menu-main">
            <nav className="nav-main mainmenu-nav mt--30">
                <ul className="mainmenu metismenu" id="mobile-menu-active">
                    <li className="has-droupdown parent">
                        <a href="#" className="main">Home</a>
                        <ul className="submenu mm-collapse">
                            <li><a className="mobile-menu-link" href="index.html">Content Writing 01</a></li>
                            <li><a className="mobile-menu-link" href="index-two.html">Content Writing 03</a></li>
                            <li><a className="mobile-menu-link" href="index-three.html">Content Writing 03</a></li>
                            <li><a className="mobile-menu-link" href="index-four.html">Ai Chat Bot</a></li>
                            <li><a className="mobile-menu-link" href="index-five.html">Voice Generator</a></li>
                            <li><a className="mobile-menu-link" href="index-five.html">Image Generator</a></li>
                            <li><a className="mobile-menu-link" href="index-five.html">Photo Stock</a></li>
                        </ul>
                    </li>
                    <li className="parent">
                        <a href="feature.html" className="main">Use Cases</a>
                    </li>
                    <li className="has-droupdown parent">
                        <a href="#" className="main">Pages</a>
                        <ul className="submenu mm-collapse">
                            <li><a className="mobile-menu-link" href="/AboutOpenUp">About Us</a></li>
                            <li><a className="mobile-menu-link" href="blog.html">Blog</a></li>
                            <li><a className="mobile-menu-link" href="blog-details.html">Blog Details</a></li>
                            <li><a className="mobile-menu-link" href="/Contact">Contact</a></li>
                            <li><a className="mobile-menu-link" href="use-case.html">Use Case</a></li>
                            <li><a className="mobile-menu-link" href="use-case-2.html">Use Case 2</a></li>
                            <li><a className="mobile-menu-link" href="case-details.html">Use Case Details</a></li>
                            <li><a className="mobile-menu-link" href="case-details-2.html">Use Case Details</a></li>
                            <li><a className="mobile-menu-link" href="pricing.html">Pricing</a></li>
                            <li><a className="mobile-menu-link" href="pricing-two.html">Pricing Two</a></li>
                            <li><a className="mobile-menu-link" href="pricing-three.html">Pricing Three</a></li>
                            <li><a className="mobile-menu-link" href="faq.html">FAQ</a></li>
                            <li><a className="mobile-menu-link" href="/Login">Log In</a></li>
                            <li><a className="mobile-menu-link" href="registration.html">Registration</a></li>
                            <li><a className="mobile-menu-link" href="reset.html">Reset</a></li>
                            <li><a className="mobile-menu-link" href="404.html">Not Found</a></li>
                        </ul>
                    </li>
                    <li className="parent">
                        <a href="feature.html" className="main">Feature</a>
                    </li>
                    <li className="has-droupdown parent">
                        <a href="#" className="main">Shop</a>
                        <ul className="submenu mm-collapse">
                            <li><a className="mobile-menu-link" href="shop-details.html">Product Details</a></li>
                            <li><a className="mobile-menu-link" href="cart.html">Cart</a></li>
                            <li><a className="mobile-menu-link" href="checkout.html">Checkout</a></li>
                            <li><a className="mobile-menu-link" href="/Login">My Account</a></li>
                        </ul>
                    </li>
                    <li className="parent">
                        <a href="/Contact" className="main">Contact</a>
                    </li>
                </ul>
            </nav>

            <div className="rts-social-style-one pl--20 mt--100">
                <ul>
                    <li>
                        <a href="#">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        {/* <!-- mobile menu area end --> */}
    </div>
    {/* <!-- header style two End --> */}

    {/* <!-- rts backto top start --> */}
    <div className="progress-wrap">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
             style= {{
             transition: "stroke-dashoffset 10ms linear 0s", 
             strokeDasharray: "307.919, 307.919",
             strokeDashoffset: "307.919"
           }}     
             ></path>
        </svg>
    </div>
    {/* <!-- rts backto top end --> */}

    </div>
  )
}

export default IndexOne;
