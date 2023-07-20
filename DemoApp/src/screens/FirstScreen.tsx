import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, ICONS, SHADOW, SIZES} from '../resources';
import {
  ACCOUNT_ICON,
  CHART_ICON,
  CLOCK_ICON,
  COIN_ICON,
  DOWN_ICON,
  UP_ICON,
} from '../resources/Icons';
import {SHADOW_PRIMARY} from '../resources/Theme';
import PredictionModal from '../components/PredictionModal';

const FirstScreen = () => {
  const [open, setOpen] = useState(false);
  return (
    <ScrollView
      style={{
        flex: 1,
        height: '100%',
        padding: '5%',
        backgroundColor: COLORS.white,
      }}>
      <Text style={{...FONTS.h2, color: COLORS.black}}>Today's Game</Text>
      <View
        style={{
          marginTop: '5%',
          width: '100%',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          overflow: 'hidden',
          backgroundColor: COLORS.white,
        }}>
        <ImageBackground
          style={{width: '100%', aspectRatio: 3 / 1}}
          resizeMode="stretch"
          source={ICONS.HOME_HEADER_ICON}>
          <View
            style={{
              paddingVertical: '5%',
              paddingHorizontal: '4%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 18,
                marginTop: '-1%',
                opacity: 0.8,
              }}>
              under or over
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: COLORS.white,

                  opacity: 0.7,
                  //   ...FONTS.body2,
                  fontSize: 16,

                  fontWeight: '300',
                }}>
                Staring in
              </Text>
              <Image
                resizeMode="contain"
                source={ICONS.CLOCK_ICON}
                style={{height: 15, width: 15, marginHorizontal: 5}}
              />
              <Text
                style={{
                  color: COLORS.white,

                  fontSize: 16,
                  fontWeight: '300',
                }}>
                03:23:12
              </Text>
            </View>
          </View>
          <View style={{flex: 1, paddingHorizontal: '4%'}}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 16,
                fontWeight: '300',
                marginTop: '-1%',
                opacity: 0.8,
              }}>
              Bitcoin price will be under
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                $24,561{' '}
              </Text>
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: 14,
                }}>
                at 7 a ET on 22 Jan'21
              </Text>
            </View>
          </View>
        </ImageBackground>
        <View
          style={{
            backgroundColor: COLORS.white,
            paddingHorizontal: '3%',
            paddingVertical: '5%',
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: SIZES.width * 0.24,
            }}>
            <Text style={{fontWeight: '300', fontSize: 14}}>Prize Pool</Text>
            <Text style={{fontWeight: 'bold', fontSize: 14, marginTop: 10}}>
              12000 $
            </Text>
          </View>
          <View
            style={{
              width: SIZES.width * 0.2,
            }}>
            <Text style={{fontWeight: '300', fontSize: 14}}>Under </Text>
            <Text style={{fontWeight: 'bold', fontSize: 14, marginTop: 10}}>
              3.2x
            </Text>
          </View>
          <View
            style={{
              width: SIZES.width * 0.2,
            }}>
            <Text style={{fontWeight: '300', fontSize: 14}}>Over </Text>
            <Text style={{fontWeight: 'bold', fontSize: 14, marginTop: 10}}>
              1.25x
            </Text>
          </View>
          <View
            style={{
              width: SIZES.width * 0.2,
            }}>
            <Text style={{fontWeight: '300', fontSize: 14}}>Entry Fees </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 14, marginTop: 10}}>
                1.25x
              </Text>
              <Image
                source={COIN_ICON}
                style={{
                  height: 20,
                  width: 20,
                  alignSelf: 'flex-end',
                  marginLeft: 5,
                }}
              />
            </View>
          </View>
        </View>
        <Text
          style={{
            color: COLORS.gray,
            fontSize: 18,
            marginTop: '-1%',
            opacity: 0.8,
            marginHorizontal: '4%',
          }}>
          What's your predictions ?
        </Text>
        <View
          style={{
            padding: '4%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => setOpen(true)}
            style={{
              backgroundColor: '#452C55',
              flex: 1,
              marginRight: 10,
              flexDirection: 'row',
              padding: '3%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 30,
            }}>
            <Image
              source={UP_ICON}
              style={{
                height: 15,
                width: 15,
                marginBottom: '3%',
                alignSelf: 'flex-end',
                marginRight: 5,
              }}
            />
            <Text
              style={{
                color: COLORS.white,
                fontSize: 18,

                opacity: 0.8,
                marginHorizontal: '4%',
              }}>
              under
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setOpen(true)}
            style={{
              backgroundColor: '#6231AD',
              flex: 1,
              marginLeft: 10,
              padding: '3%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 30,
              flexDirection: 'row',
            }}>
            <Image
              source={DOWN_ICON}
              style={{
                height: 15,
                width: 15,
                marginBottom: '3%',
                alignSelf: 'flex-end',
                marginRight: 5,
              }}
            />
            <Text
              style={{
                color: COLORS.white,
                fontSize: 18,
                marginTop: '-1%',
                opacity: 0.8,
                marginHorizontal: '4%',
              }}>
              Over
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            paddingHorizontal: '4%',
            paddingVertical: '5%',
            marginTop: 20,
            backgroundColor: '#F6F3FA',
            // backgroundColor: 'red',
            ...SHADOW,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={ACCOUNT_ICON}
                style={{
                  height: 18,
                  width: 18,
                  alignSelf: 'flex-end',
                  marginRight: 5,
                }}
              />
              <Text
                style={{fontWeight: 'bold', fontSize: 16, marginBottom: -2}}>
                355 players
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={CHART_ICON}
                style={{
                  height: 18,
                  width: 18,
                  alignSelf: 'flex-end',
                  marginRight: 5,
                }}
              />
              <Text
                style={{fontWeight: 'bold', fontSize: 16, marginBottom: -2}}>
                View Charts
              </Text>
            </View>
          </View>
          <View
            style={{
              marginVertical: 15,
              width: '100%',
              height: 10,
              borderRadius: 20,
              borderWidth: 1,
              ...SHADOW,
              backgroundColor: '#f3f4f6',
              alignSelf: 'center',
              marginBottom: -10,
              overflow: 'hidden',
              flexDirection: 'row',
            }}>
            <View
              style={[
                {
                  height: 10,
                  // borderRadius: 20,
                  backgroundColor: '#FE4190',
                },
                {
                  width: '60%',
                },
              ]}></View>
            <View
              style={[
                {
                  height: 10,
                  // borderRadius: 20,
                  backgroundColor: '#2DABAD',
                },
                {
                  width: '40%',
                },
              ]}></View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 16,
                opacity: 0.7,
                color: COLORS.gray,
              }}>
              232 predicted under
            </Text>

            <Text
              style={{
                fontWeight: '500',
                fontSize: 16,
                opacity: 0.7,
                color: COLORS.gray,
              }}>
              132 predicted over
            </Text>
          </View>
        </View>
      </View>
      {open && (
        <PredictionModal
          open={open}
          onClose={() => {
            setOpen(false);
          }}
        />
      )}
    </ScrollView>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({});
