import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, Profile, List} from '../../components';
const UserProfile = () => {
  return (
    <View>
      <Header title="Profile" />
      <Profile />
      <Text>User Profile Page</Text>
      <List
        name="Edit Profile"
        desc="Last Update Yesterday"
        type="next"
        icon="icon"
      />
      <List
        name="Edit Profile"
        desc="Last Update Yesterday"
        type="next"
        icon="icon"
      />
      <List
        name="Edit Profile"
        desc="Last Update Yesterday"
        type="next"
        icon="icon"
      />
      <List
        name="Edit Profile"
        desc="Last Update Yesterday"
        type="next"
        icon="icon"
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({});
