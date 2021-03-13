import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Switch, Route, useHistory } from 'react-router-dom';
import PictureDeskPC from '../images/desk-pc.jpg';

const AboutContainer = styled.div`
    background-color: #D87C82;
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
    min-height: ${props => props.show ? "500px" : "50px"};
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

const SiteLinksContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    

    flex-direction: column;
    margin: 10px;
`;

const SiteLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #D9BB90;
    margin-top: 20px;
    margin-bottom: 20px;

`;

const AddSiteLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #D9BB90;
    font-size: 22px;
    margin: 10px;
    width: 100px;
    height: 40px;
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

const Projects = () => {

    const history = useHistory();

    return (
        <AboutContainer>
            <Switch>

            <Route path="/projects">
                    <ContentFrame show={true}>
                        <ContentShowHide show={true}>

                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                            <SiteLinksContainer>
                                {
                                    projectsData.map(({ name, link, _id }) => {
                                        return (
                                            <SiteLink key={_id}>
                                                <a href={link} target="_blank" style={{ color: "black", fontSize: "20px", textDecorationLine: "none", textAlign: "center", margin: "10px" }}>
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
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <span style={{ fontSize: "14px", textAlign: "center", marginTop: "30px", marginBottom: "30px" }}>
                                    Expect the best, plan for the worst,<br></br>
                                    and prepare to be surprised.<br></br>
                                    -Denis Waitley
                                </span>
                            </div>
                            </div>

                        </ContentShowHide>
                    </ContentFrame>
                </Route>

                <Route path="/">
                    <ContentFrame show={false}>
                        <Switch>

                            <Route path={["/contact", "/about"]}>
                                <ContentShowHide show={false} style={{ transitionDuration: "2s", opacity: 0 }}>
                                    
                                </ContentShowHide>
                            </Route>

                            <Route path="/">
                                <ContentShowHide show={true} style={{ transitionDuration: "2s", opacity: 1 }}>
                                    <img src={PictureDeskPC} width="250px" style={{ borderRadius: "20px", margin: "30px" }}></img>
                                </ContentShowHide>
                            </Route>

                        </Switch>
                    </ContentFrame>
                </Route>

            </Switch>
        </AboutContainer>
    );
}



export default Projects;



