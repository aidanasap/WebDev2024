def count_evens(nums):
    nums = list(map(lambda x: x % 2 == 0, nums))
    return nums.count(True)

print(count_evens([2, 1, 2, 3, 4]))