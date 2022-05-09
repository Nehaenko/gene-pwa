import { useQuery } from '@apollo/client';

import mergeOperations from '@magento/peregrine/lib/util/shallowMerge';

import DEFAULT_OPERATIONS from './paymentIcons.gql';

/**
 *
 * @param {*} props.operations GraphQL operations used by talons
 */
export const usePaymentIcons = (props = {}) => {
    const operations = mergeOperations(DEFAULT_OPERATIONS, props.operations);
    const { getPaymentIconsQuery } = operations;
    const { data } = useQuery(getPaymentIconsQuery);

    return {
        data: data && data.storeConfig
    };
};
