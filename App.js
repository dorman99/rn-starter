import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Lists: ListScreen,
    Images: ImageScreen, 
    Counters: CounterScreen,
    Colors: ColorScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Learning RN",
    },
  }
);

export default createAppContainer(navigator);
