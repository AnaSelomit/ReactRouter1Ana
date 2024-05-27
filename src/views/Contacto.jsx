import { Container } from "react-bootstrap";
import Contact from "../components/Contact"



const Contacto = () => {
  return (
    <div className="container-contact">
        <Container className="pt-5">
        <h1 className="mb-4">Contáctanos!</h1>
        <Contact /> 
        </Container>
    </div>
  );
};
export default Contacto;
