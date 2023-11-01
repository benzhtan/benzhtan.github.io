from requests_html import HTMLSession()

session = HTMLSession()
url = "https://www.nytimes.com/search?dropmab=false&endDate=2020-12-31&query=%22nuclear%20power%22%20and%20electricity&sort=newest&startDate=2020-01-01&types=article"

r = session.get(url)
