import PropsTypes from "prop-types"
import "./Modal.scss";

export default function Modal({ children, visible, onRequestClose }) {
  if( !visible ) return null;
  return (
    <div className="ModalComponent" onClick={onRequestClose}>
      <div className="ModalComponent_body" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

Modal.propTypes = {
  children: PropsTypes.node.isRequired,
  visible: PropsTypes.bool,
  onRequestClose: PropsTypes.func,
}