import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import AuthenticatedRoute from 'modules/routes/components/authenticated-route/authenticated-route'
import UnauthenticatedRoute from 'modules/routes/components/unauthenticated-route/unauthenticated-route'
import makePath from 'modules/routes/helpers/make-path'

import * as VIEWS from 'modules/routes/constants/views'
import * as COMPONENTS from 'modules/routes/constants/components'

const Routes = p => (
  <Switch>
    <Route exact path={makePath(VIEWS.DEFAULT_VIEW)} component={COMPONENTS.Topics} />
    <Route path={makePath(VIEWS.MARKETS)} component={COMPONENTS.Markets} />
    <Route path={makePath(VIEWS.MARKET)} component={COMPONENTS.Market} />
    <Route path={makePath(VIEWS.CONNECT)} component={COMPONENTS.Connect} />
    <Route path={makePath(VIEWS.CREATE)} component={COMPONENTS.Create} />
    <AuthenticatedRoute path={makePath(VIEWS.FAVORITES)} component={COMPONENTS.Markets} />
    <AuthenticatedRoute path={makePath(VIEWS.MY_POSITIONS)} component={COMPONENTS.Portfolio} />
    <AuthenticatedRoute path={makePath(VIEWS.MY_MARKETS)} component={COMPONENTS.Portfolio} />
    <AuthenticatedRoute path={makePath(VIEWS.WATCHLIST)} component={COMPONENTS.Portfolio} />
    <AuthenticatedRoute path={makePath(VIEWS.PORTFOLIO_TRANSACTIONS)} component={COMPONENTS.Portfolio} />
    <AuthenticatedRoute path={makePath(VIEWS.ACCOUNT)} component={COMPONENTS.Account} />
    <AuthenticatedRoute path={makePath(VIEWS.ACCOUNT_DEPOSIT)} component={COMPONENTS.Account} />
    <AuthenticatedRoute path={makePath(VIEWS.ACCOUNT_WITHDRAW)} component={COMPONENTS.Account} />
    <AuthenticatedRoute path={makePath(VIEWS.ACCOUNT_EXPORT)} component={COMPONENTS.Account} />
    <AuthenticatedRoute path={makePath(VIEWS.CREATE_MARKET)} component={COMPONENTS.CreateMarket} />
    <AuthenticatedRoute path={makePath(VIEWS.REPORTING)} component={COMPONENTS.Reporting} />
    <AuthenticatedRoute path={makePath(VIEWS.REPORTING_OPEN)} component={COMPONENTS.Reporting} />
    <AuthenticatedRoute path={makePath(VIEWS.REPORTING_CLOSED)} component={COMPONENTS.Reporting} />
    <AuthenticatedRoute path={makePath(VIEWS.REPORTING_REPORT)} component={COMPONENTS.Reporting} />
    <AuthenticatedRoute path={makePath(VIEWS.REPORTING_DISPUTE)} component={COMPONENTS.Reporting} />
    <UnauthenticatedRoute path={makePath(VIEWS.AUTHENTICATION)} component={COMPONENTS.Auth} />
    <Redirect to={makePath(VIEWS.CATEGORIES)} />
  </Switch>
)

export default Routes
