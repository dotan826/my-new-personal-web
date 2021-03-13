import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Footer from './Footer';

const MobileContainer = styled.div`
    min-height: 100vh;
`;

interface MobileProps {
    className?: string;
}

const Mobile = (props: MobileProps) => {
    return (
        <MobileContainer className={props.className}>
            <Switch>
                <Route path="/">
                    <About></About>
                    <Contact></Contact>
                    <Projects></Projects>
                    <Footer></Footer>
                </Route>
            </Switch>
        </MobileContainer>
    );
}


export default Mobile;


