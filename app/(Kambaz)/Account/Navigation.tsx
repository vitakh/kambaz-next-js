import Link from "next/link";
export default function AccountNavigation() {
 return (
   <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0 mt-2">
     <Link href="Signin" className="list-group-item active border-0 mb-2" > Signin </Link>
     <Link href="Signup" className="list-group-item text-danger border-0 mb-2"> Signup </Link>
     <Link href="Profile" className="list-group-item text-danger border-0 mb-2"> Profile </Link>
   </div>
);}
