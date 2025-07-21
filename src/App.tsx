import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Music from "./components/Music";
import Works from "./components/Works";

function App() {
  return (
    <div className="bg-[#FAF8F5] text-[#3D352E] overflow-x-hidden">
      <Header />
      <Hero />
      <Works />
      <Music />
      <About />
      <Footer />
    </div>
  );
}

export default App;
