import {
    Alert,
} from 'react-native';
import {createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import homeStack from './homeStack';
import settingStack from './settingStack';
import signOutStack from './signOutStack';
import Sidebar from '../app/components/SideBar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const DrawerNav = createDrawerNavigator({
    Home: {
        screen: homeStack,
        navigationOptions: {
            drawerIcon: ({tintColor}) => <FontAwesome name="id-card" size={15} color={tintColor} />
        }
    },
    Settings: {
        screen: settingStack,
        navigationOptions: {
            drawerIcon: ({tintColor}) => <FontAwesome name="gear" size={15} color={tintColor} />
        }
    },
    'Sign Out':{
        screen: signOutStack,
        navigationOptions: {
            drawerIcon: ({tintColor}) => <Feather name="log-out" size={15} color={tintColor} />
        }
    }
},{
    contentComponent: props => <Sidebar {...props}/>,

    hideStatusBar: true,
    edgeWidth: 0,
    contentOptions: {
        activeBackgroundColor: 'rgba(38,85,139, 0.1)',
        activeTintColor: '#26558b',
        itemStyle:{
            borderRadius: 4
        },
        itemsContainerStyle: {
            marginTop: 15,
            marginHorizontal: 5,
        },
    }
});

export default createAppContainer(DrawerNav);

