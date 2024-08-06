class Calculator():
    def add(self, *args):
        return sum(args)

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