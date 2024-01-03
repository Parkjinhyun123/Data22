import Card from "./Card";
import CourseIcon from "./CourseIcon";
import Tags from "./Tags";
import style from "./CourseItem.module.css";
import getCourseColor from "./../utils/getCourseColor";
import { Link, useLocation } from "react-router-dom";

const DIFFICULTY = ["입문", "초급", "중급", "고급"];

function CourseItem({ course }) {
  const difficulty = DIFFICULTY[course.difficulty || 0];
  const courseColor = getCourseColor(course.code);
  const thumbStyle = {
    borderColor: courseColor,
  };
  return (
    <Card className={style.courseItem}>
      <div className={style.thumb} style={thumbStyle}>
        <CourseIcon photoUrl={course.photoUrl} />
      </div>
      <div className={style.content}>
        <h2 className={style.title}>
          <Link to={`/courses/${course.slug}`} state={{ course }}>
            {course.title}
          </Link>
        </h2>
        <p className={style.description}>{course.summary}</p>
        <div>
          <Tags values={[course.language, difficulty]} />
        </div>
      </div>
    </Card>
  );
}
export default CourseItem;
