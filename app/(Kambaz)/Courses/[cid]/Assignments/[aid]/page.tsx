/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { redirect, useParams } from "next/navigation";
import { Button, Col, Form, Row } from "react-bootstrap";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addAssignment, updateAssignment, setAssignments } from "../reducer";
import * as client from "../../../client";

export default function AssignmentEditor() {
  const {cid, aid} = useParams();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [points, setPoints] = useState(100);
  const [until_date, setUntilDate] = useState("");
  const [from_date, setFromDate] = useState("");
  const [due_date, setDueDate] = useState("");

  const isNew = aid === "new";

  function parseDate(date: any) {
    if (!date) return "";
    return new Date(date).toISOString().split("T")[0];
  }

  const onCreateAssignmentForCourse = async () => {
    if (!cid) return;
    const courseId = Array.isArray(cid) ? cid[0] : cid;
    const newAssignment = { title: title, course: courseId, description: description, points: points, 
      until_date: until_date, from_date: from_date, due_date: due_date};
    const a = await client.createAssignmentForCourse(courseId, newAssignment);
    dispatch(setAssignments([...assignments, a]));
  };

  const onUpdateAssignment = async (assignment: any) => {
    await client.updateAssignment(assignment);
    const newAssignments = assignments.map((a: any) => a._id === assignment._id ? assignment : a );
    dispatch(setAssignments(newAssignments));
  };


  /**
   * "title": "Propulsion Assignment", 
  "course": "RS101",
  "not_until": "May 6 at 12:00am",
  "due": "May 13 at 11:59pm",
  "points": 100,
  "description": "Complete the performance of a rocket engine.",
  "until_date": "2025-05-13",
  "from_date": "2025-05-06",
  "due_date": "2025-05-13"
   */
  
  const saveNewAssignment = (e: React.FormEvent) => {
    e.preventDefault();
    const newAssignment = {
      title,
      description,
      points,
      until_date,
      from_date,
      due_date,
      course: cid
    };

    if (aid && !isNew) {
      onUpdateAssignment({...newAssignment, _id: aid});
    } else {
      onCreateAssignmentForCourse();
    }
    redirect(`/Courses/${cid}/Assignments`);
  }

useEffect(() => {
    if (!isNew && aid) {
      const assignmentToEdit = assignments.find((a: any) => a._id === aid);
      if (assignmentToEdit) {
        setTitle(assignmentToEdit.title);
        setDescription(assignmentToEdit.description);
        setPoints(assignmentToEdit.points);
        setFromDate(parseDate(assignmentToEdit.from_date));
        setUntilDate(parseDate(assignmentToEdit.until_date));
        setDueDate(parseDate(assignmentToEdit.due_date));
      }
    }
  }, [aid, assignments, isNew]);

  return (
    <div id="wd-assignments-editor">
      <Form className="ms-5">
        <Form.Group as={Row} className="mb-4" controlId="wd-name">
          <Col sm={7} className="pe-0">
            <Form.Label>Assignment Name</Form.Label>
            <Form.Control type="text" value={title} onChange={(e) => { setTitle(e.target.value);}}/>
          </Col>
        </Form.Group>

        <Col sm={7}>
          <Form.Group className="mb-4" controlId="wd-description">
            <Form.Control
              as="textarea"
              rows={8}
              value={description} onChange={(e) => { setDescription(e.target.value); }}
            />
          </Form.Group>
        </Col>

        <Form.Group as={Row} className="mb-4 align-items-center">
          <Form.Label htmlFor="wd-points" as={Col} sm={2} className="text-end">
            Points
          </Form.Label>
          <Col sm={5} className="p-0">
            <Form.Control id="wd-points" type="number" 
            value={points} onChange={(e) => { setPoints(Number(e.target.value)); }}/>
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
              <Form.Control type="date"
              value={due_date} onChange={(e) => { setDueDate(e.target.value); }}
               />
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="wd-available-from">
              <Col>
                <Form.Label>
                  <b>Available from</b>
                </Form.Label>
                <Form.Control
                  type="date"
                  value={from_date} onChange={(e) => { setFromDate(e.target.value); }}
                />
              </Col>
              <Col>
                <Form.Group controlId="wd-available-until">
                  <Form.Label className="mb-2">
                    <b>Until</b>
                  </Form.Label>
                  <Form.Control type="date"
                  value={until_date} onChange={(e) => { setUntilDate(e.target.value); }}/>
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
          <Button variant="danger" type="submit" id="wd-btn-save" className="ms-2" onClick={saveNewAssignment}>
            Save
          </Button>
          </Col>
          </Row>
        </div>
      </Form>
    </div>
  );
  }
