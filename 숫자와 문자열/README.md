## 케이스 주제

[정규표현식] [문자열]
문자열을 숫자로 치환하기

## 기능 요구사항

https://programmers.co.kr/learn/courses/30/lessons/81301

## 기능 작동 완성

[내 로직]
1. s에 어떤 문자열이 들어가있는지 찾는다 --> match()
2. s에서 찾은 문자만큼 반복해, s에 잇는 문자를 숫자로 치환한다 --> replcae()
    문자의 인덱스는 해당 숫자와 같아서, 문자열.indexOf(문자)로 인덱스로 치환해준다

## 문제

1.replaceAll()이 지원이 안되서 replace()를 쓰려면 정규표현식을 써줘야함

2.replace() 리턴값을 s가 업뎃하지 못했음 
    문자가 치환될때마다 업뎃되기 위해 변수에 담아야함 
    s자체로 이용하면 치환하고 다시 바뀌지 않은 원문자열에 또 바꾸고의 반복
    나는 s자체에 갱신이 될 줄 알았는데
https://jumbled-caravan-283.notion.site/8d77fc1231dd434f82da79c4044f67df

## 주요 학습 키워드

1.정규표현식
https://jumbled-caravan-283.notion.site/Study-9096a29a02db469e99438a3a2b62ceed

2. split()와 join()의 활용

## 개선할 점

1. nums.filter(num => s.match(num))

우선 어떤 문자열이 속해있는지 filter를 이용해 찾았다
바로 nums배열을 순회해도 되지만, 
만약에 nums 배열이 10000개 정도 될때, for문을 저렇게 많이 돌면 비효율적이라고 생각했다.
그래서 일단 math로 합당한 요소만 찾은 후,
그것들로만 for문을 돌아서 치환하면 더 효울적이지 않을까 생각했다. 

근데 어차피 num이 10000개여도 치환하든, match를 시키든, 한번은 nums배열을 순회를 하긴해야되는데 그냥 바로 nums에 replace를 하는게 나을 지도 모르겠다. 
