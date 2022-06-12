import styled from '@emotion/styled'
import React from 'react'

const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
`

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledRow>
      {children}
    </StyledRow>
  )
}