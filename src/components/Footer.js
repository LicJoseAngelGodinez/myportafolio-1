import React from 'react';
import * as Constants from '../constants';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyles = Constants.FooterStyles;

export default function Footer() {
    return (
        <FooterStyles>
            <div className="container">
                <div className="footer__col1">
                    <h1 className="footer__col1__title">
                        Ángel Godínez
                    </h1>
                    <PText>
                        Front End UIX Developer con más de 4 años de experiencia, autodidacta e interesado en seguir aprendiendo mejores técnicas de desarrollo y estructuras.
                    </PText>
                </div>
                <div className="footer__col2">
                    <FooterCol
                        heading="Sitio"
                        links={
                            [
                                {
                                    type: "Link",
                                    title: "Home",
                                    path: "/"
                                },
                                {
                                    type: "Link",
                                    title: "Acerca de",
                                    path: "/acerca-de"
                                },
                                {
                                    type: "Link",
                                    title: "Proyectos",
                                    path: "/proyectos"
                                },
                                {
                                    type: "Link",
                                    title: "Contactar",
                                    path: "/contacto"
                                }
                            ]
                        }
                    />
                </div>
                <div className="footer__col3">
                    <FooterCol
                        heading="Información de contacto"
                        links={
                            [
                                {
                                    title: "joseangel.godinez1989@gmail.com",
                                    path: "mailto:joseangel.godinez1989@gmail.com"
                                },
                                {
                                    title: "Cancún, Quintana Roo, México",
                                    path: "https://goo.gl/maps/uPHU5fJjDQzaNT6bA"
                                }
                            ]
                        }
                    />
                </div>
                <div className="footer__col4">
                    <FooterCol
                        heading="Social Media"
                        links={
                            [
                                {
                                    title: "Linkedin",
                                    path: "https://www.linkedin.com/in/angelgodinez/"
                                },
                                {
                                    title: "GitLab",
                                    path: "https://gitlab.com/AngelGodinez"
                                },
                                {
                                    title: "GitHub",
                                    path: "https://github.com/LicJoseAngelGodinez"
                                }
                            ]
                        }
                    />
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <PText>
                    © 2021 - Ángel Godínez | Front End UIX Dev.
                    </PText>
                </div>
            </div>
        </FooterStyles>
    )
}
