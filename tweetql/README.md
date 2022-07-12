## GraphQL이 해결하는 문제점

1. ### Overfetching(내가 필요한 것만 요청하여 필요한 것만 받아오는것)

   GraphQL을 사용하면 API에 GraphQL 쿼리를 보내고 필요한 것만 정확히 얻을 수 있습니다.

2. ### Underfetching(여러개의 api를 조합해서 해야했을 일을 하나의 요청으로 처리 가능)
   일반적인 REST API는 여러 URL에서 로딩해야 하지만 GraphQL API는 앱에 필요한 모든 데이터를 단일 request로 가져옵니다. GraphQL을 사용하는 앱은 느린 모바일 네트워크 연결에서도 빠를 수 있습니다.
