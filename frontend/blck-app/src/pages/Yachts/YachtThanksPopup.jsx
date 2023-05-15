import React from 'react';
import Modal from 'react-bootstrap/Modal';

function YachtThanksPopup({setLgShow, lgShow}) {
  // const [lgShow, setLgShow] = useState(false);

  return (
    <>
      {/* <Button onClick={() => setLgShow(true)}>Large modal</Button> */}
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Thanks For Your Enquiry !
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          We will get in touch with you soon ...
          {/* <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/> */}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default YachtThanksPopup;