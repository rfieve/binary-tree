import { BST, CompareFunction, FoundResult } from '../types';
import { makeCollectFoundResult } from './collect';

export function makeFindManyFromTraversal<T>(
    traverse: (
        cb: (result: FoundResult<T>) => void,
        tree: BST<T>,
        compare: CompareFunction<T>,
        element: T
    ) => void
) {
    return function findMany(
        tree: BST<T>,
        compare: CompareFunction<T>,
        element: T
    ): FoundResult<T>[] {
        const results: FoundResult<T>[] = [],
              collectFoundResult = makeCollectFoundResult(results);

        traverse(collectFoundResult, tree, compare, element);

        return results;
    };
}
