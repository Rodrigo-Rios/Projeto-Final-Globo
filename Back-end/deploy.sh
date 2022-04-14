docker build -t final-backend .
docker rm -f final-backend
docker run --name final-backend -d -p 80:5000 final-backend