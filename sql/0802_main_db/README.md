
## 과제 > Main Page DB 생성

우선 저는 메인 페이지에서 무슨 내용을 데이터베이스에 넣어야 하는지 먼저 결정해야 되는데 아래와 같이 생각을 좀 정리했습니다.

- Contact Me Form
	- 메인 페이지에서 Contact Me 폼이 있는데 거기서 웹사이트를 접속한 사람들이 저와 함께 협업하고 싶거나 연락하고 싶을 경우 사이트를 통해서 바로 메일을 보낼 수 있게 이름(Full Name), 이메일(E-mail), 그리고 간단한 메세지(Message)를 남길 수 있는 폼을 만든 것입니다.
	- 원래 폼을 작성하면 주어진 정보를 저장하지 않고 메일 형식을 자동으로 생성해서 제 이메일 주소로 발송하는 식으로 만들려고 했지만, 데이터베이스로 
- Works Page
	- 원래 메인 페이지를 포트폴리오 사이트로 사용할 예정이라서 메뉴에서 Works라는 섹션에서 제가 만든 프로젝트 등을 전시하기 위해 마련했습니다.
	- 이 섹션에 들어갈 프로젝트들을 계속 업데이트될 예정인데 큰 규모는 아니어도 한번 데이터베이스로 정리하면 더 깔끔할까 생각하고 있습니다.
- Blogs Page
	- 개인 블로그를 따로 md 파일 시스템으로 관리하고 있지만, 너무 많아질 수도 있으니 데이터베이스에 추가해서 제목과 날짜, 파일명 등으로 정리할 수 있는 가능성도 고려하고 있습니다.
	- 블로그 글 그리고 한 post마다 첨부할 사진, 관련 태그, 접속자가 남긴 댓글 등을 기록할 수 있는 데이터베이스를 만들 수 있는 것 같습니다.
	- 단, 현재 블로그 글 관리에 이미 시스템이 있으니 데이터베이스로 옮기는 방식이 더 유익할지 더 고민해 봐야 하기 때문에 오늘은 일단 간단한 데이터베이스만 만들어보겠습니다.

따라서 메인 페이지의 1) contact me 폼으로 입력받을 정보들, 그리고 2) works 섹션에 들어갈 프로젝트들에 대한 정보 (e.g. 프로젝트 이름, 완성한 기간 또는 날짜, 카테고리나 태그) 등, 3) blog 섹션에서 목록으로 나타낼 블로그 글들의 정보와 comment 정보를 정리해서 데이터베이스로 관리할 생각입니다.

## 참고할 자료.
- 포트폴리오나 블로그 사이트에 데이터베이스가 필요한 이유
	- https://www.quora.com/Should-I-use-a-database-for-a-portfolio-website
	- https://www.quora.com/Should-I-store-large-text-files-blog-post-in-a-database-or-in-a-file-system
- 워드프레스 블로그 데이터베이스 사용/관리하는 방법
	- https://wordpress.org/about/requirements/
	- https://www.wpbeginner.com/beginners-guide/beginners-guide-to-wordpress-database-management-with-phpmyadmin/
- 블로그 데이터베이스나 CMS (Content Management System)을 만드는 방법
	- https://www.youtube.com/watch?v=oIpyPyeNBUQ
- Content Database 필요한 이유
	- https://www.linkedin.com/pulse/you-need-content-database-stat-dorien-morin-van-dam/?trk=public_profile_article_view
- 실제로 portfolio DB의 ERD를 만들어본 분의 깃허브 repository
	- https://github.com/faizanfareed/Personal-portfolio-database-design-ERD-
### TODO.
1. HeidiSQL을 통해 웹사이트 데이터베이스 구성해보기
2. Entity, Relation 등을 구성하고 Primary Key, Foreigner Key를 정하기
3. ERD 생성 (DBeaver와 달리 HeidiSQL에서 ERD 생성 기능이 없으니 다른 툴 사용할 것)
4. 각 table과 column에 대한 설명을 별도의 테스트 파일에 작성
### NOTE.
매번 데이터베이스에서 데이터를 가져오면 메모리나 캐쉬 많이 사용돼서DB 사용하면 페이지 로드할 때 느려지는 것이 단점으로 예상되는데 일단 데이터 테이블 먼저 구성해보겠습니다.

## 1. DB 구성

#### Contact Form
- 검색해 보니 가장 긴 이메일의 문자수는 255개, 가장 긴 이름의 문자수는 747개로 나오네요 (신가하다! :O). 이에 따라 문자수 limit을 설정했습니다. 
	![[Pasted image 20230803052041.png]]

#### Works
- 프로젝트 정보를 관리하기 위해 프로젝트 이름, 그리고 시작 날짜와 완성 날짜를 데이터에 포함합니다. 
- 각 프로젝트마다 시작 날짜는 항상 있고 아직 완성되지 않은 프로젝트 (i.e. ongoing project)는 완성 날짜를 NULL로 저장합니다.
- 프로젝트 이름의 경우 이름이 길 수 있으므로 VARCHAR(i.e. 문자열)으로 정해진 길이를 주는 것보다 TINYTEXT의 유형으로 저장합니다.
	![[Pasted image 20230803045016.png]]

#### Blogs: Posts
- 블로그 post들에 대한 metadata를 포함하는 테이블을 만들었습니다.
	![[Pasted image 20230803051113.png]]
#### Blogs: Content
- 블로그 post 내용에 포함된 이미지, 텍스트, 이미지 링크 등을 기록하는 테이블을 만들었습니다
- 각 블로그 post의 내용은 `content_id` 에 따라 query 가능하게 만들었습니다.
- 내용의 각 요소 타입(image, text, url)은 `content_type`로 표시합니다. 
	![[Pasted image 20230803053803.png]]

Sample Content

| id | blog_id | content_type | content_text | image_url |
| -------- | -------- | -------- | -------- | -------- |
| 1 | 123 | text | "This is the first part of the post" | NULL |
| 2 | 123 | image | NULL | "https://example.com/image1"
| 3 | 123 | text | "This is the second part of the post" | NULL |
| 4 | 123 | image | NULL | "https://example.com/image2"

데이터 관리를 단순화하기 위해, 또는 하나의 데이터베이스 안에 데이터의 무결성을 유지하기 위해 열이 많은 하나의 테이블을 사용하여 다양한 콘텐츠를 효율적으로 저장하고 관리할 수 있게 만들었습니다.
#### Blogs: Comments
- 블로그 글에 달았던 각 comment의 metadata를 관리하기 위한 테이블을 만들었습니다.
- author_name의 기본값을 'user'로 설정했습니다.
	![[Pasted image 20230803052256.png]]

## 완성된 mypage schema

![[Pasted image 20230803055118.png]]

## 2. Primary Key, Foreign Key 설정

- 각 테이블에서 사용하는 `id`는 primary key로 설정했습니다
- foreign key는 테이블 간의 관계를 분석해서 모델링하고 나서 설정했습니다.

#### Blog : Posts
- Foreign Key 설정 (content_id : blog_content의 id 참고)
	![[Pasted image 20230803053027.png]]

#### Blog : Content
- Foreign Key 설정 (blog_id : blog_posts의 id 참고)
	![[Pasted image 20230803060031.png]]

#### Blog : Comments
- Foreign Key 설정 (blog_id : blog_posts의 id 참고)
	![[Pasted image 20230803052709.png]]


## 3. ERD 생성

- MySQL Workbench : Reverse Engineering 기능
	- 2023.08.02. root와 연결하고 오늘 만든 myweb 데이터베이스에다 시도해보니 EER 다이어그램을 생성하는 기능이고 원래  내용이 나오지 않았네요... 빈 EER가 생성되었습니다...
- draw.io : 데이터베이스 Schema를 SQL 파일로 내보내서 draw.io에서 ERD 생성
	- HeidiSQL에서 schema를 SQL로 내보낸 후 draw.io에서 그 SQL 파일을 가져왔는데도 relation이 안 보였습니다...
	- 생성된 SQL 파일을 확인했더니 각 foreign key의 참고 내용이 제대로 포함되어 있는데... notation 차이 때문인지...

결국, DBeaver를 설치하고 ERD로 나타내서 relation을 확인했습니다.

![[Pasted image 20230803063533.png]]

## 4. table과 column에 대한 설명

- `main_db_explanation.txt` 텍스트 파일 안에서 다음 내용을 작성했습니다.

```
TABLE. blog_posts
-- blog post들의 metadata DB

id : blog 글의 아이디
title : blog 글 제목
creation_date : blog 글을 생성한 날짜
tag : 블로그 글의 키워드나 태그 (블로그 글 카테고리를 만들 때 사용)
content_id : blog 내용에 해당되는 콘텐츠 아이디


TABLE. blog_comment
-- blog post에 유저들이 달았던 댓글 DB

id : 댓글 아이디
blog_id : 블로그 글 아이디 (foreign key) -- blog_posts의 id 참고
author_name : 댓글 단 사람의 이름
comment_text : 댓글 내영
comment_date : 댓글 단 날짜


TABLE. blog_content
-- blog post의 내용 DB

id : blog 콘텐츠 아이디
blog_id : blog 글 아이디
content_type : 콘텐츠의 자료 유형 (e.g. image, text, url)
content_text : 텍스트 내용 (콘텐트가 텍스트 유형이면 기입)
url_link : 이미지 url (콘텐츠가 이미지나 url 유형이면 기입)


TABLE. contact_form
-- contact form의 DB

id : contact 폼에 입력한 entry의 아이디
full_name : 내게 contact하고 싶은 유저의 이름
email : 내게 contact하고 싶은 사람의 수신 이메일 주소
message : 유저가 내게 전달하고 싶은 간단한 메세지 내용


TABLE. works
-- works 또는 프로젝트 섹션의 DB

id : 프로젝트 아이디
project_name : 프로젝트 이름
start_date : 프로젝트를 시작한 날짜
end_date : 프로젝트를 완성한 날짜
```


## TO IMPROVE

- DB를 잘 구성하기 위한 방법을 좀 더 익혀야 할 것 같습니다. 
	- 또한, 데이터베이스 사용의 장단점을 고려해서 언제 DB를 사용하는 것이 좋은지, 또 어떤 기능을 만들기 위해 DB를 어떻게 사용할 수 있는지 좀 더 자세히 알아봐야 할 것 같습니다.
- 포트폴리오 사이트의 디자인 또는 넣을 애니메이션이나 assets 등을 계획 중인데 데이터베이스를 넣어보니 추가적인 기능
- 각 entity의 기본값 생각해보기
	- e.g. id는 블로그 글이 나타날 때마다 AUTO_INCREMENT해야 하는지 고민해보기
- 추가로 Foreign Key를 만들 수 있는지 (서로 연결될 수 있는 테이블이 있는지) 확인
	- e.g. contact_form의 full_name은 author_name과 연결할지 고민해보기 (note. 댓글 달 때 username 말고 영문 본명을 사용할 경우)
- text와 image 콘텐츠를 서로 다른 table로 나누는 것이 더 좋을지 고민해보기
	- blog_text, blog_image인 형식으로 변경하면 좋을지 생각해보기
