import React, { useCallback, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import {LogoSVG as Logo} from '../images/LogoSVG';
// import { getPage, setPage } from '../webConstants'; // for testing, maybe replace it with redux ?? later thinking...
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';

import PicturePowerSky from '../images/power-sky.jpg';

const RightTopContainer = styled.div<ContentOpenProps>`
    height: 65%;
    z-index: ${props => props.zIndex};
`;

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ???

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Content + Frame + Animation
interface ContentOpenProps {
    isOpen: boolean;
    zIndex?: number;
}

const ContentFrame = styled.div<ContentOpenProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #DADED4;
    transition-duration: 2s;
    position: relative;
    height: ${props => props.isOpen ? "140%" : "100%"};
    width: ${props => props.isOpen ? "140%" : "100%"};
    top: ${props => props.isOpen ? "40px" : "0px"};
    right: ${props => props.isOpen ? "350px" : "0px"};
    box-shadow: ${props => props.isOpen ? "10px 10px 4px rgba(0, 0, 0, 0.25)" : "none"};
`;

const ContentAnimationOpen = keyframes`
    0% {
        opacity: 0;
    }
    20% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const ContentAnimationClose = keyframes`
    0% {
        opacity: 0;
    }
    20% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const ContentOpen = styled.div<ContentOpenProps>`
    display: flex;
    
    animation: ${ContentAnimationOpen} 2s;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 120%;
    height: 140%;

`;

const ContentClose = styled.div<ContentOpenProps>`
    display: flex;

    animation: ${ContentAnimationClose} 2s;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    
`;
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> BUBBLE Content + Animation
const bubbleRotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    33% {
        transform: rotate(25deg) scale(1.2);
        
    }
    66% {
        transform: rotate(-25deg) scale(1.2);
    }
    100% {
        transform: rotate(0deg);
    }
`;

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

    &:hover{
        animation: ${bubbleRotate} 2s ease-in-out infinite;
    }
`;
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

interface RightTopProps {
    desktopStatus: {
        // page: string;
        getPage: any;
        setPage: any;
        // isOpen: boolean;
        setIsOpen: any;
        getIsOpen: any;
    }
}

const RightTop = (props: RightTopProps) => {

    const [isOpen, setIsOpen] = useState(false);
    const [zIndex, setZIndex] = useState(1);
    const [aboutColor, setAboutColor] = useState("black");
    const [projectsColor, setProjectsColor] = useState("black");
    const [contactColor, setContactColor] = useState("black");

    const history = useHistory();
    const location = useLocation();

    // console.log("page/staus is ::: ", props.desktopStatus.getPage(), " ", props.desktopStatus.getIsOpen()); // testing

    const openFrame = () => {
        // props.desktopStatus.setPage("about");
        // props.desktopStatus.setIsOpen(true); // test
        // setIsOpen(!isOpen);
        // setZIndex(5);
        setZIndex(5);
    }

    const closeFrame = () => {
        // props.desktopStatus.setIsOpen(false); // test
        // setIsOpen(!isOpen);
        // setTimeout(() => {
        //     props.desktopStatus.setPage("menu");
        //     setZIndex(1);
        // }, 2000)
        setZIndex(1);
    }

    useEffect(()=>{
        // console.log(location.pathname); // testing !!!!!!!!!!!!!!!!
        if(location.pathname.localeCompare("/about") === 0){
            setZIndex(5);
            setAboutColor("red"); setProjectsColor("black"); setContactColor("black");
        }
        if(location.pathname.localeCompare("/contact") === 0){
            setZIndex(1);
            setAboutColor("black"); setProjectsColor("black"); setContactColor("red");
        }
        if(location.pathname.localeCompare("/projects") === 0){
            setZIndex(1);
            setAboutColor("black"); setProjectsColor("red"); setContactColor("black");
        }
        if(location.pathname.localeCompare("/") === 0){
            setAboutColor("black"); setProjectsColor("black"); setContactColor("black");
        }
    }, [location]);

    return (
        // <RightTopContainer isOpen={isOpen} zIndex={zIndex}>

        //     <ContentFrame isOpen={isOpen}>

        //         {
        //             isOpen ?

        //                 <ContentOpen isOpen={isOpen}>
        //                     {/* <button onClick={()=>{ setIsOpen(!isOpen) }}>Click To Close !</button> */}
        //                     <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        //                         <div style={{ display: "flex", justifyContent: "center", margin: "40px" }}>
        //                             <span style={{ fontSize: "16px", textAlign: "center" }}>
        //                                 You don’t learn to walk by following rules.<br></br>
        //                             You learn by doing, and by falling over.<br></br>
        //                             -Richard Branson
        //                             </span>
        //                         </div>
        //                         <div style={{ display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
        //                             {/* <div style={{ fontSize: "25px", margin: "20px" }}>צור קשר</div>
        //                             <div style={{ fontSize: "25px", margin: "20px" }}>פרויקטים</div>
        //                             <div style={{ fontSize: "25px", margin: "20px" }} onClick={() => { closeFrame() }}>אודות</div> */}
        //                             <button style={{ fontSize: "25px", margin: "20px", backgroundColor: "transparent", border: "0px" }} onClick={() => { }}>צור קשר</button>
        //                             <button style={{ fontSize: "25px", margin: "20px", backgroundColor: "transparent", border: "0px" }} onClick={() => { }}>פרויקטים</button>
        //                             <button style={{ fontSize: "25px", margin: "20px", backgroundColor: "transparent", border: "0px" }} onClick={() => { closeFrame() }}>אודות</button>
        //                             <div style={{ margin: "30px" }}>
        //                                 <Logo></Logo>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        //                         <div style={{ margin: "50px" }}>
        //                             <img src={PicturePowerSky} width="250px" style={{ borderRadius: "20px", filter: "drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.25))" }}></img>
        //                         </div>
        //                         <div style={{ margin: "50px" }}>
        //                             <div style={{ direction: "rtl", margin: "10px" }}>היי ! נעים להכיר , אני דותן צרפתי, מפתח Full Stack. גר בתל אביב.</div>
        //                             <div style={{ direction: "rtl", margin: "10px" }}>אני מפתח אתרים בצד לקוח וכל מה שקשור בצד שרת.</div>
        //                             <div style={{ direction: "rtl", margin: "10px" }}>העבודה שלי מתבצעת בטכנולוגיות הבאות :</div>
        //                             <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "30px" }}>
        //                                 <div style={{ display: "flex", marginLeft: "50px" }}>
        //                                     <Bubble style={{ backgroundColor: "#B5C7D8" }}>HTML</Bubble>
        //                                     <Bubble style={{ backgroundColor: "#B5C7D8" }}>CSS</Bubble>
        //                                     <Bubble style={{ backgroundColor: "#B5C7D8", width: "100px" }}>JavaScript</Bubble>
        //                                 </div>
        //                                 <div style={{ display: "flex", marginRight: "50px" }}>
        //                                     <Bubble style={{ backgroundColor: "#91C9A4" }}>React</Bubble>
        //                                     <Bubble style={{ backgroundColor: "#91C9A4" }}>Redux</Bubble>
        //                                     <Bubble style={{ backgroundColor: "#AF9BCF", width: "100px" }}>TypeScript</Bubble>
        //                                 </div>
        //                                 <div style={{ display: "flex", marginLeft: "50px" }}>
        //                                     <Bubble style={{ backgroundColor: "#D5C487" }}>Node.js</Bubble>
        //                                     <Bubble style={{ backgroundColor: "#D5C487", width: "100px" }}>Express.js</Bubble>
        //                                     <Bubble style={{ backgroundColor: "#92C2BD", width: "100px" }}>MongoDB</Bubble>
        //                                 </div>
        //                                 <div style={{ display: "flex", marginRight: "50px" }}>
        //                                     <Bubble style={{ backgroundColor: "#CD9898", width: "130px" }}>Google Cloud</Bubble>
        //                                     <Bubble style={{ backgroundColor: "#D9BB90" }}>Figma</Bubble>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </ContentOpen>

        //                 :

        //                 <ContentClose isOpen={isOpen}>
        //                     {/* <button onClick={()=>{ setIsOpen(!isOpen) }}>Click To Open !</button> */}
        //                     <div style={{ display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
        //                         {/* <div style={{ fontSize: "25px", margin: "20px" }}>צור קשר</div>
        //                         <div style={{ fontSize: "25px", margin: "20px" }}>פרויקטים</div>
        //                         <div style={{ fontSize: "25px", margin: "20px" }} onClick={() => { openFrame() }}>אודות</div> */}
        //                         <button style={{ fontSize: "25px", margin: "20px", backgroundColor: "transparent", border: "0px" }} onClick={() => { }}>צור קשר</button>
        //                         <button style={{ fontSize: "25px", margin: "20px", backgroundColor: "transparent", border: "0px" }} onClick={() => { }}>פרויקטים</button>
        //                         <button style={{ fontSize: "25px", margin: "20px", backgroundColor: "transparent", border: "0px" }} onClick={() => { openFrame() }}>אודות</button>
        //                         <div style={{ margin: "30px" }}>
        //                             <Logo></Logo>
        //                         </div>
        //                     </div>
        //                     <div style={{ display: "flex", justifyContent: "flex-start", width: "100%" }}>
        //                         <pre style={{ marginLeft: "100px", marginTop: "40px" }}>
        //                             while (you_are_here) &#123;<br></br>&#32;&#32;&#32;&#32;explore_site++;<br></br>
        //                             &#125;<br></br>
        //                             if (you_like) &#123;<br></br>&#32;&#32;&#32;&#32;contact_me = true;<br></br>
        //                             &#125;<br></br>
        //                             else &#123;<br></br>&#32;&#32;&#32;&#32;bookmark_me++;<br></br>&#32;&#32;&#32;&#32;keep_in_touch++;<br></br>
        //                             &#125;<br></br>
        //                         </pre>
        //                     </div>
        //                 </ContentClose>

        //         }

        //     </ContentFrame>

        // </RightTopContainer>




        <RightTopContainer isOpen={true} zIndex={zIndex}>

            <Switch>
                <Route path="/about">
                    
                    <ContentFrame isOpen={true} style={{  }}>
                        <ContentOpen isOpen={true}>
                            
                            {/* <button onClick={()=>{ setIsOpen(!isOpen) }}>Click To Close !</button> */}
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <div style={{ display: "flex", justifyContent: "center", margin: "40px" }}>
                                    <span style={{ fontSize: "16px", textAlign: "center" }}>
                                        You don’t learn to walk by following rules.<br></br>
                                    You learn by doing, and by falling over.<br></br>
                                    -Richard Branson
                                    </span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                                    {/* <div style={{ fontSize: "25px", margin: "20px" }}>צור קשר</div>
                                    <div style={{ fontSize: "25px", margin: "20px" }}>פרויקטים</div>
                                    <div style={{ fontSize: "25px", margin: "20px" }} onClick={() => { closeFrame() }}>אודות</div> */}
                                    <div style={{ fontSize: "25px", margin: "20px", backgroundColor: "transparent", border: "0px", cursor: "pointer", color: `${contactColor}` }} onClick={() => { history.push("/contact") }}>צור קשר</div>
                                    <div style={{ fontSize: "25px", margin: "20px", backgroundColor: "transparent", border: "0px", cursor: "pointer", color: `${projectsColor}` }} onClick={() => { history.push("/projects") }}>פרויקטים</div>
                                    <div style={{ fontSize: "25px", margin: "20px", backgroundColor: "transparent", border: "0px", cursor: "pointer", color: `${aboutColor}` }} onClick={() => { history.push("/about") }}>אודות</div>
                                    <div style={{ margin: "30px", cursor: "pointer" }} onClick={() => { history.push("/") }}>
                                        <Logo></Logo>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <div style={{ margin: "50px" }}>
                                    <img src={PicturePowerSky} width="250px" style={{ borderRadius: "20px", filter: "drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.25))" }}></img>
                                </div>
                                <div style={{ margin: "50px" }}>
                                    <div style={{ direction: "rtl", margin: "10px" }}>היי ! נעים להכיר , אני דותן צרפתי, מפתח Full Stack. גר בתל אביב.</div>
                                    <div style={{ direction: "rtl", margin: "10px" }}>אני מפתח אתרים בצד לקוח וכל מה שקשור בצד שרת.</div>
                                    <div style={{ direction: "rtl", margin: "10px" }}>העבודה שלי מתבצעת בטכנולוגיות הבאות :</div>
                                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "30px" }}>
                                        <div style={{ display: "flex", marginLeft: "50px" }}>
                                            <Bubble style={{ backgroundColor: "#B5C7D8" }}>HTML</Bubble>
                                            <Bubble style={{ backgroundColor: "#B5C7D8" }}>CSS</Bubble>
                                            <Bubble style={{ backgroundColor: "#B5C7D8", width: "100px" }}>JavaScript</Bubble>
                                        </div>
                                        <div style={{ display: "flex", marginRight: "50px" }}>
                                            <Bubble style={{ backgroundColor: "#91C9A4" }}>React</Bubble>
                                            <Bubble style={{ backgroundColor: "#91C9A4" }}>Redux</Bubble>
                                            <Bubble style={{ backgroundColor: "#AF9BCF", width: "100px" }}>TypeScript</Bubble>
                                        </div>
                                        <div style={{ display: "flex", marginLeft: "50px" }}>
                                            <Bubble style={{ backgroundColor: "#D5C487" }}>Node.js</Bubble>
                                            <Bubble style={{ backgroundColor: "#D5C487", width: "100px" }}>Express.js</Bubble>
                                            <Bubble style={{ backgroundColor: "#92C2BD", width: "100px" }}>MongoDB</Bubble>
                                        </div>
                                        <div style={{ display: "flex", marginRight: "50px" }}>
                                            <Bubble style={{ backgroundColor: "#CD9898", width: "130px" }}>Google Cloud</Bubble>
                                            <Bubble style={{ backgroundColor: "#D9BB90" }}>Figma</Bubble>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ContentOpen>
                    </ContentFrame>

                
                </Route>

                <Route path="/">
                    <ContentFrame isOpen={false} style={{  }}>
                        <Switch>

                            {/* <Route path={["/contact", "/projects"]}>
                        <ContentClose isOpen={false} style={{ transitionDuration: "2s", opacity: 0 }}>
                            <div style={{ display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                                <button style={{ fontSize: "25px", margin: "20px", backgroundColor: "transparent", border: "0px" }} onClick={() => { history.push("/contact") }}>צור קשר</button>
                                <button style={{ fontSize: "25px", margin: "20px", backgroundColor: "transparent", border: "0px" }} onClick={() => { history.push("/projects") }}>פרויקטים</button>
                                <button style={{ fontSize: "25px", margin: "20px", backgroundColor: "transparent", border: "0px" }} onClick={() => { history.push("/about") }}>אודות</button>
                                <div style={{ margin: "30px" }} onClick={() => { history.push("/") }}>
                                    <Logo></Logo>
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "flex-start", width: "100%" }}>
                                <pre style={{ marginLeft: "100px", marginTop: "40px" }}>
                                    while (you_are_here) &#123;<br></br>&#32;&#32;&#32;&#32;explore_site++;<br></br>
                                    &#125;<br></br>
                                    if (you_like) &#123;<br></br>&#32;&#32;&#32;&#32;contact_me = true;<br></br>
                                    &#125;<br></br>
                                    else &#123;<br></br>&#32;&#32;&#32;&#32;bookmark_me++;<br></br>&#32;&#32;&#32;&#32;keep_in_touch++;<br></br>
                                    &#125;<br></br>
                                </pre>
                            </div>
                        </ContentClose>
                        </Route> */}

                            <Route path="/">
                                <ContentClose isOpen={false} style={{ transitionDuration: "2s", opacity: 1 }}>
                                    <div style={{ display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                                        <div style={{ fontSize: "25px", margin: "20px", backgroundColor: "transparent", border: "0px", cursor: "pointer", color: `${contactColor}` }} onClick={() => { history.push("/contact") }}>צור קשר</div>
                                        <div style={{ fontSize: "25px", margin: "20px", backgroundColor: "transparent", border: "0px", cursor: "pointer", color: `${projectsColor}` }} onClick={() => { history.push("/projects") }}>פרויקטים</div>
                                        <div style={{ fontSize: "25px", margin: "20px", backgroundColor: "transparent", border: "0px", cursor: "pointer", color: `${aboutColor}` }} onClick={() => { history.push("/about") }}>אודות</div>
                                        <div style={{ margin: "30px", cursor: "pointer" }} onClick={() => { history.push("/") }}>
                                            <Logo></Logo>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "flex-start", width: "100%" }}>
                                        <pre style={{ marginLeft: "100px", marginTop: "40px" }}>
                                            while (you_are_here) &#123;<br></br>&#32;&#32;&#32;&#32;explore_site++;<br></br>
                                    &#125;<br></br>
                                    if (you_like) &#123;<br></br>&#32;&#32;&#32;&#32;contact_me = true;<br></br>
                                    &#125;<br></br>
                                    else &#123;<br></br>&#32;&#32;&#32;&#32;bookmark_me++;<br></br>&#32;&#32;&#32;&#32;keep_in_touch++;<br></br>
                                    &#125;<br></br>
                                        </pre>
                                    </div>
                                </ContentClose>
                            </Route>

                        </Switch>
                    </ContentFrame>
                </Route>


            </Switch>


        </RightTopContainer>
    );
}

export default RightTop;


