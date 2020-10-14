
import React from "react";
import images from "../../constants/images";
import { Link } from 'gatsby'
import { useSiteMetadata } from "../../hooks/use-site-metadata"

function Footer() {
    const { phoneNumber } = useSiteMetadata()
    return (
        <footer className="bg-gradient-primary">
            <div className="container px-10 lg:px-20 py-6 lg:py-8 text-white">
                <div className="flex flex-col md:flex-row justify-between mb-3 mx-auto items-center">
                    <Link to="/" className="md:w-1/4 mx-auto my-auto uppercase leading-none mb-3">
                        <p className="font-menlo-regular font-16">christian</p>
                        <p className="font-menlo-bold font-26 relative" style={{ marginTop: -2 }}>thomson</p>
                    </Link>
                    <p className="md:w-1/2 my-auto font-con-bold font-19 uppercase mb-3 text-center">Health and Wellness Consultant </p>
                    <div className="md:w-1/4 flex justify-end mb-3 md:mb-0">
                        <img className="object-none mr-2" src={images.IC_PHONE} />
                        <span className="font-con-bold font-24">{phoneNumber}</span>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end font-slab-regular">
                    <p className="md:w-1/4 font-14 mb-3 md:mb-0">
                        The Hidden Gym<br className="hidden md:block" />
                    Magdelen Street<br className="hidden md:block" />
                    London Bridge<br className="hidden md:block" />
                    SE12EN
                </p>
                    <p className="md:w-1/2 text-center font-10 mb-3 md:mb-0">© 2020 All Rights Reserved</p>
                    <div className="md:w-1/4 flex justify-end">
                        <img className="object-none mr-5" src={images.IC_YOUTUBE} />
                        <img className="object-none mr-5" src={images.IC_LINKEDIN} />
                        <img className="object-none mr-5" src={images.IC_INST} />
                        <img className="object-none" src={images.IC_FB} />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
