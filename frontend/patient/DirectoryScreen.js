import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { genericData } from '../genericUserData';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderColor: 'pink',
    borderWidth: 1,
    borderRadius: 50
  },
  flexRow: {
    height: '6%',
    flexDirection: 'row',
    paddingLeft: 3,
    paddingRight: 1,
    justifyContent: 'space-evenly',
    backgroundColor: '#333',
    alignItems: 'center'
  },
  flexStart: {
    flexDirection: 'row',
    padding: 5,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#eee',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.2
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: '100%'
  },
  container: {
    height: '94%',
    backgroundColor: '#fff'
  },
  advocateText: {
    margin: 10
  },
  flexCol: {
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  textBox: {
    marginRight: 5,
    backgroundColor: 'white',
    padding: 4,
    margin: 1,
    borderRadius: 5,
    height: 32,
    flex: 1
  },
  spaceBetween: {
    justifyContent: 'space-between'
  }
});

const DirectoryScreen = () => {
  const [mapView, setMapView] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');
  const [region, setRegion] = React.useState({
    latitude: genericData.vegasLocation.lat,
    longitude: genericData.vegasLocation.lng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  });
  const [data, setData] = React.useState(genericData.advocateLocationArray);

  const starDisplay = stars => {
    let potato = [];
    for (let i = stars; i > 0; i--) {
      potato.push(<FontAwesomeIcon icon={'star'} />);
    }
    for (let i = 5 - stars; i > 0; i--) {
      potato.push(<FontAwesomeIcon color={'#ddd'} icon={'star'} />);
    }
    return potato;
  };

  return (
    <View style={styles.flexCol}>
      <View style={styles.flexRow}>
        <TextInput
          style={styles.textBox}
          onChangeText={text => {
            setSearchText(text);
          }}
          value={searchText}
        />
        <TouchableOpacity onPress={() => setMapView(!mapView)}>
          {mapView ? (
            <FontAwesomeIcon icon={'map'} color={'white'} size={30} />
          ) : (
            <FontAwesomeIcon icon={'list'} color={'white'} size={30} />
          )}
        </TouchableOpacity>
      </View>
      {mapView ? (
        <View style={styles.container}>
          <MapView
            style={styles.mapStyle}
            initialRegion={{
              latitude: genericData.vegasLocation.lat,
              longitude: genericData.vegasLocation.lng,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
            region={region}
          >
            {data.map(user => {
              const latlong = {
                latitude: user.location.lat,
                longitude: user.location.lng
              };
              return (
                <Marker
                  coordinate={latlong}
                  title={`${user.lname}, ${user.fname}`}
                />
              );
            })}
          </MapView>
        </View>
      ) : (
        <View style={styles.container}>
          {
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <View style={styles.flexStart}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {/*<FontAwesomeIcon icon={'user'} color={'#333'} size={30} />*/}
                    <Image source={item.photo} style={styles.image} />
                    <View style={styles.advocateText}>
                      <Text>{`${item.fname} ${item.lname}`}</Text>
                      {item.role === 'advocate' ? (
                        <Text style={{ color: '#666' }}>Patient Advocate</Text>
                      ) : (
                        <Text style={{ color: '#666' }}>MD</Text>
                      )}
                      <Text style={{ color: '#666' }}>{item.gender}</Text>
                    </View>
                  </View>

                  <View style={styles.advocateText}>
                    <Text>Las Vegas, NV</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end'
                      }}
                    >
                      {starDisplay(item.rating).map(item => {
                        return item;
                      })}
                    </View>
                  </View>
                </View>
              )}
              keyExtractor={item => item.email}
            />
          }
        </View>
      )}
    </View>
  );
};

export default DirectoryScreen;
