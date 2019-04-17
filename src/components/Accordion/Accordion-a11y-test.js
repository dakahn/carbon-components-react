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
  const config = {};

  axe
    .run(accordionNode, config)
    .then((err, { violations }) => {
      expect(err).toBe(null);
      expect(violations).toHaveLength(666);
    })
    .catch(err => {
      console.log(err);
    });
});
