import { Button, Flex, Typography } from "antd";
import React from "react";

const EmptyDataTable: React.FC<{
  title?: string;
  description?: string;
  buttons?: any;
  emptyClassName?: string;
}> = ({ title, description, buttons, emptyClassName }) => {
  return (
    <Flex
      className={`osx-empty-table-container ${emptyClassName}`}
      vertical
      justify="center"
      align="center"
      gap={12}
    >
      <div className="osx-empty-table-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
        >
          <path
            d="M4.91174 52.3018C4.91174 87.8388 43.3815 110.049 74.1574 92.2809C88.4406 84.0345 97.2393 68.7946 97.2393 52.3018C97.2393 16.7649 58.7694 -5.44562 27.9936 12.3228C13.7104 20.5692 4.91174 35.8091 4.91174 52.3018Z"
            fill="#D9EDFF"
          />
          <path
            d="M49.1771 98.4229C49.8088 98.4483 50.4428 98.4614 51.079 98.4622C54.324 98.4636 57.5601 98.1244 60.7342 97.45V57.3106H49.1771V98.4229Z"
            fill="#B0D9FF"
          />
          <path
            d="M60.7342 97.45V57.3106H49.1771V98.423"
            stroke="#020064"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M90.2686 57.5968C90.2686 58.1739 89.8012 58.6418 89.2242 58.6424H26.3479V19.5532H77.7259C84.6515 19.5529 90.2661 25.1658 90.2686 32.0913V57.5968Z"
            fill="white"
            stroke="#020064"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M42.3252 58.6424H10.3672V35.5294C10.3691 26.705 17.5235 19.5526 26.3479 19.5532C35.1709 19.5545 42.3233 26.7064 42.3252 35.5294V58.6424Z"
            fill="#B0D9FF"
          />
          <path
            d="M16.6731 85.2767H13.6725C4.98789 85.2767 0.993588 78.7445 4.75019 70.6877L10.3672 58.6424H42.3252L37.8369 70.6877C34.8328 78.7445 25.36 85.2767 16.6731 85.2767Z"
            fill="white"
            stroke="#020064"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26.3479 19.5486V58.6424"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.7365 39.144H42.2687"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M39.3234 26.2077L10.3672 55.1628"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.4498 26.0912L42.3275 54.969"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26.3987 23.1194C23.3046 27.3722 20.1089 28.052 16.1538 28.973C17.623 32.8149 16.4216 36.2772 12.0879 39.5433C15.8318 42.095 17.5422 45.0934 17.4545 48.4887C20.9341 48.0917 23.8585 50.131 26.3987 53.8552C27.3693 50.3422 31.7006 50.0883 36.6448 49.4697C36.5559 46.0755 37.2922 41.7765 41.0303 39.2248C38.4567 35.9575 36.6586 32.8207 36.6448 28.9787C32.6943 28.052 29.4998 27.3722 26.3987 23.1194Z"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26.4552 27.9608C24.3351 30.8749 22.1469 31.34 19.4383 31.9713C20.4435 34.6026 19.6218 36.9731 16.6534 39.2109C19.2167 40.9582 20.3892 43.0114 20.3292 45.3369C22.7124 45.0657 24.7148 46.4621 26.4552 49.0127C27.1199 46.6064 30.0859 46.4321 33.4721 46.0051C33.412 43.6807 33.9152 40.7355 36.4796 38.9882C34.7162 36.7504 33.4847 34.6026 33.4721 31.9713C30.7634 31.34 28.5752 30.8749 26.4552 27.9608Z"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M69.3645 11.5761C70.2849 11.5761 71.031 10.83 71.031 9.90963V3.24363C71.0317 2.32293 70.2852 1.57643 69.3645 1.57703H56.0324C55.112 1.57703 54.3659 2.32313 54.3659 3.24363V31.8236C49.6089 33.7479 48.7188 40.1003 52.7639 43.2578C56.8089 46.4154 62.7552 44.01 63.4672 38.9281C63.8916 35.8994 62.2006 32.9704 59.3654 31.8236V12.8595C59.3654 12.15 59.9405 11.5749 60.65 11.575L69.3645 11.5761Z"
            fill="#B0D9FF"
            stroke="#020064"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M53.3307 37.9957C53.3262 40.5614 56.101 42.1699 58.3252 40.8908C59.3611 40.2952 59.9988 39.1906 59.9967 37.9957C60.0012 35.4299 57.2264 33.8215 55.0022 35.1005C53.9663 35.6962 53.3286 36.8008 53.3307 37.9957Z"
            fill="white"
            stroke="#020064"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M42.3252 58.6424H10.3672V35.5294C10.3691 26.705 17.5235 19.5526 26.3479 19.5532C35.1709 19.5545 42.3233 26.7064 42.3252 35.5294V58.6424Z"
            stroke="#020064"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <Flex gap={4} vertical>
        <Typography.Text className="osx-empty-table-text">
          {title}
        </Typography.Text>
        {description && (
          <Typography.Text className="osx-empty-table-description">
            {description}
          </Typography.Text>
        )}
      </Flex>
      {buttons && (
        <Flex align="flex-start" gap={4} justify="center">
          {buttons.map((button: any, index: any) => (
            <Button
              key={index}
              type={button.type}
              icon={button.icon}
              onClick={button.onClick}
              className={button.buttonClassName}
            >
              {button.label}
            </Button>
          ))}
        </Flex>
      )}
    </Flex>
  );
};

export default EmptyDataTable;
