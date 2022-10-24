import { createNativeStackNavigator } from '@react-navigation/native-stack'
//
import { HomeScreen } from '../../features/home/screen'
import { UserDetailScreen } from '../../features/user/detail-screen'
//
import { Restaurant } from '../../features/restaurant/[id]'
import { SettingsScreen } from '../../features/settings/screen'
//
const Stack = createNativeStackNavigator<{
  home: undefined
  'user-detail': {
    id: string
  }
  settings: undefined
  restaurant: undefined
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="settings"
        component={SettingsScreen}
        options={{
          title: 'Settings',
        }}
      />
      <Stack.Screen
        name="restaurant"
        component={Restaurant}
        options={{
          title: 'Restaurant',
        }}
      />
      <Stack.Screen
        name="user-detail"
        component={UserDetailScreen}
        options={{
          title: 'User',
        }}
      />
    </Stack.Navigator>
  )
}
