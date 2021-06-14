import React from 'react';
import { Link } from 'react-router-dom';
import * as Constanst from '../constants';

const ButtonStyle = Constanst.ButtonStyle;

export default function Button( {
    btnLink = "Test",
    btnText = "Test",
    outline = false,
    btnTarget = false,
    type = "button"
} ) {
    return type === "submit" ? (
        <ButtonStyle
            outline={outline}
            className="button__wrapper"
        >
            <button className="button" 
                type={type}
            >
                {btnText}
            </button>
        </ButtonStyle>
    ) : (
        <ButtonStyle
            outline={outline}
            className="button__wrapper"
        >
            <Link className="button" 
                to={btnLink}
                target={btnTarget ? "_blank" : "_self"}
                rel="noreferrer"
            >
                {btnText}
            </Link>
        </ButtonStyle>
    )
}
