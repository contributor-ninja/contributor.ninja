import React, {Component} from 'react';
import ApolloClient, {createNetworkInterface} from 'apollo-client';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {ApolloProvider} from 'react-apollo';

import './App.css';
import {Search} from './Search/index';
import {SearchButton} from './Search/SearchButton';
import Content from './Content';
import {makeEmptyState} from '../utils';
import {fetchIssuesQuery} from '../Queries/fetchIssues';
import {fetchUserQuery} from '../Queries/fetchUser';

if (window.location.search !== "") {
  const cntoken = window.location.search.substr(1);

  localStorage.setItem("cntoken", cntoken)
}

const networkInterface = createNetworkInterface({
  uri:
    process.env.REACT_APP_GRAPHQL_ENDPOINT ||
    'https://api.contributor.ninja/graphql',
});

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
    }

    const cntoken = localStorage.getItem('cntoken');
    req.options.headers.Authorization = cntoken ? cntoken : null;

    next();
  }
}]);

const apolloClient = new ApolloClient({
  networkInterface,
});

export default class App extends Component {
  state = {
    loaded: false,
    columns: makeEmptyState(),
    searchexpanded: false,
    user: {isConnected: false},
    isMobile: window.innerWidth < 800,
  };

  constructor(props) {
    super(props);

    //Binding Toggle Search Button
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      searchexpanded: !prevState.searchexpanded,
    }));
  }

  componentDidMount() {

    apolloClient
      .query({
        query: fetchIssuesQuery,
      })
      .then(res => this.setState({ columns: res.data.columns, loaded: true }))
      .catch(error => console.error(error));

    apolloClient
      .query({
        query: fetchUserQuery,
      })
      .then(res => this.setState({ user: res.data.user }))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <ApolloProvider client={apolloClient}>

        <MuiThemeProvider>
          <div>
            {/*
            {this.state.searchexpanded && <Search />}

            <SearchButton
              searchexpanded={this.state.searchexpanded}
              onClick={this.handleClick}
            />
            */}

            <Content {...this.state} isConnected={this.state.user.isConnected} isMobile={this.state.isMobile} />
          </div>
        </MuiThemeProvider>

      </ApolloProvider>
    );
  }
}
