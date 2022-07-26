import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Button from '.'

describe('<Button />', () => {
    it('Deve renderizar button com texto', () => {
        render(<Button>Label</Button>)
        expect(screen.getByRole('button')).toHaveTextContent('Label')
    })
    it('Deve chamar o evento click executado', () => {
        const handleClick = jest.fn()
        render(<Button onClick={handleClick}>Label</Button>)
        fireEvent.click(screen.getByRole('button'))
        expect(handleClick).toBeCalledTimes(1)
    })
    it('Deve ser renderizado como link o href', () => {
        render(<Button href='/url'>Label</Button>)
        expect(screen.getByRole('link')).toHaveAttribute('href', '/url')
    })
    it('Deve renderizar o link que tiver o elemento to', () => {
        render(<BrowserRouter>
        <Button to='url'>Label</Button>
        </BrowserRouter>)
        expect(screen.getByRole('link')).toHaveAttribute('href', '/url')
    })
    it('Deve renderizar o loading, se este for verdadeiro', () => {
        render(<Button loading>Label</Button>)
        const status = screen.getByRole('status')
        expect(status).toBeVisible()
        expect(status).toHaveTextContent('Carregando...')
    })
    it('Não deve renderizar loading se o mesmo for falso', () => {
        render(<Button loading={false}>Label</Button>)
        expect(screen.queryByRole('status')).toBeNull()
    })
    it('Não deve renderizar loading se o mesmo não existir', () => {
        render(<Button>Label</Button>)
        expect(screen.queryByRole('status')).toBeNull()
    })
    it('Deve desativar botão tiver disabled', () => {
        const handleClick = jest.fn()
        render(<Button disabled>Label</Button>)
        expect(screen.getByRole('button')).toBeDisabled()
        fireEvent.click(screen.getByRole('button'))
        expect(handleClick).toBeCalledTimes(0)
    })
})