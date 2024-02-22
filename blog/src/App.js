import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
// let title='첫번째 글';

let arr=[1,2];
let num1=arr[0];
let num2=arr[1];

let [a,b]=[1,2];
console.log(a);
console.log(b);

//state 변수
let [title, setTitle]=useState(['리액트 학습','울산맛집','겨울 코드 추천']);
let [likeCnt, setLikeCnt]=useState([0,0,0]);
let [isShow, setIsShow]=useState(false);
// input 태그에 입력한 값을 저장하고 있는 state변수
let [newTitle, setNewTitle]=useState(' ')


  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>

      <button type='button' onClick={()=>{
       let title2=[...title];
       title2[0]='남자 옷 추천';
        setTitle(title2);
      }}>글변경</button>
     

      {
        title.map((e, i) => {
          return (
            <List setTitle={setTitle} setIsShow={setIsShow} key={i} title={title} likeCnt={likeCnt} idx={i} setLikeCnt={setLikeCnt}/>
          )
        })
      }

      <div>
        <input type='text' onChange={(e)=>{
          // input 태그에 입력한 값을 출력
          // 매개변수를 적지 않으면 뭔가는 들어온다.(이벤트에 대한 정보를 가지고 있다.-이벤트가 가지고 있는 태그)
          console.log(e.target.value)
          setNewTitle(e.target.value)
        }}/>
        <input type='button' value={'저장'} onClick={(e)=>{
          let copyTitle=[...title];
          // 마지막에 추가
          copyTitle.push(newTitle);
          // 첫번째 추가
          copyTitle.unshift(newTitle)
          setTitle(copyTitle);
        }}/>
      </div>
      
      {
        isShow ?  <Detail/>:' ' 
      }
    </div>
    
  );
}

//블로그 글 하나하나를 표현하는 컴포넌트
function List(props){
  return(
    <div className="list">
      <h4> <span onClick={()=>{
        props.setIsShow(true)
      }}>{props.title[props.idx]}</span>

      {/* <span onClick={()=>{
         let copyLikeCnt= [...props.likeCnt];
         copyLikeCnt[props.idx]++;
         props.setLikeCnt(copyLikeCnt);
      }}>👍</span>{props.likeCnt[props.idx]} */}
      </h4>
      <p>2월 19일 작성</p>
      {/* 클릭시 삭제 */}
      <button type='button' onClick={(e)=>{
        let copyTitle=[...props.title];
        copyTitle.splice(props.idx,1);
        props.setTitle(copyTitle)
      }}>삭제</button>
        {/* // title에서 데이터를 없앤다 */}


    </div>
  );
}
//상세정보를 표현하는 컴포넌트
function Detail(){
  return (
    <div className='detail'>
    <h4>제목  </h4>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}

export default App;
