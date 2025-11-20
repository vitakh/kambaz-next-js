/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useParams } from "next/navigation";
import PeopleTable from "./Table/page";
import { useEffect, useState } from "react";
import * as courseClient from "../../client";

export default function People() {
    const { cid } = useParams();
    const [users, setUsers] = useState<any[]>([]);
    const courseId = Array.isArray(cid) ? cid[0] : cid;

    const fetchUsers = async () => {
        if (!courseId) return;
        const data = await courseClient.findUsersForCourse(courseId);
        setUsers(data);
      };

    useEffect(() => {
       if (courseId) fetchUsers();}, 
    [courseId]);
    
    return (
        <div id="wd-people">
        <PeopleTable users={users} fetchUsers={() => fetchUsers()} />
        </div>
    );
}