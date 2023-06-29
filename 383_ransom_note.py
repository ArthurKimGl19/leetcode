class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
      storage = {}

      for i in range(len(magazine)):
        currentLetter = magazine[i]
        if currentLetter not in storage:
          storage[currentLetter] = 1
        else:
          storage[currentLetter] += 1
      
      for j in range(len(ransomNote)):
        currentLetter = ransomNote[j]
        if currentLetter not in storage:
          return False
        else:
          if storage[currentLetter] > 1:
            storage[currentLetter] -= 1
          else:
            del storage[currentLetter]

      return True

# Time Complexity O(n) Space Complexity O(n)