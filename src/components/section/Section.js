import React from 'react';
import PropTypes from 'prop-types';

export default function Section({ title, children }){
    return (
        <section>
        <h2 className="sectionTitle">{title}</h2>
        {children}
    </section>
    )
}

// const Section = ({children, title}) => (
//     <section>
//         <h2 className="sectionTitle">{title}</h2>
//         {children}
//     </section>
// );

Section.propTypes = {
    title: PropTypes.string.isRequired
};

//export default Section;