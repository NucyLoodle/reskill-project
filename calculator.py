class Calculator():
    def add(self, *args):
        sum = 0;
        for n in args:
            sum = sum + n;
        return sum

    def subtract(self, x, y):
        return x - y

    def multiply(self, x, y):
        return x * y

    def divide(self, x, y):
        if y == 0:
            return None
        else:
            return x / y


calculator = Calculator()

print(calculator.add(7,5,9))
