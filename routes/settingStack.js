import { createStackNavigator} from 'react-navigation-stack'
import settingsScreen from "../app/screens/settingsScreen";


const screens = {
    Settings: {
        screen: settingsScreen,
        navigationOptions: {headerShown: false
        }
    }
}

const settingStack = createStackNavigator(screens);

export default settingStack;