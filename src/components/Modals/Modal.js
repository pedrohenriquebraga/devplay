import { Container } from '../../../styles/Modals/Modal'

function Modal({ children, hidden }) {
  return (
    <Container hidden={hidden}>
        {children}
    </Container>
)
}

export default Modal;