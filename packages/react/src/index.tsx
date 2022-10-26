import { styled } from './styles'

const Button = styled('button', {
    fontFamily: '$default',
    backgroundColor: "$ignite300",
    borderRadius: "$md",
    padding: "$4"
})

export function App() {
    return (
        <>
            <Button>Click me</Button>
        </>
    )
}
