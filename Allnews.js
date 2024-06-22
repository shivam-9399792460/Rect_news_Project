import { Component } from "react";
import { Alert, Col, Container, Form, Row } from "react-bootstrap";
import { getAllNews } from "../services/NewsSrvice";
import { NewsArticle } from "./NewsArtical";


export class AllNews extends Component {
    constructor() {
        super();
        this.state = {
            news: [],
            topic: ''
        }
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const response = await getAllNews(this.state.topic);
        this.setState({ news: response.data.articles });
    }
    async componentDidMount() {
        const response = await getAllNews('sports');
        console.log(response.data.articles);
        this.setState({ news: response.data.articles })
    }
    render() {
        return (
            <Container>
                <Container className="mt-4 text-center">
                    <Alert variant="primary">View All News</Alert>
                </Container>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Topic</Form.Label>
                                    <Form.Control type="text" placeholder="Enter topic" name="topic" onChange={this.handleChange} />
                                </Form.Group>
                                <input type={'submit'} value='Fetch News' className="btn btn-success btn-sm"></input>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                <Container className="mt-3">
                    <Row>
                        {
                            this.state.news.map((item) => {
                                return (
                                    <NewsArticle article={item}></NewsArticle>

                                )
                            })
                        }
                    </Row>
                </Container>
            </Container>
        )
    }
}