import Layout from "app/layouts";
import Hero from "./Hero.section";
import Service from "./Service.section";
import Stack from "./Stack.section";
import Testimonial from "./Testimonial.section";
import Who from "./Who.section";
// import Certification from "./Certification.section";
import Contact from "./Contact.section";
import Work from "./Work.section";
import Experience from "./Experience.section";

const Home = () => {
  return (
    <Layout>
      <main>
        <Hero />
        <Who />
        <Service />
        {/* <Certification /> */}
        <Stack />
        <Experience />
        <Work />
        <Testimonial />
        <Contact />
      </main>
    </Layout>
  );
};

export default Home;
