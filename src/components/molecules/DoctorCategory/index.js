import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ILCatObat, ILCatUmum, ILCatPsikiater} from '../../../assets';
import {fonts, colors} from '../../../utils';

const DoctorCategory = ({profession}) => {
  const Category = () => {
    if (profession === 'dokter umum')
      return (
        <View>
          <ILCatUmum />
          <View style={styles.write}>
            <Text style={styles.sayaButuh}>
              Saya butuh <Text style={styles.profession}>{profession}</Text>{' '}
            </Text>
          </View>
        </View>
      );

    if (profession === 'psikiater')
      return (
        <View>
          <ILCatPsikiater />
          <View style={styles.write}>
            <Text style={styles.sayaButuh}>
              Saya butuh <Text style={styles.profession}>{profession}</Text>{' '}
            </Text>
          </View>
        </View>
      );

    if (profession === 'dokter obat')
      return (
        <View>
          <ILCatObat />
          <View style={styles.write}>
            <Text style={styles.sayaButuh}>
              Saya butuh <Text style={styles.profession}>{profession}</Text>{' '}
            </Text>
          </View>
        </View>
      );
  };

  return (
    <View style={styles.container}>
      <Category />
    </View>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#EDFCFD',
    width: 100,
    height: 130,
    borderRadius: 10,
    padding: 12,
    marginRight: 10,
  },
  write: {marginTop: 28, width: 75},
  sayaButuh: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  },
  profession: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
    fontWeight: 'bold',
  },
});
