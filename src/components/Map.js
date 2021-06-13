import React from 'react';
import PText from './PText';
import * as Constants from '../constants';

const MapStyles = Constants.MapStyles;

export default function Map() {
    return (
        <MapStyles>
            <div className="container">
                <div className="map__card">
                    <h3 className="map__card__heading">
                        Aquí estoy
                    </h3>
                    <PText>
                        Cancún, Quintana Roo, México
                    </PText>
                    <a
                    className="map__card__link"
                    href="https://goo.gl/maps/uPHU5fJjDQzaNT6bA"
                    target="_blank"
                    rel="noreferrer">
                        Open in Google Map
                    </a>
                </div>
            </div>
        </MapStyles>
    )
}
