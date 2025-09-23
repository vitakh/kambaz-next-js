import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
        <span className="border border-light rounded-5 me-1 p-2">
            40% of Total
        </span>
      <BsPlus className="fs-4 ms-1"/>
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}