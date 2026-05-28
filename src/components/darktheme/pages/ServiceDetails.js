import { useParams } from "react-router-dom";

import servicesData from "../../../servicesData/servicesData";

import ServicePageLayout from "./ServicePageLayout";
import NotFound from "../../pages/NotFound";

export default function ServiceDetails() {
  const { slug } = useParams();

  const service = servicesData.find((item) => item.slug === slug);

  if (!service) {
    return (
      <NotFound />
      //   <div className="min-h-screen flex items-center justify-center">
      //     <h1 className="text-5xl font-bold">Service Not Found</h1>
      //   </div>
    );
  }

  return <ServicePageLayout service={service} />;
}
