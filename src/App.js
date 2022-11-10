import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { PokeHome } from "./pages/PokeHome";


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:id" element={<PokeHome/>}/>
      </Routes>
    </BrowserRouter>
  );
};