import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Singelblog = () => {
  const { id } = useParams();

  const [singelblog, setSingelblog] = useState({});
  const [text, setText] = useState("");
  const [filterdata, setFilterdata] = useState([]);
  // console.log(filterdata,'filterdata');
  const [error, setError] = useState(null);
  const [check, setCheck] = useState();

  // console.log(check, "check");

  const inputHandler = (event) => {
    setText(event.target.value);
  };

  const checkHandler = (event, row) => {
    const arr = [...filterdata];
    const filtered = arr?.filter((item) => item?.Postcode === row?.Postcode);
    if (filtered?.length > 0) {
      const filtered = arr?.filter((item) => item?.Postcode !== row?.Postcode);
      setFilterdata(filtered);
    } else {
      arr.push(row);
      setFilterdata(arr);
    }
    setCheck(event.target.checked);
  };

  const tableData = [
    {
      Address: "Formanstar5",
      Postcode: "22303",
      propertyType: "flat",
      numofRooms: "5",
      Floorare: "48",
    },
    {
      Address: "steinstra",
      Postcode: "20095",
      propertyType: "Terraced house",
      numofRooms: "7",
      Floorare: "63",
    },

    {
      Address: "Himmesitra2",
      Postcode: "22299",
      propertyType: "semi-detached",
      numofRooms: "3",
      Floorare: "22",
    },

    {
      Address: "Alte Schieuse23",
      Postcode: "21107",
      propertyType: "Terraced house",
      numofRooms: "4",
      Floorare: "54",
    },
  ];

  useEffect(() => {
    if (text == "") {
      setFilterdata([]);
    } else {
      const searchData = tableData.filter((item, ele) => {
        return item.Address.toLowerCase().includes(text);
      });
      setFilterdata(searchData);
    }
  }, [text]);

  const singelblogloads = async () => {
    const API_URL_ID = `https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/${id}`;

    try {
      let response = await axios.get(API_URL_ID);
      // console.log(response.data)
      setSingelblog(response.data);
    } catch (err) {
      setError(err.message);
    }

    if (error) {
      return <p>Error:{error}</p>;
    }
  };

  useEffect(() => {
    singelblogloads();
  }, [id]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <section className="singel-blog">
              <div className="singelblog-list">
                <div className="Sblog-date">
                  <p>Posted on October 6th 2021</p>
                </div>
                <div className="Sblog-viewcounter">
                  <span>
                    text
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
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.6133 11C12.2701 11 13.6133 9.65685 13.6133 8C13.6133 6.34315 12.2701 5 10.6133 5C8.95643 5 7.61328 6.34315 7.61328 8C7.61328 9.65685 8.95643 11 10.6133 11Z"
                        stroke="#B8B8B8"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <p>563 views</p>
                  </div>
                </div>
              </div>
              <div className="Sblog-intro-text">
                <p>Should I Buy a New Car or Lease a New Car in 2021?</p>
              </div>
              <div className="Sblog-content">
                <p>
                  We provide a full range of front end mechanical repairs for
                  all makes and models of cars, no matter the cause. This
                  includes, We provide a full range of front end mechanical
                </p>
              </div>

              <div className="Sblog-picture">
                <img src={singelblog.Image} loading="lazy" alt="" />
              </div>
              <div className="blog-header">
                <h3>{singelblog.Title}</h3>
              </div>
              <div className="blogheader-content">
                <p>{singelblog.Subtitle}</p>
              </div>
            </section>
          </div>
        </div>

        <section className="search">
          <input type="text" placeholder="Search.." onChange={inputHandler} />
        </section>

        <section className="serach-data-list">
          <div className="table table-striped table-sm table-responsive">
            <thead>
              <tr>
                <th scope="col">✔</th>
                <th scope="col">Address</th>
                <th scope="col">Postcode</th>
                <th scope="col">propertyType</th>
                <th scope="col">Number ofRooms</th>
                <th scope="col">floor area</th>
              </tr>
            </thead>

            {filterdata && filterdata.length > 0 ? (
              filterdata.map((data, ele) => {
                //  console.log(data, "data");
                return (
                  <tbody>
                    <tr>
                      <th scope="row">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          ></label>
                        </div>
                      </th>
                      <td>{data.Address}</td>
                      <td>{data.Postcode}</td>
                      <td>{data.propertyType}</td>
                      <td>{data.numofRooms}</td>
                      <td>{data.Floorare}</td>
                    </tr>
                  </tbody>
                );
              })
            ) : (
              <tbody>
                <tr>
                  <th scope="row">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        class="form-check-label"
                        for="flexCheckDefault"
                      ></label>
                    </div>
                  </th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            )}
          </div>
        </section>

        <section className="search-tool-table ">
          <div className="search-table">
            <table class="table table-striped table-sm table-responsive">
              <thead>
                <tr>
                  <th scope="col">✔</th>
                  <th scope="col">Address</th>
                  <th scope="col">Postcode</th>
                  <th scope="col">propertyType</th>
                  <th scope="col">Numberofrooms</th>
                  <th scope="col">floor area</th>
                </tr>
              </thead>
              {tableData.map((value, element) => {
                //  console.log(value, "value");
                return (
                  <tbody>
                    <tr>
                      <th scope="row">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexCheckDefault"
                            key={element}
                            onChange={(e) => {
                              // console.log(e);
                              checkHandler(e, value);
                            }}
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          ></label>
                        </div>
                      </th>
                      <td>{value.Address}</td>
                      <td>{value.Floorare}</td>
                      <td>{value.Postcode}</td>
                      <td>{value.numofRooms}</td>
                      <td>{value.propertyType}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </section>
      </div>
    </>
  );
};

export default Singelblog;
