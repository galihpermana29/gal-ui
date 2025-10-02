"use client";

import { Collapse } from 'antd';
import { CollapseProps } from 'antd/lib';

interface IOSXCollapse extends CollapseProps {
  customClassName?: string;
}

const OSXCollapse = ({ customClassName, ...args }: IOSXCollapse) => {
  return (
    <Collapse
      expandIconPosition='end'
      defaultActiveKey={[1]}
      ghost
      className={`w-full custom-collapse ${customClassName}`}
      {...args}
    />
  );
};

export default OSXCollapse;
