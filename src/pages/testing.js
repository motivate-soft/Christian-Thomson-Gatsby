import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import TestItem from "../components/test_item"
import images from "../constants/images"
import { Link } from 'gatsby'
import { SubscribeSection, ConsultationSection } from '../components/sections'


const testData = [
    {
        title: 'Blood Chemistry Analysis',
        content: 'Blood markers can give you a huge insight into organ function and overall biology, this information is invaluable when creating an effective plan. Without proper knowledge of how our digestive tract, liver or kidneys (just to name a few) are functioning, planning a nutritional or supplement program is based on subjective symptoms which can vary greatly. While it’s still entirely possible to get good results by relying on an experienced practitioners knowledge of symptoms, a blood test cuts out much of the guesswork.'
    },
    {
        title: 'DNA Analysis',
        content: 'DNA is like the blueprint to your physical body and its chemical capacity. Many of touted in the past DNA to be the gospel of lab testing. This is only half true as it, by its self only tells you long term risk potential. DNA analysis is hugely beneficial for many but is paired best with epigenetic testing and other lab tests to get a balanced perspective of both acute state and long term risk. '
    },
    {
        title: 'Epi-genetic Analysis',
        content: 'The central dogma of genetics was that DNA controls everything, but more accurately it is signals from outside the cell dictate how the DNA is read and expressed. This is called epigenetics and by looking at how our DNA has been expressed or silenced we can get a much better understanding of how ou bodies have been built over time and gives context to long term risks apparent in our DNA.'
    },
    {
        title: 'Microbiome Analysis',
        content: 'The microbiome is a vital component of our health and is permanently interacting with our immune system to create an optimal environment in our GI tract. This test can aid in the assessment of vitamin need based on bacteria that synthesis them and intestinal health which is directly linked to the diversity and species of the microbiome. When considering the health of the large intestines this is a must-have test.'
    },
    {
        title: 'Blood and Urine Analysis',
        content: 'A combined blood and urine analysis that measures over 150 biomarkers is a truly comprehensive assessment of personal biochemistry. This assessment gives a much stronger set of results than many other tests when considering micronutrient status and metabolic pathway health. This is also a powerful test to measure toxic stress on the body from multiple toxicants including heavy metals.'
    },
    {
        title: 'GHI Chronic Inflammation Analysis ',
        content: 'Most inflammatory markers spike when acute forms of inflammation occur. So these are not very good measures of chronic inflammatory status or disease progression, We use a test that measures glycosylated proteins which is a process that happens after the protein is originally made. This Gly Health Index is a much stronger indicator of both chronic inflammation and disease progression as it is not likely to change rapidly with window of change less than 3 months.'
    },
    {
        title: '72 Hour Heat Rate Varibility',
        content: 'Heart rate variability is the gold standard for predicting mortality in cardiovascular disease as it is a great measure parasympathetic tone. HRV is a great indicator of stress and recovery, used by athletes and sports teams all around the world. Using a 72-hour measurement via a wearable portable ECG, you can not only monitor how well you recover during sleep but o how well you handle stress throughout the day.'
    },
    {
        title: 'GHI Chronic Inflammation Analysis ',
        content: 'Most inflammatory markers spike when acute forms of inflammation occur. So these are not very good measures of chronic inflammatory status or disease progression, We use a test that measures glycosylated proteins which is a process that happens after the protein is originally made. This Gly Health Index is a much stronger indicator of both chronic inflammation and disease progression as it is not likely to change rapidly with window of change less than 3 months.'
    }
]

function TestingPage() {
    return (
        <Layout>
            <SEO
                title="Testing"
            />
            <div className="relative bg-gradient-primary">
                <div className="container">
                    <img src={images.BG_TESTING} className="object-none h-full object-right" style={{ height: 403 }} />
                    <div className="mt-24 px-10 w-full lg:px-20 absolute text-white leading-loose top-0">
                        <p className="font-con-bold font-14 uppercase">
                            Testing
                        </p>
                        <p className="font-con-bold font-34 uppercase">
                            Test Don’t Guess
                        </p>
                        <p className="w-full md:w-1/2 lg:w-1/3 font-slab-regular font-14 mb-6 leading-normal">
                            Ever buy a lab test only to be confused by its results?<br />
                            We go beyond the results and get to the bottom of
                            what they really mean.
                        </p>

                        <Link className="font-con-bold font-14 px-4 md:px-8 py-2 md:py-4 uppercase bg-second text-primary" to='#'>
                            Shop all tests
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container flex flex-col md:flex-row justify-between px-10 lg:px-20 py-6">
                <div className="w-full md:w-4/10 md:mr-10 mt-3">
                    <p className="font-con-bold font-28 text-primary uppercase mb-4">bespoke testing with reports & actionable, usable advice</p>
                    <p className="font-slab-regular font-14 text-primary mb-4">
                        No matter your goals guessing is never the answer, lab
                        tests are perfect for helping you achieve, weight loss,
                        resolving health issues and increasing performance.
                    </p>
                </div>
                <div className="relative bg-grey w-full md:w-6/10 pt-4 pb-6 px-5">
                    <p className="font-con-bold font-16 uppercase">Featured test</p>
                    <p className="font-con-bold font-24 uppercase text-red mb-3">Metabolic analysis</p>
                    <p className="font-slab-regular font-12 text-black w-4/5">
                        Ever wanted to know how much u should be eating to lose weight? Or how hard you should be exercising?
                        <br /><br />
                        Metabolic analysis is the only scientifically validated method to measure how many calories you burn, it also can indicate stress levels, what split of macronutrients will be optimal and objectively tell you what intensities of exercise will be most impactful to get results.
                    </p>
                    <Link to="#">
                        <img src={images.IC_GO} className="object-none absolute right-0 bottom-0 m-3" />
                    </Link>
                </div>
            </div>

            <div className="bg-gradient-primary">
                <div className="container px-10 lg:px-20 pt-8">
                    <p className="text-center uppercase font-con-bold text-white font-14 mb-8">Our range of complete testing & reports</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 col-gap-8 row-gap-5">
                        {
                            testData.map((data, index) => (
                                <TestItem data={data} key={index} />
                            ))
                        }
                    </div>
                    <div className="flex justify-center py-20">
                        <Link className="font-con-bold font-14 px-4 md:px-8 py-2 md:py-4 uppercase bg-second text-primary" to='#'>
                            Shop all tests
                    </Link>
                    </div>
                </div>
            </div>


            <ConsultationSection />

            <SubscribeSection />
        </Layout>
    );
}


export default TestingPage;

