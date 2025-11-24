import React from "react";
import config from "../config/index.json";
import { Target } from "lucide-react";

const data = [
  { value: "12", label: "Years of Excellence" },
  { value: "40", label: "Global Awards" },
  { value: "120,000", label: "Active Clients" },
  { value: "220", label: "Skilled Professionals" },
  { value: "32", label: "Countries Served" },
  { value: "98%", label: "Service Success Rate" },
];

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

const AboutPage = () => {
  const uploadedImg = "/test.jpg";

  return (
    <div className="min-h-screen text-gray-900">

      {/* Banner */}
      <header
        className="relative md:h-screen h-[80vh] w-full"
        style={{
          backgroundImage: `url(${uploadedImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white uppercase font-semibold text-2xl md:text-3xl lg:text-4xl">
            current page
          </h1>
        </div>
      </header>

      {/* Description */}
      <section className="px-4 py-12">
        <div className="mx-auto lg:w-[60vw] space-y-4">
          <blockquote className="italic font-light text-lg md:text-2xl leading-snug">
            "We’ve helped startups become scale-ups, and guided SMEs into new
            markets—offering more than just trade licenses, but real
            partnerships that enable growth."
          </blockquote>
        </div>
      </section>

      {/* ⭐ Records Section */}
      <section className="px-4 py-12 bg-gray-50">
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

      {/* Stats Section */}
      <section className="relative py-16 bg-[url(/meeting.jpg)] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-white text-center">
            {data.map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  {item.value}
                </div>
                <div className="mt-2 text-sm md:text-base">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
