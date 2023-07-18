# 리틀리 클론 코딩 with Next.js 13

## 분석 사항

리틀리는 크게 두개의 도메인으로 이루어 집니다.

1. litt.ly

후원, 사용방법, 문의하기, 제품판매 등 제공
페이지 조회 기능: litt.ly/:username

2. app.litt.ly

리틀리 메인 서비스
  -> register, signin
  -> 프로필 페이지 생성 - 페이지(/page), 디자인(/design), 분석(/report), 관리(/manage)

## 핵심 개발 사항

* Firebase auth + Social 로그인 인증
* 프로필 페이지 생성 관련 model 설계
* 메인 서비스 페이지 생성 후, 공유

## 구현

* 프로필 페이지 생성 쪽 도메인(app.litt.ly)은 /service로 관리합니다.
