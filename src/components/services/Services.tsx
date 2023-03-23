import React from "react";
import styled from "styled-components";

const Services: React.FC = () => {
  return (
    <>
      <StyledServices>
        <section className="services pt-[110px] text-white">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
            <div className="mx-auto max-w-lg lg:text-center">
              <h2 className="heading text-center text-5xl font-bold sm:text-5xl">
                Our Services
              </h2>

              <p className="subhead mt-4 text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Facilis est voluptatibus ea impedit quod esse, modi, sapiente,
                consequuntur enim at ducimus cupiditate porro deserunt? Veniam
                magni obcaecati ea iste quasi eaque aperiam, et temporibus
                dignissimos quidem sunt velit, porro dolore ipsa quos reiciendis
                ipsam eius! Fugit corporis molestias consectetur neque
                dignissimos tempore recusandae error ullam! Dolores fuga quaerat
                porro nobis.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
              <a
                className="bg-glass hover:border-white-500/10 hover:shadow-white-500/10 block rounded-xl border border-gray-800 p-8 shadow-xl transition"
                href="/services/digital-campaigns"
              >
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

                <h2 className="mt-4 text-xl font-bold text-white">
                  Customer Service
                </h2>

                <p className="mt-1 text-sm text-white">
                  Providing assistance and support to customers via phone,
                  email, or chat
                </p>
              </a>

              <a
                className="bg-glass hover:border-white-500/10 hover:shadow-white-500/10 block rounded-xl border border-gray-800 p-8 shadow-xl transition"
                href="/services/digital-campaigns"
              >
                <svg
                  fill="#fffffe"
                  className="h-10 w-10 text-white"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 477.655 477.655"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <path d="M440.367,440.415l-10.173-29.91c-19.102-56.262-70.83-94.605-129.763-97.121c-5.187,4.03-10.655,7.493-16.322,10.521 c-8.449,22.185-36.836,28.195-53.468,11.205c-19.676-1.738-37.69-9.511-53.422-21.725c-58.933,2.508-110.647,40.851-129.763,97.121 L37.3,440.415c-2.936,8.603-1.522,18.084,3.774,25.469c5.279,7.391,13.821,11.771,22.906,11.771h349.693 c9.083,0,17.626-4.379,22.906-11.771C441.873,458.499,443.286,449.018,440.367,440.415z"></path>
                      <path d="M277.758,290.619c34.212-24.047,58.141-77.151,58.141-128.491c0-145.907-194.133-145.752-194.133,0 c0,62.397,35.33,127.303,81.546,139.556c4.456-12.626,16.382-21.757,30.515-21.757C263.331,279.926,271.81,284.095,277.758,290.619 z"></path>
                      <path d="M99.169,223.042c4.813,18.906,31.044,13.704,31.044-3.805c0-70.178,3.354-76.731-6.041-84.348 C145.679,2.361,330.946,3.355,353.495,134.904c-9.381,7.641-6.025,14.163-6.025,84.333c0,5.489,2.95,10.095,7.189,12.952 c0,54.594-22.145,51.402-88.736,69.052c-10.295-11.174-28.683-3.899-28.683,11.173c0,18.876,27.053,23.293,32.302,4.318 c53.762-14.256,101.018-18.752,101.018-72.484v-11.027c3.991-2.066,6.817-5.729,7.951-10.179c51.822-1.056,51.838-78.719,0-79.775 c-1.072-4.24-3.711-7.703-7.423-9.815c1.336-15.902-1.94-36.805-11.057-56.985C296.626-54.368,109.355-3.176,106.422,123.622 c-0.404,4.294-0.078,7.338,0.17,9.83c-3.712,2.112-6.351,5.575-7.423,9.815c-21.71,0.419-39.212,18.084-39.212,39.888 C59.957,204.958,77.459,222.622,99.169,223.042z"></path>
                    </g>
                  </g>
                </svg>

                <h2 className="mt-4 text-xl font-bold text-white">
                  Technical support
                </h2>

                <p className="mt-1 text-sm text-white">
                  Helping customers troubleshoot technical issues with products
                  or services
                </p>
              </a>

              <a
                className="bg-glass hover:border-white-500/10 hover:shadow-white-500/10 block rounded-xl border border-gray-800 p-8 shadow-xl transition"
                href="/services/digital-campaigns"
              >
                <svg
                  className="h-10 w-10"
                  fill="#fffffe"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 190"
                  enable-background="new 0 0 256 190"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M48.12,27.903C48.12,13.564,59.592,2,74.023,2c14.339,0,25.903,11.564,25.903,25.903 C99.834,42.335,88.27,53.806,74.023,53.806C59.684,53.806,48.12,42.242,48.12,27.903z M191,139h-47V97c0-20.461-17.881-37-38-37H43 C20.912,60,1.99,79.14,2,98v77c-0.026,8.533,6.001,12.989,12,13c6.014,0.011,12-4.445,12-13v-75h8v88h78v-88h8l0.081,50.37 c-0.053,8.729,5.342,12.446,10.919,12.63h60C207.363,163,207.363,139,191,139z M245.044,120.005V46.524h-14.788v73.482h-4.957V62.77 h-14.788v57.236h-4.999V90.721h-14.788v29.284h-4.957v-14.913h-14.788v14.913h-8.373v-79.73H157v85.449h97v-5.606v-0.113H245.044z"></path>
                  </g>
                </svg>

                <h2 className="mt-4 text-xl font-bold text-white">
                  Sales and marketing
                </h2>

                <p className="mt-1 text-sm text-white">
                  Promoting and selling products or services to potential
                  customers
                </p>
              </a>

              <a
                className="bg-glass hover:border-white-500/10 hover:shadow-white-500/10 block rounded-xl border border-gray-800 p-8 shadow-xl transition"
                href="/services/digital-campaigns"
              >
                <svg
                  className="h-10 w-10"
                  fill="#fffffe"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 236 256"
                  enable-background="new 0 0 236 256"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M117.5,2c-12.47,0-22.63,10.16-22.63,22.63c0,12.46,10.06,22.62,22.63,22.62c12.37,0,22.62-10.16,22.62-22.62 C140.12,12.16,129.97,2,117.5,2z M146,52H89c-15.59,0-28,13.41-28,29v32h20V86c0-1.71,1.29-3,3-3s3,1.29,3,3v27h61V86 c0-1.71,1.29-3,3-3s3,1.29,3,3v27h20V81C174,65.51,161.49,52,146,52z M2,118v27h23v109h185V145h24v-27H2z M117.93,235.35 c-25.59,0-46.36-20.77-46.36-46.36c0-25.73,20.63-46.64,46.36-46.64s46.5,20.77,46.5,46.5S143.52,235.35,117.93,235.35z M122.43,184.31c-6.42-2.61-9.41-3.85-9.41-7.06c0-2.34,2.57-4.68,7.3-4.68c4.72,0,8.16,1.47,10.27,2.34l2.61-9.17 c-2.84-1.52-6.69-2.62-12.01-2.62v-7.29h-6.42v7.66c-8.58,1.74-13.26,7.29-13.26,14.35c0,7.66,5.32,11.97,13.85,14.95 c6.15,2.39,8.67,3.72,8.67,6.93c0,3.21-2.61,5.55-7.93,5.55c-4.96,0-9.63-1.75-12.61-3.21l-2.34,9.4c2.7,1.51,8.3,2.98,13.85,2.98 v7.06h6.42v-7.29c9.4-2.11,13.85-7.66,13.85-14.95C135.27,191.97,131.18,187.52,122.43,184.31z"></path>
                  </g>
                </svg>

                <h2 className="mt-4 text-xl font-bold text-white">
                  Finance and accounting
                </h2>

                <p className="mt-1 text-sm text-white">
                  managing financial transactions and accounting processes for
                  client companies
                </p>
              </a>
            </div>
          </div>
        </section>
      </StyledServices>
    </>
  );
};

export default Services;

const StyledServices = styled.div`
  letter-spacing: normal;
  .services {
    h2.heading {
      color: black;
      letter-spacing: normal;
    }
    p.subhead {
      color: black !important;
    }
    p {
      color: #fffffe !important;
    }
    .started a {
      color: #fffffe;
      border-radius: 55px;
      box-shadow: 0 15px 15px rgba(0, 0, 0, 0.3);
      font-weight: bold;
      background: linear-gradient(135deg, #4682eb -20%, #01beff 120%);
    }

    .bg-glass {
      box-shadow: 0 15px 15px rgba(0, 0, 0, 0.3);
      outline: none;
      background: rgb(255, 255, 254);
      background: linear-gradient(135deg, #4682eb -20%, #01beff 120%);
    }
  }
`;
