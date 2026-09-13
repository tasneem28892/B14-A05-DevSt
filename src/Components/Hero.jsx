import heroimage from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <div className="hero min-h-[420px] bg-white">
      <div className="hero-content w-full max-w-6xl flex-col-reverse md:flex-row justify-between gap-10 px-6">

        <div className="max-w-xl">
          <p className="text-sm text-gray-500 mb-3">
            Explore. Learn. Build.
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Build Your Ideal
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="py-5 text-sm text-gray-500 leading-6">
            Explore frontend, backend, database, and tooling options.
            Compare them side by side, and put together the stack that fits
            your next project.
          </p>

          <div className="flex gap-3">
            <button className="btn btn-sm border-none text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600">
              Explore Technologies
            </button>

            <button className="btn btn-sm btn-outline">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={heroimage}
             className="w-full max-w-md"
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;