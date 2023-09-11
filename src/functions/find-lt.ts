import { makeFindManyFromTraversal } from '../helpers/make-find-many-from-traversal';
import { makeFindManyTraversal } from '../helpers/make-find-many-traversal';
import { BST, CompareFunction } from '../types';

const traverseLt = makeFindManyTraversal({
    shouldFindCurrent : (comparison: number) => comparison > 0,
    shouldLookLeft    : (_comparison: number) => true,
    shouldLookRight   : (comparison: number) => comparison > 0,
});

/**
 * Finds all nodes lesser than given element into the given binary search tree with the given compare function.
 * @param tree The source binary search tree
 * @param {CompareFunction} compare
 * @param element The element to be found
 * @returns The found result. { node: the found node, path:; the path to access it}
 */
export const findLt = makeFindManyFromTraversal(traverseLt);

/**
 * Creates an find lesser function for the given binary search tree with the given compare function.
 * @param {CompareFunction} compare
 * @returns The bound find function
 */
export function makeFindLt<T>(compare: CompareFunction<T>) {
    return function (tree: BST<T>, element: T) {
        return findLt(tree, compare, element);
    };
}
