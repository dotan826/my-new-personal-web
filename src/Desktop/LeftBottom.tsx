import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
// import { getPage, setPage } from '../webConstants';// for testing, maybe replace it with redux ?? later thinking...
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';

import PictureDeskPC from '../images/desk-pc.jpg';

const LeftBottomContainer = styled.div<ContentOpenProps>`
    height: 70%;
    z-index: ${props => props.zIndex};
`;

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Content + Frame + Animation
interface ContentOpenProps {
    isOpen: boolean;
    zIndex?: number;
}

const ContentFrame = styled.div<ContentOpenProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #D87C82;
    transition-duration: 2s;
    position: relative;
    height: ${props => props.isOpen ? "100%" : "100%"};
    width: ${props => props.isOpen ? "260%" : "100%"};
    bottom: ${props => props.isOpen ? "50px" : "0px"};
    left: ${props => props.isOpen ? "50px" : "0px"};
    box-shadow: ${props => props.isOpen ? "10px 10px 4px rgba(0, 0, 0, 0.25)" : "none"};
`;

const ContentAnimationOpen = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const ContentAnimationClose = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const ContentOpen = styled.div<ContentOpenProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    animation: ${ContentAnimationOpen} 2s;

    width: 100%;
    height: 100%;

`;

const ContentClose = styled.div<ContentOpenProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    animation: ${ContentAnimationClose} 2s;
    
    width: 100%;
    height: 100%;
    
`;
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const SiteLinksContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 60%;
    height: 500px;
    overflow: auto;
`;

const SiteLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #D9BB90;
    margin: 20px;
    width: 80%;
    height: 8%;
`;

const AddSiteLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #D9BB90;
    font-size: 22px;
    margin: 20px;
    width: 20%;
    height: 8%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 0px;
    cursor: pointer;
`;

const AddIconAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const AddIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    
    &:hover{
        animation: ${AddIconAnimation} 2s infinite;
    }
`;

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

interface LeftBottomProps {
    desktopStatus: {
        // page: string;
        getPage: any;
        setPage: any;
        // isOpen: boolean;
        setIsOpen: any;
        getIsOpen: any;
    }
}

const projectsData = [
    {
        _id: "1",
        name: "שלמה מחשוב הייצור - אתר הזמנת חומרים",
        link: "https://www.shlomo.redboxteams.com/"
    },
    {
        _id: "2",
        name: "קניות עושים במוג׳ו - אתר תיווך מוצרים",
        link: "https://www.shopping.redboxteams.com/"
    }
]

const LeftBottom = (props: LeftBottomProps) => {

    const [isOpen, setIsOpen] = useState(false);
    const [zIndex, setZIndex] = useState(1);

    const location = useLocation();

    // console.log("page/staus is ::: ", props.desktopStatus.getPage(), " ", props.desktopStatus.getIsOpen()); // testing

    const openFrame = () => {
        props.desktopStatus.setPage("projects");
        setIsOpen(!isOpen);
        setZIndex(5);
    }

    const closeFrame = () => {
        setIsOpen(!isOpen);
        setTimeout(() => {
            props.desktopStatus.setPage("menu");
            setZIndex(1);
        }, 2000)
    }

    useEffect(() => {
        // console.log(location.pathname);
        if (location.pathname.localeCompare("/projects") === 0) {
            setZIndex(5);
        }
        else if (location.pathname.localeCompare("/contact") === 0 || location.pathname.localeCompare("/about") === 0) {
            setZIndex(1);
        }
    }, [location]);

    return (
        // <LeftBottomContainer isOpen={isOpen} zIndex={zIndex}>

        //     <ContentFrame isOpen={isOpen}>

        //         {
        //             isOpen ?

        //                 <ContentOpen isOpen={isOpen}>
        //                     <button onClick={() => { closeFrame() }}>Click To Close !</button>
        //                 </ContentOpen>

        //                 :

        //                 <ContentClose isOpen={isOpen}>
        //                     <img src={PictureDeskPC} width="300px" style={{ borderRadius: "20px" }}></img>
        //                     <button onClick={() => { openFrame() }}>Click To Close !</button>
        //                 </ContentClose>

        //         }

        //     </ContentFrame>

        // </LeftBottomContainer>



        <LeftBottomContainer isOpen={true} zIndex={zIndex}>

            <Switch>

                <Route path="/projects">
                    <ContentFrame isOpen={true}>
                        <ContentOpen isOpen={true}>
                            
                            <div style={{ width: "30%", height: "90%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <span style={{ fontSize: "16px", textAlign: "center", margin: "30px" }}>
                                    Expect the best, plan for the worst,<br></br>
                                    and prepare to be surprised.<br></br>
                                    -Denis Waitley
                                </span>
                            </div>
                            <SiteLinksContainer>
                                {
                                    projectsData.map(({ name, link, _id }) => {
                                        return (
                                            <SiteLink key={_id}>
                                                <a href={link} target="_blank" style={{ color: "black", fontSize: "22px", textDecorationLine: "none" }}>
                                                    {name}
                                                </a>
                                            </SiteLink>
                                        )
                                    })
                                }

                                <AddSiteLink>
                                    <AddIcon>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.2" d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" fill="black" />
                                            <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="black" strokeWidth="2" strokeMiterlimit="10" />
                                            <path d="M11 16H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M16 11V21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </AddIcon>
                                </AddSiteLink>

                            </SiteLinksContainer>
                        </ContentOpen>
                    </ContentFrame>
                </Route>


                <Route path="/">
                    <ContentFrame isOpen={false}>
                        <Switch>

                            <Route path={["/about", "/contact"]}>
                                <ContentClose isOpen={false} style={{ transitionDuration: "2s", opacity: 0 }}>
                                    <img src={PictureDeskPC} width="300px" style={{ borderRadius: "20px" }}></img>
                                </ContentClose>
                            </Route>

                            <Route path="/">
                                <ContentClose isOpen={false} style={{ transitionDuration: "2s", opacity: 1 }}>
                                    <img src={PictureDeskPC} width="300px" style={{ borderRadius: "20px" }}></img>
                                </ContentClose>
                            </Route>

                        </Switch>
                    </ContentFrame>
                </Route>

            </Switch>

        </LeftBottomContainer>
    );
}

export default LeftBottom;


