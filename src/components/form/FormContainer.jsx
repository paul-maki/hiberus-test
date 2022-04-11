import classNames from "classnames";
import { Container, Form, FormGroup } from "reactstrap";
import styles from './form-container.module.scss';

export const FormContainer = ({children, handleSubmit, headerClassName, headerText}) => {
    return(
        <Container className={styles.container}>        
            <div className={styles['form-wrapper']}>
                <header className={classNames(styles['login-header'], headerClassName)}>
                    <h1>{headerText}</h1>
                </header>
                <div className={styles['form-container']}>
                    <Form className={styles.form} onSubmit={handleSubmit}>
                        <FormGroup className={classNames(styles['form-group'])}>
                            {children}
                        </FormGroup>
                    </Form>
                </div>                        
            </div>
        </Container>
    )
}