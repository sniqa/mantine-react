import { useLogin } from '@libs/hooks'
import { AppShell, useMantineTheme } from '@mantine/core'
import { RouterPath } from '@path'
import { Suspense, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { useMediaQuery } from '@mantine/hooks'
import MainHeader from './MainHeader'
import SideNavbar from './SideNavbar'

export default () => {
	const { isLogin } = useLogin()

	const theme = useMantineTheme()

	const [opened, setOpened] = useState(false)

	const matches = useMediaQuery(`(min-width: ${theme.breakpoints.sm}px)`)

	if (!isLogin) {
		return <Navigate to={RouterPath.Login} />
	}

	return (
		<AppShell
			layout={matches ? 'alt' : 'default'}
			styles={{
				main: {
					background:
						theme.colorScheme === 'dark'
							? theme.colors.dark[6]
							: theme.colors.gray[0],
				},
			}}
			navbarOffsetBreakpoint="sm"
			asideOffsetBreakpoint="sm"
			navbar={<SideNavbar opened={opened} isBreakepoint={matches} />}
			header={<MainHeader opened={opened} close={() => setOpened(!opened)} />}
		>
			<Suspense fallback={<></>}>
				<Outlet />
			</Suspense>
		</AppShell>
	)
}
