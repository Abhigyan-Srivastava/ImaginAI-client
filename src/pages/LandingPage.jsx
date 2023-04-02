import React from "react";
import { visionaryTechnology } from "../../public/assets";
import { features } from "../constants";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FiDownload, FiSearch, FiShare } from "react-icons/fi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { SiOpenai } from "react-icons/si";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaRobot } from 'react-icons/fa'
import _ from 'lodash';

import OG from '/assets/img/CRUL_OG.png';

const LandingPage = () => {
  const getIconComponent =(name) => {
    switch(name){
      case "FiDownload":
        return <FiDownload />;
      case "FiSearch" :
        return <FiSearch />;
      case "FiShare":
        return <FiShare/>;
      case "HiOutlineDesktopComputer":
        return <HiOutlineDesktopComputer />
      case "SiOpenai":
        return <SiOpenai />;
      case "BsLightningChargeFill":
        return <BsLightningChargeFill />;
      case "FaRobot":
        return <FaRobot />;
      default:
        return null;
    }
  }
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Generate AI Image using ImaginAI" />
        <title>ImaginAI</title>
        <meta name="theme-color" content="#0a192f" />
        <link rel="shortcut icon" href='/favicon.ico' sizes="any" />
        <link rel="manifest" href="/manifest.json" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="author" content="Emmanuel Omoiya"></meta>
        <meta name="robots" content="index,follow" />
        <meta
          name="keywords"
          content="AI Artificial Intelligence Emmanuel Omoiya Developer OpenAi DALL-E image generator Aniyikaye coding web-development server MERN mongodb expressjs reactjs"
        />

        {/* Og */}
        <meta property="og:title" content="Home - ImaginAI" />
        <meta
          property="og:description"
          content="Generate AI Image using ImaginAI"
        />
        <meta property="og:site_name" content="Home - ImaginAI" />
        <meta property="og:url" content="https://crul.vercel.app" key="ogurl" />
                <meta property="og:image" content={`https://crul.vercel.app/assets/img/CRUL_OG.png`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@Emmanuel_Omoiya" />
        <meta name="twitter:title" content="Home - CRUL" />
        <meta
          name="twitter:description"
          content="Generate AI Image using CRUL"
        />
        <meta name="twitter:image" content={OG} />
        <meta name="twitter:image:alt" content={`https://crul.vercel.app/assets/img/CRUL_OG.png`}></meta>
        <meta name="twitter:domain" content="https://crul.vercel.app" />
      </Helmet>
      <section className="w-full flex flex-col md:flex-row py-6 md:py-12 min-h-[70vh] items-center relative sm:px-20 px-6 font-poppins ">
        <div className="flex flex-col w-full md:w-6/12 relative">
          <p className="text-6xl md:text-7xl 2xl:text-8xl font-sora text-lightest_slate">
            Top Notch AI Image Generator
          </p>
          <p className="font-poppins text-slate text-[1.05rem] font-medium mt-7 ">
            Generate your AI Image with speed and style. With the use of{" "}
            <span className="font-poppins font-bold">ImaginAI</span> we'll help you
            turn your imagination to a reality.
          </p>
          <Link
            to="/create-image"
            className="border border-green bg-transparent w-[10.6rem] py-2.5 mt-8 px-4 font-medium rounded-md text-green text-[1.1rem] font-poppins hover:bg-[rgba(255,255,255,0.12)]"
          >
            <p className="w-auto">Generate Image</p>
          </Link>
        </div>
        <div className="flex w-full mt-16 md:mt-0 md:w-6/12 justify-center">
          <img
            src={visionaryTechnology}
            alt="ImaginAI"
            className="w-full sm:w-8/12 aspect-square select-none pointer-events-none"
            draggable="false"
          />
        </div>
      </section>
      <section className="py-12 font-poppins mt-10" id="features">
        <div className="max-w-7xl mx-auto font-poppins lg:px-8 sm:px-20 px-6">
          <div className="lg:text-center">
            <h2 className="text-base text-green_opaque font-semibold tracking-wide uppercase font-source_sans_pro">
              Popular Features
            </h2>
            <p className="mt-2 text-3xl leading-8 font-bold text-green sm:text-4xl font-poppins">
              We've got everything that you need !
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto font-poppins">
              Create imaginative and visually stunning images through ImaginAI
              and share them with the community
            </p>
          </div>
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature, index) => (
                <div className="relative" key={index}>
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md font-poppins hover:bg-[rgba(255,255,255,0.12)] cursor-pointer text-green border border-green">
                      <p className="text-green">{getIconComponent(_.upperFirst(feature.icon))}</p>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-green font-poppins">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500 font-poppins">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="sm:px-20 px-6 py-8">
        <div className="flex flex-col md:flex-row my-8 text-green_opaque mt-[4rem]">
          <div className="w-full md:w-6/12 flex flex-col justify-center items-center">
            <svg
              xmlns=""
              fill="currentColor"
              className="w-6/12"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </div>
          <div className="w-full md:w-6/12 flex flex-col justify-center my-6 md:my-0">
            <p className="text-3xl sm:text-4xl md:text-5xl font-medium font-sora">
              About ImaginAI
            </p>
            <p className="text-slate md:pr-10 my-6 md:text-lg 2xl:text-xl font-poppins">
              ImaginAI is a type of artificial intelligence system that is capable of creating new images based on a given set of inputs or parameters. These systems can be trained on a large dataset of images and can then generate new images that are similar in style or content to the images in the training dataset. Some examples of AI image generators include Generative Adversarial Networks (GANs), Variational Autoencoders (VAEs), and Transformer-based models. These systems have many potential uses such as creating new images for video games, movies, and advertising, as well as in research fields such as computer vision and generative art.
            </p>
            <a
              href=""
              className="flex justify-center font-poppins items-center p-3 px-6 w-max  border text-green hover:bg-[rgba(255,255,255,0.12)] font-semibold rounded-md shadow-lg  hover:scale-[1.02] ease-in-out duration-100 sm:scale-100 m-1.5"
              target="_self"
              rel="noopener noreferrer"
            >
              Try ImaginAI&nbsp;
              <svg
                xmlns=""
                fill="currentColor"
                className="w-4 h-4 mr-2"
                viewBox="0 0 16 16"
              >
                <path d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="sm:px-20 px-6" id="faqs">
        <div className="bg-lightblue py-20 px-4 text-zinc-500">
          <div className="mx-auto max-w-6xl flex flex-col md:flex-row">
            <h2 className="mr-8 w-full md:w-1/3 text-3xl font-bold leading-9 text-zinc-400 mb-10 md:mb-0 font-poppins">
              Why to use ImaginAI?🤔
            </h2>
            <dl className="w-full md:w-2/3">
              <dt className="mb-4">
                <h3 className="text-xl  font-poppins">
                  <ol>
                    <li>Creativity: ImaginAI can create unique and novel images that are difficult or impossible for humans to create.</li><br></br>
                    <li>Speed and Efficiency: ImaginAI can generate a large number of images in a relatively short amount of time compared to manual image creation.</li><br></br>
                    <li>Cost Savings: ImaginAI can save costs associated with hiring and training a team of designers or artists.</li><br></br>
                    <li>Customizability: ImaginAI can be fine-tuned to generate images that match specific criteria or requirements, making them highly customizable.</li><br></br>
                    <li>Consistency: ImaginAI can ensure consistent image quality and style across large volumes of images.</li><br></br>
                    <li>Accessibility: ImaginAI can democratize image creation by making it more accessible to people who may not have the skills or resources to create images manually.</li><br></br>
                    </ol>
                </h3>
              </dt>
            </dl>
          </div>
        </div>
      </section>

      {/* <section className="sm:px-20 px-6 py-8">
        <div className="flex flex-col md:flex-row my-8 text-green_opaque mt-[4rem]">
          <div className="w-full md:w-6/12 flex flex-col justify-center items-center">
            <svg
              // xmlns=""
              fill="currentColor"
              className="w-6/12"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </div>
          <div className="w-full md:w-6/12 flex flex-col justify-center my-6 md:my-0">
            <p className="text-3xl sm:text-4xl md:text-5xl font-medium font-sora">
              Turn your imaginations into creations🖼️
            </p>
            <p className="text-slate md:pr-10 my-6 md:text-lg 2xl:text-xl font-poppins">
              Let us print your creation! We use Artificial Intelligence to enhance your image to print quality, manually crop it to the aspect ratio of your chosen size (making sure to keep the subject in-frame), then print and deliver it to your door.
The prints are museum-quality, made on thick and durable matte paper. Add a wonderful accent to your room and office with these posters that are sure to brighten any environment.
            </p>
          </div>
        </div>
      </section> */}

      <section className="sm:px-20 px-6" id="faqs">
        <div className="bg-lightblue py-20 px-4 text-zinc-500">
          <div className="mx-auto max-w-6xl flex flex-col md:flex-row">
            <h2 className="mr-8 w-full md:w-1/3 text-3xl font-bold leading-9 text-zinc-400 mb-10 md:mb-0 font-poppins">
              ImaginAI FAQs🙋
            </h2>
            <dl className="w-full md:w-2/3">
              <dt className="mb-4">
                <h3 className="text-xl font-semibold font-poppins">
                  Does it cost money to use ImaginAI?
                </h3>
              </dt>
              <dd className="mb-10 lg:mb-16 font-poppins">
                <p className="font-poppins">
                  Nope! This is a completely free software!
                </p>
              </dd>
              <dt className="mb-4">
                <h3 className="text-xl font-semibold font-poppins">
                  Does ImaginAI have any unique features?
                </h3>
              </dt>
              <dd className="mb-10 lg:mb-16 font-poppins">
                <p className="font-poppins">
                  Yes! We have power tools not offered by any other AI Image Generator app. These include things like bulk creation, bulk download, custom seeds, etc.
                </p>
                </dd>
                <dt className="mb-4">
                <h3 className="text-xl font-semibold font-poppins">
                  On what platforms can ImaginAI work?
                </h3>
              </dt>
              <dd className="mb-10 lg:mb-16 font-poppins">
                <p className="font-poppins">
                  ImaginAI can work on the web, and can be installed to the home screen of your Desktop, iPhone, Android phone or Tablet.
                </p>
                </dd>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
