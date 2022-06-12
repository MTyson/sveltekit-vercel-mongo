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
  console.warn("BEGIN get");
  console.warn("ENV: " + JSON.stringify(process.env));
  const dbConnection = await clientPromise;
  const db = dbConnection.db();
  const collection = db.collection("apothegm");
  let apos = await collection.find({}).toArray();

  return { 
    status: 200, 
    headers: { 'content-type': 'application/json' },
    body: { apos } 
  };
}
