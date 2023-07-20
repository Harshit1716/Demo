import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Modal,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  AlertButton,
  BackHandler,
  Platform,
  FlatList,
  Animated,
} from 'react-native';
import {COLORS, FONTS, ICONS, SIZES} from '../resources';

// import Icon, {Icons} from './Icons';
import {SHADOW, SHADOW_PRIMARY, SHADOW_PRIMARY_LIGHT} from '../resources/Theme';
import {COIN_ICON} from '../resources/Icons';

const PredictionModal = ({isVisible, onClose}: any) => {
  const [seletedItem, setSeletedItem] = useState<number>(-1);
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');

  const [tenant, settenant] = useState(false);
  const [open, setOpen] = useState(false);
  const scrollY = useRef(new Animated.Value(0)).current;

  const header = () => {
    return (
      <View style={{}}>
        <TouchableOpacity
          onPress={() => onClose()}
          style={{
            paddingVertical: '.8%',
            marginVertical: 10,
            alignSelf: 'center',
            borderRadius: 20,
            backgroundColor: COLORS.lightGray,
            width: SIZES.width * 0.1,
            ...styles.headingContainer,
          }}></TouchableOpacity>
      </View>
    );
  };

  const SubmitButton = () => {
    return (
      <TouchableOpacity
        style={{
          padding: '3%',
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
          width: '90%',
          backgroundColor: '#6231AD',
          borderRadius: 30,
          alignSelf: 'center',
          marginBottom: 20,
        }}>
        <Text style={{color: COLORS.white, ...FONTS.h3}}>
          Submit my prediction
        </Text>
      </TouchableOpacity>
    );
  };
  const data = [12, 13, 14, 15, 16, 17];

  return (
    <Modal animationType={'slide'} transparent={true} visible={isVisible}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.popupContainer}>
          {header()}

          <View style={styles.enterDetailsContainer}>
            <Text style={{...FONTS.h2, marginLeft: 25, color: COLORS.black}}>
              Your prediction is under
            </Text>
            <Text
              style={{
                ...FONTS.h3,
                marginLeft: 25,
                color: COLORS.gray,
                marginTop: 15,
              }}>
              Entry Ticket
            </Text>
            <View
              style={{
                width: '100%',
                alignSelf: 'center',
                ...FONTS.body3,
              }}>
              <FlatList
                scrollEnabled
                style={{height: SIZES.height * 0.27}}
                data={data}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity
                      onPress={() => setSeletedItem(item)}
                      style={{
                        padding: '3%',
                        width: '90%',
                        alignSelf: 'center',
                        opacity: 0.4,
                        backgroundColor:
                          seletedItem === item
                            ? 'rgba(98, 49, 173, .7)'
                            : COLORS.white,
                        marginBottom: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 5,
                      }}>
                      <Text style={{fontSize: 20}}>{item}</Text>
                    </TouchableOpacity>
                  );
                }}
              />
              <View
                style={{
                  paddingHorizontal: '5%',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text>You can win</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'baseline',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'green',
                      fontWeight: 'bold',
                      fontSize: 18,
                      flex: 1,
                    }}>
                    $2000
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>
                      Total
                    </Text>
                    <Image
                      source={COIN_ICON}
                      style={{
                        height: 20,
                        width: 20,
                        alignSelf: 'flex-end',
                        marginHorizontal: 5,
                      }}
                    />
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>5</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <SubmitButton />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default PredictionModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000AA',
    justifyContent: 'flex-end',
    // paddingTop: 120,
  },
  popupContainer: {
    height: '60%',
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: '100%',
  },
  dismissButton: {
    width: 20,
    height: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
  },
  headingContainer: {
    alignItems: 'center',
    flex: 1,
  },
  separatorLine: {
    width: '100%',
    height: 2,
    backgroundColor: COLORS.lightGray1,
  },
  headerTitle: {
    ...FONTS.h2,
    color: COLORS.primary,
    textAlign: 'center',
  },
  stockName: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: COLORS.gray,
    width: '80%',
    textAlign: 'center',
  },
  enterDetailsContainer: {
    // paddingHorizontal: 20,
    paddingTop: 25,
    flex: 1,
  },
});
