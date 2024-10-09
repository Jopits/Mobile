import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ProfileScreen = ({ navigation, route }) => {
  const [profileImage, setProfileImage] = useState(null);
  const [userName, setUserName] = useState('User');

  useEffect(() => {
    if (route.params?.profileImage) {
      setProfileImage(route.params.profileImage); // Set the profile image from route params
    }
    if (route.params?.name) {
      setUserName(route.params.name); // Set the user name from route params
    }
  }, [route.params?.profileImage, route.params?.name]);

  const handleLogout = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('EditProfile', { profileImage, name: userName })}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
        ) : (
          <FontAwesome name="user-circle" size={80} color="black" style={styles.icon} />
        )}
      </TouchableOpacity>

      <Text style={styles.userName}>{userName}</Text>
      <Text style={styles.sectionTitle}>Account Details</Text>

      <View style={styles.profileDetail}>
        <FontAwesome name="user" size={24} color="black" />
        <Text style={styles.detailText}>Detail Profile</Text>
      </View>

      <Text style={styles.information}>Information Account</Text>

      {/* Feedback Button */}
      <TouchableOpacity style={styles.feedbackButton} onPress={() => navigation.navigate('Feedback')}>
        <FontAwesome name="comment" size={24} color="black" />
        <Text style={styles.feedbackText}>Feedback</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <FontAwesome name="sign-out" size={24} color="black" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      <View style={styles.bottomIcons}>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Home')}>
          <FontAwesome name="home" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Event')}>
          <FontAwesome name="calendar" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesome name="list-alt" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesome name="user" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E9E9DB',
  },
  icon: {
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 20,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 10,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
  },
  profileDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#D1D1D1',
    borderRadius: 5,
  },
  detailText: {
    marginLeft: 10,
    fontSize: 16,
  },
  information: {
    marginTop: 10,
    fontSize: 16,
  },
  feedbackButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    backgroundColor: '#D1D1D1',
    borderRadius: 5,
  },
  feedbackText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  logoutText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
  },
  bottomIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: 'black',
    paddingBottom: 10,
  },
  iconContainer: {
    alignItems: 'center',
    paddingVertical: 10,
    width: '25%',
  },
});

export default ProfileScreen;
