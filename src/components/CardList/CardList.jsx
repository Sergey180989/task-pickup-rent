import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectItemsPerPage, selectPage, selectIsLoading } from "../../redux/selector";
import { fetchCatalog } from "../../redux/operation";
import { setPage } from "../../redux/slice";
import { CardItem } from "../CardItem/CardItem";
import { FullScreenLoader } from "../Loader/Loader";
import "./CardList.css";

const CardList = ({ catalog }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const currentPage = useSelector(selectPage);
  const itemsPerPage = useSelector(selectItemsPerPage);

  useEffect(() => {
    dispatch(setPage(1));
    dispatch(fetchCatalog());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(setPage(currentPage + 1));
    dispatch(fetchCatalog());
  };

  const currentCatalog = catalog.slice(0, currentPage * itemsPerPage);

  return (
    <div className="card-list-wrapper">
      {isLoading && <FullScreenLoader />}
      {currentCatalog.map((card) => (
        <CardItem card={card} key={card._id} />
      ))}
      {currentCatalog.length < catalog.length && !isLoading && (
        <button className="load-more-btn" onClick={handleLoadMore}>
          <p className="load-more-text">Load More</p>
        </button>
      )}
    </div>
  );
};

export default CardList;