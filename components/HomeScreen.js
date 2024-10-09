import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen({ navigation }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const images = [
    require('../assets/images/zapote.png'),
    require('../assets/images/binakayan.png'),
    require('../assets/images/san roque.png'),
    require('../assets/images/hacienda.png'),
  ];
  const unpopularImages = [
    { name: 'Zapote', image: require('../assets/images/UPzapote.png') },
    { name: 'Binakayan', image: require('../assets/images/UPbinakayan.png') },
    { name: 'San Roque', image: require('../assets/images/UPsanroque.png') },
    { name: 'Hacienda', image: require('../assets/images/UPhacienda.png') },
  ];

  const handleImagePress = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const handleSearch = () => {
    navigation.navigate('Search', {
      searchTerm,
      results: unpopularImages.filter(location =>
        location.name.toLowerCase().includes(searchTerm.toLowerCase())
        
      ),
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Icon name="user" size={30} color="black" />
          <View style={styles.headerText}>
            <Text style={styles.helloText}>Hello</Text>
            <Text style={styles.userText}>User</Text>
          </View>
        </View>
        <TextInput
          style={styles.searchBar}
          placeholder="Search location"
          value={searchTerm}
          onChangeText={setSearchTerm}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity onPress={handleImagePress}>
          <Image
            source={images[currentImageIndex]}
            style={styles.image}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={styles.dotsContainer}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                { opacity: index === currentImageIndex ? 1 : 0.5 },
              ]}
            />
          ))}
        </View>
        <Text style={styles.sectionTitle}>Unpopular places</Text>
        <View style={styles.unpopularPlacesContainer}>
          {unpopularImages.map((location, index) => (
            <Image
              key={index}
              source={location.image}
              style={styles.unpopularPlaceImage}
            />
          ))}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Icon name="home" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Event')}>
          <Icon name="calendar" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Gallery')}>
          <Icon name="image" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon name="user" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9E9DB',
  },
  scrollContainer: {
    paddingBottom: 80, 
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  headerText: {
    marginLeft: 10,
  },
  helloText: {
    fontSize: 24,
  },
  userText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchBar: {
    height: 40,
    width: '90%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: 'black',
    marginHorizontal: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  unpopularPlacesContainer: {
    width: '100%',
    alignItems: 'center',
  },
  unpopularPlaceImage: {
    width: '90%',
    height: 200,
    marginBottom: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#E9E9DB',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
