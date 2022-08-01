import React from "react";
import {Dimensions,  StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import colors from "../Colors";
import TodoModal from "./TodoModal";
const { height, width } = Dimensions.get("screen")

export default class TodoList extends React.Component {
  state = {
    showListVisible: false,
  };

  toggleListModal() {
    this.setState({ showListVisible: !this.state.showListVisible });
  }
  render() {
    const list = this.props.list;
    const completedCount = list.todos.filter((todo) => todo.completed).length;
    const remainingCount =list.todos.length - completedCount;

    return (
      <View style={styles.container}>
        <Modal
          animationType="fade"
          visible={this.state.showListVisible}
          onRequestClose={() => this.toggleListModal()}
        >
           {/* -=-=-=-=-=-Todo modal list we pass a list and some other funcs to the it */}
          <TodoModal
            list={list}
            closeModal={() => this.toggleListModal()}
            updateList={this.props.updateList}
          />
          
        </Modal>
        <TouchableOpacity
          style={[styles.listContainer, { backgroundColor: list.color }]}
          onPress={() => this.toggleListModal()}
        >
          <Text style={styles.listTitle} numberOfLines={1}>
            {list.name}
          </Text>
          <View>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.count}>{remainingCount}</Text>
              <Text style={styles.subtitle}> Remaining </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
  listContainer: {
    flexDirection: "row",
    marginBottom: 5,
    paddingVertical: 1,
    paddingHorizontal: 1,
    borderRadius: 2,
    marginHorizontal: 1,
    alignItems: "center",
    width: width/1.1,
  },
  listTitle: {
    flex: 1,
    margin: 10,
    fontSize: 24,
    fontWeight: "700",
    color: colors.white,
    marginBottom: 18,
  },
  count: {
    fontSize: 20,
    fontWeight: "200",
    color: colors.white,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.white,
  },
});
