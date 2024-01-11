import { addDatas } from "../../api/firebase"


const SubmitBtn = async ({id, password, name ,phone, email, email2})=>{
    const memberInfo = {
        memberId: id,
        memberPass: password,
        memberName: name,
        memberMail: email,
        memberMailSelf: email2,
        memberTel: phone,
      };
    addDatas("member",memberInfo)
}

export default SubmitBtn