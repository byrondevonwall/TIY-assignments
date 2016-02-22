###How does the API handle authentication?
####Do I need to authenticate?
You don't **need** to authenticate.  According to github, you can't do anything interesting with the API without doing so though...so you're prolly gonna wanna do that thing.

####What can I do with an unauthenticated request?
Unauthenticated requests can pull public data from the API at the rate of 60 requests per hour.  That's it.

####How can I authenticate my request? (3 ways)
1. Basic Authentication:
Entering your username and password through cURL.
2. Two-factor Authentication with OAuth Token
According to github API documentation:
  "While convenient, Basic Authentication isn't ideal because you shouldn't give your GitHub username and password to anyone. Applications that need to read or write private information using the API on behalf of another user should use OAuth.

  Instead of usernames and passwords, OAuth uses tokens. Tokens provide two big features:

  Revokable access: users can revoke authorization to third party apps at any time
  Limited access: users can review the specific access that a token will provide before authorizing a third party app"
OAuth tokens are generally created by an application for a specific user, but you can also create a personal authentication token with your github profile, or create a token using your basic authentication credential in the github authentication API.
3. OAuth2 key/secret:
According to github's API documentation:
  "This should only be used in server to server scenarios. Don't leak your OAuth application's client secret to your users."


###How do I ask the API for...
####The profile information for a specific user?
  GET /users/:username
  curl -i https://api.github.com/users/username

####The repository listing for a specific user?
  GET /users/:username/repos
  curl -i https://api.github.com/users/username/repos

####The recent, public activity for a specific user?
  GET /users/:user/events
  curl -i https://api.github.com/users/username/events

####Is there a limit to the number of requests I can make?
Yes! The limit is 60 per unauthenticated user and 5000 per authenticated user per hour.

####Is there a way of extending that limit?
Yes, but it has to do with OAuth passing its' code to make unauthenticated requests and honestly that's prolly not what you're asking.  See the answer above.

####What happens when I hit the limit?
The API returns an error.
`"message": "API rate limit exceeded for xxx.xxx.xxx.xxx. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
   "documentation_url": "https://developer.github.com/v3/#rate-limiting"`

####What if there is a lot of data returned?
According to the github API documenatation:
  Requests that return multiple items will be paginated to 30 items by default. You can specify further pages with the ?page parameter. For some resources, you can also set a custom page size up to 100 with the ?per_page parameter.

####How can I ask for more (or less) data from a request?
According to the github API documenatation:
  By passing the `per_page parameter`, you can specify how many items you want each page to return, up to 100 items.

####How do I know that there is more data available?
Because the data returned is paginated automatically, you know that more data is available if there are more pages available for you to use.

###What are the endpoints for fetching...
  http://www.ehow.com/info_12212371_definition-service-endpoint.html:
  The endpoint is a connection point where HTML files or active server pages are exposed. Endpoints provide information needed to address a Web service endpoint. The endpoint provides a reference or specification that is used to define a group or family of message addressing properties and give end-to-end message characteristics, such as references for the source and destination of endpoints, and the identity of messages to allow for uniform addressing of "independent" messages. The endpoint can be a PC, PDA, or point-of-sale terminal.
####the profile data for a user?
https://api.github.com/users/username

####the organizations a user belongs to?

https://api.github.com/users/byrondevonwall/orgs
####the repositories a user has created?
https://api.github.com/users/username/repos

####a filtered list of repositories?
https://api.github.com/users/username/repos?sort
with parameters "Can be one of created, updated, pushed, full_name. Default: full_name"
####a sorted list of repositories?
https://api.github.com/repositories?sort

####public events for a user?
GET /users/:username/events/public
https://api.github.com/users/username/events/public

###When fetching public events for a user...
####How many results are returned by default?
30, as controlled by the delimited `per_page` pagination limits.

####What limitations exist on fetching more results?
If you are an unauthenticated user, you can request 30 more times (for a total of 60).  If you are an authenticated user, you can fetch 4970 more results.

####What is the basic structure of the results?
According to the github API documentation:
  All Events have the same response format:

  Status: 200 OK
  Link: <https://api.github.com/resource?page=2>; rel="next",
        <https://api.github.com/resource?page=5>; rel="last"
  X-RateLimit-Limit: 5000
  X-RateLimit-Remaining: 4999
  [
    {
      "type": "Event",
      "public": true,
      "payload": {
      },
      "repo": {
        "id": 3,
        "name": "octocat/Hello-World",
        "url": "https://api.github.com/repos/octocat/Hello-World"
      },
      "actor": {
        "id": 1,
        "login": "octocat",
        "gravatar_id": "",
        "avatar_url": "https://github.com/images/error/octocat_happy.gif",
        "url": "https://api.github.com/users/octocat"
      },
      "org": {
        "id": 1,
        "login": "github",
        "gravatar_id": "",
        "url": "https://api.github.com/orgs/github",
        "avatar_url": "https://github.com/images/error/octocat_happy.gif"
      },
      "created_at": "2011-09-06T17:26:27Z",
      "id": "12345"
    }
  ]

####What fields are included in each result?
repo, actor, org

####What are the data types for each field?
1. repo:
id, name, url
2. actor:
id, login, gravatar_id, avatar_url, url
3. org:
id, login, gravatar_id, url, avatar_url

####What are some of the different values for the type field?
PushEvent, GollumEvent, CreateEvent, DeleteEvent
