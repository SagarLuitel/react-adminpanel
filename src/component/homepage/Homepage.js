import React from 'react'
import { Chart } from '../chart/Chart'
import { Featuredinfo } from '../featuredInfo/Featuredinfo'
import { Postwidget } from '../postwidget/Postwidget'
import { SubscriberWidget } from '../subscriberwidget/SubscriberWidget'
import "./homepage.css"


export const Homepage = () => {
    return (
        <div className="home">
            <Featuredinfo />
            <Chart />
            <div className="homeWidgets">
                <SubscriberWidget />
                <Postwidget />
            </div>
        </div>
    )
}
