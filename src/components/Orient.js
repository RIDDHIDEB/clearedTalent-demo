import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Orient.css";

function Orient() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleInputChange = (event) =>{
      const {name, value} = event.target;
      setShow((prevData) =>({
        ...prevData,
        [name]: value
      }));
    }
    const handleSubmit = (event) =>{
      event.preventDefault();
      console.log('Form Data:', show);
    };

    return(
        <React.Fragment>
          <Button variant='none' onClick={handleShow}>Contact Us</Button>

          <Modal size='lg' show={show} onHide={handleClose} centered>
            <div className='modal-style'>
            <Modal.Header closeButton>
                <Modal.Title className='modal-title'><h1 className='heading'>Contact Us</h1></Modal.Title>
            </Modal.Header>
            <Modal.Body >
            <form className='form' onSubmit={handleSubmit}>
              <div className="row">
                <div className="col">
                  <div className="form-group" >
                    <label htmlFor="name">Name</label>
                      <input type="text" class="form-control" placeholder='Enter your name' name='name' value={show.name} onChange={handleInputChange}/>
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label for="name">Email</label>
                      <input type="text" className="form-control" placeholder='Enter your email' name='email' value={show.value} onChange={handleInputChange}/>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label for="name">Your Message</label>
                  <textarea type="text" class="form-control" rows='5' placeholder='Enter your message' name='your message'></textarea>
              </div>
                </form> 
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>Cancel</Button>
                    <Button variant="primary" onClick={handleSubmit}>Send</Button>
                </Modal.Footer>
            </div>
          </Modal>
  
        </React.Fragment>
    );
}

export default Orient;