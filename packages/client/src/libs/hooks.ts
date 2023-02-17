import {
  ColorSchemeModel,
  StateContext,
  StateReducerType,
  useContext,
} from "@libs/context";
import { constantlist, Languagelist } from "@libs/constant";

export { Languagelist };

// get cureent language
export const useLanguage = () => {
  const { state } = useContext(StateContext);

  return constantlist[state.language];
};

// set language kind
export const useToggleLanguage = () => {
  const { dispatch } = useContext(StateContext);

  const toggleLanguage = (language: Languagelist) =>
    dispatch({
      type: StateReducerType.languageKind,
      payload: language,
    });

  return {
    toggleLanguage,
  };
};

// get, set dark / light model
export const useColorScheme = () => {
  const { state, dispatch } = useContext(StateContext);

  const toggleColorScheme = () =>
    dispatch({
      type: StateReducerType.toggleColorScheme,
      payload: "",
    });

  const isDarkModel = state.colorScheme === ColorSchemeModel.DarkModel;

  return {
    colorScheme: state.colorScheme,
    toggleColorScheme,
    isDarkModel,
  };
};

// get set token
export const useLogin = () => {
  const { state, dispatch } = useContext(StateContext);

  const isLogin = state.token != "";

  const login = (token: string) =>
    dispatch({
      type: StateReducerType.setToken,
      payload: token,
    });

  const logout = () =>
    dispatch({
      type: StateReducerType.deleteToken,
      payload: "",
    });

  return {
    isLogin,
    login,
    logout,
  };
};
