import { isBranch } from 'src/functions/is-branch';
import { BinaryTree, BinaryTreeNode, CompareFunction } from 'src/types';

/**
 * Finds a given node into the given binary tree with the given compare function.
 *
 * @param tree The source binary tree
 * @param compareFn The function used to determine the order of the elements.
 *  Its first argument is the current element.
 *  Its second argument is the parent element.
 *  Its return value can be negative, zero or positive:
 *
 *  => Negative : the current element should be found as min node of its parent
 *
 *  => Positive : the current element should be found as max node of its parent
 *
 *  => Zero     : the current element should be found as max node of its parent
 * @param node The node to be found
 * @returns The new binary tree
 */
export function findNode<T>(
    tree: BinaryTree<T>,
    compareFn: CompareFunction<T>,
    node: T
): BinaryTree<T> | undefined {
    if (tree.data === node) {
        return tree;
    }

    if (!isBranch(tree)) {
        return undefined;
    }

    const comparison = compareFn(node, tree.data);
    const direction = comparison < 0 ? 'min' : 'max';
    const subTree = tree[direction] as BinaryTreeNode<T>;

    return findNode(subTree, compareFn, node);
}

/**
 * Creates an findNode function for the given binary tree with the given compare function.
 *
 * @param tree The source binary tree
 * @param compareFn The function used to determine the order of the elements.
 *  Its first argument is the current element.
 *  Its second argument is the parent element.
 *  Its return value can be negative, zero or positive:
 *
 *  => Negative : the current element should be found as min node of its parent
 *
 *  => Positive : the current element should be found as max node of its parent
 *
 *  => Zero     : the current element should be found as max node of its parent
 *
 * @returns The bound findNode function
 */
export function makeFindNode<T>(tree: BinaryTree<T>, compareFn: CompareFunction<T>) {
    return function (node: T) {
        return findNode(tree, compareFn, node);
    };
}