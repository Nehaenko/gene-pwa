import { gql } from '@apollo/client';

export const GET_PROMO = gql`
    query storeConfigData {
        # eslint-disable-next-line @graphql-eslint/require-id-when-available
        storeConfig {
            store_code
            header_promotion
            header_promotion_mobile
        }
    }
`;

export default {
    getPromoQuery: GET_PROMO
};
