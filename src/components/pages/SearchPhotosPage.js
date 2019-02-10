import React from 'react';
import SearchBar from '../photos/SearchBar';
import ImageList from '../photos/ImageList';
import { connect } from 'react-redux';
import { fetchPhotos } from '../../actions';
import { bindActionCreators } from 'redux';

class SearchPhotosPage extends React.Component {
  state = { images: [] };

  onSearchSubmit = term => {
    this.props.fetchPhotos(term, 1);
  };

  render() {
    const photos = this.props.photos;
    return (
      <div style={{ marginTop: '10px' }}>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPhotos }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPhotosPage);
