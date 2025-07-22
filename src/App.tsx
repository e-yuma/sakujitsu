import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Works from "./components/Works";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <div className="bg-white z-10 relative mt-[100vh]">
        {" "}
        <Works />
        {/* <Music />
      <About /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
