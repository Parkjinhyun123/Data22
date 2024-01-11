import { useEffect } from 'react';
import { useForm } from 'react-hook-form';


function Password(){
    const { watch, control, setValue, getValues, handleSubmit, reset, setError, clearErrors, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: {
          user: '',
          password: '',
          passwordCheck: '',
          term: false,
        },
      })
    
    // [비밀번호] value 수정 시 이미 입력된 [비밀번호 확인] value 도 같이 유효성 체크
      useEffect(() => {
        if (watch('password') !== watch('passwordCheck') && watch('passwordCheck')) {
          setError('passwordCheck', {
            type: 'password-mismatch',
            message: '비밀번호가 일치하지 않습니다'
          })
        } else { // 비밀번호 일치시 오류 제거
          clearErrors('passwordCheck');
        }
      }, [watch('password'), watch('passwordCheck')])
    
    return (
        <>
       <tr>
              <th scope="row">
                <span class="marking">*</span>
                <label htmlFor="password">비밀번호</label>
              </th>
              <td>
          <input
            name="password"
            control={control}
            label="비밀번호"
            maxLength="15"
            type="password"
            rules={
              {
                required: '비밀번호를 입력해주세요',
                  pattern: {
                    value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                      message: '영문, 숫자, 특수문자 포함 8 ~ 20자로 입력해주세요'
                  }
              }
            }
            />
             </td>
            </tr>
            <tr>
            <th scope="row">
                <span class="marking">*</span>
                <label htmlFor="passwordCheck">비밀번호확인</label>
              </th>
        
                <td>
                <input
            name="passwordCheck"
            control={control}
            label="비밀번호 확인"
            type="password"
            maxLength="15"
            rules={
              {
                required: "비밀번호를 확인해주세요",
                  validate: {
                    matchPassword: (value) => {
                      const { password } = getValues();
                      return password === value || '비밀번호가 일치하지 않습니다'
                    }
                  }
              }
            }
            /> 
                </td>
            </tr>
            
    
          
            </>)}
            export default Password