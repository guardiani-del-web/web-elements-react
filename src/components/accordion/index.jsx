import React from "react";
import './../../App.css';

function Accordion() {
    const accordionData = [
        {
            title: 'Lorem ipsum dolor sit amet',
            content: 'Maecenas id finibus massa, mattis blandit nunc. Maecenas a turpis at massa viverra volutpat lacinia sit amet neque.'
        },
        {
            title: 'Nulla sodales nunc eu lorem',
            content: 'Curabitur in commodo velit, congue interdum nisi. Morbi congue purus elit, non tincidunt eros lobortis at. Nulla a odio ligula.'
        },
        {
            title: 'Etiam fringilla mi in lectus',
            content: 'Nulla eget tincidunt dui. Maecenas aliquet nec velit ut mattis. Nulla sagittis ligula in ex placerat lacinia. Praesent ac dui quis augue sollicitudin dictum sit amet cursus neque. Sed posuere libero at lobortis semper.'
        },
    ]


  const multiple = false;
  const open = false;

    return (
        <div class="component">
            <h2>Accordion</h2>
            <we-accordion-group multiple={multiple}>
                {accordionData.map((accordion, i) => (
                    <we-accordion open={i === 1 ? open : false}>
                        <div slot="title">{accordion.title}</div>
                        <div slot="content">{accordion.content}</div>
                    </we-accordion>
                ))}
            </we-accordion-group>
        </div>
    );
}

export default Accordion;
