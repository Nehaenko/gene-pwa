import { gql } from '@apollo/client';

export const GET_USP = gql`
    query storeConfigData {
        # eslint-disable-next-line @graphql-eslint/require-id-when-available
        storeConfig {
            store_code
            header_usp_1
            header_usp_1_link
            header_usp_2
            header_usp_2_link
            header_usp_3
            header_usp_3_link
            header_usp_4
            header_usp_4_link
        }
    }
`;

export default {
    getUspQuery: GET_USP
};
