# 소개  
node.js, express, socket.io를 이용하여 만든 채팅 사이트 입니다.

      
## 사용방법
1. 두개 이상 브라우저가 필요합니다. 
2. https://peaceful-headland-74173.herokuapp.com/ 에 접속합니다. 
3. Room(All, Timber, Square) 버튼을 클릭합니다.   
4. 메시지를 입력후 Sending message to users 버튼을 클릭합니다.
  
   
## 참고사항
0. Heroku Free 버전을 사용합니다. 10s ~ 30s 대기시간이 발생합니다.
1. 메시지를 받을려면 보내는 사람과 같은 Room에 있어야합니다. 
2. 매번 메시지를 입력하기 불편하므로 랜덤한 숫자값이 들어갑니다. 
3. DB에 어떠한 데이터도 저장하지 않습니다. 새로고침시 모든 데이터가 사라집니다. 

  
## History  
npm init  
npm install express  
npm install socket.io  
  
Create index.js  
Create public/chat.html  
  
Document  
https://socket.io/docs/v3/client-installation/index.html  

  