import { useState } from "react";
import technologies from "../data/technologies.json";

const Technologies = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);

  const handleAddToStack = (technology) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      return;
    }

    setSelectedTechnologies([
      ...selectedTechnologies,
      technology,
    ]);
  };

  const handleRemove = (id) => {
    const remainingTechnologies = selectedTechnologies.filter(
      (item) => item.id !== id
    );

    setSelectedTechnologies(remainingTechnologies);
  };

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

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

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

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

                    <button
                      onClick={() => handleAddToStack(technology)}
                      disabled={selectedTechnologies.some(
                        (item) => item.id === technology.id
                      )}
                      className={`btn btn-sm mt-2 border-none ${
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
            <div className="card bg-white border border-gray-200 shadow-sm sticky top-24">

              <div className="card-body">

                <div className="flex justify-between items-center">
                  <h2 className="card-title">
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
                  <div className="text-center py-10">
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
                        className="flex items-center justify-between border border-gray-200 rounded-lg p-3"
                      >

                        <div className="flex items-center gap-3">
                          <img
                            src={technology.icon}
                            alt={technology.name}
                            className="w-8 h-8 object-contain"
                          />

                          <div>
                            <h3 className="font-medium text-sm">
                              {technology.name}
                            </h3>

                            <p className="text-xs text-gray-500">
                              {technology.category}
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={() => handleRemove(technology.id)}
                          className="btn btn-xs btn-circle btn-ghost"
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

      </div>
    </section>
  );
};

export default Technologies;