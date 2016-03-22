
##How do I make API requests?
With a keyboard attached to a computer.  Ideally this computer has the internet.

##What is the base URL for all requests?
https://
https://openapi.etsy.com/v2/listings/

##Are there any headers or query parameters required?
...idk about required, but there's  great rundown of params at https://www.etsy.com/developers/documentation/getting_started/api_basics#section_parameter_types

##What kind of response should I expect?
https://www.etsy.com/developers/documentation/getting_started/api_basics#section_standard_response_format
``{
     "count":integer,
     "results": [
         { result object }
     ],
     "params": { parameters },
     "type":result type
}``

##How does the API handle authentication?
oauth key...you gotta register for it.

##Do I need to authenticate? with user credentials?
If you want to get information from the api? yes.
In like, an existential sense? Probably, just to be safe.

##What can I do with an unauthenticated request?
Get this lovely message from the api:
``API request missing api_key or valid OAuth parameters``

##How can I authenticate my request? (what methods)
oAuth key in your http string. i.e.:
``GET https://openapi.etsy.com/v2/listings/active?api_key={YOUR_API_KEY}``


##What Resource in the API represents...
##an individual product?
json object key:value pair

##a group or collection of products?
json object key:value pairs

##images associated with a product?
json object key:value pairs

##sizes and colors for a product?
json object key:value pairs

##What actions and endpoints exist for each of these Resources?
get put post delete

##What parameters do each endpoint require or accept?
##What fields are returned for each Resource, specifically:
##an individual product?


##a group or collection of products?



##What additional fields can be requested for each?
