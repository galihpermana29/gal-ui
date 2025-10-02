'use client';

import clsx from 'clsx';
import React from 'react';
import { AlertCircle } from '@untitled-ui/icons-react';
import DOMPurify from 'dompurify';

interface IBannerProps {
  title?: string;
  description?: string | React.ReactNode;
  descriptionType?: 'text' | 'html';
  customButton?: React.ReactNode;
  wrapperClassName?: string;
  type?: 'error' | 'warning' | 'success' | 'grayed' | 'blue';
  typeIcon?: 'error' | 'warning' | 'success' | 'grayed' | 'blue';
  direction?: 'row' | 'column';
  customIcon?: React.ReactNode;
}

const typeBadgeText = {
  error: 'text-utility-error-700',
  warning: 'text-utility-warning-700',
  success: 'text-utility-success-700',
  grayed: 'text-text-secondary',
  blue: 'text-text-brand-secondary',
};

const typeBadgeTextDesc = {
  error: 'text-utility-error-700',
  warning: 'text-utility-warning-700',
  success: 'text-utility-success-700',
  grayed: 'text-text-tertiary',
  blue: 'text-text-brand-secondary',
};

const typeBadgeBackground = {
  error: 'bg-utility-error-50',
  warning: 'bg-bg-warning-primary',
  success: 'bg-bg-success-secondary',
  grayed: 'bg-white',
  blue: 'bg-brand-primary',
};

const typeBadgeBorder = {
  error: 'border-red-500',
  warning: 'border-yellow-500',
  success: 'border-green-500',
  grayed: 'border-border-disabled',
  blue: 'border-blue-500',
};

// Docs
// TODO: Add docs

export const OSXBannerInfo = ({
  title = '',
  description = '',
  customButton,
  wrapperClassName,
  type = 'success',
  direction = 'column',
  descriptionType = 'text',
  typeIcon,
  customIcon,
}: IBannerProps) => {
  return (
    <div
      data-testid='banner-container'
      className={`flex items-start p-3 rounded-xl border-[1px] ${typeBadgeBorder[type]} ${typeBadgeBackground[type]} self-stretch `}
    >
      <div className='flex items-center gap-3 flex-1 '>
        <div
          data-testid='banner-wrapper'
          className={clsx(
            'flex gap-4 flex-1 w-full items-start',
            wrapperClassName
          )}
        >
          <div
            className={`w-[40px] h-[40px] border-[1px] rounded-full flex justify-center items-center shrink-0 ${typeBadgeBorder[typeIcon || type]}`}
          >
            <div
              className={`w-[30px] h-[30px] border-[1px] rounded-full flex justify-center items-center shrink-0 ${typeBadgeBorder[typeIcon || type]}`}
            >
              {customIcon || (
                <AlertCircle
                  className={typeBadgeText[typeIcon || type]}
                  width={24}
                  height={24}
                />
              )}
            </div>
          </div>
          {/* <Image src={typeBadgeIcon[typeIcon]} alt='icon-image' /> */}
          <div
            data-testid='banner-content'
            className={`flex !w-full ${direction === 'column'
              ? 'flex-col'
              : 'md:flex-row md:items-center justify-between flex-col'
              } gap-[2px] text-left`}
          >
            <div className='w-full'>
              {title && (
                <p className={`${typeBadgeText[type]} text-base font-semibold`}>
                  {title}
                </p>
              )}

              {description && (
                <div
                  className={`text-sm font-[400] ${typeBadgeTextDesc[type]}`}
                >
                  {descriptionType === 'html' ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(description as string),
                      }}
                    />
                  ) : (
                    description
                  )}
                </div>
              )}
            </div>
            {customButton && (
              <div className='flex justify-start items-start gap-4 mt-[8px]'>
                {customButton}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
