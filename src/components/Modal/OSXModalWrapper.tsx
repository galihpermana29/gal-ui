"use client";

import { Flex, Modal } from 'antd';
import { ModalProps } from 'antd/lib';
import clsx from 'clsx';
import React from 'react';
import './style.css';

export interface OSXModalWrapperProps extends ModalProps {
  width: number | string;
  titleText: string;
  subtitle: React.ReactNode;
  baseWidth: boolean;
  customClassName: string;
  customTitleTextClass: string;
  children: React.ReactNode;
  titleClassName?: string;
}

const OSXModalWrapper = ({
  children,
  subtitle,
  baseWidth,
  customClassName,
  customTitleTextClass,
  width,
  titleText,
  titleClassName,
  ...args
}: Partial<OSXModalWrapperProps>) => {
  return (
    <Modal
      title={
        <Flex
          vertical
          align='flex-start'
          gap={4}
          flex={1}
          className={titleClassName}
        >
          <span
            className={clsx(
              customTitleTextClass,
              'text-lg font-semibold text-text-primary'
            )}
          >
            {titleText}
          </span>
          {subtitle && (
            <p className='text-sm font-normal text-text-tertiary'>{subtitle}</p>
          )}
        </Flex>
      }
      width={baseWidth ? 640 : width}
      className={clsx('custom-osx-modal-wrapper', customClassName)}
      {...args}
    >
      {children}
    </Modal>
  );
};

export default OSXModalWrapper;
