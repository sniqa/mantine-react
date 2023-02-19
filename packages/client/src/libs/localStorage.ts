import { ColorScheme } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'

export enum ColorModel {
	darkModel = 'dark',
	lightModel = 'light',
}

enum LocalStorageKey {
	colorModel = 'color-model',
	token = 'token',
}

export const useToggleDarkModel = () => {
	const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
		key: LocalStorageKey.colorModel,
		defaultValue: ColorModel.lightModel,
		getInitialValueInEffect: true,
	})

	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(
			value ||
				(colorScheme === ColorModel.darkModel
					? ColorModel.lightModel
					: ColorModel.darkModel)
		)

	return {
		colorScheme,
		setColorScheme,
		toggleColorScheme,
		toggleDarkModel: () => toggleColorScheme(),
	}
}

export const useSetToken = () => {
	const [toekn, setToken] = useLocalStorage<string>({
		key: LocalStorageKey.token,
		defaultValue: '',
		getInitialValueInEffect: true,
	})

	return setToken
}

export const useGetToken = () => {
	const [toekn, setToken] = useLocalStorage<string>({
		key: LocalStorageKey.token,
		getInitialValueInEffect: true,
	})

	return toekn
}
