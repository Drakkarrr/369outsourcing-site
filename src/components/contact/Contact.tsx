import styled from "styled-components";

const Contact = () => {
  return (
    <>
      <StyledContact>
        <section className="contact-container mt-16 dark:bg-gray-900">
          <div className="container mx-auto px-6 py-12">
            <div className="container-con lg:-mx-6 lg:flex lg:items-start">
              <div className="py-10 lg:mx-6 lg:w-1/2">
                <h2 className="heading mb-4 font-sans text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
                  Contact Us
                </h2>
                <p className="mb-4 pr-5 text-base text-white md:text-lg">
                  Collaborating with 369 Outsourcing Solutions can help
                  streamline your business operations and elevate your
                  productivity to new heights.
                  <br />
                  <br />
                  Get in touch with us today and explore how Offshore Business
                  Processing can not only help you achieve your business goals,
                  but also optimize your costs along the way. Let's start a
                  conversation and see how we can help your business thrive."
                </p>
                <div className="mt-6 space-y-8 md:mt-8">
                  <p className="-mx-2 flex items-start text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white-500 mx-2 h-6 w-6 dark:text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>

                    <span className="text-whit mx-2 w-72 truncate dark:text-gray-400">
                      +61 2 9189 4141
                    </span>
                  </p>

                  <p className="-mx-2 flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white-500 mx-2 h-6 w-6 dark:text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>

                    <span className="mx-2 w-full truncate text-white dark:text-gray-400">
                      info@369outsourcingsolutions.com
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-8 lg:mx-6 lg:w-1/2">
                <div className="mx-auto w-full overflow-hidden rounded-lg bg-white px-8 py-10 shadow-2xl shadow-gray-300/50 dark:bg-gray-900 dark:shadow-black/50 lg:max-w-xl">
                  <h1 className="text-lg font-medium text-gray-700">
                    Send us a message
                  </h1>

                  <form className="mt-6">
                    <div className="flex-1">
                      <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
                      />
                    </div>

                    <div className="mt-6 flex-1">
                      <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">
                        Email address
                      </label>
                      <input
                        type="email"
                        placeholder="johndoe@example.com"
                        className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
                      />
                    </div>

                    <div className="mt-6 w-full">
                      <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">
                        Message
                      </label>
                      <textarea
                        className="mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400 md:h-48"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <button className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-blue-500 py-3 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
                      Send message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </StyledContact>
    </>
  );
};

export default Contact;

const StyledContact = styled.div`
  .contact-container {
    background: linear-gradient(135deg, #4682eb -20%, #01beff 120%);

    h2.heading {
      color: #fffffe;
      font-family: "DM Sans", sans-serif;
    }
    .container-con {
      border-radius: 25px;
      padding: 1rem;
      box-shadow: 0 15px 15px rgba(0, 0, 0, 0.3);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(15px);
      background: rgba(255, 255, 255, 0.15);
    }
  }
`;
