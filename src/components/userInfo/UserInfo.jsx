import { Button, Input } from "reactstrap"
import { FormContainer } from "../form/FormContainer"

export const UserInfo = ({user, disabled, handleSubmit}) => {
    return(
        <div>
            <FormContainer handleSubmit={handleSubmit} headerText={'User data'} headerClassName={disabled ? 'bg-success' : 'bg-primary'}>
                <Input disabled={disabled} type="text" name="name" defaultValue={user.name}/>
                <Input disabled={disabled} type="text" name="surname" defaultValue={user.surname}/>
                <Input disabled={disabled} type="text" name="email" defaultValue={user.email}/>
                {!disabled && <Button color="primary">Modify</Button>}
            </FormContainer>
        </div>
    )
}