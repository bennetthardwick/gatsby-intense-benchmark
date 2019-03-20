import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled.div`
    > * {
        display: block;
        padding: 20px;
    }
`

const Template = ({ pageContext }) => <Container>
    Go somewhere new?
    {
        pageContext.links.map(x => <Link key={x} to={x}>
            <img alt={''} src={'https://random.imagecdn.app/500/150'} />
        </Link>)
    }
</Container>

export default Template;