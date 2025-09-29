"use client";

import { useParams } from "next/navigation";
import { Button, Col, Form, Row } from "react-bootstrap";
import * as db from "../../../../Database"; 
import Link from "next/link";

export default function AssignmentEditor() {
  const {cid, aid} = useParams();
  const assignments = db.assignments;
  const assignment = assignments.find(a => a._id === aid);
  return (
    <div id="wd-assignments-editor">
      <Form className="ms-5">
        <Form.Group as={Row} className="mb-4" controlId="wd-name">
          <Col sm={7} className="pe-0">
            <Form.Label>Assignment Name</Form.Label>
            <Form.Control type="text" defaultValue={assignment?.title}/>
          </Col>
        </Form.Group>

        <Col sm={7}>
          <Form.Group className="mb-4" controlId="wd-description">
            <Form.Control
              as="textarea"
              rows={8}
              defaultValue={assignment?.description}
            />
          </Form.Group>
        </Col>

        <Form.Group as={Row} className="mb-4 align-items-center">
          <Form.Label htmlFor="wd-points" as={Col} sm={2} className="text-end">
            Points
          </Form.Label>
          <Col sm={5} className="p-0">
            <Form.Control id="wd-points" type="number" defaultValue={assignment?.points} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-4 align-items-center" controlId="wd-group">
          <Form.Label as={Col} sm={2} className="text-end">
            Assignment Group
          </Form.Label>
          <Col sm={5} className="p-0">
            <Form.Select>
              <option defaultValue="ASSIGNMENTS">
                ASSIGNMENTS
              </option>
              <option value="EXAMS">
                EXAMS
              </option>
              <option value="QUIZZES">
                QUIZZES
              </option>
              <option value="ANALYSIS">
                ANALYSIS
              </option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-4 align-items-center" controlId="wd-display-grade-as">
          <Form.Label as={Col} sm={2} className="text-end ">
            Display Grade as
          </Form.Label>
          <Col sm={5} className="p-0">
            <Form.Select>
              <option selected value="PERCENTAGE">
                Percentage
              </option>
              <option value="POINTS">
                Points
              </option>
              <option value="COMPLETE">
                Complete
              </option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-4" controlId="wd-submission-type">
          <Form.Label as={Col} sm={2} className="my-1 text-end">
            Submission Type
          </Form.Label>
          <Col sm={5} className="border rounded p-3">
            <Form.Select className="mb-4">
              <option selected value="ONLINE">
                Online
              </option>
              <option value="EXTERNAL">
                External Tool
              </option>
              <option value="PAPER">
                Paper
              </option>
            </Form.Select>

            <Form.Group controlId="wd-online-entry-options">
              <Form.Label className="mt-2">
                <b>Online Entry Options</b>
              </Form.Label>
              <br />
              <Form.Check
                className="m-3 ms-2"
                id="wd-text-entry"
                label="Text Entry"
              />
              <Form.Check
                className="m-3 ms-2"
                id="wd-website-url"
                defaultChecked
                label="Website URL"
              />
              <Form.Check
                className="m-3 ms-2"
                id="wd-media-recordings"
                label="Media Recordings"
              />
              <Form.Check
                className="m-3 ms-2"
                id="wd-student-annotation"
                label="Student Annotation"
              />
              <Form.Check
                className="m-3 ms-2"
                id="wd-file-upload"
                label="File Uploads"
              />
            </Form.Group>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-4">
          <Form.Label as={Col} sm={2} className="my-1 text-end">
            Assign
          </Form.Label>
          <Col sm={5} className="border rounded p-3">
            <Form.Group as={Row} className="mb-3 pe-3" controlId="wd-assign-to">
              <Form.Label><b>Assign to</b></Form.Label>
              <Form.Control type="text" defaultValue="Everyone" className="ms-2"/>
            </Form.Group>

            <Form.Group controlId="wd-due-date" className="mb-3">
              <Form.Label>
                <b>Due</b>
              </Form.Label>
              <Form.Control type="date" defaultValue={assignment?.due_date} />
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="wd-available-from">
              <Col>
                <Form.Label>
                  <b>Available from</b>
                </Form.Label>
                <Form.Control
                  type="date"
                  defaultValue={assignment?.from_date}
                />
              </Col>
              <Col>
                <Form.Group controlId="wd-available-until">
                  <Form.Label className="mb-2">
                    <b>Until</b>
                  </Form.Label>
                  <Form.Control type="date" defaultValue={assignment?.until_date} />
                </Form.Group>
              </Col>
            </Form.Group>
          </Col>
        </Form.Group>
        <hr />
        <div>
          <Row>
            <Col sm={2}></Col>
            <Col sm={5} className="d-flex justify-content-end pe-0">
          <Link href={`/Courses/${cid}/Assignments`}><Button variant="secondary" type="reset" id="wd-btn-cancel" >
            Cancel
          </Button></Link>
          <Link href={`/Courses/${cid}/Assignments`}><Button variant="danger" type="submit" id="wd-btn-save" className="ms-2">
            Save
          </Button></Link>
          </Col>
          </Row>
        </div>
      </Form>
    </div>
  );
}
