// import React from 'react';

// // // #3.3부터
// class App extends React.Component{
//     state = {
//         isLoading: true,
//         movies: []
//     };

//     // render가 된 다음에 state를 변화시키기 위해서, componentDidMount()를 사용 
//     componentDidMount(){
//         // setTimeout을 세팅
//         setTimeout(() => {
//             //state를 바꾸기 위해서 setState 함수 사용
//             // book : true? -> 내가 미래에 사용하고자하는 state를 선언하는 것은 error가 아님
//             this.setState({ isLoading: false, book : true });
//         // 6000밀리초를 전달 > 6000밀리초(=6초) 후에 isLoading의 값은 false로 변경될 것임.
//         }, 6000);
//     }

//     render() {
//         // this.state에 있는 isLoading을 우선 얻으면, 뒤에 this.state를 생략 가능함.
//         const { isLoading } = this.state;
//         return <div> {isLoading ? "Loading..." : "We are Ready!" } </div>;
//     }
// }

// export default App;