import { useQuery } from '@apollo/client';

import mergeOperations from '@magento/peregrine/lib/util/shallowMerge';

import DEFAULT_OPERATIONS from './cookie.gql';

/**
 *
 * @param {*} props.operations GraphQL operations used by talons
 */
export const useCookie = (props = {}) => {
    const operations = mergeOperations(DEFAULT_OPERATIONS, props.operations);
    const { getCookieQuery } = operations;
    const { data } = useQuery(getCookieQuery);

    return {
        data: data && data.storeConfig
    };
};
