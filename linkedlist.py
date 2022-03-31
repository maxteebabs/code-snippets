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
            
    def reverse(self):
        temp = self.head
        prev = None
        next = None
        while(temp != None):
            next = temp.next
            temp.next = prev
            prev = temp
            temp = next
        self.head = prev
    
    def recurseReverse(self, n: Node):
        if(n.next == None):
            self.head = n
            return;
        self.recurseReverse(n.next)
        q = n.next
        print(q)
        if(q):
            q.next = n
        n.next = None
        

    def retrieve(self):
        temp = self.head
        while(temp != None):
            print("answer:", temp.data)
            temp = temp.next
        print(temp)
        
def main():
    myList = LinkedList()
    for number in [2,4,5, 6]:
        myList.insertAtBeginning(number)
    # myList.insertAtMiddle(3, 2)
    myList.recurseReverse(myList.head)
    myList.retrieve()

main()
