import unittest
from app import main


class Test(unittest.TestCase):
    def test_retval(self):
        self.assertEqual(main(), None)


if __name__ == '__main__':
    unittest.main()
