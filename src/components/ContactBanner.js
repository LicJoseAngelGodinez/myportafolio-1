import React from 'react';
import * as Constants from '../constants';
import PText from './PText';
import Button from './Buttons';

const ContactBannerStyles = Constants.ContactBannerStyles;

export default function ContactBanner() {
    return (
        <ContactBannerStyles>
            <div className="container">
                <div className="contactBanner__wrapper">
                    <PText>
                        Tienes un proyecto en mente
                    </PText>
                    <h3 className="contactBanner__heading">
                        Podemos hacerlo realidad
                    </h3>
                    <Button
                        btnText="Contactar ahora"
                        btnLink="/contacto"
                        outline={false}
                    />
                </div>
            </div>
        </ContactBannerStyles>
    )
}
