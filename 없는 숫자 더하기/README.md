## 케이스 주제

## 기능 요구사항

https://programmers.co.kr/learn/courses/30/lessons/86051

## 기능 작동 완성

[내 로직]
1. 문제 number배열을 문자열 a로 만든다 ---> join()
2. for문을 돌려 a에 0~9까지 있는지 찾는다 ---> a.match()
3. match값이 null 인 애들을 새배열에 추가해서 더해줌


## 문제



## 주요 학습 키워드



## 개선할 점

1. 복잡하다! 어차피 0~9가 a에 있는 지 확인하는 거니까, 따로 nums라는 배열을 만들필요 없음
2. number배열을 문자열로 만들지 않고, number.include(0~9) 이용하면 더 간단
