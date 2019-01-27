import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import { connect } from 'react-redux';
import { fetchPhotos } from '../actions';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = term => {
    this.props.fetchPhotos(term, 1);
  };

  render() {
    const photos = this.props.photos;
    console.log(photos);
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {photos.length} images
        <ImageList images={photos} />
      </div>
    );
  }
}

function mapStateToProps({ photos }) {
  return { photos };
}

export default connect(
  mapStateToProps,
  { fetchPhotos }
)(App);
