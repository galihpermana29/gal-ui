"use client";

import React from 'react';
import { Cascader, CascaderProps, Flex } from 'antd'; // Assuming you're using lucide-react for icons
import AppButton, { AppButtonProps } from '../Button';
import { ChevronDown, ChevronRight, Trash01 } from '@untitled-ui/icons-react';

// Define more specific option type safely
type CascaderOption = NonNullable<CascaderProps<any>['options']>[number];

const dropdownRender = (menus: React.ReactNode, onReset: () => void) => (
  <>
    {menus}
    <div className='osx-cascader-dropdown-footer'>
      <Flex
        align='center'
        gap={5}
        className='osx-cascader-reset-button'
        onClick={onReset}
      >
        <Trash01 width={16} color='var(--fg-quaternary)' />
        Clear Filter
      </Flex>
    </div>
  </>
);

interface OSXCascaderFilterProps extends Omit<CascaderProps<any>, 'options'> {
  /** Define the options for the cascader */
  cascaderOptions?: CascaderProps<CascaderOption>['options'];
  /** Additional props for the AppButton component */
  buttonProps?: Omit<AppButtonProps, 'icon'> & {
    icon?: React.ReactNode;
  };
  /** Handle the reset action */
  handleReset?: () => void;
  /** Optional for add children to the button */
  childrenButton?: React.ReactNode | null;
  /** Optional for hide the clear filter button */
  hideClearFilter?: boolean;
  /** Optional for hide the chevron icon */
  hideChevron?: boolean;
  /** Optional for create custom dropdown render */
  customDropdownRender?: (menus: React.ReactNode) => React.JSX.Element;
}

const OSXCascaderFilter: React.FC<OSXCascaderFilterProps> = ({
  cascaderOptions,
  buttonProps = {},
  handleReset,
  hideClearFilter,
  hideChevron,
  childrenButton = (
    <div className='osx-cascader-filter-button'>
      Filter {!hideChevron && <ChevronDown width={20} height={20} />}
    </div>
  ),
  customDropdownRender,
  ...cascaderArgs
}) => {
  const { icon: customIcon, ...restButtonProps } = buttonProps;
  return (
    <Cascader
      dropdownRender={
        hideClearFilter
          ? undefined
          : !customDropdownRender
          ? (menus) => dropdownRender(menus, handleReset ?? (() => {}))
          : (menus) => customDropdownRender(menus)
      }
      expandTrigger='click'
      placeholder='Filter'
      options={cascaderOptions}
      multiple
      expandIcon={<ChevronRight width={16} height={16} />}
      placement='bottomLeft'
      dropdownMenuColumnStyle={{
        wordWrap: 'break-word',
        whiteSpace: 'initial',
      }}
      {...cascaderArgs}
    >
      <AppButton
        btn_type={
          Array.isArray(cascaderArgs?.value) && cascaderArgs.value.length > 0
            ? 'secondary-color'
            : 'secondary-gray'
        }
        {...restButtonProps}
        icon={customIcon}
      >
        {childrenButton}
      </AppButton>
    </Cascader>
  );
};

export default OSXCascaderFilter;
