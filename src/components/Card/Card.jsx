import React, { useEffect, useState } from "react";
import sprite from "assets/Images/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { changeFavorite } from "../../redux/slice";
import { fetchCatalog } from "../../redux/operation";
import {
  selectItemsPerPage,
  selectPage,
  selectIsLoading,
} from "../../redux/selector";
import { setPage } from "../../redux/slice";
import {
  Wrapper,
  Button,
  Text,
  Icon as LocationIcon,
  LocationCity,
  ReviewsLink as ReviewLink,
  Icon as ReviewIcon,
  Price,
  Icon as StarIcon,
  InfoContainer,
  ReviewLocationWrap,
  HeaderContainer,
  PriceContainer,
  Btn,
} from "./CombinedComponent.styled";
import { FullScreenLoader } from "../Loader/Loader";

const CombinedComponent = ({ catalog }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const currentPage = useSelector(selectPage);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const favorite = useSelector(selectFavorite);

  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(setPage(1));
    dispatch(fetchCatalog());
  }, [dispatch]);

  const handleFavorite = (card) => {
    dispatch(changeFavorite(card));
  };

  const toggleModal = (card) => {
    setIsModalOpen((prevState) => !prevState);
    setSelectedCard(card);
  };

  const handleLoadMore = () => {
    dispatch(setPage(currentPage + 1));
    dispatch(fetchCatalog());
  };

  const currentCatalog = catalog.slice(0, currentPage * itemsPerPage);

  return (
    <Wrapper>
      {isLoading && <FullScreenLoader />}
      {currentCatalog.map((card) => (
        <div key={card._id}>
          <CardPicture img={card.gallery[0]} name={card.name} />
          <InfoContainer>
            <HeaderContainer>
              <CardTitle title={card.name} />
              <PriceContainer onClick={() => handleFavorite(card)}>
                <CardPrice price={card.price} />
                <Btn>
                  <Icon>
                    <use
                      href={
                        favorite.some((item) => item._id === card._id)
                          ? `${sprite}#heart-liked`
                          : `${sprite}#heart`
                      }
                      aria-label="heart icon"
                    ></use>
                  </Icon>
                </Btn>
              </PriceContainer>
            </HeaderContainer>
            <ReviewLocationWrap>
              <CardReview rating={card.rating} reviews={card.reviews} />
              <CardLocation location={card.location} />
            </ReviewLocationWrap>
            <CardDescription description={card.description} />
            <CardFeatureList details={card.details} quantity={6} />
            <Button text={"Show more"} onClick={() => toggleModal(card)} />
          </InfoContainer>
        </div>
      ))}

      {currentCatalog.length < catalog.length && !isLoading && (
        <Button onClick={handleLoadMore}>
          <Text>Load More</Text>
        </Button>
      )}

      {isModalOpen && (
        <ModalCard onToggle={toggleModal} cardInfo={selectedCard} />
      )}
    </Wrapper>
  );
};

export default CombinedComponent;