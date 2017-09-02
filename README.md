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
      "guid": "tag:finance.google.com,cluster:52779592121217",
      "symbol": "NASDAQ:AAPL",
      "title": "Why Apple's Next Product Launch Will Be Its Biggest in Years",
      "description": "Why Apple's Next Product Launch Will Be Its Biggest in Years\n Inc.com - Aug 29, 2017 \nThe last time Apple made waves at its product keynote was in 2014, when it unveiled the iPhone 6 and its first Apple Watch. But after those products launched, Apple experienced a slump in sales for most of 2015 and 2016, prompting some to question howÂ ...\nApple hits record highs ahead of iPhone reveal - MarketWatch\nApple Inc (AAPL) CEO Timothy D Cook Sold $43.1 million of Shares - Nasdaq",
      "summary": "Why Apple's Next Product Launch Will Be Its Biggest in Years\n Inc.com - Aug 29, 2017 \nThe last time Apple made waves at its product keynote was in 2014, when it unveiled the iPhone 6 and its first Apple Watch. But after those products launched, Apple experienced a slump in sales for most of 2015 and 2016, prompting some to question howÂ ...\nApple hits record highs ahead of iPhone reveal - MarketWatch\nApple Inc (AAPL) CEO Timothy D Cook Sold $43.1 million of Shares - Nasdaq",
      "date": "2017-08-29T14:55:29.000Z",
      "link": "https://www.inc.com/emily-canal/apple-new-iphone-apple-watch-product-briefing-keynote.html"
    },
    {
      "guid": "tag:finance.google.com,cluster:http://investorplace.com/2017/08/apple-inc-aapl-has-to-do-something-about-itunes/",
      "symbol": "NASDAQ:AAPL",
      "title": "Apple Inc. (AAPL) Has to Do Something About iTunes",
      "description": "Apple Inc. (AAPL) Has to Do Something About iTunes\n Investorplace.com - Aug 29, 2017 \nWith iTunes and the rest of Apple's services business becoming increasingly important for driving AAPL stock higher, having a completely dysfunctional iTunes app is actually incomprehensible.",
      "summary": "Apple Inc. (AAPL) Has to Do Something About iTunes\n Investorplace.com - Aug 29, 2017 \nWith iTunes and the rest of Apple's services business becoming increasingly important for driving AAPL stock higher, having a completely dysfunctional iTunes app is actually incomprehensible.",
      "date": "2017-08-29T18:22:18.000Z",
      "link": "http://investorplace.com/2017/08/apple-inc-aapl-has-to-do-something-about-itunes/"
    },
    {
      "guid": "tag:finance.google.com,cluster:52779590497806",
      "symbol": "NASDAQ:AAPL",
      "title": "Apple, Inc.'s iPhone 8 Launch Event: What to Expect",
      "description": "Apple, Inc.'s iPhone 8 Launch Event: What to Expect\n Motley Fool - Aug 29, 2017 \nSet to take place at Apple's new Steve Jobs Theater, located on the campus of the tech giant's new headquarters, the Journal's sources said the event timing or location could be affected if construction of the new Steve Jobs theater doesn't finish on time.\nIs Apple Inc. (AAPL) Stock Setting Up a â€œSell the Newsâ€ Scenario? - Yahoo Finance\nWhy Apple Inc. Won't Ever Release an \"iPhone Pro\" - Madison.com",
      "summary": "Apple, Inc.'s iPhone 8 Launch Event: What to Expect\n Motley Fool - Aug 29, 2017 \nSet to take place at Apple's new Steve Jobs Theater, located on the campus of the tech giant's new headquarters, the Journal's sources said the event timing or location could be affected if construction of the new Steve Jobs theater doesn't finish on time.\nIs Apple Inc. (AAPL) Stock Setting Up a â€œSell the Newsâ€ Scenario? - Yahoo Finance\nWhy Apple Inc. Won't Ever Release an \"iPhone Pro\" - Madison.com",
      "date": "2017-08-29T21:22:30.000Z",
      "link": "https://www.fool.com/investing/2017/08/29/apple-incs-iphone-8-launch-event-what-to-expect.aspx"
    },
    {
      "guid": "tag:finance.google.com,cluster:52779592623144",
      "symbol": "NASDAQ:AAPL",
      "title": "Fibit Inc (FIT) Ionic vs. Apple Inc. (AAPL) Apple Watch: Which Is Best?",
      "description": "Fibit Inc (FIT) Ionic vs. Apple Inc. (AAPL) Apple Watch: Which Is Best?\n Investorplace.com - Aug 30, 2017 \nOne of the biggest battles of the holiday season is about to begin. Fitbit Inc (NYSE:FIT) has finally unveiled the Fitbit Ionic - the company's first smartwatch.",
      "summary": "Fibit Inc (FIT) Ionic vs. Apple Inc. (AAPL) Apple Watch: Which Is Best?\n Investorplace.com - Aug 30, 2017 \nOne of the biggest battles of the holiday season is about to begin. Fitbit Inc (NYSE:FIT) has finally unveiled the Fitbit Ionic - the company's first smartwatch.",
      "date": "2017-08-30T13:07:30.000Z",
      "link": "http://investorplace.com/2017/08/fibit-inc-fit-ionic-apple-inc-aapl-apple-watch-best/"
    },
    {
      "guid": "tag:finance.google.com,cluster:52779592571456",
      "symbol": "NASDAQ:AAPL",
      "title": "Expect Big Apple Inc. iPhone Unit Growth in 2018",
      "description": "Expect Big Apple Inc. iPhone Unit Growth in 2018\n Motley Fool - Aug 30, 2017 \nResearch firm IDC recently published its expectations around Apple (NASDAQ:AAPL) iPhone growth for both this year and the coming year.\nApple's new iPhone expected to lead to $180 billion in smartphone sales - MarketWatch\nIDC: Worldwide smartphone shipments will reach 1.7B in 2021 - Seeking Alpha",
      "summary": "Expect Big Apple Inc. iPhone Unit Growth in 2018\n Motley Fool - Aug 30, 2017 \nResearch firm IDC recently published its expectations around Apple (NASDAQ:AAPL) iPhone growth for both this year and the coming year.\nApple's new iPhone expected to lead to $180 billion in smartphone sales - MarketWatch\nIDC: Worldwide smartphone shipments will reach 1.7B in 2021 - Seeking Alpha",
      "date": "2017-08-30T15:45:00.000Z",
      "link": "https://www.fool.com/investing/2017/08/30/expect-big-apple-inc-iphone-unit-growth-in-2018.aspx"
    },
    {
      "guid": "tag:finance.google.com,cluster:52779593834904",
      "symbol": "NASDAQ:AAPL",
      "title": "Group of 17 Apple Auto Engineers Join Startup Zoox",
      "description": "Group of 17 Apple Auto Engineers Join Startup Zoox\n Bloomberg - Aug 30, 2017 \nA group of automotive engineers has left Apple Inc. for self-driving car startup Zoox Inc. after the world's most valuable technology company backed off plans to build its own vehicle, according to people familiar with the situation.\n17 Apple engineers jump to Menlo Park self-driving car startup - Silicon Valley Business Journal",
      "summary": "Group of 17 Apple Auto Engineers Join Startup Zoox\n Bloomberg - Aug 30, 2017 \nA group of automotive engineers has left Apple Inc. for self-driving car startup Zoox Inc. after the world's most valuable technology company backed off plans to build its own vehicle, according to people familiar with the situation.\n17 Apple engineers jump to Menlo Park self-driving car startup - Silicon Valley Business Journal",
      "date": "2017-08-30T18:00:00.000Z",
      "link": "https://www.bloomberg.com/news/articles/2017-08-30/group-of-17-apple-auto-engineers-is-said-to-join-startup-zoox"
    },
    {
      "guid": "tag:finance.google.com,cluster:52779593443489",
      "symbol": "NASDAQ:AAPL",
      "title": "Apple Inc. (AAPL) Will Use Employee Shuttles to Test Self-Driving Vehicles",
      "description": "Apple Inc. (AAPL) Will Use Employee Shuttles to Test Self-Driving Vehicles\n Investorplace.com - Aug 30, 2017 \nCupertino-based tech giant Apple Inc. (NASDAQ:AAPL) is gearing up to test its self-driving technology on the roads, assuming recent media reports are accurate.\nDrilling Down Into Apple Inc. (AAPL) - StockNewsJournal\nApple Inc. (NASDAQ:AAPL) Closed Over Its 50 Day Average - First News 24",
      "summary": "Apple Inc. (AAPL) Will Use Employee Shuttles to Test Self-Driving Vehicles\n Investorplace.com - Aug 30, 2017 \nCupertino-based tech giant Apple Inc. (NASDAQ:AAPL) is gearing up to test its self-driving technology on the roads, assuming recent media reports are accurate.\nDrilling Down Into Apple Inc. (AAPL) - StockNewsJournal\nApple Inc. (NASDAQ:AAPL) Closed Over Its 50 Day Average - First News 24",
      "date": "2017-08-30T18:22:30.000Z",
      "link": "http://investorplace.com/2017/08/apple-inc-aapl-will-use-employee-shuttles-test-self-driving-vehicles-ggsyn/"
    },
    {
      "guid": "tag:finance.google.com,cluster:52779594318898",
      "symbol": "NASDAQ:AAPL",
      "title": "After the iPhone 8, What Will Drive Apple Inc. (AAPL) Stock Higher?",
      "description": "After the iPhone 8, What Will Drive Apple Inc. (AAPL) Stock Higher?\n Investorplace.com - 11 hours ago \nWith a market cap now almost $844 billion, Apple is easily the world's most valuable U.S.-listed company. Second-place Alphabet Inc (NASDAQ:GOOGL, NASDAQ:GOOG) is some $195 billion behind, enough to buy Toyota Motor Corp (ADR) (NYSE:TM), onlyÂ ...\nWill Alphabet Inc's (GOOGL) ARCore Spoil Apple Inc.'s (AAPL) Glory? - Yahoo News\nEnigmatic Hedge Fund Billionaire Louis Moore Bacon Takes Profits on Apple Inc ... - Smarter Analyst",
      "summary": "After the iPhone 8, What Will Drive Apple Inc. (AAPL) Stock Higher?\n Investorplace.com - 11 hours ago \nWith a market cap now almost $844 billion, Apple is easily the world's most valuable U.S.-listed company. Second-place Alphabet Inc (NASDAQ:GOOGL, NASDAQ:GOOG) is some $195 billion behind, enough to buy Toyota Motor Corp (ADR) (NYSE:TM), onlyÂ ...\nWill Alphabet Inc's (GOOGL) ARCore Spoil Apple Inc.'s (AAPL) Glory? - Yahoo News\nEnigmatic Hedge Fund Billionaire Louis Moore Bacon Takes Profits on Apple Inc ... - Smarter Analyst",
      "date": "2017-08-31T09:33:45.000Z",
      "link": "http://investorplace.com/2017/08/after-the-iphone-8-what-will-drive-apple-inc-aapl-stock-higher/"
    },
    {
      "guid": "tag:finance.google.com,cluster:52779593930249",
      "symbol": "NASDAQ:AAPL",
      "title": "Apple Inc. (AAPL) Faces Legal Battle in China Ahead of iPhone 8 Launch",
      "description": "Apple Inc. (AAPL) Faces Legal Battle in China Ahead of iPhone 8 Launch\n Investorplace.com - 3 hours ago \nApple Inc. (NASDAQ:AAPL) is facing an antitrust complaint in China. Per Reuters, local developers have accused the iPhone maker of charging exorbitant fees and removing apps from its local store without proper clarification.",
      "summary": "Apple Inc. (AAPL) Faces Legal Battle in China Ahead of iPhone 8 Launch\n Investorplace.com - 3 hours ago \nApple Inc. (NASDAQ:AAPL) is facing an antitrust complaint in China. Per Reuters, local developers have accused the iPhone maker of charging exorbitant fees and removing apps from its local store without proper clarification.",
      "date": "2017-08-31T17:26:15.000Z",
      "link": "http://investorplace.com/2017/08/apple-inc-aapl-faces-legal-battle-china-ahead-iphone-8-launch-ggsyn/"
    },
    {
      "guid": "tag:finance.google.com,cluster:52779593117950",
      "symbol": "NASDAQ:AAPL",
      "title": "8 Reasons Apple, Inc.'s iPhone 8 Launch Is So Important",
      "description": "8 Reasons Apple, Inc.'s iPhone 8 Launch Is So Important\n Madison.com - 36 minutes ago \nThe latest iPhone is expected to be a major update from its predecessors. And it should be: It's been three years since the iPhone's form factor was overhauled.\nApple sets date for event where new iPhone expected to be launched - MarketWatch\nEvery Apple Inc. iPhone Released This Year Will Have Wireless Charging - Motley Fool",
      "summary": "8 Reasons Apple, Inc.'s iPhone 8 Launch Is So Important\n Madison.com - 36 minutes ago \nThe latest iPhone is expected to be a major update from its predecessors. And it should be: It's been three years since the iPhone's form factor was overhauled.\nApple sets date for event where new iPhone expected to be launched - MarketWatch\nEvery Apple Inc. iPhone Released This Year Will Have Wireless Charging - Motley Fool",
      "date": "2017-08-31T20:03:45.000Z",
      "link": "http://host.madison.com/business/investment/markets-and-stocks/reasons-apple-inc-s-iphone-launch-is-so-important/article_9a7a6b99-dac7-5381-92e3-066972a070ee.html"
    }
  ]
}
```


2. Historical Data for single or multiple stocks using google (in format: symbol(s)/start_date/end_date, with date in YYYY-MM-DD format).

```
GET /v1/historical/NASDAQ:AAPL,NYSE:AIG/2014-01-02/2014-01-03
```

Yields Response:

```json
{
  "NASDAQ:AAPL": [
    {
      "date": "2014-01-01T22:00:00.000Z",
      "open": 79.38,
      "high": 79.58,
      "low": 78.86,
      "close": 79.02,
      "volume": 58791957,
      "symbol": "NASDAQ:AAPL"
    },
    {
      "date": "2014-01-02T22:00:00.000Z",
      "open": 78.98,
      "high": 79.1,
      "low": 77.2,
      "close": 77.28,
      "volume": 98303870,
      "symbol": "NASDAQ:AAPL"
    }
  ],
  "NYSE:AIG": [
    {
      "date": "2014-01-01T22:00:00.000Z",
      "open": 50.81,
      "high": 51.3,
      "low": 50.47,
      "close": 50.71,
      "volume": 9198092,
      "symbol": "NYSE:AIG"
    },
    {
      "date": "2014-01-02T22:00:00.000Z",
      "open": 50.67,
      "high": 51.23,
      "low": 50.61,
      "close": 50.92,
      "volume": 7278160,
      "symbol": "NYSE:AIG"
    }
  ]
}
```


3. Historical Data for single stock using yahoo (in format: symbol/start_date/end_date, with date in YYYY-MM-DD format).

```
GET /v2/historical/AAPL/2014-01-02/2014-01-04
```

Yields Response:

```json
[
  {
    "date": "2014-01-03T00:00:00.000Z",
    "open": 78.980003,
    "high": 79.099998,
    "low": 77.204285,
    "close": 77.28286,
    "adjClose": 71.907555,
    "volume": 98116900,
    "symbol": "AAPL"
  },
  {
    "date": "2014-01-02T00:00:00.000Z",
    "open": 79.382858,
    "high": 79.575714,
    "low": 78.860001,
    "close": 79.01857,
    "adjClose": 73.522530,
    "volume": 58671200,
    "symbol": "AAPL"
  }
]
```
