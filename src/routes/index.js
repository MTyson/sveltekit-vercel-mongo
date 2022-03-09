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

