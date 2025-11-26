import AboutHero from "./AboutHero";
import AboutDescription from "./AboutDescription";
import AllianceSection from "../AllianceSection"
import RecordsSection from "./RecordsSection";
import LeadershipCard from "./LeadershipCard";
import TeamGrid from "./TeamGrid";
import PartnersClientsSection from "./PartnersClientsSection";
import PartnerSection from "../PartnerSection"
import ClientSection from "../ClientSection"
import StatsSection from "../StatsSection"

import config from "../../config/index.json"

const AboutPage = () => {
  return (
    <div className="min-h-screen text-gray-900">

      <AboutHero
        title="Welcome to HSR Financial"
        subtitle="Empowering businesses with strategic financial expertise and global corporate solutions."
        background={config.aboutPage.hero.backgroundImage}
      />

      <AboutDescription
        paragraphs={config.aboutPage.descriptionSection.paragraphs}
        quote={config.aboutPage.descriptionSection.quote}
      />

      <AllianceSection
        backgroundImage={config.aboutPage.allianceSection.backgroundImage}
        heading={config.aboutPage.allianceSection.heading}
        paragraphs={config.aboutPage.allianceSection.paragraphs}
      />

      <RecordsSection title="Why Choose HSR Financial?" records={config.aboutPage.records} />

      <section className="px-4 py-12">
        <LeadershipCard
          image="/test.jpg"
          name="Lorenzo Jooris"
          designation="Group CEO, Creative Zone & Executive Leadership Team Member, Encor Group"
        />

        <TeamGrid team={config.teamData} placeholder="/test.jpg" />
      </section>

      <PartnersClientsSection
        PartnerSection={PartnerSection}
        ClientSection={ClientSection}
      />

      <StatsSection />

    </div>
  );
};

export default AboutPage