import { PropsWithChildren } from 'react';
import { RealmProvider, AppProvider, UserProvider, useQuery, useRealm } from '@realm/react';
// import { useQuery } from '@realm/react';
// import { YearSchema } from '../models/exam';
import { UnitSchema, Year } from '../models/exam';
// import AnonymousLogin from '../components/AnonymousLogin';
// import Realm from 'realm';
import { MovieRealmContext } from '../models';

const appId = 'trello-mjcyr';

export default function RealmCustomProvider({ children }) {
  // const {RealmProvider} = MovieRealmContext;  
  
  return (
        <RealmProvider  schema={[Year, UnitSchema]} schemaVersion={8} closeOnUnmount={false} >
        <SomeComponent />
          {children}
        </RealmProvider>
  );
}


const SomeComponent = () => {
  const realm = useRealm();

  //  realm.write(() => {
  //         realm.create('Year', { id:"2",  year:"jnj167m8",
  //           subject: "LLLLLLLLLLLLLLLL",
  //           number_of_Questions: '78k',
  //           time_Allowed: '60,l'})
  //         });
  //    console.log("YearSchema1 provider ssssssssssssssssssssssssssssssssssssssss")
  //   const YearSchema1 = useQuery(Year);
  //   console.log("YearSchema1 provider jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj", YearSchema1)
  };