const Footer = () => {
    return (
        <footer className="footer">
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
                        <p>©2022 RawExposer. All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
