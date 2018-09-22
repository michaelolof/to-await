export default async function to<T>(promise:Promise<T>) {
  return withErrors<T>( resolve<T>(  promise ) );
}

async function resolve<T>(promise:any) {
  return promise as Promise<T>;
}

function withErrors<T>(promise:any):[T, Error | undefined] {
  return promise.then( (data:T) => {
    return [ data, undefined ];
  })
  .catch( (err:Error) => [undefined, err]);
}
