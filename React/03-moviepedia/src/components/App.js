import { getDatas } from "../firebase";
// import mockItems from "../mock.json";
import ReviewList from "./ReviewList";
import { useEffect, useState } from "react";

const LIMIT = 5;

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [lq, setLq] = useState({});

  // sort 함수에 아무런 arguments도 전달하지 않을 때는 기본적으로 유니코드에 정의된 문자열 순서에 따라 정렬된다.
  // ==> compareFunction가 생략될 경우, 배열의 모든 요소들은 문자열 취급되며, 유니코드값 순서대로 정렬된다는 의미이다.
  // 그렇기 때문에 숫자를 정렬할 때 우리가 상식적으로 이해하는 오름차순이나 내림차순 정렬이 되지않는다.
  // 반환값 < - : a가 b보다 앞에있어야한다
  // 반환값 == 0 : a와 b 순서를 바꾸지 않는다.
  // 반환값 > 0 : b가 a보다 앞에 있어야한다.
  // a-b : 오름차순, b-a : 내림차순

  // const handleNewestClick = () => {
  //   console.log(items);
  //   const sortedItems = items.toSorted((a, b) => b.createdAt - a.createdAt);
  //   console.log(sortedItems);
  //   setItems(sortedItems);
  // };

  // const handleBestClick = () => {
  //   console.log(items);
  //   const bestItems = items.toSorted((a, b) => b.rating - a.rating);
  //   setItems(bestItems);
  // };

  // const sortedItems = items.sort((a, b) => b[order] - a[order]);
  const handleNewestClick = () => setOrder("createdAt");
  const handleBestClick = () => setOrder("rating");

  const handleDelete = (id) => {
    // items에서 id 파라미터와 같은 id를 가지는 요소(객체)를 제거
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const handleLoad = async (lq) => {
    const { reviews, lastQuery } = await getDatas("movie", order, LIMIT, lq);
    if (lq === undefined) {
      setItems(reviews);
    } else {
      setItems((prevItems) => [...prevItems, ...reviews]);
    }
    setLq(lastQuery);
    console.log(reviews);
  };

  const handleLoadMore = () => {
    handleLoad(lq);
  };

  // useEffect는 arguments로 콜백함수와 배열을 넘겨준다.
  // []은 dependency list 라고 하는데 위에서 handleLoad 함수가 무한루프 작동을 하기 때문에 처리를 해줘야 하는데
  // react는 [] 안에 있는 값들을 앞에서 기억한 값이랑 비교한다.
  // 비교해서 다른 경우에만 콜백함수를 실행한다.(그 전에는  콜백함수를 등록만 해놓음)
  useEffect(() => {
    handleLoad();
  }, [order]);

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>
      <ReviewList items={items} onDelete={handleDelete} />
      <button onClick={handleLoadMore}>더보기</button>
    </div>
  );
}

export default App;
