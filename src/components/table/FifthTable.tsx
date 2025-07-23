export default function FifthTable() {
  return (
    <div className="grid grid-cols-[200px_290px_290px] grid-rows-[40px_40px_40px_40px_40px_40px_40px_40px_40px_40px_40px_40px] gap-[5px] text-[16px] leading-[1.6]">
      {/* Header */}
      <div className="bg-[#daebd1] flex items-center justify-center rounded-[10px]">
        수탁 업체
      </div>
      <div className="bg-[#daebd1] flex items-center justify-center rounded-[10px]">
        위탁업무내용
      </div>
      <div className="bg-[#daebd1] flex items-center justify-center rounded-[10px]">
        보유기간
      </div>

      {/* Row: 신용조회업무 */}
      <div className="flex items-center justify-center bg-[#f5faf2] rounded-[10px] ">
        CJ 대한통운(주)
      </div>
      <div className="row-span-11 flex items-center justify-center px-[12px] py-[12px] text-center bg-[#f5faf2] rounded-[10px]">
        물품배송, 반품 또는 청구지 등 발송
      </div>
      <div className="row-span-11 flex items-center justify-center px-[12px] py-[12px] bg-[#f5faf2] rounded-[10px] ">
        회원탈퇴 및 위탁 계약 만료 시까지
      </div>

      <div className="flex items-center justify-center bg-[#f5faf2] rounded-[10px]">
        (주)고려택배
      </div>
      <div className="flex items-center justify-center bg-[#f5faf2] rounded-[10px]">
        KDS Korea Co. Ltd.
      </div>
      <div className="flex items-center justify-center bg-[#f5faf2] rounded-[10px]">
        경동택배 안성원곡성
      </div>
      <div className="flex items-center justify-center bg-[#f5faf2] rounded-[10px]">
        로젠택배
      </div>
      <div className="flex items-center justify-center bg-[#f5faf2] rounded-[10px]">
        삼성항공화물
      </div>
      <div className="flex items-center justify-center bg-[#f5faf2] rounded-[10px]">
        삼양로지스틱스(주)
      </div>
      <div className="flex items-center justify-center bg-[#f5faf2] rounded-[10px]">
        용마로지스주식회사
      </div>
      <div className="flex items-center justify-center bg-[#f5faf2] rounded-[10px]">
        주식회사 콜오케이서비스
      </div>
      <div className="flex items-center justify-center bg-[#f5faf2] rounded-[10px]">
        퍼스트물류
      </div>
      <div className="flex items-center justify-center bg-[#f5faf2] rounded-[10px]">
        하나로물류주식회사
      </div>
    </div>
  );
}
