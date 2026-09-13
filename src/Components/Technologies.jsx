import technologies from "../data/technologies.json";

const Technologies = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="text-gray-900">
              Explore the{" "}
            </span>

            <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
              Technologies
            </span>
          </h1>

          <p className="text-gray-600 text-lg">
            Pick one technology per category to build your stack
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((technology) => (
            <div
              key={technology.id}
              className="card bg-white border border-gray-200 shadow-sm"
            >
              <div className="card-body">

                <div className="flex justify-between items-start">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="w-12 h-12 object-contain"
                  />

                  <span className="badge badge-outline">
                    {technology.badge}
                  </span>
                </div>

                <h3 className="card-title mt-3">
                  {technology.name}
                </h3>

                <p className="text-sm text-gray-500 leading-6">
                  {technology.description}
                </p>

                <div className="flex justify-between items-center mt-3">
                  <span className="badge badge-ghost">
                    {technology.category}
                  </span>

                  <span className="text-sm">
                    ⭐ {technology.rating}
                  </span>
                </div>

                <p className="text-sm text-gray-500">
                  Difficulty:{" "}
                  <span className="font-medium text-gray-700">
                    {technology.difficulty}
                  </span>
                </p>

                <button className="btn btn-sm bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] text-white border-none mt-2">
                  Add to Stack
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Technologies;