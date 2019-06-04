import React from 'react';
import { StyleSheet, View } from 'react-native';
import { combineReducers, createStore, Dispatch } from 'redux';
import { Provider, connect } from 'react-redux';
import { Action } from 'typescript-fsa';

import { reducer, State } from './src/reducers/CounterReducer';
import { actions } from './src/actions/CounterAction';
import Counter from "./src/components/Counter"

type AppState = {
  state: State
};

const store = createStore(
  combineReducers<AppState>({
    state: reducer
  })
);

// Connect
function mapStateToProps(appState: AppState) {
  return Object.assign({}, appState.state);
}

function mapDispatchToProps(dispatch: Dispatch<Action<any>>) {
  return {
    update: (v: number) => dispatch(actions.update(v)),
  };
}

const MyAPP = connect(mapStateToProps, mapDispatchToProps)(Counter);

//APP
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MyAPP />
        </View>
      </Provider>
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