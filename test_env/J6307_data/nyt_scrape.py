import requests
from bs4 import BeautifulSoup

response = requests.get('http://www.nytimes.com')
doc = BeautifulSoup(response.text, 'html.parser')
stories = doc.find_all('article', { 'class': 'story' })

for story in stories:
    headline = story.find(class_='story-heading')
    if not headline:
        continue
    print(headline.text.strip())
    link = story.find('a')
    print(link['href'])
    byline = story.find(class_='byline')
    if byline:
        print(byline.text)