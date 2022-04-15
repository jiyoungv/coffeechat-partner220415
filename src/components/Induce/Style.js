import styled from 'styled-components';
import { mediaQuery } from '../../styles/Variable';

const { mediaTablet, mediaMobile } = mediaQuery;

export const Induces = styled.section`
    padding: 63px 0;
    background: linear-gradient(260.47deg, #F2D6EB 9.8%, #2B50F1 135.18%);
    .induce-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .induce-txt {
        color: #fff;

        h2 {
            font-size: 24px;
        }
    }

    ${mediaTablet} {
        padding: 70px 0;

        .induce-content {
            display: block;
        }

        .induce-txt {
            margin-bottom: 24px;
            text-align: center;

            h2 {
                font-size: 20px;

                strong {
                    display: inline-block;
                    margin-bottom: 10px;
                }
            }
        }

        .induce-btn {
            text-align: center;
        }
    }

    ${mediaMobile} {
        padding: 56px 0;

        .induce-content {
            display: block;
        }

        .induce-txt {
            margin-bottom: 24px;
            text-align: center;

            h2 {
                margin-bottom: 24px;
                font-size: 18px;
            }

            h3 {
                font-size: 13px;
            }
        }

        .induce-btn {
            text-align: center;
        }        
    }
`;