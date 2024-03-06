import { Routes, Route } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import NotFound from "./components/errors/NotFound"
import Footer from "./components/footer/Footer"
import About from "./components/about/About"

function App() {
  return (
    <>
      <Header />
      <div className="max-w-screen mt-[3.5rem] sm:mt-[5rem] md:mt-[9rem] lg:mt-[5.6rem]">
        <Routes>
          <Route path="dearq-web/" element={<Home />} />
          <Route path="dearq-web/about" element={<About />} />
          <Route path="dearq-web/*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
