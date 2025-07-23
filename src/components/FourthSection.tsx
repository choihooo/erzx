import FourthTable from "./table/FourthTable";

export const FourthSection = () => {
  return (
    <div className="w-full flex flex-col mt-[50px]">
      <div className="font-bold text-[20px] mb-[30px]">
        4. 개인정보의 제3자 제공
      </div>
      <div className="text-[16px]  mb-[30px]">
        ① 줄릭파마코리아의 EZRX는 정보주체의 개인정보를 개인정보의 처리 목적에서
        명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등
        <br /> 「개인정보 보호법」 제17조 및 제18조에 해당하는 경우에만
        개인정보를 제3자에게 제공합니다. 그 외에는 정보주체의 개인정보를
        제3자에게 제공하지 않습니다.
      </div>
      <div className="text-[16px]  mb-[10px]">
        ② 줄릭파마코리아의 EZRX회원한 서비스 제공을 위해 제3자에 대한 개인정보
        제공이 필요한 경우 정보주체의 동의를 얻어 필요 최소한의 범위에서만
        제공합니다.
      </div>
      <div className="text-[16px]  ml-[20px] mb-[30px]">
        <FourthTable />
      </div>
      <div className="text-[16px]  ">
        ③ 줄릭파마코리아의 EZRX는 「개인정보 보호법」 제17조 제3항에 따라, 또는
        재난, 감염병, 급박한 생명·신체 위험을 초래하는 사건·사고, 급박한 재산
        손실 등의
        <br /> 긴급상황이 발생하는 경우 정보주체의 동의 없이 관계기관 또는
        제3자에게 개인정보를 제공할 수 있습니다. 이 경우 동의 없는 개인정보의
        추가적인 제공을 위해 <br />
        아래 사항을 고려하겠습니다. (「개인정보 보호법」 시행령 제14조의2)
      </div>

      <div className="text-[16px]  ml-[30px]">
        1) 당초 수집 목적과 관련성이 있는지 여부
        <br />
        2) 정보처리 관행 또는 정보 주체와의 관계에 비추어 볼 때 개인정보의 추가
        제공에 대한 예측 가능성이 있는지 여부
        <br />
        3) 정보주체의 이익을 부당하게 침해하는지 여부 가명처리 또는 암호화 등
        안전성 확보에 필요한 조치를 하였는지 여부
        <br />
        4) 가명처리 또는 암호화 등 안전성 확보에 필요한 조치를 하였는지 여부
      </div>
    </div>
  );
};
