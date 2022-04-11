import { useEffect, useState } from "react";
import { Button, Col, Modal, ModalBody, ModalFooter, Row, Table } from "reactstrap";
import { UserInfo } from "../userInfo/UserInfo";
import styles from './user-list.module.scss'
import { UserListTable } from "./UserListTable";


export const UserList = ({ users, handleClickDelete, handleSubmit }) => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [disabled, setIsDisabled] = useState(false)
    const defaultModal = {
        open: false,
        dataModal : false,
        deleteModal: false
    }
    const [modal, setModal] = useState(defaultModal);

    const handleClickUpdate = (user) => {
        setModal({
            ...defaultModal,
            open: true,
            dataModal : true,
        })
        setIsDisabled(false);
        setSelectedUser(user);
    }    

    const handleClickDetails = (user) => {
        setModal({
            ...defaultModal,
            open: true,
            dataModal : true,
        })
        setIsDisabled(true);
        setSelectedUser(user);
    }  

    const confirmDelete = (user) => {
        setModal({
            ...defaultModal,
            open: true, 
            deleteModal: true
        })
        setSelectedUser(user);
    }
    
    useEffect(() => {
        setModal(defaultModal)
    },[users])

    return(
        <div className={styles['table-container']}>
            <Row>
                <Col md={{size: 10, offset: 1}}>
                    {users && <UserListTable users={users} handleClickDetails={handleClickDetails} handleClickUpdate={handleClickUpdate} confirmDelete={confirmDelete} />}
                    <Modal isOpen={modal.open} toggle={() => setModal(defaultModal)}>
                        <ModalBody>
                        {modal.open && modal.deleteModal && <div>
                                <p>Do you want to delete the user X?</p>
                                <ModalFooter>
                                    <Button color="danger" onClick={() => {
                                        handleClickDelete(selectedUser);
                                        setModal(defaultModal);
                                    }}>Delete</Button>{' '}
                                    <Button color="secondary" onClick={() => setModal(defaultModal)}>Cancel</Button>
                                </ModalFooter>
                            </div>
                        }
                        {modal.open && modal.dataModal && <UserInfo user={selectedUser} disabled={disabled} handleSubmit={(event) => handleSubmit(event, selectedUser)} />}                   
                        </ModalBody>
                    </Modal>
                </Col>
            </Row>
        </div>
    )
}