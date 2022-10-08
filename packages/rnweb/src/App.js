import { StyleSheet, Text, View } from "react-native";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d0fa91",
    display: "flex",
    flex: 1,
  },
});

function App() {
  return (
    <>
      <View style={styles.container}>
        <Text>alo medo</Text>
      </View>
    </>
  );
}

export default App;
