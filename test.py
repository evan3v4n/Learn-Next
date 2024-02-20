def moveNums(nums):
    i, j = 0, 0 
    newList = nums
    while i < len(newList) and j < len(newList):
        print(newList)
        print(newList[i])
        print(newList[j])
        print("\n")
        if newList[i] == 0 and newList[j] != 0:
            newList[i] = newList[j]
            newList[j] = 0
            print(f"swapped newList is {newList}")
            i += 1
        elif newList[j] == 0:
            j += 1
        elif newList[i] != 0:
            i += 1
    return newList

print(moveNums([0,1,0,3,12]))