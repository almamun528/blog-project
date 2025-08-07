import BlogList from "../../components/Blog-List/BlogList";
import NewsLetter from "../../components/Call-To-Action/NewsLetter";
import Footer from "../../components/Footer/Footer";
import HeaderSection from "../../components/Hero/HeaderSection";
import Nav from "../../components/NavBar/Nav";

const Home = () => {
  return (
    <section>
      <Nav />
      <HeaderSection />
      <BlogList />
      <NewsLetter />
      <Footer/>
    </section>
  );
};

export default Home;
// need to watch 1h 57m 