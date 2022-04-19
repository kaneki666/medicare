import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import AboutUs from "../components/Sections/AboutUs";

import Form from "../components/Sections/Form";

import Footer from "../components/Sections/Footer"

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Form />
      <AboutUs />
      <Footer />
    </>
  );
}


