import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="reactjs"/>
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/3000" className="wd-dashboard-course-link">
            <Image src="/images/ds.jpg" width={200} height={150} alt="ds"/>
            <div>
              <h5> CS3000 Data Science </h5>
              <p className="wd-dashboard-course-title">
                Foundations of Data Science{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/4300" className="wd-dashboard-course-link">
            <Image src="/images/ai.jpg" width={200} height={150} alt="ai"/>
            <div>
              <h5> CS4300 AI </h5>
              <p className="wd-dashboard-course-title">
                Foundations of AI{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/2500" className="wd-dashboard-course-link">
            <Image src="/images/business.jpg" width={200} height={150} alt="business"/>
            <div>
              <h5> BUS2500 Business </h5>
              <p className="wd-dashboard-course-title">
                Foundations of Business{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1500" className="wd-dashboard-course-link">
            <Image src="/images/chem.jpg" width={200} height={150} alt="chem"/>
            <div>
              <h5> CHEM1500 Chemistry </h5>
              <p className="wd-dashboard-course-title">
                General Chemistry{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/5010" className="wd-dashboard-course-link">
            <Image src="/images/cs.jpg" width={200} height={150} alt="cs"/>
            <div>
              <h5> CS5010 PDP </h5>
              <p className="wd-dashboard-course-title">
                PDP{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/4000" className="wd-dashboard-course-link">
            <Image src="/images/math.jpg" width={200} height={150} alt="math"/>
            <div>
              <h5> MATH4000 Stats </h5>
              <p className="wd-dashboard-course-title">
                Stats{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1000" className="wd-dashboard-course-link">
            <Image src="/images/writing.jpg" width={200} height={150} alt="writing"/>
            <div>
              <h5> ENG1000 Writing </h5>
              <p className="wd-dashboard-course-title">
                Creative Writing{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
