# 소개  
node.js, express, socket.io를 이용하여 만든 채팅기능입니다.


## 기능
1. 채팅을 할 수 있습니다.  
2. Timber Room 또는 Square Room에 참여하여 해당 방에 참석한 인원에게 메시지를 보낼 수 있습니다.  
3. 모든 인원에게 메시지를 보낼 수 있습니다.   
      
     
## 사용방법
1. 두개 이상 새창이 필요합니다. 
2. https://peaceful-headland-74173.herokuapp.com/ 에 접속합니다. 
3. Room(All, Timber, Square) 버튼을 클릭합니다.   
4. 메시지를 입력후 Sending message to users 버튼을 클릭합니다.
  
   
## 참고사항
0. Heroku Free 버전을 사용합니다. 약 30 초의 접속 대기시간이 필요합니다.
1. 메시지를 받을려면 보내는 사람과 같은 Room에 있어야합니다. 
2. 매번 메시지를 입력하기 불편하므로 랜덤한 숫자값이 들어갑니다. 
3. DB에 어떠한 데이터도 저장하지 않습니다. 새로고침시 모든 데이터가 사라집니다. 

  
## History   
socket.io를 사용하기위해 찾은 것들 입니다.   
node.js 설치, npm init / install / -g / -save   
git 커밋방법    
.gitignore 설정방법  
(socket.io 검색시 나오는 블로그들은 socket.io가 예전버전이라 적용이 안되서) 공식문서로 작성하는 방법   
heroku 배포  
  
npm init  
npm install express  
npm install socket.io  
  
Create index.js  
Create public/chat.html  
  
Document  
https://socket.io/docs/v4/  

## 이미지
![](https://github.com/hj3437/study_node_socket_io/blob/main/capture/use.png)
  
