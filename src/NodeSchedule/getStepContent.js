import AddressForm from "./AddressForm/AddressForm";
import PreferenceForm from "./AdjustmentForm/AdjustmentForm";

const getStepContent = (
  step,
  setBegin,
  setEnd,
  begin,
  end,
  nodeNum,
  setNodeNum,
  setIsAllFilled,
  finalNodes,
  setFinalNodes
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
      return (
        <PreferenceForm
          setIsAllFilled={setIsAllFilled}
          begin={begin}
          end={end}
          nodeNum={nodeNum}
          setFinalNodes={setFinalNodes}
        />
      );
    default:
      throw new Error("Unknown step");
  }
};

export default getStepContent;
