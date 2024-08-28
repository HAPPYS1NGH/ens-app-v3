import { ComponentProps, forwardRef } from 'react'
import styled, { css } from 'styled-components'

import { Button } from '@ensdomains/thorin'

const StyledWrapButton = styled(Button)(
  ({ theme }) => css`
    width: 100%;
    @media (min-width: 640px) {
      max-width: ${theme.space['36']};
    }
  `,
)

const BaseWrapButton = forwardRef(
  ({ children, ...props }: ComponentProps<typeof StyledWrapButton>, ref) => {
    return (
      <StyledWrapButton size="small" colorStyle="accentPrimary" ref={ref} {...props}>
        {children}
      </StyledWrapButton>
    )
  },
)

export default BaseWrapButton
