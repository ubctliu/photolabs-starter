import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from './PhotoList';
import TopNavigationBar from './TopNavigationBar';

const HomeRoute = (props) => {
  const {favorites, topics, photos, selected, displayAlert, addFavPhoto, removeFavPhoto, iconLiked, iconUnliked} = props;
  const isFavPhotoExist = favorites.size > 0 ? true : false;
  const isPhotoFavorited = (photo) => {
    return favorites.has(photo);
  };

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} isFavPhotoExist={isFavPhotoExist}/>
      <PhotoList photos={photos} selected={selected}  displayAlert={displayAlert} setFavorites={addFavPhoto} removeFromFavorites={removeFavPhoto} onClick={props.onClick} isPhotoFavorited={isPhotoFavorited} iconLiked={iconLiked} iconUnliked={iconUnliked} />
    </div>
  );
};

export default HomeRoute;