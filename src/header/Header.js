import { HeaderWrapper ,
    HeaderRightBlock ,
    Logo,
    Destination,
    Call,
    HeaderLeftBlock,
    Coins,
    Singin
} from "./style";
import {StarFilled,DollarOutlined} from'@ant-design/icons'
const Header = () => {
  return (
    <HeaderWrapper>


      <HeaderRightBlock>
        <Logo>My Pizza</Logo>
        <Destination>
          <div>Доставка пиццы Александров</div>
          <span>30 мин , 4.91
          <StarFilled 
          style={{color:'gold'}}
          />
          </span>
        </Destination>
        <Call>
            <div>8 800 302-00-64</div>
            <div>Звонок бесплатный</div>
        </Call>
      </HeaderRightBlock>


      <HeaderLeftBlock>
      <Coins>
      <DollarOutlined 
      style={{fontSize:'18px'}}
      
/>
       <span> Коинс </span>
        </Coins>
      
      <Singin>Войти</Singin>
      </HeaderLeftBlock>
      
    </HeaderWrapper>
  );
};
export default Header;
