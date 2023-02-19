import {
	IconBell,
	IconDark,
	IconEllipsisVertical,
	IconLight,
} from '@comps/FontAwesomeIcons'
import LanguageSelect from '@comps/LanguageSelect'
import {
	ActionIcon,
	Avatar,
	Breadcrumbs,
	Burger,
	Flex,
	Header,
	Indicator,
	MediaQuery,
	Tooltip,
	useMantineTheme,
} from '@mantine/core'

import { useColorScheme } from '@libs/hooks'

import { useLanguage } from '@libs/hooks'

interface HeaderProps {
	opened: boolean
	close: () => void
}

export default ({ opened, close }: HeaderProps) => {
	const theme = useMantineTheme()

	const { isDarkModel, toggleColorScheme } = useColorScheme()

	const language = useLanguage()

	return (
		<Header height={64}>
			<div className="flex justify-between items-center h-full px-2">
				<MediaQuery
					largerThan="sm"
					styles={{ display: 'none' }}
					className="w-full"
				>
					<Flex justify="space-between">
						<Burger
							opened={opened}
							onClick={close}
							size="sm"
							color={theme.colors.gray[6]}
							mr="xl"
						/>

						<ActionIcon onClick={() => {}}>
							<IconEllipsisVertical />
						</ActionIcon>
					</Flex>
				</MediaQuery>

				<MediaQuery
					smallerThan={`sm`}
					styles={{ display: 'none' }}
					className={`w-full`}
				>
					<Flex justify="space-between">
						<Breadcrumbs>{['1', '2']}</Breadcrumbs>

						<Flex align={`center`}>
							{/* message button */}
							<Indicator disabled>
								<ActionIcon>
									<IconBell />
								</ActionIcon>
							</Indicator>

							{/* language button */}
							<LanguageSelect />

							{/* dark model toggle button */}
							<Tooltip label={language.toggleDarkOrLightModelTip} withArrow>
								<ActionIcon onClick={toggleColorScheme}>
									{isDarkModel ? <IconDark /> : <IconLight />}
								</ActionIcon>
							</Tooltip>

							<Avatar />
						</Flex>
					</Flex>
				</MediaQuery>
			</div>
		</Header>
	)
}
