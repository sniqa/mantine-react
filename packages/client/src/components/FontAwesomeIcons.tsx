import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faUsb } from '@fortawesome/free-brands-svg-icons'
import {
	faArrowDownWideShort,
	faBars,
	faBarsStaggered,
	faBell,
	faBolt,
	faBook,
	faCalendar,
	faChevronDown,
	faChevronLeft,
	faChevronRight,
	faClock,
	faColumns,
	faCompress,
	faComputer,
	faDesktop,
	faDiagramProject,
	faEllipsisH,
	faEllipsisVertical,
	faExpand,
	faEyeSlash,
	faFileArrowDown,
	faFileArrowUp,
	faFilter,
	faFilterCircleXmark,
	faGear,
	faGlobe,
	faHardDrive,
	faHouse,
	faLanguage,
	faLock,
	faMessage,
	faMoon,
	faNetworkWired,
	faPen,
	faPhone,
	faPlus,
	faPrint,
	faSearch,
	faSearchMinus,
	faServer,
	faSortDown,
	faSun,
	faThumbTack,
	faTrash,
	faUser,
	faUserGear,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MRT_Icons } from 'mantine-react-table'
config.autoAddCss = false

export const fontAwesomeIcons: Partial<MRT_Icons> = {
	IconArrowDown: (props: any) => (
		<FontAwesomeIcon icon={faSortDown} {...props} />
	),
	IconClearAll: () => <FontAwesomeIcon icon={faBarsStaggered} />,
	IconTallymark1: () => <FontAwesomeIcon icon={faBars} />,
	IconTallymark2: () => <FontAwesomeIcon icon={faBars} />,
	IconTallymark3: () => <FontAwesomeIcon icon={faBars} />,
	IconTallymark4: () => <FontAwesomeIcon icon={faBars} />,
	IconTallymarks: () => <FontAwesomeIcon icon={faBars} />,
	IconFilter: (props: any) => <FontAwesomeIcon icon={faFilter} {...props} />,
	IconFilterOff: () => <FontAwesomeIcon icon={faFilterCircleXmark} />,
	IconMinimize: () => <FontAwesomeIcon icon={faCompress} />,
	IconMaximize: () => <FontAwesomeIcon icon={faExpand} />,
	IconSearch: (props: any) => <FontAwesomeIcon icon={faSearch} {...props} />,
	IconCircleOff: () => <FontAwesomeIcon icon={faSearchMinus} />,
	IconColumns: () => <FontAwesomeIcon icon={faColumns} />,
	IconDotsVertical: () => <FontAwesomeIcon icon={faEllipsisVertical} />,
	IconDots: () => <FontAwesomeIcon icon={faEllipsisH} />,
	IconArrowsSort: (props: any) => (
		<FontAwesomeIcon icon={faArrowDownWideShort} {...props} /> //props so that style rotation transforms are applied
	),
	IconPinned: (props: any) => (
		<FontAwesomeIcon icon={faThumbTack} {...props} /> //props so that style rotation transforms are applied
	),
	IconEyeOff: () => <FontAwesomeIcon icon={faEyeSlash} />,
}

export const IconHome = () => <FontAwesomeIcon icon={faHouse} />

export const IconUserManage = () => <FontAwesomeIcon icon={faUserGear} />

export const IconDocument = () => <FontAwesomeIcon icon={faBook} />

export const IconNetwork = () => <FontAwesomeIcon icon={faNetworkWired} />

export const IconSettings = () => <FontAwesomeIcon icon={faGear} />

export const IconMessage = () => <FontAwesomeIcon icon={faMessage} />

export const IconDevice = () => <FontAwesomeIcon icon={faDesktop} />

export const IconLight = () => <FontAwesomeIcon icon={faSun} />

export const IconDark = () => <FontAwesomeIcon icon={faMoon} />

export const IconEllipsisVertical = () => (
	<FontAwesomeIcon icon={faEllipsisVertical} />
)

export const IconBell = () => <FontAwesomeIcon icon={faBell} />

export const IconLanguage = () => <FontAwesomeIcon icon={faLanguage} />

export const IconChevronLeft = () => <FontAwesomeIcon icon={faChevronLeft} />

export const IconChevronRight = () => <FontAwesomeIcon icon={faChevronRight} />

export const IconChevronDown = () => <FontAwesomeIcon icon={faChevronDown} />

export const IconAccount = () => <FontAwesomeIcon icon={faUser} />

export const IconComputer = () => <FontAwesomeIcon icon={faComputer} />

export const IconUser = () => <FontAwesomeIcon icon={faUser} />

export const IconPassword = () => <FontAwesomeIcon icon={faLock} />

export const IconIpAddrees = () => <FontAwesomeIcon icon={faDiagramProject} />

export const IconTel = () => <FontAwesomeIcon icon={faPhone} />

export const IconLiner = () => <FontAwesomeIcon icon={faBolt} />

export const IconOfficeDevice = () => <FontAwesomeIcon icon={faPrint} />

export const IconServer = () => <FontAwesomeIcon icon={faServer} />

export const IconNetworkDevice = () => <FontAwesomeIcon icon={faHardDrive} />

export const IconUsbKey = () => <FontAwesomeIcon icon={faUsb} />

export const IconNetworkType = () => <FontAwesomeIcon icon={faGlobe} />

export const IconDelete = () => <FontAwesomeIcon icon={faTrash} />

export const IconExportFile = () => <FontAwesomeIcon icon={faFileArrowDown} />

export const IconImportFile = () => <FontAwesomeIcon icon={faFileArrowUp} />

export const IconAdd = () => <FontAwesomeIcon icon={faPlus} />

export const IconEdit = () => <FontAwesomeIcon icon={faPen} />

export const IconDate = () => <FontAwesomeIcon icon={faCalendar} />

export const IconTime = () => <FontAwesomeIcon icon={faClock} />
