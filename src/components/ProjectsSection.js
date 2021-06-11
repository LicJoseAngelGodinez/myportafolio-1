import React from 'react';
import * as Constants from '../constants';
import SectionTitle from './SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import projects from '../assets/data/projects';
import ProjectItem from './ProjectItem';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation]);

const ProjectSectionStyle = Constants.ProjectSectionStyle;

export default function ProjectsSection() {
    return (
        <ProjectSectionStyle>
            <div className="container">
                <SectionTitle 
                    heading="Proyectos"
                    subheading="Donde he trabajado"
                />
                <div className="projects__allItems">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                            breakpoints={
                                {
                                    /* When window width is >= 640px */
                                    640:{
                                        slidesPerView: 1
                                    },
                                    /* When window width is >= 768px */
                                    768:{
                                        slidesPerView: 2
                                    },
                                    /* When window width is >= 1200px */
                                    1200:{
                                        slidesPerView: 3
                                    }
                                }
                            }
                    >
                        {projects.map((project, index) => {
                            if ( index >= 5 ) return;
                            return (
                                <SwiperSlide
                                    key={project.id}
                                >
                                    <ProjectItem 
                                        title={project.name}
                                        desc={project.desc}
                                        img={project.img}
                                    />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>            
        </ProjectSectionStyle>
    )
}
