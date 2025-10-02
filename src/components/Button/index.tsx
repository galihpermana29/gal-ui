'use client';
import { Button, ButtonProps } from 'antd';
import { ReactNode, useState } from 'react';
import './styles.css';

/**
 * INFO:
 * GALIH REFACTOR THIS CODE:
 *
 * Make the button type as const and read only
 * Change it to key value pair instead of switch case for maintainability and readability
 * Change the appbuttontype to dynamic type for keyof styleMap
 */

const styleMap = {
  primary: 'app-btn-primary',
  'secondary-gray': 'app-btn-secondary-gray',
  'secondary-color': 'app-btn-secondary-color',
  'tertiary-gray': 'app-btn-tertiary-gray',
  'tertiary-color': 'app-btn-tertiary-color',
  'link-gray': 'app-btn-link-gray',
  'link-color': 'app-btn-link-color',
  'link-destructive': 'app-btn-link-destructive',
  'link-warning': 'app-btn-link-warning',
  destructive: 'app-btn-destructive',
  'destructive-secondary': 'app-btn-destructive-secondary',
  warning: 'app-btn-warning',
  'gray-blue': 'app-btn-gray-blue',
  'success-secondary': 'app-btn-success-secondary',
} as const;

export type AppButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type AppButtonType = keyof typeof styleMap;

export interface AppButtonProps extends Omit<ButtonProps, 'destructive'> {
  btn_size?: AppButtonSize;
  btn_type?: AppButtonType;
  children?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  iconOnly?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
}

const OSXButton =
  (
    {
      btn_size = 'md',
      btn_type = 'primary',
      iconOnly,
      onClick,
      children,
      ...props
    }: AppButtonProps,
  ) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async (
      ev: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
      if (onClick) {
        setIsLoading(true);
        try {
          // Check if `onClick` returns a Promise
          const result = onClick(ev);
          if (result instanceof Promise) {
            await result;
          }
        } catch (error) {
          console.error('Error in AppButton onClick:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    return (
      <Button
        type='text'
        rootClassName={`font-semibold app-btn ${btnStyle(btn_type)} ${iconOnly ? btnIconSize(btn_size) : btnSize(btn_size)
          }`}
        onClick={handleClick}
        disabled={isLoading}
        data-testid="button"
        {...props}
      >
        {children}
      </Button>
    );
  }


export default OSXButton;

function btnStyle(type: AppButtonType): string {
  return styleMap[type] || 'app-btn-primary';
}

function btnSize(size: AppButtonSize): string {
  switch (size) {
    case 'xs':
      return 'app-btn-xs';
    case 'sm':
      return 'app-btn-sm';
    case 'md':
      return 'app-btn-md';
    case 'lg':
      return 'app-btn-lg';
    case 'xl':
      return 'app-btn-xl';
    case '2xl':
      return 'app-btn-2xl';
    default:
      return 'app-btn-md';
  }
}
function btnIconSize(size: AppButtonSize): string {
  switch (size) {
    case 'xs':
      return 'app-btn-icon-xs';
    case 'sm':
      return 'app-btn-icon-sm';
    case 'md':
      return 'app-btn-icon-md';
    case 'lg':
      return 'app-btn-icon-lg';
    case 'xl':
      return 'app-btn-icon-xl';
    case '2xl':
      return 'app-btn-icon-2xl';
    default:
      return 'app-btn-icon-md';
  }
}
