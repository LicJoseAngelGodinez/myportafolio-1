
import styled from 'styled-components';

/*
 * NavMenu
 */
export const NavMenuStyles = styled.div`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem 0;
    background: var(--dark-bg);
    ul{
        max-width: 1200px;
        margin: 0 auto;
        width: 90%;
        text-align: center;
        li{
            display: inline-block;
            border-radius: 8px;
            transition: .3 ease background-color;
            &:hover{
                background-color: var(--deep-dark);
            };
        }
        a{
            display: inline-block;
            font-family: 'RobotoMono Regular';
            padding: 1rem 2rem;
            font-size: 2rem;
            color: var(--gray-1);
            outline: none;
        }
        .active{
            color: var(--white);
        }
    }
    .mobile-menu-icon{
        position: absolute;
        right: 1rem;
        top: 1rem;
        width: 4rem;
        cursor: pointer;
        display: none;
        outline: none;
        *{
            pointer-events: none;
        }
    }
    .closeNavIcon{
        display: none;
    }
    @media only screen and (max-width: 768px){
        padding: 0%;
        .hide-item{
            transform: translateY(calc(-100% - var(--top)));
        }
        .mobile-menu-icon{        
            display: block;
        }
        .navItems{
            --top: 1rem;
            transition: .3s ease transform;
            background-color: var(--deep-dark);
            padding: 2rem;
            width: 90%;
            max-width: 300px;
            border-radius: 12px;
            position: absolute;
            right: 1rem;
            top: var(--top);
            .closeNavIcon{
                display: block;
                width: 3rem;
                margin: 0 0 0 auto;
                cursor: pointer;
                *{
                    pointer-events: none;
                }
            }
            li{
                display: block;
                margin-bottom: 1rem;
            }
        }
        
    }
`;

/*
 * Button
 */
export const ButtonStyle = styled.div`
    margin-top: 2rem;
    .button{
        font-size: 2.2rem;
        background-color: ${(props) => 
            props.outline ? 'transparent' : 'var(--gray-1)'
        };
        padding: 0.7rem 2rem;
        border-radius: 8px;
        display: inline-block;
        border: 2px solid var(--gray-1);
        color: ${(props) =>
            props.outline ? 'var(--gray-1)' : 'black'
        };
    }
    @media only screen and (max-width: 768px){
        .button{
            font-size: 1.8rem;
        }
    }
`;

/*
 * PText
 */
export const PStyle = styled.div`
    max-width: 500px;
    margin: 0 auto;
    font-size: 1.8rem;
    line-height: 1.3em;
    @media only screen and (max-width: 768px){
        font-size: 1.4rem;
    }
`;

/*
 * Hero
 */
export const HeroStyles = styled.div`
    .hero{
        height: 100vh;
        min-height: 1000px;
        width: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    .hero__heading{
        font-size: 2rem;
        margin-bottom: -4rem;
        position: relative;
        span{
            display: inline-block;
            width: 100%;
        }
        .hero__name{
            font-size: 7rem;
            font-family: "Montserrat SemiBold";
            color: var(--white);
        }
    }
    .hero__img{
        max-width: 900px;
        width: 100%;
        height: 600px;
        margin: 0 auto;
        border: 2px solid var(--gray-1)
    }
    .hero__info{
        margin-top: -18rem;
    }
    .hero__social,
    .hero__scrollDown{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        position: absolute;
        bottom: 20px;
        width: 50px;

    }
    .hero__social{
        left: 50px;   
    }
    .hero__scrollDown{
        right: 50px;
    }
    .hero__social__indicator,
    .hero__scrollDown{
        width: 50px;
        p{
            font-size: 1.6rem;
            transform: translateY(-70px) rotate(90deg);
            letter-spacing: normal.7rem;
            text-transform: uppercase;
        }
        img{
            max-height: 45px;
            width: 16px;
            margin: 0 auto;
            object-fit: contain;
        }
    }
    .hero__scrollDown{
        .img{
            max-height: 70px;
        }
    }
    .hero__social__text{
        ul{
            li{
                margin-bottom: 1rem;
            }
            a{
                display: inline-block;
                font-size: 1.6rem;
                transform: rotate(-90deg);
                letter-spacing: 5px;
                margin-bottom: 2rem;
            }
        }
    }
    @media only screen and (max-width: 768px){
        .hero{
            min-height: 750px;
        }
        .hero__heading{
            font-size: 1.4rem;
            margin-bottom: -3rem;
            .hero__name{
                font-size: 4.5rem;
            }
        }
        .hero__img{
            height: 300px;
        }
        .hero__info{
            margin-top: 3rem;
        }
        .hero__social{
            left: 0px;
            bottom: -15%;
            width: 20px;
            .hero__social__indicator{
                width: 20px;
                p{
                    font-size: 1.2rem;
                }
                img{
                    max-height: 22px;
                }
            }
            .hero__social__text{
                ul{
                    li{
                        a{
                            font-size: 1.2rem;
                            margin-bottom: 1rem;
                        }
                    }
                }
            }
        }
        .hero__scrollDown{
            right: 0px;
            width: 20px;
            gap: 1rem;
            p{
                font-size: 1.3rem;
            }
        }
    }
`;

/*
 * Section
 */
export const SectionTitleStyle = styled.div`
    text-align: center;
    p{
        font-family: "RobotoMono Regular";
        font-size: 2rem;
    }
    h2{
        font-family: "Montserrat Bold";
        font-size: 6rem;
        margin-top: 0%.5rem;
        text-transform: uppercase;
    }
    @media only screen and (max-width: 768px){
        p{
            font-size: 1.2rem;
        }
        h2{
            font-size: 3.6rem;
        }
    }
`;

/*
 * About section
 */
export const AboutSectionStyle = styled.div`
    padding: 10rem 0;
    .container{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-align: left;
    }
    .aboutSection__left,
    .aboutSection__right{
        flex: 1;
    }
    .section__title{
        text-align: left;
    }
    .para{
        margin-top: 2rem;
        margin-left: 0;
    }
    .aboutSection__buttons{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 2rem;
        margin-top: 2rem;
    }
    @media only screen and (max-width: 950px){
        .aboutSection__left{
            flex: 4;
        }
        .aboutSection__right{
            flex: 3;
        }
    }
    @media only screen and (max-width: 768px){
        .container{
            flex-direction: column;
            text-align: center;
        }
        .aboutSection__left,
        .aboutSection__right{
            width: 100%;
        }
        .aboutSection__right{
            margin-top: 3rem;
        }
        .section__title{
            text-align: center;
        }
        .para{
            margin: 0 auto;
            margin-top: 2rem;
        }
        .aboutSection__buttons{
            flex-direction: column;
            gap: 0;
            .button__wrapper,
            a{
                width: 100%;
                text-align: center;
            }
        }
    }
`;

/*
 * Service Items
 */
export const ServiceItemStyles = styled.div`
    padding: 10rem 0;
    .services__allItems{
        display: flex;
        gap: 10rem;
        justify-content: space-between;
        margin-top: 5rem;
    }
    @media only screen and (max-width: 768px){
        .services__allItems{
            flex-direction: column;
            max-width: 350px;
            margin: 0 auto;
            margin-top: 5rem;
            gap: 5rem;
        }
    }
`;

/*
 * Items
 */
export const ItemStyles = styled.div`
    text-align: center;
    .servicesItem__icon{
        svg{
            width: 3rem;
        }
    }
    .servicesItem__title{
        font-size: 2.4rem;
        font-family: "Montserrat Semibold";
    }
    .para{
        margin-top: 2rem;
    }
`;
