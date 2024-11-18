import TeamCard from '../components/TeamCard';

const teamMembers = [
  {
    name: "Joaquin Molina",
    role: "TBD",
    description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Maecenas dictumst commodo sodales non nec scelerisque. Sem rutrum euismod iaculis erat egestas volutpat fames hac. Nibh commodo vel interdum in consequat tempus.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    linkedinUrl: "https://www.linkedin.com/in/joaquinmolina/"
  },
  {
    name: "Mauricio Falck",
    role: "TBD",
    description: "Experienced technology executive with over 20 years in telecommunications, specializing in AI-driven solutions and sales strategy. Proven leader in managing high-performance teams and delivering innovative, customer-focused results.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    linkedinUrl: "https://www.linkedin.com/in/mauriciofalck/"
  },
  {
    name: "Sanjay Pandey",
    role: "TBD",
    description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Maecenas dictumst commodo sodales non nec scelerisque. Sem rutrum euismod iaculis erat egestas volutpat fames hac. Nibh commodo vel interdum in consequat tempus.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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