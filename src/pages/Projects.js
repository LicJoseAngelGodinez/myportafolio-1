import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import * as Constants from '../constants';
import { MdSearch } from 'react-icons/md';
import ProjectItem from '../components/ProjectItem';
import ProjectInfo from '../assets/data/projects';
import { useEffect } from 'react';

const ProjectsStyles = Constants.ProjectsStyles;

export default function Projects() {

    const [searchText, setSearchText] = useState('');
    const [projectData, setProjectData] = useState(ProjectInfo);

    useEffect(() => {
        if ( searchText === '' ) return;
        setProjectData(() =>
            ProjectInfo.filter((item) =>
                item.name.toLowerCase().match(searchText.toLowerCase())
            )
        );
    }, [searchText]);

    function handleChange (evt) {
        evt.preventDefault();
        setSearchText(evt.target.value);
        if ( !evt.target.value.length > 0 ) {
            setProjectData(ProjectInfo);
        }
    };

    return (
        <ProjectsStyles>
            <div className="container">
                <SectionTitle
                    heading="Proyectos"
                    subheading="Donde he dejado huella"
                />
                <div className="projects__searchBar">
                    <div >
                        <input type="text"
                            value={searchText}
                            onChange={handleChange}
                            placeholder="Nombre de Proyecto"
                        />
                        <MdSearch className="searchIcon"/>
                    </div>
                </div>
                <div className="projects__allItems">
                    {projectData.map( item => (
                        <ProjectItem
                            key={item.id}
                            desc={item.desc}
                            img={item.img}
                            prjLink={item.link}
                            title={item.name}
                        />
                    ))}
                </div>
            </div>
        </ProjectsStyles>
    )
}
