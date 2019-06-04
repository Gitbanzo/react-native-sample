import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

type Movie = {
  id: number,
  name: string
}

type Props = {}

interface State {
  movies: Array<Movie>
}

export default class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      movies: []
    }
    // Movie一覧取得
    axios.get("http://localhost:3000/movies").then((res) => {
      this.setState({ movies: res.data })
    });

  }

  // Movie一覧描画
  _rederMovies() {
    if (Object.keys(this.state.movies).length <= 0) {
      return null;
    }
    return (
      <View>
        {this.state.movies.map(movie =>
          <Text key={movie.id}>{movie.name}</Text>
        )}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Movies</Text>
        {this._rederMovies()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
