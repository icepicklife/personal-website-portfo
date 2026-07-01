import '../styles/Projects.css';
import circle_graphic from '../assets/graphics/project_title_bubble.png'

import BuyTheWay_preview from '../assets/images/buytheway_preview.png'
import Talab_preview from '../assets/images/talab_preview.png'
import Hobbysite_preview from '../assets/images/hobbysite_preview.png'
import Uaap_preview from '../assets/images/uaap_preview.png'
import Maze_preview from '../assets/images/mazegame_preview.png'
import TouchGrass_preview from '../assets/images/touchgrass_preview.png'

const MazeGame_github = "https://github.com/DyloreAquino/OTOTFinals"
const BuyTheWay_github = "https://github.com/lancedguzman/BuyTheWay"
const TouchGrass_github = "https://github.com/icepicklife/TouchGrass_FinalProject"
const UAAP_livelink = "https://uaap87-1.vercel.app/"
const talab_github = "https://github.com/icepicklife/talab-app-2025ver"
const hobbysite_github = "https://github.com/p41g3/hobbysite-E-10"

const projectsData = [

    {
        id: 1,
        title: "BuyTheWay",
        description: "Localized E-commerce platform that aims to centralize and secure the pasabuy experience among its possible international goods listings.",
        tech: ["HTML", "CSS", "JS", "Django"],
        date_released: "Apr 2026",
        roles_done: ["UX/UI", "Front-end", "Back-end"],
        img: BuyTheWay_preview,
        view_link: BuyTheWay_github
    },
    {
        id: 2,
        title: "TALAB 2025 Website",
        description: "Volunteered to be one of the developers in creating an enlistment platform for Ateneans to choose their talks and activities for TALAB in 2025.",
        tech: ["HTML", "CSS", "JS", "Django"],
        date_released: "Oct 2025",
        roles_done: ["UX/UI", "Front-end"],
        img: Talab_preview,
        view_link: talab_github
    },
    {
        id: 3,
        title: "Hobbysite",
        description: "Community-centric platform that allows users to post blogs, articles, comments and other forum-styled activities along with account creation.",
        tech: ["HTML", "CSS", "Django"],
        date_released: "May 2025",
        roles_done: ["UX/UI", "Front-end", "Back-end"],
        img: Hobbysite_preview,
        view_link: hobbysite_github
    },
    {
        id: 4,
        title: "UAAP 87 Blue Eagles Digital Primer",
        description: "Digital magazine of the in-depth overviews of each sport teams that will compete in the UAAP Season 87, covering the articles written by the school publication.",
        tech: ["HTML", "CSS", "React", "Figma"],
        date_released: "July 2024 & Jan 2025",
        roles_done: ["UX/UI", "Front-end"],
        img: Uaap_preview,
        view_link: UAAP_livelink
    },
    {
        id: 5,
        title: "Rock Paper Scissors Maze Game",
        description: "2D-Maze Game that integrates rock paper scissors with new mechanics integrated within a maze to collect what will they throw.",
        tech: ["Java", "Figma"],
        date_released: "May 2024",
        roles_done: ["Assets", "Game Logic"],
        img: Maze_preview,
        view_link: MazeGame_github
    },
    {
        id: 6,
        title: "Touch Grass",
        description: "Android app that allows users to post and share their touching grass moments alongside captions and comments about the experience.",
        tech: ["Android Studio", "Gradle", "Java", "Figma"],
        date_released: "July 2025",
        roles_done: ["Assets", "UX/UI", "Mobile Full-Stack"],
        img: TouchGrass_preview,
        view_link: TouchGrass_github
    }

];

export default function Projects() {

    return (

        <section className="projects-pane" id="projects">

            <div className="projects-banner">

                <div className="banner-accent-left"></div>
                <h2 className="banner-name">Projects</h2>
                <div className="banner-accent-right"></div>

            </div>

            <div className="projects-content">

                {projectsData.map((project, index) => (

                    <div className={`project-card ${index % 2 !== 0 ? 'reversed' : ''}`} key={project.id}>

                        <div className="project-image-container">
                            <img src={project.img} alt={project.title} className="project-image" />
                        </div>

                        <div className="project-info">

                            <div className="project-header">
                                <a
                                    href={project.view_link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='project-title-link'
                                >
                                    {project.title}
                                    <span className='title-link-icon'>🔗</span>
                                </a>
                                {/*
                                <h3 className="project-title">{project.title}</h3>
                                */}
                                <img src={circle_graphic} alt="" className="circles-icon" />
                            </div>

                            <div className='project-year-roles'>

                                {index % 2 !== 0 ? (

                                    <>
                                        {project.roles_done && project.roles_done.map((role) => (
                                            <span className="meta-pill role-pill" key={role}>
                                                {role}
                                            </span>
                                        ))}

                                        {project.date_released && <span className="meta-pill date-pill">{project.date_released}</span>}
                                    </>

                                ) : (
                                    
                                    <>
                                        {project.date_released && <span className="meta-pill date-pill">{project.date_released}</span>}
                                        {project.roles_done && project.roles_done.map((role) => (
                                            <span className="meta-pill role-pill" key={role}>{role}</span>
                                        ))}
                                    </>

                                )}

                            </div>

                            <p className="project-description">{project.description}</p>

                            <div className="project-tech">
                                {project.tech.map((techItem) => (
                                    <span className="tech-pill" key={techItem}>{techItem}</span>
                                ))}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}