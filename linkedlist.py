class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        
class LinkedList:
    def __init__(self):
        self.head = None
        
    def insertAtBeginning(self, data):
        node = Node(data)
        temp = self.head
        if(self.head == None):
            self.head = node
            return
        node.next = temp
        self.head = node
            
    def insertAtEnd(self, data):
        node = Node(data)
        if(self.head == None):
            self.head = node
            return
        temp = self.head
        while(temp.next != None):
            temp = temp.next
        temp.next = node
    
    def insertAtMiddle(self, data, pos):
        node = Node(data)
        current = self.head
        prev = None
        next = None
        while(current != None):
            if(current.data == pos):
                next = prev.next
                prev.next = node
                node.next = next
            prev = current
            current = current.next
    
    def retrieve(self):
        temp = self.head
        while(temp != None):
            print("answer:", temp.data)
            temp = temp.next
        print(temp)
        
def main():
    myList = LinkedList()
    for number in [2,4, 6]:
        myList.insertAtBeginning(number)
    myList.insertAtMiddle(3, 2)
    myList.retrieve()

main()
