import React from 'react';
import Accordion from './Accordion';
import axe from 'axe-core';
import { mountToDoc } from '../../tools/__tests__/test-helpers';

it('has no errors', () => {
  const accordionComponent = mountToDoc(
    <Accordion>
      <div>test</div>
    </Accordion>
  );
  const accordionNode = accordionComponent.getDOMNode();
  const config = {
    rules: {
      'color-contrast': { enabled: false },
      'link-in-text-block': { enabled: false },
    },
  };

  axe.run(accordionNode, config).then(result => {
    const { violations } = result;
    expect(violations).toHaveLength(0);
  });
});
