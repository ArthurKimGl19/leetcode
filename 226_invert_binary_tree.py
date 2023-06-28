class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if root is None:
            return root
        
        left = root.left
        right = root.right

        root.right = left
        root.left = right

        self.invertTree(root.right)
        self.invertTree(root.left)
        return root