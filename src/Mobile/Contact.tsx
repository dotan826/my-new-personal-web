import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Switch, Route, useHistory } from 'react-router-dom';

const AboutContainer = styled.div`
    background-color: #565C58;
`;

interface ContentOpenProps {
    show: boolean;
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Content Frame + Animation

const ContentFrame = styled.div<ContentOpenProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;

    width: 320px;
    min-height: ${props => props.show ? "700px" : "50px"};
    transition-duration: 2s;
`;

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Content + Animation

const ContentShowAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const ContentHideAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const ContentShowHide = styled.div<ContentOpenProps>`
    animation: ${props => props.show ? ContentShowAnimation : ContentHideAnimation} 2s;

    transition-duration: 2s;
`;

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const Contact = () => {

    const history = useHistory();

    return (
        <AboutContainer>
            <Switch>

                <Route path="/contact">
                    <ContentFrame show={true}>
                        <ContentShowHide show={true}>

                            <div style={{ height: "60%", width: "90%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column-reverse", margin: "10px" }}>

                                <a href="tel:0526368099" rel="noopener noreferrer" style={{ color: "black", textDecorationLine: "none" }}>
                                    <div style={{ backgroundColor: "#D9BB90", border: "0px", width: "160px", height: "70px", margin: "20px", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
                                        <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px" }}>
                                            התקשר
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: "5px" }}>
                                                <path opacity="0.2" d="M11.5595 15.6019C12.5968 17.7226 14.3158 19.4338 16.4412 20.4614C16.5967 20.5351 16.7687 20.567 16.9403 20.554C17.1119 20.541 17.2771 20.4836 17.4198 20.3874L20.5492 18.3006C20.6877 18.2083 20.8469 18.152 21.0126 18.1368C21.1782 18.1215 21.3451 18.1479 21.498 18.2134L27.3526 20.7225C27.5515 20.807 27.7175 20.9538 27.8257 21.1409C27.9339 21.328 27.9783 21.5451 27.9524 21.7596C27.7673 23.2076 27.0608 24.5385 25.9652 25.5031C24.8695 26.4678 23.4598 26.9999 22 27C17.4913 27 13.1673 25.2089 9.97919 22.0208C6.79107 18.8327 5 14.5087 5 10C5.00008 8.54022 5.53224 7.13052 6.49685 6.03485C7.46146 4.93918 8.79237 4.23267 10.2404 4.04763C10.4549 4.02167 10.672 4.06612 10.8591 4.1743C11.0461 4.28248 11.193 4.44852 11.2775 4.6474L13.7888 10.5071C13.8537 10.6587 13.8802 10.824 13.8658 10.9883C13.8514 11.1525 13.7967 11.3107 13.7064 11.4487L11.6268 14.6261C11.5322 14.7691 11.4762 14.9341 11.4644 15.1051C11.4526 15.2762 11.4854 15.4473 11.5595 15.6019Z" fill="black" />
                                                <path d="M11.5595 15.6019C12.5968 17.7226 14.3158 19.4338 16.4412 20.4614C16.5967 20.5351 16.7687 20.567 16.9403 20.554C17.1119 20.541 17.2771 20.4836 17.4198 20.3874L20.5492 18.3006C20.6877 18.2083 20.8469 18.152 21.0126 18.1368C21.1782 18.1215 21.3451 18.1479 21.498 18.2134L27.3526 20.7225C27.5515 20.807 27.7175 20.9538 27.8257 21.1409C27.9339 21.328 27.9783 21.5451 27.9524 21.7596C27.7673 23.2076 27.0608 24.5385 25.9652 25.5031C24.8695 26.4678 23.4598 26.9999 22 27C17.4913 27 13.1673 25.2089 9.97919 22.0208C6.79107 18.8327 5 14.5087 5 10C5.00008 8.54022 5.53224 7.13052 6.49685 6.03485C7.46146 4.93918 8.79237 4.23267 10.2404 4.04763C10.4549 4.02167 10.672 4.06612 10.8591 4.1743C11.0461 4.28248 11.193 4.44852 11.2775 4.6474L13.7888 10.5071C13.8537 10.6587 13.8802 10.824 13.8658 10.9883C13.8514 11.1525 13.7967 11.3107 13.7064 11.4487L11.6268 14.6261C11.5322 14.7691 11.4762 14.9341 11.4644 15.1051C11.4526 15.2762 11.4854 15.4473 11.5595 15.6019V15.6019Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M19.9271 5C21.6224 5.45592 23.1681 6.34928 24.4094 7.59059C25.6507 8.8319 26.544 10.3776 26.9999 12.0728" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M18.8916 8.86462C19.9087 9.13818 20.8362 9.67419 21.5809 10.419C22.3257 11.1638 22.8617 12.0912 23.1353 13.1083" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </div>
                                </a>

                                <a href="mailto:dotantz26@gmail.com" rel="noopener noreferrer" style={{ color: "black", textDecorationLine: "none" }}>
                                    <div style={{ backgroundColor: "#D9BB90", border: "0px", width: "160px", height: "70px", margin: "20px", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
                                        <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px" }}>
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: "5px" }}>
                                                <path opacity="0.2" d="M16 27.9994C22.6274 27.9994 28 22.6268 28 15.9994C28 9.37197 22.6274 3.99939 16 3.99939C9.37258 3.99939 4 9.37197 4 15.9994C4 22.6268 9.37258 27.9994 16 27.9994Z" fill="black" />
                                                <path d="M15.9994 20.9994C18.7608 20.9994 20.9994 18.7608 20.9994 15.9994C20.9994 13.238 18.7608 10.9994 15.9994 10.9994C13.238 10.9994 10.9994 13.238 10.9994 15.9994C10.9994 18.7608 13.238 20.9994 15.9994 20.9994Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M22.6345 25.9997C20.4067 27.4782 17.7489 28.1704 15.0829 27.9665C12.4169 27.7625 9.89532 26.6741 7.91833 24.8738C5.94134 23.0736 4.62215 20.6647 4.1701 18.0294C3.71804 15.3941 4.159 12.6833 5.42301 10.3271C6.68702 7.97092 8.70168 6.10434 11.1473 5.02353C13.593 3.94273 16.3295 3.7096 18.9227 4.36115C21.5159 5.01269 23.8173 6.51159 25.4616 8.62C27.106 10.7284 27.9991 13.3256 27.9994 15.9994C27.9994 18.7608 26.9994 20.9994 24.4994 20.9994C21.9994 20.9994 20.9994 18.7608 20.9994 15.9994V10.9994" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            Email
                                        </span>
                                    </div>
                                </a>

                                <a href="https://www.linkedin.com/in/dotan-tzarfaty" target="_blank" rel="noopener noreferrer" style={{ color: "black", textDecorationLine: "none" }}>
                                    <div style={{ backgroundColor: "#D9BB90", border: "0px", width: "160px", height: "70px", margin: "20px", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
                                        <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px" }}>
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: "5px" }}>
                                                <path opacity="0.2" d="M26 5H6C5.44772 5 5 5.44772 5 6V26C5 26.5523 5.44772 27 6 27H26C26.5523 27 27 26.5523 27 26V6C27 5.44772 26.5523 5 26 5Z" fill="black" />
                                                <path d="M26 5H6C5.44772 5 5 5.44772 5 6V26C5 26.5523 5.44772 27 6 27H26C26.5523 27 27 26.5523 27 26V6C27 5.44772 26.5523 5 26 5Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M15 14.0001V22.0001" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M11 14.0001V22.0001" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M15 17.5001C15 16.5719 15.3687 15.6816 16.0251 15.0252C16.6815 14.3689 17.5717 14.0001 18.5 14.0001C19.4283 14.0001 20.3185 14.3689 20.9749 15.0252C21.6313 15.6816 22 16.5719 22 17.5001V22.0001" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M11 11.5C11.8284 11.5 12.5 10.8284 12.5 10C12.5 9.17157 11.8284 8.5 11 8.5C10.1716 8.5 9.5 9.17157 9.5 10C9.5 10.8284 10.1716 11.5 11 11.5Z" fill="black" />
                                            </svg>
                                            LinkedIn
                                        </span>
                                    </div>
                                </a>

                                <a href="https://wa.me/972526368099" target="_blank" rel="noopener noreferrer" style={{ color: "black", textDecorationLine: "none" }}>
                                    <div style={{ backgroundColor: "#D9BB90", border: "0px", width: "160px", height: "70px", margin: "20px", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
                                        <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px" }}>
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: "5px" }}>
                                                <path opacity="0.2" d="M16 4C13.8815 4.0005 11.8008 4.56171 9.96938 5.62664C8.13795 6.69156 6.621 8.22225 5.57264 10.0632C4.52428 11.9042 3.98185 13.9898 4.00046 16.1083C4.01907 18.2267 4.59805 20.3025 5.67859 22.1248L5.67865 22.1247L4.49451 26.2693C4.44552 26.4407 4.44327 26.6222 4.48801 26.7948C4.53274 26.9675 4.62283 27.125 4.74893 27.2511C4.87504 27.3772 5.03257 27.4673 5.20521 27.512C5.37784 27.5567 5.5593 27.5545 5.73078 27.5055L9.87531 26.3213V26.3215C11.4635 27.2639 13.2478 27.827 15.0893 27.967C16.9308 28.107 18.7797 27.8202 20.4922 27.1288C22.2046 26.4373 23.7344 25.36 24.9625 23.9807C26.1905 22.6014 27.0836 20.9572 27.5722 19.1763C28.0609 17.3953 28.132 15.5256 27.7798 13.7127C27.4277 11.8998 26.662 10.1926 25.5422 8.72406C24.4224 7.25551 22.9787 6.06521 21.3237 5.24584C19.6686 4.42646 17.8468 4.00012 16 4ZM19.0142 23C17.6986 23.0019 16.3955 22.7441 15.1797 22.2415C13.9639 21.7389 12.8592 21.0013 11.9289 20.0711C10.9986 19.1408 10.261 18.0361 9.75842 16.8203C9.25582 15.6044 8.99807 14.3014 8.99994 12.9858C9.00292 12.0597 9.37308 11.1727 10.0292 10.5192C10.6854 9.86576 11.5739 9.49921 12.4999 9.5C12.6518 9.49999 12.801 9.54015 12.9324 9.61638C13.0638 9.69262 13.1726 9.80223 13.248 9.93411L14.7094 12.4915C14.7975 12.6458 14.843 12.8207 14.8411 12.9983C14.8392 13.1759 14.79 13.3498 14.6987 13.5022L13.525 15.4582C14.1288 16.7982 15.2017 17.8711 16.5417 18.4749L16.5417 18.4749L18.4977 17.3013C18.6501 17.2099 18.824 17.1607 19.0016 17.1589C19.1793 17.157 19.3542 17.2024 19.5084 17.2906L22.0658 18.7519C22.1977 18.8273 22.3073 18.9362 22.3835 19.0675C22.4598 19.1989 22.4999 19.3481 22.4999 19.5C22.4973 20.425 22.1296 21.3115 21.4769 21.9669C20.8242 22.6223 19.9391 22.9936 19.0142 23Z" fill="black" />
                                                <path d="M5.6786 22.1247C4.18768 19.6114 3.66554 16.6402 4.21024 13.7692C4.75494 10.8981 6.329 8.32466 8.63685 6.53204C10.9447 4.73941 13.8276 3.85093 16.7441 4.03344C19.6607 4.21595 22.4103 5.45689 24.4767 7.52325C26.5431 9.5896 27.784 12.3392 27.9666 15.2558C28.1491 18.1724 27.2606 21.0552 25.468 23.3631C23.6754 25.671 21.1019 27.245 18.2309 27.7897C15.3598 28.3345 12.3887 27.8123 9.87532 26.3214L9.87535 26.3213L5.73078 27.5055C5.5593 27.5545 5.37785 27.5567 5.20521 27.512C5.03258 27.4672 4.87504 27.3772 4.74894 27.2511C4.62284 27.125 4.53275 26.9674 4.48802 26.7948C4.44329 26.6221 4.44553 26.4407 4.49453 26.2692L5.67869 22.1246L5.6786 22.1247Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M19.0142 23C17.6986 23.0019 16.3956 22.7441 15.1797 22.2415C13.9639 21.7389 12.8592 21.0013 11.9289 20.0711C10.9987 19.1408 10.2611 18.0361 9.75849 16.8203C9.25589 15.6044 8.99814 14.3014 9.00001 12.9858C9.00299 12.0598 9.37314 11.1727 10.0293 10.5192C10.6854 9.86576 11.574 9.49921 12.5 9.5C12.6519 9.5 12.8011 9.54015 12.9325 9.61639C13.0638 9.69263 13.1727 9.80224 13.2481 9.93412L14.7094 12.4915C14.7976 12.6458 14.843 12.8207 14.8411 12.9983C14.8393 13.1759 14.7901 13.3498 14.6987 13.5022L13.5251 15.4582C14.1289 16.7982 15.2018 17.8711 16.5418 18.4749L18.4978 17.3013C18.6502 17.2099 18.8241 17.1608 19.0017 17.1589C19.1793 17.157 19.3542 17.2024 19.5085 17.2906L22.0659 18.7519C22.1978 18.8273 22.3074 18.9362 22.3836 19.0675C22.4598 19.1989 22.5 19.3481 22.5 19.5C22.4974 20.425 22.1297 21.3115 21.477 21.9669C20.8242 22.6223 19.9392 22.9936 19.0142 23Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            WhatsApp
                                        </span>
                                    </div>
                                </a>

                            </div>

                            <div style={{ height: "20%", width: "90%", display: "flex", alignItems: "center" }}>
                                <span style={{ fontSize: "16px", textAlign: "center", color: "#B5C7D8", margin: "30px" }}>
                                    A dream you dream alone<br></br>
                                    is only a dream.<br></br>
                                    A dream you dream together is reality.<br></br>
                                    -John Lennon
                                </span>
                            </div>

                        </ContentShowHide>
                    </ContentFrame>
                </Route>

                <Route path="/">
                    <ContentFrame show={false}>
                        <Switch>

                            <Route path={["/about", "/projects"]}>
                                <ContentShowHide show={false} style={{ transitionDuration: "2s", opacity: 0 }}>
                                    {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "20px" }}>
                                        <span style={{ fontSize: "50px", textAlign: "center", color: "#DADED4" }}>
                                            Full Stack Developer
                                        </span>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "20px" }}>
                                        <span style={{ fontSize: "14px", textAlign: "center", color: "#DADED4" }}>
                                            Without requirements or design,<br></br>
                                            programming is the art of adding<br></br>
                                            bugs to an empty text file.<br></br>
                                            -Unknown
                                        </span>
                                    </div> */}
                                </ContentShowHide>
                            </Route>

                            <Route path="/">
                                <ContentShowHide show={true} style={{ transitionDuration: "2s", opacity: 1 }}>
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "20px" }}>
                                        <span style={{ fontSize: "44px", textAlign: "center", color: "#DADED4" }}>
                                            Full Stack Developer
                                        </span>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "20px" }}>
                                        <span style={{ fontSize: "14px", textAlign: "center", color: "#DADED4" }}>
                                            Without requirements or design,<br></br>
                                            programming is the art of adding<br></br>
                                            bugs to an empty text file.<br></br>
                                            -Unknown
                                        </span>
                                    </div>
                                </ContentShowHide>
                            </Route>

                        </Switch>
                    </ContentFrame>
                </Route>

            </Switch>
        </AboutContainer>
    );
}



export default Contact;



