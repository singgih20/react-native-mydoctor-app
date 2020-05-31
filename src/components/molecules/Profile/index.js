import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyUser, IconRemove} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Profile = ({name, desc}) => {
  return (
    <View style={styles.container}>
      <View style={styles.borderProfile}>
        <Image source={DummyUser} style={styles.avatar} />
        <IconRemove style={styles.removePhoto} />
      </View>
      {name && (
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.job}>{desc}</Text>
        </View>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center'},
  borderProfile: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  removePhoto: {position: 'absolute', right: 8, bottom: 8},
  avatar: {width: 110, height: 110, borderRadius: 110 / 2},
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 16,
  },
  job: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
  },
});
