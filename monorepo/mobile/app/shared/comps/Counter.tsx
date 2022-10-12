/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Button, StyleSheet, View } from "react-native";

// const centered: ViewStyle = {
//   alignItems: "center",
//   justifyContent: "center",
// };

const styles = StyleSheet.create({
  kontenjer: { display: "flex", flex: 1 },
});
//
export default function Counter() {
  const [count, countSet] = useState(0);

  const handleCount = () => {
    countSet(count + 1
    )
  }

  return (
    <View style={styles.kontenjer}>
      <Button onPress={handleCount} title={'alo'} />
    </View>
  );
}
