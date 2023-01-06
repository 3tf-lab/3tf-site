import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
export default function InvertedTriangleIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 800 800">
                <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="nnneon-grad">
                        <stop stop-color="hsl(157, 100%, 54%)" stop-opacity="1" offset="0%"></stop>
                        <stop stop-color="hsl(331, 87%, 61%)" stop-opacity="1" offset="100%"></stop>
                    </linearGradient>
                    <filter id="nnneon-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
	                    <feGaussianBlur stdDeviation="17 8" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur>
                    </filter>
                    <filter id="nnneon-filter2" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
	                    <feGaussianBlur stdDeviation="10 17" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur>
                    </filter>
                </defs>
                <g stroke-width="16" stroke="url(#nnneon-grad)" fill="none" transform="rotate(180, 400, 400)">
                    <polygon points="400,50 50,750 750,750" filter="url(#nnneon-filter)"></polygon>
                    <polygon points="412,50 62,750 762,750" filter="url(#nnneon-filter2)" opacity="0.25"></polygon>
                    <polygon points="388,50 38,750 738,750" filter="url(#nnneon-filter2)" opacity="0.25"></polygon>
                    <polygon points="400,50 50,750 750,750"></polygon>
                </g>
            </svg>
        </SvgIcon>
    );
}