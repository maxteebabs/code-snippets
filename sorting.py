numbers =[36,32,74,2,9,4,10,3]
# def bubbleSort(array):
#     swapped = False
#     for i in range(len(array)-1,0,-1):
#         for j in range(i):
#             if array[j]>array[j+1]:
#                 array[j], array[j+1] = array[j+1], array[j]
#                 swapped= True
#         if swapped:
#             swapped=False
#         else:
#             break
#     return array

def partition(a, low, high):
    pIndex = low
    pivot = a[high]
    index_numbers = range(low, high+1)
    for num in index_numbers:
        if(a[num] < pivot):
            # a[num], a[pIndex] = a[pIndex], a[num]
            temp = a[num]
            a[num] = a[pIndex]
            a[pIndex] = temp
            pIndex = pIndex + 1
    a[pIndex], a[high] = a[high], a[pIndex]
    return pIndex
    
def quickSort(a, low, high):
    if low < high:
        pIndex = partition(a, low, high)
        quickSort(a, pIndex+1, high)
        quickSort(a, low, pIndex-1)

quickSort(numbers, 0, len(numbers) - 1)    

arr = [2, 8, 76, 9,43, 2, 0, 8,11, 3,7,9, 2]
import math
def mergeSort(arr):
    size = len(arr)
    if(size < 2):
        return
    mid = math.floor(size/ 2)
    leftArr = arr[0:mid]
    rightArr = arr[mid:]
    
    mergeSort(leftArr)
    mergeSort(rightArr)
    l = r = k =0
    while(l < len(leftArr) and r <  len(rightArr)):
        if leftArr[l] < rightArr[r]:
            arr[k] = leftArr[l]
            l = l + 1
            k = k+ 1
        else:
            arr[k] = rightArr[r]
            r = r+1
            k = k+1
    while(l < len(leftArr)):
        arr[k] = leftArr[l]
        l = l+ 1
        k = k+1
    while(r < len(rightArr)):
        arr[k] = rightArr[r]
        r = r+1
        k = k+1
    

# mergeSort(arr)
print(arr)
print(numbers)

