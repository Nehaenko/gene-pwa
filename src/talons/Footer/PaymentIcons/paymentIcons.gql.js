import { gql } from '@apollo/client';

export const GET_PAYMENT_ICONS = gql`
    query storeConfigData {
        # eslint-disable-next-line @graphql-eslint/require-id-when-available
        storeConfig {
            store_code
            maestro
            visa
            mastercard
            paypal
        }
    }
`;

export default {
    getPaymentIconsQuery: GET_PAYMENT_ICONS
};
