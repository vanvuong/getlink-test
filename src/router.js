import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import HomeComponent from './components/pages/homeComponent';
import AboutComponent from './components/pages/aboutComponent';
import CompaniesComponent from './components/pages/companiesComponent';
import CategoriesComponent from './components/pages/categoriesComponent';
import App from './App';

function RouterConfig() {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={HomeComponent}/>
                <Route path="/home" component={HomeComponent}/>
                <Route path="/about" component={AboutComponent}/>
                <Route path="/companies" component={CompaniesComponent}/>
                <Route path="/categories" component={CategoriesComponent}/>
            </Route>
        </Router>
    );
}
export default RouterConfig;
