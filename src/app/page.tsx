import Contact from "@/components/Contact";
import DownloadExtension from "@/components/Download-Extension";
import FAQs from "@/components/FAQs";
import Features from "@/components/features";
import Header from "@/components/header";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Features />
      <DownloadExtension />
      <FAQs />
      <Contact />
    </Fragment>
  );
}
