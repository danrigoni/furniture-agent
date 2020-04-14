import React from 'react';
import defaultRoomImg from '../../assets/default-room.jpg'
import Icon from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'

import { Container, Header, Room, Title, ButtonsAdd, ButtonAdd, TextButton, List, DeviceContainer, DeviceText, DeviceId, TrashButton } from './styles';

export default function AmbienceScreen() {
  const navigation = useNavigation()


  function navigateToNewDevice() {
    navigation.navigate('NewDevice')
  }

  function navigateToNewDeviceScenario() {
    navigation.navigate('NewDeviceScenario')
  }


  return (
    <Container>
      <Header>
      <Room source={defaultRoomImg} />
      <Title>SALA DE ESTAR</Title>
      </Header>

      <ButtonsAdd>
        <ButtonAdd onPress={navigateToNewDeviceScenario}>
          <TextButton>ADD SCENARIO</TextButton>
        </ButtonAdd>

        <ButtonAdd onPress={navigateToNewDevice}>
          <TextButton>ADD OUTRO</TextButton>
        </ButtonAdd>
      </ButtonsAdd>

      <List keyboardShouldPersistTaps="handled"
      data={[1,2, 3, 4, 5, 6, ,7, 8, 9, 10, 11, 12, 18]}
      keyExtractor={item => String(item)}
      renderItem={({ item }) =>  (
        <DeviceContainer>
          <DeviceText>Google Alexa -  FAB GOOGLE</DeviceText>
          <DeviceId>id: 46473</DeviceId>
          <TrashButton>
            <Icon name="500px" size={22} color="#fff" />
          </TrashButton>
        </DeviceContainer>

      )}/>


    </Container>
  );
}
