import { useQuery } from '@apollo/client';

import mergeOperations from '@magento/peregrine/lib/util/shallowMerge';

import DEFAULT_OPERATIONS from './social.gql';

/**
 *
 * @param {*} props.operations GraphQL operations used by talons
 */
export const useSocial = (props = {}) => {
    const operations = mergeOperations(DEFAULT_OPERATIONS, props.operations);
    const { getSocialIconsQuery } = operations;
    const { data } = useQuery(getSocialIconsQuery);

    return {
        data: data && data.storeConfig
    };
};
