import styled from 'styled-components';
import { mediaQuery } from '../../styles/Variable';

const { mediaTablet, mediaMobile } = mediaQuery;

export const HowtoBalls = styled.article`
    position: absolute;
    top: -78px;
    right: 108px;
    transition-property: transform;
    transition-duration: 0.6s;

    .howto-ball {
        position: relative;
        z-index: 1;
        transform-style: preserve-3d;
        transform: translate3d(0, 0, 0);
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background: linear-gradient(260.47deg, #F2D6EB 9.8%, #2B50F1 135.18%);
        transition-property: transform;
        transition-duration: 0.2s;
        backface-visibility: hidden;
        will-change: transform;
    }

    .howto-range {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        width: calc(200px + 150px);
        height: calc(200px + 150px);
        border-radius: 50%;
    }

    ${mediaTablet} {
    }

    ${mediaMobile} { 
    }
`;