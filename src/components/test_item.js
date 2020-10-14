import React from 'react'
import PropTypes from "prop-types";
import images from "../constants/images";
import { Link } from 'gatsby'

function TestItem({ data }) {
    return (
        <div className="relative bg-white pt-4 pb-6 px-6">
            <p className="font-con-bold font-24 uppercase text-red mb-3">{data.title}</p>
            <p className="font-slab-regular font-12 text-black w-4/5">
                {data.content}    
            </p>
            <Link to="#">
                <img src={images.IC_GO} className="object-none absolute right-0 bottom-0 m-3" />
            </Link>
        </div>
    )
}

TestItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default TestItem;