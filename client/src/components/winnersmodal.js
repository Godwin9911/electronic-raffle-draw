import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';


class WinnersModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }


  render() {
      const [...contestants] = this.props.contestants;
      const [...winners] = this.props.winners;
    return (
      <div>
        <Button type="submit" outline color="success" block  onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          {
            winners.length > 0 ? (
              <div>
                <ModalHeader toggle={this.toggle}><p><i class="fas fa-trophy"></i>{' '}Winners</p></ModalHeader>
                <ModalBody>
                  
                <Table borderless>
                  {
                    winners.map((winner) => (
                      <tr key={winner}>
                        <th><p className="no-wrap">{contestants[winner].fullname}</p></th>
                        <td>{contestants[winner].track}</td>
                      </tr>
                  ))
                  }
                  </Table>
                </ModalBody>
                <ModalFooter>
                  <Button color="success" onClick={this.toggle}>Save</Button>{' '}
                  <Button color="danger" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
              </div>
            ) : (
              <div>
                <ModalHeader toggle={this.toggle}><p>Error</p></ModalHeader>
                <ModalBody>You did not Select the Number of Winners, and shuffled them</ModalBody>
                <ModalFooter>
                  <Button color="danger" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
              </div>
            )
          }
        </Modal>
      </div>
    );
  }
}

export default WinnersModal;