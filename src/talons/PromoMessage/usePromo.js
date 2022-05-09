import { useQuery } from '@apollo/client';
import mergeOperations from '@magento/peregrine/lib/util/shallowMerge';
import DEFAULT_OPERATIONS from './promo.gql';

/**
 *
 * @param {*} props.operations GraphQL operations used by talons
 */
export const usePromo = (props = {}) => {
    const operations = mergeOperations(DEFAULT_OPERATIONS, props.operations);

    const { data } = useQuery(operations.getPromoQuery, {
        fetchPolicy: 'cache-and-network'
    });

    const config = data ? data.getPromoQuery : null;
    const storeConfig = data ? data.storeConfig : null;

    return {
        config,
        storeConfig
    };
};
