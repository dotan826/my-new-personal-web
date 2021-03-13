import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Switch, Route, useHistory } from 'react-router-dom';

import LeftTop from './LeftTop';
import LeftBottom from './LeftBottom';
import RightTop from './RightTop';
import RightBottom from './RightBottom';

const DesktopContainer = styled.div``;

const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;

    width: 1200px;
    height: 90vh;
    margin-top: 4vh;
    margin-bottom: 4vh;
`;

interface DesktopProps {
    className?: string;
}

const Desktop = (props: DesktopProps) => {

    // const history = useHistory();
    // history.push("/projects"); // For Testing And Building Only - Remove After !!!!

    interface desktopStatusVariables {
        page: string;
        getPage: any;
        setPage: any;
        isOpen: boolean;
        setIsOpen: any;
        getIsOpen: any;
    }

    const desktopStatus: desktopStatusVariables = {
        page: "menu",                                          // 0 menu, 1 about, 2 projects, 3 contact
        getPage: () => {
            return desktopStatus.page;
        },
        setPage: (pageNumber: string) => {
            desktopStatus.page = pageNumber;
        },
        isOpen: false,
        getIsOpen: () => {
            return desktopStatus.isOpen;
        },
        setIsOpen: (status: boolean) => {
            desktopStatus.isOpen = status;
        }
    }

    return (
        <DesktopContainer className={props.className}>
            <Switch>
                <Route path="/">
                    <PageContainer>
                        <ContentContainer>
                            <div style={{ display: "flex", flexDirection: "column", width: "35%" }}>
                                <LeftTop></LeftTop>
                                <LeftBottom desktopStatus={desktopStatus}></LeftBottom>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", width: "65%" }}>
                                <RightTop desktopStatus={desktopStatus}></RightTop>
                                <RightBottom desktopStatus={desktopStatus}></RightBottom>
                            </div>
                        </ContentContainer>
                    </PageContainer>
                </Route>
            </Switch>
        </DesktopContainer>
    );
}


export default Desktop;


