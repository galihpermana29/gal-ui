'use client';

import { ArrowNarrowLeft, ArrowNarrowRight } from '@untitled-ui/icons-react';

import { PaginationProps } from 'antd';

const OSXPagination: PaginationProps['itemRender'] = (
  _,
  type,
  originalElement
) => {
  if (type === 'prev') {
    return (
      <a className='flex items-center gap-[5px] h-[40px] w-0 md:w-auto py-[10px] px-0 md:px-[10px] rounded-[8px] transition-all  text-sm font-semibold'>
        <div>
          <ArrowNarrowLeft className='w-[18px]' />
        </div>
        <div className='hidden lg:block w-0 lg:w-auto'>Previous</div>
      </a>
    );
  }
  if (type === 'next') {
    return (
      <a className='flex items-center gap-[5px] h-[40px] w-0 md:w-auto py-[10px] px-0 md:px-[10px] rounded-[8px] transition-all text-sm font-semibold'>
        <div className='hidden lg:block w-0 lg:w-auto'>Next</div>
        <div>
          <ArrowNarrowRight className='w-[18px]' />
        </div>
      </a>
    );
  }
  return (
    <div className='h-[40px] w-auto md:w-[40px] flex items-center justify-center text-sm font-semibold text-text-tertiary'>
      {originalElement}
    </div>
  );
};

export default OSXPagination;
