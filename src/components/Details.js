import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const [detalle, setDetalle] = useState([]);

  const params = useParams();
  const apiEndpoint = `https://api.themoviedb.org/3/movie/${params.id}?api_key=5e63572e6af98e257733a794be08a3f8&language=en-US`;

  useEffect(() => {
    axios.get(apiEndpoint).then((res) => {
      setDetalle(res.data);
    });
  }, [setDetalle, apiEndpoint]);

  return (
    <>
      <div className="row">
        <h2>{detalle.title}</h2>
        <div className="col-4">
          <img
            src={`https://image.tmdb.org/t/p/w500/${detalle.poster_path}`}
            className="card-img-top"
            alt="..."
          />
        </div>
        <div className="col-8">
          <p>{detalle.overview}</p>
        </div>
      </div>
    </>
  );
};

export default Details;
