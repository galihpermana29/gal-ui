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
  error: 'osx-banner-text-error',
  warning: 'osx-banner-text-warning',
  success: 'osx-banner-text-success',
  grayed: 'osx-banner-text-grayed',
  blue: 'osx-banner-text-blue',
};

const typeBadgeTextDesc = {
  error: 'osx-banner-text-desc-error',
  warning: 'osx-banner-text-desc-warning',
  success: 'osx-banner-text-desc-success',
  grayed: 'osx-banner-text-desc-grayed',
  blue: 'osx-banner-text-desc-blue',
};

const typeBadgeBackground = {
  error: 'osx-banner-error',
  warning: 'osx-banner-warning',
  success: 'osx-banner-success',
  grayed: 'osx-banner-grayed',
  blue: 'osx-banner-blue',
};

const typeBadgeBorder = {
  error: 'osx-banner-border-error',
  warning: 'osx-banner-border-warning',
  success: 'osx-banner-border-success',
  grayed: 'osx-banner-border-grayed',
  blue: 'osx-banner-border-blue',
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
      className={`osx-banner-container ${typeBadgeBackground[type]}`}
    >
      <div className='osx-banner-content-wrapper'>
        <div
          data-testid='banner-wrapper'
          className={clsx(
            'flex gap-4 flex-1 w-full items-start',
            wrapperClassName
          )}
        >
          <div
            className={`osx-banner-icon-wrapper ${typeBadgeBorder[typeIcon || type]}`}
          >
            <div
              className={`osx-banner-icon-inner ${typeBadgeBorder[typeIcon || type]}`}
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
            className={clsx(
              'osx-banner-content',
              direction === 'column' ? 'osx-banner-content-column' : 'osx-banner-content-row'
            )}
          >
            <div className='w-full'>
              {title && (
                <p className={`osx-banner-title ${typeBadgeText[type]}`}>
                  {title}
                </p>
              )}

              {description && (
                <div
                  className={`osx-banner-description ${typeBadgeTextDesc[type]}`}
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
              <div className='osx-banner-button-wrapper'>
                {customButton}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
