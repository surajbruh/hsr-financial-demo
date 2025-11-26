const LeadershipCard = ({ image, name, designation }) => {
  return (
    <div className="bg-white shadow p-4 rounded-xl max-w-[220px] mx-auto mb-4">
      <div className="aspect-square overflow-hidden rounded-md">
        <img src={image} alt={name} className="object-cover w-full h-full" />
      </div>

      <h3 className="font-semibold text-center mt-3">{name}</h3>
      <p className="text-xs text-center text-gray-600 mt-1">{designation}</p>
    </div>
  );
};

export default LeadershipCard;