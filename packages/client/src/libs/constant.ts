import { zh } from "@libs/language/zh";
import { en } from "@libs/language/en";

// define constant list
export interface Constants {
  Chinese: string;
  English: string;
  toggleDarkOrLightModelTip: string;
  toggleLanguageTip: string;
  alertMessageTip: string;
  homePageTip: string;
  userManagePageTip: string;
  profilePageTip: string;
  networkPageTip: string;
  networkSummaryTip: string;
  networkTypeTip: string;
  ipAddressTip: string;
  linerTip: string;
  telTip: string;
  devicePageTip: string;
  computerTip: string;
  officeDeviceTip: string;
  networkDeviceTip: string;
  serverTip: string;
  usbKeyTip: string;
  messagePageTip: string;
  settingPageTip: string;
  projectNameTip: string;
  goBackHomePapeTip: string;
  notFoundTip: string;
  accountTip: string;
  passwordTip: string;
  rememberPasswordTip: string;
  autoLoginTip: string;
  loginTip: string;
  inputMustBeProvide: string;
  navbarToggleExpandTip: string;
}

export const constantlist = {
  zh,
  en,
};

export enum Languagelist {
  zh = "zh",
  en = "en",
}
