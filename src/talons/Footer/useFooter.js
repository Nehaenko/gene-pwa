import { useQuery } from '@apollo/client';

import mergeOperations from '@magento/peregrine/lib/util/shallowMerge';

import DEFAULT_OPERATIONS from './footer.gql';

/**
 *
 * @param {*} props.operations GraphQL operations used by talons
 */
export const useFooter = (props = {}) => {
    const operations = mergeOperations(DEFAULT_OPERATIONS, props.operations);
    const { getFooterQuery } = operations;
    const { data } = useQuery(getFooterQuery);

    return {
        data: data && data.storeConfig
    };
};
