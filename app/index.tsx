// import { Link } from 'expo-router'
// import { Text, View , SafeAreaView} from 'react-native'
import { Redirect } from "expo-router"

const App = () => {
  // return <Redirect href="/(stack)/home" />
  return <Redirect href="/tabs" />

  // return (
  //   <SafeAreaView>
  //   <View className='mt-6 mx-2.5 '>
  //       <Text className='text-3xl font-work-black text-primary'>Hola Mundo</Text>
  //       <Text className='text-3xl font-work-medium text-secondary-100'>Hola Mundo</Text>
  //       <Text className='text-3xl font-work-medium text-secondary-200'>Hola Mundo</Text>
  //       <Text className='text-3xl font-work-light text-tertiary'>Hola Mundo</Text>
    
  //   <Link href="/productos">Productos</Link>
  //   </View>
  //   </SafeAreaView>
  // )
}

export default App 