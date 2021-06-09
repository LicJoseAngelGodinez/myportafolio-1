import React from 'react';
import styled from 'styled-components';
import * as Constants from '../constants';

const PStyle = Constants.PStyle;

export default function PText({children}) {
    return (
        <PStyle>
            <p>{children}</p>
        </PStyle>
    )
}
