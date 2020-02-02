import os
import requests
import unittest

API_HOST = os.getenv('API_HOST')
API_PORT = os.getenv('API_PORT')
API_URL = f'http://{API_HOST}:{API_PORT}/'


class Test(unittest.TestCase):
    def test_response(self):
        response = requests.get(API_URL)
        self.assertEqual(response.text, 'hello world')


if __name__ == '__main__':
    unittest.main()
