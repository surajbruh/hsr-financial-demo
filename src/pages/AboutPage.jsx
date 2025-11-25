import React from "react";
import config from "../config/index.json";
import { Target } from "lucide-react";
import ClientSection from "../components/ClientSection";
import PartnerSection from "../components/PartnerSection";
import StatsSection from "../components/StatsSection";
import AllianceSection from "../components/AllianceSection";


// ⭐ NEW — Dummy Record Data
const recordsData = [
  {
    title: "Proven Track Record",
    description:
      "Over 12,000+ companies successfully incorporated with complete guidance.",
  },
  {
    title: "End-to-End Support",
    description:
      "From trade license approval to residency visa assistance — we handle everything.",
  },
  {
    title: "Industry Expertise",
    description:
      "Our consultants bring decades of experience working with global markets.",
  },
  {
    title: "Client-Centric Approach",
    description:
      "Personalized strategies tailored to your business goals and long-term growth.",
  },
  {
    title: "Transparent Process",
    description:
      "No hidden fees. No unnecessary documentation. Just clarity and results.",
  },
];

const description = [
  "Creative Zone is the leading and most trusted business setup advisor in the Middle East, providing valuable support to aspiring entrepreneurs and SMEs since 2010.",
  "With an impressive track record of assisting over 75,000 businesses locally and internationally, Creative Zone has established itself as the one - stop shop for companies seeking business solutions.",
  "Our services cover every aspect of business setup, from seamless licensing processes to customized value - added solutions.With flexible payment plans and tailored services, we empower companies to promote, sustain and accelerate their operations."
]

const AboutPage = () => {
  const uploadedImg = "/test.jpg";

  return (
    <div className="min-h-screen text-gray-900">

      <header
        className="relative w-full h-[80vh] md:h-screen flex items-center"
        style={{
          backgroundImage: `url(/about.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[80vw] mx-auto px-6 md:px-10 lg:px-16">
          <h1
            className="text-white font-semibold uppercase tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-7xl ">
            Welcome to
            <br />
            <strong className="">
              HSR Financial
            </strong>
          </h1>

          {/* Optional Subtitle (Remove if not needed) */}
          <p
            className="text-white opacity-90 mt-6 text-sm sm:text-base md:text-lg max-w-xl"
          >
            Empowering businesses with strategic financial expertise and global corporate solutions.
          </p>
        </div>
      </header>

      {/* Description */}
      <section className="px-4 py-12">
        <div className="mx-auto lg:w-[60vw] space-y-6 text-base sm:text-lg md:text-xl">
          {description.map((item, index) => (
            <p key={index}>{item}</p>
          ))}

          <blockquote className="italic font-light text-lg md:text-3xl leading-snug">
            "We’ve helped startups become scale-ups, and guided SMEs into new
            markets—offering more than just trade licenses, but real
            partnerships that enable growth."
          </blockquote>
        </div>
      </section>

      {/* Alliance section */}
      <AllianceSection />

      {/* ⭐ Records Section */}
      <section className="px-4 py-12 bg-gray-50">
        <h1 className="text-3xl lg:text-4xl text-center font-semibold mb-10">Why Choose HSR financial?</h1>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recordsData.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-xl border hover:shadow-lg transition"
            >
              <Target size={50} className="text-(--accent-color) mb-4" />

              <h1 className="text-xl font-semibold mb-2">{item.title}</h1>
              <p className="text-sm text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ⭐ Management Section */}
      <section className="px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="capitalize text-4xl font-bold mb-2">
            meet our leadership{" "}
            <span className="text-(--accent-color)">team</span>
          </h1>
          <p className="text-gray-600">
            Our success is driven by a dedicated team of professionals committed
            to your business journey
          </p>
        </div>

        {/* CEO Highlight */}
        <div className="flex justify-center mb-12">
          <div className="bg-white shadow p-4 rounded-xl max-w-[220px]">
            <div className="aspect-square overflow-hidden rounded-md">
              <img
                src={uploadedImg}
                alt="CEO"
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="font-semibold text-center mt-3">Lorenzo Jooris</h3>
            <p className="text-xs text-center text-gray-600 mt-1">
              Group CEO, Creative Zone & Executive Leadership Team Member, Encor Group
            </p>
          </div>
        </div>

        {/* Team List */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {config.teamData.map((item, idx) => (
            <article
              key={idx}
              className="bg-white shadow-sm overflow-hidden rounded-xl p-4 text-center"
            >
              <div className="aspect-square overflow-hidden rounded-md">
                <img
                  src={uploadedImg}
                  alt={item.name}
                  className="object-cover w-full h-full"
                />
              </div>

              <h3 className="font-semibold mt-3 text-sm md:text-base">
                {item.name}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-tight mt-1">
                {item.designation}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* clients and partner section */}
      <div className="py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 space-y-12">
        <div>
          <h1
            className="capitalize font-semibold text-center text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8">
            some of our <span className="text-(--accent-color)">partners</span>
          </h1>
          <PartnerSection />
        </div>
        <div>
          <h1
            className="capitalize font-semibold text-center text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8">
            some of our <span className="text-(--accent-color)">clients</span>
          </h1>
          <ClientSection />
        </div>
      </div>


      {/* Stats Section */}
      <StatsSection />

    </div>
  );
};

export default AboutPage;
