import { Col, Row } from "reactstrap"

export const CenteredLayout = ({children}) => {
    return (
            <Row className="m-0">
                <Col xs={{size: 12}} md={{size: 10, offset: 1}} lg={{size: 6, offset: 3}}>
                    {children}
                </Col>
            </Row>
    )
}