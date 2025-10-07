
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
 * Model ProjectAnnex
 * 
 */
export type ProjectAnnex = $Result.DefaultSelection<Prisma.$ProjectAnnexPayload>
/**
 * Model UserAnnex
 * 
 */
export type UserAnnex = $Result.DefaultSelection<Prisma.$UserAnnexPayload>
/**
 * Model TicketAnnex
 * 
 */
export type TicketAnnex = $Result.DefaultSelection<Prisma.$TicketAnnexPayload>
/**
 * Model EventAnnex
 * 
 */
export type EventAnnex = $Result.DefaultSelection<Prisma.$EventAnnexPayload>
/**
 * Model PayloadAnnex
 * 
 */
export type PayloadAnnex = $Result.DefaultSelection<Prisma.$PayloadAnnexPayload>
/**
 * Model RevisionAnnex
 * 
 */
export type RevisionAnnex = $Result.DefaultSelection<Prisma.$RevisionAnnexPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SourceTypeAnnex: {
  github: 'github',
  gitlab: 'gitlab',
  bitbucket: 'bitbucket'
};

export type SourceTypeAnnex = (typeof SourceTypeAnnex)[keyof typeof SourceTypeAnnex]


export const EventTypeAnnex: {
  opened: 'opened',
  merged: 'merged',
  closed: 'closed',
  changes_requested: 'changes_requested',
  pushed: 'pushed',
  dismissed: 'dismissed',
  approved: 'approved',
  unapproved: 'unapproved',
  reopen: 'reopen'
};

export type EventTypeAnnex = (typeof EventTypeAnnex)[keyof typeof EventTypeAnnex]

}

export type SourceTypeAnnex = $Enums.SourceTypeAnnex

export const SourceTypeAnnex: typeof $Enums.SourceTypeAnnex

export type EventTypeAnnex = $Enums.EventTypeAnnex

export const EventTypeAnnex: typeof $Enums.EventTypeAnnex

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ProjectAnnexes
 * const projectAnnexes = await prisma.projectAnnex.findMany()
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
   * // Fetch zero or more ProjectAnnexes
   * const projectAnnexes = await prisma.projectAnnex.findMany()
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
   * `prisma.projectAnnex`: Exposes CRUD operations for the **ProjectAnnex** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectAnnexes
    * const projectAnnexes = await prisma.projectAnnex.findMany()
    * ```
    */
  get projectAnnex(): Prisma.ProjectAnnexDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAnnex`: Exposes CRUD operations for the **UserAnnex** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAnnexes
    * const userAnnexes = await prisma.userAnnex.findMany()
    * ```
    */
  get userAnnex(): Prisma.UserAnnexDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketAnnex`: Exposes CRUD operations for the **TicketAnnex** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketAnnexes
    * const ticketAnnexes = await prisma.ticketAnnex.findMany()
    * ```
    */
  get ticketAnnex(): Prisma.TicketAnnexDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventAnnex`: Exposes CRUD operations for the **EventAnnex** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventAnnexes
    * const eventAnnexes = await prisma.eventAnnex.findMany()
    * ```
    */
  get eventAnnex(): Prisma.EventAnnexDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payloadAnnex`: Exposes CRUD operations for the **PayloadAnnex** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PayloadAnnexes
    * const payloadAnnexes = await prisma.payloadAnnex.findMany()
    * ```
    */
  get payloadAnnex(): Prisma.PayloadAnnexDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.revisionAnnex`: Exposes CRUD operations for the **RevisionAnnex** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RevisionAnnexes
    * const revisionAnnexes = await prisma.revisionAnnex.findMany()
    * ```
    */
  get revisionAnnex(): Prisma.RevisionAnnexDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
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
    ProjectAnnex: 'ProjectAnnex',
    UserAnnex: 'UserAnnex',
    TicketAnnex: 'TicketAnnex',
    EventAnnex: 'EventAnnex',
    PayloadAnnex: 'PayloadAnnex',
    RevisionAnnex: 'RevisionAnnex'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    annex?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "projectAnnex" | "userAnnex" | "ticketAnnex" | "eventAnnex" | "payloadAnnex" | "revisionAnnex"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ProjectAnnex: {
        payload: Prisma.$ProjectAnnexPayload<ExtArgs>
        fields: Prisma.ProjectAnnexFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectAnnexFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAnnexPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectAnnexFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAnnexPayload>
          }
          findFirst: {
            args: Prisma.ProjectAnnexFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAnnexPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectAnnexFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAnnexPayload>
          }
          findMany: {
            args: Prisma.ProjectAnnexFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAnnexPayload>[]
          }
          create: {
            args: Prisma.ProjectAnnexCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAnnexPayload>
          }
          createMany: {
            args: Prisma.ProjectAnnexCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectAnnexDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAnnexPayload>
          }
          update: {
            args: Prisma.ProjectAnnexUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAnnexPayload>
          }
          deleteMany: {
            args: Prisma.ProjectAnnexDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectAnnexUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectAnnexUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAnnexPayload>
          }
          aggregate: {
            args: Prisma.ProjectAnnexAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectAnnex>
          }
          groupBy: {
            args: Prisma.ProjectAnnexGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectAnnexGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectAnnexCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectAnnexCountAggregateOutputType> | number
          }
        }
      }
      UserAnnex: {
        payload: Prisma.$UserAnnexPayload<ExtArgs>
        fields: Prisma.UserAnnexFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAnnexFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnnexPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAnnexFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnnexPayload>
          }
          findFirst: {
            args: Prisma.UserAnnexFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnnexPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAnnexFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnnexPayload>
          }
          findMany: {
            args: Prisma.UserAnnexFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnnexPayload>[]
          }
          create: {
            args: Prisma.UserAnnexCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnnexPayload>
          }
          createMany: {
            args: Prisma.UserAnnexCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserAnnexDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnnexPayload>
          }
          update: {
            args: Prisma.UserAnnexUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnnexPayload>
          }
          deleteMany: {
            args: Prisma.UserAnnexDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAnnexUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserAnnexUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnnexPayload>
          }
          aggregate: {
            args: Prisma.UserAnnexAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAnnex>
          }
          groupBy: {
            args: Prisma.UserAnnexGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAnnexGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAnnexCountArgs<ExtArgs>
            result: $Utils.Optional<UserAnnexCountAggregateOutputType> | number
          }
        }
      }
      TicketAnnex: {
        payload: Prisma.$TicketAnnexPayload<ExtArgs>
        fields: Prisma.TicketAnnexFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketAnnexFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAnnexPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketAnnexFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAnnexPayload>
          }
          findFirst: {
            args: Prisma.TicketAnnexFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAnnexPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketAnnexFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAnnexPayload>
          }
          findMany: {
            args: Prisma.TicketAnnexFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAnnexPayload>[]
          }
          create: {
            args: Prisma.TicketAnnexCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAnnexPayload>
          }
          createMany: {
            args: Prisma.TicketAnnexCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TicketAnnexDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAnnexPayload>
          }
          update: {
            args: Prisma.TicketAnnexUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAnnexPayload>
          }
          deleteMany: {
            args: Prisma.TicketAnnexDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketAnnexUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TicketAnnexUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAnnexPayload>
          }
          aggregate: {
            args: Prisma.TicketAnnexAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketAnnex>
          }
          groupBy: {
            args: Prisma.TicketAnnexGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketAnnexGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketAnnexCountArgs<ExtArgs>
            result: $Utils.Optional<TicketAnnexCountAggregateOutputType> | number
          }
        }
      }
      EventAnnex: {
        payload: Prisma.$EventAnnexPayload<ExtArgs>
        fields: Prisma.EventAnnexFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventAnnexFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAnnexPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventAnnexFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAnnexPayload>
          }
          findFirst: {
            args: Prisma.EventAnnexFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAnnexPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventAnnexFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAnnexPayload>
          }
          findMany: {
            args: Prisma.EventAnnexFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAnnexPayload>[]
          }
          create: {
            args: Prisma.EventAnnexCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAnnexPayload>
          }
          createMany: {
            args: Prisma.EventAnnexCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EventAnnexDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAnnexPayload>
          }
          update: {
            args: Prisma.EventAnnexUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAnnexPayload>
          }
          deleteMany: {
            args: Prisma.EventAnnexDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventAnnexUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventAnnexUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAnnexPayload>
          }
          aggregate: {
            args: Prisma.EventAnnexAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventAnnex>
          }
          groupBy: {
            args: Prisma.EventAnnexGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventAnnexGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventAnnexCountArgs<ExtArgs>
            result: $Utils.Optional<EventAnnexCountAggregateOutputType> | number
          }
        }
      }
      PayloadAnnex: {
        payload: Prisma.$PayloadAnnexPayload<ExtArgs>
        fields: Prisma.PayloadAnnexFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayloadAnnexFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayloadAnnexPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayloadAnnexFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayloadAnnexPayload>
          }
          findFirst: {
            args: Prisma.PayloadAnnexFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayloadAnnexPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayloadAnnexFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayloadAnnexPayload>
          }
          findMany: {
            args: Prisma.PayloadAnnexFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayloadAnnexPayload>[]
          }
          create: {
            args: Prisma.PayloadAnnexCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayloadAnnexPayload>
          }
          createMany: {
            args: Prisma.PayloadAnnexCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PayloadAnnexDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayloadAnnexPayload>
          }
          update: {
            args: Prisma.PayloadAnnexUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayloadAnnexPayload>
          }
          deleteMany: {
            args: Prisma.PayloadAnnexDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayloadAnnexUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PayloadAnnexUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayloadAnnexPayload>
          }
          aggregate: {
            args: Prisma.PayloadAnnexAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayloadAnnex>
          }
          groupBy: {
            args: Prisma.PayloadAnnexGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayloadAnnexGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayloadAnnexCountArgs<ExtArgs>
            result: $Utils.Optional<PayloadAnnexCountAggregateOutputType> | number
          }
        }
      }
      RevisionAnnex: {
        payload: Prisma.$RevisionAnnexPayload<ExtArgs>
        fields: Prisma.RevisionAnnexFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RevisionAnnexFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionAnnexPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RevisionAnnexFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionAnnexPayload>
          }
          findFirst: {
            args: Prisma.RevisionAnnexFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionAnnexPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RevisionAnnexFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionAnnexPayload>
          }
          findMany: {
            args: Prisma.RevisionAnnexFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionAnnexPayload>[]
          }
          create: {
            args: Prisma.RevisionAnnexCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionAnnexPayload>
          }
          createMany: {
            args: Prisma.RevisionAnnexCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RevisionAnnexDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionAnnexPayload>
          }
          update: {
            args: Prisma.RevisionAnnexUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionAnnexPayload>
          }
          deleteMany: {
            args: Prisma.RevisionAnnexDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RevisionAnnexUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RevisionAnnexUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionAnnexPayload>
          }
          aggregate: {
            args: Prisma.RevisionAnnexAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRevisionAnnex>
          }
          groupBy: {
            args: Prisma.RevisionAnnexGroupByArgs<ExtArgs>
            result: $Utils.Optional<RevisionAnnexGroupByOutputType>[]
          }
          count: {
            args: Prisma.RevisionAnnexCountArgs<ExtArgs>
            result: $Utils.Optional<RevisionAnnexCountAggregateOutputType> | number
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
    projectAnnex?: ProjectAnnexOmit
    userAnnex?: UserAnnexOmit
    ticketAnnex?: TicketAnnexOmit
    eventAnnex?: EventAnnexOmit
    payloadAnnex?: PayloadAnnexOmit
    revisionAnnex?: RevisionAnnexOmit
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
   * Count Type ProjectAnnexCountOutputType
   */

  export type ProjectAnnexCountOutputType = {
    events: number
    tickets: number
    contributors: number
  }

  export type ProjectAnnexCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | ProjectAnnexCountOutputTypeCountEventsArgs
    tickets?: boolean | ProjectAnnexCountOutputTypeCountTicketsArgs
    contributors?: boolean | ProjectAnnexCountOutputTypeCountContributorsArgs
  }

  // Custom InputTypes
  /**
   * ProjectAnnexCountOutputType without action
   */
  export type ProjectAnnexCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAnnexCountOutputType
     */
    select?: ProjectAnnexCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectAnnexCountOutputType without action
   */
  export type ProjectAnnexCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventAnnexWhereInput
  }

  /**
   * ProjectAnnexCountOutputType without action
   */
  export type ProjectAnnexCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketAnnexWhereInput
  }

  /**
   * ProjectAnnexCountOutputType without action
   */
  export type ProjectAnnexCountOutputTypeCountContributorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAnnexWhereInput
  }


  /**
   * Count Type UserAnnexCountOutputType
   */

  export type UserAnnexCountOutputType = {
    projects: number
    events: number
    reviewed_events: number
    authoredRevisions: number
    reviewedRevisions: number
  }

  export type UserAnnexCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | UserAnnexCountOutputTypeCountProjectsArgs
    events?: boolean | UserAnnexCountOutputTypeCountEventsArgs
    reviewed_events?: boolean | UserAnnexCountOutputTypeCountReviewed_eventsArgs
    authoredRevisions?: boolean | UserAnnexCountOutputTypeCountAuthoredRevisionsArgs
    reviewedRevisions?: boolean | UserAnnexCountOutputTypeCountReviewedRevisionsArgs
  }

  // Custom InputTypes
  /**
   * UserAnnexCountOutputType without action
   */
  export type UserAnnexCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnnexCountOutputType
     */
    select?: UserAnnexCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserAnnexCountOutputType without action
   */
  export type UserAnnexCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectAnnexWhereInput
  }

  /**
   * UserAnnexCountOutputType without action
   */
  export type UserAnnexCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventAnnexWhereInput
  }

  /**
   * UserAnnexCountOutputType without action
   */
  export type UserAnnexCountOutputTypeCountReviewed_eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventAnnexWhereInput
  }

  /**
   * UserAnnexCountOutputType without action
   */
  export type UserAnnexCountOutputTypeCountAuthoredRevisionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RevisionAnnexWhereInput
  }

  /**
   * UserAnnexCountOutputType without action
   */
  export type UserAnnexCountOutputTypeCountReviewedRevisionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RevisionAnnexWhereInput
  }


  /**
   * Count Type TicketAnnexCountOutputType
   */

  export type TicketAnnexCountOutputType = {
    events: number
  }

  export type TicketAnnexCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | TicketAnnexCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * TicketAnnexCountOutputType without action
   */
  export type TicketAnnexCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAnnexCountOutputType
     */
    select?: TicketAnnexCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketAnnexCountOutputType without action
   */
  export type TicketAnnexCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventAnnexWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ProjectAnnex
   */

  export type AggregateProjectAnnex = {
    _count: ProjectAnnexCountAggregateOutputType | null
    _avg: ProjectAnnexAvgAggregateOutputType | null
    _sum: ProjectAnnexSumAggregateOutputType | null
    _min: ProjectAnnexMinAggregateOutputType | null
    _max: ProjectAnnexMaxAggregateOutputType | null
  }

  export type ProjectAnnexAvgAggregateOutputType = {
    id: number | null
  }

  export type ProjectAnnexSumAggregateOutputType = {
    id: number | null
  }

  export type ProjectAnnexMinAggregateOutputType = {
    id: number | null
    name: string | null
    repository: string | null
  }

  export type ProjectAnnexMaxAggregateOutputType = {
    id: number | null
    name: string | null
    repository: string | null
  }

  export type ProjectAnnexCountAggregateOutputType = {
    id: number
    name: number
    repository: number
    _all: number
  }


  export type ProjectAnnexAvgAggregateInputType = {
    id?: true
  }

  export type ProjectAnnexSumAggregateInputType = {
    id?: true
  }

  export type ProjectAnnexMinAggregateInputType = {
    id?: true
    name?: true
    repository?: true
  }

  export type ProjectAnnexMaxAggregateInputType = {
    id?: true
    name?: true
    repository?: true
  }

  export type ProjectAnnexCountAggregateInputType = {
    id?: true
    name?: true
    repository?: true
    _all?: true
  }

  export type ProjectAnnexAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectAnnex to aggregate.
     */
    where?: ProjectAnnexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectAnnexes to fetch.
     */
    orderBy?: ProjectAnnexOrderByWithRelationInput | ProjectAnnexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectAnnexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectAnnexes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectAnnexes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectAnnexes
    **/
    _count?: true | ProjectAnnexCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAnnexAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectAnnexSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectAnnexMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectAnnexMaxAggregateInputType
  }

  export type GetProjectAnnexAggregateType<T extends ProjectAnnexAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectAnnex]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectAnnex[P]>
      : GetScalarType<T[P], AggregateProjectAnnex[P]>
  }




  export type ProjectAnnexGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectAnnexWhereInput
    orderBy?: ProjectAnnexOrderByWithAggregationInput | ProjectAnnexOrderByWithAggregationInput[]
    by: ProjectAnnexScalarFieldEnum[] | ProjectAnnexScalarFieldEnum
    having?: ProjectAnnexScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectAnnexCountAggregateInputType | true
    _avg?: ProjectAnnexAvgAggregateInputType
    _sum?: ProjectAnnexSumAggregateInputType
    _min?: ProjectAnnexMinAggregateInputType
    _max?: ProjectAnnexMaxAggregateInputType
  }

  export type ProjectAnnexGroupByOutputType = {
    id: number
    name: string
    repository: string
    _count: ProjectAnnexCountAggregateOutputType | null
    _avg: ProjectAnnexAvgAggregateOutputType | null
    _sum: ProjectAnnexSumAggregateOutputType | null
    _min: ProjectAnnexMinAggregateOutputType | null
    _max: ProjectAnnexMaxAggregateOutputType | null
  }

  type GetProjectAnnexGroupByPayload<T extends ProjectAnnexGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectAnnexGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectAnnexGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectAnnexGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectAnnexGroupByOutputType[P]>
        }
      >
    >


  export type ProjectAnnexSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    repository?: boolean
    events?: boolean | ProjectAnnex$eventsArgs<ExtArgs>
    tickets?: boolean | ProjectAnnex$ticketsArgs<ExtArgs>
    contributors?: boolean | ProjectAnnex$contributorsArgs<ExtArgs>
    _count?: boolean | ProjectAnnexCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectAnnex"]>



  export type ProjectAnnexSelectScalar = {
    id?: boolean
    name?: boolean
    repository?: boolean
  }

  export type ProjectAnnexOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "repository", ExtArgs["result"]["projectAnnex"]>
  export type ProjectAnnexInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | ProjectAnnex$eventsArgs<ExtArgs>
    tickets?: boolean | ProjectAnnex$ticketsArgs<ExtArgs>
    contributors?: boolean | ProjectAnnex$contributorsArgs<ExtArgs>
    _count?: boolean | ProjectAnnexCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProjectAnnexPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectAnnex"
    objects: {
      events: Prisma.$EventAnnexPayload<ExtArgs>[]
      tickets: Prisma.$TicketAnnexPayload<ExtArgs>[]
      contributors: Prisma.$UserAnnexPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      repository: string
    }, ExtArgs["result"]["projectAnnex"]>
    composites: {}
  }

  type ProjectAnnexGetPayload<S extends boolean | null | undefined | ProjectAnnexDefaultArgs> = $Result.GetResult<Prisma.$ProjectAnnexPayload, S>

  type ProjectAnnexCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectAnnexFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectAnnexCountAggregateInputType | true
    }

  export interface ProjectAnnexDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectAnnex'], meta: { name: 'ProjectAnnex' } }
    /**
     * Find zero or one ProjectAnnex that matches the filter.
     * @param {ProjectAnnexFindUniqueArgs} args - Arguments to find a ProjectAnnex
     * @example
     * // Get one ProjectAnnex
     * const projectAnnex = await prisma.projectAnnex.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectAnnexFindUniqueArgs>(args: SelectSubset<T, ProjectAnnexFindUniqueArgs<ExtArgs>>): Prisma__ProjectAnnexClient<$Result.GetResult<Prisma.$ProjectAnnexPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectAnnex that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectAnnexFindUniqueOrThrowArgs} args - Arguments to find a ProjectAnnex
     * @example
     * // Get one ProjectAnnex
     * const projectAnnex = await prisma.projectAnnex.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectAnnexFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectAnnexFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectAnnexClient<$Result.GetResult<Prisma.$ProjectAnnexPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectAnnex that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAnnexFindFirstArgs} args - Arguments to find a ProjectAnnex
     * @example
     * // Get one ProjectAnnex
     * const projectAnnex = await prisma.projectAnnex.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectAnnexFindFirstArgs>(args?: SelectSubset<T, ProjectAnnexFindFirstArgs<ExtArgs>>): Prisma__ProjectAnnexClient<$Result.GetResult<Prisma.$ProjectAnnexPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectAnnex that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAnnexFindFirstOrThrowArgs} args - Arguments to find a ProjectAnnex
     * @example
     * // Get one ProjectAnnex
     * const projectAnnex = await prisma.projectAnnex.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectAnnexFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectAnnexFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectAnnexClient<$Result.GetResult<Prisma.$ProjectAnnexPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectAnnexes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAnnexFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectAnnexes
     * const projectAnnexes = await prisma.projectAnnex.findMany()
     * 
     * // Get first 10 ProjectAnnexes
     * const projectAnnexes = await prisma.projectAnnex.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectAnnexWithIdOnly = await prisma.projectAnnex.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectAnnexFindManyArgs>(args?: SelectSubset<T, ProjectAnnexFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectAnnexPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectAnnex.
     * @param {ProjectAnnexCreateArgs} args - Arguments to create a ProjectAnnex.
     * @example
     * // Create one ProjectAnnex
     * const ProjectAnnex = await prisma.projectAnnex.create({
     *   data: {
     *     // ... data to create a ProjectAnnex
     *   }
     * })
     * 
     */
    create<T extends ProjectAnnexCreateArgs>(args: SelectSubset<T, ProjectAnnexCreateArgs<ExtArgs>>): Prisma__ProjectAnnexClient<$Result.GetResult<Prisma.$ProjectAnnexPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectAnnexes.
     * @param {ProjectAnnexCreateManyArgs} args - Arguments to create many ProjectAnnexes.
     * @example
     * // Create many ProjectAnnexes
     * const projectAnnex = await prisma.projectAnnex.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectAnnexCreateManyArgs>(args?: SelectSubset<T, ProjectAnnexCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProjectAnnex.
     * @param {ProjectAnnexDeleteArgs} args - Arguments to delete one ProjectAnnex.
     * @example
     * // Delete one ProjectAnnex
     * const ProjectAnnex = await prisma.projectAnnex.delete({
     *   where: {
     *     // ... filter to delete one ProjectAnnex
     *   }
     * })
     * 
     */
    delete<T extends ProjectAnnexDeleteArgs>(args: SelectSubset<T, ProjectAnnexDeleteArgs<ExtArgs>>): Prisma__ProjectAnnexClient<$Result.GetResult<Prisma.$ProjectAnnexPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectAnnex.
     * @param {ProjectAnnexUpdateArgs} args - Arguments to update one ProjectAnnex.
     * @example
     * // Update one ProjectAnnex
     * const projectAnnex = await prisma.projectAnnex.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectAnnexUpdateArgs>(args: SelectSubset<T, ProjectAnnexUpdateArgs<ExtArgs>>): Prisma__ProjectAnnexClient<$Result.GetResult<Prisma.$ProjectAnnexPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectAnnexes.
     * @param {ProjectAnnexDeleteManyArgs} args - Arguments to filter ProjectAnnexes to delete.
     * @example
     * // Delete a few ProjectAnnexes
     * const { count } = await prisma.projectAnnex.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectAnnexDeleteManyArgs>(args?: SelectSubset<T, ProjectAnnexDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectAnnexes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAnnexUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectAnnexes
     * const projectAnnex = await prisma.projectAnnex.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectAnnexUpdateManyArgs>(args: SelectSubset<T, ProjectAnnexUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectAnnex.
     * @param {ProjectAnnexUpsertArgs} args - Arguments to update or create a ProjectAnnex.
     * @example
     * // Update or create a ProjectAnnex
     * const projectAnnex = await prisma.projectAnnex.upsert({
     *   create: {
     *     // ... data to create a ProjectAnnex
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectAnnex we want to update
     *   }
     * })
     */
    upsert<T extends ProjectAnnexUpsertArgs>(args: SelectSubset<T, ProjectAnnexUpsertArgs<ExtArgs>>): Prisma__ProjectAnnexClient<$Result.GetResult<Prisma.$ProjectAnnexPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectAnnexes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAnnexCountArgs} args - Arguments to filter ProjectAnnexes to count.
     * @example
     * // Count the number of ProjectAnnexes
     * const count = await prisma.projectAnnex.count({
     *   where: {
     *     // ... the filter for the ProjectAnnexes we want to count
     *   }
     * })
    **/
    count<T extends ProjectAnnexCountArgs>(
      args?: Subset<T, ProjectAnnexCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectAnnexCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectAnnex.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAnnexAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAnnexAggregateArgs>(args: Subset<T, ProjectAnnexAggregateArgs>): Prisma.PrismaPromise<GetProjectAnnexAggregateType<T>>

    /**
     * Group by ProjectAnnex.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAnnexGroupByArgs} args - Group by arguments.
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
      T extends ProjectAnnexGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectAnnexGroupByArgs['orderBy'] }
        : { orderBy?: ProjectAnnexGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectAnnexGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectAnnexGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectAnnex model
   */
  readonly fields: ProjectAnnexFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectAnnex.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectAnnexClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends ProjectAnnex$eventsArgs<ExtArgs> = {}>(args?: Subset<T, ProjectAnnex$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventAnnexPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends ProjectAnnex$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, ProjectAnnex$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketAnnexPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contributors<T extends ProjectAnnex$contributorsArgs<ExtArgs> = {}>(args?: Subset<T, ProjectAnnex$contributorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAnnexPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProjectAnnex model
   */
  interface ProjectAnnexFieldRefs {
    readonly id: FieldRef<"ProjectAnnex", 'Int'>
    readonly name: FieldRef<"ProjectAnnex", 'String'>
    readonly repository: FieldRef<"ProjectAnnex", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProjectAnnex findUnique
   */
  export type ProjectAnnexFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAnnex
     */
    select?: ProjectAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAnnex
     */
    omit?: ProjectAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAnnexInclude<ExtArgs> | null
    /**
     * Filter, which ProjectAnnex to fetch.
     */
    where: ProjectAnnexWhereUniqueInput
  }

  /**
   * ProjectAnnex findUniqueOrThrow
   */
  export type ProjectAnnexFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAnnex
     */
    select?: ProjectAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAnnex
     */
    omit?: ProjectAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAnnexInclude<ExtArgs> | null
    /**
     * Filter, which ProjectAnnex to fetch.
     */
    where: ProjectAnnexWhereUniqueInput
  }

  /**
   * ProjectAnnex findFirst
   */
  export type ProjectAnnexFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAnnex
     */
    select?: ProjectAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAnnex
     */
    omit?: ProjectAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAnnexInclude<ExtArgs> | null
    /**
     * Filter, which ProjectAnnex to fetch.
     */
    where?: ProjectAnnexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectAnnexes to fetch.
     */
    orderBy?: ProjectAnnexOrderByWithRelationInput | ProjectAnnexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectAnnexes.
     */
    cursor?: ProjectAnnexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectAnnexes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectAnnexes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectAnnexes.
     */
    distinct?: ProjectAnnexScalarFieldEnum | ProjectAnnexScalarFieldEnum[]
  }

  /**
   * ProjectAnnex findFirstOrThrow
   */
  export type ProjectAnnexFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAnnex
     */
    select?: ProjectAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAnnex
     */
    omit?: ProjectAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAnnexInclude<ExtArgs> | null
    /**
     * Filter, which ProjectAnnex to fetch.
     */
    where?: ProjectAnnexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectAnnexes to fetch.
     */
    orderBy?: ProjectAnnexOrderByWithRelationInput | ProjectAnnexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectAnnexes.
     */
    cursor?: ProjectAnnexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectAnnexes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectAnnexes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectAnnexes.
     */
    distinct?: ProjectAnnexScalarFieldEnum | ProjectAnnexScalarFieldEnum[]
  }

  /**
   * ProjectAnnex findMany
   */
  export type ProjectAnnexFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAnnex
     */
    select?: ProjectAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAnnex
     */
    omit?: ProjectAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAnnexInclude<ExtArgs> | null
    /**
     * Filter, which ProjectAnnexes to fetch.
     */
    where?: ProjectAnnexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectAnnexes to fetch.
     */
    orderBy?: ProjectAnnexOrderByWithRelationInput | ProjectAnnexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectAnnexes.
     */
    cursor?: ProjectAnnexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectAnnexes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectAnnexes.
     */
    skip?: number
    distinct?: ProjectAnnexScalarFieldEnum | ProjectAnnexScalarFieldEnum[]
  }

  /**
   * ProjectAnnex create
   */
  export type ProjectAnnexCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAnnex
     */
    select?: ProjectAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAnnex
     */
    omit?: ProjectAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAnnexInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectAnnex.
     */
    data: XOR<ProjectAnnexCreateInput, ProjectAnnexUncheckedCreateInput>
  }

  /**
   * ProjectAnnex createMany
   */
  export type ProjectAnnexCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectAnnexes.
     */
    data: ProjectAnnexCreateManyInput | ProjectAnnexCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectAnnex update
   */
  export type ProjectAnnexUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAnnex
     */
    select?: ProjectAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAnnex
     */
    omit?: ProjectAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAnnexInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectAnnex.
     */
    data: XOR<ProjectAnnexUpdateInput, ProjectAnnexUncheckedUpdateInput>
    /**
     * Choose, which ProjectAnnex to update.
     */
    where: ProjectAnnexWhereUniqueInput
  }

  /**
   * ProjectAnnex updateMany
   */
  export type ProjectAnnexUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectAnnexes.
     */
    data: XOR<ProjectAnnexUpdateManyMutationInput, ProjectAnnexUncheckedUpdateManyInput>
    /**
     * Filter which ProjectAnnexes to update
     */
    where?: ProjectAnnexWhereInput
    /**
     * Limit how many ProjectAnnexes to update.
     */
    limit?: number
  }

  /**
   * ProjectAnnex upsert
   */
  export type ProjectAnnexUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAnnex
     */
    select?: ProjectAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAnnex
     */
    omit?: ProjectAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAnnexInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectAnnex to update in case it exists.
     */
    where: ProjectAnnexWhereUniqueInput
    /**
     * In case the ProjectAnnex found by the `where` argument doesn't exist, create a new ProjectAnnex with this data.
     */
    create: XOR<ProjectAnnexCreateInput, ProjectAnnexUncheckedCreateInput>
    /**
     * In case the ProjectAnnex was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectAnnexUpdateInput, ProjectAnnexUncheckedUpdateInput>
  }

  /**
   * ProjectAnnex delete
   */
  export type ProjectAnnexDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAnnex
     */
    select?: ProjectAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAnnex
     */
    omit?: ProjectAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAnnexInclude<ExtArgs> | null
    /**
     * Filter which ProjectAnnex to delete.
     */
    where: ProjectAnnexWhereUniqueInput
  }

  /**
   * ProjectAnnex deleteMany
   */
  export type ProjectAnnexDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectAnnexes to delete
     */
    where?: ProjectAnnexWhereInput
    /**
     * Limit how many ProjectAnnexes to delete.
     */
    limit?: number
  }

  /**
   * ProjectAnnex.events
   */
  export type ProjectAnnex$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAnnex
     */
    select?: EventAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAnnex
     */
    omit?: EventAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAnnexInclude<ExtArgs> | null
    where?: EventAnnexWhereInput
    orderBy?: EventAnnexOrderByWithRelationInput | EventAnnexOrderByWithRelationInput[]
    cursor?: EventAnnexWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventAnnexScalarFieldEnum | EventAnnexScalarFieldEnum[]
  }

  /**
   * ProjectAnnex.tickets
   */
  export type ProjectAnnex$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAnnex
     */
    select?: TicketAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAnnex
     */
    omit?: TicketAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAnnexInclude<ExtArgs> | null
    where?: TicketAnnexWhereInput
    orderBy?: TicketAnnexOrderByWithRelationInput | TicketAnnexOrderByWithRelationInput[]
    cursor?: TicketAnnexWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketAnnexScalarFieldEnum | TicketAnnexScalarFieldEnum[]
  }

  /**
   * ProjectAnnex.contributors
   */
  export type ProjectAnnex$contributorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnnex
     */
    select?: UserAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnnex
     */
    omit?: UserAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnnexInclude<ExtArgs> | null
    where?: UserAnnexWhereInput
    orderBy?: UserAnnexOrderByWithRelationInput | UserAnnexOrderByWithRelationInput[]
    cursor?: UserAnnexWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAnnexScalarFieldEnum | UserAnnexScalarFieldEnum[]
  }

  /**
   * ProjectAnnex without action
   */
  export type ProjectAnnexDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAnnex
     */
    select?: ProjectAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAnnex
     */
    omit?: ProjectAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAnnexInclude<ExtArgs> | null
  }


  /**
   * Model UserAnnex
   */

  export type AggregateUserAnnex = {
    _count: UserAnnexCountAggregateOutputType | null
    _avg: UserAnnexAvgAggregateOutputType | null
    _sum: UserAnnexSumAggregateOutputType | null
    _min: UserAnnexMinAggregateOutputType | null
    _max: UserAnnexMaxAggregateOutputType | null
  }

  export type UserAnnexAvgAggregateOutputType = {
    id: number | null
  }

  export type UserAnnexSumAggregateOutputType = {
    id: number | null
  }

  export type UserAnnexMinAggregateOutputType = {
    id: number | null
    username: string | null
    first_name: string | null
    last_name: string | null
  }

  export type UserAnnexMaxAggregateOutputType = {
    id: number | null
    username: string | null
    first_name: string | null
    last_name: string | null
  }

  export type UserAnnexCountAggregateOutputType = {
    id: number
    username: number
    first_name: number
    last_name: number
    _all: number
  }


  export type UserAnnexAvgAggregateInputType = {
    id?: true
  }

  export type UserAnnexSumAggregateInputType = {
    id?: true
  }

  export type UserAnnexMinAggregateInputType = {
    id?: true
    username?: true
    first_name?: true
    last_name?: true
  }

  export type UserAnnexMaxAggregateInputType = {
    id?: true
    username?: true
    first_name?: true
    last_name?: true
  }

  export type UserAnnexCountAggregateInputType = {
    id?: true
    username?: true
    first_name?: true
    last_name?: true
    _all?: true
  }

  export type UserAnnexAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAnnex to aggregate.
     */
    where?: UserAnnexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAnnexes to fetch.
     */
    orderBy?: UserAnnexOrderByWithRelationInput | UserAnnexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAnnexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAnnexes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAnnexes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAnnexes
    **/
    _count?: true | UserAnnexCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAnnexAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserAnnexSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAnnexMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAnnexMaxAggregateInputType
  }

  export type GetUserAnnexAggregateType<T extends UserAnnexAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAnnex]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAnnex[P]>
      : GetScalarType<T[P], AggregateUserAnnex[P]>
  }




  export type UserAnnexGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAnnexWhereInput
    orderBy?: UserAnnexOrderByWithAggregationInput | UserAnnexOrderByWithAggregationInput[]
    by: UserAnnexScalarFieldEnum[] | UserAnnexScalarFieldEnum
    having?: UserAnnexScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAnnexCountAggregateInputType | true
    _avg?: UserAnnexAvgAggregateInputType
    _sum?: UserAnnexSumAggregateInputType
    _min?: UserAnnexMinAggregateInputType
    _max?: UserAnnexMaxAggregateInputType
  }

  export type UserAnnexGroupByOutputType = {
    id: number
    username: string
    first_name: string | null
    last_name: string | null
    _count: UserAnnexCountAggregateOutputType | null
    _avg: UserAnnexAvgAggregateOutputType | null
    _sum: UserAnnexSumAggregateOutputType | null
    _min: UserAnnexMinAggregateOutputType | null
    _max: UserAnnexMaxAggregateOutputType | null
  }

  type GetUserAnnexGroupByPayload<T extends UserAnnexGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAnnexGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAnnexGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAnnexGroupByOutputType[P]>
            : GetScalarType<T[P], UserAnnexGroupByOutputType[P]>
        }
      >
    >


  export type UserAnnexSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    first_name?: boolean
    last_name?: boolean
    projects?: boolean | UserAnnex$projectsArgs<ExtArgs>
    events?: boolean | UserAnnex$eventsArgs<ExtArgs>
    reviewed_events?: boolean | UserAnnex$reviewed_eventsArgs<ExtArgs>
    authoredRevisions?: boolean | UserAnnex$authoredRevisionsArgs<ExtArgs>
    reviewedRevisions?: boolean | UserAnnex$reviewedRevisionsArgs<ExtArgs>
    _count?: boolean | UserAnnexCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAnnex"]>



  export type UserAnnexSelectScalar = {
    id?: boolean
    username?: boolean
    first_name?: boolean
    last_name?: boolean
  }

  export type UserAnnexOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "first_name" | "last_name", ExtArgs["result"]["userAnnex"]>
  export type UserAnnexInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | UserAnnex$projectsArgs<ExtArgs>
    events?: boolean | UserAnnex$eventsArgs<ExtArgs>
    reviewed_events?: boolean | UserAnnex$reviewed_eventsArgs<ExtArgs>
    authoredRevisions?: boolean | UserAnnex$authoredRevisionsArgs<ExtArgs>
    reviewedRevisions?: boolean | UserAnnex$reviewedRevisionsArgs<ExtArgs>
    _count?: boolean | UserAnnexCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserAnnexPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAnnex"
    objects: {
      projects: Prisma.$ProjectAnnexPayload<ExtArgs>[]
      events: Prisma.$EventAnnexPayload<ExtArgs>[]
      reviewed_events: Prisma.$EventAnnexPayload<ExtArgs>[]
      authoredRevisions: Prisma.$RevisionAnnexPayload<ExtArgs>[]
      reviewedRevisions: Prisma.$RevisionAnnexPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      first_name: string | null
      last_name: string | null
    }, ExtArgs["result"]["userAnnex"]>
    composites: {}
  }

  type UserAnnexGetPayload<S extends boolean | null | undefined | UserAnnexDefaultArgs> = $Result.GetResult<Prisma.$UserAnnexPayload, S>

  type UserAnnexCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAnnexFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAnnexCountAggregateInputType | true
    }

  export interface UserAnnexDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAnnex'], meta: { name: 'UserAnnex' } }
    /**
     * Find zero or one UserAnnex that matches the filter.
     * @param {UserAnnexFindUniqueArgs} args - Arguments to find a UserAnnex
     * @example
     * // Get one UserAnnex
     * const userAnnex = await prisma.userAnnex.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAnnexFindUniqueArgs>(args: SelectSubset<T, UserAnnexFindUniqueArgs<ExtArgs>>): Prisma__UserAnnexClient<$Result.GetResult<Prisma.$UserAnnexPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAnnex that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAnnexFindUniqueOrThrowArgs} args - Arguments to find a UserAnnex
     * @example
     * // Get one UserAnnex
     * const userAnnex = await prisma.userAnnex.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAnnexFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAnnexFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAnnexClient<$Result.GetResult<Prisma.$UserAnnexPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAnnex that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnnexFindFirstArgs} args - Arguments to find a UserAnnex
     * @example
     * // Get one UserAnnex
     * const userAnnex = await prisma.userAnnex.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAnnexFindFirstArgs>(args?: SelectSubset<T, UserAnnexFindFirstArgs<ExtArgs>>): Prisma__UserAnnexClient<$Result.GetResult<Prisma.$UserAnnexPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAnnex that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnnexFindFirstOrThrowArgs} args - Arguments to find a UserAnnex
     * @example
     * // Get one UserAnnex
     * const userAnnex = await prisma.userAnnex.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAnnexFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAnnexFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAnnexClient<$Result.GetResult<Prisma.$UserAnnexPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAnnexes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnnexFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAnnexes
     * const userAnnexes = await prisma.userAnnex.findMany()
     * 
     * // Get first 10 UserAnnexes
     * const userAnnexes = await prisma.userAnnex.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAnnexWithIdOnly = await prisma.userAnnex.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAnnexFindManyArgs>(args?: SelectSubset<T, UserAnnexFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAnnexPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAnnex.
     * @param {UserAnnexCreateArgs} args - Arguments to create a UserAnnex.
     * @example
     * // Create one UserAnnex
     * const UserAnnex = await prisma.userAnnex.create({
     *   data: {
     *     // ... data to create a UserAnnex
     *   }
     * })
     * 
     */
    create<T extends UserAnnexCreateArgs>(args: SelectSubset<T, UserAnnexCreateArgs<ExtArgs>>): Prisma__UserAnnexClient<$Result.GetResult<Prisma.$UserAnnexPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAnnexes.
     * @param {UserAnnexCreateManyArgs} args - Arguments to create many UserAnnexes.
     * @example
     * // Create many UserAnnexes
     * const userAnnex = await prisma.userAnnex.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAnnexCreateManyArgs>(args?: SelectSubset<T, UserAnnexCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserAnnex.
     * @param {UserAnnexDeleteArgs} args - Arguments to delete one UserAnnex.
     * @example
     * // Delete one UserAnnex
     * const UserAnnex = await prisma.userAnnex.delete({
     *   where: {
     *     // ... filter to delete one UserAnnex
     *   }
     * })
     * 
     */
    delete<T extends UserAnnexDeleteArgs>(args: SelectSubset<T, UserAnnexDeleteArgs<ExtArgs>>): Prisma__UserAnnexClient<$Result.GetResult<Prisma.$UserAnnexPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAnnex.
     * @param {UserAnnexUpdateArgs} args - Arguments to update one UserAnnex.
     * @example
     * // Update one UserAnnex
     * const userAnnex = await prisma.userAnnex.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAnnexUpdateArgs>(args: SelectSubset<T, UserAnnexUpdateArgs<ExtArgs>>): Prisma__UserAnnexClient<$Result.GetResult<Prisma.$UserAnnexPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAnnexes.
     * @param {UserAnnexDeleteManyArgs} args - Arguments to filter UserAnnexes to delete.
     * @example
     * // Delete a few UserAnnexes
     * const { count } = await prisma.userAnnex.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAnnexDeleteManyArgs>(args?: SelectSubset<T, UserAnnexDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAnnexes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnnexUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAnnexes
     * const userAnnex = await prisma.userAnnex.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAnnexUpdateManyArgs>(args: SelectSubset<T, UserAnnexUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserAnnex.
     * @param {UserAnnexUpsertArgs} args - Arguments to update or create a UserAnnex.
     * @example
     * // Update or create a UserAnnex
     * const userAnnex = await prisma.userAnnex.upsert({
     *   create: {
     *     // ... data to create a UserAnnex
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAnnex we want to update
     *   }
     * })
     */
    upsert<T extends UserAnnexUpsertArgs>(args: SelectSubset<T, UserAnnexUpsertArgs<ExtArgs>>): Prisma__UserAnnexClient<$Result.GetResult<Prisma.$UserAnnexPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserAnnexes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnnexCountArgs} args - Arguments to filter UserAnnexes to count.
     * @example
     * // Count the number of UserAnnexes
     * const count = await prisma.userAnnex.count({
     *   where: {
     *     // ... the filter for the UserAnnexes we want to count
     *   }
     * })
    **/
    count<T extends UserAnnexCountArgs>(
      args?: Subset<T, UserAnnexCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAnnexCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAnnex.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnnexAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAnnexAggregateArgs>(args: Subset<T, UserAnnexAggregateArgs>): Prisma.PrismaPromise<GetUserAnnexAggregateType<T>>

    /**
     * Group by UserAnnex.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnnexGroupByArgs} args - Group by arguments.
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
      T extends UserAnnexGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAnnexGroupByArgs['orderBy'] }
        : { orderBy?: UserAnnexGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserAnnexGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAnnexGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAnnex model
   */
  readonly fields: UserAnnexFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAnnex.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAnnexClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends UserAnnex$projectsArgs<ExtArgs> = {}>(args?: Subset<T, UserAnnex$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectAnnexPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends UserAnnex$eventsArgs<ExtArgs> = {}>(args?: Subset<T, UserAnnex$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventAnnexPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewed_events<T extends UserAnnex$reviewed_eventsArgs<ExtArgs> = {}>(args?: Subset<T, UserAnnex$reviewed_eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventAnnexPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    authoredRevisions<T extends UserAnnex$authoredRevisionsArgs<ExtArgs> = {}>(args?: Subset<T, UserAnnex$authoredRevisionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevisionAnnexPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewedRevisions<T extends UserAnnex$reviewedRevisionsArgs<ExtArgs> = {}>(args?: Subset<T, UserAnnex$reviewedRevisionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevisionAnnexPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the UserAnnex model
   */
  interface UserAnnexFieldRefs {
    readonly id: FieldRef<"UserAnnex", 'Int'>
    readonly username: FieldRef<"UserAnnex", 'String'>
    readonly first_name: FieldRef<"UserAnnex", 'String'>
    readonly last_name: FieldRef<"UserAnnex", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserAnnex findUnique
   */
  export type UserAnnexFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnnex
     */
    select?: UserAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnnex
     */
    omit?: UserAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnnexInclude<ExtArgs> | null
    /**
     * Filter, which UserAnnex to fetch.
     */
    where: UserAnnexWhereUniqueInput
  }

  /**
   * UserAnnex findUniqueOrThrow
   */
  export type UserAnnexFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnnex
     */
    select?: UserAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnnex
     */
    omit?: UserAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnnexInclude<ExtArgs> | null
    /**
     * Filter, which UserAnnex to fetch.
     */
    where: UserAnnexWhereUniqueInput
  }

  /**
   * UserAnnex findFirst
   */
  export type UserAnnexFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnnex
     */
    select?: UserAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnnex
     */
    omit?: UserAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnnexInclude<ExtArgs> | null
    /**
     * Filter, which UserAnnex to fetch.
     */
    where?: UserAnnexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAnnexes to fetch.
     */
    orderBy?: UserAnnexOrderByWithRelationInput | UserAnnexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAnnexes.
     */
    cursor?: UserAnnexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAnnexes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAnnexes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAnnexes.
     */
    distinct?: UserAnnexScalarFieldEnum | UserAnnexScalarFieldEnum[]
  }

  /**
   * UserAnnex findFirstOrThrow
   */
  export type UserAnnexFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnnex
     */
    select?: UserAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnnex
     */
    omit?: UserAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnnexInclude<ExtArgs> | null
    /**
     * Filter, which UserAnnex to fetch.
     */
    where?: UserAnnexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAnnexes to fetch.
     */
    orderBy?: UserAnnexOrderByWithRelationInput | UserAnnexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAnnexes.
     */
    cursor?: UserAnnexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAnnexes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAnnexes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAnnexes.
     */
    distinct?: UserAnnexScalarFieldEnum | UserAnnexScalarFieldEnum[]
  }

  /**
   * UserAnnex findMany
   */
  export type UserAnnexFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnnex
     */
    select?: UserAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnnex
     */
    omit?: UserAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnnexInclude<ExtArgs> | null
    /**
     * Filter, which UserAnnexes to fetch.
     */
    where?: UserAnnexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAnnexes to fetch.
     */
    orderBy?: UserAnnexOrderByWithRelationInput | UserAnnexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAnnexes.
     */
    cursor?: UserAnnexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAnnexes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAnnexes.
     */
    skip?: number
    distinct?: UserAnnexScalarFieldEnum | UserAnnexScalarFieldEnum[]
  }

  /**
   * UserAnnex create
   */
  export type UserAnnexCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnnex
     */
    select?: UserAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnnex
     */
    omit?: UserAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnnexInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAnnex.
     */
    data: XOR<UserAnnexCreateInput, UserAnnexUncheckedCreateInput>
  }

  /**
   * UserAnnex createMany
   */
  export type UserAnnexCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAnnexes.
     */
    data: UserAnnexCreateManyInput | UserAnnexCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAnnex update
   */
  export type UserAnnexUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnnex
     */
    select?: UserAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnnex
     */
    omit?: UserAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnnexInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAnnex.
     */
    data: XOR<UserAnnexUpdateInput, UserAnnexUncheckedUpdateInput>
    /**
     * Choose, which UserAnnex to update.
     */
    where: UserAnnexWhereUniqueInput
  }

  /**
   * UserAnnex updateMany
   */
  export type UserAnnexUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAnnexes.
     */
    data: XOR<UserAnnexUpdateManyMutationInput, UserAnnexUncheckedUpdateManyInput>
    /**
     * Filter which UserAnnexes to update
     */
    where?: UserAnnexWhereInput
    /**
     * Limit how many UserAnnexes to update.
     */
    limit?: number
  }

  /**
   * UserAnnex upsert
   */
  export type UserAnnexUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnnex
     */
    select?: UserAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnnex
     */
    omit?: UserAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnnexInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAnnex to update in case it exists.
     */
    where: UserAnnexWhereUniqueInput
    /**
     * In case the UserAnnex found by the `where` argument doesn't exist, create a new UserAnnex with this data.
     */
    create: XOR<UserAnnexCreateInput, UserAnnexUncheckedCreateInput>
    /**
     * In case the UserAnnex was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAnnexUpdateInput, UserAnnexUncheckedUpdateInput>
  }

  /**
   * UserAnnex delete
   */
  export type UserAnnexDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnnex
     */
    select?: UserAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnnex
     */
    omit?: UserAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnnexInclude<ExtArgs> | null
    /**
     * Filter which UserAnnex to delete.
     */
    where: UserAnnexWhereUniqueInput
  }

  /**
   * UserAnnex deleteMany
   */
  export type UserAnnexDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAnnexes to delete
     */
    where?: UserAnnexWhereInput
    /**
     * Limit how many UserAnnexes to delete.
     */
    limit?: number
  }

  /**
   * UserAnnex.projects
   */
  export type UserAnnex$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAnnex
     */
    select?: ProjectAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAnnex
     */
    omit?: ProjectAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAnnexInclude<ExtArgs> | null
    where?: ProjectAnnexWhereInput
    orderBy?: ProjectAnnexOrderByWithRelationInput | ProjectAnnexOrderByWithRelationInput[]
    cursor?: ProjectAnnexWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectAnnexScalarFieldEnum | ProjectAnnexScalarFieldEnum[]
  }

  /**
   * UserAnnex.events
   */
  export type UserAnnex$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAnnex
     */
    select?: EventAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAnnex
     */
    omit?: EventAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAnnexInclude<ExtArgs> | null
    where?: EventAnnexWhereInput
    orderBy?: EventAnnexOrderByWithRelationInput | EventAnnexOrderByWithRelationInput[]
    cursor?: EventAnnexWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventAnnexScalarFieldEnum | EventAnnexScalarFieldEnum[]
  }

  /**
   * UserAnnex.reviewed_events
   */
  export type UserAnnex$reviewed_eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAnnex
     */
    select?: EventAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAnnex
     */
    omit?: EventAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAnnexInclude<ExtArgs> | null
    where?: EventAnnexWhereInput
    orderBy?: EventAnnexOrderByWithRelationInput | EventAnnexOrderByWithRelationInput[]
    cursor?: EventAnnexWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventAnnexScalarFieldEnum | EventAnnexScalarFieldEnum[]
  }

  /**
   * UserAnnex.authoredRevisions
   */
  export type UserAnnex$authoredRevisionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionAnnex
     */
    select?: RevisionAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionAnnex
     */
    omit?: RevisionAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionAnnexInclude<ExtArgs> | null
    where?: RevisionAnnexWhereInput
    orderBy?: RevisionAnnexOrderByWithRelationInput | RevisionAnnexOrderByWithRelationInput[]
    cursor?: RevisionAnnexWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RevisionAnnexScalarFieldEnum | RevisionAnnexScalarFieldEnum[]
  }

  /**
   * UserAnnex.reviewedRevisions
   */
  export type UserAnnex$reviewedRevisionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionAnnex
     */
    select?: RevisionAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionAnnex
     */
    omit?: RevisionAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionAnnexInclude<ExtArgs> | null
    where?: RevisionAnnexWhereInput
    orderBy?: RevisionAnnexOrderByWithRelationInput | RevisionAnnexOrderByWithRelationInput[]
    cursor?: RevisionAnnexWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RevisionAnnexScalarFieldEnum | RevisionAnnexScalarFieldEnum[]
  }

  /**
   * UserAnnex without action
   */
  export type UserAnnexDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnnex
     */
    select?: UserAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnnex
     */
    omit?: UserAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnnexInclude<ExtArgs> | null
  }


  /**
   * Model TicketAnnex
   */

  export type AggregateTicketAnnex = {
    _count: TicketAnnexCountAggregateOutputType | null
    _avg: TicketAnnexAvgAggregateOutputType | null
    _sum: TicketAnnexSumAggregateOutputType | null
    _min: TicketAnnexMinAggregateOutputType | null
    _max: TicketAnnexMaxAggregateOutputType | null
  }

  export type TicketAnnexAvgAggregateOutputType = {
    id: number | null
    project_id: number | null
  }

  export type TicketAnnexSumAggregateOutputType = {
    id: number | null
    project_id: number | null
  }

  export type TicketAnnexMinAggregateOutputType = {
    id: number | null
    code: string | null
    project_id: number | null
  }

  export type TicketAnnexMaxAggregateOutputType = {
    id: number | null
    code: string | null
    project_id: number | null
  }

  export type TicketAnnexCountAggregateOutputType = {
    id: number
    code: number
    project_id: number
    _all: number
  }


  export type TicketAnnexAvgAggregateInputType = {
    id?: true
    project_id?: true
  }

  export type TicketAnnexSumAggregateInputType = {
    id?: true
    project_id?: true
  }

  export type TicketAnnexMinAggregateInputType = {
    id?: true
    code?: true
    project_id?: true
  }

  export type TicketAnnexMaxAggregateInputType = {
    id?: true
    code?: true
    project_id?: true
  }

  export type TicketAnnexCountAggregateInputType = {
    id?: true
    code?: true
    project_id?: true
    _all?: true
  }

  export type TicketAnnexAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketAnnex to aggregate.
     */
    where?: TicketAnnexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketAnnexes to fetch.
     */
    orderBy?: TicketAnnexOrderByWithRelationInput | TicketAnnexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketAnnexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketAnnexes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketAnnexes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketAnnexes
    **/
    _count?: true | TicketAnnexCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAnnexAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketAnnexSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketAnnexMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketAnnexMaxAggregateInputType
  }

  export type GetTicketAnnexAggregateType<T extends TicketAnnexAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketAnnex]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketAnnex[P]>
      : GetScalarType<T[P], AggregateTicketAnnex[P]>
  }




  export type TicketAnnexGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketAnnexWhereInput
    orderBy?: TicketAnnexOrderByWithAggregationInput | TicketAnnexOrderByWithAggregationInput[]
    by: TicketAnnexScalarFieldEnum[] | TicketAnnexScalarFieldEnum
    having?: TicketAnnexScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketAnnexCountAggregateInputType | true
    _avg?: TicketAnnexAvgAggregateInputType
    _sum?: TicketAnnexSumAggregateInputType
    _min?: TicketAnnexMinAggregateInputType
    _max?: TicketAnnexMaxAggregateInputType
  }

  export type TicketAnnexGroupByOutputType = {
    id: number
    code: string
    project_id: number
    _count: TicketAnnexCountAggregateOutputType | null
    _avg: TicketAnnexAvgAggregateOutputType | null
    _sum: TicketAnnexSumAggregateOutputType | null
    _min: TicketAnnexMinAggregateOutputType | null
    _max: TicketAnnexMaxAggregateOutputType | null
  }

  type GetTicketAnnexGroupByPayload<T extends TicketAnnexGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketAnnexGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketAnnexGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketAnnexGroupByOutputType[P]>
            : GetScalarType<T[P], TicketAnnexGroupByOutputType[P]>
        }
      >
    >


  export type TicketAnnexSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    project_id?: boolean
    events?: boolean | TicketAnnex$eventsArgs<ExtArgs>
    project?: boolean | ProjectAnnexDefaultArgs<ExtArgs>
    _count?: boolean | TicketAnnexCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketAnnex"]>



  export type TicketAnnexSelectScalar = {
    id?: boolean
    code?: boolean
    project_id?: boolean
  }

  export type TicketAnnexOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "project_id", ExtArgs["result"]["ticketAnnex"]>
  export type TicketAnnexInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | TicketAnnex$eventsArgs<ExtArgs>
    project?: boolean | ProjectAnnexDefaultArgs<ExtArgs>
    _count?: boolean | TicketAnnexCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TicketAnnexPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketAnnex"
    objects: {
      events: Prisma.$EventAnnexPayload<ExtArgs>[]
      project: Prisma.$ProjectAnnexPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      project_id: number
    }, ExtArgs["result"]["ticketAnnex"]>
    composites: {}
  }

  type TicketAnnexGetPayload<S extends boolean | null | undefined | TicketAnnexDefaultArgs> = $Result.GetResult<Prisma.$TicketAnnexPayload, S>

  type TicketAnnexCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketAnnexFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketAnnexCountAggregateInputType | true
    }

  export interface TicketAnnexDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketAnnex'], meta: { name: 'TicketAnnex' } }
    /**
     * Find zero or one TicketAnnex that matches the filter.
     * @param {TicketAnnexFindUniqueArgs} args - Arguments to find a TicketAnnex
     * @example
     * // Get one TicketAnnex
     * const ticketAnnex = await prisma.ticketAnnex.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketAnnexFindUniqueArgs>(args: SelectSubset<T, TicketAnnexFindUniqueArgs<ExtArgs>>): Prisma__TicketAnnexClient<$Result.GetResult<Prisma.$TicketAnnexPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketAnnex that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketAnnexFindUniqueOrThrowArgs} args - Arguments to find a TicketAnnex
     * @example
     * // Get one TicketAnnex
     * const ticketAnnex = await prisma.ticketAnnex.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketAnnexFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketAnnexFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketAnnexClient<$Result.GetResult<Prisma.$TicketAnnexPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketAnnex that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAnnexFindFirstArgs} args - Arguments to find a TicketAnnex
     * @example
     * // Get one TicketAnnex
     * const ticketAnnex = await prisma.ticketAnnex.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketAnnexFindFirstArgs>(args?: SelectSubset<T, TicketAnnexFindFirstArgs<ExtArgs>>): Prisma__TicketAnnexClient<$Result.GetResult<Prisma.$TicketAnnexPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketAnnex that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAnnexFindFirstOrThrowArgs} args - Arguments to find a TicketAnnex
     * @example
     * // Get one TicketAnnex
     * const ticketAnnex = await prisma.ticketAnnex.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketAnnexFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketAnnexFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketAnnexClient<$Result.GetResult<Prisma.$TicketAnnexPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketAnnexes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAnnexFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketAnnexes
     * const ticketAnnexes = await prisma.ticketAnnex.findMany()
     * 
     * // Get first 10 TicketAnnexes
     * const ticketAnnexes = await prisma.ticketAnnex.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketAnnexWithIdOnly = await prisma.ticketAnnex.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketAnnexFindManyArgs>(args?: SelectSubset<T, TicketAnnexFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketAnnexPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketAnnex.
     * @param {TicketAnnexCreateArgs} args - Arguments to create a TicketAnnex.
     * @example
     * // Create one TicketAnnex
     * const TicketAnnex = await prisma.ticketAnnex.create({
     *   data: {
     *     // ... data to create a TicketAnnex
     *   }
     * })
     * 
     */
    create<T extends TicketAnnexCreateArgs>(args: SelectSubset<T, TicketAnnexCreateArgs<ExtArgs>>): Prisma__TicketAnnexClient<$Result.GetResult<Prisma.$TicketAnnexPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketAnnexes.
     * @param {TicketAnnexCreateManyArgs} args - Arguments to create many TicketAnnexes.
     * @example
     * // Create many TicketAnnexes
     * const ticketAnnex = await prisma.ticketAnnex.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketAnnexCreateManyArgs>(args?: SelectSubset<T, TicketAnnexCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TicketAnnex.
     * @param {TicketAnnexDeleteArgs} args - Arguments to delete one TicketAnnex.
     * @example
     * // Delete one TicketAnnex
     * const TicketAnnex = await prisma.ticketAnnex.delete({
     *   where: {
     *     // ... filter to delete one TicketAnnex
     *   }
     * })
     * 
     */
    delete<T extends TicketAnnexDeleteArgs>(args: SelectSubset<T, TicketAnnexDeleteArgs<ExtArgs>>): Prisma__TicketAnnexClient<$Result.GetResult<Prisma.$TicketAnnexPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketAnnex.
     * @param {TicketAnnexUpdateArgs} args - Arguments to update one TicketAnnex.
     * @example
     * // Update one TicketAnnex
     * const ticketAnnex = await prisma.ticketAnnex.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketAnnexUpdateArgs>(args: SelectSubset<T, TicketAnnexUpdateArgs<ExtArgs>>): Prisma__TicketAnnexClient<$Result.GetResult<Prisma.$TicketAnnexPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketAnnexes.
     * @param {TicketAnnexDeleteManyArgs} args - Arguments to filter TicketAnnexes to delete.
     * @example
     * // Delete a few TicketAnnexes
     * const { count } = await prisma.ticketAnnex.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketAnnexDeleteManyArgs>(args?: SelectSubset<T, TicketAnnexDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketAnnexes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAnnexUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketAnnexes
     * const ticketAnnex = await prisma.ticketAnnex.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketAnnexUpdateManyArgs>(args: SelectSubset<T, TicketAnnexUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TicketAnnex.
     * @param {TicketAnnexUpsertArgs} args - Arguments to update or create a TicketAnnex.
     * @example
     * // Update or create a TicketAnnex
     * const ticketAnnex = await prisma.ticketAnnex.upsert({
     *   create: {
     *     // ... data to create a TicketAnnex
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketAnnex we want to update
     *   }
     * })
     */
    upsert<T extends TicketAnnexUpsertArgs>(args: SelectSubset<T, TicketAnnexUpsertArgs<ExtArgs>>): Prisma__TicketAnnexClient<$Result.GetResult<Prisma.$TicketAnnexPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TicketAnnexes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAnnexCountArgs} args - Arguments to filter TicketAnnexes to count.
     * @example
     * // Count the number of TicketAnnexes
     * const count = await prisma.ticketAnnex.count({
     *   where: {
     *     // ... the filter for the TicketAnnexes we want to count
     *   }
     * })
    **/
    count<T extends TicketAnnexCountArgs>(
      args?: Subset<T, TicketAnnexCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketAnnexCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketAnnex.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAnnexAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketAnnexAggregateArgs>(args: Subset<T, TicketAnnexAggregateArgs>): Prisma.PrismaPromise<GetTicketAnnexAggregateType<T>>

    /**
     * Group by TicketAnnex.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAnnexGroupByArgs} args - Group by arguments.
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
      T extends TicketAnnexGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketAnnexGroupByArgs['orderBy'] }
        : { orderBy?: TicketAnnexGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketAnnexGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketAnnexGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketAnnex model
   */
  readonly fields: TicketAnnexFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketAnnex.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketAnnexClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends TicketAnnex$eventsArgs<ExtArgs> = {}>(args?: Subset<T, TicketAnnex$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventAnnexPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    project<T extends ProjectAnnexDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectAnnexDefaultArgs<ExtArgs>>): Prisma__ProjectAnnexClient<$Result.GetResult<Prisma.$ProjectAnnexPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TicketAnnex model
   */
  interface TicketAnnexFieldRefs {
    readonly id: FieldRef<"TicketAnnex", 'Int'>
    readonly code: FieldRef<"TicketAnnex", 'String'>
    readonly project_id: FieldRef<"TicketAnnex", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TicketAnnex findUnique
   */
  export type TicketAnnexFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAnnex
     */
    select?: TicketAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAnnex
     */
    omit?: TicketAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAnnexInclude<ExtArgs> | null
    /**
     * Filter, which TicketAnnex to fetch.
     */
    where: TicketAnnexWhereUniqueInput
  }

  /**
   * TicketAnnex findUniqueOrThrow
   */
  export type TicketAnnexFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAnnex
     */
    select?: TicketAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAnnex
     */
    omit?: TicketAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAnnexInclude<ExtArgs> | null
    /**
     * Filter, which TicketAnnex to fetch.
     */
    where: TicketAnnexWhereUniqueInput
  }

  /**
   * TicketAnnex findFirst
   */
  export type TicketAnnexFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAnnex
     */
    select?: TicketAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAnnex
     */
    omit?: TicketAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAnnexInclude<ExtArgs> | null
    /**
     * Filter, which TicketAnnex to fetch.
     */
    where?: TicketAnnexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketAnnexes to fetch.
     */
    orderBy?: TicketAnnexOrderByWithRelationInput | TicketAnnexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketAnnexes.
     */
    cursor?: TicketAnnexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketAnnexes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketAnnexes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketAnnexes.
     */
    distinct?: TicketAnnexScalarFieldEnum | TicketAnnexScalarFieldEnum[]
  }

  /**
   * TicketAnnex findFirstOrThrow
   */
  export type TicketAnnexFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAnnex
     */
    select?: TicketAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAnnex
     */
    omit?: TicketAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAnnexInclude<ExtArgs> | null
    /**
     * Filter, which TicketAnnex to fetch.
     */
    where?: TicketAnnexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketAnnexes to fetch.
     */
    orderBy?: TicketAnnexOrderByWithRelationInput | TicketAnnexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketAnnexes.
     */
    cursor?: TicketAnnexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketAnnexes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketAnnexes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketAnnexes.
     */
    distinct?: TicketAnnexScalarFieldEnum | TicketAnnexScalarFieldEnum[]
  }

  /**
   * TicketAnnex findMany
   */
  export type TicketAnnexFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAnnex
     */
    select?: TicketAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAnnex
     */
    omit?: TicketAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAnnexInclude<ExtArgs> | null
    /**
     * Filter, which TicketAnnexes to fetch.
     */
    where?: TicketAnnexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketAnnexes to fetch.
     */
    orderBy?: TicketAnnexOrderByWithRelationInput | TicketAnnexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketAnnexes.
     */
    cursor?: TicketAnnexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketAnnexes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketAnnexes.
     */
    skip?: number
    distinct?: TicketAnnexScalarFieldEnum | TicketAnnexScalarFieldEnum[]
  }

  /**
   * TicketAnnex create
   */
  export type TicketAnnexCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAnnex
     */
    select?: TicketAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAnnex
     */
    omit?: TicketAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAnnexInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketAnnex.
     */
    data: XOR<TicketAnnexCreateInput, TicketAnnexUncheckedCreateInput>
  }

  /**
   * TicketAnnex createMany
   */
  export type TicketAnnexCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketAnnexes.
     */
    data: TicketAnnexCreateManyInput | TicketAnnexCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketAnnex update
   */
  export type TicketAnnexUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAnnex
     */
    select?: TicketAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAnnex
     */
    omit?: TicketAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAnnexInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketAnnex.
     */
    data: XOR<TicketAnnexUpdateInput, TicketAnnexUncheckedUpdateInput>
    /**
     * Choose, which TicketAnnex to update.
     */
    where: TicketAnnexWhereUniqueInput
  }

  /**
   * TicketAnnex updateMany
   */
  export type TicketAnnexUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketAnnexes.
     */
    data: XOR<TicketAnnexUpdateManyMutationInput, TicketAnnexUncheckedUpdateManyInput>
    /**
     * Filter which TicketAnnexes to update
     */
    where?: TicketAnnexWhereInput
    /**
     * Limit how many TicketAnnexes to update.
     */
    limit?: number
  }

  /**
   * TicketAnnex upsert
   */
  export type TicketAnnexUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAnnex
     */
    select?: TicketAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAnnex
     */
    omit?: TicketAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAnnexInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketAnnex to update in case it exists.
     */
    where: TicketAnnexWhereUniqueInput
    /**
     * In case the TicketAnnex found by the `where` argument doesn't exist, create a new TicketAnnex with this data.
     */
    create: XOR<TicketAnnexCreateInput, TicketAnnexUncheckedCreateInput>
    /**
     * In case the TicketAnnex was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketAnnexUpdateInput, TicketAnnexUncheckedUpdateInput>
  }

  /**
   * TicketAnnex delete
   */
  export type TicketAnnexDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAnnex
     */
    select?: TicketAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAnnex
     */
    omit?: TicketAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAnnexInclude<ExtArgs> | null
    /**
     * Filter which TicketAnnex to delete.
     */
    where: TicketAnnexWhereUniqueInput
  }

  /**
   * TicketAnnex deleteMany
   */
  export type TicketAnnexDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketAnnexes to delete
     */
    where?: TicketAnnexWhereInput
    /**
     * Limit how many TicketAnnexes to delete.
     */
    limit?: number
  }

  /**
   * TicketAnnex.events
   */
  export type TicketAnnex$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAnnex
     */
    select?: EventAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAnnex
     */
    omit?: EventAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAnnexInclude<ExtArgs> | null
    where?: EventAnnexWhereInput
    orderBy?: EventAnnexOrderByWithRelationInput | EventAnnexOrderByWithRelationInput[]
    cursor?: EventAnnexWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventAnnexScalarFieldEnum | EventAnnexScalarFieldEnum[]
  }

  /**
   * TicketAnnex without action
   */
  export type TicketAnnexDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAnnex
     */
    select?: TicketAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAnnex
     */
    omit?: TicketAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAnnexInclude<ExtArgs> | null
  }


  /**
   * Model EventAnnex
   */

  export type AggregateEventAnnex = {
    _count: EventAnnexCountAggregateOutputType | null
    _avg: EventAnnexAvgAggregateOutputType | null
    _sum: EventAnnexSumAggregateOutputType | null
    _min: EventAnnexMinAggregateOutputType | null
    _max: EventAnnexMaxAggregateOutputType | null
  }

  export type EventAnnexAvgAggregateOutputType = {
    id: number | null
    project_id: number | null
    author_id: number | null
    reviewer_id: number | null
    ticket_id: number | null
    pr_number: number | null
    additions: number | null
    deletions: number | null
    changed_files: number | null
  }

  export type EventAnnexSumAggregateOutputType = {
    id: number | null
    project_id: number | null
    author_id: number | null
    reviewer_id: number | null
    ticket_id: number | null
    pr_number: number | null
    additions: number | null
    deletions: number | null
    changed_files: number | null
  }

  export type EventAnnexMinAggregateOutputType = {
    id: number | null
    github_event_id: string | null
    project_id: number | null
    author_id: number | null
    reviewer_id: number | null
    ticket_id: number | null
    source: $Enums.SourceTypeAnnex | null
    branch: string | null
    pr_number: number | null
    additions: number | null
    deletions: number | null
    changed_files: number | null
    event_type: $Enums.EventTypeAnnex | null
    date_created: Date | null
  }

  export type EventAnnexMaxAggregateOutputType = {
    id: number | null
    github_event_id: string | null
    project_id: number | null
    author_id: number | null
    reviewer_id: number | null
    ticket_id: number | null
    source: $Enums.SourceTypeAnnex | null
    branch: string | null
    pr_number: number | null
    additions: number | null
    deletions: number | null
    changed_files: number | null
    event_type: $Enums.EventTypeAnnex | null
    date_created: Date | null
  }

  export type EventAnnexCountAggregateOutputType = {
    id: number
    github_event_id: number
    project_id: number
    author_id: number
    reviewer_id: number
    ticket_id: number
    source: number
    branch: number
    pr_number: number
    additions: number
    deletions: number
    changed_files: number
    event_type: number
    date_created: number
    _all: number
  }


  export type EventAnnexAvgAggregateInputType = {
    id?: true
    project_id?: true
    author_id?: true
    reviewer_id?: true
    ticket_id?: true
    pr_number?: true
    additions?: true
    deletions?: true
    changed_files?: true
  }

  export type EventAnnexSumAggregateInputType = {
    id?: true
    project_id?: true
    author_id?: true
    reviewer_id?: true
    ticket_id?: true
    pr_number?: true
    additions?: true
    deletions?: true
    changed_files?: true
  }

  export type EventAnnexMinAggregateInputType = {
    id?: true
    github_event_id?: true
    project_id?: true
    author_id?: true
    reviewer_id?: true
    ticket_id?: true
    source?: true
    branch?: true
    pr_number?: true
    additions?: true
    deletions?: true
    changed_files?: true
    event_type?: true
    date_created?: true
  }

  export type EventAnnexMaxAggregateInputType = {
    id?: true
    github_event_id?: true
    project_id?: true
    author_id?: true
    reviewer_id?: true
    ticket_id?: true
    source?: true
    branch?: true
    pr_number?: true
    additions?: true
    deletions?: true
    changed_files?: true
    event_type?: true
    date_created?: true
  }

  export type EventAnnexCountAggregateInputType = {
    id?: true
    github_event_id?: true
    project_id?: true
    author_id?: true
    reviewer_id?: true
    ticket_id?: true
    source?: true
    branch?: true
    pr_number?: true
    additions?: true
    deletions?: true
    changed_files?: true
    event_type?: true
    date_created?: true
    _all?: true
  }

  export type EventAnnexAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventAnnex to aggregate.
     */
    where?: EventAnnexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventAnnexes to fetch.
     */
    orderBy?: EventAnnexOrderByWithRelationInput | EventAnnexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventAnnexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventAnnexes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventAnnexes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventAnnexes
    **/
    _count?: true | EventAnnexCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAnnexAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventAnnexSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventAnnexMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventAnnexMaxAggregateInputType
  }

  export type GetEventAnnexAggregateType<T extends EventAnnexAggregateArgs> = {
        [P in keyof T & keyof AggregateEventAnnex]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventAnnex[P]>
      : GetScalarType<T[P], AggregateEventAnnex[P]>
  }




  export type EventAnnexGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventAnnexWhereInput
    orderBy?: EventAnnexOrderByWithAggregationInput | EventAnnexOrderByWithAggregationInput[]
    by: EventAnnexScalarFieldEnum[] | EventAnnexScalarFieldEnum
    having?: EventAnnexScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventAnnexCountAggregateInputType | true
    _avg?: EventAnnexAvgAggregateInputType
    _sum?: EventAnnexSumAggregateInputType
    _min?: EventAnnexMinAggregateInputType
    _max?: EventAnnexMaxAggregateInputType
  }

  export type EventAnnexGroupByOutputType = {
    id: number
    github_event_id: string | null
    project_id: number | null
    author_id: number | null
    reviewer_id: number | null
    ticket_id: number | null
    source: $Enums.SourceTypeAnnex
    branch: string | null
    pr_number: number | null
    additions: number | null
    deletions: number | null
    changed_files: number | null
    event_type: $Enums.EventTypeAnnex
    date_created: Date
    _count: EventAnnexCountAggregateOutputType | null
    _avg: EventAnnexAvgAggregateOutputType | null
    _sum: EventAnnexSumAggregateOutputType | null
    _min: EventAnnexMinAggregateOutputType | null
    _max: EventAnnexMaxAggregateOutputType | null
  }

  type GetEventAnnexGroupByPayload<T extends EventAnnexGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventAnnexGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventAnnexGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventAnnexGroupByOutputType[P]>
            : GetScalarType<T[P], EventAnnexGroupByOutputType[P]>
        }
      >
    >


  export type EventAnnexSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    github_event_id?: boolean
    project_id?: boolean
    author_id?: boolean
    reviewer_id?: boolean
    ticket_id?: boolean
    source?: boolean
    branch?: boolean
    pr_number?: boolean
    additions?: boolean
    deletions?: boolean
    changed_files?: boolean
    event_type?: boolean
    date_created?: boolean
    project?: boolean | EventAnnex$projectArgs<ExtArgs>
    author?: boolean | EventAnnex$authorArgs<ExtArgs>
    reviewer?: boolean | EventAnnex$reviewerArgs<ExtArgs>
    ticket?: boolean | EventAnnex$ticketArgs<ExtArgs>
    payload?: boolean | EventAnnex$payloadArgs<ExtArgs>
    revision?: boolean | EventAnnex$revisionArgs<ExtArgs>
  }, ExtArgs["result"]["eventAnnex"]>



  export type EventAnnexSelectScalar = {
    id?: boolean
    github_event_id?: boolean
    project_id?: boolean
    author_id?: boolean
    reviewer_id?: boolean
    ticket_id?: boolean
    source?: boolean
    branch?: boolean
    pr_number?: boolean
    additions?: boolean
    deletions?: boolean
    changed_files?: boolean
    event_type?: boolean
    date_created?: boolean
  }

  export type EventAnnexOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "github_event_id" | "project_id" | "author_id" | "reviewer_id" | "ticket_id" | "source" | "branch" | "pr_number" | "additions" | "deletions" | "changed_files" | "event_type" | "date_created", ExtArgs["result"]["eventAnnex"]>
  export type EventAnnexInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | EventAnnex$projectArgs<ExtArgs>
    author?: boolean | EventAnnex$authorArgs<ExtArgs>
    reviewer?: boolean | EventAnnex$reviewerArgs<ExtArgs>
    ticket?: boolean | EventAnnex$ticketArgs<ExtArgs>
    payload?: boolean | EventAnnex$payloadArgs<ExtArgs>
    revision?: boolean | EventAnnex$revisionArgs<ExtArgs>
  }

  export type $EventAnnexPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventAnnex"
    objects: {
      project: Prisma.$ProjectAnnexPayload<ExtArgs> | null
      author: Prisma.$UserAnnexPayload<ExtArgs> | null
      reviewer: Prisma.$UserAnnexPayload<ExtArgs> | null
      ticket: Prisma.$TicketAnnexPayload<ExtArgs> | null
      payload: Prisma.$PayloadAnnexPayload<ExtArgs> | null
      revision: Prisma.$RevisionAnnexPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      github_event_id: string | null
      project_id: number | null
      author_id: number | null
      reviewer_id: number | null
      ticket_id: number | null
      source: $Enums.SourceTypeAnnex
      branch: string | null
      pr_number: number | null
      additions: number | null
      deletions: number | null
      changed_files: number | null
      event_type: $Enums.EventTypeAnnex
      date_created: Date
    }, ExtArgs["result"]["eventAnnex"]>
    composites: {}
  }

  type EventAnnexGetPayload<S extends boolean | null | undefined | EventAnnexDefaultArgs> = $Result.GetResult<Prisma.$EventAnnexPayload, S>

  type EventAnnexCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventAnnexFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventAnnexCountAggregateInputType | true
    }

  export interface EventAnnexDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventAnnex'], meta: { name: 'EventAnnex' } }
    /**
     * Find zero or one EventAnnex that matches the filter.
     * @param {EventAnnexFindUniqueArgs} args - Arguments to find a EventAnnex
     * @example
     * // Get one EventAnnex
     * const eventAnnex = await prisma.eventAnnex.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventAnnexFindUniqueArgs>(args: SelectSubset<T, EventAnnexFindUniqueArgs<ExtArgs>>): Prisma__EventAnnexClient<$Result.GetResult<Prisma.$EventAnnexPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventAnnex that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventAnnexFindUniqueOrThrowArgs} args - Arguments to find a EventAnnex
     * @example
     * // Get one EventAnnex
     * const eventAnnex = await prisma.eventAnnex.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventAnnexFindUniqueOrThrowArgs>(args: SelectSubset<T, EventAnnexFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventAnnexClient<$Result.GetResult<Prisma.$EventAnnexPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventAnnex that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAnnexFindFirstArgs} args - Arguments to find a EventAnnex
     * @example
     * // Get one EventAnnex
     * const eventAnnex = await prisma.eventAnnex.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventAnnexFindFirstArgs>(args?: SelectSubset<T, EventAnnexFindFirstArgs<ExtArgs>>): Prisma__EventAnnexClient<$Result.GetResult<Prisma.$EventAnnexPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventAnnex that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAnnexFindFirstOrThrowArgs} args - Arguments to find a EventAnnex
     * @example
     * // Get one EventAnnex
     * const eventAnnex = await prisma.eventAnnex.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventAnnexFindFirstOrThrowArgs>(args?: SelectSubset<T, EventAnnexFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventAnnexClient<$Result.GetResult<Prisma.$EventAnnexPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventAnnexes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAnnexFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventAnnexes
     * const eventAnnexes = await prisma.eventAnnex.findMany()
     * 
     * // Get first 10 EventAnnexes
     * const eventAnnexes = await prisma.eventAnnex.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventAnnexWithIdOnly = await prisma.eventAnnex.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventAnnexFindManyArgs>(args?: SelectSubset<T, EventAnnexFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventAnnexPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventAnnex.
     * @param {EventAnnexCreateArgs} args - Arguments to create a EventAnnex.
     * @example
     * // Create one EventAnnex
     * const EventAnnex = await prisma.eventAnnex.create({
     *   data: {
     *     // ... data to create a EventAnnex
     *   }
     * })
     * 
     */
    create<T extends EventAnnexCreateArgs>(args: SelectSubset<T, EventAnnexCreateArgs<ExtArgs>>): Prisma__EventAnnexClient<$Result.GetResult<Prisma.$EventAnnexPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventAnnexes.
     * @param {EventAnnexCreateManyArgs} args - Arguments to create many EventAnnexes.
     * @example
     * // Create many EventAnnexes
     * const eventAnnex = await prisma.eventAnnex.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventAnnexCreateManyArgs>(args?: SelectSubset<T, EventAnnexCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EventAnnex.
     * @param {EventAnnexDeleteArgs} args - Arguments to delete one EventAnnex.
     * @example
     * // Delete one EventAnnex
     * const EventAnnex = await prisma.eventAnnex.delete({
     *   where: {
     *     // ... filter to delete one EventAnnex
     *   }
     * })
     * 
     */
    delete<T extends EventAnnexDeleteArgs>(args: SelectSubset<T, EventAnnexDeleteArgs<ExtArgs>>): Prisma__EventAnnexClient<$Result.GetResult<Prisma.$EventAnnexPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventAnnex.
     * @param {EventAnnexUpdateArgs} args - Arguments to update one EventAnnex.
     * @example
     * // Update one EventAnnex
     * const eventAnnex = await prisma.eventAnnex.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventAnnexUpdateArgs>(args: SelectSubset<T, EventAnnexUpdateArgs<ExtArgs>>): Prisma__EventAnnexClient<$Result.GetResult<Prisma.$EventAnnexPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventAnnexes.
     * @param {EventAnnexDeleteManyArgs} args - Arguments to filter EventAnnexes to delete.
     * @example
     * // Delete a few EventAnnexes
     * const { count } = await prisma.eventAnnex.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventAnnexDeleteManyArgs>(args?: SelectSubset<T, EventAnnexDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventAnnexes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAnnexUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventAnnexes
     * const eventAnnex = await prisma.eventAnnex.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventAnnexUpdateManyArgs>(args: SelectSubset<T, EventAnnexUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EventAnnex.
     * @param {EventAnnexUpsertArgs} args - Arguments to update or create a EventAnnex.
     * @example
     * // Update or create a EventAnnex
     * const eventAnnex = await prisma.eventAnnex.upsert({
     *   create: {
     *     // ... data to create a EventAnnex
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventAnnex we want to update
     *   }
     * })
     */
    upsert<T extends EventAnnexUpsertArgs>(args: SelectSubset<T, EventAnnexUpsertArgs<ExtArgs>>): Prisma__EventAnnexClient<$Result.GetResult<Prisma.$EventAnnexPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventAnnexes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAnnexCountArgs} args - Arguments to filter EventAnnexes to count.
     * @example
     * // Count the number of EventAnnexes
     * const count = await prisma.eventAnnex.count({
     *   where: {
     *     // ... the filter for the EventAnnexes we want to count
     *   }
     * })
    **/
    count<T extends EventAnnexCountArgs>(
      args?: Subset<T, EventAnnexCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventAnnexCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventAnnex.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAnnexAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAnnexAggregateArgs>(args: Subset<T, EventAnnexAggregateArgs>): Prisma.PrismaPromise<GetEventAnnexAggregateType<T>>

    /**
     * Group by EventAnnex.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAnnexGroupByArgs} args - Group by arguments.
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
      T extends EventAnnexGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventAnnexGroupByArgs['orderBy'] }
        : { orderBy?: EventAnnexGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventAnnexGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventAnnexGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventAnnex model
   */
  readonly fields: EventAnnexFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventAnnex.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventAnnexClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends EventAnnex$projectArgs<ExtArgs> = {}>(args?: Subset<T, EventAnnex$projectArgs<ExtArgs>>): Prisma__ProjectAnnexClient<$Result.GetResult<Prisma.$ProjectAnnexPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    author<T extends EventAnnex$authorArgs<ExtArgs> = {}>(args?: Subset<T, EventAnnex$authorArgs<ExtArgs>>): Prisma__UserAnnexClient<$Result.GetResult<Prisma.$UserAnnexPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reviewer<T extends EventAnnex$reviewerArgs<ExtArgs> = {}>(args?: Subset<T, EventAnnex$reviewerArgs<ExtArgs>>): Prisma__UserAnnexClient<$Result.GetResult<Prisma.$UserAnnexPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ticket<T extends EventAnnex$ticketArgs<ExtArgs> = {}>(args?: Subset<T, EventAnnex$ticketArgs<ExtArgs>>): Prisma__TicketAnnexClient<$Result.GetResult<Prisma.$TicketAnnexPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payload<T extends EventAnnex$payloadArgs<ExtArgs> = {}>(args?: Subset<T, EventAnnex$payloadArgs<ExtArgs>>): Prisma__PayloadAnnexClient<$Result.GetResult<Prisma.$PayloadAnnexPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    revision<T extends EventAnnex$revisionArgs<ExtArgs> = {}>(args?: Subset<T, EventAnnex$revisionArgs<ExtArgs>>): Prisma__RevisionAnnexClient<$Result.GetResult<Prisma.$RevisionAnnexPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EventAnnex model
   */
  interface EventAnnexFieldRefs {
    readonly id: FieldRef<"EventAnnex", 'Int'>
    readonly github_event_id: FieldRef<"EventAnnex", 'String'>
    readonly project_id: FieldRef<"EventAnnex", 'Int'>
    readonly author_id: FieldRef<"EventAnnex", 'Int'>
    readonly reviewer_id: FieldRef<"EventAnnex", 'Int'>
    readonly ticket_id: FieldRef<"EventAnnex", 'Int'>
    readonly source: FieldRef<"EventAnnex", 'SourceTypeAnnex'>
    readonly branch: FieldRef<"EventAnnex", 'String'>
    readonly pr_number: FieldRef<"EventAnnex", 'Int'>
    readonly additions: FieldRef<"EventAnnex", 'Int'>
    readonly deletions: FieldRef<"EventAnnex", 'Int'>
    readonly changed_files: FieldRef<"EventAnnex", 'Int'>
    readonly event_type: FieldRef<"EventAnnex", 'EventTypeAnnex'>
    readonly date_created: FieldRef<"EventAnnex", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventAnnex findUnique
   */
  export type EventAnnexFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAnnex
     */
    select?: EventAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAnnex
     */
    omit?: EventAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAnnexInclude<ExtArgs> | null
    /**
     * Filter, which EventAnnex to fetch.
     */
    where: EventAnnexWhereUniqueInput
  }

  /**
   * EventAnnex findUniqueOrThrow
   */
  export type EventAnnexFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAnnex
     */
    select?: EventAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAnnex
     */
    omit?: EventAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAnnexInclude<ExtArgs> | null
    /**
     * Filter, which EventAnnex to fetch.
     */
    where: EventAnnexWhereUniqueInput
  }

  /**
   * EventAnnex findFirst
   */
  export type EventAnnexFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAnnex
     */
    select?: EventAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAnnex
     */
    omit?: EventAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAnnexInclude<ExtArgs> | null
    /**
     * Filter, which EventAnnex to fetch.
     */
    where?: EventAnnexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventAnnexes to fetch.
     */
    orderBy?: EventAnnexOrderByWithRelationInput | EventAnnexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventAnnexes.
     */
    cursor?: EventAnnexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventAnnexes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventAnnexes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventAnnexes.
     */
    distinct?: EventAnnexScalarFieldEnum | EventAnnexScalarFieldEnum[]
  }

  /**
   * EventAnnex findFirstOrThrow
   */
  export type EventAnnexFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAnnex
     */
    select?: EventAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAnnex
     */
    omit?: EventAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAnnexInclude<ExtArgs> | null
    /**
     * Filter, which EventAnnex to fetch.
     */
    where?: EventAnnexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventAnnexes to fetch.
     */
    orderBy?: EventAnnexOrderByWithRelationInput | EventAnnexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventAnnexes.
     */
    cursor?: EventAnnexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventAnnexes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventAnnexes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventAnnexes.
     */
    distinct?: EventAnnexScalarFieldEnum | EventAnnexScalarFieldEnum[]
  }

  /**
   * EventAnnex findMany
   */
  export type EventAnnexFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAnnex
     */
    select?: EventAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAnnex
     */
    omit?: EventAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAnnexInclude<ExtArgs> | null
    /**
     * Filter, which EventAnnexes to fetch.
     */
    where?: EventAnnexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventAnnexes to fetch.
     */
    orderBy?: EventAnnexOrderByWithRelationInput | EventAnnexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventAnnexes.
     */
    cursor?: EventAnnexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventAnnexes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventAnnexes.
     */
    skip?: number
    distinct?: EventAnnexScalarFieldEnum | EventAnnexScalarFieldEnum[]
  }

  /**
   * EventAnnex create
   */
  export type EventAnnexCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAnnex
     */
    select?: EventAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAnnex
     */
    omit?: EventAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAnnexInclude<ExtArgs> | null
    /**
     * The data needed to create a EventAnnex.
     */
    data: XOR<EventAnnexCreateInput, EventAnnexUncheckedCreateInput>
  }

  /**
   * EventAnnex createMany
   */
  export type EventAnnexCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventAnnexes.
     */
    data: EventAnnexCreateManyInput | EventAnnexCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventAnnex update
   */
  export type EventAnnexUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAnnex
     */
    select?: EventAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAnnex
     */
    omit?: EventAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAnnexInclude<ExtArgs> | null
    /**
     * The data needed to update a EventAnnex.
     */
    data: XOR<EventAnnexUpdateInput, EventAnnexUncheckedUpdateInput>
    /**
     * Choose, which EventAnnex to update.
     */
    where: EventAnnexWhereUniqueInput
  }

  /**
   * EventAnnex updateMany
   */
  export type EventAnnexUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventAnnexes.
     */
    data: XOR<EventAnnexUpdateManyMutationInput, EventAnnexUncheckedUpdateManyInput>
    /**
     * Filter which EventAnnexes to update
     */
    where?: EventAnnexWhereInput
    /**
     * Limit how many EventAnnexes to update.
     */
    limit?: number
  }

  /**
   * EventAnnex upsert
   */
  export type EventAnnexUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAnnex
     */
    select?: EventAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAnnex
     */
    omit?: EventAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAnnexInclude<ExtArgs> | null
    /**
     * The filter to search for the EventAnnex to update in case it exists.
     */
    where: EventAnnexWhereUniqueInput
    /**
     * In case the EventAnnex found by the `where` argument doesn't exist, create a new EventAnnex with this data.
     */
    create: XOR<EventAnnexCreateInput, EventAnnexUncheckedCreateInput>
    /**
     * In case the EventAnnex was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventAnnexUpdateInput, EventAnnexUncheckedUpdateInput>
  }

  /**
   * EventAnnex delete
   */
  export type EventAnnexDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAnnex
     */
    select?: EventAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAnnex
     */
    omit?: EventAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAnnexInclude<ExtArgs> | null
    /**
     * Filter which EventAnnex to delete.
     */
    where: EventAnnexWhereUniqueInput
  }

  /**
   * EventAnnex deleteMany
   */
  export type EventAnnexDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventAnnexes to delete
     */
    where?: EventAnnexWhereInput
    /**
     * Limit how many EventAnnexes to delete.
     */
    limit?: number
  }

  /**
   * EventAnnex.project
   */
  export type EventAnnex$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAnnex
     */
    select?: ProjectAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAnnex
     */
    omit?: ProjectAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAnnexInclude<ExtArgs> | null
    where?: ProjectAnnexWhereInput
  }

  /**
   * EventAnnex.author
   */
  export type EventAnnex$authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnnex
     */
    select?: UserAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnnex
     */
    omit?: UserAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnnexInclude<ExtArgs> | null
    where?: UserAnnexWhereInput
  }

  /**
   * EventAnnex.reviewer
   */
  export type EventAnnex$reviewerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnnex
     */
    select?: UserAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnnex
     */
    omit?: UserAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnnexInclude<ExtArgs> | null
    where?: UserAnnexWhereInput
  }

  /**
   * EventAnnex.ticket
   */
  export type EventAnnex$ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAnnex
     */
    select?: TicketAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAnnex
     */
    omit?: TicketAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAnnexInclude<ExtArgs> | null
    where?: TicketAnnexWhereInput
  }

  /**
   * EventAnnex.payload
   */
  export type EventAnnex$payloadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayloadAnnex
     */
    select?: PayloadAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayloadAnnex
     */
    omit?: PayloadAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayloadAnnexInclude<ExtArgs> | null
    where?: PayloadAnnexWhereInput
  }

  /**
   * EventAnnex.revision
   */
  export type EventAnnex$revisionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionAnnex
     */
    select?: RevisionAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionAnnex
     */
    omit?: RevisionAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionAnnexInclude<ExtArgs> | null
    where?: RevisionAnnexWhereInput
  }

  /**
   * EventAnnex without action
   */
  export type EventAnnexDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAnnex
     */
    select?: EventAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAnnex
     */
    omit?: EventAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAnnexInclude<ExtArgs> | null
  }


  /**
   * Model PayloadAnnex
   */

  export type AggregatePayloadAnnex = {
    _count: PayloadAnnexCountAggregateOutputType | null
    _avg: PayloadAnnexAvgAggregateOutputType | null
    _sum: PayloadAnnexSumAggregateOutputType | null
    _min: PayloadAnnexMinAggregateOutputType | null
    _max: PayloadAnnexMaxAggregateOutputType | null
  }

  export type PayloadAnnexAvgAggregateOutputType = {
    id: number | null
    event_id: number | null
  }

  export type PayloadAnnexSumAggregateOutputType = {
    id: number | null
    event_id: number | null
  }

  export type PayloadAnnexMinAggregateOutputType = {
    id: number | null
    event_id: number | null
  }

  export type PayloadAnnexMaxAggregateOutputType = {
    id: number | null
    event_id: number | null
  }

  export type PayloadAnnexCountAggregateOutputType = {
    id: number
    raw_payload: number
    event_id: number
    _all: number
  }


  export type PayloadAnnexAvgAggregateInputType = {
    id?: true
    event_id?: true
  }

  export type PayloadAnnexSumAggregateInputType = {
    id?: true
    event_id?: true
  }

  export type PayloadAnnexMinAggregateInputType = {
    id?: true
    event_id?: true
  }

  export type PayloadAnnexMaxAggregateInputType = {
    id?: true
    event_id?: true
  }

  export type PayloadAnnexCountAggregateInputType = {
    id?: true
    raw_payload?: true
    event_id?: true
    _all?: true
  }

  export type PayloadAnnexAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayloadAnnex to aggregate.
     */
    where?: PayloadAnnexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayloadAnnexes to fetch.
     */
    orderBy?: PayloadAnnexOrderByWithRelationInput | PayloadAnnexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayloadAnnexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayloadAnnexes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayloadAnnexes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PayloadAnnexes
    **/
    _count?: true | PayloadAnnexCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayloadAnnexAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayloadAnnexSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayloadAnnexMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayloadAnnexMaxAggregateInputType
  }

  export type GetPayloadAnnexAggregateType<T extends PayloadAnnexAggregateArgs> = {
        [P in keyof T & keyof AggregatePayloadAnnex]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayloadAnnex[P]>
      : GetScalarType<T[P], AggregatePayloadAnnex[P]>
  }




  export type PayloadAnnexGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayloadAnnexWhereInput
    orderBy?: PayloadAnnexOrderByWithAggregationInput | PayloadAnnexOrderByWithAggregationInput[]
    by: PayloadAnnexScalarFieldEnum[] | PayloadAnnexScalarFieldEnum
    having?: PayloadAnnexScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayloadAnnexCountAggregateInputType | true
    _avg?: PayloadAnnexAvgAggregateInputType
    _sum?: PayloadAnnexSumAggregateInputType
    _min?: PayloadAnnexMinAggregateInputType
    _max?: PayloadAnnexMaxAggregateInputType
  }

  export type PayloadAnnexGroupByOutputType = {
    id: number
    raw_payload: JsonValue
    event_id: number
    _count: PayloadAnnexCountAggregateOutputType | null
    _avg: PayloadAnnexAvgAggregateOutputType | null
    _sum: PayloadAnnexSumAggregateOutputType | null
    _min: PayloadAnnexMinAggregateOutputType | null
    _max: PayloadAnnexMaxAggregateOutputType | null
  }

  type GetPayloadAnnexGroupByPayload<T extends PayloadAnnexGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayloadAnnexGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayloadAnnexGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayloadAnnexGroupByOutputType[P]>
            : GetScalarType<T[P], PayloadAnnexGroupByOutputType[P]>
        }
      >
    >


  export type PayloadAnnexSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raw_payload?: boolean
    event_id?: boolean
    event?: boolean | EventAnnexDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payloadAnnex"]>



  export type PayloadAnnexSelectScalar = {
    id?: boolean
    raw_payload?: boolean
    event_id?: boolean
  }

  export type PayloadAnnexOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "raw_payload" | "event_id", ExtArgs["result"]["payloadAnnex"]>
  export type PayloadAnnexInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventAnnexDefaultArgs<ExtArgs>
  }

  export type $PayloadAnnexPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PayloadAnnex"
    objects: {
      event: Prisma.$EventAnnexPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      raw_payload: Prisma.JsonValue
      event_id: number
    }, ExtArgs["result"]["payloadAnnex"]>
    composites: {}
  }

  type PayloadAnnexGetPayload<S extends boolean | null | undefined | PayloadAnnexDefaultArgs> = $Result.GetResult<Prisma.$PayloadAnnexPayload, S>

  type PayloadAnnexCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayloadAnnexFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayloadAnnexCountAggregateInputType | true
    }

  export interface PayloadAnnexDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PayloadAnnex'], meta: { name: 'PayloadAnnex' } }
    /**
     * Find zero or one PayloadAnnex that matches the filter.
     * @param {PayloadAnnexFindUniqueArgs} args - Arguments to find a PayloadAnnex
     * @example
     * // Get one PayloadAnnex
     * const payloadAnnex = await prisma.payloadAnnex.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayloadAnnexFindUniqueArgs>(args: SelectSubset<T, PayloadAnnexFindUniqueArgs<ExtArgs>>): Prisma__PayloadAnnexClient<$Result.GetResult<Prisma.$PayloadAnnexPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PayloadAnnex that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayloadAnnexFindUniqueOrThrowArgs} args - Arguments to find a PayloadAnnex
     * @example
     * // Get one PayloadAnnex
     * const payloadAnnex = await prisma.payloadAnnex.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayloadAnnexFindUniqueOrThrowArgs>(args: SelectSubset<T, PayloadAnnexFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayloadAnnexClient<$Result.GetResult<Prisma.$PayloadAnnexPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayloadAnnex that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayloadAnnexFindFirstArgs} args - Arguments to find a PayloadAnnex
     * @example
     * // Get one PayloadAnnex
     * const payloadAnnex = await prisma.payloadAnnex.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayloadAnnexFindFirstArgs>(args?: SelectSubset<T, PayloadAnnexFindFirstArgs<ExtArgs>>): Prisma__PayloadAnnexClient<$Result.GetResult<Prisma.$PayloadAnnexPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayloadAnnex that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayloadAnnexFindFirstOrThrowArgs} args - Arguments to find a PayloadAnnex
     * @example
     * // Get one PayloadAnnex
     * const payloadAnnex = await prisma.payloadAnnex.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayloadAnnexFindFirstOrThrowArgs>(args?: SelectSubset<T, PayloadAnnexFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayloadAnnexClient<$Result.GetResult<Prisma.$PayloadAnnexPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PayloadAnnexes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayloadAnnexFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PayloadAnnexes
     * const payloadAnnexes = await prisma.payloadAnnex.findMany()
     * 
     * // Get first 10 PayloadAnnexes
     * const payloadAnnexes = await prisma.payloadAnnex.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payloadAnnexWithIdOnly = await prisma.payloadAnnex.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayloadAnnexFindManyArgs>(args?: SelectSubset<T, PayloadAnnexFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayloadAnnexPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PayloadAnnex.
     * @param {PayloadAnnexCreateArgs} args - Arguments to create a PayloadAnnex.
     * @example
     * // Create one PayloadAnnex
     * const PayloadAnnex = await prisma.payloadAnnex.create({
     *   data: {
     *     // ... data to create a PayloadAnnex
     *   }
     * })
     * 
     */
    create<T extends PayloadAnnexCreateArgs>(args: SelectSubset<T, PayloadAnnexCreateArgs<ExtArgs>>): Prisma__PayloadAnnexClient<$Result.GetResult<Prisma.$PayloadAnnexPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PayloadAnnexes.
     * @param {PayloadAnnexCreateManyArgs} args - Arguments to create many PayloadAnnexes.
     * @example
     * // Create many PayloadAnnexes
     * const payloadAnnex = await prisma.payloadAnnex.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayloadAnnexCreateManyArgs>(args?: SelectSubset<T, PayloadAnnexCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PayloadAnnex.
     * @param {PayloadAnnexDeleteArgs} args - Arguments to delete one PayloadAnnex.
     * @example
     * // Delete one PayloadAnnex
     * const PayloadAnnex = await prisma.payloadAnnex.delete({
     *   where: {
     *     // ... filter to delete one PayloadAnnex
     *   }
     * })
     * 
     */
    delete<T extends PayloadAnnexDeleteArgs>(args: SelectSubset<T, PayloadAnnexDeleteArgs<ExtArgs>>): Prisma__PayloadAnnexClient<$Result.GetResult<Prisma.$PayloadAnnexPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PayloadAnnex.
     * @param {PayloadAnnexUpdateArgs} args - Arguments to update one PayloadAnnex.
     * @example
     * // Update one PayloadAnnex
     * const payloadAnnex = await prisma.payloadAnnex.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayloadAnnexUpdateArgs>(args: SelectSubset<T, PayloadAnnexUpdateArgs<ExtArgs>>): Prisma__PayloadAnnexClient<$Result.GetResult<Prisma.$PayloadAnnexPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PayloadAnnexes.
     * @param {PayloadAnnexDeleteManyArgs} args - Arguments to filter PayloadAnnexes to delete.
     * @example
     * // Delete a few PayloadAnnexes
     * const { count } = await prisma.payloadAnnex.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayloadAnnexDeleteManyArgs>(args?: SelectSubset<T, PayloadAnnexDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayloadAnnexes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayloadAnnexUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PayloadAnnexes
     * const payloadAnnex = await prisma.payloadAnnex.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayloadAnnexUpdateManyArgs>(args: SelectSubset<T, PayloadAnnexUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PayloadAnnex.
     * @param {PayloadAnnexUpsertArgs} args - Arguments to update or create a PayloadAnnex.
     * @example
     * // Update or create a PayloadAnnex
     * const payloadAnnex = await prisma.payloadAnnex.upsert({
     *   create: {
     *     // ... data to create a PayloadAnnex
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PayloadAnnex we want to update
     *   }
     * })
     */
    upsert<T extends PayloadAnnexUpsertArgs>(args: SelectSubset<T, PayloadAnnexUpsertArgs<ExtArgs>>): Prisma__PayloadAnnexClient<$Result.GetResult<Prisma.$PayloadAnnexPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PayloadAnnexes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayloadAnnexCountArgs} args - Arguments to filter PayloadAnnexes to count.
     * @example
     * // Count the number of PayloadAnnexes
     * const count = await prisma.payloadAnnex.count({
     *   where: {
     *     // ... the filter for the PayloadAnnexes we want to count
     *   }
     * })
    **/
    count<T extends PayloadAnnexCountArgs>(
      args?: Subset<T, PayloadAnnexCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayloadAnnexCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PayloadAnnex.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayloadAnnexAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PayloadAnnexAggregateArgs>(args: Subset<T, PayloadAnnexAggregateArgs>): Prisma.PrismaPromise<GetPayloadAnnexAggregateType<T>>

    /**
     * Group by PayloadAnnex.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayloadAnnexGroupByArgs} args - Group by arguments.
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
      T extends PayloadAnnexGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayloadAnnexGroupByArgs['orderBy'] }
        : { orderBy?: PayloadAnnexGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PayloadAnnexGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayloadAnnexGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PayloadAnnex model
   */
  readonly fields: PayloadAnnexFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PayloadAnnex.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayloadAnnexClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventAnnexDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventAnnexDefaultArgs<ExtArgs>>): Prisma__EventAnnexClient<$Result.GetResult<Prisma.$EventAnnexPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PayloadAnnex model
   */
  interface PayloadAnnexFieldRefs {
    readonly id: FieldRef<"PayloadAnnex", 'Int'>
    readonly raw_payload: FieldRef<"PayloadAnnex", 'Json'>
    readonly event_id: FieldRef<"PayloadAnnex", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PayloadAnnex findUnique
   */
  export type PayloadAnnexFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayloadAnnex
     */
    select?: PayloadAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayloadAnnex
     */
    omit?: PayloadAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayloadAnnexInclude<ExtArgs> | null
    /**
     * Filter, which PayloadAnnex to fetch.
     */
    where: PayloadAnnexWhereUniqueInput
  }

  /**
   * PayloadAnnex findUniqueOrThrow
   */
  export type PayloadAnnexFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayloadAnnex
     */
    select?: PayloadAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayloadAnnex
     */
    omit?: PayloadAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayloadAnnexInclude<ExtArgs> | null
    /**
     * Filter, which PayloadAnnex to fetch.
     */
    where: PayloadAnnexWhereUniqueInput
  }

  /**
   * PayloadAnnex findFirst
   */
  export type PayloadAnnexFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayloadAnnex
     */
    select?: PayloadAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayloadAnnex
     */
    omit?: PayloadAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayloadAnnexInclude<ExtArgs> | null
    /**
     * Filter, which PayloadAnnex to fetch.
     */
    where?: PayloadAnnexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayloadAnnexes to fetch.
     */
    orderBy?: PayloadAnnexOrderByWithRelationInput | PayloadAnnexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayloadAnnexes.
     */
    cursor?: PayloadAnnexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayloadAnnexes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayloadAnnexes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayloadAnnexes.
     */
    distinct?: PayloadAnnexScalarFieldEnum | PayloadAnnexScalarFieldEnum[]
  }

  /**
   * PayloadAnnex findFirstOrThrow
   */
  export type PayloadAnnexFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayloadAnnex
     */
    select?: PayloadAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayloadAnnex
     */
    omit?: PayloadAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayloadAnnexInclude<ExtArgs> | null
    /**
     * Filter, which PayloadAnnex to fetch.
     */
    where?: PayloadAnnexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayloadAnnexes to fetch.
     */
    orderBy?: PayloadAnnexOrderByWithRelationInput | PayloadAnnexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayloadAnnexes.
     */
    cursor?: PayloadAnnexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayloadAnnexes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayloadAnnexes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayloadAnnexes.
     */
    distinct?: PayloadAnnexScalarFieldEnum | PayloadAnnexScalarFieldEnum[]
  }

  /**
   * PayloadAnnex findMany
   */
  export type PayloadAnnexFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayloadAnnex
     */
    select?: PayloadAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayloadAnnex
     */
    omit?: PayloadAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayloadAnnexInclude<ExtArgs> | null
    /**
     * Filter, which PayloadAnnexes to fetch.
     */
    where?: PayloadAnnexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayloadAnnexes to fetch.
     */
    orderBy?: PayloadAnnexOrderByWithRelationInput | PayloadAnnexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PayloadAnnexes.
     */
    cursor?: PayloadAnnexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayloadAnnexes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayloadAnnexes.
     */
    skip?: number
    distinct?: PayloadAnnexScalarFieldEnum | PayloadAnnexScalarFieldEnum[]
  }

  /**
   * PayloadAnnex create
   */
  export type PayloadAnnexCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayloadAnnex
     */
    select?: PayloadAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayloadAnnex
     */
    omit?: PayloadAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayloadAnnexInclude<ExtArgs> | null
    /**
     * The data needed to create a PayloadAnnex.
     */
    data: XOR<PayloadAnnexCreateInput, PayloadAnnexUncheckedCreateInput>
  }

  /**
   * PayloadAnnex createMany
   */
  export type PayloadAnnexCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PayloadAnnexes.
     */
    data: PayloadAnnexCreateManyInput | PayloadAnnexCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PayloadAnnex update
   */
  export type PayloadAnnexUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayloadAnnex
     */
    select?: PayloadAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayloadAnnex
     */
    omit?: PayloadAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayloadAnnexInclude<ExtArgs> | null
    /**
     * The data needed to update a PayloadAnnex.
     */
    data: XOR<PayloadAnnexUpdateInput, PayloadAnnexUncheckedUpdateInput>
    /**
     * Choose, which PayloadAnnex to update.
     */
    where: PayloadAnnexWhereUniqueInput
  }

  /**
   * PayloadAnnex updateMany
   */
  export type PayloadAnnexUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PayloadAnnexes.
     */
    data: XOR<PayloadAnnexUpdateManyMutationInput, PayloadAnnexUncheckedUpdateManyInput>
    /**
     * Filter which PayloadAnnexes to update
     */
    where?: PayloadAnnexWhereInput
    /**
     * Limit how many PayloadAnnexes to update.
     */
    limit?: number
  }

  /**
   * PayloadAnnex upsert
   */
  export type PayloadAnnexUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayloadAnnex
     */
    select?: PayloadAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayloadAnnex
     */
    omit?: PayloadAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayloadAnnexInclude<ExtArgs> | null
    /**
     * The filter to search for the PayloadAnnex to update in case it exists.
     */
    where: PayloadAnnexWhereUniqueInput
    /**
     * In case the PayloadAnnex found by the `where` argument doesn't exist, create a new PayloadAnnex with this data.
     */
    create: XOR<PayloadAnnexCreateInput, PayloadAnnexUncheckedCreateInput>
    /**
     * In case the PayloadAnnex was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayloadAnnexUpdateInput, PayloadAnnexUncheckedUpdateInput>
  }

  /**
   * PayloadAnnex delete
   */
  export type PayloadAnnexDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayloadAnnex
     */
    select?: PayloadAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayloadAnnex
     */
    omit?: PayloadAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayloadAnnexInclude<ExtArgs> | null
    /**
     * Filter which PayloadAnnex to delete.
     */
    where: PayloadAnnexWhereUniqueInput
  }

  /**
   * PayloadAnnex deleteMany
   */
  export type PayloadAnnexDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayloadAnnexes to delete
     */
    where?: PayloadAnnexWhereInput
    /**
     * Limit how many PayloadAnnexes to delete.
     */
    limit?: number
  }

  /**
   * PayloadAnnex without action
   */
  export type PayloadAnnexDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayloadAnnex
     */
    select?: PayloadAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayloadAnnex
     */
    omit?: PayloadAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayloadAnnexInclude<ExtArgs> | null
  }


  /**
   * Model RevisionAnnex
   */

  export type AggregateRevisionAnnex = {
    _count: RevisionAnnexCountAggregateOutputType | null
    _avg: RevisionAnnexAvgAggregateOutputType | null
    _sum: RevisionAnnexSumAggregateOutputType | null
    _min: RevisionAnnexMinAggregateOutputType | null
    _max: RevisionAnnexMaxAggregateOutputType | null
  }

  export type RevisionAnnexAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    reviewer_id: number | null
    pr_event_id: number | null
  }

  export type RevisionAnnexSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    reviewer_id: number | null
    pr_event_id: number | null
  }

  export type RevisionAnnexMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    reviewer_id: number | null
    pr_event_id: number | null
  }

  export type RevisionAnnexMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    reviewer_id: number | null
    pr_event_id: number | null
  }

  export type RevisionAnnexCountAggregateOutputType = {
    id: number
    user_id: number
    reviewer_id: number
    pr_event_id: number
    _all: number
  }


  export type RevisionAnnexAvgAggregateInputType = {
    id?: true
    user_id?: true
    reviewer_id?: true
    pr_event_id?: true
  }

  export type RevisionAnnexSumAggregateInputType = {
    id?: true
    user_id?: true
    reviewer_id?: true
    pr_event_id?: true
  }

  export type RevisionAnnexMinAggregateInputType = {
    id?: true
    user_id?: true
    reviewer_id?: true
    pr_event_id?: true
  }

  export type RevisionAnnexMaxAggregateInputType = {
    id?: true
    user_id?: true
    reviewer_id?: true
    pr_event_id?: true
  }

  export type RevisionAnnexCountAggregateInputType = {
    id?: true
    user_id?: true
    reviewer_id?: true
    pr_event_id?: true
    _all?: true
  }

  export type RevisionAnnexAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RevisionAnnex to aggregate.
     */
    where?: RevisionAnnexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevisionAnnexes to fetch.
     */
    orderBy?: RevisionAnnexOrderByWithRelationInput | RevisionAnnexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RevisionAnnexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevisionAnnexes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevisionAnnexes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RevisionAnnexes
    **/
    _count?: true | RevisionAnnexCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RevisionAnnexAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RevisionAnnexSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RevisionAnnexMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RevisionAnnexMaxAggregateInputType
  }

  export type GetRevisionAnnexAggregateType<T extends RevisionAnnexAggregateArgs> = {
        [P in keyof T & keyof AggregateRevisionAnnex]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRevisionAnnex[P]>
      : GetScalarType<T[P], AggregateRevisionAnnex[P]>
  }




  export type RevisionAnnexGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RevisionAnnexWhereInput
    orderBy?: RevisionAnnexOrderByWithAggregationInput | RevisionAnnexOrderByWithAggregationInput[]
    by: RevisionAnnexScalarFieldEnum[] | RevisionAnnexScalarFieldEnum
    having?: RevisionAnnexScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RevisionAnnexCountAggregateInputType | true
    _avg?: RevisionAnnexAvgAggregateInputType
    _sum?: RevisionAnnexSumAggregateInputType
    _min?: RevisionAnnexMinAggregateInputType
    _max?: RevisionAnnexMaxAggregateInputType
  }

  export type RevisionAnnexGroupByOutputType = {
    id: number
    user_id: number
    reviewer_id: number | null
    pr_event_id: number
    _count: RevisionAnnexCountAggregateOutputType | null
    _avg: RevisionAnnexAvgAggregateOutputType | null
    _sum: RevisionAnnexSumAggregateOutputType | null
    _min: RevisionAnnexMinAggregateOutputType | null
    _max: RevisionAnnexMaxAggregateOutputType | null
  }

  type GetRevisionAnnexGroupByPayload<T extends RevisionAnnexGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RevisionAnnexGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RevisionAnnexGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RevisionAnnexGroupByOutputType[P]>
            : GetScalarType<T[P], RevisionAnnexGroupByOutputType[P]>
        }
      >
    >


  export type RevisionAnnexSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    reviewer_id?: boolean
    pr_event_id?: boolean
    user?: boolean | UserAnnexDefaultArgs<ExtArgs>
    reviewer?: boolean | RevisionAnnex$reviewerArgs<ExtArgs>
    pr_event?: boolean | EventAnnexDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["revisionAnnex"]>



  export type RevisionAnnexSelectScalar = {
    id?: boolean
    user_id?: boolean
    reviewer_id?: boolean
    pr_event_id?: boolean
  }

  export type RevisionAnnexOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "reviewer_id" | "pr_event_id", ExtArgs["result"]["revisionAnnex"]>
  export type RevisionAnnexInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserAnnexDefaultArgs<ExtArgs>
    reviewer?: boolean | RevisionAnnex$reviewerArgs<ExtArgs>
    pr_event?: boolean | EventAnnexDefaultArgs<ExtArgs>
  }

  export type $RevisionAnnexPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RevisionAnnex"
    objects: {
      user: Prisma.$UserAnnexPayload<ExtArgs>
      reviewer: Prisma.$UserAnnexPayload<ExtArgs> | null
      pr_event: Prisma.$EventAnnexPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      reviewer_id: number | null
      pr_event_id: number
    }, ExtArgs["result"]["revisionAnnex"]>
    composites: {}
  }

  type RevisionAnnexGetPayload<S extends boolean | null | undefined | RevisionAnnexDefaultArgs> = $Result.GetResult<Prisma.$RevisionAnnexPayload, S>

  type RevisionAnnexCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RevisionAnnexFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RevisionAnnexCountAggregateInputType | true
    }

  export interface RevisionAnnexDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RevisionAnnex'], meta: { name: 'RevisionAnnex' } }
    /**
     * Find zero or one RevisionAnnex that matches the filter.
     * @param {RevisionAnnexFindUniqueArgs} args - Arguments to find a RevisionAnnex
     * @example
     * // Get one RevisionAnnex
     * const revisionAnnex = await prisma.revisionAnnex.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RevisionAnnexFindUniqueArgs>(args: SelectSubset<T, RevisionAnnexFindUniqueArgs<ExtArgs>>): Prisma__RevisionAnnexClient<$Result.GetResult<Prisma.$RevisionAnnexPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RevisionAnnex that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RevisionAnnexFindUniqueOrThrowArgs} args - Arguments to find a RevisionAnnex
     * @example
     * // Get one RevisionAnnex
     * const revisionAnnex = await prisma.revisionAnnex.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RevisionAnnexFindUniqueOrThrowArgs>(args: SelectSubset<T, RevisionAnnexFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RevisionAnnexClient<$Result.GetResult<Prisma.$RevisionAnnexPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RevisionAnnex that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionAnnexFindFirstArgs} args - Arguments to find a RevisionAnnex
     * @example
     * // Get one RevisionAnnex
     * const revisionAnnex = await prisma.revisionAnnex.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RevisionAnnexFindFirstArgs>(args?: SelectSubset<T, RevisionAnnexFindFirstArgs<ExtArgs>>): Prisma__RevisionAnnexClient<$Result.GetResult<Prisma.$RevisionAnnexPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RevisionAnnex that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionAnnexFindFirstOrThrowArgs} args - Arguments to find a RevisionAnnex
     * @example
     * // Get one RevisionAnnex
     * const revisionAnnex = await prisma.revisionAnnex.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RevisionAnnexFindFirstOrThrowArgs>(args?: SelectSubset<T, RevisionAnnexFindFirstOrThrowArgs<ExtArgs>>): Prisma__RevisionAnnexClient<$Result.GetResult<Prisma.$RevisionAnnexPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RevisionAnnexes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionAnnexFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RevisionAnnexes
     * const revisionAnnexes = await prisma.revisionAnnex.findMany()
     * 
     * // Get first 10 RevisionAnnexes
     * const revisionAnnexes = await prisma.revisionAnnex.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const revisionAnnexWithIdOnly = await prisma.revisionAnnex.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RevisionAnnexFindManyArgs>(args?: SelectSubset<T, RevisionAnnexFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevisionAnnexPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RevisionAnnex.
     * @param {RevisionAnnexCreateArgs} args - Arguments to create a RevisionAnnex.
     * @example
     * // Create one RevisionAnnex
     * const RevisionAnnex = await prisma.revisionAnnex.create({
     *   data: {
     *     // ... data to create a RevisionAnnex
     *   }
     * })
     * 
     */
    create<T extends RevisionAnnexCreateArgs>(args: SelectSubset<T, RevisionAnnexCreateArgs<ExtArgs>>): Prisma__RevisionAnnexClient<$Result.GetResult<Prisma.$RevisionAnnexPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RevisionAnnexes.
     * @param {RevisionAnnexCreateManyArgs} args - Arguments to create many RevisionAnnexes.
     * @example
     * // Create many RevisionAnnexes
     * const revisionAnnex = await prisma.revisionAnnex.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RevisionAnnexCreateManyArgs>(args?: SelectSubset<T, RevisionAnnexCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RevisionAnnex.
     * @param {RevisionAnnexDeleteArgs} args - Arguments to delete one RevisionAnnex.
     * @example
     * // Delete one RevisionAnnex
     * const RevisionAnnex = await prisma.revisionAnnex.delete({
     *   where: {
     *     // ... filter to delete one RevisionAnnex
     *   }
     * })
     * 
     */
    delete<T extends RevisionAnnexDeleteArgs>(args: SelectSubset<T, RevisionAnnexDeleteArgs<ExtArgs>>): Prisma__RevisionAnnexClient<$Result.GetResult<Prisma.$RevisionAnnexPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RevisionAnnex.
     * @param {RevisionAnnexUpdateArgs} args - Arguments to update one RevisionAnnex.
     * @example
     * // Update one RevisionAnnex
     * const revisionAnnex = await prisma.revisionAnnex.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RevisionAnnexUpdateArgs>(args: SelectSubset<T, RevisionAnnexUpdateArgs<ExtArgs>>): Prisma__RevisionAnnexClient<$Result.GetResult<Prisma.$RevisionAnnexPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RevisionAnnexes.
     * @param {RevisionAnnexDeleteManyArgs} args - Arguments to filter RevisionAnnexes to delete.
     * @example
     * // Delete a few RevisionAnnexes
     * const { count } = await prisma.revisionAnnex.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RevisionAnnexDeleteManyArgs>(args?: SelectSubset<T, RevisionAnnexDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RevisionAnnexes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionAnnexUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RevisionAnnexes
     * const revisionAnnex = await prisma.revisionAnnex.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RevisionAnnexUpdateManyArgs>(args: SelectSubset<T, RevisionAnnexUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RevisionAnnex.
     * @param {RevisionAnnexUpsertArgs} args - Arguments to update or create a RevisionAnnex.
     * @example
     * // Update or create a RevisionAnnex
     * const revisionAnnex = await prisma.revisionAnnex.upsert({
     *   create: {
     *     // ... data to create a RevisionAnnex
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RevisionAnnex we want to update
     *   }
     * })
     */
    upsert<T extends RevisionAnnexUpsertArgs>(args: SelectSubset<T, RevisionAnnexUpsertArgs<ExtArgs>>): Prisma__RevisionAnnexClient<$Result.GetResult<Prisma.$RevisionAnnexPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RevisionAnnexes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionAnnexCountArgs} args - Arguments to filter RevisionAnnexes to count.
     * @example
     * // Count the number of RevisionAnnexes
     * const count = await prisma.revisionAnnex.count({
     *   where: {
     *     // ... the filter for the RevisionAnnexes we want to count
     *   }
     * })
    **/
    count<T extends RevisionAnnexCountArgs>(
      args?: Subset<T, RevisionAnnexCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RevisionAnnexCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RevisionAnnex.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionAnnexAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RevisionAnnexAggregateArgs>(args: Subset<T, RevisionAnnexAggregateArgs>): Prisma.PrismaPromise<GetRevisionAnnexAggregateType<T>>

    /**
     * Group by RevisionAnnex.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionAnnexGroupByArgs} args - Group by arguments.
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
      T extends RevisionAnnexGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RevisionAnnexGroupByArgs['orderBy'] }
        : { orderBy?: RevisionAnnexGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RevisionAnnexGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRevisionAnnexGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RevisionAnnex model
   */
  readonly fields: RevisionAnnexFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RevisionAnnex.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RevisionAnnexClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserAnnexDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserAnnexDefaultArgs<ExtArgs>>): Prisma__UserAnnexClient<$Result.GetResult<Prisma.$UserAnnexPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviewer<T extends RevisionAnnex$reviewerArgs<ExtArgs> = {}>(args?: Subset<T, RevisionAnnex$reviewerArgs<ExtArgs>>): Prisma__UserAnnexClient<$Result.GetResult<Prisma.$UserAnnexPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pr_event<T extends EventAnnexDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventAnnexDefaultArgs<ExtArgs>>): Prisma__EventAnnexClient<$Result.GetResult<Prisma.$EventAnnexPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RevisionAnnex model
   */
  interface RevisionAnnexFieldRefs {
    readonly id: FieldRef<"RevisionAnnex", 'Int'>
    readonly user_id: FieldRef<"RevisionAnnex", 'Int'>
    readonly reviewer_id: FieldRef<"RevisionAnnex", 'Int'>
    readonly pr_event_id: FieldRef<"RevisionAnnex", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RevisionAnnex findUnique
   */
  export type RevisionAnnexFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionAnnex
     */
    select?: RevisionAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionAnnex
     */
    omit?: RevisionAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionAnnexInclude<ExtArgs> | null
    /**
     * Filter, which RevisionAnnex to fetch.
     */
    where: RevisionAnnexWhereUniqueInput
  }

  /**
   * RevisionAnnex findUniqueOrThrow
   */
  export type RevisionAnnexFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionAnnex
     */
    select?: RevisionAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionAnnex
     */
    omit?: RevisionAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionAnnexInclude<ExtArgs> | null
    /**
     * Filter, which RevisionAnnex to fetch.
     */
    where: RevisionAnnexWhereUniqueInput
  }

  /**
   * RevisionAnnex findFirst
   */
  export type RevisionAnnexFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionAnnex
     */
    select?: RevisionAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionAnnex
     */
    omit?: RevisionAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionAnnexInclude<ExtArgs> | null
    /**
     * Filter, which RevisionAnnex to fetch.
     */
    where?: RevisionAnnexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevisionAnnexes to fetch.
     */
    orderBy?: RevisionAnnexOrderByWithRelationInput | RevisionAnnexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RevisionAnnexes.
     */
    cursor?: RevisionAnnexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevisionAnnexes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevisionAnnexes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RevisionAnnexes.
     */
    distinct?: RevisionAnnexScalarFieldEnum | RevisionAnnexScalarFieldEnum[]
  }

  /**
   * RevisionAnnex findFirstOrThrow
   */
  export type RevisionAnnexFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionAnnex
     */
    select?: RevisionAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionAnnex
     */
    omit?: RevisionAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionAnnexInclude<ExtArgs> | null
    /**
     * Filter, which RevisionAnnex to fetch.
     */
    where?: RevisionAnnexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevisionAnnexes to fetch.
     */
    orderBy?: RevisionAnnexOrderByWithRelationInput | RevisionAnnexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RevisionAnnexes.
     */
    cursor?: RevisionAnnexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevisionAnnexes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevisionAnnexes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RevisionAnnexes.
     */
    distinct?: RevisionAnnexScalarFieldEnum | RevisionAnnexScalarFieldEnum[]
  }

  /**
   * RevisionAnnex findMany
   */
  export type RevisionAnnexFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionAnnex
     */
    select?: RevisionAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionAnnex
     */
    omit?: RevisionAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionAnnexInclude<ExtArgs> | null
    /**
     * Filter, which RevisionAnnexes to fetch.
     */
    where?: RevisionAnnexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevisionAnnexes to fetch.
     */
    orderBy?: RevisionAnnexOrderByWithRelationInput | RevisionAnnexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RevisionAnnexes.
     */
    cursor?: RevisionAnnexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevisionAnnexes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevisionAnnexes.
     */
    skip?: number
    distinct?: RevisionAnnexScalarFieldEnum | RevisionAnnexScalarFieldEnum[]
  }

  /**
   * RevisionAnnex create
   */
  export type RevisionAnnexCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionAnnex
     */
    select?: RevisionAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionAnnex
     */
    omit?: RevisionAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionAnnexInclude<ExtArgs> | null
    /**
     * The data needed to create a RevisionAnnex.
     */
    data: XOR<RevisionAnnexCreateInput, RevisionAnnexUncheckedCreateInput>
  }

  /**
   * RevisionAnnex createMany
   */
  export type RevisionAnnexCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RevisionAnnexes.
     */
    data: RevisionAnnexCreateManyInput | RevisionAnnexCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RevisionAnnex update
   */
  export type RevisionAnnexUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionAnnex
     */
    select?: RevisionAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionAnnex
     */
    omit?: RevisionAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionAnnexInclude<ExtArgs> | null
    /**
     * The data needed to update a RevisionAnnex.
     */
    data: XOR<RevisionAnnexUpdateInput, RevisionAnnexUncheckedUpdateInput>
    /**
     * Choose, which RevisionAnnex to update.
     */
    where: RevisionAnnexWhereUniqueInput
  }

  /**
   * RevisionAnnex updateMany
   */
  export type RevisionAnnexUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RevisionAnnexes.
     */
    data: XOR<RevisionAnnexUpdateManyMutationInput, RevisionAnnexUncheckedUpdateManyInput>
    /**
     * Filter which RevisionAnnexes to update
     */
    where?: RevisionAnnexWhereInput
    /**
     * Limit how many RevisionAnnexes to update.
     */
    limit?: number
  }

  /**
   * RevisionAnnex upsert
   */
  export type RevisionAnnexUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionAnnex
     */
    select?: RevisionAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionAnnex
     */
    omit?: RevisionAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionAnnexInclude<ExtArgs> | null
    /**
     * The filter to search for the RevisionAnnex to update in case it exists.
     */
    where: RevisionAnnexWhereUniqueInput
    /**
     * In case the RevisionAnnex found by the `where` argument doesn't exist, create a new RevisionAnnex with this data.
     */
    create: XOR<RevisionAnnexCreateInput, RevisionAnnexUncheckedCreateInput>
    /**
     * In case the RevisionAnnex was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RevisionAnnexUpdateInput, RevisionAnnexUncheckedUpdateInput>
  }

  /**
   * RevisionAnnex delete
   */
  export type RevisionAnnexDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionAnnex
     */
    select?: RevisionAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionAnnex
     */
    omit?: RevisionAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionAnnexInclude<ExtArgs> | null
    /**
     * Filter which RevisionAnnex to delete.
     */
    where: RevisionAnnexWhereUniqueInput
  }

  /**
   * RevisionAnnex deleteMany
   */
  export type RevisionAnnexDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RevisionAnnexes to delete
     */
    where?: RevisionAnnexWhereInput
    /**
     * Limit how many RevisionAnnexes to delete.
     */
    limit?: number
  }

  /**
   * RevisionAnnex.reviewer
   */
  export type RevisionAnnex$reviewerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnnex
     */
    select?: UserAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnnex
     */
    omit?: UserAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnnexInclude<ExtArgs> | null
    where?: UserAnnexWhereInput
  }

  /**
   * RevisionAnnex without action
   */
  export type RevisionAnnexDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionAnnex
     */
    select?: RevisionAnnexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionAnnex
     */
    omit?: RevisionAnnexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionAnnexInclude<ExtArgs> | null
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


  export const ProjectAnnexScalarFieldEnum: {
    id: 'id',
    name: 'name',
    repository: 'repository'
  };

  export type ProjectAnnexScalarFieldEnum = (typeof ProjectAnnexScalarFieldEnum)[keyof typeof ProjectAnnexScalarFieldEnum]


  export const UserAnnexScalarFieldEnum: {
    id: 'id',
    username: 'username',
    first_name: 'first_name',
    last_name: 'last_name'
  };

  export type UserAnnexScalarFieldEnum = (typeof UserAnnexScalarFieldEnum)[keyof typeof UserAnnexScalarFieldEnum]


  export const TicketAnnexScalarFieldEnum: {
    id: 'id',
    code: 'code',
    project_id: 'project_id'
  };

  export type TicketAnnexScalarFieldEnum = (typeof TicketAnnexScalarFieldEnum)[keyof typeof TicketAnnexScalarFieldEnum]


  export const EventAnnexScalarFieldEnum: {
    id: 'id',
    github_event_id: 'github_event_id',
    project_id: 'project_id',
    author_id: 'author_id',
    reviewer_id: 'reviewer_id',
    ticket_id: 'ticket_id',
    source: 'source',
    branch: 'branch',
    pr_number: 'pr_number',
    additions: 'additions',
    deletions: 'deletions',
    changed_files: 'changed_files',
    event_type: 'event_type',
    date_created: 'date_created'
  };

  export type EventAnnexScalarFieldEnum = (typeof EventAnnexScalarFieldEnum)[keyof typeof EventAnnexScalarFieldEnum]


  export const PayloadAnnexScalarFieldEnum: {
    id: 'id',
    raw_payload: 'raw_payload',
    event_id: 'event_id'
  };

  export type PayloadAnnexScalarFieldEnum = (typeof PayloadAnnexScalarFieldEnum)[keyof typeof PayloadAnnexScalarFieldEnum]


  export const RevisionAnnexScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    reviewer_id: 'reviewer_id',
    pr_event_id: 'pr_event_id'
  };

  export type RevisionAnnexScalarFieldEnum = (typeof RevisionAnnexScalarFieldEnum)[keyof typeof RevisionAnnexScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const ProjectAnnexOrderByRelevanceFieldEnum: {
    name: 'name',
    repository: 'repository'
  };

  export type ProjectAnnexOrderByRelevanceFieldEnum = (typeof ProjectAnnexOrderByRelevanceFieldEnum)[keyof typeof ProjectAnnexOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserAnnexOrderByRelevanceFieldEnum: {
    username: 'username',
    first_name: 'first_name',
    last_name: 'last_name'
  };

  export type UserAnnexOrderByRelevanceFieldEnum = (typeof UserAnnexOrderByRelevanceFieldEnum)[keyof typeof UserAnnexOrderByRelevanceFieldEnum]


  export const TicketAnnexOrderByRelevanceFieldEnum: {
    code: 'code'
  };

  export type TicketAnnexOrderByRelevanceFieldEnum = (typeof TicketAnnexOrderByRelevanceFieldEnum)[keyof typeof TicketAnnexOrderByRelevanceFieldEnum]


  export const EventAnnexOrderByRelevanceFieldEnum: {
    github_event_id: 'github_event_id',
    branch: 'branch'
  };

  export type EventAnnexOrderByRelevanceFieldEnum = (typeof EventAnnexOrderByRelevanceFieldEnum)[keyof typeof EventAnnexOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'SourceTypeAnnex'
   */
  export type EnumSourceTypeAnnexFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SourceTypeAnnex'>
    


  /**
   * Reference to a field of type 'EventTypeAnnex'
   */
  export type EnumEventTypeAnnexFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventTypeAnnex'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ProjectAnnexWhereInput = {
    AND?: ProjectAnnexWhereInput | ProjectAnnexWhereInput[]
    OR?: ProjectAnnexWhereInput[]
    NOT?: ProjectAnnexWhereInput | ProjectAnnexWhereInput[]
    id?: IntFilter<"ProjectAnnex"> | number
    name?: StringFilter<"ProjectAnnex"> | string
    repository?: StringFilter<"ProjectAnnex"> | string
    events?: EventAnnexListRelationFilter
    tickets?: TicketAnnexListRelationFilter
    contributors?: UserAnnexListRelationFilter
  }

  export type ProjectAnnexOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    repository?: SortOrder
    events?: EventAnnexOrderByRelationAggregateInput
    tickets?: TicketAnnexOrderByRelationAggregateInput
    contributors?: UserAnnexOrderByRelationAggregateInput
    _relevance?: ProjectAnnexOrderByRelevanceInput
  }

  export type ProjectAnnexWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectAnnexWhereInput | ProjectAnnexWhereInput[]
    OR?: ProjectAnnexWhereInput[]
    NOT?: ProjectAnnexWhereInput | ProjectAnnexWhereInput[]
    name?: StringFilter<"ProjectAnnex"> | string
    repository?: StringFilter<"ProjectAnnex"> | string
    events?: EventAnnexListRelationFilter
    tickets?: TicketAnnexListRelationFilter
    contributors?: UserAnnexListRelationFilter
  }, "id">

  export type ProjectAnnexOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    repository?: SortOrder
    _count?: ProjectAnnexCountOrderByAggregateInput
    _avg?: ProjectAnnexAvgOrderByAggregateInput
    _max?: ProjectAnnexMaxOrderByAggregateInput
    _min?: ProjectAnnexMinOrderByAggregateInput
    _sum?: ProjectAnnexSumOrderByAggregateInput
  }

  export type ProjectAnnexScalarWhereWithAggregatesInput = {
    AND?: ProjectAnnexScalarWhereWithAggregatesInput | ProjectAnnexScalarWhereWithAggregatesInput[]
    OR?: ProjectAnnexScalarWhereWithAggregatesInput[]
    NOT?: ProjectAnnexScalarWhereWithAggregatesInput | ProjectAnnexScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProjectAnnex"> | number
    name?: StringWithAggregatesFilter<"ProjectAnnex"> | string
    repository?: StringWithAggregatesFilter<"ProjectAnnex"> | string
  }

  export type UserAnnexWhereInput = {
    AND?: UserAnnexWhereInput | UserAnnexWhereInput[]
    OR?: UserAnnexWhereInput[]
    NOT?: UserAnnexWhereInput | UserAnnexWhereInput[]
    id?: IntFilter<"UserAnnex"> | number
    username?: StringFilter<"UserAnnex"> | string
    first_name?: StringNullableFilter<"UserAnnex"> | string | null
    last_name?: StringNullableFilter<"UserAnnex"> | string | null
    projects?: ProjectAnnexListRelationFilter
    events?: EventAnnexListRelationFilter
    reviewed_events?: EventAnnexListRelationFilter
    authoredRevisions?: RevisionAnnexListRelationFilter
    reviewedRevisions?: RevisionAnnexListRelationFilter
  }

  export type UserAnnexOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    projects?: ProjectAnnexOrderByRelationAggregateInput
    events?: EventAnnexOrderByRelationAggregateInput
    reviewed_events?: EventAnnexOrderByRelationAggregateInput
    authoredRevisions?: RevisionAnnexOrderByRelationAggregateInput
    reviewedRevisions?: RevisionAnnexOrderByRelationAggregateInput
    _relevance?: UserAnnexOrderByRelevanceInput
  }

  export type UserAnnexWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserAnnexWhereInput | UserAnnexWhereInput[]
    OR?: UserAnnexWhereInput[]
    NOT?: UserAnnexWhereInput | UserAnnexWhereInput[]
    first_name?: StringNullableFilter<"UserAnnex"> | string | null
    last_name?: StringNullableFilter<"UserAnnex"> | string | null
    projects?: ProjectAnnexListRelationFilter
    events?: EventAnnexListRelationFilter
    reviewed_events?: EventAnnexListRelationFilter
    authoredRevisions?: RevisionAnnexListRelationFilter
    reviewedRevisions?: RevisionAnnexListRelationFilter
  }, "id" | "username">

  export type UserAnnexOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    _count?: UserAnnexCountOrderByAggregateInput
    _avg?: UserAnnexAvgOrderByAggregateInput
    _max?: UserAnnexMaxOrderByAggregateInput
    _min?: UserAnnexMinOrderByAggregateInput
    _sum?: UserAnnexSumOrderByAggregateInput
  }

  export type UserAnnexScalarWhereWithAggregatesInput = {
    AND?: UserAnnexScalarWhereWithAggregatesInput | UserAnnexScalarWhereWithAggregatesInput[]
    OR?: UserAnnexScalarWhereWithAggregatesInput[]
    NOT?: UserAnnexScalarWhereWithAggregatesInput | UserAnnexScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserAnnex"> | number
    username?: StringWithAggregatesFilter<"UserAnnex"> | string
    first_name?: StringNullableWithAggregatesFilter<"UserAnnex"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"UserAnnex"> | string | null
  }

  export type TicketAnnexWhereInput = {
    AND?: TicketAnnexWhereInput | TicketAnnexWhereInput[]
    OR?: TicketAnnexWhereInput[]
    NOT?: TicketAnnexWhereInput | TicketAnnexWhereInput[]
    id?: IntFilter<"TicketAnnex"> | number
    code?: StringFilter<"TicketAnnex"> | string
    project_id?: IntFilter<"TicketAnnex"> | number
    events?: EventAnnexListRelationFilter
    project?: XOR<ProjectAnnexScalarRelationFilter, ProjectAnnexWhereInput>
  }

  export type TicketAnnexOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    project_id?: SortOrder
    events?: EventAnnexOrderByRelationAggregateInput
    project?: ProjectAnnexOrderByWithRelationInput
    _relevance?: TicketAnnexOrderByRelevanceInput
  }

  export type TicketAnnexWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: TicketAnnexWhereInput | TicketAnnexWhereInput[]
    OR?: TicketAnnexWhereInput[]
    NOT?: TicketAnnexWhereInput | TicketAnnexWhereInput[]
    project_id?: IntFilter<"TicketAnnex"> | number
    events?: EventAnnexListRelationFilter
    project?: XOR<ProjectAnnexScalarRelationFilter, ProjectAnnexWhereInput>
  }, "id" | "code">

  export type TicketAnnexOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    project_id?: SortOrder
    _count?: TicketAnnexCountOrderByAggregateInput
    _avg?: TicketAnnexAvgOrderByAggregateInput
    _max?: TicketAnnexMaxOrderByAggregateInput
    _min?: TicketAnnexMinOrderByAggregateInput
    _sum?: TicketAnnexSumOrderByAggregateInput
  }

  export type TicketAnnexScalarWhereWithAggregatesInput = {
    AND?: TicketAnnexScalarWhereWithAggregatesInput | TicketAnnexScalarWhereWithAggregatesInput[]
    OR?: TicketAnnexScalarWhereWithAggregatesInput[]
    NOT?: TicketAnnexScalarWhereWithAggregatesInput | TicketAnnexScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TicketAnnex"> | number
    code?: StringWithAggregatesFilter<"TicketAnnex"> | string
    project_id?: IntWithAggregatesFilter<"TicketAnnex"> | number
  }

  export type EventAnnexWhereInput = {
    AND?: EventAnnexWhereInput | EventAnnexWhereInput[]
    OR?: EventAnnexWhereInput[]
    NOT?: EventAnnexWhereInput | EventAnnexWhereInput[]
    id?: IntFilter<"EventAnnex"> | number
    github_event_id?: StringNullableFilter<"EventAnnex"> | string | null
    project_id?: IntNullableFilter<"EventAnnex"> | number | null
    author_id?: IntNullableFilter<"EventAnnex"> | number | null
    reviewer_id?: IntNullableFilter<"EventAnnex"> | number | null
    ticket_id?: IntNullableFilter<"EventAnnex"> | number | null
    source?: EnumSourceTypeAnnexFilter<"EventAnnex"> | $Enums.SourceTypeAnnex
    branch?: StringNullableFilter<"EventAnnex"> | string | null
    pr_number?: IntNullableFilter<"EventAnnex"> | number | null
    additions?: IntNullableFilter<"EventAnnex"> | number | null
    deletions?: IntNullableFilter<"EventAnnex"> | number | null
    changed_files?: IntNullableFilter<"EventAnnex"> | number | null
    event_type?: EnumEventTypeAnnexFilter<"EventAnnex"> | $Enums.EventTypeAnnex
    date_created?: DateTimeFilter<"EventAnnex"> | Date | string
    project?: XOR<ProjectAnnexNullableScalarRelationFilter, ProjectAnnexWhereInput> | null
    author?: XOR<UserAnnexNullableScalarRelationFilter, UserAnnexWhereInput> | null
    reviewer?: XOR<UserAnnexNullableScalarRelationFilter, UserAnnexWhereInput> | null
    ticket?: XOR<TicketAnnexNullableScalarRelationFilter, TicketAnnexWhereInput> | null
    payload?: XOR<PayloadAnnexNullableScalarRelationFilter, PayloadAnnexWhereInput> | null
    revision?: XOR<RevisionAnnexNullableScalarRelationFilter, RevisionAnnexWhereInput> | null
  }

  export type EventAnnexOrderByWithRelationInput = {
    id?: SortOrder
    github_event_id?: SortOrderInput | SortOrder
    project_id?: SortOrderInput | SortOrder
    author_id?: SortOrderInput | SortOrder
    reviewer_id?: SortOrderInput | SortOrder
    ticket_id?: SortOrderInput | SortOrder
    source?: SortOrder
    branch?: SortOrderInput | SortOrder
    pr_number?: SortOrderInput | SortOrder
    additions?: SortOrderInput | SortOrder
    deletions?: SortOrderInput | SortOrder
    changed_files?: SortOrderInput | SortOrder
    event_type?: SortOrder
    date_created?: SortOrder
    project?: ProjectAnnexOrderByWithRelationInput
    author?: UserAnnexOrderByWithRelationInput
    reviewer?: UserAnnexOrderByWithRelationInput
    ticket?: TicketAnnexOrderByWithRelationInput
    payload?: PayloadAnnexOrderByWithRelationInput
    revision?: RevisionAnnexOrderByWithRelationInput
    _relevance?: EventAnnexOrderByRelevanceInput
  }

  export type EventAnnexWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    github_event_id?: string
    AND?: EventAnnexWhereInput | EventAnnexWhereInput[]
    OR?: EventAnnexWhereInput[]
    NOT?: EventAnnexWhereInput | EventAnnexWhereInput[]
    project_id?: IntNullableFilter<"EventAnnex"> | number | null
    author_id?: IntNullableFilter<"EventAnnex"> | number | null
    reviewer_id?: IntNullableFilter<"EventAnnex"> | number | null
    ticket_id?: IntNullableFilter<"EventAnnex"> | number | null
    source?: EnumSourceTypeAnnexFilter<"EventAnnex"> | $Enums.SourceTypeAnnex
    branch?: StringNullableFilter<"EventAnnex"> | string | null
    pr_number?: IntNullableFilter<"EventAnnex"> | number | null
    additions?: IntNullableFilter<"EventAnnex"> | number | null
    deletions?: IntNullableFilter<"EventAnnex"> | number | null
    changed_files?: IntNullableFilter<"EventAnnex"> | number | null
    event_type?: EnumEventTypeAnnexFilter<"EventAnnex"> | $Enums.EventTypeAnnex
    date_created?: DateTimeFilter<"EventAnnex"> | Date | string
    project?: XOR<ProjectAnnexNullableScalarRelationFilter, ProjectAnnexWhereInput> | null
    author?: XOR<UserAnnexNullableScalarRelationFilter, UserAnnexWhereInput> | null
    reviewer?: XOR<UserAnnexNullableScalarRelationFilter, UserAnnexWhereInput> | null
    ticket?: XOR<TicketAnnexNullableScalarRelationFilter, TicketAnnexWhereInput> | null
    payload?: XOR<PayloadAnnexNullableScalarRelationFilter, PayloadAnnexWhereInput> | null
    revision?: XOR<RevisionAnnexNullableScalarRelationFilter, RevisionAnnexWhereInput> | null
  }, "id" | "github_event_id">

  export type EventAnnexOrderByWithAggregationInput = {
    id?: SortOrder
    github_event_id?: SortOrderInput | SortOrder
    project_id?: SortOrderInput | SortOrder
    author_id?: SortOrderInput | SortOrder
    reviewer_id?: SortOrderInput | SortOrder
    ticket_id?: SortOrderInput | SortOrder
    source?: SortOrder
    branch?: SortOrderInput | SortOrder
    pr_number?: SortOrderInput | SortOrder
    additions?: SortOrderInput | SortOrder
    deletions?: SortOrderInput | SortOrder
    changed_files?: SortOrderInput | SortOrder
    event_type?: SortOrder
    date_created?: SortOrder
    _count?: EventAnnexCountOrderByAggregateInput
    _avg?: EventAnnexAvgOrderByAggregateInput
    _max?: EventAnnexMaxOrderByAggregateInput
    _min?: EventAnnexMinOrderByAggregateInput
    _sum?: EventAnnexSumOrderByAggregateInput
  }

  export type EventAnnexScalarWhereWithAggregatesInput = {
    AND?: EventAnnexScalarWhereWithAggregatesInput | EventAnnexScalarWhereWithAggregatesInput[]
    OR?: EventAnnexScalarWhereWithAggregatesInput[]
    NOT?: EventAnnexScalarWhereWithAggregatesInput | EventAnnexScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EventAnnex"> | number
    github_event_id?: StringNullableWithAggregatesFilter<"EventAnnex"> | string | null
    project_id?: IntNullableWithAggregatesFilter<"EventAnnex"> | number | null
    author_id?: IntNullableWithAggregatesFilter<"EventAnnex"> | number | null
    reviewer_id?: IntNullableWithAggregatesFilter<"EventAnnex"> | number | null
    ticket_id?: IntNullableWithAggregatesFilter<"EventAnnex"> | number | null
    source?: EnumSourceTypeAnnexWithAggregatesFilter<"EventAnnex"> | $Enums.SourceTypeAnnex
    branch?: StringNullableWithAggregatesFilter<"EventAnnex"> | string | null
    pr_number?: IntNullableWithAggregatesFilter<"EventAnnex"> | number | null
    additions?: IntNullableWithAggregatesFilter<"EventAnnex"> | number | null
    deletions?: IntNullableWithAggregatesFilter<"EventAnnex"> | number | null
    changed_files?: IntNullableWithAggregatesFilter<"EventAnnex"> | number | null
    event_type?: EnumEventTypeAnnexWithAggregatesFilter<"EventAnnex"> | $Enums.EventTypeAnnex
    date_created?: DateTimeWithAggregatesFilter<"EventAnnex"> | Date | string
  }

  export type PayloadAnnexWhereInput = {
    AND?: PayloadAnnexWhereInput | PayloadAnnexWhereInput[]
    OR?: PayloadAnnexWhereInput[]
    NOT?: PayloadAnnexWhereInput | PayloadAnnexWhereInput[]
    id?: IntFilter<"PayloadAnnex"> | number
    raw_payload?: JsonFilter<"PayloadAnnex">
    event_id?: IntFilter<"PayloadAnnex"> | number
    event?: XOR<EventAnnexScalarRelationFilter, EventAnnexWhereInput>
  }

  export type PayloadAnnexOrderByWithRelationInput = {
    id?: SortOrder
    raw_payload?: SortOrder
    event_id?: SortOrder
    event?: EventAnnexOrderByWithRelationInput
  }

  export type PayloadAnnexWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    event_id?: number
    AND?: PayloadAnnexWhereInput | PayloadAnnexWhereInput[]
    OR?: PayloadAnnexWhereInput[]
    NOT?: PayloadAnnexWhereInput | PayloadAnnexWhereInput[]
    raw_payload?: JsonFilter<"PayloadAnnex">
    event?: XOR<EventAnnexScalarRelationFilter, EventAnnexWhereInput>
  }, "id" | "event_id">

  export type PayloadAnnexOrderByWithAggregationInput = {
    id?: SortOrder
    raw_payload?: SortOrder
    event_id?: SortOrder
    _count?: PayloadAnnexCountOrderByAggregateInput
    _avg?: PayloadAnnexAvgOrderByAggregateInput
    _max?: PayloadAnnexMaxOrderByAggregateInput
    _min?: PayloadAnnexMinOrderByAggregateInput
    _sum?: PayloadAnnexSumOrderByAggregateInput
  }

  export type PayloadAnnexScalarWhereWithAggregatesInput = {
    AND?: PayloadAnnexScalarWhereWithAggregatesInput | PayloadAnnexScalarWhereWithAggregatesInput[]
    OR?: PayloadAnnexScalarWhereWithAggregatesInput[]
    NOT?: PayloadAnnexScalarWhereWithAggregatesInput | PayloadAnnexScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PayloadAnnex"> | number
    raw_payload?: JsonWithAggregatesFilter<"PayloadAnnex">
    event_id?: IntWithAggregatesFilter<"PayloadAnnex"> | number
  }

  export type RevisionAnnexWhereInput = {
    AND?: RevisionAnnexWhereInput | RevisionAnnexWhereInput[]
    OR?: RevisionAnnexWhereInput[]
    NOT?: RevisionAnnexWhereInput | RevisionAnnexWhereInput[]
    id?: IntFilter<"RevisionAnnex"> | number
    user_id?: IntFilter<"RevisionAnnex"> | number
    reviewer_id?: IntNullableFilter<"RevisionAnnex"> | number | null
    pr_event_id?: IntFilter<"RevisionAnnex"> | number
    user?: XOR<UserAnnexScalarRelationFilter, UserAnnexWhereInput>
    reviewer?: XOR<UserAnnexNullableScalarRelationFilter, UserAnnexWhereInput> | null
    pr_event?: XOR<EventAnnexScalarRelationFilter, EventAnnexWhereInput>
  }

  export type RevisionAnnexOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    reviewer_id?: SortOrderInput | SortOrder
    pr_event_id?: SortOrder
    user?: UserAnnexOrderByWithRelationInput
    reviewer?: UserAnnexOrderByWithRelationInput
    pr_event?: EventAnnexOrderByWithRelationInput
  }

  export type RevisionAnnexWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    pr_event_id?: number
    AND?: RevisionAnnexWhereInput | RevisionAnnexWhereInput[]
    OR?: RevisionAnnexWhereInput[]
    NOT?: RevisionAnnexWhereInput | RevisionAnnexWhereInput[]
    user_id?: IntFilter<"RevisionAnnex"> | number
    reviewer_id?: IntNullableFilter<"RevisionAnnex"> | number | null
    user?: XOR<UserAnnexScalarRelationFilter, UserAnnexWhereInput>
    reviewer?: XOR<UserAnnexNullableScalarRelationFilter, UserAnnexWhereInput> | null
    pr_event?: XOR<EventAnnexScalarRelationFilter, EventAnnexWhereInput>
  }, "id" | "pr_event_id">

  export type RevisionAnnexOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    reviewer_id?: SortOrderInput | SortOrder
    pr_event_id?: SortOrder
    _count?: RevisionAnnexCountOrderByAggregateInput
    _avg?: RevisionAnnexAvgOrderByAggregateInput
    _max?: RevisionAnnexMaxOrderByAggregateInput
    _min?: RevisionAnnexMinOrderByAggregateInput
    _sum?: RevisionAnnexSumOrderByAggregateInput
  }

  export type RevisionAnnexScalarWhereWithAggregatesInput = {
    AND?: RevisionAnnexScalarWhereWithAggregatesInput | RevisionAnnexScalarWhereWithAggregatesInput[]
    OR?: RevisionAnnexScalarWhereWithAggregatesInput[]
    NOT?: RevisionAnnexScalarWhereWithAggregatesInput | RevisionAnnexScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RevisionAnnex"> | number
    user_id?: IntWithAggregatesFilter<"RevisionAnnex"> | number
    reviewer_id?: IntNullableWithAggregatesFilter<"RevisionAnnex"> | number | null
    pr_event_id?: IntWithAggregatesFilter<"RevisionAnnex"> | number
  }

  export type ProjectAnnexCreateInput = {
    name: string
    repository: string
    events?: EventAnnexCreateNestedManyWithoutProjectInput
    tickets?: TicketAnnexCreateNestedManyWithoutProjectInput
    contributors?: UserAnnexCreateNestedManyWithoutProjectsInput
  }

  export type ProjectAnnexUncheckedCreateInput = {
    id?: number
    name: string
    repository: string
    events?: EventAnnexUncheckedCreateNestedManyWithoutProjectInput
    tickets?: TicketAnnexUncheckedCreateNestedManyWithoutProjectInput
    contributors?: UserAnnexUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type ProjectAnnexUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    events?: EventAnnexUpdateManyWithoutProjectNestedInput
    tickets?: TicketAnnexUpdateManyWithoutProjectNestedInput
    contributors?: UserAnnexUpdateManyWithoutProjectsNestedInput
  }

  export type ProjectAnnexUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    events?: EventAnnexUncheckedUpdateManyWithoutProjectNestedInput
    tickets?: TicketAnnexUncheckedUpdateManyWithoutProjectNestedInput
    contributors?: UserAnnexUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type ProjectAnnexCreateManyInput = {
    id?: number
    name: string
    repository: string
  }

  export type ProjectAnnexUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectAnnexUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
  }

  export type UserAnnexCreateInput = {
    username: string
    first_name?: string | null
    last_name?: string | null
    projects?: ProjectAnnexCreateNestedManyWithoutContributorsInput
    events?: EventAnnexCreateNestedManyWithoutAuthorInput
    reviewed_events?: EventAnnexCreateNestedManyWithoutReviewerInput
    authoredRevisions?: RevisionAnnexCreateNestedManyWithoutUserInput
    reviewedRevisions?: RevisionAnnexCreateNestedManyWithoutReviewerInput
  }

  export type UserAnnexUncheckedCreateInput = {
    id?: number
    username: string
    first_name?: string | null
    last_name?: string | null
    projects?: ProjectAnnexUncheckedCreateNestedManyWithoutContributorsInput
    events?: EventAnnexUncheckedCreateNestedManyWithoutAuthorInput
    reviewed_events?: EventAnnexUncheckedCreateNestedManyWithoutReviewerInput
    authoredRevisions?: RevisionAnnexUncheckedCreateNestedManyWithoutUserInput
    reviewedRevisions?: RevisionAnnexUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type UserAnnexUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectAnnexUpdateManyWithoutContributorsNestedInput
    events?: EventAnnexUpdateManyWithoutAuthorNestedInput
    reviewed_events?: EventAnnexUpdateManyWithoutReviewerNestedInput
    authoredRevisions?: RevisionAnnexUpdateManyWithoutUserNestedInput
    reviewedRevisions?: RevisionAnnexUpdateManyWithoutReviewerNestedInput
  }

  export type UserAnnexUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectAnnexUncheckedUpdateManyWithoutContributorsNestedInput
    events?: EventAnnexUncheckedUpdateManyWithoutAuthorNestedInput
    reviewed_events?: EventAnnexUncheckedUpdateManyWithoutReviewerNestedInput
    authoredRevisions?: RevisionAnnexUncheckedUpdateManyWithoutUserNestedInput
    reviewedRevisions?: RevisionAnnexUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type UserAnnexCreateManyInput = {
    id?: number
    username: string
    first_name?: string | null
    last_name?: string | null
  }

  export type UserAnnexUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserAnnexUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketAnnexCreateInput = {
    code: string
    events?: EventAnnexCreateNestedManyWithoutTicketInput
    project: ProjectAnnexCreateNestedOneWithoutTicketsInput
  }

  export type TicketAnnexUncheckedCreateInput = {
    id?: number
    code: string
    project_id: number
    events?: EventAnnexUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketAnnexUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    events?: EventAnnexUpdateManyWithoutTicketNestedInput
    project?: ProjectAnnexUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TicketAnnexUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    project_id?: IntFieldUpdateOperationsInput | number
    events?: EventAnnexUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketAnnexCreateManyInput = {
    id?: number
    code: string
    project_id: number
  }

  export type TicketAnnexUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
  }

  export type TicketAnnexUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    project_id?: IntFieldUpdateOperationsInput | number
  }

  export type EventAnnexCreateInput = {
    github_event_id?: string | null
    source: $Enums.SourceTypeAnnex
    branch?: string | null
    pr_number?: number | null
    additions?: number | null
    deletions?: number | null
    changed_files?: number | null
    event_type: $Enums.EventTypeAnnex
    date_created?: Date | string
    project?: ProjectAnnexCreateNestedOneWithoutEventsInput
    author?: UserAnnexCreateNestedOneWithoutEventsInput
    reviewer?: UserAnnexCreateNestedOneWithoutReviewed_eventsInput
    ticket?: TicketAnnexCreateNestedOneWithoutEventsInput
    payload?: PayloadAnnexCreateNestedOneWithoutEventInput
    revision?: RevisionAnnexCreateNestedOneWithoutPr_eventInput
  }

  export type EventAnnexUncheckedCreateInput = {
    id?: number
    github_event_id?: string | null
    project_id?: number | null
    author_id?: number | null
    reviewer_id?: number | null
    ticket_id?: number | null
    source: $Enums.SourceTypeAnnex
    branch?: string | null
    pr_number?: number | null
    additions?: number | null
    deletions?: number | null
    changed_files?: number | null
    event_type: $Enums.EventTypeAnnex
    date_created?: Date | string
    payload?: PayloadAnnexUncheckedCreateNestedOneWithoutEventInput
    revision?: RevisionAnnexUncheckedCreateNestedOneWithoutPr_eventInput
  }

  export type EventAnnexUpdateInput = {
    github_event_id?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumSourceTypeAnnexFieldUpdateOperationsInput | $Enums.SourceTypeAnnex
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeAnnexFieldUpdateOperationsInput | $Enums.EventTypeAnnex
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectAnnexUpdateOneWithoutEventsNestedInput
    author?: UserAnnexUpdateOneWithoutEventsNestedInput
    reviewer?: UserAnnexUpdateOneWithoutReviewed_eventsNestedInput
    ticket?: TicketAnnexUpdateOneWithoutEventsNestedInput
    payload?: PayloadAnnexUpdateOneWithoutEventNestedInput
    revision?: RevisionAnnexUpdateOneWithoutPr_eventNestedInput
  }

  export type EventAnnexUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    github_event_id?: NullableStringFieldUpdateOperationsInput | string | null
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    author_id?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_id?: NullableIntFieldUpdateOperationsInput | number | null
    source?: EnumSourceTypeAnnexFieldUpdateOperationsInput | $Enums.SourceTypeAnnex
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeAnnexFieldUpdateOperationsInput | $Enums.EventTypeAnnex
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: PayloadAnnexUncheckedUpdateOneWithoutEventNestedInput
    revision?: RevisionAnnexUncheckedUpdateOneWithoutPr_eventNestedInput
  }

  export type EventAnnexCreateManyInput = {
    id?: number
    github_event_id?: string | null
    project_id?: number | null
    author_id?: number | null
    reviewer_id?: number | null
    ticket_id?: number | null
    source: $Enums.SourceTypeAnnex
    branch?: string | null
    pr_number?: number | null
    additions?: number | null
    deletions?: number | null
    changed_files?: number | null
    event_type: $Enums.EventTypeAnnex
    date_created?: Date | string
  }

  export type EventAnnexUpdateManyMutationInput = {
    github_event_id?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumSourceTypeAnnexFieldUpdateOperationsInput | $Enums.SourceTypeAnnex
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeAnnexFieldUpdateOperationsInput | $Enums.EventTypeAnnex
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventAnnexUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    github_event_id?: NullableStringFieldUpdateOperationsInput | string | null
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    author_id?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_id?: NullableIntFieldUpdateOperationsInput | number | null
    source?: EnumSourceTypeAnnexFieldUpdateOperationsInput | $Enums.SourceTypeAnnex
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeAnnexFieldUpdateOperationsInput | $Enums.EventTypeAnnex
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayloadAnnexCreateInput = {
    raw_payload: JsonNullValueInput | InputJsonValue
    event: EventAnnexCreateNestedOneWithoutPayloadInput
  }

  export type PayloadAnnexUncheckedCreateInput = {
    id?: number
    raw_payload: JsonNullValueInput | InputJsonValue
    event_id: number
  }

  export type PayloadAnnexUpdateInput = {
    raw_payload?: JsonNullValueInput | InputJsonValue
    event?: EventAnnexUpdateOneRequiredWithoutPayloadNestedInput
  }

  export type PayloadAnnexUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    raw_payload?: JsonNullValueInput | InputJsonValue
    event_id?: IntFieldUpdateOperationsInput | number
  }

  export type PayloadAnnexCreateManyInput = {
    id?: number
    raw_payload: JsonNullValueInput | InputJsonValue
    event_id: number
  }

  export type PayloadAnnexUpdateManyMutationInput = {
    raw_payload?: JsonNullValueInput | InputJsonValue
  }

  export type PayloadAnnexUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    raw_payload?: JsonNullValueInput | InputJsonValue
    event_id?: IntFieldUpdateOperationsInput | number
  }

  export type RevisionAnnexCreateInput = {
    user: UserAnnexCreateNestedOneWithoutAuthoredRevisionsInput
    reviewer?: UserAnnexCreateNestedOneWithoutReviewedRevisionsInput
    pr_event: EventAnnexCreateNestedOneWithoutRevisionInput
  }

  export type RevisionAnnexUncheckedCreateInput = {
    id?: number
    user_id: number
    reviewer_id?: number | null
    pr_event_id: number
  }

  export type RevisionAnnexUpdateInput = {
    user?: UserAnnexUpdateOneRequiredWithoutAuthoredRevisionsNestedInput
    reviewer?: UserAnnexUpdateOneWithoutReviewedRevisionsNestedInput
    pr_event?: EventAnnexUpdateOneRequiredWithoutRevisionNestedInput
  }

  export type RevisionAnnexUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    reviewer_id?: NullableIntFieldUpdateOperationsInput | number | null
    pr_event_id?: IntFieldUpdateOperationsInput | number
  }

  export type RevisionAnnexCreateManyInput = {
    id?: number
    user_id: number
    reviewer_id?: number | null
    pr_event_id: number
  }

  export type RevisionAnnexUpdateManyMutationInput = {

  }

  export type RevisionAnnexUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    reviewer_id?: NullableIntFieldUpdateOperationsInput | number | null
    pr_event_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EventAnnexListRelationFilter = {
    every?: EventAnnexWhereInput
    some?: EventAnnexWhereInput
    none?: EventAnnexWhereInput
  }

  export type TicketAnnexListRelationFilter = {
    every?: TicketAnnexWhereInput
    some?: TicketAnnexWhereInput
    none?: TicketAnnexWhereInput
  }

  export type UserAnnexListRelationFilter = {
    every?: UserAnnexWhereInput
    some?: UserAnnexWhereInput
    none?: UserAnnexWhereInput
  }

  export type EventAnnexOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketAnnexOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserAnnexOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectAnnexOrderByRelevanceInput = {
    fields: ProjectAnnexOrderByRelevanceFieldEnum | ProjectAnnexOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProjectAnnexCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    repository?: SortOrder
  }

  export type ProjectAnnexAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProjectAnnexMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    repository?: SortOrder
  }

  export type ProjectAnnexMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    repository?: SortOrder
  }

  export type ProjectAnnexSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProjectAnnexListRelationFilter = {
    every?: ProjectAnnexWhereInput
    some?: ProjectAnnexWhereInput
    none?: ProjectAnnexWhereInput
  }

  export type RevisionAnnexListRelationFilter = {
    every?: RevisionAnnexWhereInput
    some?: RevisionAnnexWhereInput
    none?: RevisionAnnexWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectAnnexOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RevisionAnnexOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserAnnexOrderByRelevanceInput = {
    fields: UserAnnexOrderByRelevanceFieldEnum | UserAnnexOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserAnnexCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
  }

  export type UserAnnexAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserAnnexMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
  }

  export type UserAnnexMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
  }

  export type UserAnnexSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ProjectAnnexScalarRelationFilter = {
    is?: ProjectAnnexWhereInput
    isNot?: ProjectAnnexWhereInput
  }

  export type TicketAnnexOrderByRelevanceInput = {
    fields: TicketAnnexOrderByRelevanceFieldEnum | TicketAnnexOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TicketAnnexCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    project_id?: SortOrder
  }

  export type TicketAnnexAvgOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
  }

  export type TicketAnnexMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    project_id?: SortOrder
  }

  export type TicketAnnexMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    project_id?: SortOrder
  }

  export type TicketAnnexSumOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumSourceTypeAnnexFilter<$PrismaModel = never> = {
    equals?: $Enums.SourceTypeAnnex | EnumSourceTypeAnnexFieldRefInput<$PrismaModel>
    in?: $Enums.SourceTypeAnnex[]
    notIn?: $Enums.SourceTypeAnnex[]
    not?: NestedEnumSourceTypeAnnexFilter<$PrismaModel> | $Enums.SourceTypeAnnex
  }

  export type EnumEventTypeAnnexFilter<$PrismaModel = never> = {
    equals?: $Enums.EventTypeAnnex | EnumEventTypeAnnexFieldRefInput<$PrismaModel>
    in?: $Enums.EventTypeAnnex[]
    notIn?: $Enums.EventTypeAnnex[]
    not?: NestedEnumEventTypeAnnexFilter<$PrismaModel> | $Enums.EventTypeAnnex
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProjectAnnexNullableScalarRelationFilter = {
    is?: ProjectAnnexWhereInput | null
    isNot?: ProjectAnnexWhereInput | null
  }

  export type UserAnnexNullableScalarRelationFilter = {
    is?: UserAnnexWhereInput | null
    isNot?: UserAnnexWhereInput | null
  }

  export type TicketAnnexNullableScalarRelationFilter = {
    is?: TicketAnnexWhereInput | null
    isNot?: TicketAnnexWhereInput | null
  }

  export type PayloadAnnexNullableScalarRelationFilter = {
    is?: PayloadAnnexWhereInput | null
    isNot?: PayloadAnnexWhereInput | null
  }

  export type RevisionAnnexNullableScalarRelationFilter = {
    is?: RevisionAnnexWhereInput | null
    isNot?: RevisionAnnexWhereInput | null
  }

  export type EventAnnexOrderByRelevanceInput = {
    fields: EventAnnexOrderByRelevanceFieldEnum | EventAnnexOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EventAnnexCountOrderByAggregateInput = {
    id?: SortOrder
    github_event_id?: SortOrder
    project_id?: SortOrder
    author_id?: SortOrder
    reviewer_id?: SortOrder
    ticket_id?: SortOrder
    source?: SortOrder
    branch?: SortOrder
    pr_number?: SortOrder
    additions?: SortOrder
    deletions?: SortOrder
    changed_files?: SortOrder
    event_type?: SortOrder
    date_created?: SortOrder
  }

  export type EventAnnexAvgOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    author_id?: SortOrder
    reviewer_id?: SortOrder
    ticket_id?: SortOrder
    pr_number?: SortOrder
    additions?: SortOrder
    deletions?: SortOrder
    changed_files?: SortOrder
  }

  export type EventAnnexMaxOrderByAggregateInput = {
    id?: SortOrder
    github_event_id?: SortOrder
    project_id?: SortOrder
    author_id?: SortOrder
    reviewer_id?: SortOrder
    ticket_id?: SortOrder
    source?: SortOrder
    branch?: SortOrder
    pr_number?: SortOrder
    additions?: SortOrder
    deletions?: SortOrder
    changed_files?: SortOrder
    event_type?: SortOrder
    date_created?: SortOrder
  }

  export type EventAnnexMinOrderByAggregateInput = {
    id?: SortOrder
    github_event_id?: SortOrder
    project_id?: SortOrder
    author_id?: SortOrder
    reviewer_id?: SortOrder
    ticket_id?: SortOrder
    source?: SortOrder
    branch?: SortOrder
    pr_number?: SortOrder
    additions?: SortOrder
    deletions?: SortOrder
    changed_files?: SortOrder
    event_type?: SortOrder
    date_created?: SortOrder
  }

  export type EventAnnexSumOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    author_id?: SortOrder
    reviewer_id?: SortOrder
    ticket_id?: SortOrder
    pr_number?: SortOrder
    additions?: SortOrder
    deletions?: SortOrder
    changed_files?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumSourceTypeAnnexWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SourceTypeAnnex | EnumSourceTypeAnnexFieldRefInput<$PrismaModel>
    in?: $Enums.SourceTypeAnnex[]
    notIn?: $Enums.SourceTypeAnnex[]
    not?: NestedEnumSourceTypeAnnexWithAggregatesFilter<$PrismaModel> | $Enums.SourceTypeAnnex
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSourceTypeAnnexFilter<$PrismaModel>
    _max?: NestedEnumSourceTypeAnnexFilter<$PrismaModel>
  }

  export type EnumEventTypeAnnexWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventTypeAnnex | EnumEventTypeAnnexFieldRefInput<$PrismaModel>
    in?: $Enums.EventTypeAnnex[]
    notIn?: $Enums.EventTypeAnnex[]
    not?: NestedEnumEventTypeAnnexWithAggregatesFilter<$PrismaModel> | $Enums.EventTypeAnnex
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeAnnexFilter<$PrismaModel>
    _max?: NestedEnumEventTypeAnnexFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EventAnnexScalarRelationFilter = {
    is?: EventAnnexWhereInput
    isNot?: EventAnnexWhereInput
  }

  export type PayloadAnnexCountOrderByAggregateInput = {
    id?: SortOrder
    raw_payload?: SortOrder
    event_id?: SortOrder
  }

  export type PayloadAnnexAvgOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
  }

  export type PayloadAnnexMaxOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
  }

  export type PayloadAnnexMinOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
  }

  export type PayloadAnnexSumOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type UserAnnexScalarRelationFilter = {
    is?: UserAnnexWhereInput
    isNot?: UserAnnexWhereInput
  }

  export type RevisionAnnexCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    reviewer_id?: SortOrder
    pr_event_id?: SortOrder
  }

  export type RevisionAnnexAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    reviewer_id?: SortOrder
    pr_event_id?: SortOrder
  }

  export type RevisionAnnexMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    reviewer_id?: SortOrder
    pr_event_id?: SortOrder
  }

  export type RevisionAnnexMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    reviewer_id?: SortOrder
    pr_event_id?: SortOrder
  }

  export type RevisionAnnexSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    reviewer_id?: SortOrder
    pr_event_id?: SortOrder
  }

  export type EventAnnexCreateNestedManyWithoutProjectInput = {
    create?: XOR<EventAnnexCreateWithoutProjectInput, EventAnnexUncheckedCreateWithoutProjectInput> | EventAnnexCreateWithoutProjectInput[] | EventAnnexUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: EventAnnexCreateOrConnectWithoutProjectInput | EventAnnexCreateOrConnectWithoutProjectInput[]
    createMany?: EventAnnexCreateManyProjectInputEnvelope
    connect?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
  }

  export type TicketAnnexCreateNestedManyWithoutProjectInput = {
    create?: XOR<TicketAnnexCreateWithoutProjectInput, TicketAnnexUncheckedCreateWithoutProjectInput> | TicketAnnexCreateWithoutProjectInput[] | TicketAnnexUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TicketAnnexCreateOrConnectWithoutProjectInput | TicketAnnexCreateOrConnectWithoutProjectInput[]
    createMany?: TicketAnnexCreateManyProjectInputEnvelope
    connect?: TicketAnnexWhereUniqueInput | TicketAnnexWhereUniqueInput[]
  }

  export type UserAnnexCreateNestedManyWithoutProjectsInput = {
    create?: XOR<UserAnnexCreateWithoutProjectsInput, UserAnnexUncheckedCreateWithoutProjectsInput> | UserAnnexCreateWithoutProjectsInput[] | UserAnnexUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: UserAnnexCreateOrConnectWithoutProjectsInput | UserAnnexCreateOrConnectWithoutProjectsInput[]
    connect?: UserAnnexWhereUniqueInput | UserAnnexWhereUniqueInput[]
  }

  export type EventAnnexUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<EventAnnexCreateWithoutProjectInput, EventAnnexUncheckedCreateWithoutProjectInput> | EventAnnexCreateWithoutProjectInput[] | EventAnnexUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: EventAnnexCreateOrConnectWithoutProjectInput | EventAnnexCreateOrConnectWithoutProjectInput[]
    createMany?: EventAnnexCreateManyProjectInputEnvelope
    connect?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
  }

  export type TicketAnnexUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<TicketAnnexCreateWithoutProjectInput, TicketAnnexUncheckedCreateWithoutProjectInput> | TicketAnnexCreateWithoutProjectInput[] | TicketAnnexUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TicketAnnexCreateOrConnectWithoutProjectInput | TicketAnnexCreateOrConnectWithoutProjectInput[]
    createMany?: TicketAnnexCreateManyProjectInputEnvelope
    connect?: TicketAnnexWhereUniqueInput | TicketAnnexWhereUniqueInput[]
  }

  export type UserAnnexUncheckedCreateNestedManyWithoutProjectsInput = {
    create?: XOR<UserAnnexCreateWithoutProjectsInput, UserAnnexUncheckedCreateWithoutProjectsInput> | UserAnnexCreateWithoutProjectsInput[] | UserAnnexUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: UserAnnexCreateOrConnectWithoutProjectsInput | UserAnnexCreateOrConnectWithoutProjectsInput[]
    connect?: UserAnnexWhereUniqueInput | UserAnnexWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EventAnnexUpdateManyWithoutProjectNestedInput = {
    create?: XOR<EventAnnexCreateWithoutProjectInput, EventAnnexUncheckedCreateWithoutProjectInput> | EventAnnexCreateWithoutProjectInput[] | EventAnnexUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: EventAnnexCreateOrConnectWithoutProjectInput | EventAnnexCreateOrConnectWithoutProjectInput[]
    upsert?: EventAnnexUpsertWithWhereUniqueWithoutProjectInput | EventAnnexUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: EventAnnexCreateManyProjectInputEnvelope
    set?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
    disconnect?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
    delete?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
    connect?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
    update?: EventAnnexUpdateWithWhereUniqueWithoutProjectInput | EventAnnexUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: EventAnnexUpdateManyWithWhereWithoutProjectInput | EventAnnexUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: EventAnnexScalarWhereInput | EventAnnexScalarWhereInput[]
  }

  export type TicketAnnexUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TicketAnnexCreateWithoutProjectInput, TicketAnnexUncheckedCreateWithoutProjectInput> | TicketAnnexCreateWithoutProjectInput[] | TicketAnnexUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TicketAnnexCreateOrConnectWithoutProjectInput | TicketAnnexCreateOrConnectWithoutProjectInput[]
    upsert?: TicketAnnexUpsertWithWhereUniqueWithoutProjectInput | TicketAnnexUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TicketAnnexCreateManyProjectInputEnvelope
    set?: TicketAnnexWhereUniqueInput | TicketAnnexWhereUniqueInput[]
    disconnect?: TicketAnnexWhereUniqueInput | TicketAnnexWhereUniqueInput[]
    delete?: TicketAnnexWhereUniqueInput | TicketAnnexWhereUniqueInput[]
    connect?: TicketAnnexWhereUniqueInput | TicketAnnexWhereUniqueInput[]
    update?: TicketAnnexUpdateWithWhereUniqueWithoutProjectInput | TicketAnnexUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TicketAnnexUpdateManyWithWhereWithoutProjectInput | TicketAnnexUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TicketAnnexScalarWhereInput | TicketAnnexScalarWhereInput[]
  }

  export type UserAnnexUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<UserAnnexCreateWithoutProjectsInput, UserAnnexUncheckedCreateWithoutProjectsInput> | UserAnnexCreateWithoutProjectsInput[] | UserAnnexUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: UserAnnexCreateOrConnectWithoutProjectsInput | UserAnnexCreateOrConnectWithoutProjectsInput[]
    upsert?: UserAnnexUpsertWithWhereUniqueWithoutProjectsInput | UserAnnexUpsertWithWhereUniqueWithoutProjectsInput[]
    set?: UserAnnexWhereUniqueInput | UserAnnexWhereUniqueInput[]
    disconnect?: UserAnnexWhereUniqueInput | UserAnnexWhereUniqueInput[]
    delete?: UserAnnexWhereUniqueInput | UserAnnexWhereUniqueInput[]
    connect?: UserAnnexWhereUniqueInput | UserAnnexWhereUniqueInput[]
    update?: UserAnnexUpdateWithWhereUniqueWithoutProjectsInput | UserAnnexUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: UserAnnexUpdateManyWithWhereWithoutProjectsInput | UserAnnexUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: UserAnnexScalarWhereInput | UserAnnexScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventAnnexUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<EventAnnexCreateWithoutProjectInput, EventAnnexUncheckedCreateWithoutProjectInput> | EventAnnexCreateWithoutProjectInput[] | EventAnnexUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: EventAnnexCreateOrConnectWithoutProjectInput | EventAnnexCreateOrConnectWithoutProjectInput[]
    upsert?: EventAnnexUpsertWithWhereUniqueWithoutProjectInput | EventAnnexUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: EventAnnexCreateManyProjectInputEnvelope
    set?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
    disconnect?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
    delete?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
    connect?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
    update?: EventAnnexUpdateWithWhereUniqueWithoutProjectInput | EventAnnexUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: EventAnnexUpdateManyWithWhereWithoutProjectInput | EventAnnexUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: EventAnnexScalarWhereInput | EventAnnexScalarWhereInput[]
  }

  export type TicketAnnexUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TicketAnnexCreateWithoutProjectInput, TicketAnnexUncheckedCreateWithoutProjectInput> | TicketAnnexCreateWithoutProjectInput[] | TicketAnnexUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TicketAnnexCreateOrConnectWithoutProjectInput | TicketAnnexCreateOrConnectWithoutProjectInput[]
    upsert?: TicketAnnexUpsertWithWhereUniqueWithoutProjectInput | TicketAnnexUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TicketAnnexCreateManyProjectInputEnvelope
    set?: TicketAnnexWhereUniqueInput | TicketAnnexWhereUniqueInput[]
    disconnect?: TicketAnnexWhereUniqueInput | TicketAnnexWhereUniqueInput[]
    delete?: TicketAnnexWhereUniqueInput | TicketAnnexWhereUniqueInput[]
    connect?: TicketAnnexWhereUniqueInput | TicketAnnexWhereUniqueInput[]
    update?: TicketAnnexUpdateWithWhereUniqueWithoutProjectInput | TicketAnnexUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TicketAnnexUpdateManyWithWhereWithoutProjectInput | TicketAnnexUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TicketAnnexScalarWhereInput | TicketAnnexScalarWhereInput[]
  }

  export type UserAnnexUncheckedUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<UserAnnexCreateWithoutProjectsInput, UserAnnexUncheckedCreateWithoutProjectsInput> | UserAnnexCreateWithoutProjectsInput[] | UserAnnexUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: UserAnnexCreateOrConnectWithoutProjectsInput | UserAnnexCreateOrConnectWithoutProjectsInput[]
    upsert?: UserAnnexUpsertWithWhereUniqueWithoutProjectsInput | UserAnnexUpsertWithWhereUniqueWithoutProjectsInput[]
    set?: UserAnnexWhereUniqueInput | UserAnnexWhereUniqueInput[]
    disconnect?: UserAnnexWhereUniqueInput | UserAnnexWhereUniqueInput[]
    delete?: UserAnnexWhereUniqueInput | UserAnnexWhereUniqueInput[]
    connect?: UserAnnexWhereUniqueInput | UserAnnexWhereUniqueInput[]
    update?: UserAnnexUpdateWithWhereUniqueWithoutProjectsInput | UserAnnexUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: UserAnnexUpdateManyWithWhereWithoutProjectsInput | UserAnnexUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: UserAnnexScalarWhereInput | UserAnnexScalarWhereInput[]
  }

  export type ProjectAnnexCreateNestedManyWithoutContributorsInput = {
    create?: XOR<ProjectAnnexCreateWithoutContributorsInput, ProjectAnnexUncheckedCreateWithoutContributorsInput> | ProjectAnnexCreateWithoutContributorsInput[] | ProjectAnnexUncheckedCreateWithoutContributorsInput[]
    connectOrCreate?: ProjectAnnexCreateOrConnectWithoutContributorsInput | ProjectAnnexCreateOrConnectWithoutContributorsInput[]
    connect?: ProjectAnnexWhereUniqueInput | ProjectAnnexWhereUniqueInput[]
  }

  export type EventAnnexCreateNestedManyWithoutAuthorInput = {
    create?: XOR<EventAnnexCreateWithoutAuthorInput, EventAnnexUncheckedCreateWithoutAuthorInput> | EventAnnexCreateWithoutAuthorInput[] | EventAnnexUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: EventAnnexCreateOrConnectWithoutAuthorInput | EventAnnexCreateOrConnectWithoutAuthorInput[]
    createMany?: EventAnnexCreateManyAuthorInputEnvelope
    connect?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
  }

  export type EventAnnexCreateNestedManyWithoutReviewerInput = {
    create?: XOR<EventAnnexCreateWithoutReviewerInput, EventAnnexUncheckedCreateWithoutReviewerInput> | EventAnnexCreateWithoutReviewerInput[] | EventAnnexUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: EventAnnexCreateOrConnectWithoutReviewerInput | EventAnnexCreateOrConnectWithoutReviewerInput[]
    createMany?: EventAnnexCreateManyReviewerInputEnvelope
    connect?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
  }

  export type RevisionAnnexCreateNestedManyWithoutUserInput = {
    create?: XOR<RevisionAnnexCreateWithoutUserInput, RevisionAnnexUncheckedCreateWithoutUserInput> | RevisionAnnexCreateWithoutUserInput[] | RevisionAnnexUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RevisionAnnexCreateOrConnectWithoutUserInput | RevisionAnnexCreateOrConnectWithoutUserInput[]
    createMany?: RevisionAnnexCreateManyUserInputEnvelope
    connect?: RevisionAnnexWhereUniqueInput | RevisionAnnexWhereUniqueInput[]
  }

  export type RevisionAnnexCreateNestedManyWithoutReviewerInput = {
    create?: XOR<RevisionAnnexCreateWithoutReviewerInput, RevisionAnnexUncheckedCreateWithoutReviewerInput> | RevisionAnnexCreateWithoutReviewerInput[] | RevisionAnnexUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: RevisionAnnexCreateOrConnectWithoutReviewerInput | RevisionAnnexCreateOrConnectWithoutReviewerInput[]
    createMany?: RevisionAnnexCreateManyReviewerInputEnvelope
    connect?: RevisionAnnexWhereUniqueInput | RevisionAnnexWhereUniqueInput[]
  }

  export type ProjectAnnexUncheckedCreateNestedManyWithoutContributorsInput = {
    create?: XOR<ProjectAnnexCreateWithoutContributorsInput, ProjectAnnexUncheckedCreateWithoutContributorsInput> | ProjectAnnexCreateWithoutContributorsInput[] | ProjectAnnexUncheckedCreateWithoutContributorsInput[]
    connectOrCreate?: ProjectAnnexCreateOrConnectWithoutContributorsInput | ProjectAnnexCreateOrConnectWithoutContributorsInput[]
    connect?: ProjectAnnexWhereUniqueInput | ProjectAnnexWhereUniqueInput[]
  }

  export type EventAnnexUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<EventAnnexCreateWithoutAuthorInput, EventAnnexUncheckedCreateWithoutAuthorInput> | EventAnnexCreateWithoutAuthorInput[] | EventAnnexUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: EventAnnexCreateOrConnectWithoutAuthorInput | EventAnnexCreateOrConnectWithoutAuthorInput[]
    createMany?: EventAnnexCreateManyAuthorInputEnvelope
    connect?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
  }

  export type EventAnnexUncheckedCreateNestedManyWithoutReviewerInput = {
    create?: XOR<EventAnnexCreateWithoutReviewerInput, EventAnnexUncheckedCreateWithoutReviewerInput> | EventAnnexCreateWithoutReviewerInput[] | EventAnnexUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: EventAnnexCreateOrConnectWithoutReviewerInput | EventAnnexCreateOrConnectWithoutReviewerInput[]
    createMany?: EventAnnexCreateManyReviewerInputEnvelope
    connect?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
  }

  export type RevisionAnnexUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RevisionAnnexCreateWithoutUserInput, RevisionAnnexUncheckedCreateWithoutUserInput> | RevisionAnnexCreateWithoutUserInput[] | RevisionAnnexUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RevisionAnnexCreateOrConnectWithoutUserInput | RevisionAnnexCreateOrConnectWithoutUserInput[]
    createMany?: RevisionAnnexCreateManyUserInputEnvelope
    connect?: RevisionAnnexWhereUniqueInput | RevisionAnnexWhereUniqueInput[]
  }

  export type RevisionAnnexUncheckedCreateNestedManyWithoutReviewerInput = {
    create?: XOR<RevisionAnnexCreateWithoutReviewerInput, RevisionAnnexUncheckedCreateWithoutReviewerInput> | RevisionAnnexCreateWithoutReviewerInput[] | RevisionAnnexUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: RevisionAnnexCreateOrConnectWithoutReviewerInput | RevisionAnnexCreateOrConnectWithoutReviewerInput[]
    createMany?: RevisionAnnexCreateManyReviewerInputEnvelope
    connect?: RevisionAnnexWhereUniqueInput | RevisionAnnexWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProjectAnnexUpdateManyWithoutContributorsNestedInput = {
    create?: XOR<ProjectAnnexCreateWithoutContributorsInput, ProjectAnnexUncheckedCreateWithoutContributorsInput> | ProjectAnnexCreateWithoutContributorsInput[] | ProjectAnnexUncheckedCreateWithoutContributorsInput[]
    connectOrCreate?: ProjectAnnexCreateOrConnectWithoutContributorsInput | ProjectAnnexCreateOrConnectWithoutContributorsInput[]
    upsert?: ProjectAnnexUpsertWithWhereUniqueWithoutContributorsInput | ProjectAnnexUpsertWithWhereUniqueWithoutContributorsInput[]
    set?: ProjectAnnexWhereUniqueInput | ProjectAnnexWhereUniqueInput[]
    disconnect?: ProjectAnnexWhereUniqueInput | ProjectAnnexWhereUniqueInput[]
    delete?: ProjectAnnexWhereUniqueInput | ProjectAnnexWhereUniqueInput[]
    connect?: ProjectAnnexWhereUniqueInput | ProjectAnnexWhereUniqueInput[]
    update?: ProjectAnnexUpdateWithWhereUniqueWithoutContributorsInput | ProjectAnnexUpdateWithWhereUniqueWithoutContributorsInput[]
    updateMany?: ProjectAnnexUpdateManyWithWhereWithoutContributorsInput | ProjectAnnexUpdateManyWithWhereWithoutContributorsInput[]
    deleteMany?: ProjectAnnexScalarWhereInput | ProjectAnnexScalarWhereInput[]
  }

  export type EventAnnexUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<EventAnnexCreateWithoutAuthorInput, EventAnnexUncheckedCreateWithoutAuthorInput> | EventAnnexCreateWithoutAuthorInput[] | EventAnnexUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: EventAnnexCreateOrConnectWithoutAuthorInput | EventAnnexCreateOrConnectWithoutAuthorInput[]
    upsert?: EventAnnexUpsertWithWhereUniqueWithoutAuthorInput | EventAnnexUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: EventAnnexCreateManyAuthorInputEnvelope
    set?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
    disconnect?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
    delete?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
    connect?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
    update?: EventAnnexUpdateWithWhereUniqueWithoutAuthorInput | EventAnnexUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: EventAnnexUpdateManyWithWhereWithoutAuthorInput | EventAnnexUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: EventAnnexScalarWhereInput | EventAnnexScalarWhereInput[]
  }

  export type EventAnnexUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<EventAnnexCreateWithoutReviewerInput, EventAnnexUncheckedCreateWithoutReviewerInput> | EventAnnexCreateWithoutReviewerInput[] | EventAnnexUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: EventAnnexCreateOrConnectWithoutReviewerInput | EventAnnexCreateOrConnectWithoutReviewerInput[]
    upsert?: EventAnnexUpsertWithWhereUniqueWithoutReviewerInput | EventAnnexUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: EventAnnexCreateManyReviewerInputEnvelope
    set?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
    disconnect?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
    delete?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
    connect?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
    update?: EventAnnexUpdateWithWhereUniqueWithoutReviewerInput | EventAnnexUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: EventAnnexUpdateManyWithWhereWithoutReviewerInput | EventAnnexUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: EventAnnexScalarWhereInput | EventAnnexScalarWhereInput[]
  }

  export type RevisionAnnexUpdateManyWithoutUserNestedInput = {
    create?: XOR<RevisionAnnexCreateWithoutUserInput, RevisionAnnexUncheckedCreateWithoutUserInput> | RevisionAnnexCreateWithoutUserInput[] | RevisionAnnexUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RevisionAnnexCreateOrConnectWithoutUserInput | RevisionAnnexCreateOrConnectWithoutUserInput[]
    upsert?: RevisionAnnexUpsertWithWhereUniqueWithoutUserInput | RevisionAnnexUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RevisionAnnexCreateManyUserInputEnvelope
    set?: RevisionAnnexWhereUniqueInput | RevisionAnnexWhereUniqueInput[]
    disconnect?: RevisionAnnexWhereUniqueInput | RevisionAnnexWhereUniqueInput[]
    delete?: RevisionAnnexWhereUniqueInput | RevisionAnnexWhereUniqueInput[]
    connect?: RevisionAnnexWhereUniqueInput | RevisionAnnexWhereUniqueInput[]
    update?: RevisionAnnexUpdateWithWhereUniqueWithoutUserInput | RevisionAnnexUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RevisionAnnexUpdateManyWithWhereWithoutUserInput | RevisionAnnexUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RevisionAnnexScalarWhereInput | RevisionAnnexScalarWhereInput[]
  }

  export type RevisionAnnexUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<RevisionAnnexCreateWithoutReviewerInput, RevisionAnnexUncheckedCreateWithoutReviewerInput> | RevisionAnnexCreateWithoutReviewerInput[] | RevisionAnnexUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: RevisionAnnexCreateOrConnectWithoutReviewerInput | RevisionAnnexCreateOrConnectWithoutReviewerInput[]
    upsert?: RevisionAnnexUpsertWithWhereUniqueWithoutReviewerInput | RevisionAnnexUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: RevisionAnnexCreateManyReviewerInputEnvelope
    set?: RevisionAnnexWhereUniqueInput | RevisionAnnexWhereUniqueInput[]
    disconnect?: RevisionAnnexWhereUniqueInput | RevisionAnnexWhereUniqueInput[]
    delete?: RevisionAnnexWhereUniqueInput | RevisionAnnexWhereUniqueInput[]
    connect?: RevisionAnnexWhereUniqueInput | RevisionAnnexWhereUniqueInput[]
    update?: RevisionAnnexUpdateWithWhereUniqueWithoutReviewerInput | RevisionAnnexUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: RevisionAnnexUpdateManyWithWhereWithoutReviewerInput | RevisionAnnexUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: RevisionAnnexScalarWhereInput | RevisionAnnexScalarWhereInput[]
  }

  export type ProjectAnnexUncheckedUpdateManyWithoutContributorsNestedInput = {
    create?: XOR<ProjectAnnexCreateWithoutContributorsInput, ProjectAnnexUncheckedCreateWithoutContributorsInput> | ProjectAnnexCreateWithoutContributorsInput[] | ProjectAnnexUncheckedCreateWithoutContributorsInput[]
    connectOrCreate?: ProjectAnnexCreateOrConnectWithoutContributorsInput | ProjectAnnexCreateOrConnectWithoutContributorsInput[]
    upsert?: ProjectAnnexUpsertWithWhereUniqueWithoutContributorsInput | ProjectAnnexUpsertWithWhereUniqueWithoutContributorsInput[]
    set?: ProjectAnnexWhereUniqueInput | ProjectAnnexWhereUniqueInput[]
    disconnect?: ProjectAnnexWhereUniqueInput | ProjectAnnexWhereUniqueInput[]
    delete?: ProjectAnnexWhereUniqueInput | ProjectAnnexWhereUniqueInput[]
    connect?: ProjectAnnexWhereUniqueInput | ProjectAnnexWhereUniqueInput[]
    update?: ProjectAnnexUpdateWithWhereUniqueWithoutContributorsInput | ProjectAnnexUpdateWithWhereUniqueWithoutContributorsInput[]
    updateMany?: ProjectAnnexUpdateManyWithWhereWithoutContributorsInput | ProjectAnnexUpdateManyWithWhereWithoutContributorsInput[]
    deleteMany?: ProjectAnnexScalarWhereInput | ProjectAnnexScalarWhereInput[]
  }

  export type EventAnnexUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<EventAnnexCreateWithoutAuthorInput, EventAnnexUncheckedCreateWithoutAuthorInput> | EventAnnexCreateWithoutAuthorInput[] | EventAnnexUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: EventAnnexCreateOrConnectWithoutAuthorInput | EventAnnexCreateOrConnectWithoutAuthorInput[]
    upsert?: EventAnnexUpsertWithWhereUniqueWithoutAuthorInput | EventAnnexUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: EventAnnexCreateManyAuthorInputEnvelope
    set?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
    disconnect?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
    delete?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
    connect?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
    update?: EventAnnexUpdateWithWhereUniqueWithoutAuthorInput | EventAnnexUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: EventAnnexUpdateManyWithWhereWithoutAuthorInput | EventAnnexUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: EventAnnexScalarWhereInput | EventAnnexScalarWhereInput[]
  }

  export type EventAnnexUncheckedUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<EventAnnexCreateWithoutReviewerInput, EventAnnexUncheckedCreateWithoutReviewerInput> | EventAnnexCreateWithoutReviewerInput[] | EventAnnexUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: EventAnnexCreateOrConnectWithoutReviewerInput | EventAnnexCreateOrConnectWithoutReviewerInput[]
    upsert?: EventAnnexUpsertWithWhereUniqueWithoutReviewerInput | EventAnnexUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: EventAnnexCreateManyReviewerInputEnvelope
    set?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
    disconnect?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
    delete?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
    connect?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
    update?: EventAnnexUpdateWithWhereUniqueWithoutReviewerInput | EventAnnexUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: EventAnnexUpdateManyWithWhereWithoutReviewerInput | EventAnnexUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: EventAnnexScalarWhereInput | EventAnnexScalarWhereInput[]
  }

  export type RevisionAnnexUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RevisionAnnexCreateWithoutUserInput, RevisionAnnexUncheckedCreateWithoutUserInput> | RevisionAnnexCreateWithoutUserInput[] | RevisionAnnexUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RevisionAnnexCreateOrConnectWithoutUserInput | RevisionAnnexCreateOrConnectWithoutUserInput[]
    upsert?: RevisionAnnexUpsertWithWhereUniqueWithoutUserInput | RevisionAnnexUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RevisionAnnexCreateManyUserInputEnvelope
    set?: RevisionAnnexWhereUniqueInput | RevisionAnnexWhereUniqueInput[]
    disconnect?: RevisionAnnexWhereUniqueInput | RevisionAnnexWhereUniqueInput[]
    delete?: RevisionAnnexWhereUniqueInput | RevisionAnnexWhereUniqueInput[]
    connect?: RevisionAnnexWhereUniqueInput | RevisionAnnexWhereUniqueInput[]
    update?: RevisionAnnexUpdateWithWhereUniqueWithoutUserInput | RevisionAnnexUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RevisionAnnexUpdateManyWithWhereWithoutUserInput | RevisionAnnexUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RevisionAnnexScalarWhereInput | RevisionAnnexScalarWhereInput[]
  }

  export type RevisionAnnexUncheckedUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<RevisionAnnexCreateWithoutReviewerInput, RevisionAnnexUncheckedCreateWithoutReviewerInput> | RevisionAnnexCreateWithoutReviewerInput[] | RevisionAnnexUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: RevisionAnnexCreateOrConnectWithoutReviewerInput | RevisionAnnexCreateOrConnectWithoutReviewerInput[]
    upsert?: RevisionAnnexUpsertWithWhereUniqueWithoutReviewerInput | RevisionAnnexUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: RevisionAnnexCreateManyReviewerInputEnvelope
    set?: RevisionAnnexWhereUniqueInput | RevisionAnnexWhereUniqueInput[]
    disconnect?: RevisionAnnexWhereUniqueInput | RevisionAnnexWhereUniqueInput[]
    delete?: RevisionAnnexWhereUniqueInput | RevisionAnnexWhereUniqueInput[]
    connect?: RevisionAnnexWhereUniqueInput | RevisionAnnexWhereUniqueInput[]
    update?: RevisionAnnexUpdateWithWhereUniqueWithoutReviewerInput | RevisionAnnexUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: RevisionAnnexUpdateManyWithWhereWithoutReviewerInput | RevisionAnnexUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: RevisionAnnexScalarWhereInput | RevisionAnnexScalarWhereInput[]
  }

  export type EventAnnexCreateNestedManyWithoutTicketInput = {
    create?: XOR<EventAnnexCreateWithoutTicketInput, EventAnnexUncheckedCreateWithoutTicketInput> | EventAnnexCreateWithoutTicketInput[] | EventAnnexUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: EventAnnexCreateOrConnectWithoutTicketInput | EventAnnexCreateOrConnectWithoutTicketInput[]
    createMany?: EventAnnexCreateManyTicketInputEnvelope
    connect?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
  }

  export type ProjectAnnexCreateNestedOneWithoutTicketsInput = {
    create?: XOR<ProjectAnnexCreateWithoutTicketsInput, ProjectAnnexUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: ProjectAnnexCreateOrConnectWithoutTicketsInput
    connect?: ProjectAnnexWhereUniqueInput
  }

  export type EventAnnexUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<EventAnnexCreateWithoutTicketInput, EventAnnexUncheckedCreateWithoutTicketInput> | EventAnnexCreateWithoutTicketInput[] | EventAnnexUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: EventAnnexCreateOrConnectWithoutTicketInput | EventAnnexCreateOrConnectWithoutTicketInput[]
    createMany?: EventAnnexCreateManyTicketInputEnvelope
    connect?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
  }

  export type EventAnnexUpdateManyWithoutTicketNestedInput = {
    create?: XOR<EventAnnexCreateWithoutTicketInput, EventAnnexUncheckedCreateWithoutTicketInput> | EventAnnexCreateWithoutTicketInput[] | EventAnnexUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: EventAnnexCreateOrConnectWithoutTicketInput | EventAnnexCreateOrConnectWithoutTicketInput[]
    upsert?: EventAnnexUpsertWithWhereUniqueWithoutTicketInput | EventAnnexUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: EventAnnexCreateManyTicketInputEnvelope
    set?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
    disconnect?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
    delete?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
    connect?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
    update?: EventAnnexUpdateWithWhereUniqueWithoutTicketInput | EventAnnexUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: EventAnnexUpdateManyWithWhereWithoutTicketInput | EventAnnexUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: EventAnnexScalarWhereInput | EventAnnexScalarWhereInput[]
  }

  export type ProjectAnnexUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<ProjectAnnexCreateWithoutTicketsInput, ProjectAnnexUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: ProjectAnnexCreateOrConnectWithoutTicketsInput
    upsert?: ProjectAnnexUpsertWithoutTicketsInput
    connect?: ProjectAnnexWhereUniqueInput
    update?: XOR<XOR<ProjectAnnexUpdateToOneWithWhereWithoutTicketsInput, ProjectAnnexUpdateWithoutTicketsInput>, ProjectAnnexUncheckedUpdateWithoutTicketsInput>
  }

  export type EventAnnexUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<EventAnnexCreateWithoutTicketInput, EventAnnexUncheckedCreateWithoutTicketInput> | EventAnnexCreateWithoutTicketInput[] | EventAnnexUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: EventAnnexCreateOrConnectWithoutTicketInput | EventAnnexCreateOrConnectWithoutTicketInput[]
    upsert?: EventAnnexUpsertWithWhereUniqueWithoutTicketInput | EventAnnexUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: EventAnnexCreateManyTicketInputEnvelope
    set?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
    disconnect?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
    delete?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
    connect?: EventAnnexWhereUniqueInput | EventAnnexWhereUniqueInput[]
    update?: EventAnnexUpdateWithWhereUniqueWithoutTicketInput | EventAnnexUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: EventAnnexUpdateManyWithWhereWithoutTicketInput | EventAnnexUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: EventAnnexScalarWhereInput | EventAnnexScalarWhereInput[]
  }

  export type ProjectAnnexCreateNestedOneWithoutEventsInput = {
    create?: XOR<ProjectAnnexCreateWithoutEventsInput, ProjectAnnexUncheckedCreateWithoutEventsInput>
    connectOrCreate?: ProjectAnnexCreateOrConnectWithoutEventsInput
    connect?: ProjectAnnexWhereUniqueInput
  }

  export type UserAnnexCreateNestedOneWithoutEventsInput = {
    create?: XOR<UserAnnexCreateWithoutEventsInput, UserAnnexUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserAnnexCreateOrConnectWithoutEventsInput
    connect?: UserAnnexWhereUniqueInput
  }

  export type UserAnnexCreateNestedOneWithoutReviewed_eventsInput = {
    create?: XOR<UserAnnexCreateWithoutReviewed_eventsInput, UserAnnexUncheckedCreateWithoutReviewed_eventsInput>
    connectOrCreate?: UserAnnexCreateOrConnectWithoutReviewed_eventsInput
    connect?: UserAnnexWhereUniqueInput
  }

  export type TicketAnnexCreateNestedOneWithoutEventsInput = {
    create?: XOR<TicketAnnexCreateWithoutEventsInput, TicketAnnexUncheckedCreateWithoutEventsInput>
    connectOrCreate?: TicketAnnexCreateOrConnectWithoutEventsInput
    connect?: TicketAnnexWhereUniqueInput
  }

  export type PayloadAnnexCreateNestedOneWithoutEventInput = {
    create?: XOR<PayloadAnnexCreateWithoutEventInput, PayloadAnnexUncheckedCreateWithoutEventInput>
    connectOrCreate?: PayloadAnnexCreateOrConnectWithoutEventInput
    connect?: PayloadAnnexWhereUniqueInput
  }

  export type RevisionAnnexCreateNestedOneWithoutPr_eventInput = {
    create?: XOR<RevisionAnnexCreateWithoutPr_eventInput, RevisionAnnexUncheckedCreateWithoutPr_eventInput>
    connectOrCreate?: RevisionAnnexCreateOrConnectWithoutPr_eventInput
    connect?: RevisionAnnexWhereUniqueInput
  }

  export type PayloadAnnexUncheckedCreateNestedOneWithoutEventInput = {
    create?: XOR<PayloadAnnexCreateWithoutEventInput, PayloadAnnexUncheckedCreateWithoutEventInput>
    connectOrCreate?: PayloadAnnexCreateOrConnectWithoutEventInput
    connect?: PayloadAnnexWhereUniqueInput
  }

  export type RevisionAnnexUncheckedCreateNestedOneWithoutPr_eventInput = {
    create?: XOR<RevisionAnnexCreateWithoutPr_eventInput, RevisionAnnexUncheckedCreateWithoutPr_eventInput>
    connectOrCreate?: RevisionAnnexCreateOrConnectWithoutPr_eventInput
    connect?: RevisionAnnexWhereUniqueInput
  }

  export type EnumSourceTypeAnnexFieldUpdateOperationsInput = {
    set?: $Enums.SourceTypeAnnex
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumEventTypeAnnexFieldUpdateOperationsInput = {
    set?: $Enums.EventTypeAnnex
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProjectAnnexUpdateOneWithoutEventsNestedInput = {
    create?: XOR<ProjectAnnexCreateWithoutEventsInput, ProjectAnnexUncheckedCreateWithoutEventsInput>
    connectOrCreate?: ProjectAnnexCreateOrConnectWithoutEventsInput
    upsert?: ProjectAnnexUpsertWithoutEventsInput
    disconnect?: ProjectAnnexWhereInput | boolean
    delete?: ProjectAnnexWhereInput | boolean
    connect?: ProjectAnnexWhereUniqueInput
    update?: XOR<XOR<ProjectAnnexUpdateToOneWithWhereWithoutEventsInput, ProjectAnnexUpdateWithoutEventsInput>, ProjectAnnexUncheckedUpdateWithoutEventsInput>
  }

  export type UserAnnexUpdateOneWithoutEventsNestedInput = {
    create?: XOR<UserAnnexCreateWithoutEventsInput, UserAnnexUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserAnnexCreateOrConnectWithoutEventsInput
    upsert?: UserAnnexUpsertWithoutEventsInput
    disconnect?: UserAnnexWhereInput | boolean
    delete?: UserAnnexWhereInput | boolean
    connect?: UserAnnexWhereUniqueInput
    update?: XOR<XOR<UserAnnexUpdateToOneWithWhereWithoutEventsInput, UserAnnexUpdateWithoutEventsInput>, UserAnnexUncheckedUpdateWithoutEventsInput>
  }

  export type UserAnnexUpdateOneWithoutReviewed_eventsNestedInput = {
    create?: XOR<UserAnnexCreateWithoutReviewed_eventsInput, UserAnnexUncheckedCreateWithoutReviewed_eventsInput>
    connectOrCreate?: UserAnnexCreateOrConnectWithoutReviewed_eventsInput
    upsert?: UserAnnexUpsertWithoutReviewed_eventsInput
    disconnect?: UserAnnexWhereInput | boolean
    delete?: UserAnnexWhereInput | boolean
    connect?: UserAnnexWhereUniqueInput
    update?: XOR<XOR<UserAnnexUpdateToOneWithWhereWithoutReviewed_eventsInput, UserAnnexUpdateWithoutReviewed_eventsInput>, UserAnnexUncheckedUpdateWithoutReviewed_eventsInput>
  }

  export type TicketAnnexUpdateOneWithoutEventsNestedInput = {
    create?: XOR<TicketAnnexCreateWithoutEventsInput, TicketAnnexUncheckedCreateWithoutEventsInput>
    connectOrCreate?: TicketAnnexCreateOrConnectWithoutEventsInput
    upsert?: TicketAnnexUpsertWithoutEventsInput
    disconnect?: TicketAnnexWhereInput | boolean
    delete?: TicketAnnexWhereInput | boolean
    connect?: TicketAnnexWhereUniqueInput
    update?: XOR<XOR<TicketAnnexUpdateToOneWithWhereWithoutEventsInput, TicketAnnexUpdateWithoutEventsInput>, TicketAnnexUncheckedUpdateWithoutEventsInput>
  }

  export type PayloadAnnexUpdateOneWithoutEventNestedInput = {
    create?: XOR<PayloadAnnexCreateWithoutEventInput, PayloadAnnexUncheckedCreateWithoutEventInput>
    connectOrCreate?: PayloadAnnexCreateOrConnectWithoutEventInput
    upsert?: PayloadAnnexUpsertWithoutEventInput
    disconnect?: PayloadAnnexWhereInput | boolean
    delete?: PayloadAnnexWhereInput | boolean
    connect?: PayloadAnnexWhereUniqueInput
    update?: XOR<XOR<PayloadAnnexUpdateToOneWithWhereWithoutEventInput, PayloadAnnexUpdateWithoutEventInput>, PayloadAnnexUncheckedUpdateWithoutEventInput>
  }

  export type RevisionAnnexUpdateOneWithoutPr_eventNestedInput = {
    create?: XOR<RevisionAnnexCreateWithoutPr_eventInput, RevisionAnnexUncheckedCreateWithoutPr_eventInput>
    connectOrCreate?: RevisionAnnexCreateOrConnectWithoutPr_eventInput
    upsert?: RevisionAnnexUpsertWithoutPr_eventInput
    disconnect?: RevisionAnnexWhereInput | boolean
    delete?: RevisionAnnexWhereInput | boolean
    connect?: RevisionAnnexWhereUniqueInput
    update?: XOR<XOR<RevisionAnnexUpdateToOneWithWhereWithoutPr_eventInput, RevisionAnnexUpdateWithoutPr_eventInput>, RevisionAnnexUncheckedUpdateWithoutPr_eventInput>
  }

  export type PayloadAnnexUncheckedUpdateOneWithoutEventNestedInput = {
    create?: XOR<PayloadAnnexCreateWithoutEventInput, PayloadAnnexUncheckedCreateWithoutEventInput>
    connectOrCreate?: PayloadAnnexCreateOrConnectWithoutEventInput
    upsert?: PayloadAnnexUpsertWithoutEventInput
    disconnect?: PayloadAnnexWhereInput | boolean
    delete?: PayloadAnnexWhereInput | boolean
    connect?: PayloadAnnexWhereUniqueInput
    update?: XOR<XOR<PayloadAnnexUpdateToOneWithWhereWithoutEventInput, PayloadAnnexUpdateWithoutEventInput>, PayloadAnnexUncheckedUpdateWithoutEventInput>
  }

  export type RevisionAnnexUncheckedUpdateOneWithoutPr_eventNestedInput = {
    create?: XOR<RevisionAnnexCreateWithoutPr_eventInput, RevisionAnnexUncheckedCreateWithoutPr_eventInput>
    connectOrCreate?: RevisionAnnexCreateOrConnectWithoutPr_eventInput
    upsert?: RevisionAnnexUpsertWithoutPr_eventInput
    disconnect?: RevisionAnnexWhereInput | boolean
    delete?: RevisionAnnexWhereInput | boolean
    connect?: RevisionAnnexWhereUniqueInput
    update?: XOR<XOR<RevisionAnnexUpdateToOneWithWhereWithoutPr_eventInput, RevisionAnnexUpdateWithoutPr_eventInput>, RevisionAnnexUncheckedUpdateWithoutPr_eventInput>
  }

  export type EventAnnexCreateNestedOneWithoutPayloadInput = {
    create?: XOR<EventAnnexCreateWithoutPayloadInput, EventAnnexUncheckedCreateWithoutPayloadInput>
    connectOrCreate?: EventAnnexCreateOrConnectWithoutPayloadInput
    connect?: EventAnnexWhereUniqueInput
  }

  export type EventAnnexUpdateOneRequiredWithoutPayloadNestedInput = {
    create?: XOR<EventAnnexCreateWithoutPayloadInput, EventAnnexUncheckedCreateWithoutPayloadInput>
    connectOrCreate?: EventAnnexCreateOrConnectWithoutPayloadInput
    upsert?: EventAnnexUpsertWithoutPayloadInput
    connect?: EventAnnexWhereUniqueInput
    update?: XOR<XOR<EventAnnexUpdateToOneWithWhereWithoutPayloadInput, EventAnnexUpdateWithoutPayloadInput>, EventAnnexUncheckedUpdateWithoutPayloadInput>
  }

  export type UserAnnexCreateNestedOneWithoutAuthoredRevisionsInput = {
    create?: XOR<UserAnnexCreateWithoutAuthoredRevisionsInput, UserAnnexUncheckedCreateWithoutAuthoredRevisionsInput>
    connectOrCreate?: UserAnnexCreateOrConnectWithoutAuthoredRevisionsInput
    connect?: UserAnnexWhereUniqueInput
  }

  export type UserAnnexCreateNestedOneWithoutReviewedRevisionsInput = {
    create?: XOR<UserAnnexCreateWithoutReviewedRevisionsInput, UserAnnexUncheckedCreateWithoutReviewedRevisionsInput>
    connectOrCreate?: UserAnnexCreateOrConnectWithoutReviewedRevisionsInput
    connect?: UserAnnexWhereUniqueInput
  }

  export type EventAnnexCreateNestedOneWithoutRevisionInput = {
    create?: XOR<EventAnnexCreateWithoutRevisionInput, EventAnnexUncheckedCreateWithoutRevisionInput>
    connectOrCreate?: EventAnnexCreateOrConnectWithoutRevisionInput
    connect?: EventAnnexWhereUniqueInput
  }

  export type UserAnnexUpdateOneRequiredWithoutAuthoredRevisionsNestedInput = {
    create?: XOR<UserAnnexCreateWithoutAuthoredRevisionsInput, UserAnnexUncheckedCreateWithoutAuthoredRevisionsInput>
    connectOrCreate?: UserAnnexCreateOrConnectWithoutAuthoredRevisionsInput
    upsert?: UserAnnexUpsertWithoutAuthoredRevisionsInput
    connect?: UserAnnexWhereUniqueInput
    update?: XOR<XOR<UserAnnexUpdateToOneWithWhereWithoutAuthoredRevisionsInput, UserAnnexUpdateWithoutAuthoredRevisionsInput>, UserAnnexUncheckedUpdateWithoutAuthoredRevisionsInput>
  }

  export type UserAnnexUpdateOneWithoutReviewedRevisionsNestedInput = {
    create?: XOR<UserAnnexCreateWithoutReviewedRevisionsInput, UserAnnexUncheckedCreateWithoutReviewedRevisionsInput>
    connectOrCreate?: UserAnnexCreateOrConnectWithoutReviewedRevisionsInput
    upsert?: UserAnnexUpsertWithoutReviewedRevisionsInput
    disconnect?: UserAnnexWhereInput | boolean
    delete?: UserAnnexWhereInput | boolean
    connect?: UserAnnexWhereUniqueInput
    update?: XOR<XOR<UserAnnexUpdateToOneWithWhereWithoutReviewedRevisionsInput, UserAnnexUpdateWithoutReviewedRevisionsInput>, UserAnnexUncheckedUpdateWithoutReviewedRevisionsInput>
  }

  export type EventAnnexUpdateOneRequiredWithoutRevisionNestedInput = {
    create?: XOR<EventAnnexCreateWithoutRevisionInput, EventAnnexUncheckedCreateWithoutRevisionInput>
    connectOrCreate?: EventAnnexCreateOrConnectWithoutRevisionInput
    upsert?: EventAnnexUpsertWithoutRevisionInput
    connect?: EventAnnexWhereUniqueInput
    update?: XOR<XOR<EventAnnexUpdateToOneWithWhereWithoutRevisionInput, EventAnnexUpdateWithoutRevisionInput>, EventAnnexUncheckedUpdateWithoutRevisionInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSourceTypeAnnexFilter<$PrismaModel = never> = {
    equals?: $Enums.SourceTypeAnnex | EnumSourceTypeAnnexFieldRefInput<$PrismaModel>
    in?: $Enums.SourceTypeAnnex[]
    notIn?: $Enums.SourceTypeAnnex[]
    not?: NestedEnumSourceTypeAnnexFilter<$PrismaModel> | $Enums.SourceTypeAnnex
  }

  export type NestedEnumEventTypeAnnexFilter<$PrismaModel = never> = {
    equals?: $Enums.EventTypeAnnex | EnumEventTypeAnnexFieldRefInput<$PrismaModel>
    in?: $Enums.EventTypeAnnex[]
    notIn?: $Enums.EventTypeAnnex[]
    not?: NestedEnumEventTypeAnnexFilter<$PrismaModel> | $Enums.EventTypeAnnex
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSourceTypeAnnexWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SourceTypeAnnex | EnumSourceTypeAnnexFieldRefInput<$PrismaModel>
    in?: $Enums.SourceTypeAnnex[]
    notIn?: $Enums.SourceTypeAnnex[]
    not?: NestedEnumSourceTypeAnnexWithAggregatesFilter<$PrismaModel> | $Enums.SourceTypeAnnex
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSourceTypeAnnexFilter<$PrismaModel>
    _max?: NestedEnumSourceTypeAnnexFilter<$PrismaModel>
  }

  export type NestedEnumEventTypeAnnexWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventTypeAnnex | EnumEventTypeAnnexFieldRefInput<$PrismaModel>
    in?: $Enums.EventTypeAnnex[]
    notIn?: $Enums.EventTypeAnnex[]
    not?: NestedEnumEventTypeAnnexWithAggregatesFilter<$PrismaModel> | $Enums.EventTypeAnnex
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeAnnexFilter<$PrismaModel>
    _max?: NestedEnumEventTypeAnnexFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EventAnnexCreateWithoutProjectInput = {
    github_event_id?: string | null
    source: $Enums.SourceTypeAnnex
    branch?: string | null
    pr_number?: number | null
    additions?: number | null
    deletions?: number | null
    changed_files?: number | null
    event_type: $Enums.EventTypeAnnex
    date_created?: Date | string
    author?: UserAnnexCreateNestedOneWithoutEventsInput
    reviewer?: UserAnnexCreateNestedOneWithoutReviewed_eventsInput
    ticket?: TicketAnnexCreateNestedOneWithoutEventsInput
    payload?: PayloadAnnexCreateNestedOneWithoutEventInput
    revision?: RevisionAnnexCreateNestedOneWithoutPr_eventInput
  }

  export type EventAnnexUncheckedCreateWithoutProjectInput = {
    id?: number
    github_event_id?: string | null
    author_id?: number | null
    reviewer_id?: number | null
    ticket_id?: number | null
    source: $Enums.SourceTypeAnnex
    branch?: string | null
    pr_number?: number | null
    additions?: number | null
    deletions?: number | null
    changed_files?: number | null
    event_type: $Enums.EventTypeAnnex
    date_created?: Date | string
    payload?: PayloadAnnexUncheckedCreateNestedOneWithoutEventInput
    revision?: RevisionAnnexUncheckedCreateNestedOneWithoutPr_eventInput
  }

  export type EventAnnexCreateOrConnectWithoutProjectInput = {
    where: EventAnnexWhereUniqueInput
    create: XOR<EventAnnexCreateWithoutProjectInput, EventAnnexUncheckedCreateWithoutProjectInput>
  }

  export type EventAnnexCreateManyProjectInputEnvelope = {
    data: EventAnnexCreateManyProjectInput | EventAnnexCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type TicketAnnexCreateWithoutProjectInput = {
    code: string
    events?: EventAnnexCreateNestedManyWithoutTicketInput
  }

  export type TicketAnnexUncheckedCreateWithoutProjectInput = {
    id?: number
    code: string
    events?: EventAnnexUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketAnnexCreateOrConnectWithoutProjectInput = {
    where: TicketAnnexWhereUniqueInput
    create: XOR<TicketAnnexCreateWithoutProjectInput, TicketAnnexUncheckedCreateWithoutProjectInput>
  }

  export type TicketAnnexCreateManyProjectInputEnvelope = {
    data: TicketAnnexCreateManyProjectInput | TicketAnnexCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserAnnexCreateWithoutProjectsInput = {
    username: string
    first_name?: string | null
    last_name?: string | null
    events?: EventAnnexCreateNestedManyWithoutAuthorInput
    reviewed_events?: EventAnnexCreateNestedManyWithoutReviewerInput
    authoredRevisions?: RevisionAnnexCreateNestedManyWithoutUserInput
    reviewedRevisions?: RevisionAnnexCreateNestedManyWithoutReviewerInput
  }

  export type UserAnnexUncheckedCreateWithoutProjectsInput = {
    id?: number
    username: string
    first_name?: string | null
    last_name?: string | null
    events?: EventAnnexUncheckedCreateNestedManyWithoutAuthorInput
    reviewed_events?: EventAnnexUncheckedCreateNestedManyWithoutReviewerInput
    authoredRevisions?: RevisionAnnexUncheckedCreateNestedManyWithoutUserInput
    reviewedRevisions?: RevisionAnnexUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type UserAnnexCreateOrConnectWithoutProjectsInput = {
    where: UserAnnexWhereUniqueInput
    create: XOR<UserAnnexCreateWithoutProjectsInput, UserAnnexUncheckedCreateWithoutProjectsInput>
  }

  export type EventAnnexUpsertWithWhereUniqueWithoutProjectInput = {
    where: EventAnnexWhereUniqueInput
    update: XOR<EventAnnexUpdateWithoutProjectInput, EventAnnexUncheckedUpdateWithoutProjectInput>
    create: XOR<EventAnnexCreateWithoutProjectInput, EventAnnexUncheckedCreateWithoutProjectInput>
  }

  export type EventAnnexUpdateWithWhereUniqueWithoutProjectInput = {
    where: EventAnnexWhereUniqueInput
    data: XOR<EventAnnexUpdateWithoutProjectInput, EventAnnexUncheckedUpdateWithoutProjectInput>
  }

  export type EventAnnexUpdateManyWithWhereWithoutProjectInput = {
    where: EventAnnexScalarWhereInput
    data: XOR<EventAnnexUpdateManyMutationInput, EventAnnexUncheckedUpdateManyWithoutProjectInput>
  }

  export type EventAnnexScalarWhereInput = {
    AND?: EventAnnexScalarWhereInput | EventAnnexScalarWhereInput[]
    OR?: EventAnnexScalarWhereInput[]
    NOT?: EventAnnexScalarWhereInput | EventAnnexScalarWhereInput[]
    id?: IntFilter<"EventAnnex"> | number
    github_event_id?: StringNullableFilter<"EventAnnex"> | string | null
    project_id?: IntNullableFilter<"EventAnnex"> | number | null
    author_id?: IntNullableFilter<"EventAnnex"> | number | null
    reviewer_id?: IntNullableFilter<"EventAnnex"> | number | null
    ticket_id?: IntNullableFilter<"EventAnnex"> | number | null
    source?: EnumSourceTypeAnnexFilter<"EventAnnex"> | $Enums.SourceTypeAnnex
    branch?: StringNullableFilter<"EventAnnex"> | string | null
    pr_number?: IntNullableFilter<"EventAnnex"> | number | null
    additions?: IntNullableFilter<"EventAnnex"> | number | null
    deletions?: IntNullableFilter<"EventAnnex"> | number | null
    changed_files?: IntNullableFilter<"EventAnnex"> | number | null
    event_type?: EnumEventTypeAnnexFilter<"EventAnnex"> | $Enums.EventTypeAnnex
    date_created?: DateTimeFilter<"EventAnnex"> | Date | string
  }

  export type TicketAnnexUpsertWithWhereUniqueWithoutProjectInput = {
    where: TicketAnnexWhereUniqueInput
    update: XOR<TicketAnnexUpdateWithoutProjectInput, TicketAnnexUncheckedUpdateWithoutProjectInput>
    create: XOR<TicketAnnexCreateWithoutProjectInput, TicketAnnexUncheckedCreateWithoutProjectInput>
  }

  export type TicketAnnexUpdateWithWhereUniqueWithoutProjectInput = {
    where: TicketAnnexWhereUniqueInput
    data: XOR<TicketAnnexUpdateWithoutProjectInput, TicketAnnexUncheckedUpdateWithoutProjectInput>
  }

  export type TicketAnnexUpdateManyWithWhereWithoutProjectInput = {
    where: TicketAnnexScalarWhereInput
    data: XOR<TicketAnnexUpdateManyMutationInput, TicketAnnexUncheckedUpdateManyWithoutProjectInput>
  }

  export type TicketAnnexScalarWhereInput = {
    AND?: TicketAnnexScalarWhereInput | TicketAnnexScalarWhereInput[]
    OR?: TicketAnnexScalarWhereInput[]
    NOT?: TicketAnnexScalarWhereInput | TicketAnnexScalarWhereInput[]
    id?: IntFilter<"TicketAnnex"> | number
    code?: StringFilter<"TicketAnnex"> | string
    project_id?: IntFilter<"TicketAnnex"> | number
  }

  export type UserAnnexUpsertWithWhereUniqueWithoutProjectsInput = {
    where: UserAnnexWhereUniqueInput
    update: XOR<UserAnnexUpdateWithoutProjectsInput, UserAnnexUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserAnnexCreateWithoutProjectsInput, UserAnnexUncheckedCreateWithoutProjectsInput>
  }

  export type UserAnnexUpdateWithWhereUniqueWithoutProjectsInput = {
    where: UserAnnexWhereUniqueInput
    data: XOR<UserAnnexUpdateWithoutProjectsInput, UserAnnexUncheckedUpdateWithoutProjectsInput>
  }

  export type UserAnnexUpdateManyWithWhereWithoutProjectsInput = {
    where: UserAnnexScalarWhereInput
    data: XOR<UserAnnexUpdateManyMutationInput, UserAnnexUncheckedUpdateManyWithoutProjectsInput>
  }

  export type UserAnnexScalarWhereInput = {
    AND?: UserAnnexScalarWhereInput | UserAnnexScalarWhereInput[]
    OR?: UserAnnexScalarWhereInput[]
    NOT?: UserAnnexScalarWhereInput | UserAnnexScalarWhereInput[]
    id?: IntFilter<"UserAnnex"> | number
    username?: StringFilter<"UserAnnex"> | string
    first_name?: StringNullableFilter<"UserAnnex"> | string | null
    last_name?: StringNullableFilter<"UserAnnex"> | string | null
  }

  export type ProjectAnnexCreateWithoutContributorsInput = {
    name: string
    repository: string
    events?: EventAnnexCreateNestedManyWithoutProjectInput
    tickets?: TicketAnnexCreateNestedManyWithoutProjectInput
  }

  export type ProjectAnnexUncheckedCreateWithoutContributorsInput = {
    id?: number
    name: string
    repository: string
    events?: EventAnnexUncheckedCreateNestedManyWithoutProjectInput
    tickets?: TicketAnnexUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectAnnexCreateOrConnectWithoutContributorsInput = {
    where: ProjectAnnexWhereUniqueInput
    create: XOR<ProjectAnnexCreateWithoutContributorsInput, ProjectAnnexUncheckedCreateWithoutContributorsInput>
  }

  export type EventAnnexCreateWithoutAuthorInput = {
    github_event_id?: string | null
    source: $Enums.SourceTypeAnnex
    branch?: string | null
    pr_number?: number | null
    additions?: number | null
    deletions?: number | null
    changed_files?: number | null
    event_type: $Enums.EventTypeAnnex
    date_created?: Date | string
    project?: ProjectAnnexCreateNestedOneWithoutEventsInput
    reviewer?: UserAnnexCreateNestedOneWithoutReviewed_eventsInput
    ticket?: TicketAnnexCreateNestedOneWithoutEventsInput
    payload?: PayloadAnnexCreateNestedOneWithoutEventInput
    revision?: RevisionAnnexCreateNestedOneWithoutPr_eventInput
  }

  export type EventAnnexUncheckedCreateWithoutAuthorInput = {
    id?: number
    github_event_id?: string | null
    project_id?: number | null
    reviewer_id?: number | null
    ticket_id?: number | null
    source: $Enums.SourceTypeAnnex
    branch?: string | null
    pr_number?: number | null
    additions?: number | null
    deletions?: number | null
    changed_files?: number | null
    event_type: $Enums.EventTypeAnnex
    date_created?: Date | string
    payload?: PayloadAnnexUncheckedCreateNestedOneWithoutEventInput
    revision?: RevisionAnnexUncheckedCreateNestedOneWithoutPr_eventInput
  }

  export type EventAnnexCreateOrConnectWithoutAuthorInput = {
    where: EventAnnexWhereUniqueInput
    create: XOR<EventAnnexCreateWithoutAuthorInput, EventAnnexUncheckedCreateWithoutAuthorInput>
  }

  export type EventAnnexCreateManyAuthorInputEnvelope = {
    data: EventAnnexCreateManyAuthorInput | EventAnnexCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type EventAnnexCreateWithoutReviewerInput = {
    github_event_id?: string | null
    source: $Enums.SourceTypeAnnex
    branch?: string | null
    pr_number?: number | null
    additions?: number | null
    deletions?: number | null
    changed_files?: number | null
    event_type: $Enums.EventTypeAnnex
    date_created?: Date | string
    project?: ProjectAnnexCreateNestedOneWithoutEventsInput
    author?: UserAnnexCreateNestedOneWithoutEventsInput
    ticket?: TicketAnnexCreateNestedOneWithoutEventsInput
    payload?: PayloadAnnexCreateNestedOneWithoutEventInput
    revision?: RevisionAnnexCreateNestedOneWithoutPr_eventInput
  }

  export type EventAnnexUncheckedCreateWithoutReviewerInput = {
    id?: number
    github_event_id?: string | null
    project_id?: number | null
    author_id?: number | null
    ticket_id?: number | null
    source: $Enums.SourceTypeAnnex
    branch?: string | null
    pr_number?: number | null
    additions?: number | null
    deletions?: number | null
    changed_files?: number | null
    event_type: $Enums.EventTypeAnnex
    date_created?: Date | string
    payload?: PayloadAnnexUncheckedCreateNestedOneWithoutEventInput
    revision?: RevisionAnnexUncheckedCreateNestedOneWithoutPr_eventInput
  }

  export type EventAnnexCreateOrConnectWithoutReviewerInput = {
    where: EventAnnexWhereUniqueInput
    create: XOR<EventAnnexCreateWithoutReviewerInput, EventAnnexUncheckedCreateWithoutReviewerInput>
  }

  export type EventAnnexCreateManyReviewerInputEnvelope = {
    data: EventAnnexCreateManyReviewerInput | EventAnnexCreateManyReviewerInput[]
    skipDuplicates?: boolean
  }

  export type RevisionAnnexCreateWithoutUserInput = {
    reviewer?: UserAnnexCreateNestedOneWithoutReviewedRevisionsInput
    pr_event: EventAnnexCreateNestedOneWithoutRevisionInput
  }

  export type RevisionAnnexUncheckedCreateWithoutUserInput = {
    id?: number
    reviewer_id?: number | null
    pr_event_id: number
  }

  export type RevisionAnnexCreateOrConnectWithoutUserInput = {
    where: RevisionAnnexWhereUniqueInput
    create: XOR<RevisionAnnexCreateWithoutUserInput, RevisionAnnexUncheckedCreateWithoutUserInput>
  }

  export type RevisionAnnexCreateManyUserInputEnvelope = {
    data: RevisionAnnexCreateManyUserInput | RevisionAnnexCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RevisionAnnexCreateWithoutReviewerInput = {
    user: UserAnnexCreateNestedOneWithoutAuthoredRevisionsInput
    pr_event: EventAnnexCreateNestedOneWithoutRevisionInput
  }

  export type RevisionAnnexUncheckedCreateWithoutReviewerInput = {
    id?: number
    user_id: number
    pr_event_id: number
  }

  export type RevisionAnnexCreateOrConnectWithoutReviewerInput = {
    where: RevisionAnnexWhereUniqueInput
    create: XOR<RevisionAnnexCreateWithoutReviewerInput, RevisionAnnexUncheckedCreateWithoutReviewerInput>
  }

  export type RevisionAnnexCreateManyReviewerInputEnvelope = {
    data: RevisionAnnexCreateManyReviewerInput | RevisionAnnexCreateManyReviewerInput[]
    skipDuplicates?: boolean
  }

  export type ProjectAnnexUpsertWithWhereUniqueWithoutContributorsInput = {
    where: ProjectAnnexWhereUniqueInput
    update: XOR<ProjectAnnexUpdateWithoutContributorsInput, ProjectAnnexUncheckedUpdateWithoutContributorsInput>
    create: XOR<ProjectAnnexCreateWithoutContributorsInput, ProjectAnnexUncheckedCreateWithoutContributorsInput>
  }

  export type ProjectAnnexUpdateWithWhereUniqueWithoutContributorsInput = {
    where: ProjectAnnexWhereUniqueInput
    data: XOR<ProjectAnnexUpdateWithoutContributorsInput, ProjectAnnexUncheckedUpdateWithoutContributorsInput>
  }

  export type ProjectAnnexUpdateManyWithWhereWithoutContributorsInput = {
    where: ProjectAnnexScalarWhereInput
    data: XOR<ProjectAnnexUpdateManyMutationInput, ProjectAnnexUncheckedUpdateManyWithoutContributorsInput>
  }

  export type ProjectAnnexScalarWhereInput = {
    AND?: ProjectAnnexScalarWhereInput | ProjectAnnexScalarWhereInput[]
    OR?: ProjectAnnexScalarWhereInput[]
    NOT?: ProjectAnnexScalarWhereInput | ProjectAnnexScalarWhereInput[]
    id?: IntFilter<"ProjectAnnex"> | number
    name?: StringFilter<"ProjectAnnex"> | string
    repository?: StringFilter<"ProjectAnnex"> | string
  }

  export type EventAnnexUpsertWithWhereUniqueWithoutAuthorInput = {
    where: EventAnnexWhereUniqueInput
    update: XOR<EventAnnexUpdateWithoutAuthorInput, EventAnnexUncheckedUpdateWithoutAuthorInput>
    create: XOR<EventAnnexCreateWithoutAuthorInput, EventAnnexUncheckedCreateWithoutAuthorInput>
  }

  export type EventAnnexUpdateWithWhereUniqueWithoutAuthorInput = {
    where: EventAnnexWhereUniqueInput
    data: XOR<EventAnnexUpdateWithoutAuthorInput, EventAnnexUncheckedUpdateWithoutAuthorInput>
  }

  export type EventAnnexUpdateManyWithWhereWithoutAuthorInput = {
    where: EventAnnexScalarWhereInput
    data: XOR<EventAnnexUpdateManyMutationInput, EventAnnexUncheckedUpdateManyWithoutAuthorInput>
  }

  export type EventAnnexUpsertWithWhereUniqueWithoutReviewerInput = {
    where: EventAnnexWhereUniqueInput
    update: XOR<EventAnnexUpdateWithoutReviewerInput, EventAnnexUncheckedUpdateWithoutReviewerInput>
    create: XOR<EventAnnexCreateWithoutReviewerInput, EventAnnexUncheckedCreateWithoutReviewerInput>
  }

  export type EventAnnexUpdateWithWhereUniqueWithoutReviewerInput = {
    where: EventAnnexWhereUniqueInput
    data: XOR<EventAnnexUpdateWithoutReviewerInput, EventAnnexUncheckedUpdateWithoutReviewerInput>
  }

  export type EventAnnexUpdateManyWithWhereWithoutReviewerInput = {
    where: EventAnnexScalarWhereInput
    data: XOR<EventAnnexUpdateManyMutationInput, EventAnnexUncheckedUpdateManyWithoutReviewerInput>
  }

  export type RevisionAnnexUpsertWithWhereUniqueWithoutUserInput = {
    where: RevisionAnnexWhereUniqueInput
    update: XOR<RevisionAnnexUpdateWithoutUserInput, RevisionAnnexUncheckedUpdateWithoutUserInput>
    create: XOR<RevisionAnnexCreateWithoutUserInput, RevisionAnnexUncheckedCreateWithoutUserInput>
  }

  export type RevisionAnnexUpdateWithWhereUniqueWithoutUserInput = {
    where: RevisionAnnexWhereUniqueInput
    data: XOR<RevisionAnnexUpdateWithoutUserInput, RevisionAnnexUncheckedUpdateWithoutUserInput>
  }

  export type RevisionAnnexUpdateManyWithWhereWithoutUserInput = {
    where: RevisionAnnexScalarWhereInput
    data: XOR<RevisionAnnexUpdateManyMutationInput, RevisionAnnexUncheckedUpdateManyWithoutUserInput>
  }

  export type RevisionAnnexScalarWhereInput = {
    AND?: RevisionAnnexScalarWhereInput | RevisionAnnexScalarWhereInput[]
    OR?: RevisionAnnexScalarWhereInput[]
    NOT?: RevisionAnnexScalarWhereInput | RevisionAnnexScalarWhereInput[]
    id?: IntFilter<"RevisionAnnex"> | number
    user_id?: IntFilter<"RevisionAnnex"> | number
    reviewer_id?: IntNullableFilter<"RevisionAnnex"> | number | null
    pr_event_id?: IntFilter<"RevisionAnnex"> | number
  }

  export type RevisionAnnexUpsertWithWhereUniqueWithoutReviewerInput = {
    where: RevisionAnnexWhereUniqueInput
    update: XOR<RevisionAnnexUpdateWithoutReviewerInput, RevisionAnnexUncheckedUpdateWithoutReviewerInput>
    create: XOR<RevisionAnnexCreateWithoutReviewerInput, RevisionAnnexUncheckedCreateWithoutReviewerInput>
  }

  export type RevisionAnnexUpdateWithWhereUniqueWithoutReviewerInput = {
    where: RevisionAnnexWhereUniqueInput
    data: XOR<RevisionAnnexUpdateWithoutReviewerInput, RevisionAnnexUncheckedUpdateWithoutReviewerInput>
  }

  export type RevisionAnnexUpdateManyWithWhereWithoutReviewerInput = {
    where: RevisionAnnexScalarWhereInput
    data: XOR<RevisionAnnexUpdateManyMutationInput, RevisionAnnexUncheckedUpdateManyWithoutReviewerInput>
  }

  export type EventAnnexCreateWithoutTicketInput = {
    github_event_id?: string | null
    source: $Enums.SourceTypeAnnex
    branch?: string | null
    pr_number?: number | null
    additions?: number | null
    deletions?: number | null
    changed_files?: number | null
    event_type: $Enums.EventTypeAnnex
    date_created?: Date | string
    project?: ProjectAnnexCreateNestedOneWithoutEventsInput
    author?: UserAnnexCreateNestedOneWithoutEventsInput
    reviewer?: UserAnnexCreateNestedOneWithoutReviewed_eventsInput
    payload?: PayloadAnnexCreateNestedOneWithoutEventInput
    revision?: RevisionAnnexCreateNestedOneWithoutPr_eventInput
  }

  export type EventAnnexUncheckedCreateWithoutTicketInput = {
    id?: number
    github_event_id?: string | null
    project_id?: number | null
    author_id?: number | null
    reviewer_id?: number | null
    source: $Enums.SourceTypeAnnex
    branch?: string | null
    pr_number?: number | null
    additions?: number | null
    deletions?: number | null
    changed_files?: number | null
    event_type: $Enums.EventTypeAnnex
    date_created?: Date | string
    payload?: PayloadAnnexUncheckedCreateNestedOneWithoutEventInput
    revision?: RevisionAnnexUncheckedCreateNestedOneWithoutPr_eventInput
  }

  export type EventAnnexCreateOrConnectWithoutTicketInput = {
    where: EventAnnexWhereUniqueInput
    create: XOR<EventAnnexCreateWithoutTicketInput, EventAnnexUncheckedCreateWithoutTicketInput>
  }

  export type EventAnnexCreateManyTicketInputEnvelope = {
    data: EventAnnexCreateManyTicketInput | EventAnnexCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type ProjectAnnexCreateWithoutTicketsInput = {
    name: string
    repository: string
    events?: EventAnnexCreateNestedManyWithoutProjectInput
    contributors?: UserAnnexCreateNestedManyWithoutProjectsInput
  }

  export type ProjectAnnexUncheckedCreateWithoutTicketsInput = {
    id?: number
    name: string
    repository: string
    events?: EventAnnexUncheckedCreateNestedManyWithoutProjectInput
    contributors?: UserAnnexUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type ProjectAnnexCreateOrConnectWithoutTicketsInput = {
    where: ProjectAnnexWhereUniqueInput
    create: XOR<ProjectAnnexCreateWithoutTicketsInput, ProjectAnnexUncheckedCreateWithoutTicketsInput>
  }

  export type EventAnnexUpsertWithWhereUniqueWithoutTicketInput = {
    where: EventAnnexWhereUniqueInput
    update: XOR<EventAnnexUpdateWithoutTicketInput, EventAnnexUncheckedUpdateWithoutTicketInput>
    create: XOR<EventAnnexCreateWithoutTicketInput, EventAnnexUncheckedCreateWithoutTicketInput>
  }

  export type EventAnnexUpdateWithWhereUniqueWithoutTicketInput = {
    where: EventAnnexWhereUniqueInput
    data: XOR<EventAnnexUpdateWithoutTicketInput, EventAnnexUncheckedUpdateWithoutTicketInput>
  }

  export type EventAnnexUpdateManyWithWhereWithoutTicketInput = {
    where: EventAnnexScalarWhereInput
    data: XOR<EventAnnexUpdateManyMutationInput, EventAnnexUncheckedUpdateManyWithoutTicketInput>
  }

  export type ProjectAnnexUpsertWithoutTicketsInput = {
    update: XOR<ProjectAnnexUpdateWithoutTicketsInput, ProjectAnnexUncheckedUpdateWithoutTicketsInput>
    create: XOR<ProjectAnnexCreateWithoutTicketsInput, ProjectAnnexUncheckedCreateWithoutTicketsInput>
    where?: ProjectAnnexWhereInput
  }

  export type ProjectAnnexUpdateToOneWithWhereWithoutTicketsInput = {
    where?: ProjectAnnexWhereInput
    data: XOR<ProjectAnnexUpdateWithoutTicketsInput, ProjectAnnexUncheckedUpdateWithoutTicketsInput>
  }

  export type ProjectAnnexUpdateWithoutTicketsInput = {
    name?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    events?: EventAnnexUpdateManyWithoutProjectNestedInput
    contributors?: UserAnnexUpdateManyWithoutProjectsNestedInput
  }

  export type ProjectAnnexUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    events?: EventAnnexUncheckedUpdateManyWithoutProjectNestedInput
    contributors?: UserAnnexUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type ProjectAnnexCreateWithoutEventsInput = {
    name: string
    repository: string
    tickets?: TicketAnnexCreateNestedManyWithoutProjectInput
    contributors?: UserAnnexCreateNestedManyWithoutProjectsInput
  }

  export type ProjectAnnexUncheckedCreateWithoutEventsInput = {
    id?: number
    name: string
    repository: string
    tickets?: TicketAnnexUncheckedCreateNestedManyWithoutProjectInput
    contributors?: UserAnnexUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type ProjectAnnexCreateOrConnectWithoutEventsInput = {
    where: ProjectAnnexWhereUniqueInput
    create: XOR<ProjectAnnexCreateWithoutEventsInput, ProjectAnnexUncheckedCreateWithoutEventsInput>
  }

  export type UserAnnexCreateWithoutEventsInput = {
    username: string
    first_name?: string | null
    last_name?: string | null
    projects?: ProjectAnnexCreateNestedManyWithoutContributorsInput
    reviewed_events?: EventAnnexCreateNestedManyWithoutReviewerInput
    authoredRevisions?: RevisionAnnexCreateNestedManyWithoutUserInput
    reviewedRevisions?: RevisionAnnexCreateNestedManyWithoutReviewerInput
  }

  export type UserAnnexUncheckedCreateWithoutEventsInput = {
    id?: number
    username: string
    first_name?: string | null
    last_name?: string | null
    projects?: ProjectAnnexUncheckedCreateNestedManyWithoutContributorsInput
    reviewed_events?: EventAnnexUncheckedCreateNestedManyWithoutReviewerInput
    authoredRevisions?: RevisionAnnexUncheckedCreateNestedManyWithoutUserInput
    reviewedRevisions?: RevisionAnnexUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type UserAnnexCreateOrConnectWithoutEventsInput = {
    where: UserAnnexWhereUniqueInput
    create: XOR<UserAnnexCreateWithoutEventsInput, UserAnnexUncheckedCreateWithoutEventsInput>
  }

  export type UserAnnexCreateWithoutReviewed_eventsInput = {
    username: string
    first_name?: string | null
    last_name?: string | null
    projects?: ProjectAnnexCreateNestedManyWithoutContributorsInput
    events?: EventAnnexCreateNestedManyWithoutAuthorInput
    authoredRevisions?: RevisionAnnexCreateNestedManyWithoutUserInput
    reviewedRevisions?: RevisionAnnexCreateNestedManyWithoutReviewerInput
  }

  export type UserAnnexUncheckedCreateWithoutReviewed_eventsInput = {
    id?: number
    username: string
    first_name?: string | null
    last_name?: string | null
    projects?: ProjectAnnexUncheckedCreateNestedManyWithoutContributorsInput
    events?: EventAnnexUncheckedCreateNestedManyWithoutAuthorInput
    authoredRevisions?: RevisionAnnexUncheckedCreateNestedManyWithoutUserInput
    reviewedRevisions?: RevisionAnnexUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type UserAnnexCreateOrConnectWithoutReviewed_eventsInput = {
    where: UserAnnexWhereUniqueInput
    create: XOR<UserAnnexCreateWithoutReviewed_eventsInput, UserAnnexUncheckedCreateWithoutReviewed_eventsInput>
  }

  export type TicketAnnexCreateWithoutEventsInput = {
    code: string
    project: ProjectAnnexCreateNestedOneWithoutTicketsInput
  }

  export type TicketAnnexUncheckedCreateWithoutEventsInput = {
    id?: number
    code: string
    project_id: number
  }

  export type TicketAnnexCreateOrConnectWithoutEventsInput = {
    where: TicketAnnexWhereUniqueInput
    create: XOR<TicketAnnexCreateWithoutEventsInput, TicketAnnexUncheckedCreateWithoutEventsInput>
  }

  export type PayloadAnnexCreateWithoutEventInput = {
    raw_payload: JsonNullValueInput | InputJsonValue
  }

  export type PayloadAnnexUncheckedCreateWithoutEventInput = {
    id?: number
    raw_payload: JsonNullValueInput | InputJsonValue
  }

  export type PayloadAnnexCreateOrConnectWithoutEventInput = {
    where: PayloadAnnexWhereUniqueInput
    create: XOR<PayloadAnnexCreateWithoutEventInput, PayloadAnnexUncheckedCreateWithoutEventInput>
  }

  export type RevisionAnnexCreateWithoutPr_eventInput = {
    user: UserAnnexCreateNestedOneWithoutAuthoredRevisionsInput
    reviewer?: UserAnnexCreateNestedOneWithoutReviewedRevisionsInput
  }

  export type RevisionAnnexUncheckedCreateWithoutPr_eventInput = {
    id?: number
    user_id: number
    reviewer_id?: number | null
  }

  export type RevisionAnnexCreateOrConnectWithoutPr_eventInput = {
    where: RevisionAnnexWhereUniqueInput
    create: XOR<RevisionAnnexCreateWithoutPr_eventInput, RevisionAnnexUncheckedCreateWithoutPr_eventInput>
  }

  export type ProjectAnnexUpsertWithoutEventsInput = {
    update: XOR<ProjectAnnexUpdateWithoutEventsInput, ProjectAnnexUncheckedUpdateWithoutEventsInput>
    create: XOR<ProjectAnnexCreateWithoutEventsInput, ProjectAnnexUncheckedCreateWithoutEventsInput>
    where?: ProjectAnnexWhereInput
  }

  export type ProjectAnnexUpdateToOneWithWhereWithoutEventsInput = {
    where?: ProjectAnnexWhereInput
    data: XOR<ProjectAnnexUpdateWithoutEventsInput, ProjectAnnexUncheckedUpdateWithoutEventsInput>
  }

  export type ProjectAnnexUpdateWithoutEventsInput = {
    name?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    tickets?: TicketAnnexUpdateManyWithoutProjectNestedInput
    contributors?: UserAnnexUpdateManyWithoutProjectsNestedInput
  }

  export type ProjectAnnexUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    tickets?: TicketAnnexUncheckedUpdateManyWithoutProjectNestedInput
    contributors?: UserAnnexUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type UserAnnexUpsertWithoutEventsInput = {
    update: XOR<UserAnnexUpdateWithoutEventsInput, UserAnnexUncheckedUpdateWithoutEventsInput>
    create: XOR<UserAnnexCreateWithoutEventsInput, UserAnnexUncheckedCreateWithoutEventsInput>
    where?: UserAnnexWhereInput
  }

  export type UserAnnexUpdateToOneWithWhereWithoutEventsInput = {
    where?: UserAnnexWhereInput
    data: XOR<UserAnnexUpdateWithoutEventsInput, UserAnnexUncheckedUpdateWithoutEventsInput>
  }

  export type UserAnnexUpdateWithoutEventsInput = {
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectAnnexUpdateManyWithoutContributorsNestedInput
    reviewed_events?: EventAnnexUpdateManyWithoutReviewerNestedInput
    authoredRevisions?: RevisionAnnexUpdateManyWithoutUserNestedInput
    reviewedRevisions?: RevisionAnnexUpdateManyWithoutReviewerNestedInput
  }

  export type UserAnnexUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectAnnexUncheckedUpdateManyWithoutContributorsNestedInput
    reviewed_events?: EventAnnexUncheckedUpdateManyWithoutReviewerNestedInput
    authoredRevisions?: RevisionAnnexUncheckedUpdateManyWithoutUserNestedInput
    reviewedRevisions?: RevisionAnnexUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type UserAnnexUpsertWithoutReviewed_eventsInput = {
    update: XOR<UserAnnexUpdateWithoutReviewed_eventsInput, UserAnnexUncheckedUpdateWithoutReviewed_eventsInput>
    create: XOR<UserAnnexCreateWithoutReviewed_eventsInput, UserAnnexUncheckedCreateWithoutReviewed_eventsInput>
    where?: UserAnnexWhereInput
  }

  export type UserAnnexUpdateToOneWithWhereWithoutReviewed_eventsInput = {
    where?: UserAnnexWhereInput
    data: XOR<UserAnnexUpdateWithoutReviewed_eventsInput, UserAnnexUncheckedUpdateWithoutReviewed_eventsInput>
  }

  export type UserAnnexUpdateWithoutReviewed_eventsInput = {
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectAnnexUpdateManyWithoutContributorsNestedInput
    events?: EventAnnexUpdateManyWithoutAuthorNestedInput
    authoredRevisions?: RevisionAnnexUpdateManyWithoutUserNestedInput
    reviewedRevisions?: RevisionAnnexUpdateManyWithoutReviewerNestedInput
  }

  export type UserAnnexUncheckedUpdateWithoutReviewed_eventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectAnnexUncheckedUpdateManyWithoutContributorsNestedInput
    events?: EventAnnexUncheckedUpdateManyWithoutAuthorNestedInput
    authoredRevisions?: RevisionAnnexUncheckedUpdateManyWithoutUserNestedInput
    reviewedRevisions?: RevisionAnnexUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type TicketAnnexUpsertWithoutEventsInput = {
    update: XOR<TicketAnnexUpdateWithoutEventsInput, TicketAnnexUncheckedUpdateWithoutEventsInput>
    create: XOR<TicketAnnexCreateWithoutEventsInput, TicketAnnexUncheckedCreateWithoutEventsInput>
    where?: TicketAnnexWhereInput
  }

  export type TicketAnnexUpdateToOneWithWhereWithoutEventsInput = {
    where?: TicketAnnexWhereInput
    data: XOR<TicketAnnexUpdateWithoutEventsInput, TicketAnnexUncheckedUpdateWithoutEventsInput>
  }

  export type TicketAnnexUpdateWithoutEventsInput = {
    code?: StringFieldUpdateOperationsInput | string
    project?: ProjectAnnexUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TicketAnnexUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    project_id?: IntFieldUpdateOperationsInput | number
  }

  export type PayloadAnnexUpsertWithoutEventInput = {
    update: XOR<PayloadAnnexUpdateWithoutEventInput, PayloadAnnexUncheckedUpdateWithoutEventInput>
    create: XOR<PayloadAnnexCreateWithoutEventInput, PayloadAnnexUncheckedCreateWithoutEventInput>
    where?: PayloadAnnexWhereInput
  }

  export type PayloadAnnexUpdateToOneWithWhereWithoutEventInput = {
    where?: PayloadAnnexWhereInput
    data: XOR<PayloadAnnexUpdateWithoutEventInput, PayloadAnnexUncheckedUpdateWithoutEventInput>
  }

  export type PayloadAnnexUpdateWithoutEventInput = {
    raw_payload?: JsonNullValueInput | InputJsonValue
  }

  export type PayloadAnnexUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    raw_payload?: JsonNullValueInput | InputJsonValue
  }

  export type RevisionAnnexUpsertWithoutPr_eventInput = {
    update: XOR<RevisionAnnexUpdateWithoutPr_eventInput, RevisionAnnexUncheckedUpdateWithoutPr_eventInput>
    create: XOR<RevisionAnnexCreateWithoutPr_eventInput, RevisionAnnexUncheckedCreateWithoutPr_eventInput>
    where?: RevisionAnnexWhereInput
  }

  export type RevisionAnnexUpdateToOneWithWhereWithoutPr_eventInput = {
    where?: RevisionAnnexWhereInput
    data: XOR<RevisionAnnexUpdateWithoutPr_eventInput, RevisionAnnexUncheckedUpdateWithoutPr_eventInput>
  }

  export type RevisionAnnexUpdateWithoutPr_eventInput = {
    user?: UserAnnexUpdateOneRequiredWithoutAuthoredRevisionsNestedInput
    reviewer?: UserAnnexUpdateOneWithoutReviewedRevisionsNestedInput
  }

  export type RevisionAnnexUncheckedUpdateWithoutPr_eventInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    reviewer_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EventAnnexCreateWithoutPayloadInput = {
    github_event_id?: string | null
    source: $Enums.SourceTypeAnnex
    branch?: string | null
    pr_number?: number | null
    additions?: number | null
    deletions?: number | null
    changed_files?: number | null
    event_type: $Enums.EventTypeAnnex
    date_created?: Date | string
    project?: ProjectAnnexCreateNestedOneWithoutEventsInput
    author?: UserAnnexCreateNestedOneWithoutEventsInput
    reviewer?: UserAnnexCreateNestedOneWithoutReviewed_eventsInput
    ticket?: TicketAnnexCreateNestedOneWithoutEventsInput
    revision?: RevisionAnnexCreateNestedOneWithoutPr_eventInput
  }

  export type EventAnnexUncheckedCreateWithoutPayloadInput = {
    id?: number
    github_event_id?: string | null
    project_id?: number | null
    author_id?: number | null
    reviewer_id?: number | null
    ticket_id?: number | null
    source: $Enums.SourceTypeAnnex
    branch?: string | null
    pr_number?: number | null
    additions?: number | null
    deletions?: number | null
    changed_files?: number | null
    event_type: $Enums.EventTypeAnnex
    date_created?: Date | string
    revision?: RevisionAnnexUncheckedCreateNestedOneWithoutPr_eventInput
  }

  export type EventAnnexCreateOrConnectWithoutPayloadInput = {
    where: EventAnnexWhereUniqueInput
    create: XOR<EventAnnexCreateWithoutPayloadInput, EventAnnexUncheckedCreateWithoutPayloadInput>
  }

  export type EventAnnexUpsertWithoutPayloadInput = {
    update: XOR<EventAnnexUpdateWithoutPayloadInput, EventAnnexUncheckedUpdateWithoutPayloadInput>
    create: XOR<EventAnnexCreateWithoutPayloadInput, EventAnnexUncheckedCreateWithoutPayloadInput>
    where?: EventAnnexWhereInput
  }

  export type EventAnnexUpdateToOneWithWhereWithoutPayloadInput = {
    where?: EventAnnexWhereInput
    data: XOR<EventAnnexUpdateWithoutPayloadInput, EventAnnexUncheckedUpdateWithoutPayloadInput>
  }

  export type EventAnnexUpdateWithoutPayloadInput = {
    github_event_id?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumSourceTypeAnnexFieldUpdateOperationsInput | $Enums.SourceTypeAnnex
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeAnnexFieldUpdateOperationsInput | $Enums.EventTypeAnnex
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectAnnexUpdateOneWithoutEventsNestedInput
    author?: UserAnnexUpdateOneWithoutEventsNestedInput
    reviewer?: UserAnnexUpdateOneWithoutReviewed_eventsNestedInput
    ticket?: TicketAnnexUpdateOneWithoutEventsNestedInput
    revision?: RevisionAnnexUpdateOneWithoutPr_eventNestedInput
  }

  export type EventAnnexUncheckedUpdateWithoutPayloadInput = {
    id?: IntFieldUpdateOperationsInput | number
    github_event_id?: NullableStringFieldUpdateOperationsInput | string | null
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    author_id?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_id?: NullableIntFieldUpdateOperationsInput | number | null
    source?: EnumSourceTypeAnnexFieldUpdateOperationsInput | $Enums.SourceTypeAnnex
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeAnnexFieldUpdateOperationsInput | $Enums.EventTypeAnnex
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    revision?: RevisionAnnexUncheckedUpdateOneWithoutPr_eventNestedInput
  }

  export type UserAnnexCreateWithoutAuthoredRevisionsInput = {
    username: string
    first_name?: string | null
    last_name?: string | null
    projects?: ProjectAnnexCreateNestedManyWithoutContributorsInput
    events?: EventAnnexCreateNestedManyWithoutAuthorInput
    reviewed_events?: EventAnnexCreateNestedManyWithoutReviewerInput
    reviewedRevisions?: RevisionAnnexCreateNestedManyWithoutReviewerInput
  }

  export type UserAnnexUncheckedCreateWithoutAuthoredRevisionsInput = {
    id?: number
    username: string
    first_name?: string | null
    last_name?: string | null
    projects?: ProjectAnnexUncheckedCreateNestedManyWithoutContributorsInput
    events?: EventAnnexUncheckedCreateNestedManyWithoutAuthorInput
    reviewed_events?: EventAnnexUncheckedCreateNestedManyWithoutReviewerInput
    reviewedRevisions?: RevisionAnnexUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type UserAnnexCreateOrConnectWithoutAuthoredRevisionsInput = {
    where: UserAnnexWhereUniqueInput
    create: XOR<UserAnnexCreateWithoutAuthoredRevisionsInput, UserAnnexUncheckedCreateWithoutAuthoredRevisionsInput>
  }

  export type UserAnnexCreateWithoutReviewedRevisionsInput = {
    username: string
    first_name?: string | null
    last_name?: string | null
    projects?: ProjectAnnexCreateNestedManyWithoutContributorsInput
    events?: EventAnnexCreateNestedManyWithoutAuthorInput
    reviewed_events?: EventAnnexCreateNestedManyWithoutReviewerInput
    authoredRevisions?: RevisionAnnexCreateNestedManyWithoutUserInput
  }

  export type UserAnnexUncheckedCreateWithoutReviewedRevisionsInput = {
    id?: number
    username: string
    first_name?: string | null
    last_name?: string | null
    projects?: ProjectAnnexUncheckedCreateNestedManyWithoutContributorsInput
    events?: EventAnnexUncheckedCreateNestedManyWithoutAuthorInput
    reviewed_events?: EventAnnexUncheckedCreateNestedManyWithoutReviewerInput
    authoredRevisions?: RevisionAnnexUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserAnnexCreateOrConnectWithoutReviewedRevisionsInput = {
    where: UserAnnexWhereUniqueInput
    create: XOR<UserAnnexCreateWithoutReviewedRevisionsInput, UserAnnexUncheckedCreateWithoutReviewedRevisionsInput>
  }

  export type EventAnnexCreateWithoutRevisionInput = {
    github_event_id?: string | null
    source: $Enums.SourceTypeAnnex
    branch?: string | null
    pr_number?: number | null
    additions?: number | null
    deletions?: number | null
    changed_files?: number | null
    event_type: $Enums.EventTypeAnnex
    date_created?: Date | string
    project?: ProjectAnnexCreateNestedOneWithoutEventsInput
    author?: UserAnnexCreateNestedOneWithoutEventsInput
    reviewer?: UserAnnexCreateNestedOneWithoutReviewed_eventsInput
    ticket?: TicketAnnexCreateNestedOneWithoutEventsInput
    payload?: PayloadAnnexCreateNestedOneWithoutEventInput
  }

  export type EventAnnexUncheckedCreateWithoutRevisionInput = {
    id?: number
    github_event_id?: string | null
    project_id?: number | null
    author_id?: number | null
    reviewer_id?: number | null
    ticket_id?: number | null
    source: $Enums.SourceTypeAnnex
    branch?: string | null
    pr_number?: number | null
    additions?: number | null
    deletions?: number | null
    changed_files?: number | null
    event_type: $Enums.EventTypeAnnex
    date_created?: Date | string
    payload?: PayloadAnnexUncheckedCreateNestedOneWithoutEventInput
  }

  export type EventAnnexCreateOrConnectWithoutRevisionInput = {
    where: EventAnnexWhereUniqueInput
    create: XOR<EventAnnexCreateWithoutRevisionInput, EventAnnexUncheckedCreateWithoutRevisionInput>
  }

  export type UserAnnexUpsertWithoutAuthoredRevisionsInput = {
    update: XOR<UserAnnexUpdateWithoutAuthoredRevisionsInput, UserAnnexUncheckedUpdateWithoutAuthoredRevisionsInput>
    create: XOR<UserAnnexCreateWithoutAuthoredRevisionsInput, UserAnnexUncheckedCreateWithoutAuthoredRevisionsInput>
    where?: UserAnnexWhereInput
  }

  export type UserAnnexUpdateToOneWithWhereWithoutAuthoredRevisionsInput = {
    where?: UserAnnexWhereInput
    data: XOR<UserAnnexUpdateWithoutAuthoredRevisionsInput, UserAnnexUncheckedUpdateWithoutAuthoredRevisionsInput>
  }

  export type UserAnnexUpdateWithoutAuthoredRevisionsInput = {
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectAnnexUpdateManyWithoutContributorsNestedInput
    events?: EventAnnexUpdateManyWithoutAuthorNestedInput
    reviewed_events?: EventAnnexUpdateManyWithoutReviewerNestedInput
    reviewedRevisions?: RevisionAnnexUpdateManyWithoutReviewerNestedInput
  }

  export type UserAnnexUncheckedUpdateWithoutAuthoredRevisionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectAnnexUncheckedUpdateManyWithoutContributorsNestedInput
    events?: EventAnnexUncheckedUpdateManyWithoutAuthorNestedInput
    reviewed_events?: EventAnnexUncheckedUpdateManyWithoutReviewerNestedInput
    reviewedRevisions?: RevisionAnnexUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type UserAnnexUpsertWithoutReviewedRevisionsInput = {
    update: XOR<UserAnnexUpdateWithoutReviewedRevisionsInput, UserAnnexUncheckedUpdateWithoutReviewedRevisionsInput>
    create: XOR<UserAnnexCreateWithoutReviewedRevisionsInput, UserAnnexUncheckedCreateWithoutReviewedRevisionsInput>
    where?: UserAnnexWhereInput
  }

  export type UserAnnexUpdateToOneWithWhereWithoutReviewedRevisionsInput = {
    where?: UserAnnexWhereInput
    data: XOR<UserAnnexUpdateWithoutReviewedRevisionsInput, UserAnnexUncheckedUpdateWithoutReviewedRevisionsInput>
  }

  export type UserAnnexUpdateWithoutReviewedRevisionsInput = {
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectAnnexUpdateManyWithoutContributorsNestedInput
    events?: EventAnnexUpdateManyWithoutAuthorNestedInput
    reviewed_events?: EventAnnexUpdateManyWithoutReviewerNestedInput
    authoredRevisions?: RevisionAnnexUpdateManyWithoutUserNestedInput
  }

  export type UserAnnexUncheckedUpdateWithoutReviewedRevisionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectAnnexUncheckedUpdateManyWithoutContributorsNestedInput
    events?: EventAnnexUncheckedUpdateManyWithoutAuthorNestedInput
    reviewed_events?: EventAnnexUncheckedUpdateManyWithoutReviewerNestedInput
    authoredRevisions?: RevisionAnnexUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventAnnexUpsertWithoutRevisionInput = {
    update: XOR<EventAnnexUpdateWithoutRevisionInput, EventAnnexUncheckedUpdateWithoutRevisionInput>
    create: XOR<EventAnnexCreateWithoutRevisionInput, EventAnnexUncheckedCreateWithoutRevisionInput>
    where?: EventAnnexWhereInput
  }

  export type EventAnnexUpdateToOneWithWhereWithoutRevisionInput = {
    where?: EventAnnexWhereInput
    data: XOR<EventAnnexUpdateWithoutRevisionInput, EventAnnexUncheckedUpdateWithoutRevisionInput>
  }

  export type EventAnnexUpdateWithoutRevisionInput = {
    github_event_id?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumSourceTypeAnnexFieldUpdateOperationsInput | $Enums.SourceTypeAnnex
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeAnnexFieldUpdateOperationsInput | $Enums.EventTypeAnnex
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectAnnexUpdateOneWithoutEventsNestedInput
    author?: UserAnnexUpdateOneWithoutEventsNestedInput
    reviewer?: UserAnnexUpdateOneWithoutReviewed_eventsNestedInput
    ticket?: TicketAnnexUpdateOneWithoutEventsNestedInput
    payload?: PayloadAnnexUpdateOneWithoutEventNestedInput
  }

  export type EventAnnexUncheckedUpdateWithoutRevisionInput = {
    id?: IntFieldUpdateOperationsInput | number
    github_event_id?: NullableStringFieldUpdateOperationsInput | string | null
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    author_id?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_id?: NullableIntFieldUpdateOperationsInput | number | null
    source?: EnumSourceTypeAnnexFieldUpdateOperationsInput | $Enums.SourceTypeAnnex
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeAnnexFieldUpdateOperationsInput | $Enums.EventTypeAnnex
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: PayloadAnnexUncheckedUpdateOneWithoutEventNestedInput
  }

  export type EventAnnexCreateManyProjectInput = {
    id?: number
    github_event_id?: string | null
    author_id?: number | null
    reviewer_id?: number | null
    ticket_id?: number | null
    source: $Enums.SourceTypeAnnex
    branch?: string | null
    pr_number?: number | null
    additions?: number | null
    deletions?: number | null
    changed_files?: number | null
    event_type: $Enums.EventTypeAnnex
    date_created?: Date | string
  }

  export type TicketAnnexCreateManyProjectInput = {
    id?: number
    code: string
  }

  export type EventAnnexUpdateWithoutProjectInput = {
    github_event_id?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumSourceTypeAnnexFieldUpdateOperationsInput | $Enums.SourceTypeAnnex
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeAnnexFieldUpdateOperationsInput | $Enums.EventTypeAnnex
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserAnnexUpdateOneWithoutEventsNestedInput
    reviewer?: UserAnnexUpdateOneWithoutReviewed_eventsNestedInput
    ticket?: TicketAnnexUpdateOneWithoutEventsNestedInput
    payload?: PayloadAnnexUpdateOneWithoutEventNestedInput
    revision?: RevisionAnnexUpdateOneWithoutPr_eventNestedInput
  }

  export type EventAnnexUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    github_event_id?: NullableStringFieldUpdateOperationsInput | string | null
    author_id?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_id?: NullableIntFieldUpdateOperationsInput | number | null
    source?: EnumSourceTypeAnnexFieldUpdateOperationsInput | $Enums.SourceTypeAnnex
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeAnnexFieldUpdateOperationsInput | $Enums.EventTypeAnnex
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: PayloadAnnexUncheckedUpdateOneWithoutEventNestedInput
    revision?: RevisionAnnexUncheckedUpdateOneWithoutPr_eventNestedInput
  }

  export type EventAnnexUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    github_event_id?: NullableStringFieldUpdateOperationsInput | string | null
    author_id?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_id?: NullableIntFieldUpdateOperationsInput | number | null
    source?: EnumSourceTypeAnnexFieldUpdateOperationsInput | $Enums.SourceTypeAnnex
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeAnnexFieldUpdateOperationsInput | $Enums.EventTypeAnnex
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketAnnexUpdateWithoutProjectInput = {
    code?: StringFieldUpdateOperationsInput | string
    events?: EventAnnexUpdateManyWithoutTicketNestedInput
  }

  export type TicketAnnexUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    events?: EventAnnexUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketAnnexUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
  }

  export type UserAnnexUpdateWithoutProjectsInput = {
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    events?: EventAnnexUpdateManyWithoutAuthorNestedInput
    reviewed_events?: EventAnnexUpdateManyWithoutReviewerNestedInput
    authoredRevisions?: RevisionAnnexUpdateManyWithoutUserNestedInput
    reviewedRevisions?: RevisionAnnexUpdateManyWithoutReviewerNestedInput
  }

  export type UserAnnexUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    events?: EventAnnexUncheckedUpdateManyWithoutAuthorNestedInput
    reviewed_events?: EventAnnexUncheckedUpdateManyWithoutReviewerNestedInput
    authoredRevisions?: RevisionAnnexUncheckedUpdateManyWithoutUserNestedInput
    reviewedRevisions?: RevisionAnnexUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type UserAnnexUncheckedUpdateManyWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventAnnexCreateManyAuthorInput = {
    id?: number
    github_event_id?: string | null
    project_id?: number | null
    reviewer_id?: number | null
    ticket_id?: number | null
    source: $Enums.SourceTypeAnnex
    branch?: string | null
    pr_number?: number | null
    additions?: number | null
    deletions?: number | null
    changed_files?: number | null
    event_type: $Enums.EventTypeAnnex
    date_created?: Date | string
  }

  export type EventAnnexCreateManyReviewerInput = {
    id?: number
    github_event_id?: string | null
    project_id?: number | null
    author_id?: number | null
    ticket_id?: number | null
    source: $Enums.SourceTypeAnnex
    branch?: string | null
    pr_number?: number | null
    additions?: number | null
    deletions?: number | null
    changed_files?: number | null
    event_type: $Enums.EventTypeAnnex
    date_created?: Date | string
  }

  export type RevisionAnnexCreateManyUserInput = {
    id?: number
    reviewer_id?: number | null
    pr_event_id: number
  }

  export type RevisionAnnexCreateManyReviewerInput = {
    id?: number
    user_id: number
    pr_event_id: number
  }

  export type ProjectAnnexUpdateWithoutContributorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    events?: EventAnnexUpdateManyWithoutProjectNestedInput
    tickets?: TicketAnnexUpdateManyWithoutProjectNestedInput
  }

  export type ProjectAnnexUncheckedUpdateWithoutContributorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    events?: EventAnnexUncheckedUpdateManyWithoutProjectNestedInput
    tickets?: TicketAnnexUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectAnnexUncheckedUpdateManyWithoutContributorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
  }

  export type EventAnnexUpdateWithoutAuthorInput = {
    github_event_id?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumSourceTypeAnnexFieldUpdateOperationsInput | $Enums.SourceTypeAnnex
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeAnnexFieldUpdateOperationsInput | $Enums.EventTypeAnnex
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectAnnexUpdateOneWithoutEventsNestedInput
    reviewer?: UserAnnexUpdateOneWithoutReviewed_eventsNestedInput
    ticket?: TicketAnnexUpdateOneWithoutEventsNestedInput
    payload?: PayloadAnnexUpdateOneWithoutEventNestedInput
    revision?: RevisionAnnexUpdateOneWithoutPr_eventNestedInput
  }

  export type EventAnnexUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    github_event_id?: NullableStringFieldUpdateOperationsInput | string | null
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_id?: NullableIntFieldUpdateOperationsInput | number | null
    source?: EnumSourceTypeAnnexFieldUpdateOperationsInput | $Enums.SourceTypeAnnex
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeAnnexFieldUpdateOperationsInput | $Enums.EventTypeAnnex
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: PayloadAnnexUncheckedUpdateOneWithoutEventNestedInput
    revision?: RevisionAnnexUncheckedUpdateOneWithoutPr_eventNestedInput
  }

  export type EventAnnexUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    github_event_id?: NullableStringFieldUpdateOperationsInput | string | null
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_id?: NullableIntFieldUpdateOperationsInput | number | null
    source?: EnumSourceTypeAnnexFieldUpdateOperationsInput | $Enums.SourceTypeAnnex
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeAnnexFieldUpdateOperationsInput | $Enums.EventTypeAnnex
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventAnnexUpdateWithoutReviewerInput = {
    github_event_id?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumSourceTypeAnnexFieldUpdateOperationsInput | $Enums.SourceTypeAnnex
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeAnnexFieldUpdateOperationsInput | $Enums.EventTypeAnnex
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectAnnexUpdateOneWithoutEventsNestedInput
    author?: UserAnnexUpdateOneWithoutEventsNestedInput
    ticket?: TicketAnnexUpdateOneWithoutEventsNestedInput
    payload?: PayloadAnnexUpdateOneWithoutEventNestedInput
    revision?: RevisionAnnexUpdateOneWithoutPr_eventNestedInput
  }

  export type EventAnnexUncheckedUpdateWithoutReviewerInput = {
    id?: IntFieldUpdateOperationsInput | number
    github_event_id?: NullableStringFieldUpdateOperationsInput | string | null
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    author_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_id?: NullableIntFieldUpdateOperationsInput | number | null
    source?: EnumSourceTypeAnnexFieldUpdateOperationsInput | $Enums.SourceTypeAnnex
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeAnnexFieldUpdateOperationsInput | $Enums.EventTypeAnnex
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: PayloadAnnexUncheckedUpdateOneWithoutEventNestedInput
    revision?: RevisionAnnexUncheckedUpdateOneWithoutPr_eventNestedInput
  }

  export type EventAnnexUncheckedUpdateManyWithoutReviewerInput = {
    id?: IntFieldUpdateOperationsInput | number
    github_event_id?: NullableStringFieldUpdateOperationsInput | string | null
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    author_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_id?: NullableIntFieldUpdateOperationsInput | number | null
    source?: EnumSourceTypeAnnexFieldUpdateOperationsInput | $Enums.SourceTypeAnnex
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeAnnexFieldUpdateOperationsInput | $Enums.EventTypeAnnex
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevisionAnnexUpdateWithoutUserInput = {
    reviewer?: UserAnnexUpdateOneWithoutReviewedRevisionsNestedInput
    pr_event?: EventAnnexUpdateOneRequiredWithoutRevisionNestedInput
  }

  export type RevisionAnnexUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewer_id?: NullableIntFieldUpdateOperationsInput | number | null
    pr_event_id?: IntFieldUpdateOperationsInput | number
  }

  export type RevisionAnnexUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewer_id?: NullableIntFieldUpdateOperationsInput | number | null
    pr_event_id?: IntFieldUpdateOperationsInput | number
  }

  export type RevisionAnnexUpdateWithoutReviewerInput = {
    user?: UserAnnexUpdateOneRequiredWithoutAuthoredRevisionsNestedInput
    pr_event?: EventAnnexUpdateOneRequiredWithoutRevisionNestedInput
  }

  export type RevisionAnnexUncheckedUpdateWithoutReviewerInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    pr_event_id?: IntFieldUpdateOperationsInput | number
  }

  export type RevisionAnnexUncheckedUpdateManyWithoutReviewerInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    pr_event_id?: IntFieldUpdateOperationsInput | number
  }

  export type EventAnnexCreateManyTicketInput = {
    id?: number
    github_event_id?: string | null
    project_id?: number | null
    author_id?: number | null
    reviewer_id?: number | null
    source: $Enums.SourceTypeAnnex
    branch?: string | null
    pr_number?: number | null
    additions?: number | null
    deletions?: number | null
    changed_files?: number | null
    event_type: $Enums.EventTypeAnnex
    date_created?: Date | string
  }

  export type EventAnnexUpdateWithoutTicketInput = {
    github_event_id?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumSourceTypeAnnexFieldUpdateOperationsInput | $Enums.SourceTypeAnnex
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeAnnexFieldUpdateOperationsInput | $Enums.EventTypeAnnex
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectAnnexUpdateOneWithoutEventsNestedInput
    author?: UserAnnexUpdateOneWithoutEventsNestedInput
    reviewer?: UserAnnexUpdateOneWithoutReviewed_eventsNestedInput
    payload?: PayloadAnnexUpdateOneWithoutEventNestedInput
    revision?: RevisionAnnexUpdateOneWithoutPr_eventNestedInput
  }

  export type EventAnnexUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    github_event_id?: NullableStringFieldUpdateOperationsInput | string | null
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    author_id?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_id?: NullableIntFieldUpdateOperationsInput | number | null
    source?: EnumSourceTypeAnnexFieldUpdateOperationsInput | $Enums.SourceTypeAnnex
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeAnnexFieldUpdateOperationsInput | $Enums.EventTypeAnnex
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: PayloadAnnexUncheckedUpdateOneWithoutEventNestedInput
    revision?: RevisionAnnexUncheckedUpdateOneWithoutPr_eventNestedInput
  }

  export type EventAnnexUncheckedUpdateManyWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    github_event_id?: NullableStringFieldUpdateOperationsInput | string | null
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    author_id?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_id?: NullableIntFieldUpdateOperationsInput | number | null
    source?: EnumSourceTypeAnnexFieldUpdateOperationsInput | $Enums.SourceTypeAnnex
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeAnnexFieldUpdateOperationsInput | $Enums.EventTypeAnnex
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
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