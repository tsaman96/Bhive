import React from 'react'
import { response } from '../constants/data'

const Arrows = () => {
    return (
        <div className="arrows">
            <img src={`${process.env.PUBLIC_URL}/images/arrow-light.svg`} />
            <img src={`${process.env.PUBLIC_URL}/images/arrow.svg`} />
            <img src={`${process.env.PUBLIC_URL}/images/arrow-dark.svg`} />
        </div>
    )
}

const Card = ({ data }) => {
    return (
        <div className="card" key={data.id}>
            <div className="header">
                <h3>{data.name}</h3>
                <div className="icon">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/direction.svg`}
                    />
                    <p>{data.distance}</p>
                </div>
            </div>
            <div className="image">
                <img
                    src={`${process.env.PUBLIC_URL}/images/${data.images[0]}`}
                />
            </div>
            <div className="footer">
                <div className="day-pass">
                    <div className="text">
                        <p>Day Pass</p>
                        <h4>
                            {`₹ ${data.day_pass_price}`}
                            <span>/Day</span>
                        </h4>
                    </div>
                    <Arrows />
                </div>
                <div className="bulk-pass">
                    <div className="chip">
                        {data.day_pass_discounts_percentage['10'].value}%
                        discount
                    </div>
                    <div className="text">
                        <p>Bulk Pass</p>
                        <h4>
                            {`₹ ${Math.floor(
                                (1 -
                                    data.day_pass_discounts_percentage['10']
                                        .value /
                                        100) *
                                    data.day_pass_price *
                                    10
                            )}`}
                            <span>/10 Days</span>
                        </h4>
                    </div>
                    <Arrows />
                </div>
            </div>
        </div>
    )
}

const Overview = () => {
    return (
        <div className="overview">
            <h2>Our Space Overview</h2>
            <div className="overview-grid">
                {response.map((data) => (
                    <Card data={data} />
                ))}
            </div>
        </div>
    )
}

export default Overview
