class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) == 1 and len(t) == 1:
            if s[0] == t[0]:
                return True
            else:
                return False
        if len(s) != len(t):
            return False
        
        storage = {}

        for i in range(len(s)):
            letter = s[i]
            if letter in storage:
                storage[letter]+=1
            else:
                storage[letter]=1
        
        for i in range(len(t)):
            letter = t[i]
            if letter in storage and storage[letter] > 0:
                storage[letter]-=1
            else:
                return False
        
        return True