import AddressForm from "./AddressForm/AddressForm";
import PreferenceForm from "./AdjustmentForm/AdjustmentForm";
import FinalAdjustments from "./FinalAdjustments/FinalAdjustments";

const getStepContent = (
  step,
  setBegin,
  setEnd,
  begin,
  end,
  nodeNum,
  setNodeNum,
  setIsAllFilled
) => {
  switch (step) {
    case 0:
      return (
        <AddressForm
          setIsAllFilled={setIsAllFilled}
          setBegin={setBegin}
          setEnd={setEnd}
          setNodeNum={setNodeNum}
          begin={begin}
          end={end}
          nodeNum={nodeNum}
        />
      );
    case 1:
      return <PreferenceForm begin={begin} end={end} nodeNum={nodeNum} />;
    case 2:
      return <FinalAdjustments />;
    default:
      throw new Error("Unknown step");
  }
};

export default getStepContent;
