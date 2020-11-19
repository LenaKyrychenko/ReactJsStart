import React from "react";
import ReactDom from "react-dom";
import "./styles.css";

const movie = {
  title: "Marvel",
  vote: "10.0",
  img:
    "https://marvel.com.ru/imagecache/original/uploads/images/ijxnlQQKTrli20VLjU7G.jpg",
  overview:
    "MARVEL представляет самый ожидаемый фильм киновселенной: завершение эпической саги об известнейших супергероях в мире! Оставшиеся в живых члены команды Мстителей и их союзники должны разработать новый план, который поможет противостоять разрушительным действиям могущественного титана Таноса. После наиболее масштабной и трагической битвы в истории они не могут допустить ошибку."
};

function Image(props) {
  return <img src={props.src} alt={props.alt} />;
}

/*function MovieItem(props){
  const { data:{title, vote, img}} = props;
  return(
    <div>
      <Image src = {img} alt={title}/>
      <p>{title}</p>
      <p>{vote}</p>
    </div>
  );
}*/

class MovieItem extends React.Component {
  render() {
    const {
      data: { title, vote, img }
    } = this.props;
    return (
      <div>
        <Image src={img} alt={title} />
        <p>{title}</p>
        <p>{vote}</p>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <MovieItem data={movie} />
    </div>
  );
}

export default App;

//ReactDom.render(<App />, document.getElementById("root"));
