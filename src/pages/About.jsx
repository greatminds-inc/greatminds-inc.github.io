import TeamCard from '../components/TeamCard';

import jm from "../assets/jm.jpg"
import mf from "../assets/mf.jpg"
import sp from "../assets/sp.jpeg"

const teamMembers = [
  {
    name: "Joaquin Molina",
    role: "TBD",
    description: "Senior Communications Software Business Executive with over 30 years of broad experience across all different BSS/OSS/VAS domains, and deep understanding of Communication Service Providers challenges in the execution of Digital Transformation strategies. Through the past fifteen years, has been fostering the development of Mobile Virtual Network Operators (MVNO), Private Networks, and IoT segments in the Americas and Europe.",
    image: jm,
    linkedinUrl: "https://www.linkedin.com/in/joaquinmolina/"
  },
  {
    name: "Mauricio Falck",
    role: "TBD",
    description: "Experienced technology executive with over 20 years in telecommunications, specializing in AI-driven solutions and sales strategy. Proven leader in managing high-performance teams and delivering innovative, customer-focused results.",
    image: mf,
    linkedinUrl: "https://www.linkedin.com/in/mauriciofalck/"
  },
  {
    name: "Sanjay Pandey",
    role: "TBD",
    description: "With over 25 years of business and technology leadership, I drive international business development and revenue growth at Dotlines as the Chief Business Officer. I have a proven track record of closing mega enterprise deals and managing transformative programs globally. My strengths lie in innovation, partnership, and leading high-performance teams.",
    image: sp,
    linkedinUrl: "https://www.linkedin.com/in/pandeysanjay/"
  }
];

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the minds behind Greatminds Inc. - a team of dedicated professionals
            committed to advancing AI adoption across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}