class Solution:
    def isValid(self, s: str) -> bool:
      storage = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
      }
      queue = []
      for i in range(len(s)):
        if s[i] in storage:
          queue.append(storage[s[i]])
        else:
          if len(queue) == 0 or queue.pop() != s[i]:
            return False
      if len(queue) > 0:
        return False
      else:
        return True

#Time Complexity O(n), Space Complexity O(n)