import { createStackNavigator} from 'react-navigation-stack'
//import { createAppContainer, getActiveChildNavigationOptions } from "react-navigation";
import WelcomeScreen from "../app/screens/WelcomeScreen";
import LoginScreen from "../app/screens/LoginScreen";
import InstantIDScreen from "../app/screens/InstantIDScreen";
import MainScreen from "../app/screens/MainScreen";
import InstantPassportScreen from "../app/screens/InstantPassportScreen";


const screens = {
    Welcome: {
        screen: WelcomeScreen,
        navigationOptions: {headerShown: false
        }
    },
    Login: {
        screen: LoginScreen,
        navigationOptions: {headerShown: false
        }
    },
    InstantID:{
        screen: InstantIDScreen,
        navigationOptions: {headerShown: false
        }
    },
    InstantPassport:{
        screen: InstantPassportScreen,
        navigationOptions: {headerShown: false
        }
    },
    Main:{
        screen: MainScreen,
        navigationOptions: {headerShown: false
        }
    }
}

const homeStack = createStackNavigator(screens);

export default homeStack;
//export default createAppContainer(homeStack);