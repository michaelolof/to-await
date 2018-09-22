export default async function to<T>(promise:Promise<T>):Promise<T|Error> {
  return promise
    .then( data => data )
    .catch( err => new Error( err ) );
}

