import { useEffect, useState } from "react";
import "./ArticleListItem.css";
import likeIcon from "../assets/icon/icon-like.png";
import replyIcon from "../assets/icon/icon-reply.png";
import { getData } from "../api/firebase";
import ArticleContent from "./ArticleContent";

const ArticleListItem = ({ description, modalData, index }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [memberName, setMemberName] = useState(null);
  const [isArticleContentOpen, setIsArticleContentOpen] = useState(false);

  const getCurrentTime = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const day = currentDate.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    if (modalData?.images?.[0]) {
      const base64String = modalData.images[0];
      setImageSrc(base64String);
    }
    if (modalData?.memberId) {
      getData("member", "memberId", "==", modalData.memberId)
        .then((data) => {
          if (data) {
            setMemberName(data.memberName);
          }
        })
        .catch((error) => {
          console.error("Error getting member data:", error);
        });
    }
  }, [modalData]);

  const handleListItemClick = (index, e) => {
    e.stopPropagation();
    setIsArticleContentOpen((prev) => !prev);
    console.log(handleListItemClick);
  };

  return (
    <div
      className={`article-body-inner-list ${index % 2 === 0 ? "even" : "odd"}`}
      onClick={(e) => handleListItemClick(index, e)}
    >
      <figure>{imageSrc && <img src={imageSrc} alt={description} />}</figure>
      {modalData && (
        <div className={`custom-info ${index % 2 === 0 ? "even" : "odd"}`}>
          <div className="modaldata-title">
            <p>{modalData.title}</p>
            <span>
              <img
                className="modaldata-title-icon"
                src={likeIcon}
                alt="likeIcon"
              />
              <img
                className="modaldata-title-icon"
                src={replyIcon}
                alt="replyIcon"
              />
            </span>
          </div>
          <div className="modaldata-desc"></div>
          <p>{memberName}</p>
          <span>{getCurrentTime()}</span>
        </div>
      )}
      {isArticleContentOpen && <ArticleContent isOpen={isArticleContentOpen} />}
    </div>
  );
};

export default ArticleListItem;
