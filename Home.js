import { Alert, Container } from "react-bootstrap";

export function Home() {
    return (
        <>
            <Container className="mt-5 text-center">
                <Alert variant="primary">
                    Welcome to News app
                </Alert>
            </Container>
            <Container>
                <p>In this application you can view all news, top headlines and news based on your search</p>
            </Container>
        </>

    );
}