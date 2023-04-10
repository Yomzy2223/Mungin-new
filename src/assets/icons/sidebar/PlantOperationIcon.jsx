import React from "react";

const PlantOperationIcon = ({ active }) => {
  return (
    <div>
      {active ? (
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 9.5C8.55228 9.5 9 9.05228 9 8.5C9 7.94772 8.55228 7.5 8 7.5C7.44772 7.5 7 7.94772 7 8.5C7 9.05228 7.44772 9.5 8 9.5Z"
            fill="#778761"
          />
          <path
            d="M14.5934 7.38016L14.0667 5.70016C14.0098 5.506 13.9144 5.32528 13.7862 5.16878C13.658 5.01228 13.4996 4.8832 13.3204 4.78926C13.1412 4.69531 12.9449 4.63841 12.7433 4.62196C12.5416 4.60551 12.3387 4.62984 12.1467 4.6935L11.92 4.76683C11.7425 4.82553 11.5533 4.84042 11.3688 4.81024C11.1842 4.78006 11.0096 4.7057 10.86 4.5935L10.7867 4.54016C10.6407 4.42841 10.523 4.28391 10.4431 4.11832C10.3632 3.95272 10.3233 3.77066 10.3267 3.58683V3.40016C10.3299 2.98151 10.1669 2.57869 9.87336 2.28016C9.73374 2.13913 9.56763 2.02707 9.38458 1.95042C9.20153 1.87377 9.00514 1.83403 8.80669 1.8335H7.10669C6.69881 1.83877 6.30952 2.00496 6.02359 2.29588C5.73766 2.58681 5.57823 2.97892 5.58002 3.38683V3.54683C5.57938 3.74034 5.53533 3.93125 5.4511 4.10547C5.36687 4.2797 5.24462 4.4328 5.09336 4.5535L5.00669 4.62016C4.83958 4.74658 4.64413 4.83027 4.43733 4.86396C4.23052 4.89765 4.01861 4.88033 3.82002 4.8135C3.63763 4.75038 3.44433 4.72493 3.25182 4.73868C3.05931 4.75243 2.87159 4.8051 2.70002 4.8935C2.52139 4.98215 2.36292 5.10663 2.23446 5.25917C2.10601 5.41171 2.01032 5.58905 1.95336 5.78016L1.40669 7.5135C1.27992 7.90429 1.31243 8.32933 1.49716 8.6963C1.6819 9.06327 2.00394 9.34255 2.39336 9.4735H2.50002C2.67966 9.54081 2.84089 9.64955 2.97063 9.79086C3.10036 9.93218 3.19494 10.1021 3.24669 10.2868L3.28669 10.3935C3.36101 10.5976 3.38586 10.8164 3.3592 11.0319C3.33255 11.2475 3.25515 11.4537 3.13336 11.6335C2.88683 11.9692 2.78285 12.3887 2.84403 12.8007C2.9052 13.2127 3.12659 13.5839 3.46002 13.8335L4.84002 14.8802C5.10132 15.0701 5.41698 15.1707 5.74002 15.1668C5.82648 15.1753 5.91356 15.1753 6.00002 15.1668C6.20009 15.1281 6.39017 15.049 6.55866 14.9344C6.72715 14.8198 6.87052 14.672 6.98002 14.5002L7.13336 14.2802C7.24092 14.1259 7.38324 13.999 7.54884 13.9099C7.71443 13.8207 7.89867 13.7717 8.08669 13.7668C8.28373 13.762 8.47878 13.8071 8.65365 13.8981C8.82852 13.989 8.9775 14.1227 9.08669 14.2868L9.16669 14.4002C9.28036 14.5693 9.42745 14.7134 9.59891 14.8236C9.77036 14.9338 9.96256 15.0077 10.1637 15.0408C10.3648 15.0739 10.5705 15.0655 10.7682 15.0161C10.9659 14.9667 11.1515 14.8773 11.3134 14.7535L12.6667 13.7402C12.9867 13.4917 13.1995 13.1301 13.2614 12.7298C13.3234 12.3294 13.2299 11.9205 13 11.5868L12.8267 11.3335C12.7225 11.1724 12.6542 10.9908 12.6266 10.801C12.599 10.6111 12.6127 10.4176 12.6667 10.2335C12.7218 10.0365 12.824 9.85579 12.9645 9.70711C13.1051 9.55844 13.2797 9.44622 13.4734 9.38016L13.6067 9.3335C13.9925 9.19962 14.3111 8.92098 14.4953 8.55647C14.6794 8.19196 14.7146 7.77014 14.5934 7.38016ZM8.00002 10.8335C7.53853 10.8335 7.08741 10.6966 6.70369 10.4403C6.31998 10.1839 6.02091 9.81945 5.8443 9.39309C5.6677 8.96673 5.62149 8.49757 5.71152 8.04495C5.80156 7.59233 6.02378 7.17657 6.35011 6.85025C6.67643 6.52392 7.09219 6.3017 7.54481 6.21166C7.99743 6.12163 8.46659 6.16784 8.89295 6.34444C9.31931 6.52105 9.68373 6.82012 9.94012 7.20383C10.1965 7.58755 10.3334 8.03867 10.3334 8.50016C10.3334 9.119 10.0875 9.71249 9.64994 10.1501C9.21235 10.5877 8.61886 10.8335 8.00002 10.8335Z"
            fill="#778761"
          />
        </svg>
      ) : (
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 9.5C8.55228 9.5 9 9.05228 9 8.5C9 7.94772 8.55228 7.5 8 7.5C7.44772 7.5 7 7.94772 7 8.5C7 9.05228 7.44772 9.5 8 9.5Z"
            fill="#EEEEEE"
          />
          <path
            d="M14.5934 7.38016L14.0667 5.70016C14.0098 5.506 13.9144 5.32528 13.7862 5.16878C13.658 5.01228 13.4996 4.8832 13.3204 4.78926C13.1412 4.69531 12.9449 4.63841 12.7433 4.62196C12.5416 4.60551 12.3387 4.62984 12.1467 4.6935L11.92 4.76683C11.7425 4.82553 11.5533 4.84042 11.3688 4.81024C11.1842 4.78006 11.0096 4.7057 10.86 4.5935L10.7867 4.54016C10.6407 4.42841 10.523 4.28391 10.4431 4.11832C10.3632 3.95272 10.3233 3.77066 10.3267 3.58683V3.40016C10.3299 2.98151 10.1669 2.57869 9.87336 2.28016C9.73374 2.13913 9.56763 2.02707 9.38458 1.95042C9.20153 1.87377 9.00514 1.83403 8.80669 1.8335H7.10669C6.69881 1.83877 6.30952 2.00496 6.02359 2.29588C5.73766 2.58681 5.57823 2.97892 5.58002 3.38683V3.54683C5.57938 3.74034 5.53533 3.93125 5.4511 4.10547C5.36687 4.2797 5.24462 4.4328 5.09336 4.5535L5.00669 4.62016C4.83958 4.74658 4.64413 4.83027 4.43733 4.86396C4.23052 4.89765 4.01861 4.88033 3.82002 4.8135C3.63763 4.75038 3.44433 4.72493 3.25182 4.73868C3.05931 4.75243 2.87159 4.8051 2.70002 4.8935C2.52139 4.98215 2.36292 5.10663 2.23446 5.25917C2.10601 5.41171 2.01032 5.58905 1.95336 5.78016L1.40669 7.5135C1.27992 7.90429 1.31243 8.32933 1.49716 8.6963C1.6819 9.06327 2.00394 9.34255 2.39336 9.4735H2.50002C2.67966 9.54081 2.84089 9.64955 2.97063 9.79086C3.10036 9.93218 3.19494 10.1021 3.24669 10.2868L3.28669 10.3935C3.36101 10.5976 3.38586 10.8164 3.3592 11.0319C3.33255 11.2475 3.25515 11.4537 3.13336 11.6335C2.88683 11.9692 2.78285 12.3887 2.84403 12.8007C2.9052 13.2127 3.12659 13.5839 3.46002 13.8335L4.84002 14.8802C5.10132 15.0701 5.41698 15.1707 5.74002 15.1668C5.82648 15.1753 5.91356 15.1753 6.00002 15.1668C6.20009 15.1281 6.39017 15.049 6.55866 14.9344C6.72715 14.8198 6.87052 14.672 6.98002 14.5002L7.13336 14.2802C7.24092 14.1259 7.38324 13.999 7.54884 13.9099C7.71443 13.8207 7.89867 13.7717 8.08669 13.7668C8.28373 13.762 8.47878 13.8071 8.65365 13.8981C8.82852 13.989 8.9775 14.1227 9.08669 14.2868L9.16669 14.4002C9.28036 14.5693 9.42745 14.7134 9.59891 14.8236C9.77036 14.9338 9.96256 15.0077 10.1637 15.0408C10.3648 15.0739 10.5705 15.0655 10.7682 15.0161C10.9659 14.9667 11.1515 14.8773 11.3134 14.7535L12.6667 13.7402C12.9867 13.4917 13.1995 13.1301 13.2614 12.7298C13.3234 12.3294 13.2299 11.9205 13 11.5868L12.8267 11.3335C12.7225 11.1724 12.6542 10.9908 12.6266 10.801C12.599 10.6111 12.6127 10.4176 12.6667 10.2335C12.7218 10.0365 12.824 9.85579 12.9645 9.70711C13.1051 9.55844 13.2797 9.44622 13.4734 9.38016L13.6067 9.3335C13.9925 9.19962 14.3111 8.92098 14.4953 8.55647C14.6794 8.19196 14.7146 7.77014 14.5934 7.38016ZM8.00002 10.8335C7.53853 10.8335 7.08741 10.6966 6.70369 10.4403C6.31998 10.1839 6.02091 9.81945 5.8443 9.39309C5.6677 8.96673 5.62149 8.49757 5.71152 8.04495C5.80156 7.59233 6.02378 7.17657 6.35011 6.85025C6.67643 6.52392 7.09219 6.3017 7.54481 6.21166C7.99743 6.12163 8.46659 6.16784 8.89295 6.34444C9.31931 6.52105 9.68373 6.82012 9.94012 7.20383C10.1965 7.58755 10.3334 8.03867 10.3334 8.50016C10.3334 9.119 10.0875 9.71249 9.64994 10.1501C9.21235 10.5877 8.61886 10.8335 8.00002 10.8335Z"
            fill="#EEEEEE"
          />
        </svg>
      )}
    </div>
  );
};

export default PlantOperationIcon;