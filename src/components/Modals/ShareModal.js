import Modal from './Modal'
import { ShareBox } from "../../../styles/Modals/ShareModals";
import { IoCopyOutline } from "react-icons/io5";
import { ImCancelCircle } from "react-icons/im";

function ShareModal() {
    
    return (
        <Modal hidden={true}>
            <ShareBox>
                <h2>Compartilhar Vídeo</h2>
                <p>Copie o link e compartilhe com o mundo!</p>
                <input
                    readonly
                    disabled
                    aria-modal="true"
                    value=''
                />
                <div className="ActionsButtons">
                    <button id="Recuse">
                        <ImCancelCircle /> Cancelar
                    </button>
                    <button id="Accept">
                        <IoCopyOutline /> Copiar
                    </button>
                </div>
            </ShareBox>
        </Modal>
    );
}

export default ShareModal;
