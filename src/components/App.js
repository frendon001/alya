import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import SearchPhotosPage from './pages/SearchPhotosPage';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <div className="ui container">
            <Header />
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit" exact component={StreamEdit} />
            <Route path="/streams/delete" exact component={StreamDelete} />
            <Route path="/streams/show" exact component={StreamShow} />
            <Route path="/search" exact component={SearchPhotosPage} />
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
