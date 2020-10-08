def run(badNumbers, lower, upper):
  collection = []
  newLower = 0
  for num in range(lower, upper + 1):
      if num in badNumbers:
        l = lower if newLower == 0 else newLower
        diff = (num - 1) - l
        collection.append(diff)
        newLower = num + 1
  print(collection)

numbers=[37, 7, 15, 49, 60]
run(numbers,3, 48)
