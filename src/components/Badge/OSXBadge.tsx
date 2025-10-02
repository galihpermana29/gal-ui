/* eslint-disable react/prop-types */
"use client";

import { X } from '@untitled-ui/icons-react';
import clsx from 'clsx';
import React from 'react';

export type OSXBadgeType =
  | 'red'
  | 'green'
  | 'yellow'
  | 'gray'
  | 'blue'
  | 'blue-light'
  | 'purple'
  | 'gray-blue'
  | 'brand'
  | 'white'
  | 'pink'
  | 'orange';
export type OSXBadgeProps = {
  children: any;
  type?: OSXBadgeType;
  customClassName?: string;
  size?: 'sm' | 'md' | 'lg';
  shape?: 'square' | 'rounded';
  onRemove?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

export default function OSXBadge({
  children,
  type = 'green',
  size = 'md',
  shape = 'rounded',
  className,
  onRemove,
  ...props
}: OSXBadgeProps) {
  function badgeStyle() {
    switch (type) {
      case 'red':
        return 'text-utility-error-700 border-border-error_subtle bg-utility-error-50';
      case 'yellow':
        return 'text-utility-warning-700 border-utility-warning-300 bg-utility-warning-50';
      case 'gray':
        return 'text-utility-gray-700 border-utility-gray-200 bg-utility-gray-50';
      case 'blue':
        return ' text-utility-blue-700 border-utility-blue-200 bg-button-secondary-color-bg';
      case 'blue-light':
        return ' text-utility-blue-light-700 border-utility-blue-light-200 bg-utility-blue-light-50';
      case 'purple':
        return ' text-utility-purple-700 border-utility-purple-200 bg-utility-purple-50';
      case 'gray-blue':
        return ' text-utility-gray-blue-700 border-utility-gray-blue-200 bg-utility-gray-blue-50';
      case 'brand':
        return ' text-utility-brand-700 border-utility-brand-200 bg-utility-brand-50';
      case 'white':
        return ' text-text-secondary border-border-primary bg-bg-primary';
      case 'pink':
        return ' text-utility-pink-700 border-utility-pink-200 bg-utility-pink-50';
      case 'orange':
        return ' text-utility-orange-700 border-utility-orange-200 bg-utility-orange-50';
      default:
        return 'text-utility-success-700 border-utility-success-300 bg-utility-success-50';
    }
  }

  function badgeSize() {
    switch (size) {
      case 'sm':
        return 'px-[6px] py-[2px] text-xs';
      case 'lg':
        return 'px-[10px] py-2 text-sm';
      default:
        return 'px-2 py-0.5 text-sm';
    }
  }

  function badgeShape() {
    switch (shape) {
      case 'square':
        return 'rounded-[6px]';
      default:
        return 'rounded-full';
    }
  }

  return (
    <div
      className={clsx(
        `border flex items-center text-center max-w-fit font-medium gap-1`,
        onRemove ? 'justify-between' : '',
        badgeStyle(),
        badgeSize(),
        badgeShape(),
        className,
      )}
      {...props}
    >
      {children}
      {onRemove && (
        <X
          width={15}
          height={15}
          onClick={onRemove}
          className='cursor-pointer'
        />
      )}
    </div>
  );
}
