import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {List} from '../../components';
import {colors, fonts} from '../../utils';
import {DummyDoctor1, DummyDoctor2, DummyDoctor3} from '../../assets';
const Messages = ({navigation}) => {
  const [doctors] = useState([
    {
      id: 1,
      profile: DummyDoctor1,
      name: 'Bambang Yudho',
      desc: 'Oh tentu saja, saya akan memberik...',
    },
    {
      id: 2,
      profile: DummyDoctor2,
      name: 'Melinda Wati',
      desc: 'Baik ibu, terima kasih banyak atas wak...',
    },
    {
      id: 3,
      profile: DummyDoctor3,
      name: 'Alexander Graham',
      desc: 'Oke menurut pak dokter bagaimana..',
    },
  ]);

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>

        {doctors.map(doctor => {
          return (
            <List
              key={doctor.id}
              desc={doctor.desc}
              name={doctor.name}
              profile={doctor.profile}
              onPress={() => navigation.navigate('Chatting')}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.secondary, flex: 1},
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
