import React from 'react';

import { Store } from '@module-federation-testing/shared';
import { useDependencies } from '@servicetitan/react-ioc';
import { observer } from 'mobx-react';
import { Button } from '@servicetitan/design-system';

const App: React.FC = observer(() => {
    const [store] = useDependencies(Store);

    return (
        <React.Fragment>
            <div>Feature 2</div>
            <div>{store.count}</div>
            <Button onClick={store.increment}>++</Button>
        </React.Fragment>
    );
});

export default App;
