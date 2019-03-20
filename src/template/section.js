import React from 'react';
import { Link } from 'gatsby';

const Template = ({ pageContext }) => <div>
    Go somewhere new?
    {
        pageContext.links.map(x => <Link to={x}>{x}</Link>)
    }
</div>

export default Template;