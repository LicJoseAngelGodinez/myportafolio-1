import React from 'react';
import * as Constants from '../constants';
import PText from './PText';

const AboutItemStyle = Constants.AboutItemStyle;

export default function AboutInfoItem({
    title = "This is title",
    items = ["HTML","CSS","JS"]
}) {
    return (
        <AboutItemStyle>
            <h1 className="title">{title}</h1>
            <div className="items">
                {items.map((item, index) => (
                    <div
                        className="item"
                        key={index}
                    >
                        <PText>
                            {item}
                        </PText>
                    </div>
                ))}
            </div>
        </AboutItemStyle>
    )
}
