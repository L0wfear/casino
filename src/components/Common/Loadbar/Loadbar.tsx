import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import zebra from '../../../img/zebra.png'

type LoadBarProps = {
  width: number
}

const SLoadBar = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(34, 49, 56, 0.5) 0,
    rgba(34, 49, 56, 0.5) 100%
  );
  width: 400px;
  height: 50px;
  top: 50%;
  right: 50%;
  transform: translate(20%, -50%);
  position: absolute;
  overflow: hidden;
  border-radius: 2px;
`

const translate = keyframes`
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(-30%);
  }
`
const SLoadBarImgWrap = styled.div<LoadBarProps>`
  height: 100%;
  width: ${(props) => props.width}%;
  overflow: hidden;
`
const SLoadBarImg = styled.div`
  width: 1000px;
  height: 100%;
  background: url(${zebra}) #d0e805;
  animation: ${translate} 8s linear infinite;
`

const SLoadBarText = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  z-index: 1;
  color: black;
  font-size: 30px;
`

const LoadBar = () => {
  const [loadBarWidth, setLoadBarWidth] = useState(20)

  const loadBarOnClick = () => {
    if (loadBarWidth >= 100) {
      setLoadBarWidth(0)
    } else {
      setLoadBarWidth(loadBarWidth + 2)
    }
  }

  return (
    <SLoadBar onClick={loadBarOnClick}>
      <SLoadBarImgWrap width={loadBarWidth}>
        <SLoadBarImg />
        <SLoadBarText>
          <span> {loadBarWidth / 2}/50 </span>
        </SLoadBarText>
      </SLoadBarImgWrap>
    </SLoadBar>
  )
}

export default LoadBar
