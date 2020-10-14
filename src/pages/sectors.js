import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import images from "../constants/images"

const checkData = ['Nutrition', 'Exercise', 'Sleep', 'Air travel/jet lag ', 'Stress', 'Injury recovery ', 'Mindset/motivation', 'Breathing & meditation']

const planData = [
    {
        image: images.IMG_PLAN1,
        title: 'Nutrition Strategy',
        detail: 'Nutrition is 80% of the battle, especially when it comes to losing weight. So many misconceptions are routinely pedalled it can be hard to know what is right and what is harmful. We do not believe in blanket advice we believe in education and accuracy, our team stays up to date on the latest nutritional science and deliver it to you in simple everyday language.'
    },
    {
        image: images.IMG_PLAN2,
        title: 'Exercise planing',
        detail: 'Whether your staff are exercise enthusiasts or novices we have the tools and information to improve their current health. From martial arts classes to classical gym to simple movement classes we have you covered.'
    },
    {
        image: images.IMG_PLAN3,
        title: 'Lifestyle choices',
        detail: 'Christian Thomson and his team specialise in using simple lifestyle changes to make big impacts on client lives. We don’t just stop at nutrition and exercise, we look at sleep, neurology, environmental conditions such as light and toxic exposure.'
    }
]

function SectorsPage() {
    return (
        <Layout>
            <SEO
                title="Sectors"
            />
            <div className="bg-gradient-primary">
                <div className="relative container">
                    <img src={images.BG_SECTORS} className="object-none h-full object-right" style={{ height: 403 }} />
                    <div className="mt-24 px-10 lg:px-20 w-full pr-10 absolute text-white leading-loose top-0">
                        <p className="font-con-bold font-14 uppercase">
                            Sectors / corporate events
                    </p>
                        <p className="font-con-bold font-34 uppercase">
                            Corporate Events
                    </p>
                        <p className="w-full md:w-1/2 lg:w-1/3 font-slab-regular font-14 mb-6 leading-normal">
                            Health and productivity are intrinsically linked, someone may
                            still seem productive while not looking after their health, but
                            two things need to be taken into account.
                    </p>
                    </div>
                </div>
            </div>

            <div className="container flex flex-col-reverse md:flex-row px-10 lg:px-20 py-10">
                <div className="w-full md:w-2/3 md:pr-12 font-14 leading-relaxed mt-4 md:mt-0">
                    <p className="font-slab-bold">
                        Health and productivity are intrinsically linked, someone may still seem productive while not looking after their health, but two things need to be taken into account.
                    </p>
                    <br />
                    <p className="font-slab-regular">
                        First, they could be more productive and second a continued decline in health will be matched by a decline in productivity. For this reason, health in the workplace especially among the high performing members of the team is vital. Christian Thomson and his team are experts in managing busy professionals into good health after years of neglect, with simple tools we track and advise on health in a measurable way.
                        <br /><br />
                        Wellness can be a fickle thing to measure especially when dealing with larger numbers of employees, I use a specialised questionnaire that analyses and groups symptoms to assess the health of specific organ systems. This allows for much more focused consultations to get to the heart of the issues for the individuals, it also allows for a better understanding of personal hierarchy of need. This leads to more personalised and effective plans for improvement in health without large investments of time or money.
                        <br /><br />
                        Further programs can be created based on the results of the questionnaire and consultation on request and extended objective testing can be arranged for any individual in need.
                     </p>
                </div>
                <form className="w-full md:w-1/3 px-8 pt-6 pb-12 bg-gradient-second relative -mt-32 md:-mt-40" name="bookCall" method="POST" data-netlify="true">
                    <p className="font-con-bold font-24 text-white mb-4 uppercase">BOOK A call TODAY</p>
                    <input type="text" name="firstName" placeholder="FIRST NAME" className="form-input mb-2" required />
                    <input type="text" name="companyName" placeholder="COMPANY NAME" className="form-input mb-2" />
                    <input type="email" name="email" placeholder="EMAIL ADDRESS" className="form-input mb-2" required />
                    <input type="text" name="phoneNumber" placeholder="PHONE NUMBER" className="form-input mb-2" required />
                    <textarea rows="5" className="form-input mb-4" placeholder="QUESTIONS?"></textarea>
                    <button className="w-full font-con-bold py-3 uppercase bg-green text-white" type="submit">
                        let’s talk
                    </button>
                </form>
            </div>

            <div className="container flex flex-col md:flex-row px-10 lg:px-20 pb-10">
                <div className="w-full md:w-2/3 md:pr-12">
                    <div className="flex flex-col sm:flex-row mb-4">
                        <p className="w-full sm:w-1/4 mr-1 font-con-bold font-18 uppercase">Executive programs</p>
                        <p className="w-full sm:w-3/4 font-slab-regular font-14 leading-loose">
                            Your executive team will appreciate our approach as we understand the
                            time pressures a high profile job can bring. Each team member will get a
                            personalised approach that is based on objective and measurable
                            information paired with their subjective experience. We use tests such
                            as metabolic analysis and heart rate variability to monitor health, stress
                            and recovery. Through a video library and a dedicated what’s app group,
                            we are able to answer any and all questions quickly and smoothly.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row">
                        <p className="w-full sm:w-1/4 mr-1 font-con-bold font-18 uppercase">Corporate wellness days</p>
                        <p className="w-full sm:w-3/4 font-slab-regular font-14 leading-loose">
                            During our corporate wellness days, we arrange objective tests by appointment,
                            so we can give personalised in-depth health check-ups. Days include micro
                            workshops, consultations, blood glucose testing, metabolic analysis, blood
                            pressure and HRV
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/3 mt-4 md:mt-0">
                    {
                        checkData.map((data, index) => (
                            <p className="flex check-item mb-2" key={index}>
                                {data}
                            </p>
                        ))
                    }
                </div>
            </div>

            <div className="container px-10 lg:px-20 py-6 grid grid-cols-1 md:grid-cols-3 row-gap-6 col-gap-4 lg:col-gap-8">
                {
                    planData.map((data, index) => (
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


        </Layout>
    );
}


export default SectorsPage;

