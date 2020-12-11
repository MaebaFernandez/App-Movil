import React, {Fragment, useState} from 'react';
import {StyleSheet} from "react-native";
import { Icon } from 'react-native-elements';

import { Alert,Modal, TouchableHighlight, View} from "react-native";
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';

export default function Menu() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
 
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
                  <Text style={estilo.modalText}>Blusa color rojo</Text>
                  <Text style={estilo.modalText}>Precio: 15 bs</Text>
                  <Text style={estilo.modalText}>Talla: L</Text>
                  <Text style={estilo.modalText}>--------------------</Text>
                  <Text style={estilo.modalText}>Blusa color negro</Text>
                  <Text style={estilo.modalText}>Precio: 40 bs</Text>
                  <Text style={estilo.modalText}>Talla: M</Text>
                  <Text style={estilo.modalText}>--------------------</Text>
                  <Text style={estilo.modalText}>Blusa floreada</Text>
                  <Text style={estilo.modalText}>Precio: 35 bs</Text>
                  <Text style={estilo.modalText}>Talla: 16</Text>
                  <Text style={estilo.modalText}>--------------------</Text>

                  <TouchableHighlight
                    style={{ ...estilo.openButton, backgroundColor: "#2196F3", height: 50, }}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <Text style={estilo.textStyle}>Cerrar</Text>
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
              <Text style={estilo.textStyle}>Blusas</Text>
            </TouchableHighlight>

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible2}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
            >
              <View style={estilo.centeredView}>
                <View style={estilo.modalView}>
                  <Text style={estilo.modalText}>Vestido largo azul</Text>
                  <Text style={estilo.modalText}>Precio: 70 bs</Text>
                  <Text style={estilo.modalText}>Talla: L</Text>
                  <Text style={estilo.modalText}>--------------------</Text>
                  <Text style={estilo.modalText}>Vestido de noche dorado</Text>
                  <Text style={estilo.modalText}>Precio: 100 bs</Text>
                  <Text style={estilo.modalText}>Talla: S</Text>
                  <Text style={estilo.modalText}>--------------------</Text>

                  <TouchableHighlight
                    style={{ ...estilo.openButton, backgroundColor: "#2196F3", height: 50 }}
                    onPress={() => {
                      setModalVisible2(!modalVisible2);
                    }}
                  >
                    <Text style={estilo.textStyle}>Cerrar</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>

            <TouchableHighlight
              style={estilo.openButton}
              onPress={() => {
                setModalVisible2(true);
              }}
            >
              <Text style={estilo.textStyle}>Vestidos</Text>
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
      backgroundColor: "green",
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      margin: 15,
      height: 100,
      width: "90%",
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




