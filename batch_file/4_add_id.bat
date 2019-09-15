cd C:\DEV\nodejs
curl -X POST "127.0.0.1:3000/users" -d "name=daniel" -v
curl -X GET "127.0.0.1:3000/users"
pause