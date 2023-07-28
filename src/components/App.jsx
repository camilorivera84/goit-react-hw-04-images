import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

const API_KEY = '37660619-57c515de7526ffff07433eaf8';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: '',
      images: [],
      loading: false,
      page: 1,
      selectedImage: null,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;

    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    try {
      this.setState({ loading: true });
      const { searchQuery, page } = this.state;
      const response = await axios.get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      // Si es la primera página, reinicia el estado de imágenes
      if (page === 1) {
        this.setState({ images: response.data.hits });
      } else {
        // Si no es la primera página, agrega las nuevas imágenes a las existentes
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
        }));
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      this.setState({ loading: false });
    }
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, images: [], page: 1 });
  };

  handleImageClick = image => {
    this.setState({ selectedImage: image });
  };

  handleCloseModal = () => {
    this.setState({ selectedImage: null });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, loading, selectedImage } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {loading && <Loader />}
        {images.length > 0 && !loading && (
          <Button onClick={this.handleLoadMore} />
        )}
        {selectedImage && (
          <Modal image={selectedImage} onClose={this.handleCloseModal} />
        )}
      </div>
    );
  }
}

export default App;
