import React from 'react';
import SectionTitle from '../components/SectionTitle';
import * as Constants from '../constants';
import ContactInfoItem from './ContactInfoItem';
import ContactForm from './ContactForm';
import { MdEmail, MdPlace } from 'react-icons/md';
import { ToastContextProvider } from '../context/ToastContext';

const ContactSectionStyle = Constants.ContactSectionStyle;

export default function ContactSection() {
    return (
        <ToastContextProvider>

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
                                text="angel.devskitchen@gmail.com"
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
        </ToastContextProvider>
    )
}
