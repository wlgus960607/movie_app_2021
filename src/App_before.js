import React from 'react';
import axios from 'axios'; // ajax, fetch 등등이 있다.
import Movie from '../components/Movie';
import "./App.css";


// 4.0 강의부터
class App extends React.Component{
    state = {
        isLoading: true,
        movies: []
    };

    // 코드가 실행되면 API 호출하기
    // APIs를 호출하기 위한 시간이 필요하기 때문에 await가 필요 - await를 쓰기 위해서는 async가 필요함
    getMovies = async () => {
        // // 이렇게 표현해도 되지만, 복잡하므로, 
        // const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
        // console.log(movies.data.data.movies);
        // 아래 방식으로 호출
        const {
            data: {
                data: { movies }
            }
        } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
        // // this.setState를 이용해서 movie state에 영화 데이터 저장 ({ state : axios에서 온 변수})
        // this.setState({ moives : movies });
        // // 그런데 이걸 축약할 수 있음
        // this.setState({ movies }); - ES6에서 제공하는 객체분할할당
        
        // // 이제 이걸로 loading 상태 등을 변경해보자 
        // ㄴ 내가 가져온 movies와 넣을 movies가 같기 때문에 하나로 넣어준것이고, 바꿀 속상: 바꿔줄 속성
        // ㄴ state를 바꿜거다 - movies에 movies로 넣어줄거야 (이름이 같으니까 한번만 쓸게)
        // ㄴ state를 바꿀거다 - isLoading에 false 값을 넣어줄게
        this.setState({ movies, isLoading: false });
    };

    // 컴포넌트가 생성되면 할 일
    componentDidMount() {
        this.getMovies();
    };

    render() {
        const { isLoading, movies } = this.state;
        return (
        <section className = "container"> 
        { isLoading ? (
                <div className = "loader">
                    <span className = "loader__text"> Loading... </span>
                </div>
            ) : (
                <div className = "movies">
                    {movies.map((movie => (
                            <Movie 
                                key={movie.id}
                                id={movie.id} 
                                year={movie.year} 
                                title={movie.title} 
                                summary= {movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                    )))}
                </div>
            )}
        </section>
        );
    }
}

export default App;