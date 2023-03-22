import Meeting from "@/assets/about-us.jpg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const About = () => {
  return (
    <>
      <section className="about-container mt-16">
        <StyledAbout className="container mx-auto px-6 py-12">
          <div className="container-con lg:-mx-6 lg:flex lg:items-start">
            <div className="py-10 lg:mx-6 lg:w-1/2">
              <h2 className="heading mb-4 font-sans text-5xl font-bold tracking-tight text-black sm:text-5xl sm:leading-none">
                About Us
              </h2>
              <p className="mb-4 pr-5 text-base text-white md:text-lg">
                369 Outsourcing Solutions is a premier contact center based in
                Cebu City, Philippines that specializes in delivering
                exceptional outsourcing services to Australian clients. Since
                our inception in 2022, we have established ourselves as a
                reliable provider of cost-effective solutions across a wide
                range of industries
                <br />
                <br />
                Our unique approach sets us apart from other contact centers. We
                provide a diverse staffing model that empowers our team to work
                from home, while ensuring their productivity and efficiency. We
                are committed to being a reliable partner for our clients and
                contributing to the growth and success of their businesses
              </p>

              <div className="mt-6 space-y-8 md:mt-8">
                <Link
                  to="/contact-us"
                  className="button mt-6 inline-flex w-60 items-center justify-center rounded-full bg-blue-500 py-3 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="mt-8 lg:mx-6 lg:w-1/2">
              <div>
                <img
                  className="h-screen w-full rounded-lg object-cover object-center shadow-md"
                  src={Meeting}
                  alt="a group of people meeting"
                />
              </div>
            </div>
          </div>
        </StyledAbout>
      </section>
    </>
  );
};

export default About;

const StyledAbout = styled.div`
  .about-container {
    background: rgb(255, 255, 254);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 254, 1) 0%,
      rgba(150, 147, 147, 1) 100%
    );

    h2.heading {
      color: black !important;
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
  .button {
    font-family: "DM Sans", sans-serif;
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.3);
    background: linear-gradient(135deg, #4682eb -20%, #01beff 120%);

    &:hover {
      background: #127bcb;
    }
  }
`;
