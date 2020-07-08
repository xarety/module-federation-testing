import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SideNav, Frame, Page, Sidebar } from '@servicetitan/design-system';
import { SideNavLinkItem } from '@servicetitan/link-item';

const FeatureA = React.lazy(() => import('feature_a/App'));
const FeatureB = React.lazy(() => import('feature_b/App'));
const FeatureC = React.lazy(() => import('feature_c/App'));

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
                                    <SideNavLinkItem pathname="/feature-a">
                                        Feature A
                                    </SideNavLinkItem>
                                    <SideNavLinkItem pathname="/feature-b">
                                        Feature B
                                    </SideNavLinkItem>
                                    <SideNavLinkItem pathname="/feature-c">
                                        Feature C
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
                            <Route path="/feature-a" component={FeatureA} />
                            <Route path="/feature-b" component={FeatureB} />
                            <Route path="/feature-c" component={FeatureC} />
                        </Switch>
                    </React.Suspense>
                </Page>
            </Frame>
        </BrowserRouter>
    </React.StrictMode>
);
