def sum67(nums):
    sum = 0
    i = 0
    fl = False

    for i in range(len(nums)):
        if fl == True:
            if nums[i] != 7:
                continue
            else:
                fl = False
        else:
            if nums[i] == 6:
                fl = True
            else:
                sum += nums[i]
    
    return sum
            