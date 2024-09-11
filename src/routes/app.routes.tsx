import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Search } from '@screens/Search';
import { Dashboard } from '@screens/Dashboard';
import { theme } from '@styles/theme';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false, navigationBarColor: theme.colors.gray_900 }}>
      <Screen
        name="search"
        component={Search}
      />

      <Screen
        name="dashboard"
        component={Dashboard}
      />
    </Navigator>
  )
}