import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Switch, Route, useHistory } from 'react-router-dom';

const AboutContainer = styled.div`
    background-color: #A3BCB6;
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
    min-height: ${props => props.show ? "100px" : "50px"};
    transition-duration: 2s;
`;

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Content CLOSE + Animation

const ContentFrameCloseAnimation = keyframes`
    from {
        opacity: 0;
        
    }
    to {
        opacity: 1;
    }
`;

const ContentClose = styled.div`
    animation: ${ContentFrameCloseAnimation} 2s;
    opacity: 1;
`;

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Content OPEN + Animation

const ContentFrameOpenAnimation = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

const ContentOpen = styled.div`
    animation: ${ContentFrameOpenAnimation} 2s;
    opacity: 0;
`;

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Content + Frame + Animation

const Footer = () => {

    const history = useHistory();

    return (
        <AboutContainer>
            <Switch>

                <Route path={["/about", "/contact", "/projects"]}>
                    <ContentFrame show={false}>
                        <ContentOpen>

                        </ContentOpen>
                    </ContentFrame>
                </Route>

                <Route path="/">
                    <ContentFrame show={true}>
                        <ContentClose>
                            <span style={{ fontSize: "18px", textAlign: "center", color: "#565C58", marginBottom: "20px" }}>
                                Let's Build The Future Together
                            </span>
                        </ContentClose>
                    </ContentFrame>
                </Route>

            </Switch>
        </AboutContainer>
    );
}



export default Footer;



