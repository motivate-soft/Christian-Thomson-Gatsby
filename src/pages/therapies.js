import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import images from "../constants/images"
import { Link } from 'gatsby'
import { SubscribeSection, ConsultationSection } from '../components/sections'

function TherapiesPage() {
    return (
        <Layout>
            <SEO
                title="Therapies"
            />
            <div className="relative bg-gradient-primary">
                <div className="container">
                    <img src={images.BG_THERAPIES} className="object-none h-full object-right" style={{ height: 403 }} />
                    <div className="px-10 lg:px-20 w-full mt-24 absolute text-white leading-tight sm:leading-loose top-0">
                        <p className="font-con-bold font-14 uppercase">
                            Therapies
                    </p>
                        <p className="font-con-bold font-34 uppercase">
                            Therapies for acute and chronic pain
                    </p>
                        <p className="font-slab-regular w-full md:w-1/2 font-14 mb-6 sm:pr-20 leading-normal">
                            A unique set of therapies that focus on reducing acute and chronic pain.
                            These therapies are at the cutting edge of modern performance and recovery
                            techniques. Book a consultation to reveal which therapy type will be most
                            effective for what you need and that will resolve your issue fastest.
                    </p>
                    </div>
                </div>
            </div>

            <div className="container grid grid-cols-1 md:grid-cols-2 col-gap-8 row-gap-5 px-10 lg:px-20 py-6">
                <div className="relative bg-grey pt-4 pb-6 px-5">
                    <p className="font-con-bold font-16 uppercase">P-DTR</p>
                    <p className="font-con-bold font-24 uppercase text-red mb-3">ProprioceptiveDeep Tendon Reflex</p>
                    <p className="font-slab-regular font-12 text-black w-4/5">
                        P-DTR is a set of functional neurology tools aimed at treating the sensory nervous system to reduce the perception of pain and increase performance. Specialises in treating pains that persist after full tissue recovery. This therapy has great success in treating chronic pain and muscular issues that have no clear origin. Common issues I resolve in the clinic are joint and muscle pain that is either transient or flare up at random occasions.
                    </p>
                    <Link to="#">
                        <img src={images.IC_GO} className="object-none absolute right-0 bottom-0 m-3" />
                    </Link>
                </div>
                <div className="relative bg-grey pt-4 pb-6 px-5">
                    <p className="font-con-bold font-16 uppercase">Photobiomodulation</p>
                    <p className="font-con-bold font-24 uppercase text-red mb-3">Red Light Therapy</p>
                    <p className="font-slab-regular font-12 text-black w-4/5">
                        The future of acute injury recovery with over 4,000 peer-reviewed studies showing its efficacy and increased capacity for healing over many other therapy types including ice and ultrasound. This therapy is shown to not only increase healing speed o acute injury but also prevent damage and increase muscular capacity. This is perfect for both maintaining optimal performance during peak training periods and getting back to training after an injury.
                    </p>
                    <Link to="#">
                        <img src={images.IC_GO} className="object-none absolute right-0 bottom-0 m-3" />
                    </Link>
                </div>
            </div>

            <ConsultationSection />

            <SubscribeSection />

        </Layout>
    );
}


export default TherapiesPage;

