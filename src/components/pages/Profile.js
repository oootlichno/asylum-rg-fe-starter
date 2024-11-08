import React from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user } = useAuth0();

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
            <Card.Body>
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <img
                  src={user.picture}
                  alt={user.name}
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginBottom: '10px',
                  }}
                />
                <h3>{user.name}</h3>
                <p className="text-muted">{user.email}</p>
              </div>
              <pre
                style={{
                  backgroundColor: '#e9ecef',
                  padding: '10px',
                  borderRadius: '4px',
                  overflow: 'auto',
                  fontSize: '0.9rem',
                  color: '#333',
                }}
              >
                {JSON.stringify(user, null, 2)}
              </pre>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;