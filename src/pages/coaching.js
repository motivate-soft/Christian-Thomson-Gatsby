import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import images from "../constants/images"
import { Link } from 'gatsby'

const includeData = [
    {
        title: 'Symptom analysis',
        items: [
            'Multiple-choice questionnaire',
            'Discover which systems are under the greatest strain ',
            'Reveal which objective test will be most useful ',
            'Used to cross analyse objective test results with symptoms experienced for increased personalisation'
        ]
    },
    {
        title: 'Blood , Urine, DNA & Microbiome Tests',
        items: [
            'Bespoke testing protocol based on symptoms experienced',
            'Objective results that drive program personalisation',
            'Fine-tuned recommendations aimed at getting your sustainable results faster '
        ]
    },
    {
        title: 'Personalised coaching based on daily objective markers',
        items: [
            'Reveal how your body is responding to the program with objective biomarkers that are taken at home',
            'Daily contact to adapt your program when needed based on your objective biomarkers changes ',
            'Weekly calls to workshop any upcoming events that may cause changes to your standard plan ',
            'Library of resources to guide you through any recommendations '
        ]
    }
]

const controlData = [
    'x 1 Symptom analysis per assessment period',
    'x 1 Objective test per assessment period',
    'X 1 supplement recommendation per 12 week program',
    'X 1 glucose monitor',
    'X 1 Thermometer',
]

const deviceData = [
    {
        image: images.IMG_DEVICE1,
        title: 'Fasting Blood Glucose',
        detail: 'Fasting blood glucose is a great measure of baseline stress levels within the body. Blood glucose is an important and easily obtained marker that tightly correlates with stress hormone circulation. This tool allows great visibility for how your body responds in regard to the balance of stress the program creates and whether we are doing the right things to mitigate that stress.'
    },
    {
        image: images.IMG_DEVICE2,
        title: 'Average Body Temperature',
        detail: 'Average body temperature is a great way to monitor metabolic function from a high-level perspective. By sampling taking your temperature in the mornings can indicate, thyroid function, adrenal stress status and immune regulation. Such a simple test can give great insight to how you are responding to the given program and what type of changes may be needed to further improve the results you are getting. '
    },
    {
        image: images.IMG_DEVICE3,
        title: 'Hydrogen Gas Anlaysis',
        detail: 'Using new portable technology, we measure the level of hydrogen gas being produced in your breath after meals to assess digestion and food intolerances. A food may cause an issue for many reasons, so to understand this, potentially solve this or work around it efficiently gathering a full spectrum of information about your bodies objective response to it is vital.'
    }
]

function CoachingPage() {
    return (
        <Layout>
            <SEO
                title="Coaching"
            />

            <div className="bg-gradient-second">
                <div className="container relative">
                    <img src={images.BG_COACHING} className="object-none h-full object-right" style={{ height: 404 }} />
                    <div className="w-full px-10 lg:px-20 text-center mt-24 absolute text-white leading-loose" style={{ top: 0 }}>
                        <p className="font-con-bold font-14 uppercase">
                            Online Coaching
                    </p>
                        <p className="font-con-bold font-34 uppercase leading-none sm:leading-loose">
                            Programs for improved health and weight loss
                    </p>
                        <p className="w-full lg:w-2/5 mx-auto font-slab-regular font-14 mb-6 leading-normal">
                            Obtaining the body you want can feel like hard work, but many fail or
                            struggle because they put their efforts in the wrong place.
                    </p>
                    </div>
                </div>
            </div>

            <div className="container px-10 lg:px-20 py-6">
                <div className="w-full md:w-4/5 lg:w-7/10 bg-white mx-auto rounded-large px-8 pt-8 pb-6 text-center shadow-md relative -mt-24 lg:-mt-32">
                    <p className="font-con-bold font-24 text-red mb-4">BOOK A CONSULTATION TODAY</p>
                    <p className="text-black-1 w-full sm:w-7/10 mx-auto font-14 font-slab-regular text-left mb-6">
                        I will get in touch as soon as possible but in the mean time, let me know
                        what email address to send over my objective test brochure and price list
                    </p>
                    <form className="w-full sm:w-2/3 lg:w-1/2 sm:px-8 mx-auto mb-8" name="booking" method="POST" data-netlify="true">
                        <input type="text" name="firstName" placeholder="FIRST NAME" className="form-input mb-2" required />
                        <input type="email" name="email" placeholder="EMAIL ADDRESS" className="form-input mb-3" required />
                        <button className="w-full font-con-bold py-3 uppercase bg-green text-white" type="submit">
                            let’s talk
                        </button>
                    </form>
                    <p className="font-slab-regular font-10 text-black leading-relaxed">
                        This form collects information we will use to send you updates about promotions, special offers, and news. We will not share or sell your personal information. You can unsubscribe at any time. By submitting this form you consent to receiving marketing emails and agree to our&nbsp;
                        <Link className="text-red-1 underline">Privacy Policy</Link>
                    </p>
                </div>
            </div>

            <div className="bg-gradient-primary">
                <div className="container px-10 lg:px-20 py-8 text-white font-14">
                    <p className="text-center uppercase font-con-bold mb-8">What’s included</p>
                    <div className="w-full md:w-3/5 mx-auto">
                        {
                            includeData.map((data, index) => (
                                <div className="flex flex-col md:flex-row mb-10" key={index}>
                                    <span className="w-full md:w-1/3 uppercase font-con-bold font-18 mr-4">{data.title}</span>
                                    <div className="w-full md:w-2/3 font-slab-regular font-14">
                                        {
                                            data.items.map((item, subIndex) => (
                                                <p className="flex check-item mb-2" key={index + '-' + subIndex}>
                                                    {item}
                                                </p>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>

            <div className="container bg-white">
                <div className="flex flex-col md:flex-row px-10 w-full lg:w-3/5 mx-auto py-12 font-slab-regular font-14">
                    <div className="w-full md:w-1/2 md:pr-10">
                        <p className="font-slab-bold">That’s not to say cardiovascular exercise is better than weight training or vice versa, it only speaks to each person requiring a more specific strategy to achieve their goals with excessive effort.</p>
                        <br /><br />
                        I hear from potential online coaching clients all the time that they are doing all the right things of cutting down on sugar, eating more vegetables and being active regularly, yet not seeing the changes in their body and falling off the wagon.
                        <br /><br />
                        This is no surprise to me as even if a plan is sustainable if you don’t see the results you will revert back to doing what at least makes you feel better. Not to say all attempts at improving your health make you miserable of course but if you are not in the habit of living this way and it does not add to your life you will not keep it.
                        <br /><br />
                        The best practice method to achieve results in any field is to assess your current position, make objective tests to see what the best way forward is and create key performance indicators to track your progress.
                    </div>
                    <div className="w-full md:w-1/2 md:pl-10 mt-6 md:mt-0">
                        Health or online coaching is no different, and with optimal health brings the capacity to achieve a vast range of goals in a sustainable manner.
                        <br /><br />
                        I use exactly this process to hone in on what is most important to move the needle in the right direction to achieve your goals. To start the online coaching process the first point of call is to fill out an exercise history form and a nutritional questionnaire that assess symptoms to certain which organs or systems are under the most strain.
                        <br /><br />
                        Once we have an overview of your current health position, we can order more objective test such as blood panels or urine analysis to further reveal the most important areas to support for your health.
                        <br /><br />
                        This sets up specific program recommendations that tackle your biggest problems to streamline your route to success.
                    </div>
                </div>
            </div>

            <div className="container px-10 lg:px-20 py-6 grid grid-cols-1 md:grid-cols-3 row-gap-6 col-gap-4 lg:col-gap-8">
                {
                    deviceData.map((data, index) => (
                        <div className="bg-grey" key={index}>
                            <img src={data.image} className="w-full object-fill" />
                            <div className="pt-6 pb-20 px-6">
                                <p className="font-con-bold text-red font-20 mb-4 uppercase">{data.title}</p>
                                <p className="font-slab-regular text-black font-12 leading-relaxed">{data.detail}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="bg-grey-1">
                <div className="container px-10 lg:px-20 py-10">
                    <p className="text-center font-con-bold uppercase mb-12">Take back control of your health</p>
                    <div className="flex flex-col md:flex-row w-full lg:w-4/5 mx-auto">
                        <div className="w-full md:w-1/2 md:pr-4">
                            <p className="font-slab-regular text-black mb-10 font-14">
                                Standard online coaching programs run for 12 weeks and include 3 assessment periods. Each assessment period allows us to take objective stock of progress and build an accurate picture of how your body is truly responding to the program.
                        </p>
                            <Link className="font-con-bold font-18 text-red uppercase" to="#">Test Don’t Guess</Link>
                        </div>
                        <div className="w-full md:w-1/2 md:pl-4 font-slab-bold font-14 text-black mt-6 md:mt-0">
                            {
                                controlData.map((data, index) => (
                                    <p className="flex check-item mb-2" key={index}>
                                        {data}
                                    </p>
                                ))
                            }
                            <p className="mt-6 font-con-bold font-32 text-red uppercase">
                                Value = £1,193
                        </p>
                        </div>
                    </div>
                    <div className="flex justify-center mt-6">
                        <Link className="font-con-bold font-14 px-24 py-3 uppercase bg-green text-white" to='#'>
                            let’s talk
                    </Link>
                    </div>
                </div>
            </div>

        </Layout>
    );
}


export default CoachingPage;

