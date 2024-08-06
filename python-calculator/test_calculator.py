import unittest
from unittest import TestCase
from calculator import Calculator
calculator = Calculator()

class TestCalculator(TestCase):

    def test_add(self):
        result = calculator.add(3, 5)
        expected = 8
        self.assertEqual(expected, result)
    
    def test_subtract(self):
        result = calculator.subtract(8, 2)
        expected = 6
        self.assertEqual(expected,result)

    def test_multiply(self):
        result = calculator.multiply(3, 4)
        expected = 12
        self.assertEqual(expected, result)

    def test_divide(self):
        result = calculator.divide(10, 5)
        expected = 2
        self.assertEqual(expected, result)


if __name__ == '__main__':
    unittest.main()