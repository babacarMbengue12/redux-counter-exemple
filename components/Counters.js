import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import Counter from "./Counter";

const Counters = ({ counters }) => {
  if (counters.length === 0) {
    return (
      <Text style={{ textAlign: "center", marginTop: 20 }}>
        Pas de compteur
      </Text>
    );
  }
  return (
    <View style={{ marginTop: 20 }}>
      {counters.map((c) => (
        <Counter counter={c} key={c.id} />
      ))}
    </View>
  );
};

const mapState = (state) => {
  return {
    counters: state.counters,
  };
};
export default connect(mapState)(Counters);
