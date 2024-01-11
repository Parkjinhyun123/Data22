import React, { useEffect, useRef } from "react";

const Map = () => {
  const mapContainer = useRef(null);
  const { kakao } = window;
  const position = new kakao.maps.LatLng(36.328724, 127.423033);
  const mapOptions = {
    center: position, // 지도의 중심좌표
    level: 2, // 지도의 확대 레벨
  };

  useEffect(() => {
    const map = new kakao.maps.Map(mapContainer.current, mapOptions);

    const imageSrc = "https://i.ibb.co/JrK5b3G/gold.png", // 마커이미지의 주소입니다
      imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
      imageOption = { offset: new kakao.maps.Point(20, 20) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서

    const markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      ),
      markerPosition = new kakao.maps.LatLng(37.586471, 126.974769);

    const positions = [
      {
        title: "카카오",
        latlng: new kakao.maps.LatLng(33.450705, 126.570677),
      },
      {
        title: "생태연못",
        latlng: new kakao.maps.LatLng(33.450936, 126.569477),
      },
      {
        title: "텃밭",
        latlng: new kakao.maps.LatLng(33.450879, 126.56994),
      },
      {
        title: "근린공원",
        latlng: new kakao.maps.LatLng(33.451393, 126.570738),
      },
    ];

    for (var i = 0; i < positions.length; i++) {
      // 마커 이미지의 이미지 크기 입니다
      const imageSize = new kakao.maps.Size(24, 35);

      // 마커 이미지를 생성합니다
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
      });
    }

    // 마커가 지도 위에 표시되도록 설정
    marker.setMap(map);
  }, []);

  return (
    <div
      id="map"
      ref={mapContainer}
      style={{ width: "500px", height: "350px", display: "block" }}
    ></div>
  );
};

export default Map;
