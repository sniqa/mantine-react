import { Languagelist } from '@libs/language'
import { en } from '@libs/language/en'
import { zh_cn } from '@libs/language/zh'
import { MRT_Localization } from 'mantine-react-table'

// define constant list
export interface LanguageConstants {
	languageKind: Languagelist
	Chinese: string
	English: string
	toggleDarkOrLightModelTip: string
	toggleLanguageTip: string
	alertMessageTip: string
	homePageTip: string
	userManagePageTip: string
	profilePageTip: string
	networkPageTip: string
	networkSummaryTip: string
	networkTypeTip: string
	ipAddressTip: string
	linerTip: string
	telTip: string
	devicePageTip: string
	computerTip: string
	officeDeviceTip: string
	networkDeviceTip: string
	serverTip: string
	usbKeyTip: string
	messagePageTip: string
	settingPageTip: string
	projectNameTip: string
	goBackHomePapeTip: string
	notFoundTip: string
	accountTip: string
	passwordTip: string
	rememberPasswordTip: string
	autoLoginTip: string
	loginTip: string
	inputMustBeProvide: string
	navbarToggleExpandTip: string
	MantineReactTableLanguage: MRT_Localization
	MantineReactTableDeleteSelectionTip: string
	MantineReactTableDeleteTip: string
	MantineReactTableExportAllTip: string
	MantineReactTableExportSelectionTip: string
	MantineReactTableUploadTip: string
	MantineReactTableCreateTip: string
	cancelButtonTip: string
	acceptButtonTip: string
	hint: string
	confirmDeletion: string
	editTip: string
	pickDateTip: string
}

export const constantlist = {
	zh_cn,
	en,
}

export enum ConstantList {
	Mantine_react_table_conteiner_height = 'calc(100vh - 13.5rem)',
}
