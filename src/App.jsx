import {Route, Routes} from "react-router";
import Navigation from "./components/Navigation";
import HomePage from "./views/HomePage"
import Contacto from "./views/Contacto";
import NotFound from "./views/NotFound";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/contacto" element={<Contacto />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
};
export default App;
