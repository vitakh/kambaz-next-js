import Link from "next/link";
export default function KambazNavigation() {
  return (
    <div id="wd-kambaz-navigation">
        <ul>
      <li><a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank">
        Northeastern
      </a>
      <br />
      </li>
      <li><Link href="/Account" id="wd-account-link">
        Account
      </Link>
      <br />
      </li>
      <li><Link href="/Dashboard" id="wd-dashboard-link">
        Dashboard
      </Link>
      <br />
      </li>
      <li><Link href="/Dashboard" id="wd-course-link">
        Courses
      </Link>
      <br />
      </li>
      <li><Link href="/Calendar" id="wd-calendar-link">
        Calendar
      </Link>
      <br />
      </li>
      <li><Link href="/Inbox" id="wd-inbox-link">
        Inbox
      </Link>
      <br />
      </li>
      <li><Link href="/Labs" id="wd-labs-link">
        Labs
      </Link>
      <br />
      </li>
      </ul>
    </div>
  );
}
