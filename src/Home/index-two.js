import React from 'react'
import { Link } from 'react-router-dom';
//import { Link } from 'react-router-dom';
//import Index from './index1';

const IndexTwo = () => {
  return (
    <div>        
        {/* rts banner area start */}
            <div className="banner-two-area bg-deam pt--140 pt_md--70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="banner-two-inner-content pb--180 pb_md--180 pb_sm--100 pt--200 pt_md--100 pt_sm--20">
                                <span className="pre-title">Welcome to Polymatric</span>
                                <h1 className="title">
                                <span>AI-Powered</span>Customer Service Automation Platform
                                </h1>
                                <p className="disc">
                                Flexible, accurate, and scalable generative AI-powered chatbot for enterprises to deliver superior customer experience. Automate queries and optimize costs — all while keeping it empathetic.
                                </p>
                                <form action="#">
                                    <div className="input-area">
                                        <input type="email" placeholder="Enter your mail address" required />
                                        <button>Sign Up Free <i className="fa-regular fa-arrow-right"></i></button>
                                    </div>
                                </form>
                                <div className="rating-area">
                                    <div className="rating">
                                        <img src="assets/images/banner/star.svg" alt="start" loading="lazy" />
                                        <img src="assets/images/banner/star.svg" alt="start" loading="lazy" />
                                        <img src="assets/images/banner/star.svg" alt="start" loading="lazy" />
                                        <img src="assets/images/banner/star.svg" alt="start" loading="lazy" />
                                        <img src="assets/images/banner/star.svg" alt="start" loading="lazy" />
                                    </div>
                                    <p className="disc">Based on 10,000+ reviews on</p>
                                </div>
                                <br/>
                                <p>Customer service automation platform trusted by enterprises across the globe</p>
                                <div className="brand-arae">
                                    <img src="assets/images/banner/brand/01.png" alt="brand" loading="lazy" />
                                    <img src="assets/images/banner/brand/02.png" alt="brand" loading="lazy" />
                                    <img src="assets/images/banner/brand/03.png" alt="brand" loading="lazy" />
                                    <img src="assets/images/banner/brand/04.png" alt="brand" loading="lazy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-right-img">
                    <img src="assets/images/banner/02.png" alt="" />
                </div>
            </div>
       {/* rts banner area end */}

       {/* rts eaxty steps area start */}
            <div className="rts-easy-steps-area rts-section-gapTop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-conter-area">
                                <span className="pre-title-bg">How It Work</span>
                                <h2 className="title">
                                    Get Unique Content In <br />
                                    Three Easy Steps
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--20">
                        <div className="col-lg-12 plr--120 plr_md--60 plr_sm--15">
                            <div className="easy-steps-area-wrapper bg_image">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        {/* easy steps area start */}
                                        <div className="easy-steps-main-wrapper">
                                            {/* single wrapper */}
                                            <div className="single-steps-area">
                                                <span className="number active">01</span>
                                                <div className="icon">
                                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="40" height="40" rx="4" fill="#E6E5FF" />
                                                        <path d="M30.9688 9.92188C32 10.9531 32 12.5938 30.9688 13.625L29.5625 15.0312L24.9688 10.4375L26.375 9.03125C27.4062 8 29.0469 8 30.0781 9.03125L30.9688 9.92188ZM16.0625 19.3438L23.8906 11.5156L28.4844 16.1094L20.6562 23.9375C20.375 24.2188 20 24.4531 19.625 24.5938L15.4531 25.9531C15.0312 26.0938 14.6094 26 14.3281 25.6719C14 25.3906 13.9062 24.9219 14.0469 24.5469L15.4062 20.375C15.5469 20 15.7812 19.625 16.0625 19.3438ZM17 11C17.7969 11 18.5 11.7031 18.5 12.5C18.5 13.3438 17.7969 14 17 14H12.5C11.6562 14 11 14.7031 11 15.5V27.5C11 28.3438 11.6562 29 12.5 29H24.5C25.2969 29 26 28.3438 26 27.5V23C26 22.2031 26.6562 21.5 27.5 21.5C28.2969 21.5 29 22.2031 29 23V27.5C29 29.9844 26.9844 32 24.5 32H12.5C9.96875 32 8 29.9844 8 27.5V15.5C8 13.0156 9.96875 11 12.5 11H17Z" fill="#3F3EED" />
                                                    </svg>
                                                </div>
                                                <div className="info-wrapper">
                                                    <h5 className="title">Describe</h5>
                                                    <p className="disc">
                                                        Enter the title of your article and <br /> 1-2 sentences to generate it.
                                                    </p>
                                                </div>
                                            </div>
                                            {/* single wrapper end */}
                                            {/* single wrapper */}
                                            <div className="single-steps-area">
                                                <span className="number">02</span>
                                                <div className="icon">
                                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="40" height="40" rx="4" fill="#BDE3FF" fillOpacity="0.4" />
                                                        <path d="M30.5 9.5C31.2969 9.5 32 10.2031 32 11V27.5C32 29.1875 30.6406 30.5 29 30.5H11C9.3125 30.5 8 29.1875 8 27.5V14C8 13.2031 8.65625 12.5 9.5 12.5H11V26.75C11 27.1719 11.3281 27.5 11.75 27.5C12.125 27.5 12.5 27.1719 12.5 26.75V11C12.5 10.2031 13.1562 9.5 14 9.5H30.5ZM20.75 27.5C21.125 27.5 21.5 27.1719 21.5 26.75C21.5 26.375 21.125 26 20.75 26H16.25C15.8281 26 15.5 26.375 15.5 26.75C15.5 27.1719 15.8281 27.5 16.25 27.5H20.75ZM20.75 23C21.125 23 21.5 22.6719 21.5 22.25C21.5 21.875 21.125 21.5 20.75 21.5H16.25C15.8281 21.5 15.5 21.875 15.5 22.25C15.5 22.6719 15.8281 23 16.25 23H20.75ZM28.25 27.5C28.625 27.5 29 27.1719 29 26.75C29 26.375 28.625 26 28.25 26H23.75C23.3281 26 23 26.375 23 26.75C23 27.1719 23.3281 27.5 23.75 27.5H28.25ZM28.25 23C28.625 23 29 22.6719 29 22.25C29 21.875 28.625 21.5 28.25 21.5H23.75C23.3281 21.5 23 21.875 23 22.25C23 22.6719 23.3281 23 23.75 23H28.25ZM29 17.75V13.25C29 12.875 28.625 12.5 28.25 12.5H16.25C15.8281 12.5 15.5 12.875 15.5 13.25V17.75C15.5 18.1719 15.8281 18.5 16.25 18.5H28.25C28.625 18.5 29 18.1719 29 17.75Z" fill="#083A5E" />
                                                    </svg>
                                                </div>
                                                <div className="info-wrapper">
                                                    <h5 className="title">Generate</h5>
                                                    <p className="disc">
                                                        Our AI article generator uses art language <br /> models to create unique articles.
                                                    </p>
                                                </div>
                                            </div>
                                            {/* single wrapper end */}
                                            {/* single wrapper */}
                                            <div className="single-steps-area">
                                                <span className="number">03</span>
                                                <div className="icon">
                                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="40" height="40" rx="4" fill="#CBF3E7" />
                                                        <path d="M16 22.625C16 23.2812 16.4688 23.75 17.125 23.75H25V29.75C25 31.0156 23.9688 32 22.75 32H9.25C7.98438 32 7 31.0156 7 29.75V10.25C7 9.03125 7.98438 8 9.25 8H17.5V14C17.5 14.8438 18.1562 15.5 19 15.5H25V21.5H17.125C16.4688 21.5 16 22.0156 16 22.625ZM19 8L25 14H19V8ZM33.625 21.8281C34.0938 22.2969 34.0938 23 33.625 23.4219L29.875 27.1719C29.4531 27.6406 28.75 27.6406 28.3281 27.1719C28.0938 26.9844 28 26.7031 28 26.375C28 26.0938 28.0938 25.8125 28.3281 25.625L30.1562 23.75H25V21.5H30.1562L28.2812 19.6719C27.8125 19.25 27.8125 18.5469 28.2812 18.0781C28.7031 17.6562 29.4062 17.6562 29.875 18.0781L33.625 21.8281Z" fill="#33B89F" />
                                                    </svg>
                                                </div>
                                                <div className="info-wrapper">
                                                    <h5 className="title">Edit and Export</h5>
                                                    <p className="disc">
                                                        Edit and verify article generation results. <br /> Export in different formats.
                                                    </p>
                                                </div>
                                            </div>
                                            {/* single wrapper end */}
                                        </div>
                                        {/* easy steps area end */}
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="right-image-steps">
                                            <img src="assets/images/steps/02.jpg" alt="steps" loading="lazy" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* rts eaxty steps area end */}

      
        {/* <!-- rts eaxty steps area start --> */}
            <div class="rts-feature-tab-area home-two rts-section-gapTop">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="title-conter-area">
                                    <span class="pre-title-bg">Features</span>
                                    <h2 class="title">
                                    Everything you need to automate your customer service
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div class="row mt--20">
                            <div class="col-lg-12 plr--120 plr_md--60 plr_sm--15">
                                <div class="easy-freature-area-wrapper bg_image">
                                    <div class="row">
                                        <div class="col-xl-8 col-lg-7 col-md-12 col-sm-12 col-12">
                                            <div class="image-area-tab-content">
                                                <div class="d-flex align-items-start">
                                                    <div class="tab-content" id="v-pills-tabContent">
                                                        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                                            <div class="imge-thumb-vedio">
                                                                <img src="assets/images/steps/04.png" alt="" loading="lazy"/>
                                                                <div class="vedio-icone">
                                                                    <a class="play-video popup-youtube video-play-button" href="https://www.youtube.com/watch?v=oV74Najm6Nc">
                                                                        <span></span>
                                                                    </a>
                                                                    <div class="video-overlay">
                                                                        <a class="video-overlay-close">×</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                                            <div class="imge-thumb-vedio">
                                                                <img src="assets/images/steps/04.png" alt="" loading="lazy"/>
                                                                <div class="vedio-icone">
                                                                    <a class="play-video popup-youtube video-play-button" href="https://www.youtube.com/watch?v=tUP5S4YdEJo">
                                                                        <span></span>
                                                                    </a>
                                                                    <div class="video-overlay">
                                                                        <a class="video-overlay-close">×</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                                            <div class="imge-thumb-vedio">
                                                                <img src="assets/images/steps/04.png" alt="" loading="lazy"/>
                                                                <div class="vedio-icone">
                                                                    <a class="play-video popup-youtube video-play-button" href="https://www.youtube.com/watch?v=tUP5S4YdEJo">
                                                                        <span></span>
                                                                    </a>
                                                                    <div class="video-overlay">
                                                                        <a class="video-overlay-close">×</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                                            <div class="imge-thumb-vedio">
                                                                <img src="assets/images/steps/04.png" alt="" loading="lazy"/>
                                                                <div class="vedio-icone">
                                                                    <a class="play-video popup-youtube video-play-button" href="https://www.youtube.com/watch?v=tUP5S4YdEJo">
                                                                        <span></span>
                                                                    </a>
                                                                    <div class="video-overlay">
                                                                        <a class="video-overlay-close">×</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="tab-pane fade" id="v-pills-settingsf" role="tabpanel" aria-labelledby="v-pills-settingsf-tab">
                                                            <div class="imge-thumb-vedio">
                                                                <img src="assets/images/steps/04.png" alt="" loading="lazy"/>
                                                                <div class="vedio-icone">
                                                                    <a class="play-video popup-youtube video-play-button" href="https://www.youtube.com/watch?v=tUP5S4YdEJo">
                                                                        <span></span>
                                                                    </a>
                                                                    <div class="video-overlay">
                                                                        <a class="video-overlay-close">×</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-4 col-lg-5 col-md-12 col-sm-12 col-12">
                                            <div class="tab-button-area">
                                                <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                    <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">

                                                        <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12.7148 6.43359C18.75 6.78516 23.9648 12 24.3164 17.9766C24.375 18.7383 23.7891 19.4414 23.0273 19.5C22.9688 19.5 22.9688 19.5 22.9102 19.5C22.207 19.5 21.5625 18.9141 21.5625 18.1523C21.2109 13.5234 17.168 9.48047 12.5391 9.1875C11.7773 9.1875 11.1914 8.48438 11.25 7.72266C11.25 6.96094 11.9531 6.375 12.7148 6.43359ZM13.125 0.75C22.3828 0.75 30 8.36719 30 17.625C30 18.6797 29.1211 19.5 28.125 19.5C27.0703 19.5 26.25 18.6797 26.25 17.625C26.25 10.418 20.332 4.5 13.125 4.5C12.0703 4.5 11.25 3.67969 11.25 2.625C11.25 1.62891 12.0703 0.75 13.125 0.75ZM10.0781 14.0508C14.4727 14.9297 17.6953 19.3242 16.6406 24.1289C15.9961 27.293 13.418 29.8711 10.2539 30.5156C4.80469 31.6875 0 27.5273 0 22.3125V7.78125C0 7.01953 0.585938 6.43359 1.34766 6.43359H4.16016C4.98047 6.43359 5.56641 7.01953 5.56641 7.78125V22.2539C5.56641 23.7188 6.85547 25.0078 8.4375 25.0078C9.96094 25.0078 11.25 23.7773 11.25 22.2539C11.25 21.082 10.4297 20.0273 9.375 19.6758C8.84766 19.5 8.4375 19.0312 8.4375 18.3867V15.457C8.4375 14.5781 9.19922 13.875 10.0781 14.0508Z" fill="white" />
                                                        </svg>

                                                        Build
                                                    </button>
                                                    <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                                                        <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M27 2V20C27 20.8438 26.2969 21.5 25.5 21.5C24.6562 21.5 24 20.8438 24 20V2C24 1.20312 24.6562 0.5 25.5 0.5C26.2969 0.5 27 1.20312 27 2ZM2.95312 7.95312L22.5 2V20L16.3125 18.1719C15.8438 20.0938 14.0625 21.5 12 21.5C9.46875 21.5 7.5 19.4844 7.5 17C7.5 16.4844 7.54688 16.0156 7.73438 15.5469L2.95312 14.0938C2.95312 14.8906 2.29688 15.5 1.5 15.5C0.65625 15.5 0 14.8438 0 14V8C0 7.20312 0.65625 6.5 1.5 6.5C2.29688 6.5 2.95312 7.15625 2.95312 7.95312ZM14.1562 17.5156L9.89062 16.2031C9.79688 16.4375 9.75 16.7188 9.75 17C9.75 18.2656 10.7344 19.25 12 19.25C13.0312 19.25 13.9688 18.5 14.1562 17.5156Z" fill="#3F3EED" />
                                                        </svg>
                                                        Train</button>
                                                    <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                                                        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M22.5 0.5C23.2969 0.5 24 1.20312 24 2V18.5C24 20.1875 22.6406 21.5 21 21.5H3C1.3125 21.5 0 20.1875 0 18.5V5C0 4.20312 0.65625 3.5 1.5 3.5H3V17.75C3 18.1719 3.32812 18.5 3.75 18.5C4.125 18.5 4.5 18.1719 4.5 17.75V2C4.5 1.20312 5.15625 0.5 6 0.5H22.5ZM12.75 18.5C13.125 18.5 13.5 18.1719 13.5 17.75C13.5 17.375 13.125 17 12.75 17H8.25C7.82812 17 7.5 17.375 7.5 17.75C7.5 18.1719 7.82812 18.5 8.25 18.5H12.75ZM12.75 14C13.125 14 13.5 13.6719 13.5 13.25C13.5 12.875 13.125 12.5 12.75 12.5H8.25C7.82812 12.5 7.5 12.875 7.5 13.25C7.5 13.6719 7.82812 14 8.25 14H12.75ZM20.25 18.5C20.625 18.5 21 18.1719 21 17.75C21 17.375 20.625 17 20.25 17H15.75C15.3281 17 15 17.375 15 17.75C15 18.1719 15.3281 18.5 15.75 18.5H20.25ZM20.25 14C20.625 14 21 13.6719 21 13.25C21 12.875 20.625 12.5 20.25 12.5H15.75C15.3281 12.5 15 12.875 15 13.25C15 13.6719 15.3281 14 15.75 14H20.25ZM21 8.75V4.25C21 3.875 20.625 3.5 20.25 3.5H8.25C7.82812 3.5 7.5 3.875 7.5 4.25V8.75C7.5 9.17188 7.82812 9.5 8.25 9.5H20.25C20.625 9.5 21 9.17188 21 8.75Z" fill="#3F3EED" />
                                                        </svg>
                                                        Deploy</button>
                                                    <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                                                        <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M29.2031 5.42188C29.6719 5.60938 30 6.03125 30 6.5C30 7.01562 29.6719 7.4375 29.2031 7.625L15.9844 12.3594C15.3281 12.5938 14.625 12.5938 13.9688 12.3594L5.0625 9.17188C4.5 9.78125 4.07812 10.5312 3.89062 11.375C4.21875 11.6094 4.5 12.0312 4.5 12.5C4.5 12.9688 4.26562 13.3906 3.9375 13.6719L5.0625 20.6562C5.15625 21.125 4.78125 21.5 4.35938 21.5H1.59375C1.17188 21.5 0.796875 21.125 0.890625 20.6562L2.01562 13.6719C1.6875 13.3906 1.5 12.9688 1.5 12.5C1.5 11.8906 1.875 11.375 2.39062 11.1406C2.57812 10.2031 3 9.35938 3.5625 8.60938L0.75 7.625C0.28125 7.4375 0 7.01562 0 6.5C0 6.03125 0.28125 5.60938 0.75 5.42188L13.9219 0.6875C14.5781 0.453125 15.2812 0.453125 15.9375 0.6875L29.2031 5.42188ZM16.4531 13.7656L23.2969 11.3281L24 18.0312C24 19.9531 19.9219 21.5 15 21.5C9.98438 21.5 6 19.9531 6 18.0312L6.65625 11.3281L13.5 13.7656C13.9688 13.9531 14.4844 14 15 14C15.4688 14 15.9844 13.9531 16.4531 13.7656Z" fill="#3F3EED" />
                                                        </svg>
                                                        Building from scratch</button>
                                                    <button class="nav-link" id="v-pills-settingsf-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settingsf" type="button" role="tab" aria-controls="v-pills-settingsf" aria-selected="false">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M22.9688 1.92188C24 2.95312 24 4.59375 22.9688 5.625L21.5625 7.03125L16.9688 2.4375L18.375 1.03125C19.4062 0 21.0469 0 22.0781 1.03125L22.9688 1.92188ZM8.0625 11.3438L15.8906 3.51562L20.4844 8.10938L12.6562 15.9375C12.375 16.2188 12 16.4531 11.625 16.5938L7.45312 17.9531C7.03125 18.0938 6.60938 18 6.32812 17.6719C6 17.3906 5.90625 16.9219 6.04688 16.5469L7.40625 12.375C7.54688 12 7.78125 11.625 8.0625 11.3438ZM9 3C9.79688 3 10.5 3.70312 10.5 4.5C10.5 5.34375 9.79688 6 9 6H4.5C3.65625 6 3 6.70312 3 7.5V19.5C3 20.3438 3.65625 21 4.5 21H16.5C17.2969 21 18 20.3438 18 19.5V15C18 14.2031 18.6562 13.5 19.5 13.5C20.2969 13.5 21 14.2031 21 15V19.5C21 21.9844 18.9844 24 16.5 24H4.5C1.96875 24 0 21.9844 0 19.5V7.5C0 5.01562 1.96875 3 4.5 3H9Z" fill="#3F3EED" />
                                                        </svg>
                                                        Integrating Bots Through Scripts</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
       {/* <!-- rts eaxty steps area end --> */}
        
    {/* <!-- clients with openup --> */}
        <div class="rts-clients-area rts-section-gap bg-deam">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="title-conter-area">
                            <h2 class="title">
                            Polymatric helps enterprises to scale their customer
                            service with accuracy and speed
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="row g-5 mt--5">
                    <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                        {/* <!-- single team area start --> */}
                        <div class="single-team-area">
                              99%
                            <p class="disc">
                            Increase in first response time
                            </p>    
                        </div>
                        {/* <!-- single tream area end --> */}
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                        {/* <!-- single team area start --> */}
                        <div class="single-team-area">
                              90%
                            <p class="disc">
                            Reduction in average resolution time
                            </p>    
                        </div>
                        {/* <!-- single tream area end --> */}
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                        {/* <!-- single team area start --> */}
                        <div class="single-team-area">
                              50%
                            <p class="disc">
                            Decrease in cost per resolution
                            </p>    
                        </div>
                        {/* <!-- single tream area end --> */}
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                        {/* <!-- single team area start --> */}
                        <div class="single-team-area">
                              70%
                            <p class="disc">
                            Increase in customer retention rate
                            </p>    
                        </div>
                        {/* <!-- single tream area end --> */}
                    </div>

                </div>
            </div>
        </div>
    {/* <!-- clients with openup end --> */}

    
    {/* <!-- rts blog area start --> */}
        <div class="rts-blog-area rts-section-gapTop">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="title-conter-area">
                            <span class="pre-title-bg">Article Samples</span>
                            <h2 class="title">
                                Fully unique content <br/>
                                generated by AI
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="row g-5 mt--5">
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                        {/* <!-- single blog area start --> */}
                        <div class="single-blog-area-wrapper">
                            <a href="blog-details.html#" class="thumbnail">
                                <img src="assets/images/blog/01.jpg" alt="Blog_images"/>
                            </a>
                            <div class="inner-content">
                                <div class="head">
                                    <span class="tag">Content Write</span>
                                    <span class="time">7 min Read</span>
                                </div>
                                <div class="body">
                                    <a href="blog-details.html">
                                        <h5 class="title">Five Things You Need to Know
                                            about Writing Articles</h5>
                                    </a>
                                    <div class="author-area">
                                        <div class="author">
                                            <img src="assets/images/blog/04.png" alt="blog-area"/>
                                            <div class="info">
                                                <p>samuel</p>
                                                <span>Author</span>
                                            </div>
                                        </div>
                                        <a href="blog-details.html">Read More <i class="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- single blog area end --> */}
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                        {/* <!-- single blog area start --> */}
                        <div class="single-blog-area-wrapper">
                            <a href="blog-details.html#" class="thumbnail">
                                <img src="assets/images/blog/02.jpg" alt="Blog_images"/>
                            </a>
                            <div class="inner-content">
                                <div class="head">
                                    <span class="tag">blog Content</span>
                                    <span class="time">4 min Read</span>
                                </div>
                                <div class="body">
                                    <a href="blog-details.html">
                                        <h5 class="title">15 AI Prompts to Supercharge
                                            Sales & Marketing Teams</h5>
                                    </a>
                                    <div class="author-area">
                                        <div class="author">
                                            <img src="assets/images/blog/05.png" alt="blog-area"/>
                                            <div class="info">
                                                <p>samuel</p>
                                                <span>Author</span>
                                            </div>
                                        </div>
                                        <a href="blog-details.html">Read More <i class="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- single blog area end --> */}
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                        {/* <!-- single blog area start --> */}
                        <div class="single-blog-area-wrapper">
                            <a href="blog-details.html#" class="thumbnail">
                                <img src="assets/images/blog/03.jpg" alt="Blog_images"/>
                            </a>
                            <div class="inner-content">
                                <div class="head">
                                    <span class="tag">Content Write</span>
                                    <span class="time">7 min Read</span>
                                </div>
                                <div class="body">
                                    <a href="blog-details.html">
                                        <h5 class="title">Introducing Infobase by Copy
                                            ai: Your Team’s Brand Center</h5>
                                    </a>
                                    <div class="author-area">
                                        <div class="author">
                                            <img src="assets/images/blog/06.png" alt="blog-area"/>
                                            <div class="info">
                                                <p>samuel</p>
                                                <span>Author</span>
                                            </div>
                                        </div>
                                        <a href="blog-details.html">Read More <i class="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- single blog area end --> */}
                    </div>
                </div>
            </div>
        </div>
    {/* <!-- rts blog area end --> */}


    
    {/* <!-- rts pricing plane area start --> */}
        <div class="pricing-plane-area rts-section-gapTop">
            <div class="container">
                <div class="row">
                    <div class="col-lgl-12">
                        <div class="title-conter-area">
                            <span class="pre-title-bg">Pricing Plane</span>
                            <h2 class="title">
                                Ready to Get Started? <br/>
                                We'll Keep You Under Budget
                            </h2>
                        </div>
                    </div>
                </div>

                {/* <!-- tabs area start --> */}
                <div class="tab-area-pricing-two mt--20">
                    <ul class="nav nav-tabs pricing-button-one two" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class=" active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Monthly Pricing</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Annual Pricing</button>
                        </li>
                        <li class="save-badge">
                            <span>SAVE 25%</span>
                        </li>
                    </ul>
                    <div class="tab-content mt--20" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div class="row g-5 mt--10">
                                <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                                    {/* <!-- single pricing-area --> */}
                                    <div class="single-pricing-single-two">
                                        <div class="head">
                                            <span class="top">Basic</span>
                                            <div class="date-use">
                                                <h4 class="title">$Free</h4>
                                                <span>/month</span>
                                            </div>
                                        </div>
                                        <div class="body">
                                            <p class="para">A premium pricing plan is a pricing <br/> structure that is designed.</p>

                                            <div class="check-wrapper">
                                                {/* <!-- single check --> */}
                                                <div class="check-area">
                                                    <i class="fa-solid fa-check"></i>
                                                    <p>10,000 Monthly Word Limit</p>
                                                </div>
                                                {/* <!-- single check end--> */}
                                                {/* <!-- single check --> */}
                                                <div class="check-area">
                                                    <i class="fa-solid fa-check"></i>
                                                    <p>10+ Templates</p>
                                                </div>
                                                {/* <!-- single check end--> */}
                                                {/* <!-- single check --> */}
                                                <div class="check-area">
                                                    <i class="fa-solid fa-check"></i>
                                                    <p>All types of content</p>
                                                </div>
                                                {/* <!-- single check end--> */}
                                                {/* <!-- single check --> */}
                                                <div class="check-area">
                                                    <i class="fa-solid fa-check"></i>
                                                    <p>10+ Languages</p>
                                                </div>
                                                {/* <!-- single check end--> */}
                                            </div>
                                            <a href="#" class="pricing-btn">Get Started</a>
                                        </div>
                                    </div>
                                    {/* <!-- single pricing-area end --> */}
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                                    {/* <!-- single pricing-area --> */}
                                    <div class="single-pricing-single-two active">
                                        <div class="head">
                                            <span class="top">Diamond</span>
                                            <div class="date-use">
                                                <h4 class="title">$399</h4>
                                                <span>/month</span>
                                            </div>
                                        </div>
                                        <div class="body">
                                            <p class="para">A premium pricing plan is a pricing <br/> structure that is designed.</p>

                                            <div class="check-wrapper">
                                                {/* <!-- single check --> */}
                                                <div class="check-area">
                                                    <i class="fa-solid fa-check"></i>
                                                    <p>60,000 Monthly Word Limit</p>
                                                </div>
                                                {/* <!-- single check end--> */}
                                                {/* <!-- single check --> */}
                                                <div class="check-area">
                                                    <i class="fa-solid fa-check"></i>
                                                    <p>60+ Templates</p>
                                                </div>
                                                {/* <!-- single check end--> */}
                                                {/* <!-- single check --> */}
                                                <div class="check-area">
                                                    <i class="fa-solid fa-check"></i>
                                                    <p>All types of content</p>
                                                </div>
                                                {/* <!-- single check end--> */}
                                                {/* <!-- single check --> */}
                                                <div class="check-area">
                                                    <i class="fa-solid fa-check"></i>
                                                    <p>60+ Languages</p>
                                                </div>
                                                {/* <!-- single check end--> */}
                                            </div>
                                            <a href="#" class="pricing-btn">Get Started</a>
                                        </div>
                                    </div>
                                    {/* <!-- single pricing-area end --> */}
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                                    {/* <!-- single pricing-area --> */}
                                    <div class="single-pricing-single-two">
                                        <div class="head">
                                            <span class="top">Silver</span>
                                            <div class="date-use">
                                                <h4 class="title">$199</h4>
                                                <span>/month</span>
                                            </div>
                                        </div>
                                        <div class="body">
                                            <p class="para">A premium pricing plan is a pricing <br/> structure that is designed.</p>

                                            <div class="check-wrapper">
                                                {/* <!-- single check --> */}
                                                <div class="check-area">
                                                    <i class="fa-solid fa-check"></i>
                                                    <p>30,000 Monthly Word Limit</p>
                                                </div>
                                                {/* <!-- single check end--> */}
                                                {/* <!-- single check --> */}
                                                <div class="check-area">
                                                    <i class="fa-solid fa-check"></i>
                                                    <p>30+ Templates</p>
                                                </div>
                                                {/* <!-- single check end--> */}
                                                {/* <!-- single check --> */}
                                                <div class="check-area">
                                                    <i class="fa-solid fa-check"></i>
                                                    <p>All types of content</p>
                                                </div>
                                                {/* <!-- single check end--> */}
                                                {/* <!-- single check --> */}
                                                <div class="check-area">
                                                    <i class="fa-solid fa-check"></i>
                                                    <p>40+ Languages</p>
                                                </div>
                                                {/* <!-- single check end--> */}
                                            </div>
                                            <a href="#" class="pricing-btn">Get Started</a>
                                        </div>
                                    </div>
                                    {/* <!-- single pricing-area end --> */}
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div class="row g-5 mt--10">
                                <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                                    {/* <!-- single pricing-area --> */}
                                    <div class="single-pricing-single-two">
                                        <div class="head">
                                            <span class="top">Basic</span>
                                            <div class="date-use">
                                                <h4 class="title">$Free</h4>
                                                <span>/month</span>
                                            </div>
                                        </div>
                                        <div class="body">
                                            <p class="para">A premium pricing plan is a pricing <br/> structure that is designed.</p>

                                            <div class="check-wrapper">
                                                {/* <!-- single check --> */}
                                                <div class="check-area">
                                                    <i class="fa-solid fa-check"></i>
                                                    <p>10,000 Monthly Word Limit</p>
                                                </div>
                                                {/* <!-- single check end--> */}
                                                {/* <!-- single check --> */}
                                                <div class="check-area">
                                                    <i class="fa-solid fa-check"></i>
                                                    <p>10+ Templates</p>
                                                </div>
                                                {/* <!-- single check end--> */}
                                                {/* <!-- single check --> */}
                                                <div class="check-area">
                                                    <i class="fa-solid fa-check"></i>
                                                    <p>All types of content</p>
                                                </div>
                                                {/* <!-- single check end--> */}
                                                {/* <!-- single check --> */}
                                                <div class="check-area">
                                                    <i class="fa-solid fa-check"></i>
                                                    <p>10+ Languages</p>
                                                </div>
                                                {/* <!-- single check end--> */}
                                            </div>
                                            <a href="#" class="pricing-btn">Get Started</a>
                                        </div>
                                    </div>
                                    {/* <!-- single pricing-area end --> */}
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                                    {/* <!-- single pricing-area --> */}
                                    <div class="single-pricing-single-two active">
                                        <div class="head">
                                            <span class="top">Diamond</span>
                                            <div class="date-use">
                                                <h4 class="title">$399</h4>
                                                <span>/month</span>
                                            </div>
                                        </div>
                                        <div class="body">
                                            <p class="para">A premium pricing plan is a pricing <br/> structure that is designed.</p>

                                            <div class="check-wrapper">
                                                {/* <!-- single check --> */}
                                                <div class="check-area">
                                                    <i class="fa-solid fa-check"></i>
                                                    <p>60,000 Monthly Word Limit</p>
                                                </div>
                                                {/* <!-- single check end--> */}
                                                {/* <!-- single check --> */}
                                                <div class="check-area">
                                                    <i class="fa-solid fa-check"></i>
                                                    <p>60+ Templates</p>
                                                </div>
                                                {/* <!-- single check end--> */}
                                                {/* <!-- single check --> */}
                                                <div class="check-area">
                                                    <i class="fa-solid fa-check"></i>
                                                    <p>All types of content</p>
                                                </div>
                                                {/* <!-- single check end--> */}
                                                {/* <!-- single check --> */}
                                                <div class="check-area">
                                                    <i class="fa-solid fa-check"></i>
                                                    <p>60+ Languages</p>
                                                </div>
                                                {/* <!-- single check end--> */}
                                            </div>
                                            <a href="#" class="pricing-btn">Get Started</a>
                                        </div>
                                    </div>
                                    {/* <!-- single pricing-area end --> */}
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                                    {/* <!-- single pricing-area --> */}
                                    <div class="single-pricing-single-two">
                                        <div class="head">
                                            <span class="top">Silver</span>
                                            <div class="date-use">
                                                <h4 class="title">$199</h4>
                                                <span>/month</span>
                                            </div>
                                        </div>
                                        <div class="body">
                                            <p class="para">A premium pricing plan is a pricing <br/> structure that is designed.</p>

                                            <div class="check-wrapper">
                                                {/* <!-- single check --> */}
                                                <div class="check-area">
                                                    <i class="fa-solid fa-check"></i>
                                                    <p>30,000 Monthly Word Limit</p>
                                                </div>
                                                {/* <!-- single check end--> */}
                                                {/* <!-- single check --> */}
                                                <div class="check-area">
                                                    <i class="fa-solid fa-check"></i>
                                                    <p>30+ Templates</p>
                                                </div>
                                                {/* <!-- single check end--> */}
                                                {/* <!-- single check --> */}
                                                <div class="check-area">
                                                    <i class="fa-solid fa-check"></i>
                                                    <p>All types of content</p>
                                                </div>
                                                {/* <!-- single check end--> */}
                                                {/* <!-- single check --> */}
                                                <div class="check-area">
                                                    <i class="fa-solid fa-check"></i>
                                                    <p>40+ Languages</p>
                                                </div>
                                                {/* <!-- single check end--> */}
                                            </div>
                                            <a href="#" class="pricing-btn">Get Started</a>
                                        </div>
                                    </div>
                                    {/* <!-- single pricing-area end --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- tabs area end --> */}
            </div>
        </div>
    {/* <!-- rts pricing plane area end --> */}


    {/* <!-- faq area start --> */}
        <div class="rts-faq-area rts-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="title-conter-area">
                            <span class="pre-title-bg">Faq's</span>
                            <h2 class="title">
                                Questions About our Polymatric? <br/>
                                We have Answers!
                            </h2>
                            <p class="disc">
                                please feel free to reach out to us. We are always happy to assist you and provide any additional.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row mt--60">
                    <div class="col-lg-12">
                        <div class="accordion-area-one">
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                           Does Polymatric support generative AI features?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        Yes, the Polymatric AI chatbot is powered by OpenAI's GPT 3.5 and GPT 4. The integration allows businesses to provide instant and accurate responses without hallucinations. You can even set the tone of your chatbot to ensure consistent communication that aligns with your brand's voice and values, enhancing the overall customer experience.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Where can I integrate the Polymatric Chatbot?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        You can deploy the Polymatric AI chatbot on your website, Android apps, iOS apps, and messaging platforms such as WhatsApp, Facebook Messenger, Viber, Telegram, and Line.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Can I integrate Polymatric with ticketing CRM?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        Yes, you can integrate the Polymatric AI chatbot with customer service ticketing platforms such as Zendesk, Freshdesk, Salesforce, and Helpscout.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingFour">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Can the Polymatric AI chatbot handle queries in multiple languages?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        Yes, the Polymatric AI chatbot supports more than 100 languages, including Spanish, Italian, Portuguese, Arabic, and all Indian native languages.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingFive">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            How Can I train the Polymatric AI chatbot using my own data?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        You can train the Polymatric AI chatbot using multiple website URLs, help center articles, and documents such as Excel sheets and PDFs.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingFive">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            Does Polymatric support live chat?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        Yes, Polymatric supports seamless bot-to-human handoff based on predefined triggers and when queries become too complex for the AI chatbot.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/* <!-- faq area end --> */}


    
    {/* <!-- rts footer area start --> */}

    {/* <!-- rts footer area end --> */}


    {/* <!-- right switcher --> */}
    {/* <div class="modal-sidebar-scroll rts-dark-light">
        <ul>
            <li><a href="dark/index.html"><span>Dark</span><i class="rts-go-dark fal fa-moon"></i></a></li>
            <li><a href="https://themewant.com/products/html/openup-rtl"><span>RTL</span><i class="fa-solid fa-paragraph-left"></i></a></li>
        </ul>
    </div> */}
    {/* <!-- right switcher end --> */}


    {/* <!-- header style two --> */}
    <div id="side-bar" class="side-bar header-two">
        <button class="close-icon-menu"><i class="far fa-times"></i></button>

        {/* <!-- mobile menu area start --> */}
        <div class="mobile-menu-main">
            <nav class="nav-main mainmenu-nav mt--30">
                <ul class="mainmenu metismenu" id="mobile-menu-active">
                    <li class="has-droupdown parent">
                        <a href="#" class="main">Home</a>
                        <ul class="submenu mm-collapse">
                            <li><a class="mobile-menu-link" href="index.html">Content Writing 01</a></li>
                            <li><a class="mobile-menu-link" href="index-two.html">Content Writing 03</a></li>
                            <li><a class="mobile-menu-link" href="index-three.html">Content Writing 03</a></li>
                            <li><a class="mobile-menu-link" href="index-four.html">Ai Chat Bot</a></li>
                            <li><a class="mobile-menu-link" href="index-five.html">Voice Generator</a></li>
                            <li><a class="mobile-menu-link" href="index-five.html">Image Generator</a></li>
                            <li><a class="mobile-menu-link" href="index-five.html">Photo Stock</a></li>
                        </ul>
                    </li>
                    <li class="parent">
                        <a href="feature.html" class="main">Use Cases</a>
                    </li>
                    <li class="has-droupdown parent">
                        <a href="#" class="main">Pages</a>
                        <ul class="submenu mm-collapse">
                            <li><a class="mobile-menu-link" href="/AboutOpenUp">About Us</a></li>
                            <li><a class="mobile-menu-link" href="blog.html">Blog</a></li>
                            <li><a class="mobile-menu-link" href="blog-details.html">Blog Details</a></li>
                            <li><a class="mobile-menu-link" href="/Contact">Contact</a></li>
                            <li><a class="mobile-menu-link" href="use-case.html">Use Case</a></li>
                            <li><a class="mobile-menu-link" href="use-case-2.html">Use Case 2</a></li>
                            <li><a class="mobile-menu-link" href="case-details.html">Use Case Details</a></li>
                            <li><a class="mobile-menu-link" href="case-details-2.html">Use Case Details</a></li>
                            <li><a class="mobile-menu-link" href="pricing.html">Pricing</a></li>
                            <li><a class="mobile-menu-link" href="pricing-two.html">Pricing Two</a></li>
                            <li><a class="mobile-menu-link" href="pricing-three.html">Pricing Three</a></li>
                            <li><a class="mobile-menu-link" href="faq.html">FAQ</a></li>
                            <li><a class="mobile-menu-link" href="/Login">Log In</a></li>
                            <li><a class="mobile-menu-link" href="registration.html">Registration</a></li>
                            <li><a class="mobile-menu-link" href="reset.html">Reset</a></li>
                            <li><a class="mobile-menu-link" href="404.html">Not Found</a></li>
                        </ul>
                    </li>
                    <li class="parent">
                        <a href="feature.html" class="main">Feature</a>
                    </li>
                    <li class="has-droupdown parent">
                        <a href="#" class="main">Shop</a>
                        <ul class="submenu mm-collapse">
                            <li><a class="mobile-menu-link" href="shop-details.html">Product Details</a></li>
                            <li><a class="mobile-menu-link" href="cart.html">Cart</a></li>
                            <li><a class="mobile-menu-link" href="checkout.html">Checkout</a></li>
                            <li><a class="mobile-menu-link" href="/Login">My Account</a></li>
                        </ul>
                    </li>
                    <li class="parent">
                        <a href="/Contact" class="main">Contact</a>
                    </li>
                </ul>
            </nav>

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
            </div>
        </div>
        {/* <!-- mobile menu area end --> */}
    </div>
    {/* <!-- header style two End --> */}


    {/* <!-- rts backto top start --> */}
    <div class="progress-wrap">
        <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
             //style={{"transition: stroke-dashoffset 10ms linear 0s; stroke-dasharray: 307.919, 307.919; stroke-dashoffset: 307.919;"}}
             style={{
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

export default IndexTwo;
