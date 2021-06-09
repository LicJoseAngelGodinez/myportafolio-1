import React from 'react';
import HeroImg from '../assets/images/me-dark.webp';
import Button from './Buttons';
import PText from './PText';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import * as Constants from '../constants';

const HeroStyles = Constants.HeroStyles;

export default function HeroSection() {
    return (
        <HeroStyles>
            <div className="hero">
                <div className="container">
                    <h1 className="hero__heading">
                        <span>Hello this is </span>
                        <span className="hero__name">Ángel Godínez</span>
                    </h1>
                    <div className="hero__img">
                        <img src={HeroImg} alt="" />
                    </div>
                    <div className="hero__info">
                        <PText>
                            Trabajo como front-end developer/freelancer. Me encanta diseñar y crear experiencias web para las personas.
                        </PText>
                        <Button
                            btnLink="/projects"
                            btnText="ver experiencia"
                            outline={false}
                        />
                    </div>
                    <div className="hero__social">
                        <div className="hero__social__indicator">
                            <p>Follow</p>
                            <img src={SocialMediaArrow} alt=""/>
                        </div>
                        <div className="hero__social__text">
                            <ul>
                                <li>
                                    <a 
                                        href="https://github.com/LicJoseAngelGodinez"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        GH
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="https://gitlab.com/AngelGodinez"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        GL
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="https://www.linkedin.com/in/angelgodinez/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        LI
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="hero__scrollDown">
                        <p>Scroll</p>
                        <img src={ScrollDownArrow} alt=""/>
                    </div>
                </div>
            </div>
        </HeroStyles>
    )
}
