# git pull origin main # need to configure git ssh authentication
docker build -t final-frontend .
docker rm -f final-frontend
docker run --name final-frontend -d -p 80:80 final-frontend