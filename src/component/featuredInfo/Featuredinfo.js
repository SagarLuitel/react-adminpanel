import React from 'react'
import "./featuredInfo.css"
import {ArrowDropDown, ArrowDropUp} from '@mui/icons-material';

export const Featuredinfo = () => {
    return (
        <div className="featured">
            <div className="featuredList">
                <div className="featuredWrapper">
                <span className="title">Blog Posts</span>
                <div className="dataOverview">
                    <span className="presentFigure">100</span>
                    <span className="change">-0.15 <ArrowDropDown className="icon negative"/></span>
                </div>
                <span className="changeOutline">Month over month change</span> 
                </div>
            </div>

            <div className="featuredList">
            <div className="featuredWrapper">
                <span className="title">Subscribers</span>
                <div className="dataOverview">
                    <span className="presentFigure">100</span>
                    <span className="change">-0.15 <ArrowDropDown className="icon negative"/></span>
                </div>
                <span className="changeOutline">Month over month change</span>  
                </div>
            </div>

            <div className="featuredList">
            <div className="featuredWrapper">
                <span className="title">Categories</span>
                <div className="dataOverview">
                    <span className="presentFigure">100</span>
                    <span className="change">1.15 <ArrowDropUp className="icon positive"/></span>
                </div>
                <span  className="changeOutline">Month over month change</span>  
                </div>
            </div>
            
        </div>
    )
}
     