import heroImage from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-14">

          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Build Your Perfect{" "}
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Dev Stack
              </span>
            </h1>

            <p className="mt-5 text-gray-600 text-base sm:text-lg leading-7 max-w-xl mx-auto lg:mx-0">
              Explore modern development technologies and choose the tools
              that match your skills, projects, and development goals.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 mt-7">
              <button className="btn border-none text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600">
                Explore Technologies
              </button>

              <button className="btn btn-outline">
                Learn More
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={heroImage}
              alt="Development Stack"
              className="w-full max-w-md lg:max-w-xl object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;