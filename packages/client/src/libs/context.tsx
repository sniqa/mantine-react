import { Languagelist } from "@libs/constant";
import { createContext, ReactNode, useContext, useReducer } from "react";
import { ColorScheme } from "@mantine/core";

export enum ColorSchemeModel {
  LightModel = "light",
  DarkModel = "dark",
}

interface State {
  language: Languagelist;
  colorScheme: ColorScheme;
  token: string;
}

// initial value of reducer
const initialValue: State = {
  language: Languagelist.zh,
  colorScheme: ColorSchemeModel.LightModel,
  token: "hello",
};

export enum StateReducerType {
  languageKind = "language-kind",
  toggleColorScheme = "toggle-color-scheme",
  setToken = "set-token",
  deleteToken = "delete-token",
}

interface StateReducerAction {
  type: string;
  payload: any;
}

const stateReducer = (state: State, action: StateReducerAction) => {
  const { type, payload } = action;

  switch (type) {
    // set language kind
    case StateReducerType.languageKind:
      return { ...state, language: payload };

    // toggle color scheme
    case StateReducerType.toggleColorScheme:
      const currentModel =
        state.colorScheme === ColorSchemeModel.DarkModel
          ? ColorSchemeModel.LightModel
          : ColorSchemeModel.DarkModel;

      return { ...state, colorScheme: currentModel };

    // set token
    case StateReducerType.setToken:
      return { ...state, token: payload };

    // destroy token
    case StateReducerType.deleteToken:
      return { ...state, token: "" };
    default:
      return state;
  }
};

interface Context {
  state: State;
  dispatch: React.Dispatch<StateReducerAction>;
}

export const StateContext = createContext<Context>({
  state: initialValue,
  dispatch: () => {},
});

export const StateProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(stateReducer, initialValue);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export { useContext };
