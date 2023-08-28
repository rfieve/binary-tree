import {
    mockedArrayOrdered,
    mockedArrayReversed,
    mockedUnbalancedTree,
} from 'src/__tests__/_mocks';
import {
    toArrayInOrder,
    toArrayInOrderReverse,
    toArrayTopDown,
    toArrayTopDownReverse,
} from 'src/functions/to-array';

describe('toArrayInOrder', () => {
    it('should convert binary search tree to an array correctly', () => {
        expect(toArrayInOrder(mockedUnbalancedTree)).toEqual(mockedArrayOrdered);
    });
});

describe('toArrayInOrderReverse', () => {
    it('should convert binary search tree to an array correctly', () => {
        expect(toArrayInOrderReverse(mockedUnbalancedTree)).toEqual(mockedArrayReversed);
    });
});

describe('toArrayTopDown', () => {
    it('should convert binary search tree to an array correctly', () => {
        expect(toArrayTopDown(mockedUnbalancedTree)).toEqual([10, 2, 32, 5, 13, 89, 50]);
    });
});

describe('toArrayTopDownReverse', () => {
    it('should convert binary search tree to an array correctly', () => {
        expect(toArrayTopDownReverse(mockedUnbalancedTree)).toEqual([10, 32, 2, 89, 13, 5, 50]);
    });
});
