import "../styles/SchoolProfile.css"

const SchoolData = [

    {

        id: 1,
        title: "QPI",
        items: ["3.38"],
        isLarge: true

    },
    {

        id: 2,
        title: "Year",
        items: ["3rd"],
        isLarge: true

    },
    {

        id: 3,
        title: "Scholarships",
        items: ["DOST\nRA 7687", "Ateneo\nFinAid", "DataCamp"],
        isLarge: false

    },
    {

        id: 4,
        title: "Undergrad\nResearch",
        items: ["Data\nScience", "Advanced\nTime-Series\nModels"],
        isLarge: false

    },
]

export default function SchoolProfile() {

    return (

        <section className="school-panel" id='school'>

            <div className="school-banner">

                <div className="banner-accent-left"></div>
                <h2 className="banner-name">School Life</h2>
                <div className="banner-accent-right-group">
                    <div className="banner-accent-rose"></div>
                    <div className="banner-accent-lavender"></div>
                </div>

            </div>

            <div className="school-content">

                <div className="profile-grid">

                    {SchoolData.map((col) => (
                        <div className="profile-column" key={col.id}>
                            
                            <div className="column-header-container">
                                <div className="column-header">
                                    <h3>{col.title}</h3>
                                </div>
                            </div>

                        
                            <div className="column-content">
                                {col.items.map((item, index) => (
                                    <p
                                        key={index}
                                        className={`profile-item ${col.isLarge ? 'text-large' : 'text-normal'}`}
                                    >
                                        {item}
                                    </p>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>

            </div>

        </section>

    );
}