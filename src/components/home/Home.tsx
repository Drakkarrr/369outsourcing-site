import Meeting from "@/assets/Home-us.jpg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <section className="Home-container mt-16">
        <StyledHome className="container mx-auto px-6 py-12">
          <div className="container-con lg:-mx-6 lg:flex lg:items-center">
            <div className="flex  flex-col py-10 lg:mx-6 lg:w-1/2">
              <h2 className="heading mb-4 text-center text-5xl font-bold tracking-tight text-black sm:text-5xl sm:leading-none lg:text-left">
                HOW CAN WE ADD VALUE TO YOUR BUSINESS
              </h2>
              <p className="mb-4 pr-5 text-base text-white md:text-lg">
                By entrusting repetitive tasks to our offshore teams, your local
                teams can dedicate their time and energy to more strategic
                endeavors. This approach enhances your business's productivity
                and profitability. Our carefully vetted and trained extended
                team seamlessly integrates with your distinctive business
                operations.
              </p>

              <div className="mt-2 space-y-8 lg:mt-6">
                <Link
                  to="/contact-us"
                  className="button inline-flex w-auto items-center justify-center rounded-full bg-blue-500 py-3 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="mt-8 lg:mx-6 lg:w-1/2">
              <div>
                <img
                  className="h-screen w-full rounded-lg object-cover object-center shadow-md"
                  src="https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="A group of hardworking people in a meeting"
                />
              </div>
            </div>
          </div>

          <div className="w-ful mt-20 grid lg:mx-20">
            <h3 className="heading mb-4 text-center text-4xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none">
              We provide a range of services, including:
            </h3>

            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-1">
              <p className="bg-glass hover:border-white-500/10 hover:shadow-white-500/10 block rounded-xl border border-gray-800 p-8 shadow-xl transition">
                <div className="flex items-center justify-start">
                  <svg
                    className="h-10 w-10 text-white"
                    fill="#fffffe"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 361.014 361.014"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <g id="Layer_5_47_">
                          <path d="M331.035,126.94H318.01c-3.563,0-3.682-2.333-3.805-3.494C307.375,59.094,252.77,8.791,186.637,8.791h-12.26 c-65.644,0-119.929,49.56-127.409,113.229c-0.191,1.631-0.291,4.92-3.291,4.92H29.978C20.987,126.94,0,136.401,0,184.18v25.075 c0,35.436,20.987,43.609,29.978,43.609h43.584c8.991,0,16.347-7.356,16.347-16.347v-93.23c0-8.991-7.356-16.347-16.347-16.347 c0,0-2.052-0.18-1.529-3.835c7.192-50.319,50.129-89.313,102.344-89.313h12.26c51.86,0,94.912,38.418,102.2,88.288 c0.235,1.608,1.111,4.86-1.385,4.86c-8.991,0-16.347,7.356-16.347,16.347v93.23c0,8.991,7.356,16.347,16.347,16.347h8.184 c2.25,0,1.868,1.798,1.667,2.704c-6.667,30.104-21.637,64.256-55.238,64.256h-24.889c-2.54,0-3.167-1.861-3.65-2.743 c-4.032-7.367-11.851-12.364-20.841-12.364h-22.933c-13.118,0-23.753,10.634-23.753,23.753c0,13.119,10.635,23.752,23.753,23.752 h22.933c9.112,0,17.023-5.132,21.005-12.662c0.348-0.658,0.633-2.026,3.321-2.026h25.054c22.823,0,53.365-11.341,69.259-65.373 c1.694-5.758,3.068-11.496,4.187-17.026c0.154-0.761,0.25-2.27,2.625-2.27h12.9c8.991,0,29.978-8.174,29.978-43.609v-25.075 C361.013,137.082,340.026,126.94,331.035,126.94z"></path>
                        </g>
                      </g>
                    </g>
                  </svg>

                  <h2 className="text-1xl mx-3 font-bold text-white lg:text-xl">
                    Freight Forwarding/Operations
                  </h2>
                </div>

                <p className="white-text mt-4 text-sm md:text-lg">
                  Out freight forwarding representatives will manage the daily
                  operations of the freight forwarding department, including
                  coordinating and overseeing the shipment of goods, ensuring
                  compliance with regulations and laws, communicating with
                  clients and partners, managing documentation, monitoring and
                  tracking shipments, managing other team members, and
                  continuously improving processes.
                </p>
              </p>

              <p className="bg-glass hover:border-white-500/10 hover:shadow-white-500/10 block rounded-xl border border-gray-800 p-8 shadow-xl transition">
                <div className="flex items-center justify-start">
                  <svg
                    className="h-10 w-10 text-white"
                    fill="#fffffe"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 361.014 361.014"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <g id="Layer_5_47_">
                          <path d="M331.035,126.94H318.01c-3.563,0-3.682-2.333-3.805-3.494C307.375,59.094,252.77,8.791,186.637,8.791h-12.26 c-65.644,0-119.929,49.56-127.409,113.229c-0.191,1.631-0.291,4.92-3.291,4.92H29.978C20.987,126.94,0,136.401,0,184.18v25.075 c0,35.436,20.987,43.609,29.978,43.609h43.584c8.991,0,16.347-7.356,16.347-16.347v-93.23c0-8.991-7.356-16.347-16.347-16.347 c0,0-2.052-0.18-1.529-3.835c7.192-50.319,50.129-89.313,102.344-89.313h12.26c51.86,0,94.912,38.418,102.2,88.288 c0.235,1.608,1.111,4.86-1.385,4.86c-8.991,0-16.347,7.356-16.347,16.347v93.23c0,8.991,7.356,16.347,16.347,16.347h8.184 c2.25,0,1.868,1.798,1.667,2.704c-6.667,30.104-21.637,64.256-55.238,64.256h-24.889c-2.54,0-3.167-1.861-3.65-2.743 c-4.032-7.367-11.851-12.364-20.841-12.364h-22.933c-13.118,0-23.753,10.634-23.753,23.753c0,13.119,10.635,23.752,23.753,23.752 h22.933c9.112,0,17.023-5.132,21.005-12.662c0.348-0.658,0.633-2.026,3.321-2.026h25.054c22.823,0,53.365-11.341,69.259-65.373 c1.694-5.758,3.068-11.496,4.187-17.026c0.154-0.761,0.25-2.27,2.625-2.27h12.9c8.991,0,29.978-8.174,29.978-43.609v-25.075 C361.013,137.082,340.026,126.94,331.035,126.94z"></path>
                        </g>
                      </g>
                    </g>
                  </svg>

                  <h2 className="text-1xl mx-3 font-bold text-white lg:text-xl">
                    Accounts Payables/Receivables
                  </h2>
                </div>

                <p className="white-text mt-4 text-sm md:text-lg">
                  Our team of experienced professionals is dedicated to managing
                  your accounts payables and receivables with the highest level
                  of expertise and attention to detail. Our services include
                  managing vendor and customer accounts, processing invoices,
                  reconciling accounts, and ensuring timely payments and
                  collections. We will communicate regularly with vendors and
                  customers, resolve any issues that may arise, and provide
                  detailed and accurate reporting to help you make informed
                  business decisions. Our team's focus on efficiency, accuracy,
                  and customer satisfaction will help streamline your financial
                  processes and improve your bottom line.
                </p>
              </p>
            </div>
          </div>
        </StyledHome>
      </section>
    </>
  );
};

export default Home;

const StyledHome = styled.div`
  p.white-text {
    color: white !important;
    font-weight: 200;
  }
  .Home-container {
    background: rgb(255, 255, 254);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 254, 1) 0%,
      rgba(150, 147, 147, 1) 100%
    );

    h2.heading {
      color: black !important;
      text-transform: capitalize;
      font-family: "Poppins", sans-serif !important;
    }

    .container-con {
      border-radius: 25px;
      padding: 1rem;
      box-shadow: 0 15px 15px rgba(0, 0, 0, 0.3);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(15px);
      background: linear-gradient(135deg, #4682eb -20%, #01beff 120%);
    }
  }
  .bg-glass {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.3);
    outline: none;
    background: rgb(255, 255, 254);
    background: linear-gradient(135deg, #4682eb -20%, #01beff 120%);
  }
  .button {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.3);
    background: linear-gradient(135deg, #4682eb -20%, #01beff 120%);

    &:hover {
      background: #127bcb;
    }
  }
`;
