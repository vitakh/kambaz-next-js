/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */
"use client";
import Link from "next/link";
import AssignmentControls from "./AssignmentControls";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { LuNotebookPen } from "react-icons/lu";
import AssignmentControlButtons from "./AssignmentControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { IoMdArrowDropdown } from "react-icons/io";
import { useParams } from "next/navigation";
import * as db from "../../../Database";

export default function Assignments() {
  const {cid} = useParams();
  const assignments = db.assignments;
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
            {assignments.filter((assignment: any) => assignment.course === cid)
            .map((assignment: any) => (
              <ListGroupItem className="wd-assignment-list-item p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <LuNotebookPen className="me-2 fs-3 text-success" />
              <div className="flex-grow-1 ms-2">
                <Link
                  href={`/Courses/${cid}/Assignments/${assignment._id}`}
                  className="wd-assignment-link link-dark link-underline-opacity-0 link-underline-opacity-75-hover"
                >
                  {assignment.title}
                </Link>
                <br />
                <div className="small">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not available until</b> {assignment.not_until} |<br />
                  <b>Due</b> {assignment.due} | {assignment.points} pts
                </div>
              </div>
              <LessonControlButtons />
            </ListGroupItem>
            ))}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
