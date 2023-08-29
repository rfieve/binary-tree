import { findLte, makeFindLte } from '../functions/find-lte';
import { compare, mockedUnbalancedTree } from './_mocks';

describe('findLte', () => {
    it('should findLte all nodes which are lesser or equal than the element', () => {
        const results = findLte(mockedUnbalancedTree, compare, 13);
        const mapped = results.map(({ node }) => node?.data);
        expect(mapped).toEqual([10, 2, 5, 13]);
    });

    it('should not findLte a node in an empty tree', () => {
        const results = findLte({}, compare, 13);
        const mapped = results.map(({ node }) => node?.data);
        expect(mapped).toEqual([]);
    });
});

describe('makeFindLte', () => {
    const boundFindLte = makeFindLte(compare);

    it('should findLte all nodes which are lesser or equal than the element', () => {
        const results = boundFindLte(mockedUnbalancedTree, 13);
        const mapped = results.map(({ node }) => node?.data);
        expect(mapped).toEqual([10, 2, 5, 13]);
    });

    it('should not findLte a node in an empty tree', () => {
        const results = boundFindLte({}, 13);
        const mapped = results.map(({ node }) => node?.data);
        expect(mapped).toEqual([]);
    });
});