import SkillBox from "./SkillBox";

export default function Skills() {
  return (
    <section id="skills" className="sm:py-20 py-12 bg-primary-bg">
      <div className="container mx-auto px-6 flex flex-col sm:gap-8 gap-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-400">
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {/* Front-End Development */}

          <SkillBox
            title="Front-End Development"
            description="React, Next.js, TypeScript, JavaScript"
          />

          {/* Web3 Technologies */}

          <SkillBox
            title="Web3 Technologies"
            description="Integration with blockchain ecosystems, libraries for dApps
            functionality"
          />
          {/* Styling */}

          <SkillBox
            title="Styling"
            description="Tailwind CSS, CSS Modules, Responsive Design"
          />
          {/* API Development */}

          <SkillBox
            title="API Development"
            description="RESTful APIs, GraphQL, Data Fetching, SSR, CSR"
          />
          {/* Performance Optimization */}

          <SkillBox
            title="Performance Optimization"
            description="Code Splitting, Lazy Loading, State Management"
          />
          {/* Tools & Methodologies */}

          <SkillBox
            title="Tools & Methodologies"
            description="Git, Agile Development, Unit and Integration Testing, CI/CD"
          />
        </div>
      </div>
    </section>
  );
}
