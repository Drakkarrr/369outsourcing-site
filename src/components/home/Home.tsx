import useMediaQuery from "@/hooks/useMediaQuery";

import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";

const Home = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  return (
    <>
      <section className="gap-16 bg-gray-400 py-10 md:h-full md:pb-0">
        <div className="container-custom">
          <div
            className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
          >
            <img alt="home-pageGraphic" src={HomePageGraphic} />
          </div>

          <div>
            <h1>Heading test</h1>
            <h1>Heading test</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              odit mollitia quo aspernatur nihil cupiditate.
            </p>
          </div>
        </div>

        {isAboveMediumScreen && (
          <div className="bg-primary-100 h-[150px] w-full py-10">
            <div className="mx-auto w-5/6">
              <div className="flex w-3/5 items-center justify-between gap-8">
                <img alt="redbull-sponsor" src={SponsorRedBull} />
                <img alt="forbes-sponsor" src={SponsorForbes} />
                <img alt="fortune-sponsor" src={SponsorFortune} />
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Home;
