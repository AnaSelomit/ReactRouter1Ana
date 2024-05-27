import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar
      bg="danger"
      variant="dark"
    >
      <Container className="justify-content-start">
          <img className="icon" src="./img/home.png" alt="cake" />
          <Link
            to="/"
            className="text-white ms-3 text-decoration-none"
            >
            Home
          </Link>
          <img className="icon" src="./img/contacto4.png" alt="cake" />
          <Link
              to="/contacto"
              className="text-white ms-3 text-decoration-none"
              >
              Contacto
          </Link>
          
      </Container>
      <Container className="justify-content-end">
        
          <img className="logo" src="./img/cake.png" alt="cake" />
          <h5 className="logoNav">HappyCake</h5>
      </Container>
    </Navbar>
  );
};
export default Navigation;
