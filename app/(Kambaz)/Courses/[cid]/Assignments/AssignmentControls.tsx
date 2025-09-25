"use client";

import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

export default function AssignmentControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <Row>
        <Col sm={6} className="float-start d-flex justify-content-start ">
        <InputGroup className="mb-3" id="wd-search-assignment">
          <InputGroup.Text>
            <CiSearch />
          </InputGroup.Text>
          <Form.Control
            type="search"
            placeholder="Search..."
            aria-label="Search"
            size="lg"
          />
        </InputGroup>
       </Col>
       <Col className="float-end justify-content-end">
        <Button
          variant="danger"
          size="lg"
          className="me-1 float-end"
          id="wd-add-assignment"
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Assignment
        </Button>
        <Button
          variant="secondary"
          size="lg"
          className="me-1 float-end"
          id="wd-add-assignment-group"
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Group
        </Button>
      </Col>
      </Row>
    </div>
  );
}
