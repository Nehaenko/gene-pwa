import { useQuery } from '@apollo/client';
import mergeOperations from '@magento/peregrine/lib/util/shallowMerge';
import DEFAULT_OPERATIONS from './usp.gql';

/**
 *
 * @param {*} props.operations GraphQL operations used by talons
 */
export const useUsp = (props = {}) => {
    const operations = mergeOperations(DEFAULT_OPERATIONS, props.operations);
    const { getUspQuery } = operations;
    const { data } = useQuery(getUspQuery);

    return {
        data: data && data.storeConfig
    };
};
