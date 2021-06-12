import React, { useState } from 'react';
import * as Constants from '../constants';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import SectionTitle from './SectionTitle';
import PText from './PText';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import testimonials from '../assets/data/testimonials';

const TestimonialSectionStyle = Constants.TestimonialSectionStyle;

export default function TestimonialSection() {

    const [activeIndex, setActiveIndex] = useState(0);
    const activeSlide = testimonials[activeIndex];

    function handlePrev() {
        if ( activeIndex <= 0 ) {
            setActiveIndex(testimonials.length - 1);
        } else {
            setActiveIndex((oldIndex) => oldIndex - 1);
        }
    };

    function handleNext() {
        if ( activeIndex >= testimonials.length - 1 ) {
            setActiveIndex(0);
        } else {
            setActiveIndex((oldIndex) => oldIndex + 1);
        }
    };

    return (
        <TestimonialSectionStyle>
            <div className="container">
                <SectionTitle
                    heading="Testimonios"
                    subheading="Que dicen con quienes he desarrollado"
                />
                <div className="testimonial__wrapper">
                    <SwitchTransition>
                        <CSSTransition
                            key={activeSlide.id}
                            timeout={300}
                            classNames="fade"
                        >
                            <div className="testimonial__info">
                                <div className="testimonial__desc">
                                    <PText>
                                        {activeSlide.desc}
                                    </PText>
                                </div>
                                <h2 className="testimonial__name">
                                    {activeSlide.name}
                                </h2>
                                <p className="testimonial__title">
                                    {activeSlide.title}, {activeSlide.org}
                                </p>
                            </div>
                        </CSSTransition>
                    </SwitchTransition>
                </div>
                <div className="arrows">
                    <div className="prev"
                        onClick={handlePrev}
                        role="button"
                        tabIndex={0}
                        onKeyDown={handlePrev}
                    >
                        <MdArrowBack />
                    </div>
                    <div className="next"
                        onClick={handleNext}
                        role="button"
                        tabIndex={0}
                        onKeyDown={handleNext}
                    >
                        <MdArrowForward />
                    </div>
                </div>
            </div>
        </TestimonialSectionStyle>
    )
}
