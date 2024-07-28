import {createRealmContext} from '@realm/react';
import {Year} from './exam';
export const MovieRealmContext = createRealmContext({
  schema: [Year]  
});