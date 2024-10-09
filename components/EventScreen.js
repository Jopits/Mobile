import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function EventScreen({ navigation }) {
  const handleImagePress = (title, description, imageSource) => {
    navigation.navigate('Details', {
      title,
      description,
      imageSource
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.header}>Events</Text>

        <TouchableOpacity onPress={() => handleImagePress(
          'Museum Event 1',
          'Bossing',
          require('../assets/images/g.gif')
        )}>
          <Image
            source={require('../assets/images/g.gif')}
            style={styles.image}
          />
          <Text style={styles.imageText}>Museums play an important role...</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleImagePress(
          'Event 2',
          'Details about Event 2...',
          require('../assets/images/ggg.gif')
        )}>
          <Image
            source={require('../assets/images/ggg.gif')}
            style={styles.image}
          />
          <Text style={styles.imageText}>Event 2</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleImagePress(
          'Event 3',
          'Details about Event 3...',
          require('../assets/images/gg.gif')
        )}>
          <Image
            source={require('../assets/images/gg.gif')}
            style={styles.image}
          />
          <Text style={styles.imageText}>Event 3</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
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
  scrollContent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 80, 
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 25,
  },
  image: {
    width: 350, 
    height: 200, 
    marginBottom: 5,
  },
  imageText: {
    fontSize: 16,
    textAlign: 'center',
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
