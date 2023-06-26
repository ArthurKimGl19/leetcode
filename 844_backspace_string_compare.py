class Solution:
    def stringAnalyzer(self, string: str, storage: list) -> list:
        for i in range(len(string)):
            if string[i] == "#" and len(storage) > 0:
                storage.pop()
            elif string[i] != "#":
                storage.append(string[i])
        return storage

    def backspaceCompare(self, s: str, t: str) -> bool:
        storageS = self.stringAnalyzer(s, [])
        storageT = self.stringAnalyzer(t, [])

        newS = ''.join(storageS)
        newT = ''.join(storageT)

        print(newS)
        print(newT)

        if newS != newT:
            return False
        else:
            return True
