test_string = "[({})[]]"

class Stack:
    def __init__(self):
        self.items = []
        
    def push(self, data):
        self.items.append(data)
            
    def pop(self):
        last_index = len(self.items) - 1
        last_item = self.items.pop(last_index)
        return last_item
    
    def isEmpty(self):
        return True if len(self.items) == 0 else False
        
def isLeftBracket(bracket: str):
    return True if bracket in "{[(" else False
    
def reverseBracket(bracket):
    if(bracket == "]"): return "["
    if(bracket == ")"): return "("
    if(bracket == "}"): return "{"
    return ""
    
def isValidBracket(bracket_string):
    s = Stack()
    for bracket in bracket_string:
        reverse = reverseBracket(bracket)
        if(isLeftBracket(bracket)):
            s.push(bracket)
        elif(s.isEmpty() or s.pop() != reverse):
            return False
    return s.isEmpty()
    
v = isValidBracket(test_string)
print(v)
