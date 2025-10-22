"use client";

import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { redirect, useParams } from "next/navigation";

export default function AssignmentControls() {
  const { cid } = useParams();
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
          onClick={() => redirect(`/Courses/${cid}/Assignments/new`)}
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
