import Navbar from "../../Fragments/Navbar";
import Hero from "../../Fragments/Hero";
import OurService from "../../Fragments/OurService";
import WhyUs from "../../Fragments/WhyUs";
import Testimonial from "../../Fragments/Testimonial";
import CTA from "../../Fragments/CTA";
import FAQ from "../../Fragments/FAQ";
import Footer from "../../Fragments/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <OurService></OurService>
      <WhyUs></WhyUs>
      <Testimonial></Testimonial>
      <CTA></CTA>
      <FAQ></FAQ>
      <Footer></Footer>
    </>
  );
};

export default HomePage;
