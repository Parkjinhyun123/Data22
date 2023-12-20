import React, { useEffect, useRef, useState } from "react";

function FileInput({ name, value, onChange }) {
  const inputRef = useRef();
  const [preview, setPreview] = useState({});

  const handleChange = (e) => {
    const nextFile = e.target.files[0];
    onChange(name, nextFile);
  };

  useEffect(() => {
    console.log(value);
    // 값이 없을 수도 있기 때문에 useEffect종료
    if (!value) return;
    // ObjectURL 객체를 사용하여 미리보기 기능을 구현할 수 있다.
    // ObjectURL 을 만들면 웹브라우저에 메모리를 할당한다. 할당을 한 이후에는 해제를 해줘야 메모리누수를 방지할 수 있다.
    // useEffect에서는 사이드 이펙트를 정리하는 기능을 제공한다.
    // return을 해줄 때 정리하는 함수를 return해주면 사이드 이펙트를 정리할 수 있다.
    const nextPreview = URL.createObjectURL(value); //createObjectURL 의 파라미터는 Blob, file, MediaSourceObject, null 타입의 데이터가 들어와야한다.
    setPreview(nextPreview);

    // 디펜던시 리스트 값이 바뀌면 새로 콜백을 실행하는데 이 전에 리액트는 앞에서 리턴한 정리 함수를 실행해서 사이드 이펙트를 정리한다.
    // 재렌더링 => useEffect 콜백함수 실행 => 그 안에 있는 return 함수 기억 => 사용자 파일을 변경되면 => value 값 변경으로 인한 useEffect 함수 실행 및 콜백함수 실행 => 앞에서 기억해뒀던 return함수 실행(앞에서 만들어진 사이드 이펙트가 더이상 쓸모없어졌기 때문)
    return () => {
      setPreview({});
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  return (
    <div>
      <img src={preview} alt="이미지 미리보기" />
      <input
        type="file"
        accept="image/png, image/jpg"
        onChange={handleChange}
        ref={inputRef}
      />
    </div>
  );
}

export default FileInput;
