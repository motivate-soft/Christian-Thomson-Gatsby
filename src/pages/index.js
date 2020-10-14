import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import images from "../constants/images"
import { Link } from 'gatsby'
import { ReviewsSection, SubscribeSection, ConsultationSection } from '../components/sections'


function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
      />

      <div className="relative bg-gradient-primary">
        <div className="container">
          <img src={images.BG_HOME} className="object-none h-full object-left" style={{ height: 403 }} />
          <div className="flex flex-col justify-end md:justify-center pl-10 md:pl-20 pr-4 w-full h-full absolute top-0">
            <div className="ml-0 md:ml-64 mb-10 md:mb-0 text-white leading-loose" >
              <p className="font-con-bold font-14 uppercase">
                Christian Thomson
            </p>
              <p className="font-con-bold font-28 lg:font-34 uppercase leading-normal">
                Health and Wellness <br className="hidden lg:block" />
              Consultant
            </p>
              <p className="font-slab-regular font-14 mb-4 leading-normal">
                Former kick-boxing champion, award-winning <br className="hidden lg:block" />
              coach and accredited health consultant.
            </p>
              <div className="flex pt-1 lg:pt-4 align-top font-con-bold font-14">
                <Link className="px-4 md:px-8 py-2 md:py-4 uppercase bg-second text-primary" to='#'>
                  Free Health Assessment
              </Link>
                <span className="text-white uppercase my-auto ml-4">online coaching</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container flex flex-col md:flex-row justify-between px-10 lg:px-20 py-6">
        <div className="w-full md:w-3/10 mr-10 mt-3">
          <p className="font-con-bold font-28 text-primary uppercase mb-4">Understand where to focus your efforts</p>
          <p className="font-slab-regular font-14 text-primary mb-4">
            Most people have never been tested to understand the
            condition of their health. Our symptom analysis test
            reveals what your body requires and gives you a tailored
            supplement and fitness program that will work.
          </p>
          <div className="flex">
            <span className="my-auto font-con-bold font-14 uppercase">Find out more</span>
            <img src={images.IMG_RIGHT_ARROW} className="object-none ml-1" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-end w-full md:w-7/10 mt-4 md:mt-0">
          <div className="bg-grey py-10 px-10 my-auto text-center font-con-bold text-primary mr-4">
            <p className="font-132 leading-none mb-2">128</p>
            <p className="uppercase font-16">Happy clients</p>
          </div>
          <div className="my-4 sm:my-auto mx-auto">
            <img src={images.IMG_YOUTUBE} className="object-fill" />
          </div>
        </div>
      </div>




      <div className="bg-gradient-primary">
        <div className="container px-10 lg:px-20 py-8 text-white font-14">
          <p className="text-center uppercase font-con-bold">Benefits of personal wellness</p>
          <div className="grid grid-cols-1 md:grid-cols-3 col-gap-4 row-gap-4 font-slab-regular mt-6">
            <div className="flex justify-between mx-1 lg:mx-10">
              <div className="w-1/5 mt-2 mr-10">
                <img src={images.IC_BENE1} className="object-fill" />
              </div>
              <p className="w-4/5 my-auto md:my-0 leading-relaxed">
                Track your progress with
                meaningful data that actually
                helps guide your next decision.
            </p>
            </div>
            <div className="flex justify-between mx-1 lg:mx-10">
              <div className="w-1/5 mt-2 mr-10">
                <img src={images.IC_BENE2} className="object-fill" />
              </div>

              <p className="w-4/5 my-auto md:my-0 leading-relaxed">
                Connect the dots to why you
                experience specific symptoms
                and how to make the most
                effective changes.
            </p>
            </div>
            <div className="flex justify-between mx-1 lg:mx-10">
              <div className="w-1/5 mt-2 mr-10">
                <img src={images.IC_BENE3} className="object-fill" />
              </div>

              <p className="w-4/5 my-auto md:my-0 leading-relaxed">
                Reveal what other objective
                assessmnet methods are needed
                to personalise your health and
                fitness program.
            </p>
            </div>
          </div>
        </div>
      </div>


      <ReviewsSection />

      <ConsultationSection />

      <div className="container px-10 lg:px-20 py-16 bg-white">
        <p className="uppercase text-grey font-con-bold text-14">featured in</p>
        <div className="flex flex-col sm:flex-row mt-5">
          <img src={images.IMG_F1} className="object-none sm:mr-8 mb-4" />
          <img src={images.IMG_F2} className="object-none sm:mr-8 mb-4" />
          <img src={images.IMG_F3} className="object-none mb-4" />
        </div>
      </div>

      <SubscribeSection />

    </Layout>
  );
}


export default IndexPage;

