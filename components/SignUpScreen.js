import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';

const SignUpScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthdate, setBirthdate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [gender, setGender] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSignUp = () => {
    if (!firstName || !lastName || !email || !password || !rePassword) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }
    if (password !== rePassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
    if (password.length < 8 || password.length > 16) {
      Alert.alert('Error', 'Password must be between 8-16 characters.');
      return;
    }
    if (!agreeTerms) {
      Alert.alert('Error', 'Please agree to the terms and conditions.');
      return;
    }
    
   
    navigation.navigate('Verification');
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(false);
    setBirthdate(selectedDate || birthdate);
  };

  const showTermsAndConditions = () => {
    Alert.alert('Terms and Conditions', 'Here you can display the terms and conditions text or redirect to a terms and conditions page.');
  };

  return (
    <ScrollView contentContainerStyle={styles.signUpContainer}>
      <Image source={require('../assets/images/signin_image.png')} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>Let's get started</Text>
      <Text>Create an account for Cavite Venture to get all features</Text>

      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="First Name"
          maxLength={16}
          value={firstName}
          onChangeText={text => setFirstName(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          maxLength={16}
          value={lastName}
          onChangeText={text => setLastName(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="calendar" size={20} color="black" style={styles.icon} />
        <TouchableOpacity onPress={showDatepicker} style={styles.dateInput}>
          <Text>{birthdate ? birthdate.toLocaleDateString('en-US') : 'Select Birthdate'}</Text>
        </TouchableOpacity>
      </View>
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={birthdate}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}

      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          maxLength={16}
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Re-enter Password"
          secureTextEntry
          maxLength={16}
          value={rePassword}
          onChangeText={text => setRePassword(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="map-marker" size={20} color="black" style={styles.icon} />
        <View style={styles.pickerContainer}>
          <RNPickerSelect
            onValueChange={(value) => setLocation(value)}
            items={[
              { label: 'Bacoor', value: 'Bacoor' },
              { label: 'Kawit', value: 'Kawit' },
              { label: 'Rosario', value: 'Rosario' },
              { label: 'Cavite City', value: 'Cavite City' },
            ]}
            style={pickerSelectStyles}
            value={location}
            placeholder={{ label: 'Select Location', value: null }}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Icon name="venus-mars" size={20} color="black" style={styles.icon} />
        <View style={styles.pickerContainer}>
          <RNPickerSelect
            onValueChange={(value) => setGender(value)}
            items={[
              { label: 'Male', value: 'Male' },
              { label: 'Female', value: 'Female' },
              { label: 'Not Prefer to say', value: 'Not Prefer to say' },
            ]}
            style={pickerSelectStyles}
            value={gender}
            placeholder={{ label: 'Select Gender', value: null }}
          />
        </View>
      </View>

      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={() => setAgreeTerms(!agreeTerms)}>
          {agreeTerms ? (
            <Icon name="check-square-o" size={20} color="black" style={styles.checkboxIcon} />
          ) : (
            <Icon name="square-o" size={20} color="black" style={styles.checkboxIcon} />
          )}
        </TouchableOpacity>
        <Text style={styles.termsText}>
          I agree to the{' '}
          <Text style={styles.linkText} onPress={showTermsAndConditions}>
            terms and conditions
          </Text>{' '}
          of Cavite Venture
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.signInText}>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  signUpContainer: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#E9E9DB',
  },
  logo: {
    width: 400,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  dateInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    justifyContent: 'center',
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '85%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
    alignSelf: 'center', // Vertically align the icon
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  signInText: {
    marginTop: 20,
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  checkboxIcon: {
    marginRight: 10,
  },
  termsText: {
    fontSize: 12,
  },
  linkText: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    flex: 1,
    height: 45,
    paddingHorizontal: 130,
    borderWidth: 1,
    borderRadius: 5,
    color: 'black',
  },
});

export default SignUpScreen;
