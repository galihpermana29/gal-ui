'use client';
import { ConfigProvider, Flex, Table, TableProps } from 'antd';
import clsx from 'clsx';
import OSXPagination from '../Pagination/OSXPagination';
import { twMerge } from 'tailwind-merge';
import OSXTableLoading from '../Table/OSXTableLoading';
import { isBoolean } from 'lodash';
import NoAccess from '../../assets/icons/no-access.svg';
import Image from 'next/image';
import EmptyDataTable from './EmptyTable';

export interface IOSXTable extends TableProps {
  customWrapperClass?: string;
  customHeader?: React.ReactNode;
  customHeaderClass?: string;
  customBlankTitle?: string;
  customBlankDesc?: string;
  customExpandedRowClassName?: string;
  customFooterBg?: string;
  isForbidden?: boolean;
  forbiddenTitle?: string;
  forbiddenDesc?: string;
  noRounded?: boolean;
  isCompact?: boolean;
  loadingDescription?: string;
}
const OSXTable = ({
  customWrapperClass,
  customHeader,
  customHeaderClass = '',
  customBlankTitle = 'Oops',
  customBlankDesc = 'You have no data currently',
  customExpandedRowClassName,
  customFooterBg,
  isForbidden = false,
  forbiddenTitle = 'No access to this table',
  forbiddenDesc = 'You do not have permission to view this table',
  noRounded = false,
  isCompact = false,
  loadingDescription = `Hang in there, we are retrieving your records.`,
  ...args
}: IOSXTable) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            headerBorderRadius: customHeader || noRounded ? 0 : 12,
            footerBg: customFooterBg ? customFooterBg : 'bg-bg-secondary',
          },
        },
      }}
    >
      {isForbidden && (
        <div className='absolute bg-white/30 w-full h-full z-50 backdrop-blur-md border border-fg-warning-secondary rounded-xl'>
          <div className='flex flex-col flex-1 h-full justify-center items-center gap-2'>
            <Image src={NoAccess} alt='No Access' className='w-40' />
            <div className='flex flex-col justify-center items-center px-4'>
              <p className='text-text-secondary font-semibold'>
                {forbiddenTitle}
              </p>
              <p className='text-text-secondary text-center'>{forbiddenDesc}</p>
            </div>
          </div>
        </div>
      )}
      <Flex
        vertical
        align='start'
        className={clsx(
          `${noRounded ? '' : 'rounded-xl'} ${!args.bordered ? 'border border-solid border-border-secondary' : ''
          } bg-bg-primary w-full overflow-hidden`,
          customWrapperClass
        )}
      >
        {customHeader && (
          <div
            className={twMerge(
              `p-4 w-full bg-bg-primary ${args.bordered
                ? `border border-solid border-border-secondary rounded-t-xl border-b-0`
                : ''
              }`,
              `${customHeaderClass}`
            )}
          >
            {customHeader}
          </div>
        )}

        <Table
          {...args}
          locale={{
            emptyText: args?.loading ? (
              <OSXTableLoading loadingDescription={loadingDescription} />
            ) : (
              <EmptyDataTable
                title={customBlankTitle}
                description={customBlankDesc}
              />
            ),
          }}
          dataSource={args?.loading ? [] : args?.dataSource}
          loading={{
            fullscreen: false,
            spinning: isBoolean(args.loading)
              ? (args.loading as boolean)
              : false,
            indicator: args.loading ? <div /> : undefined,
          }}
          bordered={args?.bordered}
          className={`custom-table custom-pagination w-full ${args.bordered && !noRounded ? 'border-b' : ''
            } ${isCompact ? 'compact-table' : ''} ${customExpandedRowClassName || ''
            }`}
          pagination={
            args.pagination !== false && {
              total: args?.dataSource?.length,
              showSizeChanger: false,
              hideOnSinglePage: true,
              itemRender: OSXPagination,
              position: ['bottomCenter'],
              className: args.bordered
                ? 'border rounded-b-xl border-b-0'
                : 'border-t',
              size: 'small',
              ...args.pagination,
            }
          }
        />
      </Flex>
    </ConfigProvider>
  );
};

export default OSXTable;
