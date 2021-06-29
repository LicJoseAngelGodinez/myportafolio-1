import React from 'react';
import SectionTitle from '../components/SectionTitle';
import PText from '../components/PText';
import Button from '../components/Buttons';
import AboutImg from '../assets/images/about-sec-img.jpg';
import * as Constants from '../constants';

const AboutSectionStyle = Constants.AboutSectionStyle

export default function AboutSection() {
    return (
        <AboutSectionStyle>
            <div className="container">
                <div className="aboutSection__left">
                    <SectionTitle
                        subheading="permítame presentarme"
                        heading="SOBRE MÍ"
                    />
                    <PText>
                        Soy un desarrollador front-end originario de Tabasco, México. Trabajo en proyectos de sitios profesionales. Me gusta la estabilidad y siempre trato de añadir eso a través de la estructura de los proyectos en que trabajo.
                    </PText>
                    <div className="aboutSection__buttons">
                        <Button
                            btnLink="/proyectos"
                            btnText="Proyectos"
                            outline={false}
                        />
                        <Button
                            btnLink="/acerca-de"
                            btnText="Saber más"
                            outline
                        />
                    </div>
                </div>
                <div className="aboutSection__right">
                    <img src={AboutImg} alt="" />
                </div>
            </div>
        </AboutSectionStyle>
    )
}
