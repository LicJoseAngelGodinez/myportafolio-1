import React from 'react';
import * as Constants from '../constants';

const SectionTitleStyle = Constants.SectionTitleStyle;

export default function SectionTitle({
    subheading = "This is sibheading",
    heading = "This is heading"
}) {
    return (
        <SectionTitleStyle
            className="section__title"
        >
            <p>{subheading}</p>
            <h2>{heading}</h2>
        </SectionTitleStyle>
    )
}
