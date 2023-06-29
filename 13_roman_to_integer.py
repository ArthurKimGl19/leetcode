class Solution:
    def romanToInt(self, s: str) -> int:
        storage = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000,
            'IV': 4,
            'IX': 9,
            'XL': 40,
            'XC': 90,
            'CD': 400,
            'CM': 900
        }

        output = 0
        counter = 0

        while counter < len(s):
            if s[counter] == "I" or s[counter] == "X" or s[counter] == "C":
                if counter + 1 < len(s):
                    currentRoman = s[counter] + s[counter+1]
                    if currentRoman in storage:
                        output += storage[currentRoman]
                        counter += 2
                    else:
                        output += storage[s[counter]]
                        counter += 1
                else:
                    output += storage[s[counter]]
                    counter += 1
            else:
                output += storage[s[counter]]
                counter += 1
        return output