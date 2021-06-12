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
                        icon={<MdCode />}
                        title="Web Dev"
                        desc="Desarrollo sitios cuidando la UI/UX balancenado eficiencia, calidad y rapidez."
                    />
                    <ServicesSectionItem 
                        icon={<MdDesktopMac />}
                        title="Desktop Apps"
                        desc="También cuento con equipo para el desarrollo de aplicaciones de escritorio"
                    />
                    <ServicesSectionItem 
                        icon={<MdPhonelinkSetup />}
                        title="App Dev"
                        desc="Desarrollo aplicaciones móviles."
                    />
                </div>
            </div>
        </ServiceItemStyles>
    )
}
