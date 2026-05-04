import "../styles/Contact.css"

import email_icon from '../assets/icons/email-contact-icon.svg'
import github_icon from '../assets/icons/github-contact-icon.svg'
import linkedin_icon from '../assets/icons/linkedin-contact-icon.svg'

const contactDetails = [

    {
        id: 1,
        icon: email_icon,
        text: "castihanz@gmail.com",
        url: "mailto:castihanz@gmail.com"
    },
    {
        id: 2,
        icon: github_icon,
        text: "icepicklife",
        url: "https://github.com/icepicklife"
    },
    {
        id: 3,
        icon: linkedin_icon,
        text: "hanzcasti",
        url: "https://linkedin.com/in/hanzcasti"
    }

];

export default function Contact() {

    return (

        <section className="contact-panel" id='contact'>

            <div className="contact-banner">
                <div className="banner-accent-left"></div>
                <h2 className="banner-name">Contact Me!</h2>
                <div className="banner-accent-right"></div>
            </div>

            <div className="contact-content">
                <p className="contact-intro">
                    I am currently looking for internships! Kindly reach me through these platform and hope you
                    consider me into your business endeavors as we connect and collaborate soon :))
                </p>

                <div className="contact-list">
                    {contactDetails.map((link) => (
                        <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-item"
                            key={link.id}
                        >
                            <div className="icon-container">
                                <img src={link.icon} alt={link.text} className="contact-icon" />
                            </div>

                            <div className="contact-separator"></div>

                            <span className="contact-text">{link.text}</span>
                        </a>
                    ))}
                </div>
            </div>


        </section>
    );
}