//editor로 설정 파일 열기
git config --global core.editor "code --wait"
git config --global -e

//깃 설정하기
git config user.name "이름"
git config user.email "메일"

//autocrlf(문자입력타입) 설정
git config core.autocrlf true //windows에서는 true로 사용 mac에서는 false

//설정 확인
git config --list

//git 초기화
git init
rm -rf .git //삭제

//git 상태 확인
git status

//alias 설정
git config --global alias.st status

git은 working directory - <add> - staging area - <push> - .git directory

//git add 파일명
//git commit -m "메세지"
//git commit -am "메세지"
//git push 파일명

//diff 파일비교
git diff
git config --global -e에서  
[difftool "vscode"]
	cmd = code --wait --diff $LOCAL $REMOTE 추가해준다
git difftool
git difftool --staged //vscode에서 확인 가능하다

//commit 취소하기
git reset --soft HEAD^
//add 취소하기
git reset HEAD <file> 

//remote 저장소 추가하기
git remote add TIL https://github.com/GuNu-Kim/TIL.git

//clone 하기
git clone https://github.com/GuNu-Kim/TIL.git
