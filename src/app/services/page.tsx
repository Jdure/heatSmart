import PocketBase from "pocketbase";
import data from "../../../data/services.json";
import MobileServiceCard from "../components/MobileServiceCard";
import LaptopServiceCard from "../components/LaptopServiceCard";

type ServiceRecord = {
  title?: string;
  description?: string;
  id: string;
};

async function getData() {
  const pb = new PocketBase("http://127.0.0.1:8090");
  const records = await pb.collection("services").getFullList({
    sort: "-created",
  });
  return records;
}

export default async function Services() {
  const serviceData = data.serviceOfferings;

  const services: ServiceRecord[] = await getData();

  return (
    <>
      <h1 className="pt-12 font-bold phone:text-xl tablet:text-2xl laptop:text-4xl desktop:text-6xl phone:text-center laptop:text-start laptop:ml-3">
        Our Services
      </h1>
      <MobileServiceCard serviceData={services} />
      <LaptopServiceCard serviceData={services} />
    </>
  );
}
