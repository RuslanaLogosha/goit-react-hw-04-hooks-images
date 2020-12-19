import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import './app.css';

import pixabayApi from './components/pixabay-api';
import ImagesErrorView from './components/ImagesErrorView';
import ImagePendingView from './components/ImagePendingView';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Searchbar from './components/Searchbar';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function App() {
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [requestKey, setRequestKey] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);

  const handleFormSubmit = newRequestKey => {
    if (newRequestKey === requestKey) {
      return;
    }
    setRequestKey(newRequestKey);
    setPage(1);
    setImages([]);
  };

  useEffect(() => {
    if (!requestKey) {
      return;
    }

    const renderImages = () => {
      setStatus(Status.PENDING);

      pixabayApi
        .fetchImages(requestKey, page)
        .then(response =>
          setImages(prevState => [...prevState, ...response.hits]),
        )
        .catch(error => {
          setError(error);
          setStatus(Status.REJECTED);
        })
        .finally(() => setStatus(Status.RESOLVED));
    };

    renderImages();
  }, [requestKey, page]);

  const onLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit}></Searchbar>
      <ToastContainer autoClose={3000} />

      {status === Status.IDLE && (
        <p className="welcomeText">Please enter your search term</p>
      )}

      {status === Status.PENDING && <ImagePendingView />}

      {status === Status.REJECTED && (
        <ImagesErrorView message={error.message} />
      )}

      {status === Status.RESOLVED && (
        <>
          <ImageGallery images={images} />
          <Button onClick={onLoadMore} />
        </>
      )}
    </>
  );
}

App.propTypes = {
  requestKey: PropTypes.string,
  page: PropTypes.number,
  images: PropTypes.array,
};
