import styled from 'styled-components';
import { mediaQuery, color } from '../../styles/Variable';
import hero_bg from '../../assets/images/hero_bg.png';
import hero_bg_tablet from '../../assets/images/hero_bg_tablet.png';
import hero_bg_mobile from '../../assets/images/hero_bg_mobile.png';

const { mediaDesktop, mediaTablet, mediaMobile } = mediaQuery;
const { brand500 } = color;

export const Heros = styled.section`
    padding: 72px 0 78px;
    background: url(${hero_bg}) center/cover no-repeat;

    .hero-txt {
        position: relative;
        margin-top: 118px;

        h1 {
            color: #fff;
            font-size: 40px;
            font-weight: 700;

            &.type2 {
                text-align: right;
            }
        }

        h3 {
            margin-top: 128px;
            color: #fff;
            font-size: 24px;
            font-weight: 700;
        }
    }

    .hero-btn {
        display: inline-block;
        position: absolute;
        right: 0;
        bottom: 0;
        padding: 22.5px 75px;
        border: 1px solid white;
        border-radius: 4px;
        color: white;
        font-size: 18px;
        font-weight: 700;
    }

    ${mediaDesktop} {
        .hero-btn {
            transition: all 0.3s;

            &:hover {
                border-color: ${brand500};
                background: ${brand500};
            }
        }
    }    

    ${mediaTablet} {
        padding-bottom: 220px;
        background-image: url(${hero_bg_tablet});

        .hero-txt {
            margin-top: 100px;

            h1 {
                margin-bottom: 40px;

                &.type2 {
                    text-align: left;
                }
            }

            h3 {
                margin-top: 40px;
            }
        }

        .hero-btn {
            position: static;
            margin-top: 66px;
        }
    }

    ${mediaMobile} {
        padding: 48px 0 40px;
        background: url(${hero_bg_mobile}) top 20% right/cover no-repeat;
        
        .hero-txt {
            margin-top: 32px;

            h1 {
                margin-bottom: 40px;
                font-size: 20px;

                &.type2 {
                    text-align: left;
                }
            }

            h3 {
                margin-top: 40px;
                font-size: 13px;
            }
        }

        .hero-btn {
            position: static;
            margin-top: 40px;
            padding: 10.5px 13.5px;
            font-size: 11px;
        }        
    }
`;