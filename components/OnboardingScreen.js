import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function OnboardingScreen({ navigation }) {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      image: require('../assets/images/image1.png'),
      title: 'Start your Exploring with fun',
      description: 'Our engaging events and Exhibit will spark your curiosity & enjoyable',
    },
    {
      image: require('../assets/images/image2.png'),
      title: 'Discover some unpopular site in Cavite in your own hands',
      description: 'Our application will guide you in every step to knowing all the history',
    },
    {
      image: require('../assets/images/image3.png'),
      title: 'Get ready for some amazing 3d elements of the history',
      description: 'To Experience the 3d elements of the app, First you must Sign-up and if you already have an account you can Sign-in',
    },
  ];

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      navigation.navigate('SignIn');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={pages[currentPage].image} style={styles.onboardingImage} />
      <Text style={styles.title}>{pages[currentPage].title}</Text>
      <Text style={styles.subtitle}>{pages[currentPage].description}</Text>
      <View style={styles.pagination}>
        {pages.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: index === currentPage ? '#007BFF' : '#ccc' },
            ]}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>{currentPage === pages.length - 1 ? 'Done' : 'Next'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#E9E9DB',
  },
  onboardingImage: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
