import React from 'react';
import { Route } from "react-router-dom"

import SearchPage from "../pages/SearchPage"
import HistoryPage from "../pages/HistoryPage"

function AppRouter(props) {
    const SearchPageWithProps = () => <SearchPage addToHistorico={props.addToHistorico} />
    const HistoryPageWithProps = () => <HistoryPage getHistorico={props.getHistorico} />

    return (
        <div>
            <Route path="/" exact component={SearchPageWithProps} />
            <Route path="/historico" component={HistoryPageWithProps} />
        </div>
    );
}

export default AppRouter