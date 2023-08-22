import { BinaryTree, BinaryTreeNode, CompareFunction } from 'src/types';

/**
 * Add a given node to the given binary tree with the given compare function.
 *
 * @param tree The source binary tree
 * @param compareFn The function used to determine the order of the elements.
 *  Its first argument is the current element.
 *  Its second argument is the parent element.
 *  Its return value can be negative, zero or positive:
 *
 *  => Negative : the current element should be placed as left node of its parent
 *
 *  => Positive : the current element should be placed as right node of its parent
 *
 *  => Zero     : the current element should be placed as right node of its parent
 * @param node The node to be added
 * @returns The new binary tree
 */
export function addNode<T>(
    tree: BinaryTree<T>,
    compareFn: CompareFunction<T>,
    node: T
): BinaryTree<T> {
    if (!tree.data) {
        return { data: node } as BinaryTreeNode<T>;
    }

    const comparison = compareFn(node, tree.data);

    if (comparison === 0) {
        return tree;
    }

    const direction = comparison < 0 ? 'left' : 'right';
    const subTree = tree[direction];

    return {
        ...tree,
        [direction] : subTree ? addNode(subTree, compareFn, node) : { data: node },
    };
}

/**
 * Creates an addNode function for the given binary tree with the given compare function.
 *
 * @param tree The source binary tree
 * @param compareFn The function used to determine the order of the elements.
 *  Its first argument is the current element.
 *  Its second argument is the parent element.
 *  Its return value can be negative, zero or positive:
 *
 *  => Negative : the current element should be placed as left node of its parent
 *
 *  => Positive : the current element should be placed as right node of its parent
 *
 *  => Zero     : the current element should be placed as right node of its parent
 *
 * @returns The bound addNode function
 */
export function makeAddNode<T>(tree: BinaryTree<T>, compareFn: CompareFunction<T>) {
    return function (node: T) {
        return addNode(tree, compareFn, node);
    };
}
