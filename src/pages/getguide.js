import React from "react"
import SEO from "../components/seo"
import images from "../constants/images"

const includeData = [
    'Tips & Recommendations to make cooking easier ', 'Bar codes for easier tracking with my fitness pal ', 'Example plans to demonstrate how to use the guide efficiently'
]

function GetGuidePage() {
    return (
        <div className="bg-black flex flex-col overflow-y-hidden justify-start md:justify-center mx-auto relative">
            <SEO
                title="Lead Template"
            />
            <img src={images.BG_TEMPLATE} className="object-fill h-full" style={{ height: 1072 }} />
            <div className="absolute w-full flex flex-col justify-center">
                <div className="container">
                    <div className="px-4 pt-10 md:pt-0 w-full md:w-4/5 lg:w-3/5 mx-auto text-white">
                        <div className="w-full text-center mb-1 md:mb-6 lg:mb-16">
                            <p className="font-con-bold font-14 uppercase">
                                recipe pack
                            </p>
                            <p className="font-con-bold font-34 uppercase mb-2">
                                Ready to get your FREE guide?
                            </p>
                            <p className="w-2/3 mx-auto font-slab-regular font-14 mb-6 leading-normal">
                                Discover the collection of simple high protein recipes, including breakfast, lunch,
                                dinner, treats and smoothie options.
                            </p>
                        </div>
                        <div className="flex flex-col lg:flex-row rounded-lg">
                            <div className="hidden lg:flex flex-col justify-center w-1/2 py-2 bg-black rounded-l-lg ">
                                <img src={images.IMG_BOOK1} className="object-fill" />
                            </div>
                            <form className="w-full lg:w-1/2 bg-white rounded-r-lg rounded-l-lg lg:rounded-l-none px-6 md:px-12 py-5 md:py-10" name="download" method="POST" data-netlify="true">
                                <input type="text" name="firstName" placeholder="FIRST NAME" className="form-input mb-2" required />
                                <input type="email" name="email" placeholder="EMAIL ADDRESS" className="form-input mb-3" required />
                                <button className="w-full font-con-bold py-3 uppercase bg-green text-white" type="submit">
                                    download
                            </button>
                                <p className="text-center font-con-bold font-14 uppercase text-grey-1 my-4">What’s included</p>
                                {
                                    includeData.map((data, index) => (
                                        <p className="flex font-slab-regular font-14 check-item text-primary mb-2" key={index}>
                                            {data}
                                        </p>
                                    ))
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default GetGuidePage;

