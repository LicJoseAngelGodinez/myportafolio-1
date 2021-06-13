import React from 'react';
import { MdPlace } from 'react-icons/md';
import PText from '../components/PText';
import * as Constants from '../constants';

const ContactItemStyles = Constants.ContactItemStyles;

export default function ContactInfoItem({
    icon = <MdPlace />,
    text = "this is an info"
}) {
    return (
        <ContactItemStyles>
            <div className="icon">
                {icon}
            </div>
            <div className="info">
                <PText>
                    {text}
                </PText>
            </div>
        </ContactItemStyles>
    )
}
