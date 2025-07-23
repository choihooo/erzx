export default function ThridTable() {
  return (
    <div
      className="grid grid-cols-[160px_310px_310px]
    grid-rows-[64px_144px_144px] gap-[5px] text-[16px] leading-[1.6]"
    >
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
      {/* Row: 필수 */}
      <div className="flex items-center justify-center bg-[#f5faf2] rounded-[10px] ">
        필수
      </div>
      <div className=" bg-[#f5faf2] p-5 rounded-[10px]">
        성명, 생년월일, 성별, 휴대폰번호, 아이디,
        <br /> 이메일주소, 거래처명, 주소, 전화번호, <br />
        사업자번호, 사업자등록증, 요양기관번호, 약사/의사면허번호, 업태, 업종
      </div>{" "}
      <div className="  bg-[#f5faf2] flex items-center p-5 rounded-[10px]">
        회원 탈퇴시 또는 재화·서비스 공급 완료
        <br /> 및 요금 결제·정산 완료 시까지
      </div>
      {/* Row: 선택 */}
      <div className="flex items-center justify-center bg-[#f5faf2] rounded-[10px]">
        선택
      </div>
      <div className=" bg-[#f5faf2] flex items-center p-5 rounded-[10px]">
        필수항목 외 고객이 제공한 정보
      </div>
      <div className=" bg-[#f5faf2] flex items-center p-5 rounded-[10px]">
        회원 탈퇴시 또는 재화·서비스 공급 완료
        <br /> 및 요금 결제·정산 완료 시까지
      </div>
    </div>
  );
}
