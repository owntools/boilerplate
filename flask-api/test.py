import os
import requests
import unittest

API_URL = os.getenv('API_URL')
if not API_URL:
    raise ValueError(f'invalid API_URL: {API_URL}. check env vars.')


class Test(unittest.TestCase):
    def test_response(self):
        response = requests.get(API_URL)
        self.assertEqual(response.text, 'hello world')


if __name__ == '__main__':
    unittest.main()
