import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import { LogoSVGMobile as Logo } from '../images/LogoSVG';
import PicturePowerSky from '../images/power-sky.jpg';

const AboutContainer = styled.div`
    background-color: #DADED4;

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
    min-height: ${props => props.show ? "1200px" : "10px"};
    
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

const Bubble = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 50px;
    border-radius: 50%;
    margin-right: 15px;
    margin-bottom: 20px;

    box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.25);

`;

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const About = () => {

    const [aboutColor, setAboutColor] = useState("black");
    const [projectsColor, setProjectsColor] = useState("black");
    const [contactColor, setContactColor] = useState("black");

    const history = useHistory();
    const location = useLocation();

    useEffect(()=>{
        // console.log(location.pathname); // testing !!!!!!!!!!!!!!!!
        if(location.pathname.localeCompare("/about") === 0){
            setAboutColor("red"); setProjectsColor("black"); setContactColor("black");
        }
        if(location.pathname.localeCompare("/contact") === 0){
            setAboutColor("black"); setProjectsColor("black"); setContactColor("red");
        }
        if(location.pathname.localeCompare("/projects") === 0){
            setAboutColor("black"); setProjectsColor("red"); setContactColor("black");
        }
        if(location.pathname.localeCompare("/") === 0){
            setAboutColor("black"); setProjectsColor("black"); setContactColor("black");
        }
    }, [location]);

    return (
        <AboutContainer>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <div style={{ marginTop: "30px", marginLeft: "30px", cursor: "pointer" }} onClick={() => { history.push("/") }}>
                    <Logo></Logo>
                </div>
                <div style={{ display: "flex", margin: "20px" }}>
                    <div style={{ fontSize: "20px", margin: "10px", cursor: "pointer", color: `${contactColor}` }} onClick={() => { history.push("/contact") }}>צור קשר</div>
                    <div style={{ fontSize: "20px", margin: "10px", cursor: "pointer", color: `${projectsColor}` }} onClick={() => { history.push("/projects") }}>פרויקטים</div>
                    <div style={{ fontSize: "20px", margin: "10px", cursor: "pointer", color: `${aboutColor}` }} onClick={() => { history.push("/about") }}>אודות</div>
                </div>
            </div>

            <Switch>

                <Route path="/about">
                    <ContentFrame show={true}>
                        <ContentShowHide show={true}>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                        <div style={{ direction: "rtl", margin: "5px" }}>היי ! נעים להכיר , אני דותן צרפתי,</div>
                                        <div style={{ direction: "rtl", margin: "5px" }}>מפתח Full Stack. גר בתל אביב.</div>
                                        <div style={{ direction: "rtl", margin: "5px" }}>אני מפתח אתרים בצד לקוח</div>
                                        <div style={{ direction: "rtl", margin: "5px" }}>וכל מה שקשור בצד שרת.</div>
                                        <div style={{ direction: "rtl", margin: "5px" }}>העבודה שלי מתבצעת</div>
                                        <div style={{ direction: "rtl", margin: "5px" }}>בטכנולוגיות הבאות :</div>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "30px" }}>
                                        <div style={{ display: "flex", marginLeft: "20px" }}>
                                            <Bubble style={{ backgroundColor: "#B5C7D8" }}>HTML</Bubble>
                                            <Bubble style={{ backgroundColor: "#B5C7D8" }}>CSS</Bubble>
                                        </div>
                                        <div style={{ display: "flex", marginRight: "20px" }}>
                                            <Bubble style={{ backgroundColor: "#B5C7D8", width: "100px" }}>JavaScript</Bubble>
                                            <Bubble style={{ backgroundColor: "#91C9A4" }}>React</Bubble>
                                        </div>
                                        <div style={{ display: "flex", marginLeft: "20px" }}>
                                            <Bubble style={{ backgroundColor: "#91C9A4" }}>Redux</Bubble>
                                            <Bubble style={{ backgroundColor: "#AF9BCF", width: "100px" }}>TypeScript</Bubble>
                                        </div>
                                        <div style={{ display: "flex", marginRight: "20px" }}>
                                            <Bubble style={{ backgroundColor: "#D5C487" }}>Node.js</Bubble>
                                            <Bubble style={{ backgroundColor: "#D5C487", width: "100px" }}>Express.js</Bubble>
                                        </div>
                                        <div style={{ display: "flex", marginLeft: "20px" }}>
                                            <Bubble style={{ backgroundColor: "#92C2BD", width: "100px" }}>MongoDB</Bubble>
                                            <Bubble style={{ backgroundColor: "#CD9898", width: "130px" }}>Google Cloud</Bubble>
                                        </div>
                                        <div style={{ display: "flex", marginRight: "0px" }}>
                                            <Bubble style={{ backgroundColor: "#D9BB90" }}>Figma</Bubble>
                                        </div>
                                        <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
                                            <span style={{ fontSize: "14px", textAlign: "center" }}>
                                                You don’t learn to walk by following rules.<br></br>
                                                You learn by doing, and by falling over.<br></br>
                                                -Richard Branson
                                            </span>
                                        </div>
                                        <div style={{ margin: "20px" }}>
                                            <img src={PicturePowerSky} width="250px" style={{ borderRadius: "20px", filter: "drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.25))" }}></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ContentShowHide>
                    </ContentFrame>
                </Route>

                <Route path="/">
                    <ContentFrame show={false}>
                        <Switch>

                            <Route path={["/contact", "/projects"]}>
                                <ContentShowHide show={false} style={{ transitionDuration: "2s", opacity: 0 }}>

                                </ContentShowHide>
                            </Route>

                            <Route path="/">
                                <ContentShowHide show={true} style={{ transitionDuration: "2s", opacity: 1 }}>
                                    <pre style={{ fontSize: "14px" }}>
                                        while (you_are_here) &#123;<br></br>&#32;&#32;&#32;&#32;explore_site++;<br></br>
                                        &#125;<br></br>
                                        if (you_like) &#123;<br></br>&#32;&#32;&#32;&#32;contact_me = true;<br></br>
                                        &#125;<br></br>
                                        else &#123;<br></br>&#32;&#32;&#32;&#32;bookmark_me++;<br></br>&#32;&#32;&#32;&#32;keep_in_touch++;<br></br>
                                        &#125;<br></br>
                                    </pre>
                                </ContentShowHide>
                            </Route>

                        </Switch>
                    </ContentFrame>
                </Route>

            </Switch>
        </AboutContainer>
    );
}



export default About;



