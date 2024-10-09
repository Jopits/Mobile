import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native'; // Ensure TouchableOpacity is imported

const DetailScreen = ({ route, navigation }) => {
  const { title } = route.params;

  // Define descriptions and images based on the title
  const getDetails = (title) => {
    switch (title) {
      case 'Binakayan':
        return {
          description: 'Binakayan is a historical coastal village in Kawit, Cavite. It played a crucial role during the Philippine Revolution as one of the key sites of Filipino resistance against Spanish colonization.',
          images: [
            require('../assets/images/binakayan.png'), // First image
            require('../assets/images/binakayan.png'), // Second image
            require('../assets/images/binakayan.png'), // Third image
          ],
        };
      case 'San Roque':
        return {
          description: 'San Roque is a historic district in Cavite City known for its rich cultural heritage and religious significance.',
          images: [require('../assets/images/UPsanroque.png')],
        };
        case 'Zapote':
          return {
            description: 'San Roque is a historic district in Cavite City known for its rich cultural heritage and religious significance.',
            images: [require('../assets/images/UPsanroque.png')],
          };
          case 'Hacienda':
        return {
          description: 'San Roque is a historic district in Cavite City known for its rich cultural heritage and religious significance.',
          images: [require('../assets/images/UPsanroque.png')],
        };
      default:
        return {
          description: 'No description available for this location.',
          images: [require('../assets/images/g.gif')],
        };
    }
  };

  const { description, images } = getDetails(title);

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={item} style={styles.image} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9E9DB',
  },
  scrollContainer: {
    padding: 20,
    flexGrow: 1,
    paddingBottom: 80,
  },
  imageContainer: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: '#ccc',
    borderWidth: 1, // Optional: Add a border around each image
    width: 360, // Set width for the images
    height: 300, // Set height for the images
    marginRight: 5, // Spacing between images
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Adjust image resizing
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: -20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default DetailScreen;
