import React from 'react'

const Header = () => {
  return (
    <>

<header className="header-area header-two">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {/* <!-- header top start --> */}
                        <div className="header-top-two">
                            <div className="social-area">
                                <ul>
                                    <li>
                                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa-brands fa-behance"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa-brands fa-discord"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="right-area">
                                <ul>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="/Contact">Contact</a></li>
                                    <li><a href="#">En(US)</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- header top end --> */}
                        <div className="header-main-two header--sticky">
                            {/* <a href="index.html">
                                <img src="assets/images/logo/03.svg" alt="logo"/>
                            </a> */}
                            <h4>Polymatric</h4>
                            {/* <!-- nav --> */}
                            <div className="nav-area-main d-xl-block d-lg-block d-md-none d-sm-none d-none">
                                <nav>
                                    <ul>
                                        <li className="has-dropdown mega-menu">
                                            <a className="links-main" href="#">Solutions</a>
                                            <div className="rts-mega-menu">
                                                <div className="wrapper">
                                                    <div className="row g-0">
                                                        <div className="col-lg-3">
                                                          <p>PRODUCTS</p>  
                                                            <ul className="mega-menu-item">
                                                                <li>
                                                                    <a href="/UseCasesDetails2">
                                                                        {/* <img src="assets/images/mega-menu/01.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>ChatBot Builder</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/UseCasesDetails">
                                                                        {/* <img src="assets/images/mega-menu/02.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Generative AI Chatbot</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/UseCases2">
                                                                        {/* <img src="assets/images/mega-menu/03.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Live Chat</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/useCase">
                                                                        {/* <img src="assets/images/mega-menu/04.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Dialogflow Integration</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/FAQ">
                                                                        {/* <img src="assets/images/mega-menu/04.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>FAQ ChatBot</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <p>INDUSTRIES</p>
                                                            <ul className="mega-menu-item">
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/05.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>eCommerce</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/06.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Healthcare</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/07.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Education</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/08.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Banking</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </li>
                                        <li className="has-dropdown mega-menu">
                                            <a className="links-main" href="#">Integrations</a>
                                            <div className="rts-mega-menu">
                                                <div className="wrapper">
                                                    <div className="row g-0">
                                                        <div className="col-lg-3">
                                                          <p>ALL INTEGRATIONS</p>  
                                                            <ul className="mega-menu-item">
                                                                <li>
                                                                    <a href="/Feature">
                                                                        {/* <img src="assets/images/mega-menu/01.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Omnichannel messaging</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/02.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>eCommerce sites</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/03.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Chatbot Builder</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/04.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Zendesk ChatBot</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/04.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Website and CMS</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item">
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/05.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Mobile Apps</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/06.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>CRMs</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/07.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Automation and Analytics</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </li>
                                        <li className="has-dropdown mega-menu">
                                            <a className="links-main" href="#">Resources</a>
                                            <div className="rts-mega-menu">
                                                <div className="wrapper">
                                                    <div className="row g-0">
                                                        <div className="col-lg-3">
                                                          <p>ALL RESOURCES</p>  
                                                            <ul className="mega-menu-item">
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/01.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Blog</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/02.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Case Studies</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/03.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Comparison</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/04.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>videos</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/04.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Chatbot Templates</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item">
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/05.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>ROI Calculator</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/06.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Whitepapers</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/07.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Generative AI Guide</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </li>
                                        <li><a className="links-main" href="/Soon">Pricing</a></li>
                                    </ul>
                                </nav>
                            </div>
                            {/* <!-- nav end --> */}
                            <div className="button-area">
                                <a href="/Login">Login</a>
                                <a href="/AboutOpenUp" className="rts-btn btn-primary">Get Started</a>
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


            {/* <!-- header style two --> */}
    <div id="side-bar" class="side-bar header-two">
        <button class="close-icon-menu"><i class="far fa-times"></i></button>

        {/* <!-- mobile menu area start --> */}
        <div class="mobile-menu-main">
            <nav class="nav-main mainmenu-nav mt--30">
                <ul class="mainmenu metismenu" id="mobile-menu-active">
                    <li class="has-droupdown parent">
                        <a href="#" class="main">Solutions</a>
                        <ul class="submenu mm-collapse">
                            <li><a class="mobile-menu-link" href="/UseCasesDetails2">ChatBot Builder</a></li>
                            <li><a class="mobile-menu-link" href="/UseCasesDetails">Generative AI ChatBot</a></li>
                            <li><a class="mobile-menu-link" href="/UseCase2">Live Chat</a></li>
                            <li><a class="mobile-menu-link" href="/useCase">Dialogflow Integration</a></li>
                            <li><a class="mobile-menu-link" href="/FAQ">FAQ ChatBot</a></li>
                            <li><a class="mobile-menu-link" href="/Soon">eCommerce</a></li>
                            <li><a class="mobile-menu-link" href="/Soon">Healthcare</a></li>
                            <li><a class="mobile-menu-link" href="/Soon">Education</a></li>
                            <li><a class="mobile-menu-link" href="/Soon">Banking</a></li>
                        </ul>
                    </li>
                    <li class="has-droupdown parent">
                        <a href="#" class="main">Integration</a>
                        <ul class="submenu mm-collapse">
                            <li><a class="mobile-menu-link" href="/Feature">Omnichannel messaging</a></li>
                            <li><a class="mobile-menu-link" href="/Soon">eCommerce sites</a></li>
                            <li><a class="mobile-menu-link" href="/Soon">ChatBot Builder</a></li>
                            <li><a class="mobile-menu-link" href="/Soon">Zendesk ChatBot</a></li>
                            <li><a class="mobile-menu-link" href="/Soon">Website and CMS</a></li>
                            <li><a class="mobile-menu-link" href="/Soon">Mobile Apps</a></li>
                            <li><a class="mobile-menu-link" href="/Soon">CRMs</a></li>
                            <li><a class="mobile-menu-link" href="/Soon">Automation and Analytics</a></li>

                        </ul>
                    </li>
                    <li class="has-droupdown parent">
                        <a href="#" class="main">Resources</a>
                        <ul class="submenu mm-collapse">
                            <li><a class="mobile-menu-link" href="/Soon">Blog</a></li>
                            <li><a class="mobile-menu-link" href="/Soon">Case Studies</a></li>
                            <li><a class="mobile-menu-link" href="/Soon">Comparison</a></li>
                            <li><a class="mobile-menu-link" href="/Soon">videos</a></li>
                            <li><a class="mobile-menu-link" href="/Soon">ChatBot Templates</a></li>
                            <li><a class="mobile-menu-link" href="/Soon">ROI Calculator</a></li>
                            <li><a class="mobile-menu-link" href="/Soon">Whitepapers</a></li>
                            <li><a class="mobile-menu-link" href="/Soon">Generative AI Guide</a></li>
                        </ul>
                    </li>
                    <li class="parent">
                        <a href="/Soon" class="main">Pricing</a>
                    </li>
                    <li class="parent">
                        <a href="/Login" class="main">Login</a>
                    </li>
                    <li class="parent">
                        <a href="/AboutOpenUp" class="main">Get Started</a>
                    </li>
                </ul>
            </nav>
{/* 
            <div class="rts-social-style-one pl--20 mt--100">
                <ul>
                    <li>
                        <a href="#">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa-brands fa-youtube"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa-brands fa-linkedin-in"></i>
                        </a>
                    </li>
                </ul>
            </div> */}
        </div>
        {/* <!-- mobile menu area end --> */}
    </div>
    {/* <!-- header style two End --> */}
      
    </>
  )
}

export default Header
