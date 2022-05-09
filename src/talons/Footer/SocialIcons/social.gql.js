import { gql } from '@apollo/client';

export const GET_SOCIAL_ICONS = gql`
    query storeConfigData {
        # eslint-disable-next-line @graphql-eslint/require-id-when-available
        storeConfig {
            store_code
            facebook
            twitter
            instagram
            pinterest
            youtube
            vimeo
        }
    }
`;

export default {
    getSocialIconsQuery: GET_SOCIAL_ICONS
};
