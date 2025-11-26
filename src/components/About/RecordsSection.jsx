import { Target } from "lucide-react";

const RecordsSection = ({ title, records }) => {
    return (
        <section className="px-4 py-12 bg-gray-50">
            <h1 className="text-3xl lg:text-4xl text-center font-semibold mb-10">
                {title}
            </h1>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {records.map((item, i) => (
                    <div
                        key={i}
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
    );
};

export default RecordsSection;