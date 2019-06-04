import React from "react";
import { Action } from 'typescript-fsa';
import { Button, StyleSheet, Text, View } from "react-native";

interface Props {
  count: number;
  update: (v: number) => Action<number>;
}

class Counter extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  onUp = () =>
    this.props.update(this.props.count + 1);

  onDown = () =>
    this.props.update(this.props.count - 1);

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.greeting}>
          Count:{" "}{this.props.count}
        </Text>

        <View style={styles.buttons}>
          <Button title="+" onPress={this.onUp} color="blue" />
          <Button title="-" onPress={this.onDown} color="red" />
        </View>
      </View>
    );
  }
}

export default Counter;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    alignSelf: "center"
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center"
  },
  button: {
    fontSize: 20
  },
  greeting: {
    color: "gray",
    fontWeight: "bold",
    fontSize: 30
  }
});