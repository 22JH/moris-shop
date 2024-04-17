## 현재 진행 상황

- 회원 가입
- 상품 등록
  - user role(admin 만 가능하도록)
  - image crop
  - quill 에디터 사용
- 상품 목록 조회
- 상품 장바구니(wihslist) 담기
- 상품 장바구니 -> 결제 진행
  - 장바구니(wishlist) 와 결제진행(orderInProgress) collections 따로 관리
  - 장바구니에서 결제 진행할 시 상품들을 결제 진행 collections으로 옮긴다.
- 토스 페이먼츠 연동
  - 무결성 확인
    - DB의 orderInProgress의 총 가격과 쿼리 파라미터로 받은 가격 비교
  - 결제진행(orderInProgress) collections 에서 발송예정(prepareShipping) collections 으로 옮긴다.

## 남은 작업

- 결제 에러 핸들링
  - 결제 진행 중 jwt가 만료되면?
    - 리프레시 토큰
  - 결제 진행 중 에러 핸들링 케이스 처리가 필요할까?
    - 잔액부족
    - 결제 방식에 따른 에러(통신사 에러, 카드 점검...)
- 결제 시 사용자의 정보(이름, 전화번호, 주소)를 매번 업데이트하는게 맞을까?
  - 주소 목록을 따로 관리하는 방법이 있지만 필요한 기능일까 고민
- 유저의 주문 목록 확인
  - 발송 대기와 발송 완료를 따로 처리해야할까?
    - 같이 처리하게 된다면 택배사 API를 이용해서 렌더링 마다 요청을 보내야함
- 어드민의 주문 목록 확인
  - orderComplete collection으로 따로 관리하는게 맞을 것 같다.
- 어드민의 유저의 주문 목록 확인

## 고민

- user가 결제를 성공하면?

  - orderInProgress 삭제
  - orderComplete 추가
  - admin이 확인할 prepareShipping에 상품 추가
  - 유저가 결제한 상품과 트래킹넘버 확인하려면?
    - orderComplete에 tracking number을 추가?
      - order은 Item을 참조하고 있어서 tracking number model을 추가하려면 객체로 만들어야 할건데 그러면 depth가 깊어져 클라이언트 코드가 길어질듯
    - 아니면 prepareShipping을 참조하도록 수정?
      - Promise.all로 한 번에 하고있는데 orderComplete collections에 추가하는 것을 따로 빼서 마지막에 하도록해야함
      - 이게 맞는듯, 생각해보니 네이버 쇼핑도 tracking Number이 있나 없나에 따라 발송 완료를 체크했음

- user가 결제에 실패하면?
  - 결제 승인 단계에서 실패
    - 결제가 이루어지지 않았으니 fail 페이지로 리다이렉트
  - 승인 성공, DB 문제로 실패하면?
    - DB 업데이트는 session으로 롤백시키면 됨. 하지만 이미 결제 승인이 났기때문에 실 결제가 이루어짐.
    - 결제 취소말고 확인하는 방법이 없을까
    - 결제 승인을 하기 전에 DB 에러를 체크해야할까?
