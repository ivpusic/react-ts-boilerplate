import * as React from 'react';

import Component from 'components/Component';

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <p>Display</p>
        <Component />
      </div>
    );
  }
}

export default App;
