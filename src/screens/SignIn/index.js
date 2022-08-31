/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import * as S from './styles';
import { TouchableOpacity } from 'react-native';


import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

import LinearGradient from 'react-native-linear-gradient';

import imageBackground from '../../assets/background.jpg';

export default function SignIn() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState(false);


  function handleLogin() {
    // REGISTER USER
    if (type) {
      if (name === '' || email === '' || password === '') { return; }

      auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
          user.user.updateProfile({
            displayName: name,
          })
            .then(() => {
              navigation.goBack();
            });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // LOGIN USER
      auth().signInWithEmailAndPassword(email, password)
        .then(() => {
          navigation.goBack();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <S.Wrapper>
      <S.BackgroundImg source={imageBackground} resizeMode="cover"  >
        <S.Title>Hello Groups </S.Title>

        {type && (<S.Input
          value={name}
          onChangeText={text => setName(text)}
          placeholderTextColor="#8F8F8F"
          placeholder="Nome"
        />)}

        <S.Input
          value={email}
          onChangeText={text => setEmail(text)}
          placeholderTextColor="#8F8F8F"
          placeholder="Email"
        />

        <S.Input
          value={password}
          onChangeText={text => setPassword(text)}
          placeholderTextColor="#8F8F8F"
          placeholder="Senha"
          secureTextEntry={true}
        />
        <S.Button onPress={() => handleLogin()}>
          {/* <S.CenterViewButton > */}
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={type ? ['#000', '#3075DD'] : ['#3075DD', '#000']} style={{ height: 50, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <S.TextButton>
              {type ? 'Cadastrar' : 'Acessar'}
            </S.TextButton>
          </LinearGradient>
          {/* </S.CenterViewButton> */}
        </S.Button>

        <TouchableOpacity onPress={() => setType(!type)}>
          <S.TextButton>
            {type ? 'Já possuo uma conta' : 'Criar uma conta'}
          </S.TextButton>
        </TouchableOpacity>
      </S.BackgroundImg>

    </S.Wrapper>
  );
}


