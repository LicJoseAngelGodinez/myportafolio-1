import React from 'react';
import PText from '../components/PText';
import Button from '../components/Buttons';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import AboutImg from '../assets/images/about-page-img.webp';
import PDF from '../assets/pdf/cv-angel-godinez-esp.pdf';
import * as Constants from '../constants';

const AboutPageStyles = Constants.AboutPageStyles;

export default function About() {
    return (
        <AboutPageStyles>
            <div className="container">
                <div className="top__section">
                    <div className="left">
                        <p className="about__subheading">
                            Hola, soy <span>Ángel Godínez</span>
                        </p>
                        <h2 className="about__heading">
                            A Freelance Web Developer
                        </h2>
                        <div className="about__info">
                            <PText>
                                Desarrollador Front End perseverante con 4 años de experiencia construyendo y brindando mantenimiento, creación de módulos para sistemas de CRM, así mismo a sitios responsivos en la industria de administración de usuarios, registros de proveedores y venta de publicidad. 
                                <br /><br />
                                Nivel competente de HTML, CSS y JavaScript; además del uso de librerías y frameworks modernos tales como ANGULAR, REACT, REACT NATIVE, VUE.
                                <br /><br />
                                Nací en Villahermosa, del selvático estado de Tabasco, así es, es increíble recorrer la ciudad y sentir que estás dentro de la selva y su mezcla con la urbe, podrás subir y bajar por puentes por toda la ciudad, graduado de gastronomía, la vida me trajo a estudiar ingeniería de software a Cancún, y es aquí donde realmente, comenzó mi vida, padre, responsable, comprometido, perseverante, honrado.
                            </PText>
                        </div>
                        <Button 
                            btnText="Descargar CV"
                            btnLink={PDF}
                            btnTarget={true}
                        />
                    </div>
                    <div className="right">
                        <img src={AboutImg} alt="Ángel Godínez img" />
                    </div>
                </div>
                <div className="about__info__items">
                    <div className="about__info__item">
                        <h1 className="about__info__heading">
                            Educación
                        </h1>                        
                        <AboutInfoItem
                            title="Univ."
                            items={[
                                "Instituto de Estudios Universitarios, Tabasco"
                            ]}
                        />
                        <AboutInfoItem
                            title="Univ."
                            items={[
                                "Universidad Politécnica de Quintana Roo, Quintana Roo"
                            ]}
                        />
                    </div>
                </div>
                <div className="about__info__items">
                    <div className="about__info__item">
                        <h1 className="about__info__heading">
                            Stack
                        </h1>                        
                        <AboutInfoItem
                            title="Front End"
                            items={[
                                "HTML",
                                "CSS",
                                "JavaScript",
                                "React",
                                "SEO"
                            ]}
                        />
                        <AboutInfoItem
                            title="BackEnd"
                            items={[
                                "Git",
                                "API RESTful",
                                "PHP",
                                "Node"
                            ]}
                        />
                        <AboutInfoItem
                            title="Idiomas"
                            items={[
                                "Español (Nativo)",
                                "Inglés conversacional"
                            ]}
                        />
                    </div>
                </div>
                <div className="about__info__items">
                    <div className="about__info__item">
                        <h1 className="about__info__heading">
                            Experiencia
                        </h1>                        
                        <AboutInfoItem
                            title="2017 - 2019"
                            items={[
                                "Junior Developer en SalesUp!"
                            ]}
                        />
                        <AboutInfoItem
                            title="2019-2020"
                            items={[
                                "Front End Developer en SalesUp!"
                            ]}
                        />
                        <AboutInfoItem
                            title="2020-2021"
                            items={[
                                "Front End Developer Semi Sr en Braintivity"
                            ]}
                        />
                        <AboutInfoItem
                            title="2021-"
                            items={[
                                "Freelance Web Developer"
                            ]}
                        />
                    </div>
                </div>
            </div>
            <ContactBanner />
        </AboutPageStyles>
    );
}
