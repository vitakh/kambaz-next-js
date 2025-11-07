/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../../Database";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  assignments: [],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        _id: uuidv4(),
        title: assignment.title,
        course: assignment.course,
        points: assignment.points,
        not_until: assignment.not_until,
        due: assignment.due,
        description: assignment.description,
        until_date: assignment.until_date,
        from_date: assignment.from_date,
        due_date: assignment.due_date
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentId);
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      ) as any;
    },
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    }
  },
});
export const { addAssignment, deleteAssignment, updateAssignment, setAssignments } =
  assignmentsSlice.actions;
export default   assignmentsSlice.reducer;