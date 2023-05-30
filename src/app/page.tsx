import Image from 'next/image'
import { LinkButton } from "./components/LinkButton";
import { MdOutlineMail, MdPhone } from "react-icons/md";

export default function Home() {
  return (
    <>
      <div className="container flex flex-col p-8 space-y-6 text-start z-40">
        <Image
          src="https://dummyimage.com/720x600"
          height={500}
          width={500}
          alt="hero"
        />
        <h1 className="text-xl font-bold">HeatSmart Solutions</h1>
        <p className="w-11/12 font-light">
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
            path={"/request"}
            btnColor={"transparent"}
            txtColor={"text-hue-base"}
          />
        </div>
      </div>
      <div className="container flex flex-col">
        <div className="flex flex-col p-2 items-center justify-evenly h-72 bg-hue-secondary z-40">
          <h2 className="text-xl text-hue-inverted font-medium">Our Mission</h2>
          <p className="text-lg w-11/12 text-hue-inverted">
            Experience the ultimate solution for a hassle-free winter with our
            cutting-edge driveway heating systems. Say goodbye to snow and ice,
            as our innovative technology keeps your driveway warm and clear.
            Embrace convenience and safety with our reliable and efficient
            solutions for a seamless winter experience.
          </p>
        </div>
        <div className="bg-[url('https://dummyimage.com/720x720')] bg-cover bg-center h-80 w-full"></div>
      </div>
      <div className="container flex flex-col items-start justify-evenly p-2 space-y-4">
        <h2 className="text-xl font-medium">Contact Us</h2>
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
