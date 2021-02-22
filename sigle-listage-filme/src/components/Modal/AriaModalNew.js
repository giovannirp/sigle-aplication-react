import React, { Component } from "react";
import AriaModal from "react-aria-modal";
import "./Modal.css";

class AriaModalNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalActive: false
    };

    this.nameInput = React.createRef();

    this.activateModal = this.activateModal.bind(this);
    this.deactivateModal = this.deactivateModal.bind(this);
    this.getApplicationNode = this.getApplicationNode(this);
  }
  
  componentDidMount() {
    if(this.nameInput.current) {
      this.nameInput.current.focus();
    }
  }

  activateModal = () => {
    this.setState({ modalActive: true });
  };

  deactivateModal = () => {
    this.setState({ modalActive: false });
  };

  getApplicationNode = () => {
    return document.getElementById("application");
  };

  render() {
    const modal = this.state.modalActive ? (
      <AriaModal
        focusDialog='true'
        titleText='New Modal'
        onExit={this.deactivateModal}
        initialFocus='#demo-one-deactivate'
        getApplicationNode={this.getApplicationNode}
        underlayStyle={{ paddingTop: "2em" }}
      >
        <div id='demo-one-modal' className='containerModal'>
          <action className='modal-body'>
            <p>
              <strong>Preencher dados</strong>
            </p>
            <label>Nome</label>
            <input
              type='text'
              id='nameInput'
              className='form-control'
              name='nome'
            />
            <br />
            <label>idade</label>
            <input type='text' className='form-control' name='idade' />
            <div className='mt-4 mb-3 d-flex justify-content-center'>
              <button
                id='demo-one-deactivate'
                className='btn btn-danger'
                onClick={this.deactivateModal}
              >
                Fechar Modal
              </button>
            </div>
          </action>
        </div>
      </AriaModal>
    ) : (
      false
    );
    return (
      <div>
        <button className='btn btn-primary' onClick={this.activateModal}>
          Abrir Modal
        </button>
        {modal}
      </div>
    );
  }
}

export default AriaModalNew;
