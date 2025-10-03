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
        return 'osx-badge-red';
      case 'yellow':
        return 'osx-badge-yellow';
      case 'gray':
        return 'osx-badge-gray';
      case 'blue':
        return 'osx-badge-blue';
      case 'blue-light':
        return 'osx-badge-blue-light';
      case 'purple':
        return 'osx-badge-purple';
      case 'gray-blue':
        return 'osx-badge-gray-blue';
      case 'brand':
        return 'osx-badge-brand';
      case 'white':
        return 'osx-badge-white';
      case 'pink':
        return 'osx-badge-pink';
      case 'orange':
        return 'osx-badge-orange';
      default:
        return 'osx-badge-green';
    }
  }

  function badgeSize() {
    switch (size) {
      case 'sm':
        return 'osx-badge-sm';
      case 'lg':
        return 'osx-badge-lg';
      default:
        return 'osx-badge-md';
    }
  }

  function badgeShape() {
    switch (shape) {
      case 'square':
        return 'osx-badge-square';
      default:
        return 'osx-badge-rounded';
    }
  }

  return (
    <div
      className={clsx(
        'osx-badge',
        onRemove && 'osx-badge-with-remove',
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
          className='osx-badge-remove-icon'
        />
      )}
    </div>
  );
}
