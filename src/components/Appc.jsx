
import React from 'react'
import { Map, Placemark, YMaps } from 'react-yandex-map'

export default function Appc() {
  return (
    <div>
       <YMaps>
        <div>
        <Map
            defaultState = {{
                center: [41.387315, 69.463040],
                zoom: 6,
            }}
            >
                <Placemark geometry = {[41.387315, 69.463040]} />
            </Map>
        </div>
        </YMaps>
    </div>
  )
}
