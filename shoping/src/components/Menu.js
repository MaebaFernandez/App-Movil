import React, {Fragment, useState} from 'react';
import {StyleSheet} from "react-native";
import { Icon } from 'react-native-elements';

import { Alert,Modal, TouchableHighlight, View} from "react-native";
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
export default function Menu() {
  const [modalVisible, setModalVisible] = useState(false);
  
 
    return (
      <Container>
        <Header style={estilo.content} />
        <Content />
              <View style={estilo.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
            >
              <View style={estilo.centeredView}>
                <View style={estilo.modalView}>
                  <Text style={estilo.modalText}>Hello World!</Text>

                  <TouchableHighlight
                    style={{ ...estilo.openButton, backgroundColor: "#2196F3" }}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <Text style={estilo.textStyle}>Hide Modal</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>

            <TouchableHighlight
              style={estilo.openButton}
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <Text style={estilo.textStyle}>Show Modal</Text>
            </TouchableHighlight>

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
            >
              <View style={estilo.centeredView}>
                <View style={estilo.modalView}>
                  <Text style={estilo.modalText}>Hello World!</Text>

                  <TouchableHighlight
                    style={{ ...estilo.openButton, backgroundColor: "#2196F3" }}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <Text style={estilo.textStyle}>Hide Modal</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>

            <TouchableHighlight
              style={estilo.openButton}
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <Text style={estilo.textStyle}>Show Modal</Text>
            </TouchableHighlight>
          </View>



        <Footer  >
          <FooterTab style={estilo.content}>
            <Button vertical>
              <Text style={estilo.tex}>Compras</Text>
            </Button>
            
            <Button vertical active style={estilo.active}>
            
              <Text style={estilo.tex}>Menu</Text>
            </Button>
            <Button vertical>
            
              <Text style={estilo.tex}>Carrito</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }

  const estilo = StyleSheet.create({
 
    content: {
        backgroundColor: '#caefb3',
    },
    tex:{
        color:"#000"
    },
    active:{
        backgroundColor: '#abce00',

    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      margin: 15,
      height: 100,
      justifyContent: "center"
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
});




