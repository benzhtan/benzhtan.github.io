from bs4 import BeautifulSoup
import requests

# API_KEY= Your API key
# TOPIC="'nuclear energy'" # keyword(s)

# url = "https://www.nytimes.com/search?dropmab=false&endDate=2020-12-31&query=%22nuclear%20power%22%20and%20electricity&sort=newest&startDate=2020-01-01&types=article"

response = requests.get('http://www.nytimes.com')
doc = BeautifulSoup(response.text, 'html.parser')

story = doc.find_all('article', { 'class': 'story' })
for story in story[:10]:
    print("This is a story")
    print(story.text)