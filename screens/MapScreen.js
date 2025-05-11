import { useState, useEffect } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MapView from "react-native-maps";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function MapScreen() {
  const apiUrl = process.env.EXPO_PUBLIC_BACKEND_IP;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const [currentPosition, setCurrentPosition] = useState(null);
  const [tempCoordinates, setTempCoordinates] = useState(null);
  const [newPlaceCoords, setNewPlaceCoords] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);
  const [newPlace, setNewPlace] = useState("");

  // //GET existing places
  // useEffect(() => {
  //   //FETCH get
  //   fetch(`https://locapic-app-backend.vercel.app/places/${user.nickname}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("check get", data.places);
  //       //console.log('result get places', data.result)
  //       dispatch(importPlaces(data.places));
  //     });
  // }, []);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status === "granted") {
        Location.watchPositionAsync({ distanceInterval: 10 }, (location) => {
          setCurrentPosition(location.coords);
          console.log(location);
        });
      }
    })();
  }, []);

  //POST CURRENT LOCATION
const createTrip = () => {
  if(!currentPosition) {
    return
  } else {
    const editedLocations = {
      latitude: currentPosition.latitude,
      longitude: currentPosition.longitude
    };

    fetch(`${apiUrl}/maps/trip`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedLocations)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })

    });
  };
};
  

  // const handleLongPress = (e) => {
  //   setTempCoordinates(e.nativeEvent.coordinate);
  //   setModalVisible(true);
  // };

  // const handleNewPlace = () => {
  //   dispatch(
  //     addPlace({
  //       name: newPlace,
  //       latitude: tempCoordinates.latitude,
  //       longitude: tempCoordinates.longitude,
  //     })
  //   );
  //   setModalVisible(false);
  //   setNewPlace("");
  //   //FETCH post
  //   fetch("https://locapic-app-backend.vercel.app/places", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       nickname: user.nickname,
  //       name: newPlace,
  //       latitude: tempCoordinates.latitude,
  //       longitude: tempCoordinates.longitude,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("check post in map", data.result); //it works
  //     });
  // };

  // const handleClose = () => {
  //   setModalVisible(false);
  //   setNewPlace("");
  // };

  // const markers = user.places.map((data, i) => {
  //   return (
  //     <Marker
  //       key={i}
  //       coordinate={{ latitude: data.latitude, longitude: data.longitude }}
  //       title={data.name}
  //     />
  //   );
  // });

  return (
    <View style={styles.container}>
      {/* <Modal visible={modalVisible} animationType="fade" transparent>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TextInput
                placeholder="New place"
                onChangeText={(value) => setNewPlace(value)}
                value={newPlace}
                style={styles.input}
              />
              <TouchableOpacity
                onPress={() => handleNewPlace()}
                style={styles.button}
                activeOpacity={0.8}
              >
                <Text style={styles.textButton}>Add</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleClose()}
                style={styles.button}
                activeOpacity={0.8}
              >
                <Text style={styles.textButton}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal> */}

      <MapView
        onLongPress={(e) => handleLongPress(e)}
        mapType="hybrid"
        style={styles.map}
      >
        {currentPosition && (
          <Marker
            coordinate={currentPosition}
            title="My position"
            pinColor="#fecb2d"
          />
        )}
        {/* {markers} */}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    width: 150,
    borderBottomColor: "#ec6e5b",
    borderBottomWidth: 1,
    fontSize: 16,
  },
  button: {
    width: 150,
    alignItems: "center",
    marginTop: 20,
    paddingTop: 8,
    backgroundColor: "#ec6e5b",
    borderRadius: 10,
  },
  textButton: {
    color: "#ffffff",
    height: 24,
    fontWeight: "600",
    fontSize: 15,
  },
});
