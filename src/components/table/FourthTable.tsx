export default function FourthTable() {
  return (
    <div className="grid grid-cols-[205px_290px_320px] grid-rows-[52px_52px_52px_52px_52px_52px_52px_180px] gap-[10px] text-[16px] leading-[1.6]">
      {/* Header */}
      <div className="bg-[#daebd1] flex items-center justify-center rounded-[10px]">
        구 분
      </div>
      <div className="bg-[#daebd1] flex items-center justify-center rounded-[10px]">
        수집항목
      </div>
      <div className="bg-[#daebd1] flex items-center justify-center rounded-[10px]">
        보유 및 이용기간
      </div>

      {/* Row: 신용조회업무 */}
      <div className="px-[12px] py-[12px] text-center bg-[#f5faf2] rounded-[10px] ">
        NICE평가정보(주)
      </div>
      <div className="row-span-5 flex items-center justify-center px-[12px] py-[12px] text-center bg-[#f5faf2] rounded-[10px]">
        신용조회업무
      </div>
      <div className="row-span-7 flex items-center justify-center px-[12px] py-[12px] bg-[#f5faf2] rounded-[10px] ">
        개인정보 제공 목적이 달성된 후에는 해당
        <br /> 정보를 지체없이 파기합니다.
        <br />
        <br />※ 단, 다음의 정보에 대해서는 관계법령에서
        <br /> 정한 일정한 기간 동안 회원정보를 보관합니다.
        <br />
        <br /> • 주문 또는 구매 등에 관한 기록: 5년
        <br /> • 대금결제 및 재화 등의 공급에 관한 기록: 5년
        <br /> • 회원의 불만 또는 분쟁처리에 관한 기록: 3년
      </div>

      <div className="px-[12px] py-[12px] text-center bg-[#f5faf2] rounded-[10px]">
        SGI서울보증
      </div>
      <div className="px-[12px] py-[12px] text-center bg-[#f5faf2] rounded-[10px]">
        마쉬코리아
      </div>
      <div className="px-[12px] py-[12px] text-center bg-[#f5faf2] rounded-[10px]">
        코파스코리아
      </div>
      <div className="px-[12px] py-[12px] text-center bg-[#f5faf2] rounded-[10px]">
        고려신용정보(주)
      </div>

      {/* Row: 결제관련업무 */}
      <div className="px-[12px] py-[12px] text-center bg-[#f5faf2] rounded-[10px]">
        나이스페이먼츠
      </div>
      <div className="px-[12px] py-[12px] text-center bg-[#f5faf2] rounded-[10px]">
        결제관련업무
      </div>

      {/* Row: 배송/반품 목적 */}
      <div className="flex items-center justify-center bg-[#f5faf2] rounded-[10px]">
        <div className="text-left">
          노보노디스크, 노바티스, 한독,
          <br />
          바이오젠, 종근당, 한국비엠에
          <br />
          스제약, GSK, 한국오가논, 베링
          <br />
          거인겔하임 등<br /> ** 계약된 고객사는 변동될
          <br /> 수 있음
        </div>
      </div>
      <div className="flex items-center justify-center bg-[#f5faf2] rounded-[10px]">
        고객이 주문하신 상품 배송, 반품 등을 위한
        <br /> 목적, 컴플레인 처리
      </div>
    </div>
  );
}
