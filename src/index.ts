import './theme.css';
import './styles.css';

// Components - G-prefixed public API (aliased from internal OSX* files)

// Badge
export { default as GBadge } from "./components/Badge/OSXBadge";
export type {
  OSXBadgeProps as GBadgeProps,
  OSXBadgeType as GBadgeType,
} from "./components/Badge/OSXBadge";

// Modal
export { default as GModalWrapper } from "./components/Modal/OSXModalWrapper";
export type { OSXModalWrapperProps as GModalWrapperProps } from "./components/Modal/OSXModalWrapper";

// Table
export { default as GTable } from "./components/Table/OSXTable";
export { default as GTableLoading } from "./components/Table/OSXTableLoading";

// Pagination
export { default as GPagination } from "./components/Pagination/OSXPagination";

// Collapse
export { default as GCollapse } from "./components/Collapse/OSXCollapse";

// Dropdown
export { default as GDropdownButton } from "./components/Dropdown/OSXDropdownButton";
export type { OSXDropdownButtonProps as GDropdownButtonProps } from "./components/Dropdown/OSXDropdownButton";

// Button
export { default as GButton } from "./components/Button";
export type {
  AppButtonProps as GButtonProps,
  AppButtonSize as GButtonSize,
  AppButtonType as GButtonType,
} from "./components/Button";

// Input family
export {
  OSXInput as GInput,
  OSXInputPassword as GInputPassword,
  OSXInputSearch as GInputSearch,
  OSXDatePicker as GDatePicker,
  OSXDateRangePicker as GDateRangePicker,
  OSXTimePicker as GTimePicker,
  OSXTimePickerRange as GTimePickerRange,
  OSXTextArea as GTextArea,
  OSXCascader as GCascader,
  OSXSelect as GSelect,
  OSXSelectSearch as GSelectSearch,
  OSXInputNumber as GInputNumber,
} from "./components/Input/OSXInput";

// Spinner
export { default as GSpinner } from "./components/Spinner/OSXSpinner";

// Segmented
export { default as GSegmented } from "./components/Segmented/OSXSegmented";

// Responsive Modal/Drawer
export { default as GResponsiveModalDrawer } from "./components/ResponsiveModalDrawer/OSXResponsiveModalDrawer";
export type { OSXResponsiveModalDrawerProps as GResponsiveModalDrawerProps } from "./components/ResponsiveModalDrawer/OSXResponsiveModalDrawer";

// Empty Circle
export { default as GEmptyCircle } from "./components/OSXEmptyCircle/OSXEmptyCircle";

// Banner
export { OSXBannerInfo as GBannerInfo } from "./components/Banner/Banner";

// Cascader Filter
export { default as GCascaderFilter } from "./components/CascaderFilter/OSXCascaderFilter";

// Utilities
export { cn } from "./utils";
