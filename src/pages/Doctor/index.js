import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  DoctorCategory,
  Gap,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from '../../components';
import {Fire} from '../../config';
import {colors, fonts} from '../../utils';
const Doctor = ({navigation}) => {
  // State
  const [news, setNews] = useState([]);
  const [categoryDoctor, setCategoryDoctor] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getNews();
    getCategoryDoctor();
    getTopRatedDoctor();
  }, []);

  const getTopRatedDoctor = () => {
    Fire.database()
      .ref('doctors/')
      .orderByChild('rate')
      .limitToLast(3)
      .once('value')
      .then(res => {
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map(key => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
          setDoctors(data);
        }
      });
  };

  const getNews = () => {
    Fire.database()
      .ref('news/')
      .once('value')
      .then(res => {
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter(el => el !== null);
          setNews(filterData);
        }
      });
  };

  const getCategoryDoctor = () => {
    Fire.database()
      .ref('category_doct/')
      .once('value')
      .then(res => {
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter(el => el !== null);
          setCategoryDoctor(filterData);
        }
      });
  };

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
                {categoryDoctor.map(item => {
                  return (
                    <DoctorCategory
                      profession={item.category}
                      key={item.id}
                      onPress={() => navigation.navigate('ChooseDoctor', item)}
                    />
                  );
                })}

                <Gap width={6} />
              </View>
            </ScrollView>
          </View>
          <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
          {doctors.map(doctor => {
            return (
              <RatedDoctor
                key={doctor.id}
                name={doctor.data.fullName}
                avatar={{uri: doctor.data.photo}}
                desc={doctor.data.profession}
                onPress={() => navigation.navigate('DoctorProfile', doctor)}
              />
            );
          })}

          <Text style={styles.sectionLabel}>Good News</Text>
          {news.map(item => {
            return (
              <NewsItem
                title={item.title}
                date={item.date}
                image={item.image}
                key={item.id}
              />
            );
          })}
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
