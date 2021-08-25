import { Marker } from '@amap/amap-react';
import { MarkerProps as AMapMarkerProps } from '@amap/amap-react/lib/Marker';
import React from 'react';

export type MarkerType =
  | 'default'
  | 'rsl'
  | 'sha'
  | 'xue'
  | 'rsk'
  | 'csk'
  | 'xng';

export type IMarkerProps = {
  type: MarkerType;
  lnglat: ILngLat;
} & {
  [prop in keyof AMapMarkerProps as Exclude<
    prop,
    'position'
  >]: AMapMarkerProps[prop];
};

const svgs: Record<MarkerType, JSX.Element> = {
  default: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208 289" width="64">
      <title>marker</title>
      <ellipse
        cx="104"
        cy="260.1"
        rx="104"
        ry="28.9"
        fill="#3f3d56"
        opacity="0.4"
      />
      <ellipse cx="103.7" cy="261" rx="58.2" ry="14" fill="#3f3d56" />
      <path
        d="M208,104A104,104,0,1,0,79.8,205.2c14.5,30.9,27,55.3,27,55.3s11.6-24.9,25-56.3A104,104,0,0,0,208,104Z"
        fill="#00bfa6"
      />
      <circle cx="103.5" cy="113.5" r="63.5" fill="#3f3d56" opacity="0.4" />
      <path d="M137.8,76.7c0,.7-1.1-1.1-2.5-1.1s-2.5,1.8-2.5,1.1,2.5-1.5,2.5-1.5S137.8,76,137.8,76.7Z" />
      <path d="M137.1,79.1c0,1-1.6-1.6-3.7-1.6s-3.6,2.6-3.6,1.6,3.6-2.3,3.6-2.3S137.1,78.1,137.1,79.1Z" />
      <path d="M137,82.2c0,1.5-2.4-2.5-5.5-2.5s-5.6,4-5.6,2.5,5.6-3.5,5.6-3.5S137,80.7,137,82.2Z" />
      <path d="M128.7,98.5c-2.1,6.1-6.4-9.9-18.6-9.9s-27.7,16-25.6,9.9,26.8-13.8,26.8-13.8S130.8,92.4,128.7,98.5Z" />
      <path d="M116.1,104.9c-1.1,3.3-3.4-5.2-9.8-5.2s-14.7,8.5-13.6,5.2,14.2-7.3,14.2-7.3S117.2,101.7,116.1,104.9Z" />
      <path d="M129.8,107.1c-.7,2.1-2.2-3.5-6.5-3.5s-9.7,5.6-9,3.5,9.4-4.9,9.4-4.9S130.6,104.9,129.8,107.1Z" />
      <path d="M93,107.2c-.6,1.8-1.9-3-5.5-3s-8.3,4.8-7.7,3,8-4.2,8-4.2S93.6,105.3,93,107.2Z" />
      <path d="M89.8,112.6c-.6,1.6-2.5-2.6-6.8-2.6s-9.1,4.2-8.5,2.6,8.8-3.6,8.8-3.6S90.3,111,89.8,112.6Z" />
      <path d="M130,112.6c-.5,1.6-2.5-2.6-6.7-2.6s-9.1,4.2-8.6,2.6,8.9-3.6,8.9-3.6S130.6,111,130,112.6Z" />
      <path d="M77.4,106.3c-.3.8-.8-1.4-2.5-1.4s-3.7,2.2-3.5,1.4,3.7-1.9,3.7-1.9S77.7,105.5,77.4,106.3Z" />
      <path d="M79.8,103.6c-.3.7-.8-1.3-2.3-1.3s-3.4,2-3.1,1.3,3.3-1.7,3.3-1.7S80,102.8,79.8,103.6Z" />
      <path d="M77,109.5c-.3,1.1-1.1-1.9-3.4-1.9s-5.1,3-4.7,1.9,4.9-2.6,4.9-2.6S77.4,108.3,77,109.5Z" />
      <path d="M134.9,104.4s2.7,1.1,2.4,1.9-.9-1.4-2.6-1.4-3.7,2.2-3.4,1.4S134.9,104.4,134.9,104.4Z" />
      <path d="M134.1,101.9s2.3.9,2.1,1.7-.8-1.3-2.3-1.3-3.4,2-3.1,1.3S134.1,101.9,134.1,101.9Z" />
      <path d="M134.4,106.9s3.6,1.4,3.3,2.6-1.3-1.9-3.5-1.9-5.1,3-4.7,1.9S134.4,106.9,134.4,106.9Z" />
      <path d="M137.6,121.6c-3.9-4.3-13-1.4-17.7-.5-.6.1,10.7-4.9,6.3-8.6s-13.4,3.4-13.5,2.3c-.5-3.5-16.4-.5-16.4-1.4s1.6-2.1,2-2.8c1.3-2.3-4-3-10-3a30.9,30.9,0,0,0-6.2.5,84.8,84.8,0,0,1,9.2,1.2c8.6,1.4-3.2,3.7,0,6.2s18.1-1.6,19.4-.8-6.7.3-9.4,4.4,9.4,5.8,17,3.8c16.1-4.3,15.9,4.1,11.6,3.8-42.7-2.5-42.8,8.1-44.1,10.3C82.1,143.6,74,150.7,74,150.7l.9.9s16.4-16.1,17.5-16.7c7.7-4,12.6-5.7,17.7-5.9,12.1-.5,19.8,1.6,23.6.7C139.4,128.4,140.2,124.4,137.6,121.6Z" />
    </svg>
  ),
  rsl: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 504.5 192.8"
      width="128"
    >
      <title>markers</title>
      <path
        d="M36,142s19.9-79.2,95.6-72c49.2,4.6,70.2-12.4,78.8-24.8,10.8-15.5,24.4-26.1,39.3-29.6,24.2-5.7,58.9-.3,94.2,50.8,65.1,94.1,121.2,58.3,123.7,58.3S483,142,483,142Z"
        fill="#3f3d56"
      />
      <ellipse
        cx="163"
        cy="39.5"
        rx="118"
        ry="39.5"
        fill="#fff"
        opacity="0.4"
      />
      <path d="M102.6,14.8c16.7,12.3,16.1,30.5,33,41.2a26.8,26.8,0,0,0-3,7.2c-10.8-6.1-15.3-16.8-20.6-26.7-4.1,12.1-10.6,21-20.1,26.5a47.8,47.8,0,0,0-5.7-5.1c11.2-5.5,17.6-15.6,20.7-29.6a31.2,31.2,0,0,0-8.2-8Z" />
      <path d="M167,27.3c-.4,1.2-1,2.3-1.4,3.3h15.8V63.7h-6.5V61.2H151v2.5h-6.2V30.6h13.8a20.2,20.2,0,0,0,.9-3.3H139.6V21.5h12a58.5,58.5,0,0,0-3.8-4.9l5.6-2.5a43.7,43.7,0,0,1,5.1,6.2l-2.3,1.2h12a42.4,42.4,0,0,0,4-7.1l7.2,1.6a61.1,61.1,0,0,1-4.2,5.5H187v5.8Zm7.9,8.7H151v3.2h23.9Zm0,8H151v3.4h23.9Zm0,11.7V52.1H151v3.6Z" />
      <path d="M232.2,56.7c1.9,0,2.3-1,2.6-6a15.3,15.3,0,0,0,5.7,2.4c-.8,7.1-2.5,9.4-7.7,9.4h-8.1c-4.8,0-6.9-1.1-7.7-4.1-2.1,1.3-4.3,2.6-6.6,3.8a24.4,24.4,0,0,0-4.3-5,51.9,51.9,0,0,0,10.5-6V32h-4.3c-2.1,14.2-6.7,24.4-16.6,31.1a29.1,29.1,0,0,0-4.8-5.3c9-5.3,13.1-13.9,14.9-25.8H192.1V26.2h14.4c.4-3.6.6-7.6.7-11.7l6.6.2c-.2,4.1-.4,7.9-.8,11.5h26.4V32H223V45.8A50.4,50.4,0,0,0,231.8,34l5.8,2.4A62,62,0,0,1,223,53.9v.2c0,2.3.3,2.6,2.6,2.6Zm-8.3-41.6a90.1,90.1,0,0,1,9.5,7.3l-4.3,3.8a100.1,100.1,0,0,0-9.3-7.8Z" />
      <ellipse
        cx="252.3"
        cy="139"
        rx="252.3"
        ry="53.9"
        fill="#3f3d56"
        opacity="0.4"
      />
    </svg>
  ),
  sha: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 239.5 152.1"
      width="64"
    >
      <title>markers</title>
      <ellipse
        cx="119.8"
        cy="126.6"
        rx="119.8"
        ry="25.6"
        fill="#3f3d56"
        opacity="0.4"
      />
      <path
        d="M143,129H29L82.8,35.9a3.7,3.7,0,0,1,5.1-1.4,3.2,3.2,0,0,1,1.4,1.4l36.1,62.5,1.7,2.9Z"
        fill="#3f3d56"
      />
      <polygon
        points="143 129 104.3 129 123.3 101.3 124.7 99.4 125.4 98.4 127.1 101.3 143 129"
        opacity="0.2"
      />
      <path
        d="M206.3,129H108l19.1-27.7,1.4-1.9,24.8-36.1a5,5,0,0,1,7.4-.4l.4.4Z"
        fill="#3f3d56"
      />
      <circle cx="134.5" cy="39.5" r="39.5" fill="#fff" opacity="0.4" />
      <path d="M119.8,58.2v3.9h-5.3V44.7c-1,1.4-2,2.8-3,4a42.1,42.1,0,0,0-2.1-7.5c3.5-4.3,5.9-10.7,7.5-17.7h-5.8V17.8h19.5v5.7h-7.9a75.9,75.9,0,0,1-3.1,10.6h9.9V58.2Zm0-18.6V52.8H124V39.6Zm37.9,3.3c-4.1,12.2-12.2,18-25.5,21.4a19.5,19.5,0,0,0-3.5-5.6c12.1-2.2,19.6-7.1,23.1-17.4ZM139.2,25.6a82.9,82.9,0,0,1-3.9,16.6,37.3,37.3,0,0,0-5.3-2.6c1.6-3.7,2.8-9.7,3.5-15.1ZM147.1,48h-6V15.5h6Zm6.4-8.3c-.6-3.9-2.8-10-4.9-14.6l5.4-1.8a70.2,70.2,0,0,1,5.3,14.3Z" />
    </svg>
  ),
  rsk: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 281 185" width="64">
      <title>markers</title>
      <ellipse
        cx="140.5"
        cy="155"
        rx="140.5"
        ry="30"
        fill="#3f3d56"
        opacity="0.4"
      />
      <ellipse cx="140.5" cy="155" rx="109.7" ry="23.4" fill="#3f3d56" />
      <path
        d="M212.2,163.8H104.1c-25.9,0-46.8-19.9-46.8-44.5s20.9-44.5,46.8-44.5H211.2c9.9,0,18-7.7,18-17.1s-8.1-17.1-18-17.1H179V13.2h32.2C237,13.2,258,33.1,258,57.7s-20.9,44.5-46.8,44.5H104.1c-9.9,0-18,7.6-18,17.1s8.1,17.1,18,17.1H212.2Z"
        fill="#29abe2"
      />
      <ellipse
        cx="117.6"
        cy="39.5"
        rx="98"
        ry="39.5"
        fill="#fff"
        opacity="0.4"
      />
      <path d="M98.2,43.7A48.8,48.8,0,0,0,116,57a31.1,31.1,0,0,0-4.4,5.2A51.9,51.9,0,0,1,94.5,47.8V64H87.8V47.9A52.8,52.8,0,0,1,70.6,62.1a27,27,0,0,0-4.4-5.2,51.3,51.3,0,0,0,18-13.2H67.7v-6h9.9a40.2,40.2,0,0,0-3.9-9l5.4-2h-9v-6H87.8V14.9h6.7v5.8h18.1v6h-8.7l6.1,1.7a87.3,87.3,0,0,1-5.6,9.3h10.2v6Zm-18.9-17c1.8,2.8,3.8,6.5,4.4,9.1l-4.9,1.9h9v-11Zm15.2,0v11h8.8l-4.4-1.5a58.9,58.9,0,0,0,4.4-9.5Z" />
      <path d="M139.1,29.1c-2.3,14.2-8,24.8-15.4,30.3a19,19,0,0,0-5-4.8c6-4.1,10.5-11.3,12.9-20.5h-11V27.8h13.2l1.2-.3Zm26.1-.9c-3.9,3.9-8.5,8.2-12.2,11.2a36.6,36.6,0,0,0,16,13.9,26,26,0,0,0-4.7,5.8c-7.4-3.9-13-10.3-17.1-18.2V56c0,3.6-.7,5.5-2.8,6.6s-5.2,1.5-9.4,1.5a30.2,30.2,0,0,0-2.3-7h6.6c.9,0,1.2-.3,1.2-1.2V14.9h6.7V27.8c.9,2.3,1.8,4.5,2.9,6.7a80.8,80.8,0,0,0,9.3-10.4Z" />
    </svg>
  ),
  csk: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 281 213.2" width="64">
      <title>markers</title>
      <ellipse
        cx="140.5"
        cy="183.2"
        rx="140.5"
        ry="30"
        fill="#3f3d56"
        opacity="0.4"
      />
      <ellipse cx="140.5" cy="183.2" rx="109.7" ry="23.4" fill="#3f3d56" />
      <path
        d="M269.9,70c-2,31.4-30.8,43.3-62.1,39.9-66.2-7.3-124.5,6.1-102.9,20.9,23.2,15.9,127.7,34.3,88.4,58C157.5,210.5,1,138.5,45.2,93c42.4-43.7,72.8,7.4,150.3-64.1C230.4-20.3,274.1,4.5,269.9,70Z"
        fill="#29abe2"
      />
      <ellipse
        cx="132.5"
        cy="39.5"
        rx="118"
        ry="39.5"
        fill="#fff"
        opacity="0.4"
      />
      <path d="M104.6,39.7V62.5H97.5V59.7H61.4V39.8h7.1V53.5h11V37H64.2V17.9h6.6V31h8.7V13.5h6.9V31h9.1V17.9h6.9V37h-16V53.5H97.5V39.7Z" />
      <path d="M131,27.7c-2.3,14.2-7.9,24.8-15.3,30.3a21.1,21.1,0,0,0-5-4.9c6-4.1,10.5-11.2,12.8-20.4H112.6V26.4h13.2l1.1-.3Zm26.2-.9C153.3,30.7,148.7,35,145,38a36.9,36.9,0,0,0,15.9,13.9,28.6,28.6,0,0,0-4.6,5.8c-7.4-3.9-13-10.3-17.1-18.2V54.6c0,3.6-.7,5.5-2.8,6.6s-5.2,1.5-9.5,1.5a23,23,0,0,0-2.3-7h6.7c.9,0,1.2-.3,1.2-1.2V13.5h6.7V26.4a56.5,56.5,0,0,0,2.9,6.7,80.8,80.8,0,0,0,9.3-10.4Z" />
      <path d="M208.9,18.7V61.4H202V57.3H174.2v4.3h-6.6V18.7ZM202,50.8V25H174.2V50.8Z" />
    </svg>
  ),
  xng: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 138.5 198.8"
      width="64"
    >
      <title>markers</title>
      <path
        d="M54.3,62.9A69,69,0,0,1,100.9,69a68.4,68.4,0,0,1,31.2,42l3.3-.7a45.8,45.8,0,0,1,1.4,5.3,69.1,69.1,0,0,1-52.6,82.5h0l-3.5.7-.6-3a68.7,68.7,0,0,1-46.7-6A69.3,69.3,0,0,1,54.3,62.9Z"
        opacity="0.2"
      />
      <path
        d="M33.3,182.9a64.7,64.7,0,0,1-21-87.4l1.2-1.9a64.7,64.7,0,1,1,19.8,89.3Z"
        fill="#3f3d56"
      />
      <path
        d="M20.1,128.9A47.7,47.7,0,0,1,43.2,87.7l1.2,2.1a45.6,45.6,0,1,0,46.9-.3l1.2-2a47.9,47.9,0,1,1-72.4,41.4Z"
        fill="#fff"
      />
      <path
        d="M68.1,133.9c2.5-6.8,6.7-15.2,11.2-20.4l-10.1,3.7V88.6H66.7v28.6l-10.2-3.6C61.2,118.8,65.5,127.2,68.1,133.9Z"
        fill="#fff"
      />
      <ellipse
        cx="68.9"
        cy="39.5"
        rx="63"
        ry="39.5"
        fill="#fff"
        opacity="0.4"
      />
      <path d="M115.1,51.9c0,3.3-.7,5-2.9,6s-5.3,1.1-9.8,1.1a27.2,27.2,0,0,0-2-6.1h7.3c1,0,1.3-.3,1.3-1.2V25.9H79.1v33H73V20H87.1a59.5,59.5,0,0,0,2.7-8.5l7.6,1.4c-1.1,2.4-2.3,4.9-3.4,7.1h21.1ZM89.6,48.2v3.7H84.1v-21H104V48.2Zm0-12v6.7h8.8V36.2Z" />
      <path d="M67.7,53v6H22.9V53H47.1a122.4,122.4,0,0,0,6.3-22l6.7,1.3A187.1,187.1,0,0,1,53.4,53ZM65.6,29.5H25.1v-6H43a70,70,0,0,0-2.4-7.9l5.9-1.5A67.5,67.5,0,0,1,49.2,22l-5.3,1.5H65.6ZM35.3,51.8a148.4,148.4,0,0,0-4.1-19.5l5.9-1.4a150.9,150.9,0,0,1,4.5,19.3Z" />
    </svg>
  ),
  xue: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 228 187.3" width="64">
      <defs>
        <linearGradient
          id="a"
          x1="114.55"
          y1="-513.87"
          x2="114.55"
          y2="-416.69"
          gradientTransform="matrix(1, 0, 0, -1, 0, -348)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="gray" stop-opacity="0.25" />
          <stop offset="0.54" stop-color="gray" stop-opacity="0.12" />
          <stop offset="1" stop-color="gray" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient id="b" x1="91.14" y1="-412.23" x2="91.14" y2="-385.1" />
        <linearGradient
          id="c"
          x1="56.65"
          y1="-449.76"
          x2="56.65"
          y2="-417.43"
        />
        <linearGradient
          id="d"
          x1="171.29"
          y1="-449.76"
          x2="171.29"
          y2="-417.06"
        />
        <linearGradient id="e" x1="114.61" y1="-419.54" x2="114.61" y2="-377" />
        <linearGradient id="f" x1="113.78" y1="-512.76" x2="113.78" y2="-410" />
      </defs>
      <title>markers</title>
      <ellipse
        cx="114"
        cy="163"
        rx="114"
        ry="24.3"
        fill="#3f3d56"
        opacity="0.4"
      />
      <ellipse cx="114" cy="163" rx="89" ry="19" fill="#3f3d56" />
      <g opacity="0.7">
        <polygon
          points="192.6 165.9 36.5 165.9 37.6 77.6 82.2 68.7 145.3 68.7 191.5 75 192.6 165.9"
          fill="url(#a)"
        />
      </g>
      <polygon
        points="190.5 164.8 38.6 164.8 39.7 78.7 82.4 69.8 146.1 69.8 189.4 76.1 190.5 164.8"
        fill="#eee"
      />
      <g opacity="0.7">
        <rect x="85.4" y="37.1" width="11.4" height="27.13" fill="url(#b)" />
      </g>
      <g opacity="0.7">
        <polygon
          points="85.4 98.8 85.4 69.4 36 69.4 27.5 98.8 27.5 101.8 85.8 101.8 85.8 98.8 85.4 98.8"
          fill="url(#c)"
        />
      </g>
      <polygon
        points="85.4 98.8 28.2 98.8 36.5 69.8 85.4 69.8 85.4 98.8"
        fill="#00bfa6"
      />
      <polygon
        points="85.4 98.8 28.2 98.8 36.5 69.8 85.4 69.8 85.4 98.8"
        opacity="0.1"
      />
      <rect x="28.2" y="98.8" width="57.6" height="2.97" fill="#00bfa6" />
      <g opacity="0.7">
        <polygon
          points="192 69.1 142.4 69.1 142.4 98.7 142.1 98.7 142.1 101.8 200.5 101.8 200.5 98.7 192 69.1"
          fill="url(#d)"
        />
      </g>
      <polygon
        points="142.4 98.8 199.7 98.8 191.4 69.8 142.4 69.8 142.4 98.8"
        fill="#00bfa6"
      />
      <polygon
        points="142.4 98.8 199.7 98.8 191.4 69.8 142.4 69.8 142.4 98.8"
        opacity="0.1"
      />
      <rect x="142.1" y="98.8" width="57.6" height="2.97" fill="#00bfa6" />
      <rect
        x="43.6"
        y="113.5"
        width="31.1"
        height="23.41"
        fill="#00bfa6"
        opacity="0.5"
      />
      <rect x="41.7" y="135.2" width="34.8" height="4.09" opacity="0.1" />
      <rect x="41.7" y="134.8" width="34.8" height="4.09" fill="#535461" />
      <g opacity="0.1">
        <rect x="43.6" y="113.5" width="31.1" height="9.29" />
      </g>
      <rect
        x="153.5"
        y="113.5"
        width="31.1"
        height="23.41"
        fill="#00bfa6"
        opacity="0.5"
      />
      <rect x="151.7" y="135.2" width="34.8" height="4.09" opacity="0.1" />
      <rect x="151.7" y="134.8" width="34.8" height="4.09" fill="#535461" />
      <g opacity="0.1">
        <rect x="153.5" y="113.5" width="31.1" height="9.29" />
      </g>
      <g opacity="0.7">
        <polygon
          points="152 71.5 114 36.1 77.3 71.5 74.4 67.2 114 29 154.8 67.1 152 71.5"
          fill="url(#e)"
        />
      </g>
      <rect x="39.4" y="101.8" width="41" height="0.56" opacity="0.1" />
      <rect x="148.3" y="101.8" width="41.4" height="0.56" opacity="0.1" />
      <rect x="85.8" y="37.5" width="10.8" height="26.76" fill="#535461" />
      <g opacity="0.7">
        <polygon
          points="148.3 164.8 79.3 164.8 79.3 62.9 114.1 62 148.3 62.9 148.3 164.8"
          fill="url(#f)"
        />
      </g>
      <polygon
        points="147.5 164.8 80.4 164.8 80.4 62.9 113.9 34.1 147.5 62.9 147.5 164.8"
        fill="#fff"
      />
      <rect x="105.5" y="130.6" width="16.9" height="34.19" fill="#535461" />
      <rect x="96.5" y="99.9" width="34.8" height="4.09" opacity="0.1" />
      <rect
        x="98.4"
        y="78.2"
        width="31.1"
        height="23.41"
        fill="#00bfa6"
        opacity="0.5"
      />
      <rect x="96.5" y="99.5" width="34.8" height="4.09" fill="#535461" />
      <g opacity="0.1">
        <rect x="98.4" y="78.2" width="31.1" height="9.29" />
      </g>
      <polygon
        points="152 71.9 114 36.5 77.3 71.9 74.4 67.5 114 29.4 154.8 67.5 152 71.9"
        fill="#00bfa6"
      />
      <ellipse cx="119.9" cy="147.7" rx="1.2" ry="1.5" fill="#e0e0e0" />
      <circle cx="115.5" cy="39.5" r="39.5" fill="#fff" opacity="0.4" />
      <path d="M111,36.7c-2.8,10.8-8.1,20-15.1,25.7a34.6,34.6,0,0,0-5.2-4.9c6.8-4.8,11.3-12.8,13.6-22.2Zm-12.4-.3H92.2v-14h20.7a45.4,45.4,0,0,0-3.6-7.9l6.4-2a44.5,44.5,0,0,1,4.2,8.5l-4,1.4h22.3v14h-6.7V28.6H98.6ZM126,35.3c2.7,8.4,8.1,17.2,14,22a26.8,26.8,0,0,0-4.9,5.2c-6.4-5.8-11.7-15.3-15.1-25.4Z" />
    </svg>
  ),
};
const offsets: Record<MarkerType, [number, number]> = {
  default: [0, 10],
  rsl: [0, 28],
  sha: [0, 10],
  rsk: [0, 10],
  csk: [0, 10],
  xng: [0, 10],
  xue: [0, 10],
};

export default function ({ type, lnglat, ...props }: IMarkerProps) {
  return (
    <Marker
      {...props}
      offset={offsets[type]}
      position={[lnglat.lng, lnglat.lat]}
    >
      {svgs[type]}
      {props.children}
    </Marker>
  );
}
