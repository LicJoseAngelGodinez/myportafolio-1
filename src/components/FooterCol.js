import React from 'react';
import * as Constants from '../constants';
import { Link } from 'react-router-dom';

const ColStyles = Constants.ColStyles;

export default function FooterCol({
    heading = "col heading",
    links = [
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
}) {
    return (
        <ColStyles>
            <h1 className="heading">{heading}</h1>
            <ul>
                {
                    links.map((item, index) => (
                        <li
                            key={index}
                        >
                            {item.type === "Link" ? (
                                <Link
                                    to={item.path}
                                >
                                    {item.title}
                                </Link>
                            ) : (
                                <a
                                    href={item.path}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {item.title}
                                </a>
                            )}
                        </li>
                    ))
                }
            </ul>
        </ColStyles>
    )
}

// Link form react router dom
// a
