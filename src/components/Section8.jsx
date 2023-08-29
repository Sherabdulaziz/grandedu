
import "../styles/Section8.scss"

import { Map, Placemark, YMaps } from "react-yandex-map"

import React from 'react'

export default function Section8() {

    return (
        <div>
            <div className='section8'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className='h-2'>Manzil</h1>
                            <br />
                            <p className='p-8'><img className='img3' src="/image/phone2.webp" alt="not found" /> +998 55 500 34 34</p>
                            <p className='p-8'><img className='img3' src="/image/loca2.png" alt="not found" /> Amir Temur 86 | Yunusobod Tumani</p>
                            <p className='p-8'>Minor Metrosi Kazakhstan binosi 1-qavati</p>
                            <p className='p-8'><img className='img3' src="/image/email2.png" alt="not found" />zohirjon0306@gmail.com</p>
                            <br />
                        </div>
                        {/* <div id="map-test" className="col-md-6">
                        <YMaps>
                            <div>
                                <Map
                                defaultState= {{
                                    center: [41.328203, 69.283049],
                                    zoom: 12,  
                                }}
                                >
                                    <Placemark geometry={[41.328203, 69.283049]}/>

                                </Map>
                            </div>
                        </YMaps>

                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
