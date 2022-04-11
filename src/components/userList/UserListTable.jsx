import { Button, Table } from "reactstrap";
import styles from './user-list.module.scss';


export const UserListTable = ({users, handleClickUpdate, confirmDelete, handleClickDetails}) => {
    return(
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => {
                    return(
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.surname}</td>
                            <td>{user.email}</td>
                            <td>
                                <div className={styles['button-group']}>
                                    <Button color="primary" onClick={() => handleClickUpdate(user)}>Update</Button>
                                    <Button color="danger" onClick={() => confirmDelete(user)}>Delete</Button>
                                    <Button color="success" onClick={() => handleClickDetails(user)}>See details</Button>                                                
                                </div>
                            </td>
                        </tr>
                    )
                }
                )}
            </tbody>
        </Table>
    )
}