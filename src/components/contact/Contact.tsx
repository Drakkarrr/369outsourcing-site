import HomeGraphicPage from "@/assets/HomePageGraphic.png";

const Contact = () => {
  return (
    <>
      <div className="relative flex flex-col-reverse py-16 lg:flex-col lg:pt-0 lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 mx-auto w-full max-w-xl px-4 md:px-0 lg:absolute lg:mx-0 lg:mb-0 lg:w-7/12 lg:max-w-full lg:pr-0 xl:px-0">
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
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
        <div className="relative mx-auto flex w-full max-w-xl flex-col items-start px-4 md:px-0 lg:max-w-screen-xl lg:px-8">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="bg-teal-accent-400 mb-4 inline-block rounded-full px-3 py-px text-xs font-semibold uppercase tracking-wider text-teal-900">
              Brand new
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Everything you
              <br className="hidden md:block" />
              can imagine{" "}
              <span className="text-deep-purple-accent-400 inline-block">
                is real
              </span>
            </h2>
            <p className="mb-5 pr-5 text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
            <div className="flex items-center">
              <a
                href="/"
                className="bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline mr-6 inline-flex h-12 items-center justify-center rounded px-6 font-medium tracking-wide text-slate-600 text-white shadow-md transition duration-200 focus:outline-none"
              >
                Get started
              </a>
              <a
                href="/"
                aria-label=""
                className="hover:text-deep-purple-accent-700 inline-flex items-center font-semibold text-gray-800 transition-colors duration-200"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
