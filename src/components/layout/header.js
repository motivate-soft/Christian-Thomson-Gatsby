import React, { useState } from "react"
import { Link } from 'gatsby'
import { Location } from '@reach/router'
import images from '../../constants/images'

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  return (
    <header>
      <Location>
        {({ location }) => {

          const lastPos = location.pathname.lastIndexOf('/');
          const len = location.pathname.length;
          const pathName = location.pathname.substr(0, lastPos == 0 ? len : lastPos);

          return (
            <div className="container flex flex-wrap justify-between bg-primary py-2 md:py-0 px-10 lg:px-20">
              <div className="my-auto py-1">
                <Link to="/" className="my-auto uppercase text-white leading-none">
                  <p className="font-menlo-regular font-16">christian</p>
                  <p className="font-menlo-bold font-26 relative" style={{ marginTop: -2 }}>thomson</p>
                </Link>
              </div>
              <button
                className="flex my-auto float-right w-10 h-10 items-center px-3 py-2 text-white border border-white rounded md:hidden"
                onClick={() => toggleExpansion(!isExpanded)}
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
              <nav
                className={`${
                  isExpanded ? `block` : `hidden`
                  } md:flex md:items-center w-full md:w-auto`}
              >
                {[
                  {
                    route: `/testing`,
                    title: `Testing`,
                  },
                  {
                    route: `/therapies`,
                    title: `Therapies`,
                  },
                  {
                    route: `/coaching`,
                    title: `Coaching`,
                  },
                  {
                    route: `/sectors`,
                    title: `Sectors`,
                  },
                  {
                    route: `/blog`,
                    title: `Blog`,
                  },
                  {
                    route: `/getguide`,
                    title: `Lead`,
                  },
                  {
                    route: `/contact`,
                    title: `Contact`,
                  }
                ].map((link) => (
                  <Link
                    className={"nav-item block uppercase text-center md:inline-block md:mr-8 mb-2 md:mb-0 no-underline"
                      + (link.route == pathName ? " text-second" : " text-white")}

                    key={link.title}
                    to={link.route}
                  >
                    {link.title}
                  </Link>
                ))}
                <div className="flex justify-center mb-4 md:mb-0">
                  <Link className="font-con-bold font-14 px-4 lg:px-8 py-2 lg:py-4 uppercase bg-second text-primary" to='#'>
                    Free Health Assessment
                  </Link>
                </div>
                
              </nav>
            </div>
          );
        }}
      </Location>


      <img src={images.BG_HOME} className="hidden" />
      <img src={images.BG_TESTING} className="hidden" />
      <img src={images.BG_THERAPIES} className="hidden" />
      <img src={images.BG_COACHING} className="hidden" />
      <img src={images.BG_SECTORS} className="hidden" />
      <img src={images.BG_BLOG} className="hidden" />
      <img src={images.BG_TEMPLATE} className="hidden" />


    </header >
  );
}


export default Header;

