import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  CARD_ICON,
  CHART_ICON,
  CHAT_ICON,
  EDIT_PROFILE_ICON,
  HEADER_LEFT_ICON,
  LIST_ICON,
  LOGOUT_ICON,
  LOSS_ICON,
  PROFILE,
  PROFIT_ICON,
} from '../resources/Icons';
import {COLORS, SIZES} from '../resources';

const ProfileScreen = () => {
  const [isSelected, setIsSelected] = useState(true);
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <View
        style={{
          backgroundColor: COLORS.white,
          paddingHorizontal: '5%',
          marginTop: '10%',
          //   marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
          //   justifyContent: 'space-between',
        }}>
        <Image
          resizeMode="contain"
          style={{height: 40, width: 40}}
          source={HEADER_LEFT_ICON}
        />
        <Text
          style={{
            flex: 1,
            textAlign: 'center',
            color: COLORS.gray,
            fontSize: 20,
          }}>
          Profile
        </Text>

        <TouchableOpacity style={{marginTop: -10}}>
          <View
            style={{
              height: 25,
              borderRadius: 25,
              width: 25,
              marginBottom: -10,
              zIndex: 1,
              right: -15,
              backgroundColor: '#6231AD',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: COLORS.white,
                textAlign: 'center',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              1
            </Text>
          </View>
          <Image
            resizeMode="contain"
            style={{height: 30, width: 30}}
            source={CHAT_ICON}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{
          flex: 1,
          width: SIZES.width,
          //   paddingHorizontal: '5%',
          backgroundColor: COLORS.white,
        }}>
        <View style={{paddingHorizontal: '5%'}}>
          <View>
            <Image
              style={{
                height: 110,
                marginTop: '10%',
                alignSelf: 'center',
                width: 110,
              }}
              source={PROFILE}
            />
            <TouchableOpacity
              style={{alignSelf: 'center', marginRight: -80, marginTop: -30}}>
              <Image
                style={{height: 40, width: 40}}
                source={EDIT_PROFILE_ICON}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              textAlign: 'center',
              marginTop: '5%',
              fontSize: 20,
              color: COLORS.black,
            }}>
            Jina Simons
          </Text>
          <Text
            style={{
              textAlign: 'center',
              marginTop: '3%',
              fontSize: 16,
              color: COLORS.gray,
            }}>
            6000 points
          </Text>
          <Text
            style={{
              marginTop: '3%',
              fontSize: 18,
              color: COLORS.gray,
            }}>
            I’m a software developer that has been in the crypto space since
            2012. And I’ve seen it grow and falter over a period of time. Really
            happy to be here!
          </Text>
          <TouchableOpacity
            style={{
              width: '30%',
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '10%',
            }}>
            <Image
              resizeMode="contain"
              style={{height: 30, width: 30, marginBottom: 10}}
              source={LOGOUT_ICON}
            />
            <Text style={{fontSize: 20, marginLeft: 20}}>Logout</Text>
          </TouchableOpacity>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 10,
              padding: '5%',
              borderColor: COLORS.lightGray,
              marginTop: '10%',
            }}>
            <Image
              resizeMode="contain"
              style={{
                height: 40,
                width: 40,
                alignSelf: 'center',
                marginTop: '-12%',
              }}
              source={CARD_ICON}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{}}>
                <Text style={{fontSize: 18}}>Under or over</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 20,
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{
                      height: 40,
                      width: 40,
                      marginRight: 10,
                    }}
                    source={PROFIT_ICON}
                  />
                  <Text style={{fontSize: 30, fontWeight: 'bold'}}>51%</Text>
                </View>
              </View>
              <View style={{}}>
                <Text style={{fontSize: 18}}>top 5</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 20,
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{
                      height: 40,
                      width: 40,
                      marginRight: 10,
                    }}
                    source={LOSS_ICON}
                  />
                  <Text style={{fontSize: 30, fontWeight: 'bold'}}>-31%</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'rgba(98, 49, 173, .1)',
            paddingVertical: '5%',
            marginTop: 10,
          }}>
          <View style={{backgroundColor: COLORS.white, flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                if (!isSelected) {
                  setIsSelected(true);
                }
              }}
              style={{
                borderBottomWidth: 2,
                flex: 1,
                borderBottomColor: !isSelected ? COLORS.white : '#6231AD',
              }}>
              <Text
                style={{
                  marginVertical: '10%',
                  textAlign: 'center',
                  color: !isSelected ? COLORS.gray : '#6231AD',
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                Games Played
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (isSelected) {
                  setIsSelected(false);
                }
              }}
              style={{
                borderBottomWidth: 2,
                flex: 1,
                borderBottomColor: isSelected ? COLORS.white : '#6231AD',
              }}>
              <Text
                style={{
                  marginVertical: '10%',
                  textAlign: 'center',
                  color: isSelected ? COLORS.gray : '#6231AD',
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                Badges
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={[1, 2, 4, 5, 6, 7]}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    padding: '5%',
                    width: '90%',
                    alignSelf: 'center',
                    backgroundColor: COLORS.white,
                    marginTop: '5%',
                    borderRadius: 10,
                    flexDirection: 'row',
                  }}>
                  <Image style={{marginRight: 20}} source={LIST_ICON} />
                  <View>
                    <Text
                      style={{
                        fontWeight: '700',
                        fontSize: 18,
                        color: COLORS.black,
                      }}>
                      {' '}
                      Born Winner
                    </Text>
                    <Text
                      style={{
                        width: '75%',
                        marginTop: 10,
                        fontSize: 16,
                        color: COLORS.gray,
                      }}>
                      Top 10% of highest spending players in a month
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
