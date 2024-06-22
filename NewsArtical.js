import { Component } from "react";
import { Card, Col } from "react-bootstrap";

export class NewsArticle extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Col lg={6}>
                <Card>
                    <Card.Img variant="top" src={this.props.article.urlToImage} />
                    <Card.Body>
                        <Card.Title>{this.props.article.title}</Card.Title>
                        <Card.Text>
                            {this.props.article.description}
                        </Card.Text>
                        <a href={this.props.article.url} className="btn btn-success btn-sm">Read Full Article...</a>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}