import CustomButton from '@/components/shared/CustomButton';
import { Link, router } from 'expo-router';
import { SafeAreaView, View } from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <CustomButton color="primary" className="mb-2"
          onPress={ () => router.push('/products')}
        >Productos</CustomButton>

        <CustomButton className="mb-2" color="secondary"
          onPress={ () => router.push('/profile')}
        >Profile</CustomButton>

        <CustomButton className="mb-2" color="tertiary"
          onPress={ () => router.push('/settings')}
        >Ajustes</CustomButton>

        <Link href="/products" asChild>
              <CustomButton className="mb-10" variant="text-only" color="primary">Productos</CustomButton>
        </Link>
        {/* <Link className="mb-5" href="/productos">Productos{''}</Link>
        <Link className="mb-5" href="/profile">Perfil{''}</Link>
        <Link className="mb-5" href="/settings">Ajustes{''}</Link> */}
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen;