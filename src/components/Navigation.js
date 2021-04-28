import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        // <div>
        //     <a href="/"> Home </a>
        //     <a href="/about"> About </a>
        // </div>

        // react-router-dom으로 a 엘리먼트를 Link 컴포넌트로 변경 - 화면 깜빡임이 없어짐
        <div className="nav">
            <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
        </div>

        // // [참고] 액션 3까지 작성한 코드가 필요할 경우, 아래와 같이 route props를 사용할 수 있음. - 여기선 필요 없지만.
        // <div className="nav">
        // <Link to="/"> Home </Link>
        // <Link to={{
        //     pathname: '/about',
        //     state: { 
        //         fromNavigation: true 
        //         }
        //     }}> About </Link>
        // </div>
            );
}

export default Navigation;