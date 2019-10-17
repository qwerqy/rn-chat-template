// Import the screens
import Main from "./screens/Main";
// import Chat from './components/Chat';
// Import React Navigation
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
// Create the navigator
const AppStack = createStackNavigator({
  Main: { screen: Main }
  // Chat: { screen: Chat },
});
// Export it as the root component
export default createAppContainer(AppStack);
