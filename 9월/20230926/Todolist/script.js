const input = document.getElementById('add-todo')
const addButton = document.querySelector('.add-button')
const list = document.getElementById('list')

input.addEventListener('keydown', (e)=>{
    console.log(e.key)
    if(e.key === 'Enter'){
        // enter 키를 눌렀을때 addListitem() 함수실행
        addListitem()
    }
})
addButton.addEventListener('click', ()=> {
    // 추가 버튼을 눌렀을 때
    addListitem()
})

const addListitem = () => {
    // list에 할 일을 추가하는 함수
    if(input.value.length === 0){
        // 사용자가 빈값을 입력했을 때 경고창
        return alert('내용을 입력해 주세요')
    }
    // if(!input.value){
    //     alert('내용을 입력해주세요');}
    // else{}
    const li = document.createElement('li')
        // li 요소 생성
        li.innerHTML = `${input.value} <button class="list-delete">&#x2716</button>`
        // li에 사용자의 입력값과 버튼태그 추가
        li.classList.add('list-item')
        list.append(li)
        // list에 li 추가
        input.value='';  
        // input에 값 제거
        input.focus();
        // input에 foucs 활성화 (사용자가 입력할 수 있게 대기)
        saveList(list.innerHTML)
        // localStorage에 저장
    }
list.addEventListener('click', (e)=> {
    console.log(e.currentTarget)
    // event.currentTarget: 이벤트가 걸려있는 요소
    // event.targer: 클릭하는 요소
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        // checked 클래스를 추가하거나 삭제
        saveList(list.innerHTML)
        // localStorage에 저장
    }

    if(e.target.tagName === 'BUTTON'){
        // 삭제 버튼을 눌렀을때
        e.target.parentElement.remove()
        // 삭제 버튼의 부모를 삭제(li삭제)
        saveList(list.innerHTML)
        // localStorage에 저장
    }
})


const saveList = (list) => {
    // localStorage에 JSON 형태로 저장 
    //localStorage에 todo라는 이름으로 저장 
    // stringify 상태로 변환해서 저장
    localStorage.setItem('todo', JSON.stringify(list))
}

const loadList = () => {
    const getList = JSON.parse(localStorage.getItem('todo'))
    // localStorage에 'todo'라는 이름으로 값을 가져오고
    // 상태를 html요소로 사용할 수있도록 변환
    list.innerHTML = getList
    // 변환한 값을 innerHTML로 list에 추가
}

document.addEventListener('DOMContentLoaded' , loadList())
// DOMContentLoaded: DOM이 그려지고 난 후
// load : DOM도 그려지고, 이미지와 같은 요소도 모두 로드 되었을때