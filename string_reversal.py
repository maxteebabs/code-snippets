def reverseString(str: str):
    splitted_str = list(str)
    last_index = len(splitted_str) -1
    stack = []
    while(last_index >= 0):
        stack.append(splitted_str[last_index])
        last_index = last_index - 1
    return "".join(stack)

def reverseString1(str:str):
    splitted_str = list(str)
    i = 0
    j = len(splitted_str) -1
    while(i < j):
        temp = splitted_str[i]
        splitted_str[i] = splitted_str[j]
        splitted_str[j] = temp
        i = i + 1
        j = j - 1
    return "".join(splitted_str)
result = reverseString1("my world")
print(result)


function reverseStringWithRecursion(str) {
  if(str.length === 0) return '';
  return reverseStringWithRecursion(str.slice(1)) + str.slice(0, 1);;
}

console.log('reverse string', reverseStringWithRecursion('hello'));
