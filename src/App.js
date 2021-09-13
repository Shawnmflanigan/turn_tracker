import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SelectFactions from "./components/SelectFactions";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <SelectFactions />
          </Col>
          <Col xs={6}>
            <h1>This is where stuff goes</h1>
          </Col>
          <Col>
            <SelectFactions />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
