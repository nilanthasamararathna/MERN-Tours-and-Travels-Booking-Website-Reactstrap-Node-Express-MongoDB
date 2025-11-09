import { Col, Container, Row } from 'reactstrap'
import './newsletter.css'
import mailTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
  return (
    <section className="newsletter">
        <Container>
            <Row>
                <Col lg="6">
                    <div className="newsletter__content">
                        <h2>Subscribe now to get useful traveling information</h2>    
                        <div className="newsletter__input">
                        <input type="email" placeholder="Enter your email" />
                        <button className="btn newsletter__btn">Subscribe</button>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa neque omnis id quos, recusandae porro doloribus illo repudiandae voluptates explicabo.</p>
                    </div>
                </Col>
                <Col lg="6">
                    <div className="newsletter__img">
                        <img src={mailTourist} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Newsletter