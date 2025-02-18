import {useNavigation} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {RootStackParamList} from '../App'
import {Pressable, SafeAreaView, Text} from 'react-native'
import {styles} from '../styles'
import * as Sentry from '@sentry/react-native'

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={styles.Button}
        onPress={() => navigation.navigate('Calculator')}>
        <Text>Calculator</Text>
      </Pressable>
      <Pressable
        style={styles.Button}
        onPress={() => Sentry.captureException('Testing')}>
        <Text>Test Sentry</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default Home
