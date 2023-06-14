import Image from 'next/image'
import { LinkButton } from "./components/LinkButton";
import { MdOutlineMail, MdPhone } from "react-icons/md";

export default function Home() {
  return (
    <>
      <div className="container desktop:mx-auto flex phone:flex-col laptop:flex-row-reverse tablet:items-center laptop:justify-between phone:py-8 text-start tablet:text-center z-40 ">
        <Image
          src="https://dummyimage.com/720x600"
          height={500}
          width={500}
          alt="hero"
        />
        <div className="flex flex-col items-center space-y-4 laptop:items-start phone:p-4 laptop:space-y-8">
          <h1 className="phone:text-xl tablet:text-2xl laptop:text-4xl desktop:text-6xl font-bold">
            HeatSmart Solutions
          </h1>
          <p className="w-11/12 tablet:w-full phone:text-base tablet:text-lg desktop:text-xl laptop:text-start font-light">
            Unleash the Power of Heat - Your Perfect Pathway, Every Winter
          </p>
          <div className="flex flex-row justify-normal items-center">
            <LinkButton
              btnTxt={"Services"}
              path={"/services"}
              btnColor={"bg-hue-secondary"}
              txtColor={"text-hue-inverted"}
            />
            <LinkButton
              btnTxt={"Free Quote"}
              path={"/requests"}
              btnColor={"transparent"}
              txtColor={"text-hue-base"}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col text-hue-base items-stretch desktop:mx-auto">
        <div className="flex flex-col items-stretch justify-evenly phone:h-72 laptop:h-96 bg-hue-accent z-40">
          <h2 className="phone:text-xl tablet:text-2xl laptop:text-3xl desktop:text-5xl phone:text-center font-medium">
            Our Mission
          </h2>
          <p className="text-base tablet:text-lg laptop:text-xl desktop:text-2xl text-justify tablet:text-center phone:mx-3 laptop:leading-loose ">
            Experience the ultimate solution for a hassle-free winter with our
            cutting-edge driveway heating systems. Say goodbye to snow and ice,
            as our innovative technology keeps your driveway warm and clear.
            Embrace convenience and safety with our reliable and efficient
            solutions for a seamless winter experience.
          </p>
        </div>
        <div className="bg-[url('https://dummyimage.com/720x720')] bg-cover bg-center h-80 w-full"></div>
      </div>
      <div className="container flex flex-col phone:text-base tablet:text-lg laptop:text-xl desktop:text-2xl items-start justify-evenly p-2 phone:space-y-4 laptop:space-y-6 laptop:pt-16 laptop:mx-3">
        <h2 className="font-medium phone:text-xl tablet:text-2xl laptop:text-3xl desktop:text-5xl">
          Contact Us
        </h2>
        <p>Reach out to us for all your driveway heating needs.</p>
        <p>Our expert team is ready to assist you. Contact us today!</p>
        <div className="flex flex-col items-start justify-around h-24">
          <div className="flex items-center">
            <MdOutlineMail className="text-2xl mr-2" />
            <p>heatsmartsolutions@example.com</p>
          </div>
          <div className="flex items-center">
            <MdPhone className="text-2xl mr-2" />
            <p>Tel: 1 (800) 123-45678</p>
          </div>
        </div>
      </div>
    </>
  );
}
