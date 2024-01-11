import TH from "./Table"
function IdCheck(){
    return(
        <tr>
              <TH scope="row">
                <span className="marking">*</span>
                <label for="id">회원아이디</label>
              </TH>
              <td>
                <input
                  type="text"
                  id="id"
                  name="id"
                  className="required"
                  title="아이디"
                />
                <input
                  type="button"
                  className="member-btn"
                  id="id_ajax"
                  value="중복확인"
                />
                <em>
                  한글, 특수문자를 제외한 4~20자까지의 영문과 숫자로
                  입력해주세요.
                </em>
                <div className="ok hidden">사용가능한 아이디입니다.</div>
                <div className="notOk hidden">사용 불가능한 아이디입니다.</div>
                <div className="nono hidden">
                  중복된 아이디입니다.
                </div>
              </td>
            </tr>
    )
}
export default IdCheck