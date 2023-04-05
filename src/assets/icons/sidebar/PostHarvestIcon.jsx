import React from "react";

const PostHarvestIcon = ({ active }) => {
  return (
    <div>
      {" "}
      {active ? (
        <svg
          width="20"
          height="17"
          viewBox="0 0 20 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_3841_1150)">
            <path
              d="M6 5.5C6 6.05312 5.55312 6.5 5 6.5C4.44688 6.5 4 6.05312 4 5.5C4 4.94688 4.44688 4.5 5 4.5C5.55312 4.5 6 4.94688 6 5.5ZM5 0.5C5.19688 0.5 5.375 0.615875 5.45625 0.795844L6.23125 2.52781L8.00313 1.85094C8.1875 1.78062 8.39688 1.825 8.53438 1.96438C8.675 2.10375 8.71875 2.31219 8.65 2.49625L7.97188 4.26875L9.70312 5.04375C9.88437 5.09687 10 5.30312 10 5.5C10 5.69688 9.88437 5.875 9.70312 5.95625L7.97188 6.73125L8.65 8.50313C8.71875 8.6875 8.675 8.89688 8.53438 9.03438C8.39688 9.175 8.1875 9.21875 8.00313 9.15L6.23125 8.47188L5.45625 10.2031C5.375 10.3844 5.19688 10.5 5 10.5C4.80312 10.5 4.59687 10.3844 4.54375 10.2031L3.76875 8.47188L1.99625 9.15C1.81219 9.21875 1.60375 9.175 1.46438 9.03438C1.325 8.89688 1.28062 8.6875 1.35094 8.50313L2.02781 6.73125L0.295844 5.95625C0.115875 5.875 0 5.69688 0 5.5C0 5.30312 0.115875 5.09687 0.295844 5.04375L2.02781 4.26875L1.35094 2.49625C1.31651 2.4061 1.3089 2.30792 1.32903 2.21354C1.34915 2.11917 1.39616 2.03263 1.46438 1.96438C1.53263 1.89616 1.61917 1.84915 1.71354 1.82903C1.80792 1.8089 1.9061 1.81651 1.99625 1.85094L3.76875 2.52781L4.54375 0.795844C4.59687 0.615875 4.80312 0.5 5 0.5ZM5 7.5C6.10313 7.5 7 6.60313 7 5.5C7 4.39687 6.10313 3.5 5 3.5C3.89687 3.5 3 4.39687 3 5.5C3 6.60313 3.89687 7.5 5 7.5ZM15.75 14.5H19C19.5531 14.5 20 14.9469 20 15.5C20 16.0531 19.5531 16.5 19 16.5H1C0.447812 16.5 0 16.0531 0 15.5C0 14.9469 0.447812 14.5 1 14.5H14.25V9C14.25 8.44688 13.8031 8 13.25 8C12.6969 8 12.25 8.44688 12.25 9V9.66875C12.7125 9.90938 13 10.3906 13 11.0625C13 11.6656 12.3281 12.6906 11.5 13.5C10.6719 12.6906 10 11.675 10 11.0625C10 10.3906 10.2875 9.90938 10.75 9.66875V8.97188C10.75 7.61875 11.8687 6.47188 13.25 6.47188C13.6062 6.47188 13.9438 6.575 14.25 6.70937V5.97188C14.25 4.61875 15.3687 3.47187 16.75 3.47187C18.1313 3.47187 19.25 4.61875 19.25 5.97188V7.66875C19.7125 7.90937 20 8.39062 20 9.0625C20 9.66562 19.3281 10.6906 18.5 11.5C17.6719 10.6906 17 9.675 17 9.0625C17 8.39062 17.2875 7.90937 17.75 7.66875V5.97188C17.75 5.44688 17.3031 4.97188 16.75 4.97188C16.1969 4.97188 15.75 5.44688 15.75 5.97188V14.5Z"
              fill="#778761"
            />
          </g>
          <defs>
            <clipPath id="clip0_3841_1150">
              <rect
                width="20"
                height="16"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      ) : (
        <svg
          width="20"
          height="17"
          viewBox="0 0 20 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_3841_1150)">
            <path
              d="M6 5.5C6 6.05312 5.55312 6.5 5 6.5C4.44688 6.5 4 6.05312 4 5.5C4 4.94688 4.44688 4.5 5 4.5C5.55312 4.5 6 4.94688 6 5.5ZM5 0.5C5.19688 0.5 5.375 0.615875 5.45625 0.795844L6.23125 2.52781L8.00313 1.85094C8.1875 1.78062 8.39688 1.825 8.53438 1.96438C8.675 2.10375 8.71875 2.31219 8.65 2.49625L7.97188 4.26875L9.70312 5.04375C9.88437 5.09687 10 5.30312 10 5.5C10 5.69688 9.88437 5.875 9.70312 5.95625L7.97188 6.73125L8.65 8.50313C8.71875 8.6875 8.675 8.89688 8.53438 9.03438C8.39688 9.175 8.1875 9.21875 8.00313 9.15L6.23125 8.47188L5.45625 10.2031C5.375 10.3844 5.19688 10.5 5 10.5C4.80312 10.5 4.59687 10.3844 4.54375 10.2031L3.76875 8.47188L1.99625 9.15C1.81219 9.21875 1.60375 9.175 1.46438 9.03438C1.325 8.89688 1.28062 8.6875 1.35094 8.50313L2.02781 6.73125L0.295844 5.95625C0.115875 5.875 0 5.69688 0 5.5C0 5.30312 0.115875 5.09687 0.295844 5.04375L2.02781 4.26875L1.35094 2.49625C1.31651 2.4061 1.3089 2.30792 1.32903 2.21354C1.34915 2.11917 1.39616 2.03263 1.46438 1.96438C1.53263 1.89616 1.61917 1.84915 1.71354 1.82903C1.80792 1.8089 1.9061 1.81651 1.99625 1.85094L3.76875 2.52781L4.54375 0.795844C4.59687 0.615875 4.80312 0.5 5 0.5ZM5 7.5C6.10313 7.5 7 6.60313 7 5.5C7 4.39687 6.10313 3.5 5 3.5C3.89687 3.5 3 4.39687 3 5.5C3 6.60313 3.89687 7.5 5 7.5ZM15.75 14.5H19C19.5531 14.5 20 14.9469 20 15.5C20 16.0531 19.5531 16.5 19 16.5H1C0.447812 16.5 0 16.0531 0 15.5C0 14.9469 0.447812 14.5 1 14.5H14.25V9C14.25 8.44688 13.8031 8 13.25 8C12.6969 8 12.25 8.44688 12.25 9V9.66875C12.7125 9.90938 13 10.3906 13 11.0625C13 11.6656 12.3281 12.6906 11.5 13.5C10.6719 12.6906 10 11.675 10 11.0625C10 10.3906 10.2875 9.90938 10.75 9.66875V8.97188C10.75 7.61875 11.8687 6.47188 13.25 6.47188C13.6062 6.47188 13.9438 6.575 14.25 6.70937V5.97188C14.25 4.61875 15.3687 3.47187 16.75 3.47187C18.1313 3.47187 19.25 4.61875 19.25 5.97188V7.66875C19.7125 7.90937 20 8.39062 20 9.0625C20 9.66562 19.3281 10.6906 18.5 11.5C17.6719 10.6906 17 9.675 17 9.0625C17 8.39062 17.2875 7.90937 17.75 7.66875V5.97188C17.75 5.44688 17.3031 4.97188 16.75 4.97188C16.1969 4.97188 15.75 5.44688 15.75 5.97188V14.5Z"
              fill="#EEEEEE"
            />
          </g>
          <defs>
            <clipPath id="clip0_3841_1150">
              <rect
                width="20"
                height="16"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      )}
    </div>
  );
};

export default PostHarvestIcon;
