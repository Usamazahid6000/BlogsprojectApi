import React, { useState, useEffect } from "react";
import car from "../images/car.png";
import axios from "axios";
import { Link } from "react-router-dom";
import { incrementViews } from "../Redux/Slices";
import { useSelector, useDispatch } from "react-redux";
import Loader from "./Loader";
// import Thememode from "./Thememode";
import { selectTheme } from "../Redux/Slices";

const Blogspost = ({ payloadData }) => {
  const [blogsdata, setBlogsdata] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  const totalViews = useSelector(
    (state) => state.counter.value[payloadData] || 0
  );
  // totalViews can be used that how many time user click each Blog-post.

  //  This useSelector is used to get the value of the current theme globally,

  const isselectTheme = useSelector(selectTheme);

  const Modeclass = isselectTheme.mode;

  const loadBlogs = async () => {
    setIsLoading(true);
    const Api_URL = "https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/";
    try {
      let response = await axios.get(Api_URL);
      setBlogsdata(response.data);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false); // Hide loading screen
    if (error) {
      return <p>Error:{error}</p>;
    }
  };

  useEffect(() => {
    if (isLoading) {
      loadBlogs();
    }
  }, [isLoading]);

  return (
    <>
      {/* banner section */}
      <div className="banner-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7 padding-zero-lr">
              <div className="blog-image">
                <h1>Our Blog</h1>
              </div>
            </div>
            <div className="col-md-5 padding-zero-lr">
              <div className="div-2">
                <h4>Diagnose Car Problems If You Don’t Know Much About Cars</h4>
                <br />
                <p>
                  We provide a full range of front end mechanical repairs for
                  all makes and models of cars, no matter the cause. This
                  includes, We provide a full range of front end mechanical.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`all-main ${Modeclass}`}>
        {/* card section start */}
        <section className={`card-section ${Modeclass}`}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className={`card-body ${Modeclass}`}>
                    <div className="left-card">
                      <div className="body-head">
                        <img src={car} alt="" />
                      </div>
                      <div className="right-card">
                        <div className="card-intro">
                          <div className="card-date">
                            <p className={Modeclass}>
                              Posted on October 6th 2021
                            </p>
                            <span>
                              <p>563 views</p>
                            </span>
                          </div>
                          <div className="featured">
                            <p>FEATURED</p>
                          </div>
                        </div>
                        <div className="card-text">
                          <p className={Modeclass}>
                            Should I Buy a New Car or Lease a New Car in
                            <br /> 2021?
                          </p>
                        </div>
                        <div className="card-content">
                          <p className={Modeclass}>
                            We provide a full range of front end mechanical
                            repairs for all makes and models of cars, no matter
                            the cause. This includes, We provide a full range of
                            front end mechanical.
                          </p>
                        </div>
                        <div className="read-main">
                          <div className="read-more">
                            <p>Read more</p>
                          </div>
                          <div className="read-more-icon">
                            <svg
                              width="51"
                              height="16"
                              viewBox="0 0 51 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M50.7071 8.70711C51.0976 8.31658 51.0976 7.68342 50.7071 7.29289L44.3431 0.928932C43.9526 0.538408 43.3195 0.538408 42.9289 0.928932C42.5384 1.31946 42.5384 1.95262 42.9289 2.34315L48.5858 8L42.9289 13.6569C42.5384 14.0474 42.5384 14.6805 42.9289 15.0711C43.3195 15.4616 43.9526 15.4616 44.3431 15.0711L50.7071 8.70711ZM0 9H50V7H0V9Z"
                                fill="#1E1B1B"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* // blog post section Api calls */}
        <div className="blog-background">
          <div className="container">
            <div className="row">
              {isLoading ? (
                <Loader />
              ) : (
                blogsdata?.slice(0, 9).map((data, id) => {
                  return (
                    <div className="col-md-4" key={id}>
                      <Link to={`/singelblog/${data.id}`}>
                        <img
                          src={data.Image}
                          alt=""
                          className="blog-picture"
                          loading="lazy"
                          onClick={() =>
                            dispatch(incrementViews({ bogId: data.id }))
                          }
                        />
                      </Link>

                      <div className="blog-intro">
                        <div className="blog-date">
                          <p className={Modeclass}>
                            Posted on October 6th 2021
                          </p>
                        </div>
                        <div className="blog-icon">
                          <span>
                            <svg
                              width="22"
                              height="16"
                              viewBox="0 0 22 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19.8698 6.962C20.3438 7.582 20.3438 8.419 19.8698 9.038C18.3768 10.987 14.7948 15 10.6128 15C6.4308 15 2.8488 10.987 1.3558 9.038C1.12519 8.74113 1 8.37592 1 8C1 7.62408 1.12519 7.25887 1.3558 6.962C2.8488 5.013 6.4308 1 10.6128 1C14.7948 1 18.3768 5.013 19.8698 6.962V6.962Z"
                                stroke="#B8B8B8"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M10.6133 11C12.2701 11 13.6133 9.65685 13.6133 8C13.6133 6.34315 12.2701 5 10.6133 5C8.95643 5 7.61328 6.34315 7.61328 8C7.61328 9.65685 8.95643 11 10.6133 11Z"
                                stroke="#B8B8B8"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <p className={Modeclass}>563 views</p>
                        </div>
                      </div>
                      <div className="blog-content-1">
                        <p className={Modeclass}>{data.Title} </p>
                      </div>
                      <div className="blog-content-2">
                        <p className={Modeclass}>{data.Subtitle}</p>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogspost;
