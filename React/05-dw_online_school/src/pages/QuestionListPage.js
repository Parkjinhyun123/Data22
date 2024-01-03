import { useEffect, useState } from "react";
import ListPage from "../components/ListPage";
import { getDatas } from "../api/firebase";
import Warn from "../components/Warn";

function QuestionListPage() {
  const [items, setItems] = useState([]);
  const handleLoad = async () => {
    const communityItems = await getDatas("questions");
    // setItems(courseItems);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <ListPage
      variant="community"
      title="커뮤니티"
      description="DW온라인스쿨의 2만 수강생들과 함께 공부해봐요."
    >
      {items.length === 0 ? (
        <Warn title="질문" />
      ) : (
        <div>
          {items.map((course) => (
            <li>{course.docId}</li>
          ))}
        </div>
      )}
    </ListPage>
  );
}

export default QuestionListPage;
