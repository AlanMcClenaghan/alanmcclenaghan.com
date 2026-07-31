#! /usr/bin/python

print 'Content-type: text/html'
print ''
print 'Hello World!'
print('Hello World!')

age = 45
print age

pi = 3.14

print pi

name = "Alan"

print name

print age / pi

number = "5"

print number * age

print int(number)
print float(number)

print int(number) * pi

str = "My name is "

print str[0]

print str[0:5]

print str[5]

print str + name

myList = ["Alan", "Ruth", "Matthew", "Lucy"]

print myList
print myList[1]
print myList[2:4]


#A tuple is a ready-only array
myTuple = (1,2,3,4)

print myTuple
print myTuple[2]

#A dictionary is a two-dimensional array

dict = {}
dict["dad"] = "Alan"
dict["mum"] = "Ruth"
dict["son"] = "Matthew"
dict["daughter"] = "Lucy"

print dict
print dict["mum"]
print dict.keys()
print dict.values()

for i in range(5, 11):
    print i

favourite_foods = ["pizza", "spaghetti bolognese", "burritos"]

for food in favourite_foods:
    print("I love " + food +".")

x = 10
while x >= 0:
    print x
    x -= 1
  
ages = {}
ages["Alan"] = 45
ages["Ruth"] = 45
ages["Matthew"] = 8
ages["Lucy"] = 5

for age in ages:
    print age
    print ages[age]
#    print age + " is " + str(ages[age])

if name == "Ruth" or name == "Alan":
    print "Hello " + name
else:
    print "I don't know you"

numberOfPrimes = 0
number = 2

while numberOfPrimes < 50:
    isPrime = True
    
    for i in range(2, number):
        if number % i == 0:
            isPrime = False
    if isPrime == True:
        print number
        numberOfPrimes += 1
        
    number += 1
    
def sayHello():
    print "Hello!"

sayHello()

def saySomething(something):
    print something

saySomething("Hi there!")

def multiplyTwoNumbers(x, y):
    return x * y
    
print multiplyTwoNumbers(5, 9)

def highestCommonFactor(lowNumber, highNumber):
    for number in range (1, lowNumber + 1):
        if lowNumber % number == 0 and highNumber % number == 0:
            hcf = number
    return hcf

print highestCommonFactor(5, 50)
print highestCommonFactor(6, 90)
print highestCommonFactor(9, 104)
print highestCommonFactor(5, 505)
print highestCommonFactor(3, 342)


a = 5
b = 6

def addTwoNumbers():
    a = 10
    c = 8
    return a + b

print a
print a + b
print addTwoNumbers()
print c


        