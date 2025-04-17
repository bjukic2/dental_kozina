
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Poruka
 * 
 */
export type Poruka = $Result.DefaultSelection<Prisma.$PorukaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Porukas
 * const porukas = await prisma.poruka.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Porukas
   * const porukas = await prisma.poruka.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.poruka`: Exposes CRUD operations for the **Poruka** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Porukas
    * const porukas = await prisma.poruka.findMany()
    * ```
    */
  get poruka(): Prisma.PorukaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Poruka: 'Poruka'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "poruka"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Poruka: {
        payload: Prisma.$PorukaPayload<ExtArgs>
        fields: Prisma.PorukaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PorukaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PorukaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PorukaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PorukaPayload>
          }
          findFirst: {
            args: Prisma.PorukaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PorukaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PorukaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PorukaPayload>
          }
          findMany: {
            args: Prisma.PorukaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PorukaPayload>[]
          }
          create: {
            args: Prisma.PorukaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PorukaPayload>
          }
          createMany: {
            args: Prisma.PorukaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PorukaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PorukaPayload>[]
          }
          delete: {
            args: Prisma.PorukaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PorukaPayload>
          }
          update: {
            args: Prisma.PorukaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PorukaPayload>
          }
          deleteMany: {
            args: Prisma.PorukaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PorukaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PorukaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PorukaPayload>[]
          }
          upsert: {
            args: Prisma.PorukaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PorukaPayload>
          }
          aggregate: {
            args: Prisma.PorukaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePoruka>
          }
          groupBy: {
            args: Prisma.PorukaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PorukaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PorukaCountArgs<ExtArgs>
            result: $Utils.Optional<PorukaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    poruka?: PorukaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Poruka
   */

  export type AggregatePoruka = {
    _count: PorukaCountAggregateOutputType | null
    _avg: PorukaAvgAggregateOutputType | null
    _sum: PorukaSumAggregateOutputType | null
    _min: PorukaMinAggregateOutputType | null
    _max: PorukaMaxAggregateOutputType | null
  }

  export type PorukaAvgAggregateOutputType = {
    id: number | null
  }

  export type PorukaSumAggregateOutputType = {
    id: number | null
  }

  export type PorukaMinAggregateOutputType = {
    id: number | null
    ime: string | null
    email: string | null
    poruka: string | null
    createdAt: Date | null
  }

  export type PorukaMaxAggregateOutputType = {
    id: number | null
    ime: string | null
    email: string | null
    poruka: string | null
    createdAt: Date | null
  }

  export type PorukaCountAggregateOutputType = {
    id: number
    ime: number
    email: number
    poruka: number
    createdAt: number
    _all: number
  }


  export type PorukaAvgAggregateInputType = {
    id?: true
  }

  export type PorukaSumAggregateInputType = {
    id?: true
  }

  export type PorukaMinAggregateInputType = {
    id?: true
    ime?: true
    email?: true
    poruka?: true
    createdAt?: true
  }

  export type PorukaMaxAggregateInputType = {
    id?: true
    ime?: true
    email?: true
    poruka?: true
    createdAt?: true
  }

  export type PorukaCountAggregateInputType = {
    id?: true
    ime?: true
    email?: true
    poruka?: true
    createdAt?: true
    _all?: true
  }

  export type PorukaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Poruka to aggregate.
     */
    where?: PorukaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Porukas to fetch.
     */
    orderBy?: PorukaOrderByWithRelationInput | PorukaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PorukaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Porukas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Porukas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Porukas
    **/
    _count?: true | PorukaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PorukaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PorukaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PorukaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PorukaMaxAggregateInputType
  }

  export type GetPorukaAggregateType<T extends PorukaAggregateArgs> = {
        [P in keyof T & keyof AggregatePoruka]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoruka[P]>
      : GetScalarType<T[P], AggregatePoruka[P]>
  }




  export type PorukaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PorukaWhereInput
    orderBy?: PorukaOrderByWithAggregationInput | PorukaOrderByWithAggregationInput[]
    by: PorukaScalarFieldEnum[] | PorukaScalarFieldEnum
    having?: PorukaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PorukaCountAggregateInputType | true
    _avg?: PorukaAvgAggregateInputType
    _sum?: PorukaSumAggregateInputType
    _min?: PorukaMinAggregateInputType
    _max?: PorukaMaxAggregateInputType
  }

  export type PorukaGroupByOutputType = {
    id: number
    ime: string
    email: string
    poruka: string
    createdAt: Date
    _count: PorukaCountAggregateOutputType | null
    _avg: PorukaAvgAggregateOutputType | null
    _sum: PorukaSumAggregateOutputType | null
    _min: PorukaMinAggregateOutputType | null
    _max: PorukaMaxAggregateOutputType | null
  }

  type GetPorukaGroupByPayload<T extends PorukaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PorukaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PorukaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PorukaGroupByOutputType[P]>
            : GetScalarType<T[P], PorukaGroupByOutputType[P]>
        }
      >
    >


  export type PorukaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ime?: boolean
    email?: boolean
    poruka?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["poruka"]>

  export type PorukaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ime?: boolean
    email?: boolean
    poruka?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["poruka"]>

  export type PorukaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ime?: boolean
    email?: boolean
    poruka?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["poruka"]>

  export type PorukaSelectScalar = {
    id?: boolean
    ime?: boolean
    email?: boolean
    poruka?: boolean
    createdAt?: boolean
  }

  export type PorukaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ime" | "email" | "poruka" | "createdAt", ExtArgs["result"]["poruka"]>

  export type $PorukaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Poruka"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ime: string
      email: string
      poruka: string
      createdAt: Date
    }, ExtArgs["result"]["poruka"]>
    composites: {}
  }

  type PorukaGetPayload<S extends boolean | null | undefined | PorukaDefaultArgs> = $Result.GetResult<Prisma.$PorukaPayload, S>

  type PorukaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PorukaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PorukaCountAggregateInputType | true
    }

  export interface PorukaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Poruka'], meta: { name: 'Poruka' } }
    /**
     * Find zero or one Poruka that matches the filter.
     * @param {PorukaFindUniqueArgs} args - Arguments to find a Poruka
     * @example
     * // Get one Poruka
     * const poruka = await prisma.poruka.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PorukaFindUniqueArgs>(args: SelectSubset<T, PorukaFindUniqueArgs<ExtArgs>>): Prisma__PorukaClient<$Result.GetResult<Prisma.$PorukaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Poruka that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PorukaFindUniqueOrThrowArgs} args - Arguments to find a Poruka
     * @example
     * // Get one Poruka
     * const poruka = await prisma.poruka.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PorukaFindUniqueOrThrowArgs>(args: SelectSubset<T, PorukaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PorukaClient<$Result.GetResult<Prisma.$PorukaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Poruka that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PorukaFindFirstArgs} args - Arguments to find a Poruka
     * @example
     * // Get one Poruka
     * const poruka = await prisma.poruka.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PorukaFindFirstArgs>(args?: SelectSubset<T, PorukaFindFirstArgs<ExtArgs>>): Prisma__PorukaClient<$Result.GetResult<Prisma.$PorukaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Poruka that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PorukaFindFirstOrThrowArgs} args - Arguments to find a Poruka
     * @example
     * // Get one Poruka
     * const poruka = await prisma.poruka.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PorukaFindFirstOrThrowArgs>(args?: SelectSubset<T, PorukaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PorukaClient<$Result.GetResult<Prisma.$PorukaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Porukas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PorukaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Porukas
     * const porukas = await prisma.poruka.findMany()
     * 
     * // Get first 10 Porukas
     * const porukas = await prisma.poruka.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const porukaWithIdOnly = await prisma.poruka.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PorukaFindManyArgs>(args?: SelectSubset<T, PorukaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PorukaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Poruka.
     * @param {PorukaCreateArgs} args - Arguments to create a Poruka.
     * @example
     * // Create one Poruka
     * const Poruka = await prisma.poruka.create({
     *   data: {
     *     // ... data to create a Poruka
     *   }
     * })
     * 
     */
    create<T extends PorukaCreateArgs>(args: SelectSubset<T, PorukaCreateArgs<ExtArgs>>): Prisma__PorukaClient<$Result.GetResult<Prisma.$PorukaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Porukas.
     * @param {PorukaCreateManyArgs} args - Arguments to create many Porukas.
     * @example
     * // Create many Porukas
     * const poruka = await prisma.poruka.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PorukaCreateManyArgs>(args?: SelectSubset<T, PorukaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Porukas and returns the data saved in the database.
     * @param {PorukaCreateManyAndReturnArgs} args - Arguments to create many Porukas.
     * @example
     * // Create many Porukas
     * const poruka = await prisma.poruka.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Porukas and only return the `id`
     * const porukaWithIdOnly = await prisma.poruka.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PorukaCreateManyAndReturnArgs>(args?: SelectSubset<T, PorukaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PorukaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Poruka.
     * @param {PorukaDeleteArgs} args - Arguments to delete one Poruka.
     * @example
     * // Delete one Poruka
     * const Poruka = await prisma.poruka.delete({
     *   where: {
     *     // ... filter to delete one Poruka
     *   }
     * })
     * 
     */
    delete<T extends PorukaDeleteArgs>(args: SelectSubset<T, PorukaDeleteArgs<ExtArgs>>): Prisma__PorukaClient<$Result.GetResult<Prisma.$PorukaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Poruka.
     * @param {PorukaUpdateArgs} args - Arguments to update one Poruka.
     * @example
     * // Update one Poruka
     * const poruka = await prisma.poruka.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PorukaUpdateArgs>(args: SelectSubset<T, PorukaUpdateArgs<ExtArgs>>): Prisma__PorukaClient<$Result.GetResult<Prisma.$PorukaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Porukas.
     * @param {PorukaDeleteManyArgs} args - Arguments to filter Porukas to delete.
     * @example
     * // Delete a few Porukas
     * const { count } = await prisma.poruka.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PorukaDeleteManyArgs>(args?: SelectSubset<T, PorukaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Porukas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PorukaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Porukas
     * const poruka = await prisma.poruka.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PorukaUpdateManyArgs>(args: SelectSubset<T, PorukaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Porukas and returns the data updated in the database.
     * @param {PorukaUpdateManyAndReturnArgs} args - Arguments to update many Porukas.
     * @example
     * // Update many Porukas
     * const poruka = await prisma.poruka.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Porukas and only return the `id`
     * const porukaWithIdOnly = await prisma.poruka.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PorukaUpdateManyAndReturnArgs>(args: SelectSubset<T, PorukaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PorukaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Poruka.
     * @param {PorukaUpsertArgs} args - Arguments to update or create a Poruka.
     * @example
     * // Update or create a Poruka
     * const poruka = await prisma.poruka.upsert({
     *   create: {
     *     // ... data to create a Poruka
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Poruka we want to update
     *   }
     * })
     */
    upsert<T extends PorukaUpsertArgs>(args: SelectSubset<T, PorukaUpsertArgs<ExtArgs>>): Prisma__PorukaClient<$Result.GetResult<Prisma.$PorukaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Porukas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PorukaCountArgs} args - Arguments to filter Porukas to count.
     * @example
     * // Count the number of Porukas
     * const count = await prisma.poruka.count({
     *   where: {
     *     // ... the filter for the Porukas we want to count
     *   }
     * })
    **/
    count<T extends PorukaCountArgs>(
      args?: Subset<T, PorukaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PorukaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Poruka.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PorukaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PorukaAggregateArgs>(args: Subset<T, PorukaAggregateArgs>): Prisma.PrismaPromise<GetPorukaAggregateType<T>>

    /**
     * Group by Poruka.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PorukaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PorukaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PorukaGroupByArgs['orderBy'] }
        : { orderBy?: PorukaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PorukaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPorukaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Poruka model
   */
  readonly fields: PorukaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Poruka.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PorukaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Poruka model
   */
  interface PorukaFieldRefs {
    readonly id: FieldRef<"Poruka", 'Int'>
    readonly ime: FieldRef<"Poruka", 'String'>
    readonly email: FieldRef<"Poruka", 'String'>
    readonly poruka: FieldRef<"Poruka", 'String'>
    readonly createdAt: FieldRef<"Poruka", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Poruka findUnique
   */
  export type PorukaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poruka
     */
    select?: PorukaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poruka
     */
    omit?: PorukaOmit<ExtArgs> | null
    /**
     * Filter, which Poruka to fetch.
     */
    where: PorukaWhereUniqueInput
  }

  /**
   * Poruka findUniqueOrThrow
   */
  export type PorukaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poruka
     */
    select?: PorukaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poruka
     */
    omit?: PorukaOmit<ExtArgs> | null
    /**
     * Filter, which Poruka to fetch.
     */
    where: PorukaWhereUniqueInput
  }

  /**
   * Poruka findFirst
   */
  export type PorukaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poruka
     */
    select?: PorukaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poruka
     */
    omit?: PorukaOmit<ExtArgs> | null
    /**
     * Filter, which Poruka to fetch.
     */
    where?: PorukaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Porukas to fetch.
     */
    orderBy?: PorukaOrderByWithRelationInput | PorukaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Porukas.
     */
    cursor?: PorukaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Porukas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Porukas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Porukas.
     */
    distinct?: PorukaScalarFieldEnum | PorukaScalarFieldEnum[]
  }

  /**
   * Poruka findFirstOrThrow
   */
  export type PorukaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poruka
     */
    select?: PorukaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poruka
     */
    omit?: PorukaOmit<ExtArgs> | null
    /**
     * Filter, which Poruka to fetch.
     */
    where?: PorukaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Porukas to fetch.
     */
    orderBy?: PorukaOrderByWithRelationInput | PorukaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Porukas.
     */
    cursor?: PorukaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Porukas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Porukas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Porukas.
     */
    distinct?: PorukaScalarFieldEnum | PorukaScalarFieldEnum[]
  }

  /**
   * Poruka findMany
   */
  export type PorukaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poruka
     */
    select?: PorukaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poruka
     */
    omit?: PorukaOmit<ExtArgs> | null
    /**
     * Filter, which Porukas to fetch.
     */
    where?: PorukaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Porukas to fetch.
     */
    orderBy?: PorukaOrderByWithRelationInput | PorukaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Porukas.
     */
    cursor?: PorukaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Porukas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Porukas.
     */
    skip?: number
    distinct?: PorukaScalarFieldEnum | PorukaScalarFieldEnum[]
  }

  /**
   * Poruka create
   */
  export type PorukaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poruka
     */
    select?: PorukaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poruka
     */
    omit?: PorukaOmit<ExtArgs> | null
    /**
     * The data needed to create a Poruka.
     */
    data: XOR<PorukaCreateInput, PorukaUncheckedCreateInput>
  }

  /**
   * Poruka createMany
   */
  export type PorukaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Porukas.
     */
    data: PorukaCreateManyInput | PorukaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Poruka createManyAndReturn
   */
  export type PorukaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poruka
     */
    select?: PorukaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Poruka
     */
    omit?: PorukaOmit<ExtArgs> | null
    /**
     * The data used to create many Porukas.
     */
    data: PorukaCreateManyInput | PorukaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Poruka update
   */
  export type PorukaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poruka
     */
    select?: PorukaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poruka
     */
    omit?: PorukaOmit<ExtArgs> | null
    /**
     * The data needed to update a Poruka.
     */
    data: XOR<PorukaUpdateInput, PorukaUncheckedUpdateInput>
    /**
     * Choose, which Poruka to update.
     */
    where: PorukaWhereUniqueInput
  }

  /**
   * Poruka updateMany
   */
  export type PorukaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Porukas.
     */
    data: XOR<PorukaUpdateManyMutationInput, PorukaUncheckedUpdateManyInput>
    /**
     * Filter which Porukas to update
     */
    where?: PorukaWhereInput
    /**
     * Limit how many Porukas to update.
     */
    limit?: number
  }

  /**
   * Poruka updateManyAndReturn
   */
  export type PorukaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poruka
     */
    select?: PorukaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Poruka
     */
    omit?: PorukaOmit<ExtArgs> | null
    /**
     * The data used to update Porukas.
     */
    data: XOR<PorukaUpdateManyMutationInput, PorukaUncheckedUpdateManyInput>
    /**
     * Filter which Porukas to update
     */
    where?: PorukaWhereInput
    /**
     * Limit how many Porukas to update.
     */
    limit?: number
  }

  /**
   * Poruka upsert
   */
  export type PorukaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poruka
     */
    select?: PorukaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poruka
     */
    omit?: PorukaOmit<ExtArgs> | null
    /**
     * The filter to search for the Poruka to update in case it exists.
     */
    where: PorukaWhereUniqueInput
    /**
     * In case the Poruka found by the `where` argument doesn't exist, create a new Poruka with this data.
     */
    create: XOR<PorukaCreateInput, PorukaUncheckedCreateInput>
    /**
     * In case the Poruka was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PorukaUpdateInput, PorukaUncheckedUpdateInput>
  }

  /**
   * Poruka delete
   */
  export type PorukaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poruka
     */
    select?: PorukaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poruka
     */
    omit?: PorukaOmit<ExtArgs> | null
    /**
     * Filter which Poruka to delete.
     */
    where: PorukaWhereUniqueInput
  }

  /**
   * Poruka deleteMany
   */
  export type PorukaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Porukas to delete
     */
    where?: PorukaWhereInput
    /**
     * Limit how many Porukas to delete.
     */
    limit?: number
  }

  /**
   * Poruka without action
   */
  export type PorukaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poruka
     */
    select?: PorukaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poruka
     */
    omit?: PorukaOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PorukaScalarFieldEnum: {
    id: 'id',
    ime: 'ime',
    email: 'email',
    poruka: 'poruka',
    createdAt: 'createdAt'
  };

  export type PorukaScalarFieldEnum = (typeof PorukaScalarFieldEnum)[keyof typeof PorukaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PorukaWhereInput = {
    AND?: PorukaWhereInput | PorukaWhereInput[]
    OR?: PorukaWhereInput[]
    NOT?: PorukaWhereInput | PorukaWhereInput[]
    id?: IntFilter<"Poruka"> | number
    ime?: StringFilter<"Poruka"> | string
    email?: StringFilter<"Poruka"> | string
    poruka?: StringFilter<"Poruka"> | string
    createdAt?: DateTimeFilter<"Poruka"> | Date | string
  }

  export type PorukaOrderByWithRelationInput = {
    id?: SortOrder
    ime?: SortOrder
    email?: SortOrder
    poruka?: SortOrder
    createdAt?: SortOrder
  }

  export type PorukaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PorukaWhereInput | PorukaWhereInput[]
    OR?: PorukaWhereInput[]
    NOT?: PorukaWhereInput | PorukaWhereInput[]
    ime?: StringFilter<"Poruka"> | string
    email?: StringFilter<"Poruka"> | string
    poruka?: StringFilter<"Poruka"> | string
    createdAt?: DateTimeFilter<"Poruka"> | Date | string
  }, "id">

  export type PorukaOrderByWithAggregationInput = {
    id?: SortOrder
    ime?: SortOrder
    email?: SortOrder
    poruka?: SortOrder
    createdAt?: SortOrder
    _count?: PorukaCountOrderByAggregateInput
    _avg?: PorukaAvgOrderByAggregateInput
    _max?: PorukaMaxOrderByAggregateInput
    _min?: PorukaMinOrderByAggregateInput
    _sum?: PorukaSumOrderByAggregateInput
  }

  export type PorukaScalarWhereWithAggregatesInput = {
    AND?: PorukaScalarWhereWithAggregatesInput | PorukaScalarWhereWithAggregatesInput[]
    OR?: PorukaScalarWhereWithAggregatesInput[]
    NOT?: PorukaScalarWhereWithAggregatesInput | PorukaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Poruka"> | number
    ime?: StringWithAggregatesFilter<"Poruka"> | string
    email?: StringWithAggregatesFilter<"Poruka"> | string
    poruka?: StringWithAggregatesFilter<"Poruka"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Poruka"> | Date | string
  }

  export type PorukaCreateInput = {
    ime: string
    email: string
    poruka: string
    createdAt?: Date | string
  }

  export type PorukaUncheckedCreateInput = {
    id?: number
    ime: string
    email: string
    poruka: string
    createdAt?: Date | string
  }

  export type PorukaUpdateInput = {
    ime?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    poruka?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PorukaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ime?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    poruka?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PorukaCreateManyInput = {
    id?: number
    ime: string
    email: string
    poruka: string
    createdAt?: Date | string
  }

  export type PorukaUpdateManyMutationInput = {
    ime?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    poruka?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PorukaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ime?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    poruka?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PorukaCountOrderByAggregateInput = {
    id?: SortOrder
    ime?: SortOrder
    email?: SortOrder
    poruka?: SortOrder
    createdAt?: SortOrder
  }

  export type PorukaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PorukaMaxOrderByAggregateInput = {
    id?: SortOrder
    ime?: SortOrder
    email?: SortOrder
    poruka?: SortOrder
    createdAt?: SortOrder
  }

  export type PorukaMinOrderByAggregateInput = {
    id?: SortOrder
    ime?: SortOrder
    email?: SortOrder
    poruka?: SortOrder
    createdAt?: SortOrder
  }

  export type PorukaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}