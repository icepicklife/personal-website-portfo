import '../styles/Skills.css'

import html_logo from "../assets/logos/html-logo.svg"
import css_logo from "../assets/logos/css-logo.svg"
import js_logo from "../assets/logos/js-logo.svg"
import python_logo from "../assets/logos/python-logo.svg"
import java_logo from "../assets/logos/java-logo.svg"
import cpp_logo from "../assets/logos/cpp-logo.svg"

import django_logo from "../assets/logos/django-logo.svg"
import react_logo from "../assets/logos/react-logo.svg"
import android_logo from "../assets/logos/android-logo.svg"
import vite_logo from "../assets/logos/vite-logo.svg"

import postgres_logo from "../assets/logos/postgresql-logo.svg"
import mysql_logo from "../assets/logos/mysql-logo.svg"

import figma_logo from "../assets/logos/figma-logo.svg"

import adobe_logo from "../assets/logos/adobe-logo.svg"
import office_logo from "../assets/logos/msoffice-logo.svg"

import chevron_icon from "../assets/icons/right-chevron-icon.svg"

const creatives_drivelink = "https://drive.google.com/file/d/1GBAlWttvskstKdcYttWACx-9mBoqLM6r/view?usp=sharing"

const skillsListed = [
    {
        category: "Languages",
        items: [
            { name: "HTML", icon: html_logo },
            { name: "CSS", icon: css_logo },
            { name: "JS", icon: js_logo },
            { name: "Python", icon: python_logo },
            { name: "Java", icon: java_logo },
            { name: "C/C++", icon: cpp_logo },
        ]
    },
    {
        category: "Frameworks",
        items: [
            { name: "Django", icon: django_logo },
            { name: "React.js", icon: react_logo },
            { name: "Android", icon: android_logo },
            { name: "Vite", icon: vite_logo },
        ]
    },
    {
        category: "Databases",
        items: [
            { name: "PostgreSQL", icon: postgres_logo },
            { name: "MySQL", icon: mysql_logo },
        ]
    },
    {
        category: "UX/UI",
        items: [
            { name: "Figma", icon: figma_logo },
        ]
    },
    {
        category: "Others",
        items: [
            { name: "Creatives" },
            { name: "Videos" },
            { name: "Photos" },
            { name: "Adobe", icon: adobe_logo },
            { name: "Office", icon: office_logo },
        ]
    }
]


export default function Skills() {

    return (

        <section className='skills-panel' id="skills">

            <div className="skills-banner">
                <div className="banner-accent-left"></div>
                <h2 className="banner-name">Skills</h2>
                <div className="banner-accent-right"></div>
            </div>

            <div className='skills-content'>
                {skillsListed.map((section) => (
                    <div className="skills-category" key={section.category}>
                        <h3 className="category-title">{section.category}</h3>

                        <div className="skills-grid">
                            {section.items.map((skill) => (
                                <div className="skill-pill" key={skill.name}>
                                    <span>{skill.name}</span>
                                    {skill.icon && <img src={skill.icon} alt={skill.name} className="skill-icon" />}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <a href={creatives_drivelink} target="_blank" rel="noopener noreferrer" className="portfolio-btn">
                    <i>View Creatives Portfolio Here</i>
                    <img src={chevron_icon} alt="Chevron Right" className="btn-icon" />
                </a>

            </div>
        </section>
    );
}