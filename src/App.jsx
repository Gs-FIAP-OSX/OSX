import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./routes/Home"
import Error from "./routes/Error"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
