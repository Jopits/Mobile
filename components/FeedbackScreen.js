import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, Alert, TouchableOpacity } from 'react-native'; // Add TouchableOpacity here
import { FontAwesome } from '@expo/vector-icons'; // For star icons

const FeedbackScreen = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [improvementSuggestions, setImprovementSuggestions] = useState('');

  const handleSubmit = () => {
    // Input validation
    if (!feedback.trim()) {
      Alert.alert('Error', 'Feedback cannot be empty.');
      return;
    }

    // Handle the submission of feedback (e.g., API call)
    console.log(`Feedback: ${feedback}, Rating: ${rating}, Suggestions: ${improvementSuggestions}`);
    
    // Display confirmation message
    Alert.alert('Success', 'Thank you for your feedback!');

    // Clear the input fields after submission
    setFeedback('');
    setRating(0);
    setImprovementSuggestions('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feedback</Text>
      
      <Text style={styles.label}>Rate the Museum:</Text>
      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => setRating(star)}>
            <FontAwesome
              name={star <= rating ? "star" : "star-o"}
              size={30}
              color="gold"
            />
          </TouchableOpacity>
        ))}
      </View>
      
      <TextInput
        style={styles.input}
        placeholder="Enter your feedback here"
        value={feedback}
        onChangeText={setFeedback}
        multiline
      />
      
      <TextInput
        style={styles.suggestionInput}
        placeholder="Suggestions for improvement"
        value={improvementSuggestions}
        onChangeText={setImprovementSuggestions}
        multiline
      />
      
      <Button title="Submit Feedback" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E9E9DB',
  },
  title: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
  suggestionInput: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
});

export default FeedbackScreen;
