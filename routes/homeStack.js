import { createStackNavigator} from 'react-navigation-stack'
//import { createAppContainer, getActiveChildNavigationOptions } from "react-navigation";
import WelcomeScreen from "../app/screens/WelcomeScreen";
import LoginScreen from "../app/screens/LoginScreen";
import InstantIDScreen from "../app/screens/InstantIDScreen";
import MainScreen from "../app/screens/MainScreen";
import InstantPassportScreen from "../app/screens/InstantPassportScreen";
import TonyDLScreen from "../app/screens/TonyDLScreen";
import TonyPPScreen from "../app/screens/TonyPPScreen";
import TonyPLScreen from "../app/screens/TonyPLScreen";
import TonyGPScreen from "../app/screens/TonyGPScreen";
import TonyDocScreen from "../app/screens/Tony_DocScreen";
import TonyBCScreen from "../app/screens/TonyBCScreen";
import TonySSCScreen from "../app/screens/TonySSCScreen";
import TonyMLScreen from "../app/screens/TonyMLScreen";
import VoteScreen from "../app/screens/VoteScreen";

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
    },
    TDLScreen:{
        screen: TonyDLScreen,
        navigationOptions: {headerShown: false
        }
    },
    TPPScreen:{
        screen: TonyPPScreen,
        navigationOptions: {headerShown: false
        }
    },
    TPLScreen:{
        screen: TonyPLScreen,
        navigationOptions: {headerShown: false
        }
    },
    TGPScreen:{
        screen: TonyGPScreen,
        navigationOptions: {headerShown: false
        }
    },
    TDocScreen:{
        screen: TonyDocScreen,
        navigationOptions: {headerShown: false
        }
    },
    TBCScreen:{
        screen: TonyBCScreen,
        navigationOptions: {headerShown: false
        }
    },
    TSSCScreen:{
        screen: TonySSCScreen,
        navigationOptions: {headerShown: false
        }
    },
    TMLScreen:{
        screen: TonyMLScreen,
        navigationOptions: {headerShown: false
        }
    },VScreen:{
        screen: VoteScreen,
        navigationOptions: {headerShown: false
        }
    },
}

const homeStack = createStackNavigator(screens);

export default homeStack;
//export default createAppContainer(homeStack);