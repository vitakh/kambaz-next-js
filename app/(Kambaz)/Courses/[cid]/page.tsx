import { redirect, useParams } from "next/navigation";


export default function CoursesPage() {
 const { cid } = useParams();
 redirect(`/Courses/${cid}/Home`);
}
