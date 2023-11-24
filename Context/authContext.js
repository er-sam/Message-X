import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [State, setState] = useState({
    user: null,
    token: "",
  });

  useEffect(() => {
    const LoadLocalData = async () => {
      const StoreToken = await AsyncStorage.getItem("auth");
      const userdata = await AsyncStorage.getItem("user");
      const udata = JSON.parse(userdata);
      console.log("userdata",udata)
      setState({
        ...State,
        user: udata,
        token: StoreToken,
      });
    };
    LoadLocalData();
  }, []);


  return (
    <AuthContext.Provider value={[State, setState]}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
