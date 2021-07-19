import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const ContainerFlex = styled.div`
  display: flex;
  margin: auto auto;
`

export const LoginIcon = styled.img`
  border-radius: 100%;
  width: 40%;
`

export const Button = styled.button`
  border: 0;
  border-radius: 10px;
  height: 40px;
  padding: 11px 15px;
  margin: auto 200px;
  background-color: #FFC233;
  color: #fff;
  font-size: 18px;
  font-weight: 700px; 
  font-family: 'Ubuntu', sans-serif;
`

export const Title = styled.h2`
  font-weight: bold;
  font-size: 36px;
  text-align: center;
  color: #265AB3;
  font-family: 'Ubuntu', sans-serif;
`

export const TitleSmall = styled.h3`
  font-weight: bold;
  font-size: 24px;
  font-family: 'Ubuntu', sans-serif;
`
export const LabelTitle = styled.label`
  font-weight: bold;
  font-size: 36px;
  color: #265AB3;
  font-family: 'Ubuntu', sans-serif;
`

export const Field = styled.input`
  padding: 10px;
  border: 1px solid #000;
  border-radius: 10px;
  font-size: 14px;
  color: #68717A;
  margin-bottom: 56px;
  width: 500px;
  height: 46px;
  font-family: 'Ubuntu', sans-serif;
`

export const TextBody = styled.p`
  font-size: 14px;
  text-align: center;
  font-family: 'Ubuntu', sans-serif;
`

export const CentralizedContainer = styled.div`
  align-items: center;
  margin: 200px auto;
  padding: 0 135px;
`

export const NavegationButton = styled(Link)`
  padding: 10px 15px;
  text-align: center;
  border: 0;
  border-radius: 10px;
  font-family: 'Inter', sans-serif;
`

export const NavegationBox = styled(Link)`
  position: absolute;
  text-align: center;
  text-decoration: none;
  padding: 25px 180px;
  font-weight: bold;
  font-size: 24px;
  color: #265AB3;
  font-family: 'Ubuntu', sans-serif;

  &:visited{
  color: #265AB3;    
  }
`

export const Box = styled.div`
  margin: 25px auto 0 auto;
  background-color: #FFC233;
  width: 710px;
  height: 73px;
  border-radius: 24px;
`

export const NumberOccorences = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  text-align: center;
  font-size: 18px;
  color: #265AB3;
  background-color: #FFF;
  float: right;
  padding-top: 15px;
  margin-right: 39px; 
  margin-top: 12px;
  font-family: 'Ubuntu', sans-serif;
`

export const Ball = styled.div`
  background-color: #C4C4C4;
  width: 30px;
  height: 30px;
  border-radius:100%;
  margin-left: 600px;
`

export const BorderBox = styled(Link)`
  margin: auto auto;
  margin-bottom: 26px;
  display: flex;
  width: 1170px;
  height:230px;
  border: 1px solid #CA1D23;
  align-items: center;
  box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.25);
  color: #265AB3;

  &:visited{
  color: #265AB3;
  }
`

export const HeaderSaveButton = styled.button`
  width: 90px;
  height: 40px;
  border-radius: 3px;
  color: white;
  background-color: #28A745;
  border: 0;
  font-size: 14px;
  font-family: 'Ubuntu', sans-serif;

  &:hover{
    cursor:pointer;
  }
`

export const VerticalFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 385px;
  margin-left: 115px;
`

export const SelectOption = styled.select`
  width: 385px;
  height: 35px;
  border-radius: 4px;
  color: #ABB5BE;
  border: 1px solid #CED4DA;
  font-family: 'Ubuntu', sans-serif;
  margin: 0 auto 25px auto; 
`

export const SmallMap = styled.iframe`
  border: 0;
  width: 200px;
  height: 220px;
`

export const BigMap = styled.iframe`
  border: 0;
  width: 572px;
  height: 346px;
`