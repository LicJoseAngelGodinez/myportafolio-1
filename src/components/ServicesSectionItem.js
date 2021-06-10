import React from 'react';
import * as Constanst from '../constants';
import { MdDesktopMac } from 'react-icons/md'
import PText from './PText';

const ItemStyles = Constanst.ItemStyles;

export default function ServicesSectionItem({
    icon = <MdDesktopMac />,
    title = "Diseño Web",
    desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita labore quaerat harum laudantium sunt, maxime iste vitae earum."
}) {
    return (
        <ItemStyles>
            <div className="servicesItem__icon">{icon}</div>
            <div className="servicesItem__title">{title}</div>
            <PText>{desc}</PText>            
        </ItemStyles>
    )
}
