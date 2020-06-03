import React, {useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {
  HomeProfile,
  RatedDoctor,
  NewsItem,
  DoctorCategory,
  Gap,
} from '../../components';
import {fonts, colors, getData} from '../../utils';
import {
  JSONCategoryDoctor,
  DummyDoctor1,
  DummyDoctor2,
  DummyDoctor3,
} from '../../assets';

const Doctor = ({navigation}) => {
  useEffect(() => {
    getData('user').then(res => console.log(res));
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={30} />
          <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
          <Gap height={30} />
          <Text style={styles.welcome}>
            Mau konsultasi dengan siapa hari ini?
          </Text>
          <Gap height={16} />
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={16} />
                {JSONCategoryDoctor.data.map(item => {
                  return (
                    <DoctorCategory
                      profession={item.profession}
                      key={item.id}
                      onPress={() => navigation.navigate('ChooseDoctor')}
                    />
                  );
                })}

                <Gap width={6} />
              </View>
            </ScrollView>
          </View>
          <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
          <RatedDoctor
            name="Alexa Rachel"
            avatar={DummyDoctor1}
            desc="Peaditrian"
            onPress={() => navigation.navigate('DoctorProfile')}
          />
          <RatedDoctor
            name="Sunny Frank"
            avatar={DummyDoctor2}
            desc="Peaditrian"
            onPress={() => navigation.navigate('DoctorProfile')}
          />
          <RatedDoctor
            name="Angga Risky"
            avatar={DummyDoctor3}
            desc="Peaditrian"
            onPress={() => navigation.navigate('DoctorProfile')}
          />
          <Text style={styles.sectionLabel}>Good News</Text>
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  welcome: {
    fontSize: 20,
    width: 215,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  category: {
    flexDirection: 'row',
  },
  wrapperScroll: {marginHorizontal: -16},
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
