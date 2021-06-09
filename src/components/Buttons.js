import React from 'react';
import { Link } from 'react-router-dom';
import * as Constanst from '../constants';

const ButtonStyle = Constanst.ButtonStyle;

export default function Button( {
    btnLink = "Test",
    btnText = "Test",
    outline = false
} ) {
    return (
        <ButtonStyle
            outline={outline}
            className="button__wrapper"
        >
            <Link className="button" 
                to={btnLink}>
                {btnText}
            </Link>
        </ButtonStyle>
    )
}
