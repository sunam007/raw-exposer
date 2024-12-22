import Footer from "../components/Footer";

const Home = () => {
    return (
        <div id="jopho-main">
            {/* <!-- Slider --> */}
            <header className="header slider-fade">

            </header>
            {/* <!-- About Us --> */}
            <section className="proto-services section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-30">
                            <span className="section-subtitle">About Us</span>
                            <h2 className="section-title">Jopho</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            <div className="row">
                                <div className="col-md-3 animate-box fadeInUp animated" data-animate-effect="fadeInUp">
                                    <span className="line-one"></span>
                                </div>
                                <div className="col-md-8 animate-box mb-60 fadeInUp animated" data-animate-effect="fadeInUp">
                                    <h6>Photography bibendu tunc duntez varius. Vestibulum viverra the mana mattis gravida sapien</h6>
                                    <p>Shots eu nunc bibe endum in finibus elit eget the solli citudin elit. Phasellus rutrum in lacus ut euismod. Vestibulum eleifend tortor orci eu ornare tortor semper at. Duis scelerisque the nibhse drana moss pulvinar laoreet.</p>
                                    <p>Vivense eu nunc bibe endum in finibus elit eget the solli citudin elit. Phasellus rutrum in lacus ut euismod. Vestibulum eleifend tortor orci eu ornare tortor semper at. Duis scelerisque the nibhse drana moss pulvinar laoreet.</p>
                                    {/* <img src="img/sign.png" className="sign" alt=""> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 animate-box fadeInUp animated" data-animate-effect="fadeInUp">
                            <div className="jophoto-about-img">
                                <div className="img"> <img src="/src/assets/images/group.jpg" alt=""/> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Gallery --> */}
            {/* <section className="jophoto-gallery section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-30">
                            <span className="section-subtitle">Portfolio</span>
                            <h2 className="section-title">Gallery</h2>
                        </div>
                    </div>
                    <div className="row jophoto-photos" id="jophoto-section-photos">
                        <div className="col-md-4 animate-box" data-animate-effect="fadeInUp">
                            <a href="img/gallery/01.jpg" className="d-block jophoto-photo-item" data-caption="Portrait Photo" data-fancybox="gallery"> <img src="img/gallery/01.jpg" alt="Image" className="img-fluid">
                                <div className="photo-text-more"> <span className="ti-fullscreen"></span> </div>
                            </a>
                        </div>
                        <div className="col-md-4 animate-box" data-animate-effect="fadeInUp">
                            <a href="img/gallery/02.jpg" className="d-block jophoto-photo-item" data-caption="Wedding Photo" data-fancybox="gallery"> <img src="img/gallery/02.jpg" alt="Image" className="img-fluid">
                                <div className="photo-text-more"> <span className="ti-fullscreen"></span> </div>
                            </a>
                        </div>
                        <div className="col-md-4 animate-box" data-animate-effect="fadeInUp">
                            <a href="img/gallery/03.jpg" className="d-block jophoto-photo-item" data-caption="Portrait Photo" data-fancybox="gallery"> <img src="img/gallery/03.jpg" alt="Image" className="img-fluid">
                                <div className="photo-text-more"> <span className="ti-fullscreen"></span> </div>
                            </a>
                        </div>
                        <div className="col-md-4 animate-box" data-animate-effect="fadeInUp">
                            <a href="img/gallery/04.jpg" className="d-block jophoto-photo-item" data-caption="Portrait Photo" data-fancybox="gallery"> <img src="img/gallery/04.jpg" alt="Image" className="img-fluid">
                                <div className="photo-text-more"> <span className="ti-fullscreen"></span> </div>
                            </a>
                        </div>
                        <div className="col-md-4 animate-box" data-animate-effect="fadeInUp">
                            <a href="img/gallery/05.jpg" className="d-block jophoto-photo-item" data-caption="Portrait Photo" data-fancybox="gallery"> <img src="img/gallery/05.jpg" alt="Image" className="img-fluid">
                                <div className="photo-text-more"> <span className="ti-fullscreen"></span> </div>
                            </a>
                        </div>
                        <div className="col-md-4 animate-box" data-animate-effect="fadeInUp">
                            <a href="img/gallery/06.jpg" className="d-block jophoto-photo-item" data-caption="Fashion Photo" data-fancybox="gallery"> <img src="img/gallery/06.jpg" alt="Image" className="img-fluid">
                                <div className="photo-text-more"> <span className="ti-fullscreen"></span> </div>
                            </a>
                        </div>
                        <div className="col-md-4 animate-box" data-animate-effect="fadeInUp">
                            <a href="img/gallery/07.jpg" className="d-block jophoto-photo-item" data-caption="Travel Photo" data-fancybox="gallery"> <img src="img/gallery/07.jpg" alt="Image" className="img-fluid">
                                <div className="photo-text-more"> <span className="ti-fullscreen"></span> </div>
                            </a>
                        </div>
                        <div className="col-md-4 animate-box" data-animate-effect="fadeInUp">
                            <a href="img/gallery/08.jpg" className="d-block jophoto-photo-item" data-caption="Wedding Photo" data-fancybox="gallery"> <img src="img/gallery/08.jpg" alt="Image" className="img-fluid">
                                <div className="photo-text-more"> <span className="ti-fullscreen"></span> </div>
                            </a>
                        </div>
                        <div className="col-md-4 animate-box" data-animate-effect="fadeInUp">
                            <a href="img/gallery/09.jpg" className="d-block jophoto-photo-item" data-caption="Personal Photo" data-fancybox="gallery"> <img src="img/gallery/09.jpg" alt="Image" className="img-fluid">
                                <div className="photo-text-more"> <span className="ti-fullscreen"></span> </div>
                            </a>
                        </div>
                        <div className="col-md-4 animate-box" data-animate-effect="fadeInUp">
                            <a href="img/gallery/10.jpg" className="d-block jophoto-photo-item" data-caption="Wedding Photo" data-fancybox="gallery"> <img src="img/gallery/10.jpg" alt="Image" className="img-fluid">
                                <div className="photo-text-more"> <span className="ti-fullscreen"></span> </div>
                            </a>
                        </div>
                        <div className="col-md-4 animate-box" data-animate-effect="fadeInUp">
                            <a href="img/gallery/11.jpg" className="d-block jophoto-photo-item" data-caption="Baby Photo" data-fancybox="gallery"> <img src="img/gallery/11.jpg" alt="Image" className="img-fluid">
                                <div className="photo-text-more"> <span className="ti-fullscreen"></span> </div>
                            </a>
                        </div>
                        <div className="col-md-4 animate-box" data-animate-effect="fadeInUp">
                            <a href="img/gallery/12.jpg" className="d-block jophoto-photo-item" data-caption="Sport Photo" data-fancybox="gallery"> <img src="img/gallery/12.jpg" alt="Image" className="img-fluid">
                                <div className="photo-text-more"> <span className="ti-fullscreen"></span> </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <!-- Services --> */}
            {/* <section className="proto-services section-padding mb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-30">
                            <span className="section-subtitle">What We Do</span>
                            <h2 className="section-title">Services</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="owl-carousel owl-theme owl-loaded owl-drag">






                                <div className="owl-stage-outer"><div className="owl-stage" style="transform: translate3d(-1050px, 0px, 0px); transition: all; width: 4200px;"><div className="owl-item cloned" style="width: 320px; margin-right: 30px;"><div className="services-con">
                                    <div className="services-title">
                                        <h4>Fashion Photography</h4>
                                    </div><img src="img/services/01.jpg" alt="">
                                        <a href="services-page.html"></a>
                                </div></div><div className="owl-item cloned" style="width: 320px; margin-right: 30px;"><div className="services-con">
                                    <div className="services-title">
                                        <h4>Sport Photography</h4>
                                    </div><img src="img/services/03.jpg" alt="">
                                        <a href="services-page.html"></a>
                                </div></div><div className="owl-item cloned" style="width: 320px; margin-right: 30px;"><div className="services-con">
                                    <div className="services-title">
                                        <h4>Product Photography</h4>
                                    </div> <img src="img/services/04.jpg" alt="">
                                        <a href="services-page.html"></a>
                                </div></div><div className="owl-item active" style="width: 320px; margin-right: 30px;"><div className="services-con">
                                    <div className="services-title">
                                        <h4>Wedding Photography</h4>
                                    </div> <img src="img/services/02.jpg" alt="">
                                        <a href="services-page.html"></a>
                                </div></div><div className="owl-item active" style="width: 320px; margin-right: 30px;"><div className="services-con">
                                    <div className="services-title">
                                        <h4>Travel Photography</h4>
                                    </div><img src="img/services/05.jpg" alt="">
                                        <a href="services-page.html"></a>
                                </div></div><div className="owl-item active" style="width: 320px; margin-right: 30px;"><div className="services-con">
                                    <div className="services-title">
                                        <h4>Portrait Photography</h4>
                                    </div><img src="img/services/06.jpg" alt="">
                                        <a href="services-page.html"></a>
                                </div></div><div className="owl-item" style="width: 320px; margin-right: 30px;"><div className="services-con">
                                    <div className="services-title">
                                        <h4>Fashion Photography</h4>
                                    </div><img src="img/services/01.jpg" alt="">
                                        <a href="services-page.html"></a>
                                </div></div><div className="owl-item" style="width: 320px; margin-right: 30px;"><div className="services-con">
                                    <div className="services-title">
                                        <h4>Sport Photography</h4>
                                    </div><img src="img/services/03.jpg" alt="">
                                        <a href="services-page.html"></a>
                                </div></div><div className="owl-item" style="width: 320px; margin-right: 30px;"><div className="services-con">
                                    <div className="services-title">
                                        <h4>Product Photography</h4>
                                    </div> <img src="img/services/04.jpg" alt="">
                                        <a href="services-page.html"></a>
                                </div></div><div className="owl-item cloned" style="width: 320px; margin-right: 30px;"><div className="services-con">
                                    <div className="services-title">
                                        <h4>Wedding Photography</h4>
                                    </div> <img src="img/services/02.jpg" alt="">
                                        <a href="services-page.html"></a>
                                </div></div><div className="owl-item cloned" style="width: 320px; margin-right: 30px;"><div className="services-con">
                                    <div className="services-title">
                                        <h4>Travel Photography</h4>
                                    </div><img src="img/services/05.jpg" alt="">
                                        <a href="services-page.html"></a>
                                </div></div><div className="owl-item cloned" style="width: 320px; margin-right: 30px;"><div className="services-con">
                                    <div className="services-title">
                                        <h4>Portrait Photography</h4>
                                    </div><img src="img/services/06.jpg" alt="">
                                        <a href="services-page.html"></a>
                                </div></div></div></div><div className="owl-nav disabled"><div className="owl-prev">prev</div><div className="owl-next">next</div></div><div className="owl-dots"><div className="owl-dot active"><span></span></div><div className="owl-dot"><span></span></div></div></div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <!-- Footer --> */}
            {/* <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 footer-text-left">
                            <div className="social">
                                <a href="#"><i className="ti-twitter-alt"></i></a>
                                <a href="#"><i className="ti-facebook"></i></a>
                                <a href="#"><i className="ti-instagram"></i></a>
                                <a href="#"><i className="ti-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="col-md-4 footer-text-center">
                            <div className="logo">
                                <h1><a href="index.html">JOPHO<span>PHOTO STUDIO</span></a></h1>
                            </div>
                        </div>
                        <div className="col-md-4 footer-text-right">
                            <p>©2022 JOPHO. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </footer> */}
            <Footer/>
        </div>
    );
};

export default Home;
