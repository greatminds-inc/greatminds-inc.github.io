import './HeroSection.css'

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-b from-indigo-50 to-white overflow-hidden background-image">
      <div className="container mx-auto px-4 py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-10">
            Unlock the Full Potential of AI
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Empowering businesses through specialized AI services in consulting,
            implementation, and third-party solutions.
          </p>
        </div>
      </div>
    </div>
  );
}