import './theme.css';
import './styles.css';

// Components - OS-prefixed public API (aliased from internal OSX* files)

// Badge
export { default as OSBadge } from "./components/Badge/OSXBadge";
export type {
  OSXBadgeProps as OSBadgeProps,
  OSXBadgeType as OSBadgeType,
} from "./components/Badge/OSXBadge";

// Modal
export { default as OSModalWrapper } from "./components/Modal/OSXModalWrapper";
export type { OSXModalWrapperProps as OSModalWrapperProps } from "./components/Modal/OSXModalWrapper";

// Table
export { default as OSTable } from "./components/Table/OSXTable";
export { default as OSTableLoading } from "./components/Table/OSXTableLoading";

// Pagination
export { default as OSPagination } from "./components/Pagination/OSXPagination";

// Collapse
export { default as OSCollapse } from "./components/Collapse/OSXCollapse";

// Dropdown
export { default as OSDropdownButton } from "./components/Dropdown/OSXDropdownButton";
export type { OSXDropdownButtonProps as OSDropdownButtonProps } from "./components/Dropdown/OSXDropdownButton";

// Button
export { default as OSButton } from "./components/Button";
export type {
  AppButtonProps as OSButtonProps,
  AppButtonSize as OSButtonSize,
  AppButtonType as OSButtonType,
} from "./components/Button";

// Input family
export {
  OSXInput as OSInput,
  OSXInputPassword as OSInputPassword,
  OSXInputSearch as OSInputSearch,
  OSXDatePicker as OSDatePicker,
  OSXDateRangePicker as OSDateRangePicker,
  OSXTimePicker as OSTimePicker,
  OSXTimePickerRange as OSTimePickerRange,
  OSXTextArea as OSTextArea,
  OSXCascader as OSCascader,
  OSXSelect as OSSelect,
  OSXSelectSearch as OSSelectSearch,
  OSXInputNumber as OSInputNumber,
} from "./components/Input/OSXInput";

// Spinner
export { default as OSSpinner } from "./components/Spinner/OSXSpinner";

// Segmented
export { default as OSSegmented } from "./components/Segmented/OSXSegmented";

// Responsive Modal/Drawer
export { default as OSResponsiveModalDrawer } from "./components/ResponsiveModalDrawer/OSXResponsiveModalDrawer";
export type { OSXResponsiveModalDrawerProps as OSResponsiveModalDrawerProps } from "./components/ResponsiveModalDrawer/OSXResponsiveModalDrawer";

// Empty Circle
export { default as OSEmptyCircle } from "./components/OSXEmptyCircle/OSXEmptyCircle";

// Banner
export { OSXBannerInfo } from "./components/Banner/Banner";

// Cascader Filter
export { default as OSCascaderFilter } from "./components/CascaderFilter/OSXCascaderFilter";

// Utilities
export { cn } from "./utils";
