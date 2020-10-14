import React from 'react'
import images from "../constants/images"
import { Link } from 'gatsby'

export function ConsultationSection() {
    return (
        <div className="relative bg-gradient-second">
            <div className="container">
                <img src={images.BG_SECTION} className="object-none h-full object-right" />
                <div className="absolute px-10 lg:px-20 py-4 sm:py-16 text-white bottom-0 sm:top-0">
                    <p className="font-con-bold font-28 uppercase mb-5">
                        Bespoke fitness Coaching<br />
                        To achieve your goals
                    </p>
                    <p className="font-slab-regular font-14 sm:pr-16 w-full md:w-1/2 leading-relaxed">
                        Tailored coaching based on daily stress markers
                        to better asses health. These markers are used to
                        plan nutritional and exercise strategies. Plans are
                        specific for your personal needs as they change,
                        rather than a cookie cutter approach.
                    </p>
                    <div className="flex mt-6">
                        <Link className=" font-con-bold font-14 px-4 md:px-8 py-2 md:py-4 uppercase bg-second text-primary" to='#'>
                            Book a consultation
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
export function SubscribeSection() {
    return (
        <div className="bg-grey-1">
            <div className="container flex px-10 lg:px-20 relative">
                <div className="w-full lg:w-1/2 pt-10 pb-6">
                    <p className="uppercase font-con-bold font-14 mb-3 text-grey">newsletter</p>
                    <p className="uppercase font-con-bold font-28 mb-5 md:mr-40 text-primary">
                        Join my monthly newsletter
                        and get a FREE high protein
                        recipe pack
                </p>
                    <div className="flex flex-col sm:flex-row mb-12">
                        <div className="w-full sm:w-1/2 pl-2">
                            <p className="check-item font-slab-regular font-14 text-black-1 mb-2">
                                Monthly recipe pack
                        </p>
                            <p className="check-item font-slab-regular font-14 text-black-1 mb-2">
                                Pre-launch offers
                        </p>
                            <p className="check-item font-slab-regular font-14 text-black-1 mb-2">
                                Podcast recordings
                        </p>
                            <p className="check-item font-slab-regular font-14 text-black-1 mb-2">
                                New blog posts
                        </p>
                            <p className="check-item font-slab-regular font-14 text-black-1 mb-2">
                                Monthly recipe pack
                        </p>
                            <p className="check-item font-slab-regular font-14 text-black-1 mb-2">
                                Health tips
                        </p>
                            <p className="check-item font-slab-regular font-14 text-black-1 mb-2">
                                Product recommendations
                        </p>
                        </div>
                        <form className="w-full mt-4 sm:mt-0 sm:w-1/2" name="subscribe" method="POST" data-netlify="true">
                            <input type="text" name="firstName" placeholder="FIRST NAME" className="form-input mb-2" required />
                            <input type="email" name="email" placeholder="EMAIL ADDRESS" className="form-input mb-3" required />
                            <button className="font-con-bold px-4 md:px-16 py-3 uppercase bg-second text-primary" type="submit">
                                Subscribe
                        </button>
                        </form>
                    </div>
                    <p className="font-slab-regular font-10 text-black">
                        By subscribing to our newsletter you agree to our <Link className="text-red-1 underline" to="#">Privacy Policy</Link>
                    </p>
                </div>
                <img src={images.IMG_BOOK} className="hidden lg:block absolute object-none right-0 bottom-0" style={{ marginTop: -80 }} />
            </div>
        </div>
    )
}
export function ReviewsSection() {
    return (
        <div className="container flex flex-col md:flex-row justify-between px-10 lg:px-20 py-10 font-12 text-black">
            <div className="w-1/4 mr-4 mb-4">
                <img src={images.IMG_GOOGLE} className="object-fill" />
            </div>

            <div className="flex flex-col justify-between w-full md:w-1/4 mr-20 mb-6 md:mb-2">
                <p className="font-slab-regular mb-6 leading-loose">
                    Christian conducted a methodical and in-depth review of my diet, medication and lifestyle history to come up a strategy to tackle my digestion, inflammation and autoimmune response issues. I am feeling confident stepping into the new year with new found knowledge on my diet. I will come back to write another review in 3-4 months once I’ve given time for the healing protocol to take effect!
                </p>
                <p className="font-slab-bold">
                    Frances Kung
                </p>
            </div>
            <div className="flex flex-col justify-between w-full md:w-1/4 mr-10 mb-6 md:mb-2">
                <p className="font-slab-regular mb-6 leading-loose">
                    A very valuable experience. I have been struggling with ongoing health issues for sometime. Christian’s outcome, after the questionnaire and online consultation, made a lot of sense. I am now aiming to take on the advice and guidance he has given me and I look forward to seeing improvements in my health with his recommendations. Well worth the consultation.
                </p>
                <p className=" font-slab-bold">
                    Michelle Collins
                </p>
            </div>
            <div className="flex flex-col justify-between w-full md:w-1/4 mr-10 mb-6 md:mb-2">
                <p className="font-slab-regular mb-6 leading-loose">
                    Christian is the best I’ve ever met for solving all my body pains. I broke my back 10 years ago and suffered with niggles and hurts for years and within several weeks Christian had sorted them out. I don’t know how he did it, he’s a bit of a wizard. I definitely recommend working with him.
                </p>
                <p className=" font-slab-bold">
                    Patrick Rea
                </p>
            </div>
        </div>
    );
}
