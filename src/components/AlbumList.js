import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

type State = {
  albums: number,
};
class AlbumList extends Component<{}, State> {
  state = {
    albums: [],
  };

  componentWillMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album => {
      return <AlbumDetail key={album.title} album={album} />;
    });
  }

  render() {
    console.log(this.state);

    return <View>{this.renderAlbums()}</View>;
  }
}

export default AlbumList;
