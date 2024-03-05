import { Routes, Route } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import NotFound from "./components/errors/NotFound"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <>
      <Header />
      <div className="max-w-screen my-[3.5rem] sm:my-[5rem] md:my-[9rem] lg:my-[5.6rem]">
        <Routes>
          <Route path="dearq-web/" element={<Home />} />
          <Route path="dearq-web/*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
