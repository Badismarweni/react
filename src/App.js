import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div className="App">
      
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Instagram</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Facebook
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    

    <figure>
        <blockquote className="blockquote">
        </blockquote>
        <figcaption className="blockquote-footer">
          Shop<cite title="Source Title">Nutrition </cite>
        </figcaption>
      </figure>

      
      <Card>
        <Card.Img variant="top" src="https://www.impactnutrition.com.tn/wp-content/uploads/2022/01/SHAKERS.png" />
        <Card.Body>
          <Card.Text>
          Les premiers Shakers « Made In Tunisia » entièrement personnalisables. Nos shakers d’une capacité de 500ml en PP et PET alimentaires sont à la fois pratiques et endurants. Ils ont été conçu pour résister à toutes épreuves et sont entièrement personnalisables en couleurs. 
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://protein-shop-tunisia.tn/wp-content/uploads/2021/01/shaker-optimum-nutrition-tunisie.png" />
        <Card.Body>
          <Card.Text>
          Avec SHAKER MP MUSCLE PHARM – 700ML vous profiterez de vos mélanges en poudre (protéines et autres) confortablement, facilement et n’importe où. Comprend une grille Anti-grumeaux pour éviter qu’il y ait des grumeaux dans le mélange.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://protein-shop-tunisia.tn/wp-content/uploads/2022/12/BLENDER-BOTTLE-SHAKER-PRO-SERIES-TUNISIA-2-1.png" />
        <Card.Body>
          <Card.Text>
          L’introduction de la bouteille originale BlenderBottle Classic en 2004 a révolutionné la catégorie des mélangeurs à main. En 2016, la bouteille shaker BlenderBottle Pro Series a de nouveau secoué l’industrie, incorporant des caractéristiques de qualité professionnelle et des matériaux haut de gamme, ainsi qu’un design emblématique, pour faire de cette bouteille rugueuse et prête une coupe au-dessus du reste.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
