"use client";

import { SVGProps } from "react";

export function CNFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
      width="1em"
      height="1em"
      {...props}
    >
      <defs>
        <path id="a" fill="#ffde00" d="M-.6.8L0-1 .6.8-1-.3h2z" />
      </defs>
      <path fill="#de2910" d="M0 0h640v480H0z" />
      <use
        width="30"
        height="20"
        transform="matrix(71.9991 0 0 72 120 120)"
        xlinkHref="#a"
      />
      <use
        width="30"
        height="20"
        transform="matrix(-12.33562 -20.5871 20.58684 -12.33577 240.3 48)"
        xlinkHref="#a"
      />
      <use
        width="30"
        height="20"
        transform="matrix(-3.38573 -23.75998 23.75968 -3.38578 288 95.8)"
        xlinkHref="#a"
      />
      <use
        width="30"
        height="20"
        transform="matrix(6.5991 -23.0749 23.0746 6.59919 288 168)"
        xlinkHref="#a"
      />
      <use
        width="30"
        height="20"
        transform="matrix(14.9991 -18.73557 18.73533 14.99929 240 216)"
        xlinkHref="#a"
      />
    </svg>
  );
}

export function USFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
      width="1em"
      height="1em"
      {...props}
    >
      <path fill="#bd3d44" d="M0 0h640v480H0" />
      <path
        stroke="#fff"
        strokeWidth="37"
        d="M0 55.3h640M0 129h640M0 203.5h640M0 277.2h640M0 351h640M0 424.8h640"
      />
      <path fill="#192f5d" d="M0 0h364.8v258.5H0" />
      <marker id="us-a" markerHeight="30" markerWidth="30">
        <path fill="#fff" d="m14 0 9 27L0 10h28L5 27z" />
      </marker>
      <path
        fill="none"
        markerMid="url(#us-a)"
        d="m0 0 16 11h61 61 61 61 60L47 37h61 61 60 61L16 63h61 61 61 61 60L47 89h61 61 60 61L16 115h61 61 61 61 60L47 141h61 61 60 61L16 166h61 61 61 61 60L47 192h61 61 60 61L16 218h61 61 61 61 60L0 0"
      />
    </svg>
  );
}

export function GBFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
      width="1em"
      height="1em"
      {...props}
    >
      <path fill="#012169" d="M0 0h640v480H0z" />
      <path
        fill="#FFF"
        d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"
      />
      <path
        fill="#C8102E"
        d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"
      />
      <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z" />
      <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z" />
    </svg>
  );
}

export function WorldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
