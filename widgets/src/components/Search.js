import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  console.log(results);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("http://ja.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    if (term) {
      search();
    }
  }, [term]);
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter Search</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <Form.Text className="">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Search;
