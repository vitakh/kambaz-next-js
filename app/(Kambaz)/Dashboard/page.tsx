import Link from "next/link";
import Image from "next/image";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Row } from "react-bootstrap";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link href="/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/reactjs.jpg" width="100%" height={160} alt="reactjs"/>
            <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS1234 React JS </CardTitle>
              <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                Full Stack software developer</CardText>
              <Button variant="primary">Go</Button>
            </CardBody>
          </Link>
        </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
        <Card>
          <Link href="/Courses/3000/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/ds.jpg" width="100%" height={160} alt="ds"/>
            <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS3000 Data Science </CardTitle>
              <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                Foundations of Data Science</CardText>
              <Button variant="primary">Go</Button>
            </CardBody>
          </Link>
        </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
        <Card>
          <Link href="/Courses/4300/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/ai.jpg" width="100%" height={160} alt="ai"/>
            <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS4300 AI </CardTitle>
              <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                Foundations of AI</CardText>
              <Button variant="primary">Go</Button>
            </CardBody>
          </Link>
        </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
        <Card>
          <Link href="/Courses/2500/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/business.jpg" width="100%" height={160} alt="business"/>
            <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> BUS2500 Business </CardTitle>
              <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                Foundations of Business</CardText>
              <Button variant="primary">Go</Button>
            </CardBody>
          </Link>
        </Card>
        </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
        <Card>
          <Link href="/Courses/1500/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/chem.jpg" width="100%" height={160} alt="chem"/>
            <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CHEM1500 Chemistry </CardTitle>
              <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                General Chemistry</CardText>
              <Button variant="primary">Go</Button>
            </CardBody>
          </Link>
        </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
        <Card>
          <Link href="/Courses/5010/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/cs.jpg" width="100%" height={160} alt="cs"/>
            <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS5010 PDP </CardTitle>
              <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                PDP</CardText>
              <Button variant="primary">Go</Button>
            </CardBody>
          </Link>
        </Card>
        </Col>
<Col className="wd-dashboard-course" style={{ width: "300px" }}> 
        <Card>
          <Link href="/Courses/4000/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/math.jpg" width="100%" height={160} alt="math"/>
            <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> MATH4000 Stats </CardTitle>
              <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                Stats</CardText>
              <Button variant="primary">Go</Button>
            </CardBody>
          </Link>
        </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
        <Card>
          <Link href="/Courses/1000/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/writing.jpg" width="100%" height={160} alt="writing"/>
            <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> ENG1000 Writing </CardTitle>
              <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                Creative Writing</CardText>
              <Button variant="primary">Go</Button>
            </CardBody>
          </Link>
        </Card>
        </Col>
        </Row>
      </div>
    </div>
  );
}
