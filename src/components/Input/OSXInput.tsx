"use client";

import { Calendar, ChevronDown, SearchLg } from '@untitled-ui/icons-react';
import { DatePicker, Input, InputNumber, Select, Spin, TimePicker } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import {
  Cascader,
  DatePickerProps,
  InputNumberProps,
  InputProps,
  SelectProps,
  TimeRangePickerProps,
} from 'antd/lib';
import { TextAreaProps } from 'antd/lib/input';
import type { CascaderProps, InputRef, TimePickerProps } from 'antd';
import clsx from 'clsx';

import './style.css';
import { RangePickerProps } from 'antd/lib/date-picker';
import { forwardRef } from 'react';
import { LoadingOutlined } from '@ant-design/icons';

type TInputSize = 'xs' | 'sm' | 'md' | 'xl';

export interface IOSXInput extends InputProps {
  customSize?: TInputSize;
  shadow?: boolean;
  customClassName?: string;
  loading?: boolean;
  ref?: any;
}

export function OSXInputPassword({
  customSize = 'sm',
  shadow = false,
  customClassName,
  ...args
}: IOSXInput) {
  let customClass = '';
  if (customSize === 'xs') {
    customClass = 'h-[36px]';
  } else if (customSize === 'sm') {
    customClass = 'h-[40px]';
  } else if (customSize === 'md') {
    customClass = 'h-[44px]';
  } else if (customSize === 'xl') {
    customClass = 'h-[60px]';
  }

  return (
    <Input.Password
      {...args}
      className={clsx(
        ' rounded-[8px] ',
        customClass,
        shadow ? 'shadow-[0_1px_2px_0px_rgb(16,24,40,0.05)]' : '',
        customClassName
      )}
    />
  );
}

export const OSXInput = forwardRef<InputRef, IOSXInput>(
  ({ customSize = 'sm', shadow, customClassName, ...args }, ref) => {
    let customClass = '';
    if (customSize === 'xs') {
      customClass = 'h-[36px]';
    } else if (customSize === 'sm') {
      customClass = 'h-[40px]';
    } else if (customSize === 'md') {
      customClass = 'h-[44px]';
    } else if (customSize === 'xl') {
      customClass = 'h-[60px]';
    }

    return (
      <Input
        {...args}
        ref={ref}
        className={clsx(
          'border-[1px] border-border-primary rounded-[8px]',
          customClass,
          shadow ? 'shadow-[0_1px_2px_0px_rgb(16,24,40,0.05)]' : '',
          customClassName
        )}
      />
    );
  }
);

export const OSXInputSearch = forwardRef<InputRef, IOSXInput>(
  ({ customSize = 'sm', shadow, customClassName, loading, ...args }, ref) => {
    let customClass = '';
    if (customSize === 'sm') {
      customClass = 'h-[40px]';
    } else if (customSize === 'md') {
      customClass = 'h-[44px]';
    } else if (customSize === 'xl') {
      customClass = 'h-[60px]';
    }

    const iconSize: Record<TInputSize, number> = {
      xs: 18,
      sm: 20,
      md: 22,
      xl: 24,
    };

    return (
      <Input
        ref={ref}
        {...args}
        prefix={
          loading ? (
            <Spin size='small' />
          ) : (
            <SearchLg
              width={iconSize[customSize]}
              height={iconSize[customSize]}
              className='text-text-quaternary'
            />
          )
        }
        className={clsx(
          'rounded-[8px] border-button-secondary-border w-[320px]',
          customClass,
          shadow ? 'shadow-[0_1px_2px_0px_rgb(16,24,40,0.05)]' : 'shadow-none',
          customClassName,
          args.className
        )}
      />
    );
  }
);

interface IOSXDateRangePicker extends RangePickerProps {
  customSize: TInputSize;
  shadow: boolean;
  customClassName?: string;
}

export function OSXDateRangePicker({
  customSize,
  shadow,
  customClassName,
  ...args
}: IOSXDateRangePicker) {
  let customClass = '';
  if (customSize === 'sm') {
    customClass = 'h-[40px]';
  } else if (customSize === 'md') {
    customClass = 'h-[44px]';
  } else if (customSize === 'xl') {
    customClass = 'h-[60px]';
  }

  return (
    <>
      <DatePicker.RangePicker
        format={['DD MMM YYYY', 'DD MMM YYYY']}
        className={clsx(
          'rounded-[8px]',
          customClass,
          shadow ? 'shadow-[0_1px_2px_0px_rgb(16,24,40,0.05)]' : '',
          customClassName
        )}
        popupClassName='rounded-[8px] border border-border-popup bg-bg-primary'
        suffixIcon={
          <Calendar width={17} height={17} className='text-text-quaternary' />
        }
        {...args}
      />
    </>
  );
}

interface IOSXDatePicker extends DatePickerProps {
  customSize?: TInputSize;
  shadow: boolean;
  customClassName?: string;
}

export function OSXDatePicker({
  customSize = 'sm',
  shadow,
  customClassName,
  ...args
}: IOSXDatePicker) {
  let customClass = '';
  if (customSize === 'sm') {
    customClass = 'h-[40px]';
  } else if (customSize === 'md') {
    customClass = 'h-[44px]';
  } else if (customSize === 'xl') {
    customClass = 'h-[60px]';
  }

  return (
    <>
      <DatePicker
        format={'DD MMM YYYY'}
        className={clsx(
          'rounded-[8px] w-full',
          customClass,
          shadow ? 'shadow-[0_1px_2px_0px_rgb(16,24,40,0.05)]' : '',
          customClassName
        )}
        suffixIcon={
          <Calendar width={17} height={17} className='text-text-quaternary' />
        }
        {...args}
      />
    </>
  );
}

interface IOSXTimePickerRange extends TimeRangePickerProps {
  customSize: TInputSize;
  shadow: boolean;
  customClassName?: string;
}

export function OSXTimePickerRange({
  customSize,
  shadow,
  customClassName,
  ...args
}: IOSXTimePickerRange) {
  let customClass = '';
  if (customSize === 'sm') {
    customClass = 'h-[40px]';
  } else if (customSize === 'md') {
    customClass = 'h-[44px]';
  } else if (customSize === 'xl') {
    customClass = 'h-[60px]';
  }

  return (
    <TimePicker.RangePicker
      className={clsx(
        ' rounded-[8px]',
        customClass,
        shadow ? 'shadow-[0_1px_2px_0px_rgb(16,24,40,0.05)]' : '',
        customClassName
      )}
      {...args}
    />
  );
}

interface IOSXTimePicker extends TimePickerProps {
  customSize: TInputSize;
  shadow: boolean;
  customClassName?: string;
}

export function OSXTimePicker({
  customSize,
  shadow,
  customClassName,
  ...args
}: IOSXTimePicker) {
  let customClass = '';
  if (customSize === 'sm') {
    customClass = 'h-[40px]';
  } else if (customSize === 'md') {
    customClass = 'h-[44px]';
  } else if (customSize === 'xl') {
    customClass = 'h-[60px]';
  }

  return (
    <TimePicker
      className={clsx(
        ' rounded-[8px]',
        customClass,
        shadow ? 'shadow-[0_1px_2px_0px_rgb(16,24,40,0.05)]' : '',
        customClassName
      )}
      {...args}
    />
  );
}

interface IOSXTextArea extends TextAreaProps {
  customSize: TInputSize;
  shadow?: boolean;
  customClassName?: string;
}

export function OSXTextArea({
  customSize,
  shadow,
  customClassName,
  ...args
}: IOSXTextArea) {
  let customClass = '';
  if (customSize === 'sm') {
    customClass = 'h-[40px]';
  } else if (customSize === 'md') {
    customClass = 'h-[44px]';
  } else if (customSize === 'xl') {
    customClass = 'h-[60px]';
  }

  return (
    <TextArea
      {...args}
      className={clsx(
        ' rounded-[8px]',
        customClass,
        shadow ? 'shadow-[0_1px_2px_0px_rgb(16,24,40,0.05)]' : '',
        customClassName
      )}
    />
  );
}

interface IOSXSelect extends SelectProps {
  customSize?: TInputSize;
  shadow?: boolean;
  customClassName?: string;
  customPopupClassName?: string;
  hideIcon?: boolean;
}

export function OSXSelect({
  customSize = 'sm',
  shadow = false,
  customClassName,
  customPopupClassName,
  hideIcon,
  ...args
}: IOSXSelect) {
  let customClass = '';
  if (customSize === 'sm') {
    customClass = 'min-h-[40px]';
  } else if (customSize === 'md') {
    customClass = 'min-h-[44px]';
  } else if (customSize === 'xl') {
    customClass = 'min-h-[60px]';
  }

  return (
    <Select
      {...args}
      className={clsx(
        'rounded-[8px]',
        customClass,
        shadow ? 'shadow-[0_1px_2px_0px_rgb(16,24,40,0.05)]' : '',
        customClassName,
        args.mode === 'tags' || args.mode === 'multiple'
          ? 'osx-select-custom-tags'
          : ''
      )}
      popupClassName={clsx(
        customPopupClassName,
        'rounded-[8px] border border-border-popup'
      )}
      suffixIcon={
        hideIcon ? null : args?.loading ? (
          <Spin size='small' indicator={<LoadingOutlined />} />
        ) : (
          <ChevronDown width={18} />
        )
      }
    />
  );
}

export function OSXSelectSearch({
  customSize,
  shadow,
  customClassName,
  ...args
}: IOSXSelect) {
  let customClass = '';
  if (customSize === 'sm') {
    customClass = 'min-h-[40px]';
  } else if (customSize === 'md') {
    customClass = 'h-[44px]';
  } else if (customSize === 'xl') {
    customClass = 'min-h-[60px]';
  }

  return (
    <Select
      {...args}
      suffixIcon={<SearchLg width={18} />}
      showSearch
      className={clsx(
        'custom-osx-select-search rounded-[8px]',
        customClass,
        shadow ? 'shadow-[0_1px_2px_0px_rgb(16,24,40,0.05)]' : '',
        customClassName,
        !args.mode
          ? 'custom-osx-select-search-single'
          : 'custom-osx-select-search-multiple',
        customSize && `size-${customSize}`
      )}
      popupClassName='rounded-[8px] border border-border-popup'
    />
  );
}

interface IOSXCascader extends CascaderProps<any> {
  customSize: TInputSize;
  shadow: boolean;
  customClassName?: string;
}

export function OSXCascader({
  customSize,
  shadow,
  customClassName,
  ...args
}: IOSXCascader) {
  let customClass = '';
  if (customSize === 'sm') {
    customClass = 'h-[40px]';
  } else if (customSize === 'md') {
    customClass = 'h-[44px]';
  } else if (customSize === 'xl') {
    customClass = 'h-[60px]';
  }

  return (
    <Cascader
      // Only pass `multiple` when true to satisfy antd signature (true | undefined)
      multiple={args.multiple ? true : undefined}
      {...(args as any)}
      className={clsx(
        'rounded-[8px]',
        customClass,
        shadow ? 'shadow-[0_1px_2px_0px_rgb(16,24,40,0.05)]' : '',
        customClassName
      )}
    />
  );
}

interface IOSXInputNumber extends InputNumberProps {
  customSize?: TInputSize;
  shadow?: boolean;
  customClassName?: string;
}

export function OSXInputNumber({
  customSize = 'sm',
  shadow = false,
  customClassName,
  ...args
}: IOSXInputNumber) {
  let customClass = '';
  if (customSize === 'sm') {
    customClass = 'h-[40px] height-sm';
  } else if (customSize === 'md') {
    customClass = 'h-[44px] height-md';
  } else if (customSize === 'xl') {
    customClass = 'h-[60px] height-xl';
  }

  return (
    <InputNumber
      {...args}
      className={clsx(
        '!rounded-[8px] border-border-primary',
        customClass,
        shadow ? 'shadow-[0_1px_2px_0px_rgb(16,24,40,0.05)]' : '',
        customClassName,
        'custom-input-number-osx'
      )}
    />
  );
}
