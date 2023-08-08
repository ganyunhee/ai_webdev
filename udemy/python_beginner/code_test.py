# sep, end

print("List", "Tuple", "Set", sep=" VS ")
print(1, 2, sep=" and ")
print("A", 1, "B", 2, sep="-")

print("A", "B", sep="")
print("A", "B", sep=" ")
print("A", "B", sep=None)

chars = ["one", "two"]
print(chars[0], chars[1], sep="")

nums = ["1", "20", "300"]
print(nums[0], nums[1], nums[2], sep=", ")

print("What do you want? " + "Apple", "Orange", "Strawberry", sep = " or ", end = "?")
print("A", "B", sep=" or ", end="?")

print("")

print("What do you want?\n " + "Apple", "Orange", "Strawberry", sep = " or ", end = "?\n")
print("A", "B", sep=" or ", end="?")

print("")

print("Hello " + "Where", "are", "you", sep=".")


# ljust, rjust
menu = {"Hamburger" : 5000, "Soda" : 1000, "Fries" : 2000}
for item, price in menu.items():
    print(item.ljust(10), str(price).rjust(10))


# zfill    
for num in range(0, 6):
    print("Queue # ", str(num).zfill(5))

# format
print("Salary: {:,} USD" .format(1000000))
print("Property: {:+,} USD" .format(-1000000))
print("{:>5}" .format(10))
print("{:<5}" .format(10))
print("{:*>5}" .format(10))
print("{:-<5}" .format(10))



# Tuple
tuple1 = 2, 4, 6, 8
tuple2 = ('W', 'X', 'Y', 'Z')

new_tuple = tuple1 + tuple2
print(new_tuple)

print(tuple1*3)


# Dictionary

list1 = ['a','b','c','d']
tuple1 = 1,2,3,4

dictionary1 = {}.fromkeys(list1)
dictionary2 = {}.fromkeys(list1, 1)
dictionary3 = {}.fromkeys(tuple1)
dictionary4 = {}.fromkeys(tuple1, 1)

print(dictionary1)
print(dictionary2)
print(dictionary3)
print(dictionary4)

# Function and lambda

def add(a,b):
    return a+b

print(add(2, 4))

add_lambda = lambda a, b : a+b
print(add_lambda(2, 4))

list1 = [lambda a,b :a+b, lambda a,b : a/b]
print(list1[0](2, 4))
print(list1[1](2, 4))