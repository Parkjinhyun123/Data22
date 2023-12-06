const title = document.getElementById('text')
console.log(title.textContent)

//title.textContent 내용을 배열로 변환

const textArray=title.textContent.split('') 
// split('기준이 되는 문자')메소드 :기준이 되는 문자를 기준으로 쪼개 배열로 변환, '' 그냥 따옴표를 넣으면 글자단위로 쪼갠다.
console.log(textArray)

title.textContent = ''
for(let i = 0; i < textArray.length; i++){
    setTimeout(() => {
        console.log(textArray[i])
        title.textContent += textArray[i]
    ,1000 * i})
}

// const span = document.createElement('span')
// span.textContent =textArray.textContent
// document.body.append(span)

// const p = document.createElement('p')
// createElement('태그이름'): 태그를 생성하는 메소드
// p.textContent = title.textContent
//생성한 P태그 안에 title의 텍스트를 할당
// document.body.append(p)
//body의 맨 마지막 부분에 생성한 p 태그 추가