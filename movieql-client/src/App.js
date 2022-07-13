import {BrowserRouter,Route, Routes} from "react-router-dom";
import Movie from "./routers/Movie"
import Movies from "./routers/Movies"

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="/movies/:id" element={<Movie />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
