import React from 'react';
import { MdCode, MdDesktopMac, MdPhonelinkSetup } from 'react-icons/md';
import * as Constants from '../constants';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServiceItemStyles = Constants.ServiceItemStyles;

export default function ServiceSection() {
    return (
        <ServiceItemStyles>
            <div className="container">
                <SectionTitle 
                    heading="Servicios"
                    subheading="Qué puedo hacer por ti?"    
                />
                <div className="services__allItems">
                    <ServicesSectionItem 
                        icon={<MdDesktopMac />}
                        title="Diseño Web"
                        desc="Realizo diseños  UI/UX para sitios que ayuden al sitio a tener un look único."
                    />
                    <ServicesSectionItem 
                        icon={<MdCode />}
                        title="Web Dev"
                        desc="También desarrollo sitios. Creo sitios de alto rendimiento y gran velocidad"
                    />
                    <ServicesSectionItem 
                        icon={<MdPhonelinkSetup />}
                        title="App Dev"
                        desc="Desarrollo aplicaciones móviles. Creo aplicaciones móviles con el ojo puesto en la UI."
                    />
                </div>
            </div>
        </ServiceItemStyles>
    )
}
