import Link from "next/link";
import AssignmentControls from "./AssignmentControls";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { LuNotebookPen } from "react-icons/lu";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { IoMdArrowDropdown } from "react-icons/io";
import AssignmentCheckControlButtons from "./AssignmentCheckControlButtons";

export default function Assignments() {
  return (
    <div>
      <AssignmentControls />
      <br />
      <br />
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroupItem className="wd-assignment p-0 mb-5 fs-5 border-gray">
          <div className="wd-assignments-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <IoMdArrowDropdown className="me-2 fs-3"/>
            ASSIGNMENTS
            <AssignmentControlButtons />
          </div>
          <ListGroup className="wd-assignment-list rounded-0">
            <ListGroupItem className="wd-assignment-list-item p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <LuNotebookPen className="me-2 fs-3 text-success" />
              <div className="flex-grow-1 ms-2">
                <Link
                  href="/Courses/1234/Assignments/123"
                  className="wd-assignment-link link-dark link-underline-opacity-0 link-underline-opacity-75-hover"
                >
                  A1
                </Link>
                <br />
                <div className="small">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 6 at 12:00am |<br />
                  <b>Due</b> May 13 at 11:59pm | 100 pts
                </div>
              </div>
              <AssignmentCheckControlButtons />
            </ListGroupItem>
          </ListGroup>
          <ListGroup className="wd-assignment-list rounded-0">
            <ListGroupItem className="wd-assignment-list-item p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <LuNotebookPen className="me-2 fs-3 text-success" />
              <div className="flex-grow-1 ms-2">
                <Link
                  href="/Courses/1234/Assignments/123"
                  className="wd-assignment-link link-dark link-underline-opacity-0 link-underline-opacity-75-hover"
                >
                  A2
                </Link>
                <br />
                <div className="small">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 13 at 12:00am |<br />
                  <b>Due</b> May 20 at 11:59pm | 100 pts
                </div>
              </div>
              <AssignmentCheckControlButtons />
            </ListGroupItem>
          </ListGroup>
          <ListGroup className="wd-assignment-list rounded-0">
            <ListGroupItem className="wd-assignment-list-item p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <LuNotebookPen className="me-2 fs-3 text-success" />
              <div className="flex-grow-1 ms-2">
                <Link
                  href="/Courses/1234/Assignments/123"
                  className="wd-assignment-link link-dark link-underline-opacity-0 link-underline-opacity-75-hover"
                >
                  A3
                </Link>
                <br />
                <div className="small">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 20 at 12:00am |<br />
                  <b>Due</b> May 27 at 11:59pm | 100 pts
                </div>
              </div>
              <AssignmentCheckControlButtons />
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
