"use client";

import AppButton, { AppButtonProps } from '../Button';
import { twMerge } from 'tailwind-merge';
import DotsHorizontal from '@untitled-ui/icons-react/build/cjs/DotsHorizontal';
import { DropdownProps } from 'antd';
import Dropdown from 'antd/es/dropdown/dropdown';

/**
 * Props for the OSXDropdownButton component.
 * @extends DropdownProps
 */
export interface OSXDropdownButtonProps extends DropdownProps {
  /** Additional class name for the button */
  buttonClassName?: string;
  /** Custom icon for the button */
  iconButton?: React.ReactNode;
  /** Type of the button */
  btnType?: AppButtonProps['btn_type'];
  /** Children elements for the button */
  buttonChildren?: React.ReactNode;
  /** Additional props for the AppButton component */
  buttonProps?: AppButtonProps;
  /** Menu props for the Dropdown */
  menu?: DropdownProps['menu'];
}

/**
 * OSXDropdownButton component.
 *
 * This component combines a button with a dropdown menu.
 * It uses the Ant Design Dropdown component and a custom AppButton.
 *
 * @param {OSXDropdownButtonProps} props - The component props
 * @returns {React.ReactElement} The rendered OSXDropdownButton component
 *
 * @example
 * <OSXDropdownButton
 *   menu={{ items: [{ label: 'Option 1', key: '1' }] }}
 *   buttonChildren="Click me"
 * />
 */
const OSXDropdownButton: React.FC<OSXDropdownButtonProps> = ({
  buttonClassName,
  iconButton = <DotsHorizontal width={20} height={20} />,
  btnType = 'secondary-gray',
  buttonChildren,
  buttonProps = {},
  menu = { items: [{ label: 'Option 1', key: '1' }] }, // Default menu items
  ...args
}: OSXDropdownButtonProps): React.ReactElement => {
  return (
    <Dropdown
      menu={{
        ...menu,
        items: menu.items || [{ label: 'Option 1', key: '1' }],
      }}
      {...args}
    >
      <div>
        <AppButton
          {...buttonProps}
          btn_type={btnType}
          icon={iconButton}
          className={twMerge(iconButton && '!p-2', buttonClassName)}
        >
          {buttonChildren}
        </AppButton>
      </div>
    </Dropdown>
  );
};

export default OSXDropdownButton;