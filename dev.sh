docker build -t nextjs13-template:test . 
# docker run -it -p 8088:3000 -p 9005:9005 -p 7178:4000 -p 7078:4400 -v ${PWD}/web:/web --name nextjs13-template-01 nextjs13-template:test ash
docker run -it -p 8088:3000 -v ${PWD}/web:/web --name nextjs13-template-01 nextjs13-template:test ash