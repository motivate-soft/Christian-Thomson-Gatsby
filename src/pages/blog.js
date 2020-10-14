import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import images from "../constants/images"
import { Link } from 'gatsby'

const categoryData = [
    'Psychology', 'Physiology', 'Nutrition', 'Environment'
]


function BlogPage() {
    return (
        <Layout>
            <SEO
                title="Blog"
            />
            <div className="bg-gradient-primary">
                <div className="container relative">
                    <img src={images.BG_BLOG} className="object-none h-full object-right" style={{ height: 232 }} />
                    <div className="px-10 lg:px-20 mt-24 pr-20 w-full absolute text-white top-0">
                        <p className="font-con-bold font-14 uppercase">
                            BLog
                        </p>
                        <p className="font-con-bold font-34 uppercase">
                            Welcome To The Superhuman System
                    </p>
                    </div>
                </div>
            </div>

            <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 overflow-x-auto col-gap-1 lg:col-gap-8 row-gap-2 px-10 lg:px-20 py-8">
                {
                    categoryData.map((category, index) => (
                        <button className="bg-grey flex justify-between px-3 py-4" key={index}>
                            <span className="font-con-bold font-17 my-auto uppercase">{category}</span>
                            <Link to="#">
                                <img src={images.IC_GO} className="object-fill" />
                            </Link>
                        </button>
                    ))
                }
            </div>

            <div className="container flex flex-col sm:flex-row px-10 lg:px-20 pt-6 pb-16">
                <div className="w-full sm:w-1/2 pr-4 flex justify-end">
                    <p className="w-full md:w-2/3 font-slab-regular font-14 leading-relaxed">
                        The Superhuman System is a series of blog posts related to my journey through the health and wellness industry, my personal research and my insights into what the future holds for those looking to improve their health. My personal mantra is test don’t guess, the human body has so many moving parts that to assume you know what to do based on subjective feelings or experience is fundamentally flawed. While no test will give us all the answers we will need, it will give us an objective base to start from. When we make assumptions of our starting place it makes it impossible to understand why a strategy has worked or failed in improving our health. This is exactly how people get lost or disheartened and why misinformation is so prevalent.
                        <br /> <br />
                        In short all strategies work, it just depends on where you are and what direction that strategy will move you, personally. What works for one person may make another worse even if they seem the same, and this is not because we are all unique but more to do with being in a unique position. Our immune system will have a unique reactivity and memory of pathogenic responses, our nervous system will have a unique balance between stress and recovery, our micronutrient status will be unique leading to improved or reduced ability in specific metabolic pathways, our tissue behaviour will be dictated by all of these factors.
                    </p>
                </div>
                <div className="w-full sm:w-1/2 px-8 mt-6 sm:mt-0">
                    <div className="w-full md:w-2/3">
                        <div className="flex justify-between bg-grey px-3 py-2 mb-2">
                            <span className="my-auto font-con-bold font-17 uppercase">what about genetics? </span>
                            <img src={images.IMG_DOWN_ARROW} className="object-none" />
                        </div>
                        <div className="flex justify-between bg-grey px-3 py-2">
                            <span className="my-auto font-con-bold font-17 uppercase">The four pillars of Health</span>
                            <img src={images.IMG_DOWN_ARROW} className="object-none" />
                        </div>
                    </div>
                    <div className="mt-6 uppercase md:pr-10">
                        <p className="font-con-bold font-14 text-grey mb-4">training</p>
                        <p className="font-con-bold font-28 mb-4">Download my basic training principles guide now for FREE</p>
                        <button className="font-con-bold font-14 px-4 md:px-16 py-3 uppercase bg-second text-primary">
                            Get the guide
                            </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}


export default BlogPage;

