# api-to-fetch-details-of-fresher-using-node-and-express
 program API where you have a list of all the colleagues, city and people who they’re working under and their details. fetch complete details of a fresher fetch his mentor and details about mentor fetch city search should work sorting should work if there are more people with similar name
 This Project consist of API which uses get method send request to postman and also it is query based project in which the query in postman is used to fetch the details of freshers  
and data is used as json objects and also fetch using node export as an array of object in index.js and there it is filtered based on reuirement .
express server is used for it and project is working on localhost:3000
first make the server up by executing the index.js file and the queries are :
1)http://localhost:3000/list_freshers => It is used to list the freshers data based on key which may be name,city,College ,id etc.
2)http://localhost:3000/fresher_detailsbyname=>It is used to list the freshers data based on name of thr fresher.
3)http://localhost:3000/fresher_details2bycity=>It is used to list the freshers data based on city of thr fresher.
4)http://localhost:3000/fresher_details2byid=>It is used to list the freshers data based on id of thr fresher.
5)http://localhost:3000/fresher_details2bycollege=>It is used to list the freshers data based on collegename of thr fresher.
Searching queries are which may include sorting and regex.
1)http://localhost:3000/searchby_name=>It is used to search the freshers list or data based on any character or expression of name only.
2)http://localhost:3000/searchby_city=>It is used to search the freshers list or data based on any character or expression of cityonly.
3)http://localhost:3000/searchby_college=>It is used to search the freshers list or data based on any character or expression of College name  only.
4)http://localhost:3000/searchby_id=>It is used to search the freshers list or data based on any character or expression of id only.
5)http://localhost:3000/searchby_mentorname=>It is used to search the freshers list or data based on any character or expression of mentorname only.
6)http://localhost:3000/searchby_desciption=>It is used to search the freshers list or data based on any character or expression of mentor description only.
