# git pull origin main # need to configure git ssh authentication
docker build -t final-backend .
docker rm -f final-backend
docker run --name final-backend -d -p 5000:5000 final-backend