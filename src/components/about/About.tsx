import Meeting from "@/assets/meeting.jpg";

const About = () => {
  return (
    <>
      <div className="relative flex flex-col py-16 lg:flex-col lg:pt-0 lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 mx-auto w-full max-w-xl bg-black px-4 md:px-0 lg:absolute lg:mx-0 lg:mb-0 lg:w-7/12 lg:max-w-full lg:pr-0 xl:px-0">
          <svg
            className="absolute left-0 hidden h-full -translate-x-1/2 transform text-white lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="h-56 w-full rounded object-cover shadow-lg md:h-96 lg:h-full lg:rounded-none lg:shadow-none"
            src={Meeting}
            alt="About us meeting team"
          />
        </div>

        <div className="relative mx-auto mt-0 flex w-full max-w-xl flex-col  items-start px-4 pt-1 md:px-0 lg:max-w-screen-xl lg:px-8">
          <div className="mb-16  lg:my-40 lg:max-w-lg lg:pr-5">
            <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <span className="relative font-extrabold">About Us</span>
              </span>
            </h2>
            <p className="mb-5 pr-5 text-base text-gray-700 md:text-lg">
              <strong className="font-bold">369 Outsourcing Solutions</strong>{" "}
              is a premier contact center based in Cebu City, Philippines that
              specializes in delivering exceptional outsourcing services to
              Australian clients. Since our inception in 2022, we have
              established ourselves as a reliable provider of cost-effective
              solutions across a wide range of industries.
            </p>
            <p className="mb-5 pr-5 text-base text-gray-700 md:text-lg">
              Our unique approach sets us apart from other contact centers. We
              provide a diverse staffing model that empowers our team to work
              from home, while ensuring their productivity and efficiency. We
              are committed to being a reliable partner for our clients and
              contributing to the growth and success of their businesses.
            </p>
            <div className="flex items-center">
              <a
                href="/contact"
                className="bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline mr-6 inline-flex h-12 items-center justify-center rounded border px-6 font-medium tracking-wide text-blue-500 shadow-md transition duration-200 focus:outline-none"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
