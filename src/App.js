import React from 'react';
import './App.css';
// import Home from './routes/Home';
// HashRouter와 Route 컴포넌트 사용을 위해 넣는 것 - 외워두자 & url 뒤에 #/이 붙어서 출력될 것
import { HashRouter, Route } from 'react-router-dom';

// HashRouter을 통해 사용자가 접속한 URL을 보고 그에 맞는 컴포넌트를 그려주게 됨 
// 라우터 추가하기
import About from './routes/About';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';

function App() {
    return (
        // // 라우터 테스트하기 #01
        // <HashRouter>
        //     <Route path="/home">
        //         <h1>Home</h1>
        //     </Route>
        //     <Route path="/home/introduction">
        //         <h1>Introduction</h1>
        //     </Route>
        //     <Route path="/about">
        //         <h1>About</h1>
        //     </Route>

        // exact={ true }를 추가해줌으로써, 정확히 일치해야만 호출하게 함
        <HashRouter>
            <Navigation />
            <Route path="/" exact={ true } component={ Home } />
            <Route path="/about" component= { About } />
            <Route path="/movie-detail" component= { Detail } />
        </HashRouter>
    );
}

export default App;