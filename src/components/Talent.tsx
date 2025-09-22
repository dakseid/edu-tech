import React from 'react';

interface TalentProps {
    name: string;
    picture: string;
    course: string;
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
            <p className="talent-course">Course: {course}</p>
            <p className="talent-role"> {currentRole}</p>
            <p className="talent-tech-stack"> {techStack.join(', ')}</p>
            <button className="view-profile-btn">View Profile</button>
        </div>
    );
};

const TalentsSection: React.FC = () => {
    const talents: TalentProps[] = [
        {
            name: 'John Doe',
            picture: 'https://i.pinimg.com/736x/8d/95/03/8d9503a77e4c21ebf0ced6c252819a0e.jpg',
            course: 'Computer Science',
            currentRole: 'Software Engineer',
            techStack: ['React', 'Node.js', 'TypeScript'],
            rating: '⭐ 5',
        },
        {
            name: 'Jane Smith',
            picture: 'https://i.pinimg.com/736x/8a/62/b7/8a62b7b1dbf3da5fd23a19de696c5f97.jpg',
            course: 'Data Science',
            currentRole: 'Data Scientist',
            techStack: ['Python', 'Machine Learning'],
            rating: '⭐ 4',
        },
        {
            name: 'Mike Johnson',
            picture: 'https://i.pinimg.com/1200x/3d/b6/bd/3db6bd6bd326236fa06cde742203961b.jpg',
            course: 'Web Development',
            currentRole: 'Frontend Developer',
            techStack: ['HTML', 'CSS', 'JavaScript'],
            rating: '⭐ 3',
        },
        {
            name: 'Emily Davis',
            picture: 'https://i.pinimg.com/736x/ca/b1/8e/cab18e0810d98055fc3b79b921f39606.jpg',
            course: 'Graphic Design',
            currentRole: 'UI/UX Designer',
            techStack: ['Figma', 'Adobe XD', 'Sketch'],
            rating: '⭐ 4',
        },
        {
            name: 'Chris Lee',
            picture: 'https://i.pinimg.com/1200x/98/0f/8e/980f8edaae405546073f9a735058a7df.jpg', 
            course: 'Digital Marketing',
            currentRole: 'Marketing',
            techStack: ['SEO', 'Google Analytics'],
            rating: '⭐ 4',
        },
        {
            name: 'Sara Wilson',
            picture: 'https://i.pinimg.com/736x/b7/ec/cf/b7eccf99f6ea2bd895690438d5421bf2.jpg',
            course: 'Business Administration',
            currentRole: 'Business Analyst',
            techStack: ['Excel', 'Tableau', 'Power BI'],
            rating: '⭐ 5',
        },
        {
            name: 'David Brown',
            picture: 'https://i.pinimg.com/736x/04/b1/33/04b1339c144c11129928e5aee672c0e7.jpg',
            course: 'Information Technology',
            currentRole: 'IT Support',
            techStack: ['Windows', 'Linux', 'Networking'],
            rating: '⭐ 4',
        },
        {
            name: 'Laura Martinez',
            picture: 'https://i.pinimg.com/736x/9a/7b/27/9a7b271264e5213ae9ded926b059f35e.jpg',
            course: 'Cybersecurity',
            currentRole: 'Security Analyst',
            techStack: ['Ethical Hacking', 'Network Security'],
            rating: '⭐ 5',
        },
    ];

    return (
        <section className="talents-section">
            <h2>Discover the Emerging Masters</h2>
            <p className="section-subtitle">Find the best master for your company and boosts your business 10x.</p>
            <div className="talents-grid">
                {talents.map((talent, index) => (
                    <TalentCard key={index} {...talent} />
                ))}
            </div>
        </section>
    );
};

export default TalentsSection;