/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useParams } from "next/navigation";
import PeopleTable from "./Table/page";
import { useEffect, useState } from "react";
import * as courseClient from "../../client";

export default function People() {
    const { cid } = useParams();
    const [users, setUsers] = useState<any[]>([]);

    const fetchUsers = async () => {
        if (!cid) return;
        const data = await courseClient.findUsersForCourse(cid);
        setUsers(data);
      };

    useEffect(() => {
       if (cid) fetchUsers();}, 
    [cid]);
    
    return (
        <div id="wd-people">
        <PeopleTable users={users} fetchUsers={() => fetchUsers()} />
        </div>
    );
}