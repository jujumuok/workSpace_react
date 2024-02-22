import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
const board_list=[
  {
    'boardNo':1, 
    'title':'1번글',
    'content':'1번글 내용',
    'write':'김자바',
    'regData':'2024-02-01'
  },
  {
    'boardNo':2, 
    'title':'2번글',
    'content':'2번글 내용',
    'write':'홍길동',
    'regData':'2024-02-03'
  },
  {
    'boardNo':3, 
    'title':'3번글',
    'content':'3번글 내용',
    'write':'박문수',
    'regData':'2024-02-01'
  },
  {
    'boardNo':4, 
    'title':'4번글',
    'content':'4번글 내용',
    'write':'김홍희',
    'regData':'2024-02-05'
  },
  {
    'boardNo':5, 
    'title':'5번글',
    'content':'5번글 내용',
    'write':'안창호',
    'regData':'2024-02-07'
  }
];
//state 변수

let [isShow, setIsShow]=useState(false);
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>게시글</h4>
      </div>
      <table className='table'>
          <thead>
            <th>글번호</th>
            <th> 제목</th>
            <th>내용</th>
            <th>작성자</th>
            <th>작성일</th>
          </thead>
          <tbody>
            {
              board_list.map((board,i)=>{
                return(
                  <tr key={i} >
                    <td>{board.boardNo}</td>
                    <td>
                      <span onClick={()=>{

                        setIsShow(true)
                      }}>{board.title}
                      </span>
                    </td>
                    <td>{board.content}</td>
                    <td>{board.write}</td>
                    <td>{board.regData}</td>
                  </tr>
                )
              }
              )
            }
          </tbody>
        </table>
        {
          isShow ? <Detail board_list={board_list} />:' '
        }
        
      </div>
  );
}

//상세정보를 컴포넌트-보일려먼 return
function Detail(props){
  return (
    <div className='detail'>
      <div>글번호 : {props.board_list[0].boardNo}</div>
      <div>제목 : {props.board.title}</div>
      <div>내용 : {props.board.content}</div>
      <div>작성자 : {props.board.write}</div>
      <div>작성일 : {props.board.regData}</div>
    </div>
  )
}
export default App;
