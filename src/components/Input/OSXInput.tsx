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
  const sizeClass = `osx-input-${customSize}`;
  return (
    <Input.Password
      {...args}
      className={clsx(
        'osx-input-rounded',
        sizeClass,
        shadow && 'osx-input-shadow',
        customClassName
      )}
    />
  );
}

export const OSXInput = forwardRef<InputRef, IOSXInput>(
  ({ customSize = 'sm', shadow, customClassName, ...args }, ref) => {
    const sizeClass = `osx-input-${customSize}`;

    return (
      <Input
        {...args}
        ref={ref}
        className={clsx(
          'osx-input-base',
          sizeClass,
          shadow && 'osx-input-shadow',
          customClassName
        )}
      />
    );
  }
);

export const OSXInputSearch = forwardRef<InputRef, IOSXInput>(
  ({ customSize = 'sm', shadow, customClassName, loading, ...args }, ref) => {
    const sizeClass = `osx-input-${customSize}`;


    const iconSize: Record<TInputSize, number> = {
      xs: 18,
      sm: 20,
      md: 22,
      xl: 24,
    };

    return (
      <Input
        {...args}
        ref={ref}
        className={clsx(
          'osx-input-base',
          sizeClass,
          shadow && 'osx-input-shadow',
          customClassName
        )}
        prefix={
          loading ? (
            <Spin indicator={<LoadingOutlined spin />} size='small' />
          ) : (
            <SearchLg
              width={iconSize[customSize]}
              height={iconSize[customSize]}
              className='osx-icon-quaternary'
            />
          )
        }
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
  const sizeClass = `osx-input-${customSize}`;

  return (
    <>
      <DatePicker.RangePicker
        format={['DD MMM YYYY', 'DD MMM YYYY']}
        className={clsx(
          'osx-input-base',
          sizeClass,
          shadow && 'osx-input-shadow',
          customClassName
        )}
        popupClassName='osx-popup-rounded'
        suffixIcon={
          <Calendar width={17} height={17} className='osx-icon-quaternary' />
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
  const sizeClass = `osx-input-${customSize}`;

  return (
    <>
      <DatePicker
        format={'DD MMM YYYY'}
        className={clsx(
          'osx-input-base',
          sizeClass,
          shadow && 'osx-input-shadow',
          customClassName
        )}
        suffixIcon={
          <Calendar width={17} height={17} className='osx-icon-quaternary' />
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
  const sizeClass = `osx-input-${customSize}`;

  return (
    <TimePicker.RangePicker
      className={clsx(
        'osx-input-base',
        sizeClass,
        shadow && 'osx-input-shadow',
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
  const sizeClass = `osx-input-${customSize}`;

  return (
    <TimePicker
      className={clsx(
        'osx-input-base',
        sizeClass,
        shadow && 'osx-input-shadow',
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

  const sizeClass = `osx-input-${customSize}`;

  return (
    <TextArea
      {...args}
      className={clsx(
        'osx-input-rounded',
        sizeClass,
        shadow && 'osx-input-shadow',
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

  const sizeClass = `osx-input-${customSize}`;

  return (
    <Select
      {...args}
      className={clsx(
        'osx-input-rounded',
        sizeClass,
        shadow && 'osx-input-shadow',
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

  const sizeClass = `osx-input-${customSize}`;

  return (
    <Select
      {...args}
      suffixIcon={<SearchLg width={18} />}
      showSearch
      className={clsx(
        'custom-osx-select-search rounded-[8px]',
        sizeClass,
        shadow && 'osx-input-shadow',
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

  const sizeClass = `osx-input-${customSize}`;

  return (
    <Cascader
      // Only pass `multiple` when true to satisfy antd signature (true | undefined)
      multiple={args.multiple ? true : undefined}
      {...(args as any)}
      className={clsx(
        'osx-input-base',
        sizeClass,
        shadow && 'osx-input-shadow',
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

  const sizeClass = `osx-input-${customSize}`;

  return (
    <InputNumber
      {...args}
      className={clsx(
        'osx-input-base',
        sizeClass,
        shadow && 'osx-input-shadow',
        customClassName,
        'custom-input-number-osx'
      )}
    />
  );
}
