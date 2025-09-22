import React from 'react';

interface TalentProps {
    name: string;
    picture: string;
    currentRole: string;
    techStack: string[];
    rating: string | number;
}

const TalentCard: React.FC<TalentProps> = ({ name, picture, course, currentRole, techStack, rating }) => {
    return (
        <div className="talent-card">
            <img src={picture} alt={name} className="talent-picture" />
            <div className="talent-rating"> {rating}/5</div>
            <h3 className="talent-name">{name}</h3>
            <h6 className="talent-role"> {currentRole}</h6>
            <div className="talent-tech-stack">
                {techStack.map((tech, idx) => (
                    <span className="tech-stack-item" key={idx}>{tech}</span>
                ))}
            </div>

        </div>
    );
};

const TalentsSection: React.FC = () => {
    const talents: TalentProps[] = [
        {
            name: 'John Doe',
            picture: 'https://i.pinimg.com/736x/8d/95/03/8d9503a77e4c21ebf0ced6c252819a0e.jpg',
            currentRole: 'Software Engineer',
            techStack: ['React', 'Node.js', 'TypeScript'],
            rating: '⭐ 5',
        },
        {
            name: 'Jane Smith',
            picture: 'https://i.pinimg.com/736x/8a/62/b7/8a62b7b1dbf3da5fd23a19de696c5f97.jpg',
            currentRole: 'Data Scientist',
            techStack: ['Python', 'Machine Learning'],
            rating: '⭐ 4',
        },
        {
            name: 'Mike Johnson',
            picture: 'https://i.pinimg.com/1200x/3d/b6/bd/3db6bd6bd326236fa06cde742203961b.jpg',
            currentRole: 'Frontend Developer',
            techStack: ['HTML', 'CSS', 'JavaScript'],
            rating: '⭐ 3',
        },
        {
            name: 'Emily Davis',
            picture: 'https://i.pinimg.com/736x/ca/b1/8e/cab18e0810d98055fc3b79b921f39606.jpg',
            currentRole: 'UI/UX Designer',
            techStack: ['Figma', 'Adobe XD', 'Sketch'],
            rating: '⭐ 4',
        },
        {
            name: 'Chris Lee',
            picture: 'https://i.pinimg.com/1200x/98/0f/8e/980f8edaae405546073f9a735058a7df.jpg', 
            currentRole: 'Marketing',
            techStack: ['SEO', 'Google Analytics'],
            rating: '⭐ 4',
        },
        {
            name: 'Sara Wilson',
            picture: 'https://i.pinimg.com/736x/b7/ec/cf/b7eccf99f6ea2bd895690438d5421bf2.jpg',
            currentRole: 'Business Analyst',
            techStack: ['Excel', 'Tableau', 'Power BI'],
            rating: '⭐ 5',
        },
        {
            name: 'David Brown',
            picture: 'https://i.pinimg.com/736x/04/b1/33/04b1339c144c11129928e5aee672c0e7.jpg',
            currentRole: 'IT Support',
            techStack: ['Windows', 'Linux', 'Networking'],
            rating: '⭐ 4',
        },
        {
            name: 'Laura Martinez',
            picture: 'https://i.pinimg.com/1200x/2d/f1/b9/2df1b95f61fcbc20e9c97f4ddfa437ab.jpg',
            currentRole: 'Security Analyst',
            techStack: ['Ethical Hacking', 'Network Security'],
            rating: '⭐ 5',
        },
    ];

    return (
        <section className="talents-section">
            <h1>Discover the Emerging Masters</h1>
            <h5 className="section-subtitle">Find the best master for your company and boosts your business 10x.</h5>
            <div className="talents-grid">
                {talents.map((talent, index) => (
                    <TalentCard key={index} {...talent} />
                ))}
            </div>
            <button className="talent-contact-btn">View all</button>
        </section>
    );
};

export default TalentsSection;