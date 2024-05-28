# 톰캣을 통해 파일 생성시 기본권한 설정 방법
catalina.sh에서 옵션변경을 통해 기본 파일권한을 설정 할 수 있다

default는 UMASK="0027로 되어 있음" -> 0777 - 0027 = 0750 권한으로 생성된다
아래처럼 UMASK="0022"로 변경하면 -> 0777 - 0022 = 0755 권한으로 생성된다

---
cd /usr/local/apache-tomcat-9.0.89/bin
vi catalina.sh
UMASK="0022"로 변경
---
