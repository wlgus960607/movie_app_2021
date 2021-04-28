// import React from 'react';

// // // #3.0 강의 코드
// // // React.Componet 클래스(사람)를 상속받은 class App(아기, 남자, 여자, ... )
// // class App extends React.Component {
// //     state = {
// //         //data가 변한다 - state를 사용해야하는 이유, 바꾸고 싶은 값을 여기에 입력하면 됨.
// //         count: 0
// //     };

// //     //JS 코드를 사용하여 function을 만들어주자
// //     add = () => {
// //         console.log("add");
// //     };

// //     minus = () => {
// //         console.log("minus");
// //     };

// //     //function과 달리, render을 사용한다.
// //     render(){
// //         //{state.count} 대신 class이기 때문에 this.state.count로 표현해준다.
// //         return (
// //         <div>
// //             <h1>The number is : {this.state.count}</h1>
// //             <button onClick={this.add}>Add</button>
// //             <button onClick={this.minus}>Minus</button>
// //         </div>
// //         );
// //     }
// // }

// ////////////////////////////////////////////////////////////////

// // //#3.1 강의 코드
// // class App extends React.Component {
// //     //state는 직접 변경하는 것이 아니라, set 해줘야함. 
// //     // => 왜냐, react는 Render function을 refresh 하지 않기 때문에.
// //     state = {
// //         count: 0
// //     };

// //     // (중요) setState를 설정하면, 넌 render를 무조건 사용함.

// //     add = () => {
// //         // //- 리액트가 setState()함수가 동작하면 state가 새로운 값으로 업데이트 되기 때문에
// //         // //Add 버튼 클릭 시, 1을 출력하게 하기 
// //         // this.setState({ count:1 });

// //         // // 현재 count 값에 +1하기
// //         // // 방법 1. 추천하지 않는 방법 - setState에서 state를 불러오는 방법        
// //         // this.setState({ count: this.state.count + 1 });

// //         // 방법 2. 추천 - this.state 대신에 current를 가져와서 사용하기
// //         this.setState( current => ({ 
// //             count: current.count + 1 
// //         }));
// //     };

// //     minus = () => {
// //         // //- 리액트가 setState()함수가 동작하면 state가 새로운 값으로 업데이트 되기 때문에
// //         // //Add 버튼 클릭 시, -1을 출력하게 하기 
// //         // this.setState({ count:-1 });


// //         // // 현재 count 값에 -1하기
// //         // // 방법 1. 추천하지 않는 방법 - setState에서 state를 불러오는 방법
// //         // this.setState({ count: this.state.count - 1 });

// //         // 방법 2. 추천 - this.state 대신에 current를 가져와서 사용하기
// //         this.setState( current => ({
// //             count: current.count - 1 
// //         }));
// //     };

// //     render(){
// //         return (
// //         <div>
// //             <h1>The number is : {this.state.count}</h1>
// //             <button onClick={this.add}>Add</button>
// //             <button onClick={this.minus}>Minus</button>
// //         </div>
// //         );
// //     }
// // }

// ////////////////////////////////////////////////////////////////

// // //#3.2 강의 코드
// // // ㄴ 3.1까지 사용한 react function은 'render'뿐 - add, minus는 우리가 만든 함수
// // // ㄴ render 말고도 life, cycle, method를 가지고 있는데 - 기본적으로 react가 component를 생성/삭제하는 방법
// // // ㄴ render 전에 사용되는 function(constructor), render 이후에 사용되는 function이 있음.

// // // 1. mounting - component 생성
// // // ㄴ 1.1 constructor() : JS에서 class를 만들 때 호출되는 것
// // // ㄴ 1.2 static getDerivedStateFromProps() : 범위 외, 패스
// // // ㄴ 1.3 render
// // // ㄴ 1.4 componentDidMount() : 이 component가 처음 render되었음을 알려줌.

// // // 2. updating - component 업데이트
// // // ㄴ 2.1 static getDerivedStateFromPorps() : 범위 외, 패스
// // // ㄴ 2.2 shouldComponentUpdate() : 업데이트를 할 지 말지 결정하는 것, setState를 호출할 때마다 발생
// // // ㄴ 2.3 render() 
// // // ㄴ 2.4 getSnapshotBeforeUpdate() 
// // // ㄴ 2.5 componentDidUpdate() : 이걸 사용할거임.

// // // 3. unmounting - component 죽음 (삭제, state를 이용한 삭제)
// // // ㄴ 3.1 componentWillUnmount : 유일함.

// // class App extends React.Component {
// //     // 1.1 constructor() test - super(props)는 잊어도 괜찮음.
// //     // ㄴ test 결과를 보면, this is one of mounting. > render 순서로 출력
// //     // ㄴ 즉, constructor이 render보다 먼저 실행됨.
// //     constructor(props){
// //         super(props);
// //         console.log('this is one of mounting.');
// //     }

// //     state = {
// //         count: 0
// //     };

// //     add = () => {
// //         this.setState( current => ({ 
// //             count: current.count + 1 
// //         }));
// //     };

// //     minus = () => {
 
// //         this.setState( current => ({
// //             count: current.count - 1 
// //         }));
// //     };

// //     // 1.4 componentDidMount() test
// //     // ㄴ test 결과를 보면, render > I'm rendered. 순서로 출력
// //     // ㄴ 즉, constructor이 render보다 늦게 실행됨.
// //     componentDidMount(){
// //         console.log("I'm rendered.");
// //     }

// //     // 2.5 componentDidUpdate() test
// //     // ㄴ test 결과를 보면, 버튼을 누를 때마다, render > I just Update! 출력
// //     // ㄴ 즉, state가 update되면, 해당 함수가 실행됨
// //     componentDidUpdate(){
// //         console.log("I just updated!");
// //     }

// //     // 3.1 componentWillUnmount() test
// //     // ㄴ test는 불가하지만, component가 떠날 때 호출됨
// //     componentWillUnmount(){
// //         console.log("Goodbye!");
// //     }


// //     render(){
// //          // 1.1 constructor() test
// //          console.log('render');
// //         return (
// //         <div>
// //             <h1>The number is : {this.state.count}</h1>
// //             <button onClick={this.add}>Add</button>
// //             <button onClick={this.minus}>Minus</button>
// //         </div>
// //         );
// //     }
// // }

// ////////////////////////////////////////////////////////////////

// // //#3.3 강의 코드
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