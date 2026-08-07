import{NavigationContainer} from '@react-navigation/native';
import{createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../screens/Login/login';
import Home from '../screens/home/Home';

const Stackn = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <NavigationContainer>
         <StackNavigator>

            <Stack.Screen
            name="Login"
            component={Login}
            />

            <Stack.Screen
            name="Home"
            component={Home}
            />

         </StackNavigator>
        </NavigationContainer>
    );  
}