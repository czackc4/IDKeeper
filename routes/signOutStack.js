import { createStackNavigator} from 'react-navigation-stack'
import loginScreen from "../app/screens/LoginScreen";


const screens = {
    Login: {
        screen: loginScreen,
        navigationOptions: {headerShown: false
        }
    }
}

const signOutStack = createStackNavigator(screens);

export default signOutStack;