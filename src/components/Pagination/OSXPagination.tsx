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
      <a className='osx-pagination-prev'>
        <div>
          <ArrowNarrowLeft className='osx-pagination-icon' />
        </div>
        <div className='osx-pagination-prev-text'>Previous</div>
      </a>
    );
  }
  if (type === 'next') {
    return (
      <a className='osx-pagination-next'>
        <div className='osx-pagination-next-text'>Next</div>
        <div>
          <ArrowNarrowRight className='osx-pagination-icon' />
        </div>
      </a>
    );
  }
  return (
    <div className='osx-pagination-item'>
      {originalElement}
    </div>
  );
};

export default OSXPagination;
