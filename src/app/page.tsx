import Image from 'next/image'
import { LinkButton } from "./components/LinkButton";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container flex flex-col space-y-6 text-start z-40">
      <Image
        src="https://dummyimage.com/720x600"
        height={500}
        width={500}
        alt="hero"
      />
      <h1 className="text-2xl font-extralight">
        Embrace Winter Comfort: Heated Driveways, Chasing Away the Chill!
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className="flex flex-row justify-normal items-center">
        <LinkButton
          btnTxt={"Services"}
          path={"/services"}
          btnColor={"bg-hue-secondary"}
          txtColor={"text-hue-inverted"}
        />
        <LinkButton
          btnTxt={"About"}
          path={"/about"}
          btnColor={"transparent"}
          txtColor={"text-hue-base"}
        />
      </div>
    </div>
  );
}
