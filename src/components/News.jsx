import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import PropTypes from "prop-types";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  document.title = props.category;

  const update = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=1b8f81d3d95c4e43b0b95b3011937b88&page=${page}&pageSize=15`;
    let getdate = await fetch(url);
    let converted = await getdate.json();
    setarticles(converted.articles);
    settotalResults(converted.totalResults);
  };
  // async componentDidMount() {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=1b8f81d3d95c4e43b0b95b3011937b88&page=1&pageSize=15`;
  //   // let getdate = await fetch(url);
  //   // let converted = await getdate.json();
  //   // this.setState({
  //   //   articles: converted.articles,
  //   //   totalResults: converted.totalResults,
  //   // });

  // }

  // useEffect(() => {
  //   update();
  // }, []);

  // const handleprevious = async () => {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
  //   //   props.category
  //   // }&apiKey=1b8f81d3d95c4e43b0b95b3011937b88&page=${
  //   //   this.state.page - 1
  //   // }&pageSize=15`;
  //   // let getdate = await fetch(url);
  //   // let converted = await getdate.json();
  //   // this.setState({ page: this.state.page - 1, articles: converted.articles });

  //   // this.setState({ page: this.state.page - 1 });
  //   setpage(page - 1);
  //   update();
  // };

  // const handlenext = async () => {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
  //   //   props.category
  //   // }&apiKey=1b8f81d3d95c4e43b0b95b3011937b88&page=${
  //   //   this.state.page + 1
  //   // }&pageSize=15`;
  //   // let getdate = await fetch(url);
  //   // let converted = await getdate.json();
  //   // this.setState({ articles: converted.articles, page: this.state.page + 1 });

  //   // this.setState({ page: this.state.page + 1 });
  //   setpage(page + 1);
  //   update();
  // };

  const handleprevious = async () => {
    setpage((prevPage) => prevPage - 1);
  };

  const handlenext = async () => {
    setpage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=1b8f81d3d95c4e43b0b95b3011937b88&page=${page}&pageSize=15`;
      let getdate = await fetch(url);
      let converted = await getdate.json();
      setarticles(converted.articles);
      settotalResults(converted.totalResults);
    };

    fetchData();
  }, [page, props.category]);

  return (
    <div className="container my-10">
      <h1 style={{ marginTop: "60px" }}>Todays Headline -- Taaza Khabar</h1>
      <div className="row">
        {articles.map((element) => {
          return (
            <div className="col-md-4 my-5" key={element.url}>
              <Newsitem
                newstitle={element.title ? element.title.slice(0, 45) : ""}
                newsdesc={
                  element.description ? element.description.slice(0.88) : ""
                }
                imageUrl={
                  element.urlToImage
                    ? element.urlToImage
                    : "https://images.macrumors.com/t/GBQdcdJQVWopDyQh1iW7Psj9kcU=/2880x/article-new/2023/09/Apple-Watch-Series-9.jpg"
                }
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
              />
            </div>
          );
        })}
      </div>
      <div className="container mb-5 d-flex justify-content-between">
        <button
          type="button"
          disabled={page < 2}
          onClick={handleprevious}
          class="btn btn-dark btn-sm "
        >
          Previous
        </button>
        <button
          type="button"
          // disabled={}
          onClick={handlenext}
          class="btn btn-dark btn-sm"
          disabled={page >= Math.ceil(totalResults / 15)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default News;
News.defaultProps = {
  category: "general",
};
News.propTypes = {
  category: PropTypes.string,
};
