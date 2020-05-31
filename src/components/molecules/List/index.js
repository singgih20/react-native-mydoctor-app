import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {DummyDoctor1, IconNext} from '../../../assets';
import {colors, fonts} from '../../../utils';

const List = ({name, profile, desc, type, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={profile} style={styles.avatar} />
      <View style={styles.wrapper}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      {type === 'next' && <IconNext />}
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {width: 46, height: 46, borderRadius: 46 / 2, marginRight: 12},
  wrapper: {flex: 1},
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  desc: {
    fontSize: 16,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
});
