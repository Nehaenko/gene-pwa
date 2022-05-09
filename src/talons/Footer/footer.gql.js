import { gql } from '@apollo/client';

export const GET_FOOTER = gql`
    query storeConfigData {
        # eslint-disable-next-line @graphql-eslint/require-id-when-available
        storeConfig {
            store_code
            copyright
            column_1_title
            column_2_title
            column_3_title
            column_4_title
            column_1
            column_2
            column_3
            column_4
            column_1_links
            column_2_links
            column_3_links
        }
    }
`;

export default {
    getFooterQuery: GET_FOOTER
};
