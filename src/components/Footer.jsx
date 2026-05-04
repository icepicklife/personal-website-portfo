import '../styles/Footer.css'

export default function Footer() {

    return (

        <footer className='website-footer'>
            <div className="footer-brand">
                <h2>casti.hanz</h2>
            </div>

            <div className="footer-copyright">
                <p>
                    <span className="copy-name">Hanzo Ricardo Castillo, </span>
                    <span className="copy-year">&copy; {new Date().getFullYear()}.</span>
                </p>
            </div>
        </footer>

        
    );

}