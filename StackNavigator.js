import { NavigationContainer } from "@react-navigation/native";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chat from "./Screens/Chat";
import People from "./Screens/People";
import Friends from "./Screens/Friends";
import Settings from "./Screens/Settings";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown:false}} name="Register" component={Register} />
        <Stack.Screen  name="Chat" component={Chat} />
        <Stack.Screen  name="People" component={People} />
        <Stack.Screen  name="Friends" component={Friends} />
        <Stack.Screen  name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
