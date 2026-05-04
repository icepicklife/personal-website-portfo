import '../styles/Organizations.css';

const OrgsList = [
  {
    id: 1,
    role: "Creatives Deputy",
    org: "Computer Society of The Ateneo (CompSAt)",
    desc: "Associate assistant that creates digital creative works and guides assigned project designers alongside department AVPs to produce quality promotional materials for technological events.",
    date: "Sept 2023 - May 2026",
    color: "#d0d2f0" 
  },
  {
    id: 2,
    role: "Digital Development Staffer",
    org: "The GUIDON",
    desc: "Website interactives developer assigned to create multiple layouts and UX/UI Interfaces to output interactive and enticing web articles for the pursuit of making certain journalistic issues relevant. Includes front-end and quick overview of deployment",
    date: "July 2024 - June 2025",
    color: "#986c6a" 
  }
];

export default function Organizations() {
  return (
    <section className="orgs-pane" id="organizations">
      
      
      <div className="orgs-banner">
        <div className="banner-accent-left"></div>
        <h2 className="banner-name">Organizations</h2>
        <div className="banner-accent-right"></div>
      </div>

      <div className="orgs-content">
        <div className="org-timeline">
          
          {OrgsList.map((item, index) => (
            <div className="timeline-item" key={item.id}>
              
              
              <div className="timeline-graphics">
                
                <div className="timeline-circle" style={{ borderColor: item.color }}>
                  <div className="inner-circle" style={{ backgroundColor: item.color }}></div>
                </div>
                
                
                {index !== OrgsList.length - 1 && (
                  <div className="timeline-line"></div>
                )}
              </div>

              
              <div className="timeline-info">
                <h3 className="org-role">{item.role}</h3>
                <h4 className="org-name">{item.org}</h4>
                <p className="org-desc">{item.desc}</p>
                <div className="org-date">
                  <i>{item.date}</i>
                </div>
              </div>
              
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}