import React, { Component } from 'react';
import css from './styles.module.css';
import * as API from 'services/pixabayApi';

import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Loader } from './Loader/Loader';
// import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';


export class App extends Component {
  state = {
    images: [],
    totalImages: 0,
    page: 1,
    isLastPage: false,
    query: '',
    error: null,
    // status: idle,
  };






  handleFormSearchSubmit = query => {
    // const queryNormalized = query.trim();

    this.setState({
      images: [],
      totalImages: null,
      page: 1,
      isLastPage: false,
      query: query,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  // handleLoadMore = () => {
  //   this.setState({ page: prevState.page + 1 });
  // };

  render() {
    return (
      <div className={css.App}>
        <Searchbar onSearch={this.handleFormSearchSubmit} />
        {/* <ImageGallery /> */}
        <Loader />
        <Button handleLoadMore={this.handleLoadMore}></Button>       
      </div>
    );
  }
}
