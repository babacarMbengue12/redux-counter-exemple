import React from "react";
import { connect } from "react-redux";
import { Text } from "react-native";

const TotalValue = ({ total }) => {
  return (
    <Text style={{ marginVertical: 10, fontSize: 12, textAlign: "center" }}>
      la somme total des compteurs: {total}
    </Text>
  );
};

const mapState = (state) => {
  //sommer les compteurs
  return {
    total: state.counters.reduce((acc, cur) => {
      return acc + cur.value;
    }, 0),
  };
};
export default connect(mapState)(TotalValue);
