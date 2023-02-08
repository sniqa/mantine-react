import { useToggleDarkModel } from '@libs/toggleDarkModel'
import { ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import { NavigationProgress } from '@mantine/nprogress'
import { RouterProvider } from 'react-router-dom'
import router from './router'

export default () => {
	const { colorScheme, toggleColorScheme } = useToggleDarkModel()

	return (
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}
		>
			<MantineProvider
				theme={{ colorScheme }}
				withGlobalStyles
				withNormalizeCSS
			>
				<NotificationsProvider position="top-center">
					<NavigationProgress />
					<RouterProvider router={router} />
				</NotificationsProvider>
			</MantineProvider>
		</ColorSchemeProvider>
	)
}
