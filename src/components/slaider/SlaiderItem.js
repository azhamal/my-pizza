import { SlaiderItemWrapper } from "./style";

export const SlaiderItem = ({src}) => {
  return (
    <SlaiderItemWrapper src={src}>
        <img src={src} alt='img' width="160px"/>
        Пицца по акции
    </SlaiderItemWrapper>
  )
}
export default SlaiderItem