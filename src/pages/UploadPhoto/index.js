import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Header, Button, Link, Gap} from '../../components';
import {ILNullPhoto} from '../../assets/illustration';
import {IconPlus, IconRemove} from '../../assets';
import {colors, fonts} from '../../utils';
import ImagePicker from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
const UploadPhoto = ({navigation}) => {
  const [hasPhoto, setHasPhoto] = useState(true);
  const [photo, setPhoto] = useState(ILNullPhoto);
  const getImage = () => {
    // Open Image Library:
    ImagePicker.launchImageLibrary({}, response => {
      console.log(response);
      if (response.didCancel || response.error) {
        showMessage({
          message: 'ops, sepertinya anda tidak memilih fotonya?',
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      } else {
        const source = {uri: response.uri};
        setPhoto(source);
        setHasPhoto(false);
      }
    });
  };

  return (
    <View style={styles.page}>
      <Header title="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity onPress={getImage} style={styles.avatarWrapper}>
            <Image source={photo} style={styles.avatar} />
            {!hasPhoto && <IconRemove style={styles.addPhoto} />}
            {hasPhoto && <IconPlus style={styles.addPhoto} />}
          </TouchableOpacity>
          <Text style={styles.name}>Shayna Bambang</Text>
          <Text style={styles.profession}>Product Designer</Text>
        </View>

        <View>
          <Button
            disable={hasPhoto}
            title="Upload and Continue"
            onPress={() => navigation.replace('MainApp')}
          />
          <Gap height={30} />
          <Link
            title="Skip for this"
            align="center"
            size={16}
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {backgroundColor: 'white', flex: 1},
  content: {
    paddingHorizontal: 40,
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  profile: {alignItems: 'center', flex: 1, justifyContent: 'center'},
  avatar: {width: 110, height: 110, borderRadius: 110 / 2},
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {position: 'absolute', bottom: 8, right: 6},
  name: {
    fontSize: 24,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
  profession: {
    fontSize: 18,
    fontFamily: fonts.primary.normal,
    textAlign: 'center',
    color: colors.text.secondary,
    marginTop: 4,
  },
  footer: {},
});
