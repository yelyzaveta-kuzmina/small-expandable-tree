import React from 'react';
import Tree from './tree';
import { members } from './family';

const App = () => {

  return(
    <div>
      <Tree member={members[0]}/>
    </div>
  )
}

export default App;