cd..
curl -X DELETE "127.0.0.1:3000/users/1" -v
curl -X GET "127.0.0.1:3000/users/1" -v
curl -X GET "127.0.0.1:3000/users" -v
pause