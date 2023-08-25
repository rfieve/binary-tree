import { BST } from 'src/types';

/**
 * Traverses the tree from left to right.
 *
 * @param cb the callback invoked uppon each node
 * @param tree the tree to traverse
 */
export function traverseInOrder<T>(
    cb: (node: BST<T>) => void,
    tree?: BST<T>
): void {
    if (tree?.data) {
        traverseInOrder(cb, tree.left);
        cb(tree);
        traverseInOrder(cb, tree.right);
    }
}
