import React from 'react';
import MapView from "react-native-map-clustering";
import { Marker } from "react-native-maps";
import { StyleSheet, View } from 'react-native';

const markers = [
  { id: 1, title: "Test1", description: "Hello World", location: { latitude: 30.270652526064772, longitude: -97.75368988587985 } },
  { id: 2, title: "Test2", description: "Hello World", location: { latitude: 30.269826083021613, longitude: -97.75316677471446 } },
  { id: 3, title: "Test3", description: "Hello World", location: { latitude: 30.270928005532998, longitude: -97.75273297521144 } },
];

export default function App() {
  renderMarker = (marker) => (
    <Marker
      identifier={marker.id}
      key={marker.id}
      coordinate={marker.location}
      title={marker.title}
      description={marker.description}
      tracksViewChanges={false}
    />
  );

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 30.26714,
          longitude: -97.74259,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        { markers.map((marker) => renderMarker(marker)) }
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
