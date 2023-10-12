import { MovieDetailsWrapper } from "./styled";
import MovieTopInfo from "./MovieTopInfo";
import MoviePeople from "./MoviePeople";
import { useDispatch, useSelector } from "react-redux";
import {
  getMovieId,
  selectDetails,
  selectStatus,
  fetchMovieDetailsLoad,
} from "./movieDetailsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { imageUrl } from "../../common/imageUrl";
import Loading from "../Actions/Loading";

const MovieDetails = () => {
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { title, backdrop_path, vote_average, vote_count } =
    useSelector(selectDetails) ?? {};

  useEffect(() => {
    dispatch(getMovieId(id));
  }, [status, dispatch, id]);

  useEffect(() => {
    dispatch(fetchMovieDetailsLoad());
  }, [dispatch]);

  return status === "success" ? (
    <>
      <MovieDetailsWrapper>
        <MovieTopInfo
          background={imageUrl + backdrop_path}
          title={title}
          votes={vote_count}
          rating={Number(vote_average)}
        />
        <MoviePeople />
        <MoviePeople />
      </MovieDetailsWrapper>
    </>
  ) : (
    <Loading $titleHidden />
  );
};

export default MovieDetails;
