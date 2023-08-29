import { hasLeft } from '../functions/has-left';
import { hasRight } from '../functions/has-right';
import { BST, CompareFunction, Direction, FoundResult } from '../types';

type FindManyTraversalOptions = {
    shouldFindCurrent : (comp: number) => boolean;
    shouldLookLeft    : (comp: number) => boolean;
    shouldLookRight   : (comp: number) => boolean;
};

export function makeFindManyTraversal({
    shouldFindCurrent,
    shouldLookLeft,
    shouldLookRight,
}: FindManyTraversalOptions) {
    return function traverse<T>(
        cb: (result: FoundResult<T>) => void,
        tree: BST<T>,
        compare: CompareFunction<T>,
        element: T,
        path = [] as Direction[]
    ): void {
        if (tree.data === undefined) {
            return undefined;
        }

        const comparison = compare(element, tree.data);

        if (shouldFindCurrent(comparison)) {
            cb({ node: tree, path });
        }

        if (hasLeft(tree) && shouldLookLeft(comparison)) {
            traverse(cb, tree.left, compare, element, path.slice().concat(Direction.Left));
        }

        if (hasRight(tree) && shouldLookRight(comparison)) {
            traverse(cb, tree.right, compare, element, path.slice().concat(Direction.Right));
        }
    };
}
