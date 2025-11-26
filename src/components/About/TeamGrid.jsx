const TeamGrid = ({ team, placeholder }) => {
    return (
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {team.map((item, i) => (
                <article key={i} className="bg-white shadow-sm overflow-hidden rounded-xl p-4 text-center">
                    <div className="aspect-square overflow-hidden rounded-md">
                        <img src={placeholder} alt={item.name} className="object-cover w-full h-full" />
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
    );
};

export default TeamGrid;
