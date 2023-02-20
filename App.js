import MainStack from './src/navigation/MainStack';
import { StatusBar } from "react-native";

/*import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);*/


export default function App() {
  return (
    <>
      <StatusBar hidden={true} />
      <MainStack />
    </>
  );
}

