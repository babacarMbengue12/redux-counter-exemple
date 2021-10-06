import React from "react";
import { Button } from "react-native";
import { connect } from "react-redux";
import { onAddCounter } from "../redux/counterReducer";

const AddCounterButton = ({ onAddCounter }) => {
  return (
    <Button
      color="#000"
      title="Ajouter un compteur"
      onPress={() => onAddCounter()}
    />
  );
};

export default connect(null, { onAddCounter })(AddCounterButton);
