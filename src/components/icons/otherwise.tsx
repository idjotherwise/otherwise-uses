import React from 'react'

export default function OtherwiseIcon() {
  return (
    <svg
      className="w-[1.5rem] h-[1.5rem] inline-block transition-transform group-hover:rotate-[-20deg]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 25"
    >
      <g
        className="overflow-hidden"
        style={{
          overflow: 'hidden',
          textAnchor: 'middle',
          fontSize: 8,
          fontFamily: 'Helvetica, Arial'
        }}
      >
        <text className="fill-red-600" y="50%" x="50%">
          w
        </text>
        <circle
          className="stroke-red-500 stroke-1 fill-white group-hover:fill-gray-400"
          cx="50%"
          cy="40%"
          r="30%"
          fill-opacity="0.3"
        />
      </g>
    </svg>
  )
}
