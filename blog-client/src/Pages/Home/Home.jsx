import BlogList from "../../components/Blog-List/BlogList";
import HeaderSection from "../../components/Hero/HeaderSection";
import Nav from "../../components/NavBar/Nav";

const Home = () => {
  return (
    <section>
      <Nav />
      <HeaderSection />
      <BlogList />
    </section>
  );
};

export default Home;
