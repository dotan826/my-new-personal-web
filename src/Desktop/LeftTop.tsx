import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Switch, Route } from 'react-router-dom';

const LeftTopContainer = styled.div`
    height: 30%;
    background-color: #A3BCB6;
`;

// const ContentFrame = styled.div`

// `;

// const ContentOpen = styled.div`

// `;

// const ContentClose = styled.div`

// `;

const ContentAnimationClose = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;

    animation: ${ContentAnimationClose} 2s;

    width: 100%;
    height: 100%;    
`;

const LeftTop = () => {
    return (
        <LeftTopContainer>
            <Switch>

                <Route path={["/about", "/projects", "/contact"]}>
                    <Content style={{ transitionDuration: "2s", opacity: 0 }}>
                        <span style={{ fontSize: "30px", textAlign: "center", color: "#565C58", marginBottom: "20px" }}>
                            Let's Build The Future Together
                        </span>
                    </Content>
                </Route>

                <Route path="/">
                    <Content style={{ transitionDuration: "2s", opacity: 1 }}>
                        <span style={{ fontSize: "30px", textAlign: "center", color: "#565C58", marginBottom: "20px" }}>
                            Let's Build The Future Together
                        </span>
                    </Content>
                </Route>


            </Switch>
        </LeftTopContainer>
    );
}

export default LeftTop;


