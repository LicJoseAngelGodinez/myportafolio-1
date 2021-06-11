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
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, beatae molestias consequatur corporis reprehenderit optio culpa nemo vitae eos ipsum veritatis in rem. Iste, placeat nam natus magnam commodi blanditiis.
                    </PText>
                </div>
                <div className="footer__col2">
                    <FooterCol
                        heading="Enlaces importantes"
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
                                    path: "/about"
                                },
                                {
                                    type: "Link",
                                    title: "Proyectos",
                                    path: "/projects"
                                },
                                {
                                    type: "Link",
                                    title: "Contactar",
                                    path: "/contact"
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
                                    title: "9981891351",
                                    path: "tel:+529981891351"
                                },
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
                        heading="Redes Sociales"
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
                    © 2021 - Ángel Godínez | Front End Developer
                    </PText>
                </div>
            </div>
        </FooterStyles>
    )
}
