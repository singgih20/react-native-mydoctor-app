import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {DummyUser} from '../../../assets';
import {fonts, colors} from '../../../utils';

const HomeProfile = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={DummyUser} style={styles.image} />
      <View style={styles.user}>
        <Text style={styles.name}>Shayna Melinda</Text>
        <Text style={styles.profession}>Product Designer</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  image: {width: 46, height: 46, borderRadius: 46 / 2},
  user: {marginLeft: 12},
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  profession: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
  },
});
