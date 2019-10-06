import * as React from 'react';

// export interface ISampleProps { }

export class Sample extends React.Component<{}, {}> {
  public render(): React.ReactElement<{}> {

    return (
      <div>
        <span className="message">Hello world:</span>
        <ul>
          <li>one</li>
          <li>two</li>
          <li>three</li>
        </ul>
      </div>
    );
  }
}