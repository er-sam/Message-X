
import { AuthProvider } from "./Context/authContext";
import StackNavigator from "./StackNavigator";


export default function App() {
  return (
    <>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </>
  );
}
