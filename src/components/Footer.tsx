import { Icon } from '@iconify-icon/react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container flex flex-col md:flex-row md:items-center md:justify-around">
                <div className="social">
                    <a href="#">
                        <Icon icon="iconoir:facebook" width="24" height="24" />
                    </a>
                    <a href="#">
                        <Icon icon="hugeicons:instagram" width="24" height="24" />
                    </a>
                    <a href="#">
                        <Icon icon="si:youtube-line" width="24" height="24" />
                    </a>


                </div>
                <div className="logo">
                    <h1><a href="index.html">JOPHO<span>PHOTO STUDIO</span></a></h1>
                </div>
                <div className="">
                    <p>©2022 RawExposer. All rights reserved</p>
                </div>
            </div>


            {/* <div className='container'>
                <div className='grid gap-4 grid-cols-3 grid-rows-3'>
                    <div className="social">
                        <Icon icon="iconoir:facebook" width="24" height="24" />
                        <Icon icon="hugeicons:instagram" width="24" height="24" />
                        <Icon icon="si:youtube-line" width="24" height="24" />
                    </div>
                    <div className="logo">
                        <h1><a href="index.html">JOPHO<span>PHOTO STUDIO</span></a></h1>
                    </div>
                    <div className="">
                        <p>©2022 RawExposer. All rights reserved</p>
                    </div>
                </div>
            </div> */}
        </footer>
    );
};

export default Footer;
