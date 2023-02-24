import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faUsb } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowDownWideShort,
  faBars,
  faBarsStaggered,
  faBell,
  faBolt,
  faBook,
  faCalendar,
  faCheck,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faCircleCheck,
  faCircleExclamation,
  faClock,
  faColumns,
  faCompress,
  faComputer,
  faComputerMouse,
  faDesktop,
  faDiagramProject,
  faEllipsisH,
  faEllipsisVertical,
  faExclamation,
  faExpand,
  faEyeSlash,
  faFile,
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
} from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { MRT_Icons } from "mantine-react-table";
config.autoAddCss = false;

type IconProps = Omit<FontAwesomeIconProps, "icon">;

export const fontAwesomeIcons: Partial<MRT_Icons> = {
  IconArrowDown: (props: any) => (
    <FontAwesomeIcon icon={faSortDown} {...props} {...props} />
  ),
  IconClearAll: (props: IconProps) => (
    <FontAwesomeIcon icon={faBarsStaggered} {...props} />
  ),
  IconTallymark1: (props: IconProps) => (
    <FontAwesomeIcon icon={faBars} {...props} />
  ),
  IconTallymark2: (props: IconProps) => (
    <FontAwesomeIcon icon={faBars} {...props} />
  ),
  IconTallymark3: (props: IconProps) => (
    <FontAwesomeIcon icon={faBars} {...props} />
  ),
  IconTallymark4: (props: IconProps) => (
    <FontAwesomeIcon icon={faBars} {...props} />
  ),
  IconTallymarks: (props: IconProps) => (
    <FontAwesomeIcon icon={faBars} {...props} />
  ),
  IconFilter: (props: any) => (
    <FontAwesomeIcon icon={faFilter} {...props} {...props} />
  ),
  IconFilterOff: (props: IconProps) => (
    <FontAwesomeIcon icon={faFilterCircleXmark} {...props} />
  ),
  IconMinimize: (props: IconProps) => (
    <FontAwesomeIcon icon={faCompress} {...props} />
  ),
  IconMaximize: (props: IconProps) => (
    <FontAwesomeIcon icon={faExpand} {...props} />
  ),
  IconSearch: (props: any) => (
    <FontAwesomeIcon icon={faSearch} {...props} {...props} />
  ),
  IconCircleOff: (props: IconProps) => (
    <FontAwesomeIcon icon={faSearchMinus} {...props} />
  ),
  IconColumns: (props: IconProps) => (
    <FontAwesomeIcon icon={faColumns} {...props} />
  ),
  IconDotsVertical: (props: IconProps) => (
    <FontAwesomeIcon icon={faEllipsisVertical} {...props} />
  ),
  IconDots: (props: IconProps) => (
    <FontAwesomeIcon icon={faEllipsisH} {...props} />
  ),
  IconArrowsSort: (props: any) => (
    <FontAwesomeIcon icon={faArrowDownWideShort} {...props} {...props} /> //props so that style rotation transforms are applied
  ),
  IconPinned: (props: any) => (
    <FontAwesomeIcon icon={faThumbTack} {...props} {...props} /> //props so that style rotation transforms are applied
  ),
  IconEyeOff: (props: IconProps) => (
    <FontAwesomeIcon icon={faEyeSlash} {...props} />
  ),
};

export const IconHome = (props: IconProps) => (
  <FontAwesomeIcon icon={faHouse} {...props} />
);

export const IconUserManage = (props: IconProps) => (
  <FontAwesomeIcon icon={faUserGear} {...props} />
);

export const IconDocument = (props: IconProps) => (
  <FontAwesomeIcon icon={faBook} {...props} />
);

export const IconNetwork = (props: IconProps) => (
  <FontAwesomeIcon icon={faNetworkWired} {...props} />
);

export const IconSettings = (props: IconProps) => (
  <FontAwesomeIcon icon={faGear} {...props} />
);

export const IconMessage = (props: IconProps) => (
  <FontAwesomeIcon icon={faMessage} {...props} />
);

export const IconDevice = (props: IconProps) => (
  <FontAwesomeIcon icon={faDesktop} {...props} />
);

export const IconLight = (props: IconProps) => (
  <FontAwesomeIcon icon={faSun} {...props} />
);

export const IconDark = (props: IconProps) => (
  <FontAwesomeIcon icon={faMoon} {...props} />
);

export const IconEllipsisVertical = (props: IconProps) => (
  <FontAwesomeIcon icon={faEllipsisVertical} {...props} />
);

export const IconBell = (props: IconProps) => (
  <FontAwesomeIcon icon={faBell} {...props} />
);

export const IconLanguage = (props: IconProps) => (
  <FontAwesomeIcon icon={faLanguage} {...props} />
);

export const IconChevronLeft = (props: IconProps) => (
  <FontAwesomeIcon icon={faChevronLeft} {...props} />
);

export const IconChevronRight = (props: IconProps) => (
  <FontAwesomeIcon icon={faChevronRight} {...props} />
);

export const IconChevronDown = (props: IconProps) => (
  <FontAwesomeIcon icon={faChevronDown} {...props} />
);

export const IconAccount = (props: IconProps) => (
  <FontAwesomeIcon icon={faUser} {...props} />
);

export const IconComputer = (props: IconProps) => (
  <FontAwesomeIcon icon={faComputer} {...props} />
);

export const IconUser = (props: IconProps) => (
  <FontAwesomeIcon icon={faUser} {...props} />
);

export const IconPassword = (props: IconProps) => (
  <FontAwesomeIcon icon={faLock} {...props} />
);

export const IconIpAddrees = (props: IconProps) => (
  <FontAwesomeIcon icon={faDiagramProject} {...props} />
);

export const IconTel = (props: IconProps) => (
  <FontAwesomeIcon icon={faPhone} {...props} />
);

export const IconLiner = (props: IconProps) => (
  <FontAwesomeIcon icon={faBolt} {...props} />
);

export const IconOfficeDevice = (props: IconProps) => (
  <FontAwesomeIcon icon={faPrint} {...props} />
);

export const IconServer = (props: IconProps) => (
  <FontAwesomeIcon icon={faServer} {...props} />
);

export const IconNetworkDevice = (props: IconProps) => (
  <FontAwesomeIcon icon={faHardDrive} {...props} />
);

export const IconUsbKey = (props: IconProps) => (
  <FontAwesomeIcon icon={faUsb} {...props} />
);

export const IconNetworkType = (props: IconProps) => (
  <FontAwesomeIcon icon={faGlobe} {...props} />
);

export const IconDelete = (props: IconProps) => (
  <FontAwesomeIcon icon={faTrash} {...props} />
);

export const IconExportFile = (props: IconProps) => (
  <FontAwesomeIcon icon={faFileArrowDown} {...props} />
);

export const IconImportFile = (props: IconProps) => (
  <FontAwesomeIcon icon={faFileArrowUp} {...props} />
);

export const IconAdd = (props: IconProps) => (
  <FontAwesomeIcon icon={faPlus} {...props} />
);

export const IconEdit = (props: IconProps) => (
  <FontAwesomeIcon icon={faPen} {...props} />
);

export const IconDate = (props: IconProps) => (
  <FontAwesomeIcon icon={faCalendar} {...props} />
);

export const IconTime = (props: IconProps) => (
  <FontAwesomeIcon icon={faClock} {...props} />
);

export const IconFile = (props: IconProps) => (
  <FontAwesomeIcon icon={faFile} {...props} />
);

export const IconError = (props: IconProps) => (
  <FontAwesomeIcon icon={faExclamation} {...props} />
);

export const IconSuccess = (props: IconProps) => (
  <FontAwesomeIcon icon={faCheck} {...props} />
);

export const IconClick = (props: IconProps) => (
  <FontAwesomeIcon icon={faComputerMouse} {...props} />
);
