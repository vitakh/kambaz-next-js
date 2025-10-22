/* eslint-disable @typescript-eslint/no-explicit-any */
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import DeleteAssignment from "./DeleteAssignment";

export default function AssignmentCheckControlButtons({assignment, deleteAssignment}:
  {
    assignment: any; deleteAssignment: (assignmentId: string) => void;
  }
) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="float-end d-flex align-items-center">
      <FaTrash className="text-danger me-4" onClick={handleShow} />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4 ms-3" />
      <DeleteAssignment show={show} handleClose={handleClose} dialogTitle="Delete Assignment"
      assignment={assignment} deleteAssignment={deleteAssignment} />
    </div>
  );
}
