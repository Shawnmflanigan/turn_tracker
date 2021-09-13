import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SelectFactions from "./components/SelectFactions";
import "bootstrap/dist/css/bootstrap.min.css";
import SelectMissions from "./components/SelectMissions";

function App() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <h5>Player 1</h5>
            <SelectFactions />
          </Col>
          <Col xs={6}>
            <SelectMissions />
          </Col>
          <Col>
          <h5>Player 2</h5>
            <SelectFactions />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
