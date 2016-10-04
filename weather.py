from bs4 import BeautifulSoup
import urllib2
import urllib


html_doc = "<html><head><title>The machine and smoke</title></head><body><p>The functioning parts of machinery</p></body></html>"

soup = BeautifulSoup('https://7273627d.dataplicity.io', 'html.parser')

print(soup.prettify())

t = soup.title.text

print(t)
print(soup.p)

query_args = { 'RPI' : 'Active' }

url = 'https://7273627d.dataplicity.io'

data = urllib.urlencode(query_args)

request = urllib2.Request(url, data)

response = urllib2.urlopen(request).read()

