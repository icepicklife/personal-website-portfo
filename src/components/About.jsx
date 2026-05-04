import '../styles/About.css'

import DisplayPicture from '../assets/images/resume-picture.png'
import resume_pdf from '../assets/Resume_Castillo_Hanzo_Ricardo.pdf'

import project_icon from '../assets/icons/chevron_down_icon.png'
import resume_icon from '../assets/icons/cloud_download_icon.png'

export default function About() {

    return (

        <section className='about-pane' id="about">

            <div className='about-banner'>

                <div className='banner-accent-left'></div>
                <h2 className='banner-name'>Hanzo Ricardo Castillo</h2>
                <div className='banner-accent-right'></div>

            </div>

            <div className='about-content'>

                <div className="about-statement">
                    <h3 className="statement-title">Personal Statement</h3>
                    <p className="statement-text">
                        A persevering, rational-thinking Computer Science student from Ateneo De Manila University, blessed with a  specialization in Enterprise Systems which aims to dive deep into the fields of programming, information and  project management, systems analysis, and web/app development. Equipped with experiences and skills via different projects relevant to the industry.
                    </p>
                </div>

                <div className='about-profile-card'>
                    <div className='profile-image-container'>
                        <img src={DisplayPicture} alt="Hanzo Ricardo Castillo" className='profile-image' />
                    </div>

                    <div className='pill main-pill'>BS CS | ADMU | 2027</div>

                    <div className='sub-pills-container'>
                        <span className='pill sub-pill'>He / Him</span>
                        <span className='pill sub-pill'>3rd Year</span>
                        <span className='pill sub-pill'>Specialization in Enterprise Systems</span>
                    </div>
                </div>
            </div>

            <div className='about-actions'>
                <a href="#projects" className='action-btn'>
                    <i>View Projects</i>
                    <img src={resume_icon} alt="Resume Icon" className="btn-icon" />
                </a>

                <a href={resume_pdf} className='action-btn'>
                    <i>Save Resume</i>
                    <img src={resume_icon} alt="Resume Icon" className='btn-icon' />
                </a>
            </div>

        </section>
    );
}