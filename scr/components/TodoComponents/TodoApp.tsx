import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
  Button,
  Animated,
} from "react-native";
import TodoList from "./subComponents/TodoList";
import AddListModal from "./subComponents/AddListModal";
import { AntDesign } from "@expo/vector-icons";
import colors from "./Colors";
import { Swipeable } from "react-native-gesture-handler";
const { height, width } = Dimensions.get("screen")


//-=-=-=-=-Firbase Imports--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=|||||||
import { db } from "../../constant/firebase";
import { collection, query, doc, addDoc, orderBy, onSnapshot, deleteDoc, updateDoc, } from "firebase/firestore";
//-=-==-=-=-=-=-=-=-=-=Firebasebaconnecction=-=-=-=-
const collectionRef = collection(db, "users/gtpJzC2ON31rskZphrQB/lists");

const TodoApp = () => {
  const [addTodoVisible, setAddtodoVisible] = useState<boolean>(false)
  const [lists, setLists] = useState([])
  const [user, setUser] = useState<{}>({})
  //-=-=-=-=-=-=-=-=-=-=-=-=- Methods-=-=-=-=-=-=-=-=-=|||||||||


  // get the lists with onSnapShot-=-=-=-=-=-=-=-=-=-=
  const getLists = () => {
    const orderLists = query(collectionRef, orderBy("name"));
    onSnapshot(orderLists, (data) => {
      let lists: [] = []
      data.docs.map((item) => {
        lists.push({ id: item.id, ...item.data() });
      });
      // console.log(lists)
      setLists(lists)
    });
  };
  const toggleAddTodoModal = () => {
    setAddtodoVisible(!addTodoVisible);
  }
  const updateList = async (list: any) => {
    const docRef = doc(db, `users/gtpJzC2ON31rskZphrQB/lists/${list.id}`);
    await updateDoc(docRef, list)
    let updatedLists = lists.map(item => {
      return item.id === list.id ? list : item
    })
    setLists(updatedLists)
  }



  const deleteList = (index: any,) => {
    const docToDelete = doc(db, `users/gtpJzC2ON31rskZphrQB/lists/${lists[index].id}`);
    deleteDoc(docToDelete);
  }

  const rightActions = (dragX, index) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0.9],
      extrapolate: "clamp"
    })
    const opacity = dragX.interpolate({
      inputRange: [-100, -20, 0],
      outputRange: [1, 0.9, 0],
      extrapolate: "clamp"
    })
    return (
      <TouchableOpacity onPress={() => deleteList(index)} >
        <Animated.View style={[styles.deleteBtn, { opacity: opacity }]}>
          <Animated.Text style={{ color: colors.white, fontWeight: "800", transform: [{ scale }] }}>
            Delete
          </Animated.Text>
        </Animated.View>
      </TouchableOpacity>
    )
  }

  const renderList = (list: any) => {
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-Todo List compoenete retured-=-=-=-=-=-///
    let index = lists.indexOf(list)
    return (
      <Swipeable renderRightActions={(_, dragX) => rightActions(dragX, index)}>
        <TodoList list={list} updateList={updateList} />
      </Swipeable>
    )
  };
  //-=-=-=-=-=-=-=-=-=- adding a list(doc) to our collection of lists. 
  const addList = (list: any) => {
    list = {
      name: list.name,
      color: list.color,
      todos: []
    }
    addDoc(collectionRef, list)
  };
  //-=-=-=-=-=-=-=-=-=-=-=-useEffect-=-=-=-=-=-=-=-=||||||


  useEffect(() => {
    getLists()
    let list = lists
    return () => {
    }
  }, [])



  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Modal
        animationType="slide"
        visible={addTodoVisible}
        onRequestClose={toggleAddTodoModal}
      >
        <AddListModal
          closeModal={toggleAddTodoModal}
          addList={addList}
        />
      </Modal>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.lineDivider} />
        <Text style={styles.title}>
          {"Projekt"}
          <Text style={{ fontWeight: "300", color: colors.blue }}>
            {"listen"}
          </Text>
        </Text>
        <View style={styles.lineDivider} />
      </View>

      <View style={{ height: height / 1.9, paddingVertical: 20 }}>
        <FlatList
          data={lists}
          keyExtractor={(_, index) => index.toString()}
          horizontal={false}
          renderItem={({ item }) => renderList(item)}
          keyboardShouldPersistTaps="always"
        />
      </View>
      <View style={{ paddingBottom: 60 }}>
        <TouchableOpacity
          style={styles.addList}
          onPress={toggleAddTodoModal}
        >
          <AntDesign name="plus" size={30} color={colors.blue} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TodoApp;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

  },
  lineDivider: {
    backgroundColor: colors.lightBlue,
    height: 1,
    flex: 1,
    alignSelf: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: colors.black,
    paddingHorizontal: 50,
    paddingVertical: 0,
  },
  addList: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 100,
    padding: 15,
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: colors.black,
  },
  add: {
    color: colors.blue,
    fontWeight: "600",
    fontSize: 14,
    marginTop: 8,
  },

  deleteBtn: {
    flex: 1,
    marginLeft: width / 20,
    marginVertical: 10,
    backgroundColor: colors.red,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    borderRadius: 2,
  },
});
