import React from 'react';
import SectionTitle from '../components/SectionTitle';
import * as Constants from '../constants';
import ContactInfoItem from './ContactInfoItem';
import ContactForm from './ContactForm';
import { MdEmail, MdPlace } from 'react-icons/md';

const ContactSectionStyle = Constants.ContactSectionStyle;

export default function ContactSection() {
    return (
        <ContactSectionStyle>
            <div className="container">
                <SectionTitle
                    heading="Contacto"
                    subheading="Veamos qué tienes"
                />
                <div className="contactSection__wrapper">
                    <div className="left">
                        <ContactInfoItem
                            icon={<MdEmail />}
                            text="joseangel.godinez1989@gmail.com"
                        />
                        <ContactInfoItem
                            icon={<MdPlace />}
                            text="Cancún, México"
                        />
                    </div>
                    <div className="right">
                        <ContactForm />
                    </div>
                </div>
                
            </div>
        </ContactSectionStyle>
    )
}