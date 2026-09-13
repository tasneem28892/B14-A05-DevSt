import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import technologiesData from "../data/technologies.json";

const Technologies = () => {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setTechnologies(technologiesData);
      setLoading(false);
    }, 500);
  }, []);

  const handleAddToStack = (technology) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setSelectedTechnologies([
      ...selectedTechnologies,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemove = (id) => {
    const technology = selectedTechnologies.find(
      (item) => item.id === id
    );

    const remainingTechnologies = selectedTechnologies.filter(
      (item) => item.id !== id
    );

    setSelectedTechnologies(remainingTechnologies);

    toast.info(`${technology.name} removed from your stack!`);
  };

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
    toast.info("All technologies removed from your stack!");
  };

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            <span className="text-gray-900">
              Explore the{" "}
            </span>

            <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
              Technologies
            </span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg">
            Pick one technology per category to build your stack
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20 sm:py-24">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">

            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">

                {technologies.map((technology) => (
                  <div
                    key={technology.id}
                    className="card bg-white border border-gray-200 shadow-md"
                  >
                    <div className="card-body p-5 sm:p-6">

                      <div className="flex justify-between items-start gap-3">
                        <img
                          src={technology.icon}
                          alt={technology.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                        />

                        <span className="badge badge-outline text-xs sm:text-sm">
                          {technology.badge}
                        </span>
                      </div>

                      <h3 className="card-title mt-3 text-lg sm:text-xl">
                        {technology.name}
                      </h3>

                      <p className="text-sm text-gray-500 leading-6">
                        {technology.description}
                      </p>

                      <div className="flex flex-wrap justify-between items-center gap-2 mt-3">
                        <span className="badge badge-ghost text-xs sm:text-sm">
                          {technology.category}
                        </span>

                        <span className="text-sm whitespace-nowrap">
                          ⭐ {technology.rating}
                        </span>
                      </div>

                      <p className="text-sm text-gray-500">
                        Difficulty:{" "}
                        <span className="font-medium text-gray-700">
                          {technology.difficulty}
                        </span>
                      </p>

                      <button
                        onClick={() => handleAddToStack(technology)}
                        disabled={selectedTechnologies.some(
                          (item) => item.id === technology.id
                        )}
                        className={`btn btn-sm mt-2 border-none w-full ${
                          selectedTechnologies.some(
                            (item) => item.id === technology.id
                          )
                            ? "bg-gray-300 text-gray-600"
                            : "bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] text-white"
                        }`}
                      >
                        {selectedTechnologies.some(
                          (item) => item.id === technology.id
                        )
                          ? "✓ Added to Stack"
                          : "Add to Stack"}
                      </button>

                    </div>
                  </div>
                ))}

              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="card bg-white border border-gray-200 shadow-md lg:sticky lg:top-24">

                <div className="card-body p-5 sm:p-6">

                  <div className="flex justify-between items-center gap-3">
                    <h2 className="card-title text-lg sm:text-xl">
                      Your Stack
                    </h2>

                    <span className="badge bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] text-white border-none">
                      {selectedTechnologies.length}
                    </span>
                  </div>

                  <p className="text-sm text-gray-500">
                    {selectedTechnologies.length} Technology Selected
                  </p>

                  {selectedTechnologies.length === 0 ? (
                    <div className="text-center py-8 sm:py-10">
                      <p className="text-gray-400 text-sm">
                        Your stack is empty.
                      </p>

                      <p className="text-gray-400 text-sm mt-1">
                        Add technologies to build your stack.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3 mt-4">

                      {selectedTechnologies.map((technology) => (
                        <div
                          key={technology.id}
                          className="flex items-center justify-between gap-3 border border-gray-200 rounded-lg p-3"
                        >

                          <div className="flex items-center gap-3 min-w-0">
                            <img
                              src={technology.icon}
                              alt={technology.name}
                              className="w-8 h-8 object-contain shrink-0"
                            />

                            <div className="min-w-0">
                              <h3 className="font-medium text-sm truncate">
                                {technology.name}
                              </h3>

                              <p className="text-xs text-gray-500">
                                {technology.category}
                              </p>
                            </div>
                          </div>

                          <button
                            onClick={() => handleRemove(technology.id)}
                            className="btn btn-xs btn-circle btn-ghost shrink-0"
                          >
                            ✕
                          </button>

                        </div>
                      ))}

                      <button
                        onClick={handleRemoveAll}
                        className="btn btn-sm btn-outline w-full mt-3"
                      >
                        Remove All
                      </button>

                    </div>
                  )}

                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default Technologies;