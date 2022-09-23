import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import GetStartedScreen from "./src/Screens/GetStartedScreen";
import PreviewScreens from "./src/Screens/PreviewScreen";
import ReviewScreens from "./src/Screens/ReviewSceens";
import RegisterScreen from "./src/Screens/RegisterScreen";
import SignupScreen from "./src/Screens/SignupScreen";

const navigator=createStackNavigator({
  review:ReviewScreens,
  preview:PreviewScreens,
  get:GetStartedScreen,
  register:RegisterScreen,
  signup:SignupScreen
  
},{
initialRouteName:"signup",
defaultNavigationOptions:{
  title:"Bussiness Search"
}


})
export default createAppContainer(navigator);