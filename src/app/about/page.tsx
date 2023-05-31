import { ServiceCard } from "../components/ServiceCard";

// TODO: Add IntersectionObserver

export default function About() {
  return (
    <>
      <h1 className="text-2xl text-center pt-12">Our Approach</h1>
      <div className="container flex flex-col items-center justify-evenly text-justify text-lg w-11/12 space-y-6">
        <p>
          At HeatSmart Solutions, we are driven by our passion for providing
          innovative driveway heating solutions that transform winter
          experiences.
        </p>
        <p>
          With years of expertise and a dedicated team, we strive to deliver
          cutting-edge technology, exceptional customer service, and unmatched
          reliability. Our commitment to quality and customer satisfaction is at
          the core of everything we do.
        </p>
        <p>
          Join us on this journey as we revolutionize winter comfort and safety,
          one driveway at a time.
        </p>
      </div>
      <h2 className="text-xl text-center">Who we serve</h2>
      <ServiceCard
        title={"Homeowners"}
        desc={"Lorem ipsum dolor, sit amet consectetur adipisicing elit"}
      />
      <ServiceCard
        title={"Homeowners"}
        desc={"Lorem ipsum dolor, sit amet consectetur adipisicing elit"}
      />
      <ServiceCard
        title={"Homeowners"}
        desc={"Lorem ipsum dolor, sit amet consectetur adipisicing elit"}
      />
      <ServiceCard
        title={"Homeowners"}
        desc={"Lorem ipsum dolor, sit amet consectetur adipisicing elit"}
      />
      <ServiceCard
        title={"Homeowners"}
        desc={"Lorem ipsum dolor, sit amet consectetur adipisicing elit"}
      />
      <ServiceCard
        title={"Homeowners"}
        desc={"Lorem ipsum dolor, sit amet consectetur adipisicing elit"}
      />
      <ServiceCard
        title={"Homeowners"}
        desc={"Lorem ipsum dolor, sit amet consectetur adipisicing elit"}
      />
    </>
  );
}
