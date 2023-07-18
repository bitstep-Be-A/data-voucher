# Project guide

## Issue

Issue에는 Feature와 Debug를 정리합니다.
Title에는 [Feature] 혹은 [Debug]를 앞에 표시 후 타이틀을 작성합니다.

컨텐츠의 양식은 다음과 같습니다.

```plain
작업일

- [ ] 작업 내용 [commit link(사항 있다면)]
```

## Branch

main branch는 feature/#(issue id)와 같이 네이밍합니다. ex) feature/#10

## PR

pull request는 commit 하나에만 할당됩니다.

최종 merge commit 시 Pull request title은 다음과 같습니다.

[branch 명] [@author] PR(pr id)

ex) feature/#10 @jinhyeok15 PR(#5)
