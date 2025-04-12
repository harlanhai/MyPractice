/**
 * 使用 portal 封装一个模态框  
 */ 
import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
  if(!isOpen) return null;  // 不渲染任何内容
   
  return ReactDOM.createPortal(
    <div className="modal-portal">
      <div className="modal-header"></div>
      <div className="modal-content">
        {children}
      </div>
      <div className="modal-footer">
        <button className="btn-close" onClick={onClose}>close</button>
      </div>
    </div>
  )
}

export default Modal;

// 使用方法
import Modal from "./Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1>React Modal 示例</h1>
      <button onClick={() => setIsOpen(true)}>打开模态框</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>我是一个模态框</h2>
      </Modal>
    </div>
  );
};