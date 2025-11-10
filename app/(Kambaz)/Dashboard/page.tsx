/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import * as client from "../Courses/client";
import * as userClient from "../Account/client";

import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  FormControl,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setCourses } from "../Courses/reducer";
import { redirect } from "next/navigation";

export default function Dashboard() {
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  const isFaculty = currentUser?.role === "FACULTY";
  const isStudent = currentUser?.role === "STUDENT";
  const [showAll, setShowAll] = useState(false);
  const [allCourses, setAllCourses] = useState<any[]>([]);
  const [enrollments, setEnrollmentList] = useState<any[]>([]);

  const fetchCourses = async () => {
    try {
      const courses = await client.findMyCourses();
      dispatch(setCourses(courses));
    } catch (error) {
      console.error(error);
    }
  };

  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([ ...courses, newCourse ]));
  };

  const onDeleteCourse = async (courseId: string) => {
    const status = await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((course: any) => course._id !== courseId)));
  };

  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(setCourses(courses.map((c: any) => {
        if (c._id === course._id) { return course; }
        else { return c; }
    })));};

  const getMyEnrollments = async () => {
    setEnrollmentList(await userClient.findMyEnrollments());
  }

  const courseIds = new Set(enrollments.map((e) => e.course));
  const displayedCourses = showAll ? allCourses : courses;

const onEnrollmentClick = async () => {
  if (!showAll && allCourses.length === 0) {
    try {
          const fetchedCourses = await client.fetchAllCourses();
            setAllCourses(fetchedCourses);
            } catch (error) {
                console.error("Error fetching courses:", error);
            }
  }
    setShowAll(!showAll);
  };

const enrollUser = async (course: any) => {
        const status = await userClient.enrollUserInCourse(course);
        setEnrollmentList((e) => [...e, { user: currentUser._id, course: course._id }]);
        //const updated = await userClient.findMyEnrollments();
        const updatedCourses = await userClient.findMyCourses(); 
        dispatch(setCourses(updatedCourses));
    }

    const unenrollUser = async (course: any) => {
        const status = await userClient.unenrollUserFromCourse(course);  
        //const updated = await userClient.findMyEnrollments();
        setEnrollmentList((e) => e.filter((e) => e.course !== course._id)); 
        const updatedCourses = await userClient.findMyCourses(); 
        dispatch(setCourses(updatedCourses));
    }

useEffect(() => {
  let mounted = true;
  (async () => {
    try {
      const me = currentUser ?? (await userClient.getCurrentUser());
      if (!mounted) return;
 
      if (!me) {
        redirect("/Account/Signin");
        return;
      }
 
 
      await fetchCourses();
      if (me.role === "STUDENT") await getMyEnrollments();
    } catch (e) {
     
      redirect("/Account/Signin");
    }
  })();
  return () => { mounted = false; };
}, []);

  return (
    <div className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {isFaculty && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={onAddNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={onUpdateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            value={course.description}
            as="textarea"
            rows={3}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </>
      )}
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>
      <hr />
      {isStudent && (
        <>
          <Button
            id="wd-student-enrollment-btn"
            variant="primary"
            className="float-end"
            onClick={onEnrollmentClick}
          >
            Enrollments
          </Button>
        </>
      )}
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {displayedCourses.map((course: any) => {
            const isEnrolled = courseIds.has(course._id)
            return (
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link
                  href={isFaculty || isEnrolled ? `/Courses/${course._id}/Home`: "#"}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <CardImg
                    variant="top"
                    src={course.image}
                    width="100%"
                    height={160}
                    alt="reactjs"
                  />
                  <CardBody>
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}
                    </CardTitle>
                    <CardText
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {course.description}
                    </CardText>
                    <Button variant="primary">Go</Button>
                    {isFaculty && (
                      <>
                        <Button
                          onClick={(event) => {
                            event.preventDefault();
                            onDeleteCourse(course._id);
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </Button>
                        <Button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </Button>
                      </>
                    )}
                    {isStudent && showAll && (
                      <>
                        {isEnrolled ? (
                          <Button
                            variant="danger"
                            className="me-1 float-end"
                            onClick={(e) => {
                              e.preventDefault();
                              unenrollUser(course);
                            }}
                          >
                            Unenroll
                          </Button>
                        ) : (
                          <Button
                            variant="success"
                            className="me-1 float-end"
                            onClick={(e) => {
                              e.preventDefault();
                              enrollUser(course);
                            }}>
                            Enroll
                          </Button>
                        )}
                      </>
                    )}
                  </CardBody>
                </Link>
              </Card>
            </Col>
          );})}
        </Row>
      </div>
    </div>
  );
}