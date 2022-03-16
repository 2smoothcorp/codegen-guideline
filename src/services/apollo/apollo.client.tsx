/**
 *  Apollo - Client
 */

import { ApolloClient } from '@apollo/client';
import { name, link, cache } from './apollo.config';

export const client = new ApolloClient({
    name: name,
    ssrMode: true,
    link: link,
    cache: cache
});