import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Form from "./components/Form"
import Table from "./components/Table"
import Loading from "./components/Loading"
import ErrorMessage from './components/ErrorMessage';

import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // function get data
  async function getData() {
    try {
      // set loading
      setLoading(true)
      const api = "https://www.googleapis.com/books/v1/volumes?q=webdesign"
      // fetch api "make request"
      const res = await axios.get(api);
      // set data
      setData(res.data.items);
      // extra copy of data
      setFilteredData(res.data.items);
      // stop loading
      setLoading(false)
    } catch (error) {
      // log error to console
      console.error(error);
      // set error true to show message to user
      setError(true)
    }
  }

  // handel selected value
  function handelChange(event) {
    if (event.target.value === 'all') {
      setFilteredData(data);
    } else {
      const res = [...data].filter(
        item => item.volumeInfo.publishedDate === event.target.value,
      );
      setFilteredData(res);
    }
  }

  // loading data
  useEffect(() => {
    getData();
  }, []);

  return (
    <Fragment>
      {error ? <ErrorMessage /> :
        <div className="App">
          <Form handelChange={handelChange} data={data} loading={loading} />
          {!loading ? (
            <Table filteredData={filteredData} />
          ) : (
              <Loading />
            )}
        </div>
      }
    </Fragment >
  );
}

// export whole application
export default App;
