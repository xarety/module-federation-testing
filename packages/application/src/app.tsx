import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Frame, Page, Sidebar, SideNav } from '@servicetitan/design-system';
import { SideNavLinkItem } from '@servicetitan/link-item';

const Feature1 = React.lazy(() => import('feature1/App'));
const Feature2 = React.lazy(() => import('feature2/App'));
const Feature3 = React.lazy(() => import('feature3/App'));

export const App: React.FC = () => (
    <React.StrictMode>
        <BrowserRouter>
            <Frame>
                <Page
                    sidebar={
                        <Sidebar>
                            <Sidebar.Section padding="y">
                                <SideNav title="Application">
                                    <SideNavLinkItem pathname="/" exact>
                                        Home page
                                    </SideNavLinkItem>
                                    <SideNavLinkItem pathname="/feature1">
                                        Feature 1
                                    </SideNavLinkItem>
                                    <SideNavLinkItem pathname="/feature2">
                                        Feature 2
                                    </SideNavLinkItem>
                                    <SideNavLinkItem pathname="/feature3">
                                        Feature 3
                                    </SideNavLinkItem>
                                </SideNav>
                            </Sidebar.Section>
                        </Sidebar>
                    }
                    maxWidth="wide"
                >
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route
                                path="/"
                                exact
                                component={() => <React.Fragment>Application</React.Fragment>}
                            />
                            <Route path="/feature1" component={Feature1} />
                            <Route path="/feature2" component={Feature2} />
                            <Route path="/feature3" component={Feature3} />
                        </Switch>
                    </React.Suspense>
                </Page>
            </Frame>
        </BrowserRouter>
    </React.StrictMode>
);
