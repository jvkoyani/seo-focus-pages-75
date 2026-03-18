import React from 'react';

interface JsonLdProps {
    schemaString: string;
}

const JsonLd: React.FC<JsonLdProps> = ({ schemaString }) => {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: schemaString }}
        />
    );
};

export default JsonLd;
