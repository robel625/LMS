import { BSON, Realm, ObjectSchema } from 'realm';

export class Year extends Realm.Object<Year> {
       _id: BSON.ObjectId = new BSON.ObjectId();
       id!: string;
       year!: string;
       subject!: string;
       number_of_Questions!: string;
       time_Allowed!: string;
       createdAt: Date = new Date();
     
       static primaryKey = '_id';

}


export const UnitSchema = {
  name: 'Unit',
  properties: {
    id: 'int',
    subject: 'string',
    grade: 'int',
    unit: 'int',
    title: 'string',
    number_of_Questions: 'string'
  }
};



// export const YearSchema = {
//         name: 'Year',
//         primaryKey: 'id', // Optional: Add a primary key if needed
//         properties: {
//           id: 'string', // Or 'int' or a custom type for unique identification
//           year: 'string',
//           subject: 'string',
//           number_of_Questions: 'int',
//           time_Allowed: 'int',
//         },
//       };

    
// export const realmConfig = {
//   schema: [YearSchema],
//       };


      // _id: BSON.ObjectId = new BSON.ObjectId();
      // description!: string;
      // isComplete: boolean = false;
      // createdAt: Date = new Date();
    
      // position: Realm.Types.Int = 0;
    
      // user_id!: string;
    
      // static primaryKey = '_id';
    
    
      // _id!: BSON.ObjectId;
    // name!: string;
  
    // static schema: ObjectSchema = {
    //   name: "Task",
    //   primaryKey: "_id",
    //   properties: {
    //     _id: 'objectId',
    //     name: { type: "string",indexed: 'full-text' },
    //     // or: counter: { type: "int", presentation: "counter" },
    //   },
    // };
  