import React from "react";
import { Button as ButtonBootstrap, ButtonProps, Spinner } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'
import styled from "styled-components"

type Props = {
    to?: string,
    loading?: boolean
} & ButtonProps

export default function Button({ to, loading = false, children, ...otherProps }: Props) {
    const button = <ButtonStyled {...otherProps} role={undefined}>
        {loading && (
            <Spinner animation='border' role='status' size='sm' className='me-2'>
                <span className="visually-hidden">Carregando...</span>
            </Spinner>
        )}
        {children}
    </ButtonStyled>
    if (to) {
        return (
            <LinkContainer to={to}>
                {button}
            </LinkContainer>
        )
    }
    return button
}

const ButtonStyled = styled(ButtonBootstrap)`
    border-radius: 100px;
    padding-left: 50px;
    padding-right: 50px;
    ${props => props.size === 'lg' && `
      @media (min-whidt: 992px){
          padding-left: 92px;
          padding-right: 92px;
      }
    `}
    ${props => (props.variant === 'danger' || !props.variant) && `
     background-color: #BD8085  !important; 
     border-color:  #BD8085  !important;
     &:hover {
         background-color: #CB8D92 !important;
         border-color: #CB8D92 !important;
     }
    ` }
    ${props => (props.variant ==='outline-danger') && `
     color: #BD8085; 
     border-color:  #BD8085  !important;
     &:hover {
         background-color: #CB8D92 !important;
         border-color: #CB8D92 !important;
     }`
    }
`