import {
	IconDevice,
	IconDocument,
	IconHome,
	IconMessage,
	IconNetwork,
	IconSettings,
	IconUserManage,
} from '@comps/FontAwesomeIcons'
import { ReactNode } from 'react'

interface RoutePathMap {
	path: string
	title: string
	icon?: ReactNode
}

interface RoutePath {
	root: RoutePathMap
	user: RoutePathMap
	document: RoutePathMap
	network: RoutePathMap
	device: RoutePathMap
	message: RoutePathMap
	setting: RoutePathMap
}

// export const routePath: RoutePath = {
// 	root: {
// 		path: '/',
// 		title: '',
// 	},
// 	user: {
// 		path: '/user',
// 		title: '用户',
// 		icon: <IconUserManage />,
// 	},
// 	document: {
// 		path: '/document',
// 		title: '文档',
// 		icon: <IconDocument />,
// 	},
// 	network: {
// 		path: '/network',
// 		title: '网络',
// 		icon: <IconNetwork />,
// 	},
// 	device: {
// 		path: '/device',
// 		title: '设备',
// 		icon: <IconDevice />,
// 	},
// 	message: {
// 		path: '/message',
// 		title: '消息',
// 		icon: <IconMessage />,
// 	},
// 	setting: {
// 		path: '/setting',
// 		title: '设置',
// 		icon: <IconSettings />,
// 	},
// }

export const routePath: RoutePathMap[] = [
	{
		path: '/home',
		title: '主页',
		icon: <IconHome />,
	},
	{
		path: '/user',
		title: '用户',
		icon: <IconUserManage />,
	},
	{
		path: '/document',
		title: '文档',
		icon: <IconDocument />,
	},
	{
		path: '/network',
		title: '网络',
		icon: <IconNetwork />,
	},
	{
		path: '/device',
		title: '设备',
		icon: <IconDevice />,
	},
	{
		path: '/message',
		title: '消息',
		icon: <IconMessage />,
	},
	{
		path: '/setting',
		title: '设置',
		icon: <IconSettings />,
	},
]
