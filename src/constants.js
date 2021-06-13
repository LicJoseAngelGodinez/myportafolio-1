
import styled from 'styled-components';
import MapImg from './assets/images/map.webp'

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

/*
 * Project Item
 */
export const ProjectItemStyles = styled.div`
    .projectItem__img{
        width: 100%;
        height: 400px;
        overflow: hidden;
        border-radius: 12px;
        display: inline-block;
        border: 3px solid var(--gray-2);
        img{
            height: 100%;
        }
    }
    .projectItem__info{
        margin-top: 1rem;
        background-color: var(--deep-dark);
        padding: 1rem;
        border-radius: 12px;
    }
    .projectItem__title{
        font-size: 2.2rem;
    }
    .projectItem__desc{
        font-size: 1.6rem;
        font-family: "RobotoMono Regular";
        margin-top: 1rem;
    }    
    @media only screen and (max-width: 768px){
        .projectItem__img{
            height: 350px;
        }
    }
`;

/*
 * Projects
 */
export const ProjectSectionStyle = styled.div`
    padding: 10rem 0;
    .projects__allItems{
        display: flex;
        gap: 3rem;
        margin-top: 5rem;
    }
    .swiper-container{
        padding-top: 8rem;
        max-width: 100%;
    }
    .swiper-button-prev,
    .swiper-button-next{
        position: absolute;
        height: 50px;
        width: 50px;
        background-color: var(--deep-dark);
        z-index: 10;
        right: 60px;
        left: auto;
        top: 0;
        transform: translateY(50%);
        color: var(--gray-1);
        border-radius: 8px;

    }
    .swiper-button-next{
        right: 0px;
    }
    .swiper-button-prev::after,
    .swiper-button-next::after{
        font-size: 2rem;
    }
    @media only screen and (max-width: 768px){
        .projects__allItems{
            flex-direction: column;
            max-width: 400px;
            margin: 0 auto;
            margin-top: 7rem;
            gap: 5rem;
            .projectITem__img{
                width: 100%;
            }
        }
    }
`;

/*
 * Testimonial
 */
export const TestimonialSectionStyle = styled.div`
    padding: 10rem 0;
    text-align: center;
    .testimonial__wrapper{
        position: relative;
        max-width: 700px;
        margin: 0 auto;
    }
    .testimonial__info{
        width: 100%;
        height: fit-content;
        padding: 3rem;
        background-color: var(--deep-dark);
        border-radius: 12px;
        margin-top: 5rem;
    }
    .testimonial__desc{
        .para{
            text-align: center;
        }
    }
    .testimonial__name{
        margin-top: 4rem;
        font-family: "Montserrat Bold";
        font-size: 2.2rem;
    }
    .testimonial__title{
        font-size: 1.6rem;
        margin-top: 0.3rem;
    }
    .arrows{
        margin-top: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        svg{
            width: 30px;
            pointer-events: none;
        }
        .next,
        .prev{
            margin: 0 0.5rem;
            width: fit-content;
            background-color: var(--dep-dark);
            padding: 0.5rem 2rem;
            border-radius: 8px;
            cursor: pointer;
        }
    }
    .fade-enter{
        opacity: 0;
        transform: scale(.96);
    }
    .fade-enter-active{
        opacity: 1;
        transform: scale(1);
        transition: 250ms ease-in;
        transition-property: opacity, transform;
    }
    .fade-exit{
        opacity: 1;
        transform: scale(1);
    }
    .fade-exit-active{
        opacity: 0;
        transform: scale(.96);
        transition: 250ms ease-in;
        transition-property: opacity, transform;
    }
`;

/*
 * Contact Banner
 */
export const ContactBannerStyles = styled.div`
    padding: 10rem 0;
    .contactBanner__wrapper{
        background-color: var(--deep-dark);
        border-radius: 12px;
        padding: 5rem 0rem;
        text-align: center;
    }
    .contactBanner__heading{
        font-size: 4rem;
        margin-bottom: 2rem;
    }
    @media only screen and (max-width: 768px){
        .contactBanner__heading{
            font-size: 2.8rem;
        }
    }
`;

/*
 * Footer
 */
export const FooterStyles = styled.div`
    padding-top: 10rem;
    background-color: var(--deep-dark);
    .container{
        display: flex;
        gap: 3rem;
    }
    .footer__col1{
        flex: 2;
    }
    .footer__col2,
    .footer__col3,
    .footer__col4{
        flex: 1;
    }
    .footer__col1__title{
        font-size: 3.5rem;
        margin-bottom: 1rem;
    }
    .copyright{
        background-color: var(--dark-bg);
        text-align: left;
        padding: 1rem 0;
        margin-top: 5rem;
        .para{
            margin-left: 0;
        }
    }
    @media only screen and (max-width: 768px){
        .container{
            flex-direction: column;
            gap: 0rem;
            & > div {
                margin-top: 5rem;
            }
        }
        .footer__col1 .para{
            max-width: 100%;
        }
        .copyright{
            .container{
                div{
                    margin-top: 0;
                }
            }
        }
    }
`;

/*
 * Footer Column
 */
export const ColStyles = styled.div`
    .heading{
        font-size: 2.4rem;
        margin-bottom: 2rem;
    }
    li{
        margin-bottom: 1rem;
    }
    a{
        font-size: 1.8rem;
    }
`;

/*
 * About Page
 */
export const AboutPageStyles = styled.div`
    padding: 20rem 0 10rem 0;
    .top__section{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }
    .left{
        flex: 3;
    }
    .right{
        flex: 2;
    }
    .about__subheading{
        font-size: 2.2rem;
        margin-bottom: 2rem;
        span{
            background-color: var(--deep-dark);
            padding: 0.5rem;
            border-radius: 8px;
        }
    }
    .about__heading{
        font-size: 3.6rem;
        margin-bottom: 3rem;
    }
    .about__info{
        margin-bottom: 4rem;
        .para{
            max-width: 100%;
        }
    }
    .right{
        img{
            border: 2px solid var(--gray-1);
        }
    }    
    .about__info__items{
        margin-top: 15rem;
    }
    .about__info__item{
        margin-bottom: 10rem;
    }
    .about__info__heading{
        font-size: 3.6rem;
        text-transform: uppercase;
    }
    @media only screen and (max-width: 768px){
        padding: 10rem 0;
        .top__section{
            flex-direction: column;
            gap: 5rem;
        }
        .about__subheading{
            font-size: 1.8rem;
        }
        .about__heading{
            font-size: 2.8rem;
        }
        .about__info__heading{
            font-size: 3rem;
        }
    }
`;

/*
 * About Item
 */
export const AboutItemStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 3rem;
    position: relative;
    .title{
        font-size: 2.4rem;
    }
    .items{
        display: flex;
        gap: 1.5rem;
        position: absolute;
        left: 18rem;
    }
    .item{
        background-color: var(--deep-dark);
        padding: 1rem;
        border-radius: 2px;
    }
    @media only screen and (max-width: 768px){
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        .items{
            position: initial;
            gap: 1rem;
        }
        .title{
            font-size: 2rem;
        }
    }
`;

/*
 * Projects
 */
export const ProjectsStyles = styled.div`
    padding: 10rem 0;
    .projects__allItems{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 5rem;
        margin-top: 5rem;
    }
    .projects__searchBar{
        position: relative;
        width: 300px;
        margin-top: 5rem;
    }
    .projects__searchBar input{
        width: 100%;
        font-size: 2rem;
        padding: .8rem;
        color: var(--deep-dark);
        border-radius: 6px;
        outline: none;
        border: none;
    }
    .projects__searchBar .searchIcon{
        position: absolute;
        width: 2rem;
        right: 1rem;
    }
    .projects__searchBar .searchIcon path{
        color: var(--deep-dark);
    }
    @media only screen and (max-width: 768px){
        .projects__searchBar,
        .projects__searchBar form,
        .projects__searchBar input{
            width: 100%;
        }
    }
`;

/*
 * Contact Section
 */
export const ContactSectionStyle = styled.div`
    padding: 10rem 0;
    .contactSection__wrapper{
        display: flex;
        gap: 5rem;
        margin-top: 7rem;
        justify-content: space-between;
        position: relative;
    }
    .contactSection__wrapper::after{
        position: absolute;
        content: "";
        width: 2px;
        height: 50%;
        background-color: var(--gray-1);
        left: 50%;
        top: 30%;
        transform: translate(-50%, -50%);
    }
    .left{
        width: 100%;
        max-width: 500px;
    }
    .right{
        max-width: 500px;
        width: 100%;
    }
    @media only screen and (max-width: 1060px){
        .contactSection__wrapper::after{
            display: none;
        }
    }
    @media only screen and (max-width: 768px){
        .contactSection__wrapper{
            flex-direction: column;
        }
        .left,
        .right{
            max-width: 100%;
        }
        .right{
            padding: 4rem 2rem 2rem 2rem;
        };
    }
`;

/*
 * Contact Info Item
 */
export const ContactItemStyles = styled.div`
    padding: 2rem;
    background-color: var(--deep-dark);
    display: flex;
    align-items: center;
    gap: 2rem;
    border-radius: 8px;
    margin-bottom: 2rem;
    .icon{
        color: var(--white);
        background-color: var(--gray-2);
        padding: 1.3rem;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }
    svg{
        width: 3.5rem;
    }
`;

export const FormStyles = styled.form`
    width: 100%;
    .form-group{
        width: 100%;
        margin-top: 2rem;
    }
    label {
        font-size: 1.8rem;
    }
    input,
    textarea{
        width: 100%;
        font-size: 2rem;
        padding: 1.2rem;
        color: var(--gray-1);
        background-color: var(--deep-dark);
        outline: none;
        border: none;
        border-radius: 8px;
        margin-top: 1rem;
    }
    textarea{
        min-height: 250px;
        resize: vertical;
    }
    button[type="submit"]{
        background-color: var(--gray-1);
        color: var(--block);
        font-size: 2rem;
        display: inline-block;        
        outline: none;
        border: none;
        padding: 1rem 4rem;
        border-radius: 8px;
        cursor: pointer;
    }
`;

/*
 * Map
 */
export const MapStyles = styled.div`
    background: url(${MapImg}) no-repeat center / cover;
    min-height: 400px;
    .container{
        position: absolute;
        min-height: 400px;
    }
    .map__card{
        position: absolute;
        right: 10%;
        bottom: 10%;
        padding: 2rem;
        background: var(--deep-dark);
        width: 100%;
        max-width: 300px;
        border-radius: 12px;
    }
    .map__card__heading{
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    .map__card__link{
        display: inline-block;
        font-size: 1.6rem;
        margin-top: 3rem;
        text-decoration: underline;
    }
    @media only screen and (max-width: 768px){
        background-position: 80% center;
    }
    @media only screen and (max-width: 400px){
        .map__card{
            max-width: none;
            right: auto;
        }
    }
`;
