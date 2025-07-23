import ThridTable from "./table/ThridTable";

export const ThirdSection = () => {
  return (
    <div className="w-full flex flex-col mt-[50px]">
      <div className="font-bold text-[20px] mb-[30px]">
        3. 개인정보 처리항목 및 보유기간
      </div>
      <div className="text-[16px]  mb-[30px]">
        ① 줄릭파마코리아의 EZRX는 법령에 따른 개인정보 보유·이용기간 또는
        정보주체로부터 개인정보를 수집 시에
        <br />
        동의 받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
      </div>
      <div className="text-[16px]  mb-[20px]">
        수집하는 개인정보 처리항목과 보유기간은 아래와 같습니다.
      </div>
      <div className="text-[16px]  ml-[20px]">
        <ThridTable />
      </div>
      <div className="text-[16px]  mb-[30px]">
        * 서비스 이용기록, 접속로그, 접속IP정보
      </div>
      <div className="text-[16px] ">
        ② 단, 줄릭파마코리아는 아래의 경우에는 개인정보 보유기간에도 불구하고
        관계 법령에 따라 해당 사유 종료 시까지 개인정보를 보관할 수 있습니다.
      </div>
      <div className="text-[16px]  ml-[30px]">
        1) 관계 법령 위반에 따른 수사·조사 등이 진행 중인 경우에는 해당
        수사·조사 종료 시까지
        <br />
        2) 홈페이지 이용에 따른 채권·채무관계 잔존 시에는 해당 채권·채무관계
        정산 시까지
        <br />
        3) 「전자상거래 등에서의 소비자 보호에 관한 법률」에 따른 표시·광고,
        계약내용 및 이행 거래에 관한 기록
      </div>
      <div className="text-[16px]  ml-[70px]">
        - 표시·광고에 관한 기록: 6개월
        <br />
        - 계약 또는 청약철회, 대금결제, 재화 등의 공급기록: 5년
        <br />- 소비자 불만 또는 분쟁처리에 관한 기록: 3년
      </div>
    </div>
  );
};
