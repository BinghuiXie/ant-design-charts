import React from 'react';
import { editIconWidth, editIconHeight, iconRectHeight, iconRectWidth, editIconColor } from './constants';

//双向箭头
const DoubleArrow = (
  <svg style={{ width: editIconWidth, height: editIconHeight }} xmlns="http://www.w3.org/2000/svg">
    <g>
      <path
        style={{ fill: editIconColor }}
        d="m209.86,105.67.5,-3,1.5l8,0l0,-1.5l5.5,3-5.5,3,-1.5l-8,0l0,1.5l-5.5,-3z"
      />
      <path
        style={{ fill: editIconColor }}
        transform={'rotate(90 27 11)'}
        d="m23.6,14.48515l3.62319,-6.37681l3.6,6.4-7,0z"
      />
      <path
        style={{ fill: editIconColor }}
        transform={'rotate(-90 4.5 11)'}
        d="m0.9,14.29191l3.62319,-6.37681l3.6,6.4-7,0z"
      />
      <rect style={{ width: iconRectWidth, height: iconRectHeight, fill: editIconColor }} y={10} x={7.6} />
    </g>
  </svg>
);

export default DoubleArrow;