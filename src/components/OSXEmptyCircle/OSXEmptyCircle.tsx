import React from 'react';

import AppButton, { AppButtonProps } from '../Button';
import { Flex, Typography } from 'antd';
import Image, { StaticImageData } from 'next/image';
import { twMerge } from 'tailwind-merge';
import CircleImage from '../../assets/images/finance/bgEmptyState.png';

interface OSXEmptyCircleButton {
  props: AppButtonProps;
  children?: string;
}

interface OSXEmptyCircleInterface {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  buttons?: OSXEmptyCircleButton[];
  customImageClassName?: string;
  customImage?: StaticImageData;
}

const OSXEmptyCircle: React.FC<OSXEmptyCircleInterface> = ({
  className,
  icon,
  title,
  description,
  buttons,
  customImageClassName,
  customImage,
}) => {
  return (
    <Flex
      className={twMerge('osx-empty-circle-container', className)}
      vertical
      align='center'
    >
      {customImage ? (
        <div>
          <Image src={customImage} alt='' width={200} height={200} />
        </div>
      ) : (
        <Image
          src={CircleImage}
          alt=''
          width={480}
          height={480}
          className={twMerge(
            'osx-empty-circle-image',
            customImageClassName
          )}
        />
      )}
      <Flex vertical align='center' gap={24} flex={1}>
        <Flex
          vertical
          align='center'
          className='osx-empty-circle-content'
        >
          {icon}
          <Flex
            vertical
            gap={4}
            align='center'
            className='osx-empty-circle-textwrap'
          >
            <Typography.Text className='osx-empty-circle-title'>
              {title}
            </Typography.Text>
            <Typography.Text className='osx-empty-circle-description'>
              {description}
            </Typography.Text>
          </Flex>
        </Flex>
        {buttons?.map((btn, index) => (
          <AppButton key={index} {...btn.props}>
            {btn.children}
          </AppButton>
        ))}
      </Flex>
    </Flex>
  );
};

export default OSXEmptyCircle;
