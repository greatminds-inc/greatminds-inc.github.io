import { Linkedin } from 'lucide-react';

export default function TeamCard({ name, role, description, image, linkedinUrl }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
      <div className="aspect-w-3 aspect-h-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-indigo-600 font-medium mb-4">{role}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors"
        >
          <Linkedin className="h-5 w-5 mr-2" />
          Connect on LinkedIn
        </a>
      </div>
    </div>
  );
}