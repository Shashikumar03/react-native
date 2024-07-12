import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, View, Text, Alert, Image, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
 
export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
    if (errors[field]) {
        setErrors({
          ...errors,
          [field]: ''
        });
      }
}

  const handleSubmit = () => {
    if (validateForm()) {
      const submittedData = JSON.stringify(formData, null, 2);
      Alert.alert('Form Submitted', submittedData);
    //   setResponse(submittedData);
      setFormData({
        name: '',
        username: '',
        email: '',
        password: ''
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    // Validate each field
    if (!formData.name) {
      newErrors = { ...newErrors, name: 'Name is required' };
      valid = false;
    }

    if (!formData.username) {
      newErrors = { ...newErrors, username: 'Username is required' };
      valid = false;
    }

    if (!formData.email) {
      newErrors = { ...newErrors, email: 'Email is required' };
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors = { ...newErrors, email: 'Email is invalid' };
      valid = false;
    }

    if (!formData.password) {
      newErrors = { ...newErrors, password: 'Password is required' };
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors = { ...newErrors, password: 'Password must be at least 6 characters' };
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };


  return (

    // <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior='padding'style={[styles.border,styles.container]} keyboardVerticalOffset={Platform.OS=='ios'?100:0}>
      <Text style={styles.header}>Sign Up</Text>
      <View style={styles.imageDiv}>
      <Image source={require('../assets/cartoon3.png')}   style={styles.image} ></Image>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={formData.name}
        onChangeText={(value) => handleInputChange('name', value)}
        onFocus={() => setErrors({ ...errors, name: '' })}
        onBlur={() => {
          if (!formData.name) {
            setErrors({ ...errors, name: 'Name is required' });
          }
        }}
       
      />
       {errors.name ? <Text style={styles.errorStyle}>{errors.name}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={formData.username}
        onChangeText={(value) => handleInputChange('username', value)}
        onFocus={() => setErrors({ ...errors, username: '' })}
        onBlur={() => {
          if (!formData.username) {
            setErrors({ ...errors, username: 'Username is required' });
          }
        }}
      />

      {errors.username ? <Text style={styles.errorStyle}>{errors.username}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={formData.email}
        onChangeText={(value) => handleInputChange('email', value)}
        keyboardType="email-address"
        autoCapitalize="none"
        onFocus={() => setErrors({ ...errors, email: '' })}
        onBlur={() => {
          if (!formData.email) {
            setErrors({ ...errors, email: 'email is required' });
          }
        }}
      />
       {errors.email ? <Text style={styles.errorStyle}>{errors.email}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={formData.password}
        onChangeText={(value) => handleInputChange('password', value)}
        secureTextEntry={true}
        onFocus={() => setErrors({ ...errors, password: '' })}
        onBlur={() => {
          if (!formData.password) {
            setErrors({ ...errors, password: 'password is required' });
          }
        }}
      />
      {errors.password ? <Text style={styles.errorStyle}>{errors.password}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      </KeyboardAvoidingView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // paddingBottom: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    borderRadius: 4,
  },
  image:{
    width:"100%",
    height:300,
    marginBottom:10,
    borderRadius:30
    // resizeMode:"content",
  },
  imageDiv:{
    marginBottom:20,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
   

  },
  errorStyle: {
    color: 'red',
    marginBottom: 10,
  },
  border:{
    borderWidth: 2,
   borderColor: 'green',
   borderStyle: 'solid',
   borderRadius:10
 },
 button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
