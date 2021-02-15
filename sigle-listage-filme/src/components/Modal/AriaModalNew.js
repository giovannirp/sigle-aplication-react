import React, { Component } from "react";
import AriaModal from "react-aria-modal";
import "./Modal.css";

class AriaModalNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalActive: false,
    };

    this.activateModal = this.activateModal.bind(this);
    this.deactivateModal = this.deactivateModal.bind(this);
    this.getApplicationNode = this.getApplicationNode(this);
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
          <div className='modal-body'>
            <p>
              Here is a modal <a href='#'>with</a> <a href='#'>some</a>{" "}
              <a href='#'>focusable</a> parts.
            </p>
          </div>
          <footer className='modal-footer'>
            <button
              id='demo-one-deactivate'
              className='btn btn-danger'
              onClick={this.deactivateModal}
            >
              Fechar Modal
            </button>
          </footer>
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
