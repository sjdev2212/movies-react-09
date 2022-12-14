import React from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const Searcher = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const word = e.currentTarget.keyword.value.trim();
    if (word === "") {
      swal("Please enter something to search ");
    } else if (word.length < 4) {
      swal("Please enter at least 4 characters");
    } else {
      e.currentTarget.keyword.value = "";
      navigate(`/results/${word}`);
    }
  };
  return (
    <form className="d-flex align-items-center" onSubmit={handleSubmit}>
      <label className="form-label mb-0 mx-2">
        <input
          type="text"
          className="form-control"
          name="keyword"
          placeholder="Enter Movie"
        />
      </label>
      <button type="submit" className="btn btn-success">
        Search
      </button>
    </form>
  );
};

export default Searcher;
