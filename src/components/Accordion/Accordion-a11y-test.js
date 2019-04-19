import { exampleComponent } from './Accordion-story';
import { axe, toHaveNoViolations } from 'jest-axe';
import ReactDOMServer from 'react-dom/server';

/**
 * A suite of accessibility focused tests including a check against
 * axe-core's AAT for the accordion component.
 */
expect.extend(toHaveNoViolations);

describe('Acccordion', () => {
  it('throws no Axe violations', async () => {
    // TODO: "cannot read property 'emit' of undefined error"
    const html = ReactDOMServer.renderToString(exampleComponent);
    const results = await axe(html);

    expect(results).toHaveNoViolations();
  });

  // TODO: write further and more elaborate a11y tests
});
