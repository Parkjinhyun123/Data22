import KakaoLogin from "react-kakao-login";

const SocialKakao =()=>{

    const kakaoClientId = '12960e8f1d627ea898d565f3b8ab8afb'
    const kakaoOnSuccess = async (data)=>{
      	console.log(data)
        const idToken = data.response.access_token  // 엑세스 토큰 백엔드로 전달
    }
    const kakaoOnFailure = (error) => {
        console.log(error);
    };

    let code = new URL(window.location.href);

    const code_params = code.searchParams.get('code')

    return(
        <>
          <KakaoLogin
              token={kakaoClientId}
              onSuccess={kakaoOnSuccess}
              onFail={kakaoOnFailure}
          />
        </>
    )
}

export default SocialKakao
