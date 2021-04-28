// import React from 'react';
// //npm prop-types를 성공적으로 설치했음을 package.json의 dependencies에서 확인 한 후, 입력해주자
// import PropTypes from 'prop-types';

// //const : food의 object 배열
// const foodILike = [
//   {
//     id: 1,
//     name: "Kimchi",
//     image:
//       "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
//     // string이 아니라 number로 값을 입력하니, 5.0 -> 5로 자동 변환되어 출력되네요 ㅠ_ㅠ
//     rating : 5.0
//   },
//   {
//     id: 2,
//     name: "Samgyeopsal",
//     image:
//       "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
//     rating : 4.9
//   },
//   {
//     id: 3,
//     name: "Bibimbap",
//     image:
//       "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
//     rating : 4.5
//   },
//   {
//     id: 4,
//     name: "Doncasu",
//     image:
//       "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
//     rating : 4.9
//   },
//   {
//     id: 5,
//     name: "Kimbap",
//     image:
//       "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
//     rating : 4.2
//   } 
// ];

// //name을 변수로 갖는 function Food의 정의
// //alt 값 missing이라고 경고 뜨길래 넣어봤음
// function Food({name, picture, rating}) {
//   return (
//   <div>
//     <h2> I like { name } </h2>
//     <h4> {rating} / 5.0 </h4>
//     <img src = { picture } alt = { name } />
//   </div>
//   );
// }

// //PropTypes의 활용
// Food.propTypes = {
//   name : PropTypes.string.isRequired,
//   picture : PropTypes.string.isRequired,
//   rating : PropTypes.number.isRequired
// }

// // function renderFood(dish){
// //   //아래 코드를 입력하면 콘솔창에서 각각의 image, name을 순서대로 불러옴
// //   console.log(Food); 
// //   return <Food name={dish.name} picture={dish.image} />
// // }

// //food는 각각의 이름이 필요
// //dish는 이름일 뿐, dish의 차례가 오면 '=>'와 함께 return해줄 것. (Food가 return됨)
// //dish 안에는 name, image가 들어가 있어서(마우스 커서 가져다대면 보임)
// //dish.name으로 이름을 정해줄 수 있음.

// function App() {
//   return (
//   <div>
//     <h1>Object 'dish'를 이용해서 순서대로 채워넣기</h1>
//     {foodILike.map(dish => (
//       <Food key={dish.id} name = {dish.name} picture = {dish.image} rating ={dish.rating} />
//     ))}
//   </div>
//   );
// }

// // 위의 코드를 아래처럼 바꿔보자. --> foodILike.map(이 내용을 수정)
// // 그리고 위에 renderFood라는 이름의 함수를 만들어주러 간다!

// // function App() {
// //   return (
// //   <div>
// //     <h1>Object 'dish'를 이용해서 순서대로 채워넣기</h1>
// //     {foodILike.map(renderFood)}
// //   </div>
// //   );
// // }

// export default App;