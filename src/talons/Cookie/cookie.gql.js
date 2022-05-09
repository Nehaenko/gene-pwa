import { gql } from '@apollo/client';

export const GET_COOKIE = gql`
    query storeConfigData {
        # eslint-disable-next-line @graphql-eslint/require-id-when-available
        storeConfig {
            store_code
            message
        }
    }
`;

export default {
    getCookieQuery: GET_COOKIE
};
