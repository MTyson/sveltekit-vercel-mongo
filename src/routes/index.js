import clientPromise from '../lib/mongo';

export async function post ({request}) {
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!");
  const dbConnection = await clientPromise;
  const db = dbConnection.db();
  const collection = db.collection('apothegm');
    //let apo = JSON.parse(request.body);
    //let apo = await request.formData(); 
  let apo = await request.json();
  console.log("apo: " + apo);
  const dbApo = await collection.insertOne(apo);
  return { status: 200, body: { dbApo } }
}

export async function get ({request}) {
  let cats = [
                { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
                { id: 'z_AbfPXTKms', name: 'Maru' },
                { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
        ];
  return { 
    status: 200, 
    headers: { 'content-type': 'application/json' },
    body: { cats } 
  };
}
