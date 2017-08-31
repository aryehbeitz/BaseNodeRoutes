Basic NodeJS Application with routes

Install Dependencies using `yarn` or `npm i`

Run server using `npm start`

Navigate to localhost:3000 to see default route.

Navigate to localhost:3000/joke to see a Chuck Norris joke

### Api Documentation

1. Get Stock News (single stock or seperated by commas).

```
GET /v1/news/NASDAQ:AAPL,NASDAQ:TWTR
```

Expected Result

```json
{
    "NASDAQ:AAPL": [
      {
        "id": "52778621773856",
        "symbol": "NASDAQ:AAPL",
        "title": "After Apple Inc. dodged the iPhone 6 Plus BendGate bullet, detractors wounded ...",
        "description": "After Apple Inc. dodged the iPhone 6 Plus BendGate bullet, detractors wounded ...\n Apple Insider - Sep 27, 2014 \nWith new, larger iPhone 6 models now hitting the market, one Samsung executive reportedly acknowledged that \"the positive reaction from consumers to those two Apple devices\" forced the company to rush its Note 4 launch ahead of schedule, adding \"it's ...\nWill Apple's 'Bendgate' Give Samsung, BlackBerry An Opening? - Seeking Alpha (registration)",
        "summary": "After Apple Inc. dodged the iPhone 6 Plus BendGate bullet, detractors wounded ...\n Apple Insider - Sep 27, 2014 \nWith new, larger iPhone 6 models now hitting the market, one Samsung executive reportedly acknowledged that \"the positive reaction from consumers to those two Apple devices\" forced the company to rush its Note 4 launch ahead of schedule, adding \"it's ...\nWill Apple's 'Bendgate' Give Samsung, BlackBerry An Opening? - Seeking Alpha (registration)",
        "date": "2014-09-27T06:23:41.000Z",
        "link": "http://appleinsider.com/articles/14/09/27/after-apple-inc-dodged-the-iphone-6-plus-bendgate-bullet-detractors-wounded-by-ricochet"
      },
      {
        "id": "//www.fool.com/investing/general/2014/10/01/the-death-of-apple-incs-i.aspx",
        "symbol": "NASDAQ:AAPL",
        "title": "The Death of Apple, Inc's \"i\" Branding",
        "description": "The Death of Apple, Inc's \"i\" Branding\n Motley Fool - 29 minutes ago \nIn a recent blog post, he notes that neither of the two new products Apple unveiled earlier this month carried the iBranding, with the company instead opting for \"Apple Pay \"and \"Apple Watch.\" Segall believes that the only explanation for this is that ...",
        "summary": "The Death of Apple, Inc's \"i\" Branding\n Motley Fool - 29 minutes ago \nIn a recent blog post, he notes that neither of the two new products Apple unveiled earlier this month carried the iBranding, with the company instead opting for \"Apple Pay \"and \"Apple Watch.\" Segall believes that the only explanation for this is that ...",
        "date": "2014-10-01T21:45:00.000Z",
        "link": "http://www.fool.com/investing/general/2014/10/01/the-death-of-apple-incs-i.aspx"
      }
    ],
    "NYSE:TWTR": [
      {
        "id": "//www.benzinga.com/tech/14/09/4854209/why-is-twitter-inc-borrowing-more-money",
        "symbol": "NYSE:TWTR",
        "title": "Why Is Twitter Inc Borrowing More Money?",
        "description": "Why Is Twitter Inc Borrowing More Money?\n Benzinga - Sep 16, 2014 \nTwitter Inc (NYSE: TWTR) is borrowing $1.5 billion to expand the business, but is it wise for the company to take on new debt?",
        "summary": "Why Is Twitter Inc Borrowing More Money?\n Benzinga - Sep 16, 2014 \nTwitter Inc (NYSE: TWTR) is borrowing $1.5 billion to expand the business, but is it wise for the company to take on new debt?",
        "date": "2014-09-16T21:22:30.000Z",
        "link": "http://www.benzinga.com/tech/14/09/4854209/why-is-twitter-inc-borrowing-more-money"
      },
      {
        "id": "52778622630300",
        "symbol": "NYSE:TWTR",
        "title": "Making Twitter Inc (TWTR) A Friendly Place",
        "description": "Making Twitter Inc (TWTR) A Friendly Place\n ETF Daily News - 5 hours ago \ntwitter Discussing the problems Twitter Inc (NYSE:TWTR) faces within the social media network, with author of “Hatching Twitter” Nick Bilton.\nDrama at Twitter Inc (TWTR) Has Subsided Under The New Management: Nick ... - Insider Monkey (blog)",
        "summary": "Making Twitter Inc (TWTR) A Friendly Place\n ETF Daily News - 5 hours ago \ntwitter Discussing the problems Twitter Inc (NYSE:TWTR) faces within the social media network, with author of “Hatching Twitter” Nick Bilton.\nDrama at Twitter Inc (TWTR) Has Subsided Under The New Management: Nick ... - Insider Monkey (blog)",
        "date": "2014-10-01T16:18:45.000Z",
        "link": "http://etfdailynews.com/2014/10/01/making-twitter-inc-twtr-a-friendly-place/"
      }
    ]
  }
```


2. Historical Data for single stock (in format: symbol(s)/start_date/end_date, with date in YYYY-MM-DD format).

```
GET /v1/historical/NASDAQ:AAPL,NASDAQ:AIG/2014-01-02/2014-01-03
```

Yields Response:

```json
[
    {
      "date": "2014-01-02T05:00:00.000Z",
      "open": 79.38,
      "high": 79.58,
      "low": 78.86,
      "close": 79.02,
      "volume": 58791957,
      "symbol": "NASDAQ:AAPL"
    },
    {
      "date": "2014-01-03T04:00:00.000Z",
      "open": 100.59,
      "high": 100.69,
      "low": 98.7,
      "close": 99.18,
      "volume": 51304344,
      "symbol": "NASDAQ:AAPL"
    }
  ]
```
