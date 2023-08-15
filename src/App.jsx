import {
  Home,
  About,
  Course,
  Contact,
  Footer,
  Navbar,
  Teacher,
} from "./components/index";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Course />
        <Teacher />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
