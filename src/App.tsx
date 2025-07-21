import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Works from "./components/Works";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <Works />
      {/* <Music />
      <About /> */}
      <Footer />
    </div>
  );
}

export default App;
