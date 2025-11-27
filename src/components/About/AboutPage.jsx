import AboutHero from "./AboutHero";
import AboutDescription from "./AboutDescription";
import AllianceSection from "../AllianceSection";
import RecordsSection from "./RecordsSection";
import LeadershipCard from "./LeadershipCard";
import TeamGrid from "./TeamGrid";
import PartnersClientsSection from "./PartnersClientsSection";
import PartnerSection from "../PartnerSection";
import ClientSection from "../ClientSection";
import StatsSection from "../StatsSection";

import config from "../../config/index.json";

const AboutPage = () => {
  return (
    <main role="main" aria-labelledby="about-page-title" className="min-h-screen text-gray-900" >

      {/* SR-only PAGE TITLE for SEO structure */}
      <h1 id="about-page-title" className="sr-only">
        About HSR Financial – Company Profile, Team, Partners & Achievements
      </h1>

      <AboutHero
        title="Welcome to HSR Financial"
        subtitle="Empowering businesses with strategic financial expertise and global corporate solutions."
        background={config.aboutPage.hero.backgroundImage}
      />

      {/* Company Description */}
      <section
        aria-labelledby="about-description-heading"
        className="bg-white"
      >
        <h2 id="about-description-heading" className="sr-only">
          About HSR Financial – Company Overview
        </h2>

        <AboutDescription
          paragraphs={config.aboutPage.descriptionSection.paragraphs}
          quote={config.aboutPage.descriptionSection.quote}
        />
      </section>

      {/* Global Alliance Section */}
      <section
        aria-labelledby="alliance-heading"
        role="region"
      >
        <h2 id="alliance-heading" className="sr-only">
          Our Global Alliances & Partnerships
        </h2>

        <AllianceSection
          backgroundImage={config.aboutPage.allianceSection.backgroundImage}
          heading={config.aboutPage.allianceSection.heading}
          paragraphs={config.aboutPage.allianceSection.paragraphs}
        />
      </section>

      {/* Records / Why Choose Us */}
      <section
        aria-labelledby="why-choose-heading"
        className="bg-gray-50"
      >
        <h2 id="why-choose-heading" className="sr-only">
          Why Choose HSR Financial
        </h2>

        <RecordsSection
          title="Why Choose HSR Financial?"
          records={config.aboutPage.records}
        />
      </section>

      {/* Leadership & Team Section */}
      <section
        aria-labelledby="leadership-team-heading"
        className="px-4 py-12"
      >
        <h2
          id="leadership-team-heading"
          className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-6"
        >
          Our Leadership & Team
        </h2>

        <LeadershipCard
          image="/test.jpg"
          name="Lorenzo Jooris"
          designation="Group CEO, Creative Zone & Executive Leadership Team Member, Encor Group"
        />

        <TeamGrid
          team={config.aboutPage.teamData}
          placeholder="/test.jpg"
        />
      </section>

      {/* Partners & Clients */}
      <section
        aria-labelledby="partners-clients-heading"
        className="py-12"
      >
        <h2 id="partners-clients-heading" className="sr-only">
          Our Partners & Clients
        </h2>

        <PartnersClientsSection
          PartnerSection={PartnerSection}
          ClientSection={ClientSection}
        />
      </section>

      {/* Statistics & Achievements */}
      <StatsSection />

    </main>


  );
};

export default AboutPage;