import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function VerificationScreen({ navigation, route }) {
  const [code, setCode] = useState(['', '', '', '']);
  const [resendTimer, setResendTimer] = useState(0); 
  const [timerRunning, setTimerRunning] = useState(false);

  const inputs = useRef([]);

  useEffect(() => {
    let interval;
    if (timerRunning) {
      interval = setInterval(() => {
        setResendTimer((prevTimer) => {
          if (prevTimer === 1) {
            clearInterval(interval);
            setTimerRunning(false);
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  const handleChange = (text, index) => {
    if (/^\d*$/.test(text)) {
      let newCode = [...code];
      newCode[index] = text;
      setCode(newCode);
      if (text && index < 3) {
        inputs.current[index + 1].focus();
      } else if (!text && index > 0) {
        inputs.current[index - 1].focus();
      }
    }
  };

  const handleResend = () => {
    if (!timerRunning) {
      setCode(['', '', '', '']); 
      setResendTimer(60); 
      setTimerRunning(true); 
    }
  };

  const handleSubmit = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verification Code</Text>
      <Text style={styles.subtitle}>We have sent the verification code to your email address</Text>

      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => inputs.current[index] = ref}
            style={styles.codeInput}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            keyboardType="numeric"
            maxLength={1}
          />
        ))}
      </View>

      {resendTimer > 0 ? (
        <Text style={styles.resendText}>Resend code in {resendTimer} seconds</Text>
      ) : (
        <TouchableOpacity onPress={handleResend}>
          <Text style={styles.resendText}>Resend code</Text>
        </TouchableOpacity>
      )}  

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      <Text style={styles.signInPrompt}>
        Back to?{' '}
        <Text style={styles.signUpText} onPress={() => navigation.navigate('SignUp', { username: route.params?.username, email: route.params?.email })}>
          Sign Up
        </Text>
      </Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  codeInput: {
    width: '20%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
  },
  resendText: {
    color: 'blue',
    marginBottom: 20,
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
  signInPrompt: {
    marginTop: 20,
  },
  signUpText: {
    color: '#007BFF',
  },
});
