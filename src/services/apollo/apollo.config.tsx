/**
 *  Apollo - Client Config
 */

import { InMemoryCache, split } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { createUploadLink } from 'apollo-upload-client';
// import { createClient } from 'graphql-ws';
import { w3cwebsocket } from 'websocket';

import { HTTP_API_ENDPOINT, WS_API_ENDPOINT } from 'src/environments';
// import { getCookie } from 'src/services';

const cacheInMemory = new InMemoryCache();

const httpLink = createUploadLink({
    uri: `${ HTTP_API_ENDPOINT }`,
    credentials: 'same-origin',
});

const wsLink = new WebSocketLink({
    uri: `${ WS_API_ENDPOINT }`,
    options: {
        connectionParams: () => ({
            authToken: 'abcd', // `Bearer ${ getCookie({ name: 'authentication-store' }) }`
        })
    },
    webSocketImpl: w3cwebsocket
});

/** Ref: https://www.apollographql.com/docs/react/data/subscriptions/#3-split-communication-by-operation-recommended */
const linkSplitter = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    wsLink,

    // @ts-ignore --> type not suffice for `split` arguments
    httpLink
)

export const name = 'ASP-BlockTrade-ApolloClient';
export const cache = cacheInMemory;
export const link = linkSplitter;