import { StyleSheet } from "react-native";

export default StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    marginBottom: "3%",
  },
  titulo: {
    fontSize: 25,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    color: "#e97a47",
  },
  input: {
    borderColor:  "#e97a47",
    backgroundColor: "#FFF",
    borderWidth: 1,
    width: "90%",
    marginBottom: 40,
    color: "#222",
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  Button: {
    backgroundColor: "#9932CC",
    width: "90%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
  ButtonPerfil: {
    borderColor:  "#808080",
    backgroundColor: "#FFF",
    borderWidth: 4,
    width: "90%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
  submitText: {
    color: "#FFF",
    fontSize: 18,
  },
  submitTextPerfil: {
    color: "#808080",
    fontSize: 18,
  },
});
