import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, View } from 'react-native';
import { cryptos } from '../data';
import { RootStackParamList } from '../navigators/RootStackNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      {cryptos.map((crypto) => (
        <Pressable
          style={{ marginBottom: 12 }}
          key={crypto.name}
          onPress={() => navigation.navigate('Details', { name: crypto.name })}
        ></Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12,
  },
});
