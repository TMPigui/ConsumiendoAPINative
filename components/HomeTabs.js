import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Customer from "./Customer";
import ListCustomer from "./ListCustomer";
import {MaterialIcons} from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

export default function HomeTabs(){
    return(
        <Tab.Navigator
        screenOptions={{
            headerShown:false,
            tabBarActiveBackgroundColor:'orange'
        }}>
            <Tab.Screen name="Customer" component={Customer} options={{
                title: 'Clientes',
                tabBarIcon: ({color,size}) => (<MaterialIcons name="person" color="red" size={25}/>)
            }}/>
            <Tab.Screen name="ListaCustomer" component={ListCustomer} options={{
                title: 'Lista de clientes',
                tabBarIcon: ({color,size}) => (<MaterialIcons name="list" color="red" size={25}/>)
            }}/>
        </Tab.Navigator>
    )
}