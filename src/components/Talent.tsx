import React from 'react';

interface TalentProps {
    name: string;
    picture: string;
    course: string;
    currentRole: string;
    techStack: string[];
    rating: number;
}

const TalentCard: React.FC<TalentProps> = ({ name, picture, course, currentRole, techStack, rating }) => {
    return (
        <div className="talent-card">
            <img src={picture} alt={name} className="talent-picture" />
            <h3>{name}</h3>
            <p>Course: {course}</p>
            <p>Current Role: {currentRole}</p>
            <p>Tech Stack: {techStack.join(', ')}</p>
            <div className="rating">Rating: {rating}/5</div>
        </div>
    );
};

const TalentsSection: React.FC = () => {
    const talents: TalentProps[] = [
        {
            name: 'John Doe',
            picture: 'https://via.placeholder.com/150',
            course: 'Computer Science',
            currentRole: 'Software Engineer',
            techStack: ['React', 'Node.js', 'TypeScript'],
            rating: 5,
        },
        {
            name: 'Jane Smith',
            picture: 'https://via.placeholder.com/150',
            course: 'Data Science',
            currentRole: 'Data Scientist',
            techStack: ['Python', 'Machine Learning', 'TensorFlow'],
            rating: 4,
        },
        {
            name: 'Mike Johnson',
            picture: 'https://via.placeholder.com/150',
            course: 'Web Development',
            currentRole: 'Frontend Developer',
            techStack: ['HTML', 'CSS', 'JavaScript'],
            rating: 3,
        },
        {
            name: 'Emily Davis',
            picture: 'https://via.placeholder.com/150',
            course: 'Graphic Design',
            currentRole: 'UI/UX Designer',
            techStack: ['Figma', 'Adobe XD', 'Sketch'],
            rating: 4,
        },
        {
            name: 'Chris Lee',
            picture: 'https://via.placeholder.com/150', 
            course: 'Digital Marketing',
            currentRole: 'Marketing Specialist',
            techStack: ['SEO', 'Google Analytics', 'Social Media'],
            rating: 4,
        },
        {
            name: 'Sara Wilson',
            picture: 'https://via.placeholder.com/150',
            course: 'Business Administration',
            currentRole: 'Business Analyst',
            techStack: ['Excel', 'Tableau', 'Power BI'],
            rating: 5,
        },
        
    ];

    return (
        <section className="talents-section">
            <h2>Our Top Talents</h2>
            <div className="talents-grid">
                {talents.map((talent, index) => (
                    <TalentCard key={index} {...talent} />
                ))}
            </div>
        </section>
    );
};

export default TalentsSection;