import styled from 'styled-components';
import { mediaQuery, color } from '../../styles/Variable';

const { mediaTablet, mediaMobile } = mediaQuery;
const { bg, slate700, midnight100, midnight500, midnight700 } = color;

export const Faqs = styled.section`
    padding: 80px 0;
    background: ${bg};

    .faq-tit {
        margin-bottom: 40px;

        h2 {
            font-size: 24px;
            font-weight: 700;
        }
    }

    .faq-list {
        li {
            border-bottom: 1px solid ${midnight100};

            &.open {
                .faq-list-q {
                    button {
                        &::after {
                            transform: translateY(-50%) rotate(0);
                        }                        
                    }
                }

                .faq-list-a {
                    overflow: visible;
                    opacity: 1;
                    height: auto;
                    padding: 16px 0 32px;
                    border-top: 1px solid ${midnight100};
                }
            }
        }
    }

    .faq-list-q {
        button {
            display: block;
            position: relative;
            width: 100%;
            padding: 16px 0;
            padding-right: 56px;
            color: ${slate700};
            font-size: 16px;
            font-weight: 700;

            &::before, &::after {
                content: '';
                display: block;
                position: absolute;
                top: 50%;
                right: 4px;
                transform: translateY(-50%);
                width: 16px;
                height: 2px;
                border-radius: 2px;
                background: ${midnight700};
            }

            &::after {
                transform: translateY(-50%) rotate(-90deg);
                transition: transform 0.3s;
            }
        }
    }

    .faq-list-a {
        overflow: hidden;
        opacity: 0;
        height: 0;
        transition: height 0.3s, padding 0.3s;

        p {
            font-size: 14px;
            color: ${midnight500};
        }
    }

    ${mediaTablet} {
    }

    ${mediaMobile} {
        padding: 56px 0;

        .faq-tit {
            margin-bottom: 24px;

            h2 {
                font-size: 16px;
            }
        }

        .faq-list-q {
            button {
                font-size: 14px;
            }
        }
    }
`;