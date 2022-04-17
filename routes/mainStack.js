import { createStackNavigator} from 'react-navigation-stack'
import MainScreen from "../app/screens/MainScreen";


const screens = {
    Main: {
        screen: MainScreen,
        navigationOptions: {headerShown: false
        }
    }
}

const mainStack = createStackNavigator(screens);

export default mainStack;