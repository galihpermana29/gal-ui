'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Drawer, DrawerProps } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import OSXModalWrapper, {
  OSXModalWrapperProps,
} from '../Modal/OSXModalWrapper';
import { BOTTOM_SHEET_MOBILE_STYLE } from '../../utils/bottom-sheet-mobile-style';
import { useGlobalMediaQuery } from '../../hooks/useGlobalMediaQuery';

/**
 * OSXResponsiveModalDrawer - A responsive component that automatically renders as:
 * - Modal on desktop screens (>767px)
 * - Bottom sheet drawer on mobile screens (≤767px)
 *
 * Features:
 * - Dynamic height calculation based on content
 * - Smooth animations with Framer Motion
 * - Handles dynamic imports gracefully
 * - Configurable props for both modal and drawer
 *
 * @example
 * ```tsx
 * <OSXResponsiveModalDrawer
 *   open={isOpen}
 *   title="Edit Profile"
 *   onClose={handleClose}
 *   modalProps={{ width: 600 }}
 *   drawerProps={{ height: '70dvh' }}
 * >
 *   <YourContent />
 * </OSXResponsiveModalDrawer>
 * ```
 */
export interface OSXResponsiveModalDrawerProps {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  modalProps?: Partial<
    Omit<OSXModalWrapperProps, 'open' | 'onCancel' | 'children'>
  >;
  drawerProps?: Partial<
    Omit<DrawerProps, 'open' | 'onClose' | 'children' | 'title'>
  >;
  className?: string;
}

const OSXResponsiveModalDrawer: React.FC<OSXResponsiveModalDrawerProps> = ({
  open,
  title,
  onClose,
  children,
  modalProps = {},
  drawerProps = {},
  className,
}) => {
  const { isMobile } = useGlobalMediaQuery();
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  const measureContent = useCallback(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    if (!isMobile || !open) return;

    const timeouts = [
      setTimeout(measureContent, 100),
      setTimeout(measureContent, 400),
      setTimeout(measureContent, 800),
    ];

    const resizeObserver = new ResizeObserver(measureContent);

    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    return () => {
      timeouts.forEach(clearTimeout);
      resizeObserver.disconnect();
    };
  }, [open, children, isMobile, measureContent]);

  const getDynamicHeight = useCallback(() => {
    const headerHeight = 60;
    const padding = 40;
    const totalHeight = contentHeight + headerHeight + padding;
    const viewportHeight = window.innerHeight;
    const heightPercentage = Math.min((totalHeight / viewportHeight) * 100, 85);
    const minHeight = 30;

    return contentHeight > 0
      ? `${Math.max(Math.round(heightPercentage), minHeight)}dvh`
      : `${minHeight}dvh`;
  }, [contentHeight]);

  if (isMobile) {
    return (
      <Drawer
        title={<span className='font-semibold'>{title}</span>}
        placement='bottom'
        onClose={onClose}
        open={open}
        styles={BOTTOM_SHEET_MOBILE_STYLE}
        height={getDynamicHeight()}
        closeIcon={null}
        className={className}
        {...drawerProps}
      >
        <AnimatePresence mode='wait'>
          <motion.div
            ref={contentRef}
            key={children ? 'content' : 'loading'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.3,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            layout
            layoutRoot
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </Drawer>
    );
  }

  return (
    <OSXModalWrapper
      width={450}
      footer={false}
      titleText={title}
      open={open}
      onCancel={onClose}
      className={className}
      {...modalProps}
    >
      <AnimatePresence mode='wait'>
        <motion.div
          key={children ? 'content' : 'loading'}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{
            duration: 0.25,
            ease: [0.4, 0.0, 0.2, 1],
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </OSXModalWrapper>
  );
};

export default OSXResponsiveModalDrawer;
