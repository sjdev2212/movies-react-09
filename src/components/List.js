import { useNavigate,Link} from "react-router-dom";
import { useEffect, useState } from "react";
import swal from '@sweetalert/with-react';
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import axios from "axios";
import './list.css'

const List = ({addToFav}) => {
  const navigate = useNavigate();
  const apiUrl =  "https://api.themoviedb.org/3/discover/movie?api_key=5e63572e6af98e257733a794be08a3f8&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_watch_monetization_types=flatrate"
  const [peliculas, setPeliculas] = useState([]);
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/");

    }
    axios.get(apiUrl).then(res => {
      setPeliculas(res.data.results);
    })
    .catch(err => {
      swal(<h2>Network errors, try again</h2>)
    })
   
  }, [ navigate]);
return (
  <>
    <div className="container text-center mt-5">
      <div className="row align-items-start">
        {peliculas.map((pelicula) => (
          <div className="col-12 col-md-6 col-lg-4" key={pelicula.id}>
            <div className="card mb-3" style={{ width: "16rem", height: "30rem" }}>
              <img
                style={{ width: "16rem", height: "18rem" }}
                src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
                className="card-img-top"
                alt="poster"
              />
              <button
                onClick={addToFav}
                type="submit"
                movieid={pelicula.id}
                className="btn-fav"
              >
                <BsFillEmojiHeartEyesFill className="icon" />
              </button>
              <div className="card-body">
                <h5 className="card-title " style={{ fontSize: "18px" }}>
                  {pelicula.title}
                </h5>
                <p className="card-text"  style={{ fontSize: "15px" }}>
                  {pelicula.overview.substr(0, 50)}...
                </p>
             
              </div>
              <Link
                  to={`/detalle/${pelicula.id}`}
                  className="btn btn-primary btn-sm mb-3 "
                  style={{width: "5rem", height: "2rem",display: "block", margin: "auto", fontSize: "13px",alignItems: "center", justifyContent: "center"}}
                >
                  See More
                </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
);

};

export default List;