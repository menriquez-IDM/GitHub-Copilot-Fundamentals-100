def hello():
    return "Hello, World!"

def goodbye():
    return "Goodbye, World!"

def prime(n):
    if n <= 1:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

def quadratic(a, b, c):
    d = b**2 - 4*a*c
    if d > 0:
        return (-b + math.sqrt(d)) / (2*a), (-b - math.sqrt(d)) / (2*a)
    elif d == 0:
        return (-b + math.sqrt(d)) / (2*a)
    else:
        return "No real roots"
