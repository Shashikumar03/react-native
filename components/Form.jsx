import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, View, Text, Alert, Image, KeyboardAvoidingView, Platform, TouchableOpacity, Switch } from 'react-native';
// import Toggle from './Toggle';
import SwitchToggle from 'react-native-switch-toggle';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    gender: 'Male',
  });
  const [errors, setErrors] = useState({});
//   const [gender, setGender] = useState('Male');

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
  const handleToggle = () => {
    const newGender = formData.gender === 'Male' ? 'Female' : 'Male';
    setFormData({ ...formData, gender: newGender });
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
      {/* <Toggle/> */}
      <View style={styles.toggleContainer}>
        <View style={styles.genderContainer}>
          <Text style={[styles.genderText, formData.gender === 'Male' && styles.selectedGenderMaleText]}>Male</Text>
          <View style={styles.switchContainer}>
            <Switch
              value={formData.gender === 'Female'}
              onValueChange={handleToggle}
              trackColor={{ false: 'blue', true: 'green' }}
              thumbColor="white"
              style={styles.switch}
            />
          </View>
          <Text style={[styles.genderText, formData.gender === 'Female' && styles.selectedGenderText]}>Female</Text>
        </View>
      </View>
      <Text style={styles.selectedGender}>Selected Gender: {formData.gender}</Text>
      
      
    {/* <Text style={styles.selectedGender}>Selected Gender: {formData.gender}</Text> */}
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
    marginBottom: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchContainer: {
    width: 60,
    height: 30,
    borderRadius: 15,
    padding: 5,
    margin:5
  },
  switchCircle: {
    width: 22,
    height: 20,
    borderRadius: 13,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "100%",
    alignItems: 'center',
    // marginLeft: 10,
  },
  genderText: {
    fontSize: 18,
    color: '#333',
  },
  selectedGenderText: {
    color: 'green',
    fontWeight: 'bold',
  },
  selectedGenderMaleText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  selectedGender: {
    fontSize: 18,
    marginTop: 20,
  },
  switchContainer: {
    transform: [{ scaleX: 1 }, { scaleY: 1 }],
    margin: 5,
  },
  switch: {
    transform: [{ scaleX: 1.8 }, { scaleY: 1.5 }],
  },
});
