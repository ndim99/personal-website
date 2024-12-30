import ExperienceBox from "./ExperienceBox";

export default function Experience() {
  return (
    <section id="experience" className="sm:py-20 py-12 bg-secondary-bg">
      <div className="container mx-auto px-6 flex flex-col sm:gap-8 gap-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-400">
          Experience
        </h2>
        <div className="space-y-6">
          <ExperienceBox
            company="TokenSight"
            description="TokenSight is a decentralized trading platform supporting multiple
              blockchain ecosystems. As a front-end engineer, I was responsible
              for designing and implementing performant and intuitive user
              interfaces, leveraging React, Next.js, TypeScript, and web3
              technologies. My work focused on creating scalable solutions for
              complex trading workflows and delivering seamless user experiences
              while integrating the necessary tools to achieve platform
              functionality."
          />
          <ExperienceBox
            company="Ruby.Exchange"
            description="Ruby.Exchange is a decentralized trading platform built on the
            SKALE Network. I contributed to the development of a highly
            interactive and visually appealing interface, focusing on
            providing a smooth and efficient trading experience for crypto
            users. I utilized technologies such as React, Next.js, TypeScript,
            and blockchain-specific tools optimized for SKALE."
          />
        </div>
      </div>
    </section>
  );
}
